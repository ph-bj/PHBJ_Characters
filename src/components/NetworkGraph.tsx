import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as d3 from 'd3';
import { Activity, ChevronDown, ChevronUp, Maximize, Minimize } from 'lucide-react';
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

const DEFAULT_VISIBLE_ROLES = new Set(['performer', 'scholar', 'villain']);

export default function NetworkGraph({ characters, relationships, lang, onNodeClick, onFullscreenChange }: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hiddenRoles, setHiddenRoles] = useState<Set<string>>(() => {
    const hidden = new Set<string>();
    characters.forEach((c) => {
      if (!DEFAULT_VISIBLE_ROLES.has(c.role)) {
        hidden.add(c.role);
      }
    });
    return hidden;
  });
  const [minCoOccurrence, setMinCoOccurrence] = useState<number>(15);
  const [isRoleFilterMinimized, setIsRoleFilterMinimized] = useState(true);
  const [isCoOccurrenceMinimized, setIsCoOccurrenceMinimized] = useState(true);

  const { isUnloaded, reload } = useMobileUnload(containerRef, !isFullscreen);

  const coOccurrenceMap = useMemo(() => {
    const edges = getCoOccurrenceEdges();
    const map = new Map<string, { weight: number; chapters: number[] }>();
    for (const edge of edges) {
      const key = edge.source < edge.target ? `${edge.source}|${edge.target}` : `${edge.target}|${edge.source}`;
      map.set(key, { weight: edge.weight, chapters: edge.chapters });
    }
    return map;
  }, []);

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
    return relationships.filter((r) => {
      if (!visibleIds.has(r.source) || !visibleIds.has(r.target)) return false;
      if (minCoOccurrence > 0) {
        const pairKey = r.source < r.target ? `${r.source}|${r.target}` : `${r.target}|${r.source}`;
        const co = coOccurrenceMap.get(pairKey);
        return co ? co.weight >= minCoOccurrence : false;
      }
      return true;
    });
  }, [relationships, filteredCharacters, minCoOccurrence, coOccurrenceMap]);

  // Drop floating unanchored characters with no visible connections
  const graphCharacters = useMemo(() => {
    const connectedIds = new Set<string>();
    filteredRelationships.forEach((e) => {
      connectedIds.add(typeof e.source === 'string' ? e.source : e.source.id);
      connectedIds.add(typeof e.target === 'string' ? e.target : e.target.id);
    });
    return filteredCharacters.filter((c) => connectedIds.has(c.id));
  }, [filteredCharacters, filteredRelationships]);

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

  const defaultHiddenRoles = useMemo(() => {
    const hidden = new Set<string>();
    characters.forEach((c) => {
      if (!DEFAULT_VISIBLE_ROLES.has(c.role)) {
        hidden.add(c.role);
      }
    });
    return hidden;
  }, [characters]);

  const isDefaultRoles = useMemo(() => {
    if (hiddenRoles.size !== defaultHiddenRoles.size) return false;
    for (const r of hiddenRoles) {
      if (!defaultHiddenRoles.has(r)) return false;
    }
    return true;
  }, [hiddenRoles, defaultHiddenRoles]);

  const resetToDefaultRoles = () => setHiddenRoles(defaultHiddenRoles);

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
    const links: any[] = filteredRelationships.map(r => ({ ...r }));

    const getLinkNodeId = (endpoint: any): string => {
      if (!endpoint) return '';
      if (typeof endpoint === 'string') return endpoint;
      if (typeof endpoint === 'object' && endpoint.id) return endpoint.id;
      return String(endpoint);
    };

    const baseLinkWidth = (d: any) => {
      const sId = getLinkNodeId(d.source);
      const tId = getLinkNodeId(d.target);
      const pairKey = sId < tId ? `${sId}|${tId}` : `${tId}|${sId}`;
      const co = coOccurrenceMap.get(pairKey);
      const w = co ? co.weight : 0;
      return 1.5 + Math.min(w, 15) * 0.25;
    };
    const baseLinkOpacity = 0.3;
    const linkLabel = (d: any) => {
      const sId = getLinkNodeId(d.source);
      const tId = getLinkNodeId(d.target);
      const pairKey = sId < tId ? `${sId}|${tId}` : `${tId}|${sId}`;
      const co = coOccurrenceMap.get(pairKey);
      const relName = lang === 'zh' ? d.typeZh : d.type;
      if (co && co.weight > 0) {
        return lang === 'zh' ? `${relName} (${co.weight}回)` : `${relName} (${co.weight} ch)`;
      }
      return relName;
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
      .force("charge", d3.forceManyBody().strength(isMobileDevice ? -100 : -150).distanceMax(350).theta(0.9))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(isMobileDevice ? 32 : 40))
      .alphaDecay(0.045);

    // Pre-warm force simulation synchronously for fast initial render layout
    for (let i = 0; i < 60; ++i) {
      simulation.tick();
    }

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
      .attr("stroke-width", baseLinkWidth)
      .attr("vector-effect", "non-scaling-stroke");

    link.append("title")
      .text((d: any) => {
        const sId = getLinkNodeId(d.source);
        const tId = getLinkNodeId(d.target);
        const pairKey = sId < tId ? `${sId}|${tId}` : `${tId}|${sId}`;
        const co = coOccurrenceMap.get(pairKey);
        const relName = lang === 'zh' ? d.typeZh : d.type;
        if (co && co.weight > 0) {
          const list = co.chapters.join(', ');
          return lang === 'zh'
            ? `${relName} | 同回出现：第 ${list} 回 (${co.weight}回)`
            : `${relName} | Shared chapters: ${list} (${co.weight} ch)`;
        }
        return relName;
      });

    const linkText = g.append("g")
      .selectAll("text")
      .data(links)
      .join("text")
      .attr("x", (d: any) => ((d.source.x ?? 0) + (d.target.x ?? 0)) / 2)
      .attr("y", (d: any) => ((d.source.y ?? 0) + (d.target.y ?? 0)) / 2)
      .attr("font-size", "8px")
      .attr("font-weight", "700")
      .attr("fill", "var(--ink-dim-text)")
      .attr("text-anchor", "middle")
      .attr("dy", -8)
      .attr("paint-order", "stroke")
      .attr("stroke", "var(--paper-bg)")
      .attr("stroke-width", 1.5)
      .style("opacity", 1)
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

    // Fast adjacency lookup map for hover interactions
    const adjMap = new Map<string, Set<string>>();
    links.forEach((l: any) => {
      const s = getNodeId(l.source);
      const t = getNodeId(l.target);
      if (s && t) {
        if (!adjMap.has(s)) adjMap.set(s, new Set());
        if (!adjMap.has(t)) adjMap.set(t, new Set());
        adjMap.get(s)!.add(t);
        adjMap.get(t)!.add(s);
      }
    });

    const resetHoverStyles = () => {
      node.style("opacity", 1);
      link
        .attr("stroke-opacity", baseLinkOpacity)
        .attr("stroke-width", baseLinkWidth);
      linkText
        .style("opacity", 1);
    };

    const applyHoverStyles = (hoveredId: string) => {
      const connectedIds = adjMap.get(hoveredId) || new Set<string>();

      node.style("opacity", (d: any) => (d.id === hoveredId || connectedIds.has(d.id) ? 1 : 0.2));

      link
        .attr("stroke-opacity", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          const isConnected = sourceId === hoveredId || targetId === hoveredId;
          return isConnected ? 0.7 : 0.05;
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

    const updatePositions = () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      linkText
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    };

    updatePositions();
    simulation.on("tick", updatePositions);

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
  }, [graphCharacters, filteredRelationships, lang, isFullscreen, onNodeClick, isUnloaded]);

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
          {lang === 'en'
            ? 'Drag nodes · Double-click profile · Click legend to filter'
            : '拖动节点 · 双击打开详情 · 点击图例筛选角色'}
        </p>
      </div>
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2 max-w-[150px] sm:max-w-[190px] md:max-w-[230px]">
        {/* Role Legend Box */}
        <div className="bg-[var(--paper-bg)]/90 p-2 rounded border border-[var(--paper-border)] backdrop-blur-sm w-full transition-all">
          <div className="flex items-start justify-between text-left select-none gap-1">
            <button
              type="button"
              onClick={() => setIsRoleFilterMinimized((prev) => !prev)}
              className={`flex ${isRoleFilterMinimized ? 'items-center gap-1' : 'flex-col items-start gap-0.5'} text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] hover:opacity-80 transition-opacity touch-manipulation cursor-pointer flex-1 text-left`}
              aria-expanded={!isRoleFilterMinimized}
            >
              <span>{lang === 'en' ? 'Role Filter' : '角色图例'}</span>
              <span className={`text-[8px] font-normal normal-case text-[var(--ink-dim-text)] opacity-75 ${isRoleFilterMinimized ? 'truncate' : 'whitespace-normal'}`}>
                {isDefaultRoles
                  ? (lang === 'en' ? '(Default)' : '(默认)')
                  : (lang === 'en' ? `(${hiddenRoles.size} hidden)` : `(已隐${hiddenRoles.size})`)}
              </span>
            </button>
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              {!isRoleFilterMinimized && (
                isDefaultRoles ? (
                  <button
                    type="button"
                    onClick={showAllRoles}
                    className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--ink-title)] transition-colors touch-manipulation cursor-pointer mr-0.5"
                    title={lang === 'en' ? 'Show all roles' : '显示所有角色'}
                  >
                    {lang === 'en' ? 'Show all' : '全选'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resetToDefaultRoles}
                    className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--ink-title)] transition-colors touch-manipulation cursor-pointer mr-0.5"
                    title={lang === 'en' ? 'Reset to default roles (Performers, Scholars, Villains)' : '重置为默认角色（伶人、名士、反派）'}
                  >
                    {lang === 'en' ? 'Reset' : '重置'}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={() => setIsRoleFilterMinimized((prev) => !prev)}
                className="p-0.5 text-[var(--ink-dim-text)] hover:text-[var(--ink-title)] transition-colors touch-manipulation cursor-pointer"
                aria-label={
                  isRoleFilterMinimized
                    ? (lang === 'en' ? 'Expand role filter' : '展开角色图例')
                    : (lang === 'en' ? 'Minimize role filter' : '收起角色图例')
                }
              >
                {isRoleFilterMinimized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              </button>
            </div>
          </div>

          {!isRoleFilterMinimized && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 mt-1.5 pt-1.5 border-t border-[var(--paper-border)]/50">
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
                    className={`flex items-center gap-1.5 text-left rounded px-0.5 py-0.5 transition-all touch-manipulation cursor-pointer ${
                      isVisible ? 'opacity-100' : 'opacity-35'
                    } hover:opacity-100`}
                  >
                    <div
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border shrink-0 ${
                        isVisible ? '' : 'border-dashed'
                      }`}
                      style={{
                        backgroundColor: isVisible ? bgColorVar : 'transparent',
                        borderColor: colorVar,
                      }}
                    />
                    <span
                      className={`text-[8px] sm:text-[9px] font-medium truncate ${
                        isVisible ? 'text-[var(--ink-dim-text)]' : 'text-[var(--ink-dim-text)]/60 line-through'
                      }`}
                    >
                      {lang === 'en' ? (labels?.en ?? role) : (labels?.zh ?? role)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Co-occurrence Filter Box (Below Legend Box) */}
        <div className="bg-[var(--paper-bg)]/90 p-2 rounded border border-[var(--paper-border)] backdrop-blur-sm w-full transition-all">
          <div className="flex items-start justify-between text-left select-none gap-1">
            <button
              type="button"
              onClick={() => setIsCoOccurrenceMinimized((prev) => !prev)}
              className={`flex ${isCoOccurrenceMinimized ? 'items-center gap-1' : 'flex-col items-start gap-0.5'} text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] hover:opacity-80 transition-opacity touch-manipulation cursor-pointer flex-1 text-left`}
              aria-expanded={!isCoOccurrenceMinimized}
            >
              <span>{lang === 'en' ? 'Co-occurrence' : '同回共现'}</span>
              <span className={`text-[8px] font-normal normal-case text-[var(--ink-dim-text)] opacity-75 ${isCoOccurrenceMinimized ? 'truncate' : 'whitespace-normal'}`}>
                ({minCoOccurrence === 0 ? (lang === 'en' ? 'All' : '全部') : `≥${minCoOccurrence}${lang === 'en' ? '' : '回'}`})
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsCoOccurrenceMinimized((prev) => !prev)}
              className="p-0.5 text-[var(--ink-dim-text)] hover:text-[var(--ink-title)] transition-colors touch-manipulation cursor-pointer pt-0.5"
              aria-label={
                isCoOccurrenceMinimized
                  ? (lang === 'en' ? 'Expand co-occurrence filter' : '展开共现筛选')
                  : (lang === 'en' ? 'Minimize co-occurrence filter' : '收起共现筛选')
              }
            >
              {isCoOccurrenceMinimized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
            </button>
          </div>

          {!isCoOccurrenceMinimized && (
            <div className="flex flex-wrap items-center gap-1 mt-1.5 pt-1.5 border-t border-[var(--paper-border)]/50">
              {[
                { labelEn: 'All', labelZh: '全部', val: 0 },
                { labelEn: '≥1', labelZh: '≥1回', val: 1 },
                { labelEn: '≥3', labelZh: '≥3回', val: 3 },
                { labelEn: '≥5', labelZh: '≥5回', val: 5 },
                { labelEn: '≥8', labelZh: '≥8回', val: 8 },
                { labelEn: '≥15', labelZh: '≥15回', val: 15 },
              ].map((btn) => (
                <button
                  key={btn.val}
                  type="button"
                  onClick={() => setMinCoOccurrence(btn.val)}
                  aria-pressed={minCoOccurrence === btn.val}
                  className={`px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold rounded-sm border transition-colors touch-manipulation cursor-pointer ${
                    minCoOccurrence === btn.val
                      ? 'bg-[var(--accent)] text-[var(--paper-bg)] border-[var(--accent)]'
                      : 'text-[var(--ink-dim-text)] border-[var(--paper-border)] bg-[var(--paper-bg)]/90 hover:bg-black/5'
                  }`}
                >
                  {lang === 'en' ? btn.labelEn : btn.labelZh}
                </button>
              ))}
            </div>
          )}
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
