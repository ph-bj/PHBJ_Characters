import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as d3 from 'd3';
import { Character } from '../types';
import coordinates from '../assets/coordinates.json';
import { novelLocations, locationColors, locationTypeLabels } from '../locations';
import geoData from '../assets/countries.geo.json';

interface HometownMapProps {
  characters: Character[];
  lang: 'en' | 'zh';
}

export function HometownMap({ characters, lang }: HometownMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    origin: string;
    originZh?: string;
    type: string;
    count: number;
    names: string;
  }>({
    visible: false,
    x: 0,
    y: 0,
    origin: '',
    type: '',
    count: 0,
    names: '',
  });

  interface MapLocationData {
    id: string;
    origin: string;
    originZh: string;
    type: string;
    count: number;
    chars: Character[];
    coords: [number, number];
  }

  const mapData = useMemo<MapLocationData[]>(() => {
    // First, map all novelLocations
    const locationMap: Record<string, MapLocationData> = {};

    novelLocations.forEach(loc => {
       const coords = (coordinates as any)[loc.id];
       if (coords) {
         locationMap[loc.id] = {
           id: loc.id,
           origin: loc.nameEn,
           originZh: loc.name,
           type: loc.type,
           count: 0,
           chars: [],
           coords
         };
       }
    });

    // Also include character hometowns if they aren't directly matching a novelLocation id
    // We'll map them by origin string
    const charOriginMap: Record<string, { count: number; chars: Character[]; originZh: string }> = {};
    for (const char of characters) {
      if (!char.origin || char.origin === '—') continue;
      if (!charOriginMap[char.origin]) {
        charOriginMap[char.origin] = { count: 0, chars: [], originZh: char.originZh };
      }
      charOriginMap[char.origin].count++;
      charOriginMap[char.origin].chars.push(char);
    }

    Object.entries(charOriginMap).forEach(([origin, data]) => {
      // Find matching novelLocation by ID or name
      const locMatch = novelLocations.find(l => l.id.includes(origin.toLowerCase()) || origin.toLowerCase().includes(l.nameEn.toLowerCase()) || l.nameEn.toLowerCase().includes(origin.toLowerCase()) || l.name === origin || origin === l.id);

      if (locMatch && locationMap[locMatch.id]) {
         locationMap[locMatch.id].count += data.count;
         locationMap[locMatch.id].chars.push(...data.chars);
      } else {
         // Create a new point for this hometown
         let coords = (coordinates as any)[origin] || (coordinates as any)[`city-${origin.toLowerCase()}`];
         if (!coords) {
            const matchingKey = Object.keys(coordinates).find(k => k.includes(origin) || origin.includes(k));
            if (matchingKey) coords = (coordinates as any)[matchingKey];
            else coords = [105, 35];
         }
         locationMap[origin] = {
           id: origin,
           origin: origin,
           originZh: data.originZh,
           type: 'city', // default type for character hometowns not in locations list
           count: data.count,
           chars: data.chars,
           coords
         };
      }
    });

    return Object.values(locationMap).sort((a, b) => b.count - a.count);
  }, [characters]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.min(width * 0.8, 500);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Zoom behavior
    const g = svg.append('g');
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([[0, 0], [width, height]])
      .on("zoom", (event) => {
         g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Filter geometry to only include China and nearby for context, or just render it
    // Topojson countries 110m has id 156 for China
    const chinaFeature = geoData.features.find((f: any) => f.id === "156" || f.properties?.name === "China");

    const projection = d3.geoMercator()
      .center([110, 32]) // Focus on eastern/central China
      .scale(width * 0.9)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw map background
    g.selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path as any)
      .attr("fill", (d: any) => (d.id === "156" || d.properties?.name === "China") ? "#f4ecd8" : "#e5dcc3")
      .attr("stroke", "#d4c5a9")
      .attr("stroke-width", 1);

    // Rivers/Waterways would be nice, but we just have countries.

    // Draw cities as bubbles
    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(mapData, (d: MapLocationData) => d.count) || 1])
      .range([3, 15]);

    g.selectAll<SVGCircleElement, MapLocationData>("circle").data(mapData)
      .enter()
      .append("circle")
      .attr("cx", (d: MapLocationData) => projection(d.coords as [number, number])?.[0] || 0)
      .attr("cy", (d: MapLocationData) => projection(d.coords as [number, number])?.[1] || 0)
      .attr("r", (d: MapLocationData) => d.count > 0 ? sizeScale(d.count) : 3)
      .attr("fill", (d: MapLocationData) => (locationColors as any)[d.type] || "#8b4513")
      .attr("fill-opacity", 0.6)
      .attr("stroke", "#5d5048")
      .attr("stroke-width", 1)
      .style("cursor", "pointer")
      .on("mouseover", (event, d: MapLocationData) => {
        d3.select(event.currentTarget)
          .attr("fill-opacity", 0.9)
          .attr("stroke-width", 2);

        const [x, y] = d3.pointer(event, document.body);

        // Show up to 5 character names
        const names = d.chars.slice(0, 5).map(c => lang === 'zh' ? c.name.split(' ')[0] : c.name.split(' ')[1] || c.name.split(' ')[0]).join(', ');
        const nameText = d.chars.length > 5 ? `${names} +${d.chars.length - 5}` : names;

        setTooltip({
          visible: true,
          x,
          y,
          origin: d.origin,
          originZh: d.originZh,
          type: d.type,
          count: d.count,
          names: nameText
        });
      })
      .on("mousemove", (event) => {
        const [x, y] = d3.pointer(event, document.body);
        setTooltip(prev => ({ ...prev, x, y }));
      })
      .on("mouseout", (event) => {
        d3.select(event.currentTarget)
          .attr("fill-opacity", 0.6)
          .attr("stroke-width", 1);
        setTooltip(prev => ({ ...prev, visible: false }));
      });

    // City labels
    g.selectAll<SVGTextElement, MapLocationData>("text").data(mapData)
      .enter()
      .append("text")
      .attr("x", (d: MapLocationData) => (projection(d.coords as [number, number])?.[0] || 0))
      .attr("y", (d: MapLocationData) => (projection(d.coords as [number, number])?.[1] || 0) - sizeScale(d.count) - 2)
      .text((d: MapLocationData) => lang === 'zh' ? (d.originZh || d.origin) : d.origin)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#2c2420")
      .attr("font-weight", "bold")
      .style("pointer-events", "none")
      // Adding a subtle stroke for readability against background
      .attr("paint-order", "stroke")
      .attr("stroke", "#f4ecd8")
      .attr("stroke-width", 2);

  }, [mapData, lang]);

  return (
    <div
      className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] mt-6 scroll-mt-24"
      id="hometown-map"
    >
      <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold">
          {lang === 'zh' ? '全书地点与人物分布图' : 'Locations & Character Hometowns'}
        </h2>
        <span className="text-[10px] text-[#5d5048] italic">
          {lang === 'zh' ? `${mapData.length} 个地点` : `${mapData.length} locations`}
        </span>
      </div>


      <div
        ref={containerRef}
        className="w-full relative overflow-hidden rounded border border-[#d4c5a9]/50 bg-[#e5dcc3]"
        style={{ aspectRatio: '4/3', maxHeight: '500px' }}
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
        />

        <div className="absolute top-2 right-2 bg-[#f4ecd8]/90 border border-[#d4c5a9] p-2 rounded text-[10px] max-h-[90%] overflow-y-auto z-10 pointer-events-auto">
          <div className="font-bold mb-1 border-b border-[#d4c5a9] pb-1">
            {lang === 'zh' ? '地点类型' : 'Location Types'}
          </div>
          {Object.entries(locationTypeLabels).map(([type, label]) => (
            <div key={type} className="flex items-center gap-1.5 mb-1">
              <span
                className="w-3 h-3 rounded-full border border-[#5d5048] opacity-80"
                style={{ backgroundColor: (locationColors as any)[type] }}
              />
              <span className="text-[#5d5048]">
                {lang === 'zh' ? label.zh : label.en}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-2 left-2 text-[9px] text-[#5d5048] opacity-70 pointer-events-none">

          {lang === 'zh' ? '滚动缩放，拖动平移' : 'Scroll to zoom, drag to pan'}
        </div>
      </div>

      {tooltip.visible && createPortal(
        <div
          className="fixed z-50 pointer-events-none bg-[#2c2420] text-[#f4ecd8] px-3 py-2 rounded shadow-lg border border-[#5d5048]"
          style={{
            left: tooltip.x,
            top: tooltip.y - 10,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-3 h-3 rounded-full border border-[#f4ecd8] shadow-sm"
              style={{ backgroundColor: (locationColors as any)[tooltip.type] || '#8b4513' }}
            />
            <p className="font-bold text-sm">
              {lang === 'zh' ? (tooltip.originZh || tooltip.origin) : tooltip.origin}
            </p>
          </div>
          <p className="text-[10px] text-amber-200/80 mb-1 border-b border-[#5d5048] pb-1">
            {lang === 'zh' ? (locationTypeLabels as any)[tooltip.type]?.zh || tooltip.type : (locationTypeLabels as any)[tooltip.type]?.en || tooltip.type}
            {tooltip.count > 0 && <span className="ml-2">({tooltip.count} {lang === 'zh' ? '人' : 'characters'})</span>}
          </p>
          {tooltip.names && (
            <p className="text-[10px] opacity-80 max-w-[200px] truncate">
              {tooltip.names}
            </p>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
