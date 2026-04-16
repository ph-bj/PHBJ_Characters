import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Character, Relationship } from '../types';

interface NetworkGraphProps {
  characters: Character[];
  relationships: Relationship[];
  lang: 'en' | 'zh';
  onNodeClick: (character: Character) => void;
}

export default function NetworkGraph({ characters, relationships, lang, onNodeClick }: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1200;
    const height = 800;

    const nodes = characters.map(c => ({ ...c }));
    const links = relationships.map(r => ({ ...r }));

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40));

    const g = svg.append("g");

    // Add zoom
    const zoom = d3.zoom().on("zoom", (event) => {
      g.attr("transform", event.transform);
    });
    
    svg.call(zoom as any);

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
        onNodeClick(d);
      })
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    node.append("circle")
      .attr("r", 25)
      .attr("fill", "#f4ecd8")
      .attr("stroke", "#d4c5a9")
      .attr("stroke-width", 1.5);

    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("font-size", "9px")
      .attr("font-weight", "bold")
      .attr("fill", "#2c2420")
      .text((d: any) => d.name.split(' ')[0]);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

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

    return () => simulation.stop();
  }, [characters, relationships, lang]);

  return (
    <div className="w-full h-[600px] parchment border-4 border-double border-[#d4c5a9] rounded-sm overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b4513]">
          {lang === 'en' ? 'Character Network' : '人物关系图谱'}
        </h3>
        <p className="text-[10px] text-[#5d5048] italic">
          {lang === 'en' ? 'Drag nodes to explore relationships' : '拖动节点探索人物关系'}
        </p>
      </div>
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full cursor-move"
      />
    </div>
  );
}
