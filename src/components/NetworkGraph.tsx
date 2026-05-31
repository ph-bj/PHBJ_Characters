import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as d3 from 'd3';
import { Maximize, Minimize } from 'lucide-react';
import { Character, Relationship } from '../types';

const ROLE_ORDER = ['performer', 'scholar', 'villain', 'female', 'official', 'servant', 'deceased', 'minor'];

const ROLE_COLORS: Record<string, string> = {
  scholar: '#355070',
  performer: '#8c3b3b',
  official: '#8a6a2f',
  villain: '#3f2f2f',
  minor: '#3f6b63',
  female: '#6b4a7d',
  servant: '#4d6a3a',
  deceased: '#5b5f67',
  Other: '#7a5c43'
};

const ROLE_LABELS: Record<string, { en: string, zh: string }> = {
  scholar: { en: 'Scholar', zh: '名士' },
  performer: { en: 'Performer', zh: '伶人' },
  official: { en: 'Official', zh: '官员' },
  villain: { en: 'Villain', zh: '反派' },
  minor: { en: 'Minor', zh: '配角' },
  female: { en: 'Female', zh: '女性' },
  servant: { en: 'Servant', zh: '仆从' },
  deceased: { en: 'Deceased', zh: '已故' }
};

interface NetworkGraphProps {
  characters: Character[];
  relationships: Relationship[];
  lang: 'en' | 'zh';
  onNodeClick: (character: Character) => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export default function NetworkGraph({ characters, relationships, lang, onNodeClick, onFullscreenChange }: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    onFullscreenChange?.(isFullscreen);
  }, [isFullscreen, onFullscreenChange]);

  useEffect(() => {
    return () => {
      onFullscreenChange?.(false);
    };
  }, [onFullscreenChange]);

  useLayoutEffect(() => {
    if (!isFullscreen) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previousBody = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      left: bodyStyle.left,
      right: bodyStyle.right,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
      touchAction: bodyStyle.touchAction,
      overscrollBehavior: bodyStyle.overscrollBehavior,
    };
    const previousHtml = {
      overflow: htmlStyle.overflow,
      position: htmlStyle.position,
      width: htmlStyle.width,
      overscrollBehavior: htmlStyle.overscrollBehavior,
    };

    const preventBackgroundScroll = (event: TouchEvent | WheelEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('[data-network-graph="true"]')) {
        return;
      }
      event.preventDefault();
    };

    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = '0';
    bodyStyle.right = '0';
    bodyStyle.width = '100%';
    bodyStyle.overflow = 'hidden';
    bodyStyle.overscrollBehavior = 'none';
    htmlStyle.overflow = 'hidden';
    htmlStyle.position = 'fixed';
    htmlStyle.width = '100%';
    htmlStyle.overscrollBehavior = 'none';

    window.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
    window.addEventListener('wheel', preventBackgroundScroll, { passive: false });

    return () => {
      window.removeEventListener('touchmove', preventBackgroundScroll);
      window.removeEventListener('wheel', preventBackgroundScroll);
      bodyStyle.position = previousBody.position;
      bodyStyle.top = previousBody.top;
      bodyStyle.left = previousBody.left;
      bodyStyle.right = previousBody.right;
      bodyStyle.width = previousBody.width;
      bodyStyle.overflow = previousBody.overflow;
      bodyStyle.touchAction = previousBody.touchAction;
      bodyStyle.overscrollBehavior = previousBody.overscrollBehavior;
      htmlStyle.overflow = previousHtml.overflow;
      htmlStyle.position = previousHtml.position;
      htmlStyle.width = previousHtml.width;
      htmlStyle.overscrollBehavior = previousHtml.overscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    let { width, height } = container.getBoundingClientRect();
    const nodeRadius = 25;

    const nodes = characters.map(c => ({ ...c }));
    const links = relationships.map(r => ({ ...r }));

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    svg.style("touch-action", "none");

    let lockedNodeId: string | null = null;
    let lastTapTime = 0;
    let lastTapNodeId: string | null = null;
    let lastTouchPointerUpTime = 0;
    let tapStart: { id: string; x: number; y: number } | null = null;
    const DOUBLE_TAP_MS = 400;
    const TAP_MOVE_THRESHOLD = 12;

    const activateNode = (event: any, d: any) => {
      if (event.defaultPrevented) return;
      event.stopPropagation();

      const now = Date.now();
      if (lastTapNodeId === d.id && now - lastTapTime < DOUBLE_TAP_MS) {
        lastTapTime = 0;
        lastTapNodeId = null;
        onNodeClick(d);
        return;
      }

      lastTapTime = now;
      lastTapNodeId = d.id;
      lockedNodeId = d.id;
      applyHoverStyles(d.id);
    };

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40));

    const g = svg.append("g");

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width <= 0 || height <= 0) return;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
      simulation.force("center", d3.forceCenter(width / 2, height / 2));
      simulation.alpha(0.3).restart();
    };

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    resizeObserver.observe(container);

    const onVisualViewportChange = () => updateDimensions();
    window.visualViewport?.addEventListener('resize', onVisualViewportChange);
    window.visualViewport?.addEventListener('scroll', onVisualViewportChange);

    // Add zoom
    const zoom = d3.zoom()
      .filter((event) => {
        if (event.type === 'dblclick') return false;
        return (!event.ctrlKey || event.type === 'wheel') && !event.button;
      })
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });
    
    svg.call(zoom as any);
    svg.on("dblclick.zoom", null);

    const link = g.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#8b4513")
      .attr("stroke-opacity", 0.3)
      .attr("stroke-width", 1.5);

    const linkText = g.append("g")
      .selectAll("text")
      .data(links)
      .join("text")
      .attr("font-size", "8px")
      .attr("fill", "#5d5048")
      .attr("text-anchor", "middle")
      .attr("dy", -5)
      .text((d: any) => lang === 'zh' ? d.typeZh : d.type);

    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("pointerdown", (_event, d: any) => {
        tapStart = { id: d.id, x: _event.clientX, y: _event.clientY };
      })
      .on("pointerup", (event, d: any) => {
        if (event.pointerType !== 'touch') return;
        if (!tapStart || tapStart.id !== d.id) return;
        const moved = Math.hypot(event.clientX - tapStart.x, event.clientY - tapStart.y);
        tapStart = null;
        if (moved > TAP_MOVE_THRESHOLD) return;
        lastTouchPointerUpTime = Date.now();
        activateNode(event, d);
      })
      .on("click", (event, d: any) => {
        if (event.pointerType === 'touch') {
          // pointerup handles most touch taps; click is a fallback (e.g. iOS fullscreen).
          if (Date.now() - lastTouchPointerUpTime < 500) return;
          activateNode(event, d);
          return;
        }
        activateNode(event, d);
      })
      .call(d3.drag()
        .clickDistance(TAP_MOVE_THRESHOLD)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    // Opaque background circle to hide lines behind the node
    node.append("circle")
      .attr("r", nodeRadius)
      .attr("fill", "#f4ecd8");

    node.append("circle")
      .attr("r", nodeRadius)
      .attr("fill", (d: any) => `${ROLE_COLORS[d.role] || ROLE_COLORS.Other}22`) // 22 is ~13% opacity for parchment feel
      .attr("stroke", (d: any) => ROLE_COLORS[d.role] || ROLE_COLORS.Other)
      .attr("stroke-width", 1.5);

    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("font-size", "9px")
      .attr("font-weight", "bold")
      .attr("fill", (d: any) => ROLE_COLORS[d.role] || ROLE_COLORS.Other)
      .text((d: any) => d.name.split(' ')[0]);

    const getNodeId = (endpoint: any) =>
      typeof endpoint === 'string' ? endpoint : endpoint?.id;

    const resetHoverStyles = () => {
      node
        .style("opacity", 1);
      link
        .attr("stroke-opacity", 0.3)
        .attr("stroke-width", 1.5);
      linkText
        .style("opacity", 1);
    };

    const applyHoverStyles = (hoveredId: string) => {
      const connectedIds = new Set<string>([hoveredId]);

      links.forEach((l: any) => {
        const sourceId = getNodeId(l.source);
        const targetId = getNodeId(l.target);
        if (sourceId === hoveredId || targetId === hoveredId) {
          if (sourceId) connectedIds.add(sourceId);
          if (targetId) connectedIds.add(targetId);
        }
      });

      node
        .style("opacity", (d: any) => (connectedIds.has(d.id) ? 1 : 0.2));

      link
        .attr("stroke-opacity", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? 0.95 : 0.08;
        })
        .attr("stroke-width", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? 1 : 1;
        });

      linkText
        .style("opacity", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? 1 : 0.1;
        });
    };

    node
      .on("mouseenter", (_event, d: any) => {
        if (lockedNodeId) return;
        applyHoverStyles(d.id);
      })
      .on("mouseleave", () => {
        if (lockedNodeId) return;
        resetHoverStyles();
      });

    // Click empty canvas to clear locked highlight.
    svg.on("click", () => {
      lockedNodeId = null;
      resetHoverStyles();
    });

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.hypot(dx, dy) || 1;
          return d.source.x + (dx / dist) * nodeRadius;
        })
        .attr("y1", (d: any) => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.hypot(dx, dy) || 1;
          return d.source.y + (dy / dist) * nodeRadius;
        })
        .attr("x2", (d: any) => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.hypot(dx, dy) || 1;
          return d.target.x - (dx / dist) * nodeRadius;
        })
        .attr("y2", (d: any) => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.hypot(dx, dy) || 1;
          return d.target.y - (dy / dist) * nodeRadius;
        });

      linkText
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);

      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // iOS Safari may report 0 dimensions until the next frame after entering fullscreen.
    requestAnimationFrame(updateDimensions);

    return () => {
      simulation.stop();
      resizeObserver.disconnect();
      window.visualViewport?.removeEventListener('resize', onVisualViewportChange);
      window.visualViewport?.removeEventListener('scroll', onVisualViewportChange);
    };
  }, [characters, relationships, lang, isFullscreen, onNodeClick]);

  const toggleFullscreen = () => setIsFullscreen((current) => !current);

  const graphMarkup = (
    <div
      ref={containerRef}
      data-network-graph="true"
      className={
        isFullscreen
          ? "fixed inset-0 z-[100] w-full h-[100dvh] max-h-[100dvh] parchment overflow-hidden pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]"
          : "w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[800px] parchment border-4 border-double border-[#d4c5a9] rounded-sm overflow-hidden relative"
      }
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b4513]">
          {lang === 'en' ? 'Character Network' : '人物关系图谱'}
        </h3>
        <p className="text-[10px] text-[#5d5048] italic">
          {lang === 'en' ? 'Drag nodes to explore relationships' : '拖动节点探索人物关系'}
        </p>
      </div>
      <div className="absolute top-4 right-4 z-10 bg-[#f4ecd8]/80 p-2 rounded border border-[#d4c5a9] backdrop-blur-sm max-w-[120px] md:max-w-[160px] lg:max-w-none pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-1">
          {ROLE_ORDER.map((role) => {
            const labels = ROLE_LABELS[role];
            if (!labels) return null;
            return (
            <div key={role} className="flex items-center gap-2">
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border"
                style={{ 
                  backgroundColor: `${ROLE_COLORS[role]}22`,
                  borderColor: ROLE_COLORS[role]
                }}
              />
              <span className="text-[8px] sm:text-[10px] font-medium text-[#5d5048] truncate">
                {lang === 'en' ? labels.en : labels.zh}
              </span>
            </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          toggleFullscreen();
        }}
        className="absolute bottom-4 right-4 z-20 p-2.5 bg-[#f4ecd8] hover:bg-[#d4c5a9] border border-[#8b4513]/30 rounded-full shadow-md transition-colors text-[#5d5048] touch-manipulation"
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))', right: 'max(1rem, env(safe-area-inset-right))' }}
        title={isFullscreen ? (lang === 'en' ? 'Exit Fullscreen' : '退出全屏') : (lang === 'en' ? 'Fullscreen' : '全屏')}
        aria-label={isFullscreen ? (lang === 'en' ? 'Exit Fullscreen' : '退出全屏') : (lang === 'en' ? 'Fullscreen' : '全屏')}
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
      <svg
        ref={svgRef}
        className="w-full h-full cursor-move"
      />
    </div>
  );

  if (isFullscreen) {
    return (
      <>
        <div
          className="w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[800px] parchment border-4 border-double border-[#d4c5a9] rounded-sm overflow-hidden relative opacity-40"
          aria-hidden="true"
        />
        {createPortal(graphMarkup, document.body)}
      </>
    );
  }

  return graphMarkup;
}
