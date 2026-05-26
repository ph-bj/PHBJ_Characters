import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Maximize, Minimize } from 'lucide-react';
import { Character, Relationship } from '../types';

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
}

export default function NetworkGraph({ characters, relationships, lang, onNodeClick }: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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

    let lockedNodeId: string | null = null;

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40));

    const g = svg.append("g");

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries.length) return;
      const { width: newWidth, height: newHeight } = entries[0].contentRect;
      width = newWidth;
      height = newHeight;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
      simulation.force("center", d3.forceCenter(width / 2, height / 2));
      simulation.alpha(0.3).restart();
    });

    resizeObserver.observe(container);

    // Add zoom
    const zoom = d3.zoom().on("zoom", (event) => {
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
      .on("click", (event, d: any) => {
        // Prevent click when dragging
        if (event.defaultPrevented) return;
        event.stopPropagation();
        lockedNodeId = d.id;
        applyHoverStyles(d.id);
      })
      .on("dblclick", (event, d: any) => {
        if (event.defaultPrevented) return;
        event.stopPropagation();
        onNodeClick(d);
      })
      .call(d3.drag()
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
        .style("opacity", 1)
        .style("filter", "none");
      link
        .attr("stroke-opacity", 0.3)
        .attr("stroke-width", 1.5)
        .style("filter", "none");
      linkText
        .style("opacity", 1)
        .style("filter", "none");
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
        .style("opacity", (d: any) => (connectedIds.has(d.id) ? 1 : 0.2))
        .style("filter", (d: any) => (connectedIds.has(d.id) ? "none" : "blur(1.5px)"));

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
        })
        .style("filter", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? "none" : "blur(1.5px)";
        });

      linkText
        .style("opacity", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? 1 : 0.1;
        })
        .style("filter", (d: any) => {
          const sourceId = getNodeId(d.source);
          const targetId = getNodeId(d.target);
          return sourceId === hoveredId || targetId === hoveredId ? "none" : "blur(1px)";
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

    return () => {
      simulation.stop();
      resizeObserver.disconnect();
    };
  }, [characters, relationships, lang]);

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "fixed inset-0 z-50 w-screen h-screen parchment overflow-hidden"
          : "w-full h-[400px] sm:h-[600px] xl:h-[800px] parchment border-4 border-double border-[#d4c5a9] rounded-sm overflow-hidden relative"
      }
    >
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b4513]">
          {lang === 'en' ? 'Character Network' : '人物关系图谱'}
        </h3>
        <p className="text-[10px] text-[#5d5048] italic">
          {lang === 'en' ? 'Drag nodes to explore relationships' : '拖动节点探索人物关系'}
        </p>
      </div>
      <div className="absolute top-4 right-4 z-10 bg-[#f4ecd8]/80 p-2 rounded border border-[#d4c5a9] backdrop-blur-sm max-w-[120px] sm:max-w-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          {Object.entries(ROLE_LABELS).map(([role, labels]) => (
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
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute bottom-4 right-4 z-20 p-2 bg-[#f4ecd8] hover:bg-[#d4c5a9] border border-[#8b4513]/30 rounded-full shadow-md transition-colors text-[#5d5048]"
        title={isFullscreen ? (lang === 'en' ? 'Exit Fullscreen' : '退出全屏') : (lang === 'en' ? 'Fullscreen' : '全屏')}
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
      <svg
        ref={svgRef}
        className="w-full h-full cursor-move"
      />
    </div>
  );
}
