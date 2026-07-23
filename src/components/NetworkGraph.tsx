import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as d3 from 'd3';
import { Activity, Maximize, Minimize } from 'lucide-react';
import { Character, Relationship } from '../types';
import { getCoOccurrenceEdges } from '../cooccurrence';
import { useMobileUnload } from '../hooks/useMobileUnload';

type GraphMode = 'curated' | 'cooccurrence';

const CO_OCCURRENCE_THRESHOLDS = [3, 5, 8, 15];

const ROLE_ORDER = ['performer', 'scholar', 'villain', 'female', 'official', 'servant', 'deceased', 'minor'];

const ROLE_LABELS: Record<string, { en: string, zh: string }> = {
  scholar: { en: 'Scholar', zh: '名士' },
  performer: { en: 'Performer', zh: '伶人' },
  official: { en: 'Official', zh: '官员' },
  villain: { en: 'Villain', zh: '反派' },
  minor: { en: 'Minor', zh: '配角' },
  female: { en: 'Female', zh: '女性' },
  servant: { en: 'Servant', zh: '仆从' },
  deceased: { en: 'Deceased', zh: '已故' },
  Other: { en: 'Other', zh: '其他' },
};

const getRoleColorVar = (role: string) => {
  const key = ROLE_LABELS[role] ? role : 'Other';
  return `var(--role-${key})`;
};

const getRoleBgColorVar = (role: string) => {
  const key = ROLE_LABELS[role] ? role : 'Other';
  return `var(--role-${key}-bg)`;
};

const ENGLISH_CHARACTER_NAME_FALLBACKS: Record<string, string> = {
  'char-85': 'Doctor Wang',
  'char-87': 'Madam Lu (Wang household)',

  'char-96': 'Madam Lu (Sun household)',
  'char-99': 'Miss Wang',
  'char-108': 'Page Boy',
  'char-109': 'Maidservant (Gatekeeper)',
  'char-110': 'Household Maid (Clothing)',
  'char-111': 'Young Maid (Ziyu Study)',
  'char-116': 'Escort Matron (Ba household)',
  'char-117': 'Nursemaid (Ba Laifeng)',
  'char-118': 'Attendant (Fu household)',
  'char-120': 'Retinue (Hua household, ~20-30 people)',
  'char-190': 'Doctor Li',
  'char-191': 'Zhang Gui',
  'char-192': 'Wang Sheng',
  'char-193': 'Qian De',
  'char-194': 'Huang Zhanggui',
  'char-195': 'Silver Bank Manager',
  'char-196': 'Hua Zhengchang Manager',
};


function getChineseName(fullName: string): string {
  const match = fullName.match(/^[\u3400-\u9fff（）·・、，。？！《》「」「」“”‘’\s]+/);
  return match ? match[0].trim() : fullName;
}

function getEnglishOrRomanizedName(id: string, fullName: string): string {
  const chineseName = getChineseName(fullName);
  const remainder = fullName.slice(chineseName.length).trim();
  return remainder || ENGLISH_CHARACTER_NAME_FALLBACKS[id] || fullName;
}

function getNodeLabel(node: { id: string; name: string }, lang: 'en' | 'zh'): string {
  const display = lang === 'zh'
    ? getChineseName(node.name)
    : getEnglishOrRomanizedName(node.id, node.name);
  if (lang === 'en') return display;
  // Keep Chinese labels compact in the graph.
  return display.split(/\s+/)[0] || display;
}

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
  const [hiddenRoles, setHiddenRoles] = useState<Set<string>>(() => new Set());
  const [mode, setMode] = useState<GraphMode>('curated');
  const [minShared, setMinShared] = useState(5);

  const { isUnloaded, reload } = useMobileUnload(containerRef, !isFullscreen);

  const availableRoles = useMemo(() => {
    const seen = new Set<string>();
    characters.forEach((c) => seen.add(c.role));
    const ordered = ROLE_ORDER.filter((role) => seen.has(role));
    const extras = [...seen].filter((role) => !ROLE_ORDER.includes(role));
    return [...ordered, ...extras];
  }, [characters]);

  const filteredCharacters = useMemo(
    () => characters.filter((c) => !hiddenRoles.has(c.role)),
    [characters, hiddenRoles]
  );

  const filteredRelationships = useMemo(() => {
    const visibleIds = new Set(filteredCharacters.map((c) => c.id));
    return relationships.filter((r) => visibleIds.has(r.source) && visibleIds.has(r.target));
  }, [relationships, filteredCharacters]);

  const filteredCoEdges = useMemo(() => {
    if (mode !== 'cooccurrence') return [];
    const visibleIds = new Set(filteredCharacters.map((c) => c.id));
    return getCoOccurrenceEdges().filter(
      (e) => e.weight >= minShared && visibleIds.has(e.source) && visibleIds.has(e.target)
    );
  }, [mode, minShared, filteredCharacters]);

  // In co-occurrence mode, characters with no shared chapter above the
  // threshold would float unanchored — drop them from the view instead.
  const graphCharacters = useMemo(() => {
    if (mode !== 'cooccurrence') return filteredCharacters;
    const connectedIds = new Set<string>();
    filteredCoEdges.forEach((e) => {
      connectedIds.add(e.source);
      connectedIds.add(e.target);
    });
    return filteredCharacters.filter((c) => connectedIds.has(c.id));
  }, [mode, filteredCharacters, filteredCoEdges]);

  const toggleRoleFilter = (role: string) => {
    setHiddenRoles((prev) => {
      const next = new Set(prev);
      if (next.has(role)) {
        next.delete(role);
        return next;
      }
      const remainingCount = characters.filter((c) => c.role !== role && !next.has(c.role)).length;
      if (remainingCount === 0) return prev;
      next.add(role);
      return next;
    });
  };

  const showAllRoles = () => setHiddenRoles(new Set());

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
      htmlStyle.overscrollBehavior = previousHtml.overscrollBehavior;
      
      // Force layout reflow so document scrollHeight expands back to full height before scrolling
      void document.body.offsetHeight;
      window.scrollTo({ top: scrollY, behavior: "instant" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" });
      });
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      // Skip when another overlay already consumed this Escape press.
      if (event.key === 'Escape' && !event.defaultPrevented) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    if (isUnloaded) return;
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    let { width, height } = container.getBoundingClientRect();
    const nodeRadius = 25;

    const nodes = graphCharacters.map(c => ({ ...c }));
    const links: any[] = mode === 'cooccurrence'
      ? filteredCoEdges.map(e => ({ ...e, chapters: [...e.chapters] }))
      : filteredRelationships.map(r => ({ ...r }));

    const maxWeight = mode === 'cooccurrence'
      ? Math.max(minShared, d3.max(links, (d: any) => d.weight as number) ?? minShared)
      : 1;
    const weightWidth = d3.scaleSqrt().domain([minShared, Math.max(minShared + 1, maxWeight)]).range([1, 5.5]);
    const baseLinkWidth = (d: any) => (mode === 'cooccurrence' ? weightWidth(d.weight) : 1.5);
    const baseLinkOpacity = mode === 'cooccurrence' ? 0.22 : 0.3;
    const linkLabel = (d: any) => {
      if (mode === 'cooccurrence') {
        return lang === 'zh' ? `${d.weight}回` : `${d.weight} ch`;
      }
      return lang === 'zh' ? d.typeZh : d.type;
    };

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

    const selectNode = (event: any, d: any) => {
      if (event.defaultPrevented) return;
      event.stopPropagation();
      lockedNodeId = d.id;
      applyHoverStyles(d.id);
    };

    const handleTouchTap = (event: any, d: any) => {
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
      selectNode(event, d);
    };

    const isMobileDevice = typeof window !== 'undefined' && (window.innerWidth <= 768 || width <= 640);

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(isMobileDevice ? 75 : 100))
      .force("charge", d3.forceManyBody().strength(isMobileDevice ? -100 : -150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(isMobileDevice ? 32 : 40));

    const g = svg.append("g");

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;
      if (newWidth <= 0 || newHeight <= 0) return;
      if (Math.abs(newWidth - width) < 5 && Math.abs(newHeight - height) < 5) return;
      width = newWidth;
      height = newHeight;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
      simulation.force("center", d3.forceCenter(width / 2, height / 2));
      simulation.alpha(0.2).restart();
    };

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDimensions();
      }, 150);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    window.visualViewport?.addEventListener('resize', handleResize);

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          if (!entry.isIntersecting && isVisible) {
            isVisible = false;
            simulation.stop();
          } else if (entry.isIntersecting && !isVisible) {
            isVisible = true;
            simulation.alpha(0.15).restart();
          }
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Add zoom with zoomed-out default scale for mobile devices
    const initialScale = isMobileDevice ? 0.5 : 1.0;

    const zoom = d3.zoom()
      .scaleExtent([0.15, 5])
      .filter((event) => {
        if (event.type === 'dblclick') return false;
        return (!event.ctrlKey || event.type === 'wheel') && !event.button;
      })
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    const initialTransform = d3.zoomIdentity
      .translate(width / 2, height / 2)
      .scale(initialScale)
      .translate(-width / 2, -height / 2);

    svg.call(zoom as any);
    svg.call(zoom.transform as any, initialTransform);
    svg.on("dblclick.zoom", null);

    const link = g.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "var(--accent)")
      .attr("stroke-opacity", baseLinkOpacity)
      .attr("stroke-width", baseLinkWidth);

    if (mode === 'cooccurrence') {
      link.append("title")
        .text((d: any) => {
          const list = d.chapters.join(', ');
          return lang === 'zh' ? `同回出现：第 ${list} 回` : `Shared chapters: ${list}`;
        });
    }

    const linkText = g.append("g")
      .selectAll("text")
      .data(links)
      .join("text")
      .attr("font-size", "8px")
      .attr("font-weight", "700")
      .attr("fill", "var(--ink-dim-text)")
      .attr("text-anchor", "middle")
      .attr("dy", -8)
      .attr("paint-order", "stroke")
      .attr("stroke", "var(--paper-bg)")
      .attr("stroke-width", 1.5)
      .style("opacity", mode === 'cooccurrence' ? 0 : 1)
      .text(linkLabel);

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
        handleTouchTap(event, d);
      })
      .on("click", (event, d: any) => {
        if (event.pointerType === 'touch') {
          if (Date.now() - lastTouchPointerUpTime < 500) return;
          handleTouchTap(event, d);
          return;
        }
        selectNode(event, d);
      })
      .on("dblclick", (event, d: any) => {
        if (event.defaultPrevented) return;
        event.stopPropagation();
        onNodeClick(d);
      })
      .call(d3.drag()
        .clickDistance(TAP_MOVE_THRESHOLD)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    node.append("circle")
      .attr("r", nodeRadius)
      .attr("fill", "var(--paper-bg)");

    node.append("circle")
      .attr("r", nodeRadius)
      .attr("fill", (d: any) => getRoleBgColorVar(d.role))
      .attr("stroke", (d: any) => getRoleColorVar(d.role))
      .attr("stroke-width", 1.5);

    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("font-size", "9px")
      .attr("font-weight", "bold")
      .attr("fill", (d: any) => getRoleColorVar(d.role))
      .text((d: any) => getNodeLabel(d, lang));

    const getNodeId = (endpoint: any) =>
      typeof endpoint === 'string' ? endpoint : endpoint?.id;

    const resetHoverStyles = () => {
      node
        .style("opacity", 1);
      link
        .attr("stroke-opacity", baseLinkOpacity)
        .attr("stroke-width", baseLinkWidth);
      linkText
        .style("opacity", mode === 'cooccurrence' ? 0 : 1);
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
          const isConnected = sourceId === hoveredId || targetId === hoveredId;
          if (!isConnected) return 0.05;
          return mode === 'cooccurrence' ? 0.8 : 0.7;
        })
        .attr("stroke-width", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          const isConnected = sourceId === hoveredId || targetId === hoveredId;
          const baseW = baseLinkWidth(d);
          return isConnected ? baseW * 1.8 : baseW;
        });

      linkText
        .style("opacity", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? 1 : 0.1;
        });
    };

    node
      .on("pointerenter", (_event, d: any) => {
        if (lockedNodeId) return;
        applyHoverStyles(d.id);
      })
      .on("pointerleave", () => {
        if (lockedNodeId) return;
        resetHoverStyles();
      });

    svg.on("click", () => {
      if (lockedNodeId) {
        lockedNodeId = null;
        resetHoverStyles();
      }
    });

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      linkText
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
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
      if (resizeTimer) clearTimeout(resizeTimer);
      simulation.stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.visualViewport?.removeEventListener('resize', handleResize);
      if (svgRef.current) {
        d3.select(svgRef.current).selectAll('*').remove();
      }
    };
  }, [graphCharacters, filteredRelationships, filteredCoEdges, mode, minShared, lang, isFullscreen, onNodeClick, isUnloaded]);

  const toggleFullscreen = () => setIsFullscreen((current) => !current);

  if (isUnloaded && !isFullscreen) {
    return (
      <div
        ref={containerRef}
        data-network-graph="true"
        className="w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[800px] parchment border-4 border-double border-[var(--paper-border)] rounded-sm overflow-hidden relative flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="p-3.5 rounded-full bg-[var(--paper-border)]/20 mb-3 text-[var(--ink-dim-text)]">
          <Activity size={32} />
        </div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-title)] mb-1">
          {lang === 'en' ? 'Character Network Unloaded' : '图谱已暂存 (内存已释放)'}
        </h4>
        <p className="text-[11px] text-[var(--ink-dim-text)] italic mb-4 max-w-xs">
          {lang === 'en'
            ? 'Network graph unloaded while scrolled out of view to save memory.'
            : '已滚动离开本区域。为防手机卡顿，D3 元素及图谱模拟已自动暂停并释放内存。'}
        </p>
        <button
          type="button"
          onClick={reload}
          className="px-4 py-2 text-xs font-bold rounded-sm bg-[var(--accent)] text-[var(--paper-bg)] hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
        >
          {lang === 'en' ? 'Reload Network Graph' : '重新加载关系图谱'}
        </button>
      </div>
    );
  }

  const graphMarkup = (
    <div
      ref={containerRef}
      data-network-graph="true"
      className={
        isFullscreen
          ? "!fixed inset-0 z-[100] w-full h-[100dvh] max-h-[100dvh] parchment overflow-hidden pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]"
          : "w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[800px] parchment border-4 border-double border-[var(--paper-border)] rounded-sm overflow-hidden relative"
      }
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none max-w-[55%]">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          {lang === 'en' ? 'Character Network' : '人物关系图谱'}
        </h3>
        <p className="text-[10px] text-[var(--ink-dim-text)] italic">
          {mode === 'curated'
            ? (lang === 'en'
              ? 'Drag nodes · Double-click profile · Click legend to filter'
              : '拖动节点 · 双击打开详情 · 点击图例筛选角色')
            : (lang === 'en'
              ? 'Edge = shared chapters · Thicker = more chapters together'
              : '连线=同回出现 · 线越粗共现回数越多')}
        </p>
        <div className="pointer-events-auto mt-2 inline-flex items-center gap-1 bg-[var(--paper-bg)]/90 border border-[var(--paper-border)] rounded-sm p-0.5 backdrop-blur-sm">
          {(['curated', 'cooccurrence'] as GraphMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded-sm transition-colors touch-manipulation ${mode === m
                ? 'bg-[var(--accent)] text-[var(--paper-bg)]'
                : 'text-[var(--ink-dim-text)] hover:bg-black/5'
                }`}
            >
              {m === 'curated'
                ? (lang === 'en' ? 'Curated ties' : '标注关系')
                : (lang === 'en' ? 'Co-occurrence' : '同回共现')}
            </button>
          ))}
        </div>
        {mode === 'cooccurrence' && (
          <div className="pointer-events-auto mt-1.5 flex items-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--ink-dim-text)]">
              {lang === 'en' ? 'Min shared' : '共现回数'}
            </span>
            {CO_OCCURRENCE_THRESHOLDS.map((threshold) => (
              <button
                key={threshold}
                type="button"
                onClick={() => setMinShared(threshold)}
                aria-pressed={minShared === threshold}
                className={`px-1.5 py-0.5 text-[9px] font-bold rounded-sm border transition-colors touch-manipulation ${minShared === threshold
                  ? 'bg-[var(--accent)] text-[var(--paper-bg)] border-[var(--accent)]'
                  : 'text-[var(--ink-dim-text)] border-[var(--paper-border)] bg-[var(--paper-bg)]/90 hover:bg-black/5'
                  }`}
              >
                ≥{threshold}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-4 right-4 z-10 bg-[var(--paper-bg)]/90 p-2 rounded border border-[var(--paper-border)] backdrop-blur-sm max-w-[120px] md:max-w-[160px] lg:max-w-none">
        {hiddenRoles.size > 0 && (
          <button
            type="button"
            onClick={showAllRoles}
            className="mb-1.5 w-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--ink-title)] transition-colors touch-manipulation"
          >
            {lang === 'en' ? 'Show all' : '显示全部'}
          </button>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-1">
          {availableRoles.map((role) => {
            const labels = ROLE_LABELS[role];
            const isVisible = !hiddenRoles.has(role);
            const colorVar = getRoleColorVar(role);
            const bgColorVar = getRoleBgColorVar(role);
            return (
              <button
                key={role}
                type="button"
                onClick={() => toggleRoleFilter(role)}
                aria-pressed={isVisible}
                title={
                  isVisible
                    ? (lang === 'en' ? `Hide ${labels?.en ?? role}` : `隐藏${labels?.zh ?? role}`)
                    : (lang === 'en' ? `Show ${labels?.en ?? role}` : `显示${labels?.zh ?? role}`)
                }
                className={`flex items-center gap-2 text-left rounded px-0.5 py-0.5 transition-all touch-manipulation ${isVisible ? 'opacity-100' : 'opacity-35'
                  } hover:opacity-100`}
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border shrink-0 ${isVisible ? '' : 'border-dashed'}`}
                  style={{
                    backgroundColor: isVisible ? bgColorVar : 'transparent',
                    borderColor: colorVar,
                  }}
                />
                <span
                  className={`text-[8px] sm:text-[10px] font-medium truncate ${isVisible ? 'text-[var(--ink-dim-text)]' : 'text-[var(--ink-dim-text)]/60 line-through'
                    }`}
                >
                  {lang === 'en' ? (labels?.en ?? role) : (labels?.zh ?? role)}
                </span>
              </button>
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
        className="absolute bottom-4 right-4 z-20 p-2.5 bg-[var(--paper-bg)] hover:bg-[var(--paper-border)] border border-[var(--accent)]/30 rounded-full shadow-md transition-colors text-[var(--ink-dim-text)] touch-manipulation"
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
          className="w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] xl:h-[800px] parchment border-4 border-double border-[var(--paper-border)] rounded-sm overflow-hidden relative opacity-40"
          aria-hidden="true"
        />
        {createPortal(graphMarkup, document.body)}
      </>
    );
  }

  return graphMarkup;
}
