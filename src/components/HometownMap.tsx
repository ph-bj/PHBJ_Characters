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
      .attr("fill", "#e5dcc3")
      .attr("stroke", "#d4c5a9")
      .attr("stroke-width", 1);

    // Rivers/Waterways would be nice, but we just have countries.

    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(mapData, (d: MapLocationData) => d.count) || 1])
      .range([3, 15]);

    // City labels — priority placement with collision avoidance
    const fontSize = 10;
    const labelPadding = 3;
    const typePriority: Record<string, number> = {
      region: 50, province: 40, city: 30, county: 20,
      residence: 10, garden: 8, gardenFeature: 6, temple: 6,
      scenicSite: 6, waterway: 5, mountain: 5, street: 4, venue: 4,
    };

    type LabelPlacement = MapLocationData & {
      anchorX: number;
      anchorY: number;
      x: number;
      y: number;
      text: string;
      width: number;
      height: number;
      priority: number;
    };

    const labelPlacements: LabelPlacement[] = mapData.map((d) => {
      const projected = projection(d.coords as [number, number]);
      const px = projected?.[0] ?? 0;
      const py = projected?.[1] ?? 0;
      const r = d.count > 0 ? sizeScale(d.count) : 3;
      const text = lang === 'zh' ? (d.originZh || d.origin) : d.origin;
      return {
        ...d,
        anchorX: px,
        anchorY: py - r - 2,
        x: px,
        y: py - r - 2,
        text,
        width: 0,
        height: fontSize + labelPadding * 2,
        priority: d.count * 100 + (typePriority[d.type] ?? 1),
      };
    });

    const measureLayer = g.append('g').attr('visibility', 'hidden');
    labelPlacements.forEach((p) => {
      const node = measureLayer.append('text')
        .text(p.text)
        .attr('font-size', `${fontSize}px`)
        .attr('font-weight', 'bold')
        .node() as SVGTextElement;
      const bbox = node.getBBox();
      p.width = bbox.width + labelPadding * 2;
      p.height = bbox.height + labelPadding * 2;
    });
    measureLayer.remove();

    labelPlacements.sort((a, b) => b.priority - a.priority);

    const labelOverlaps = (
      a: LabelPlacement,
      ax: number,
      ay: number,
      b: LabelPlacement,
      bx: number,
      by: number,
    ) => Math.abs(ax - bx) < (a.width + b.width) / 2
      && Math.abs(ay - by) < (a.height + b.height) / 2;

    const labelOffsets: [number, number][] = [
      [0, 0], [0, -14], [18, -10], [-18, -10],
      [24, 0], [-24, 0], [18, 12], [-18, 12], [0, 14],
      [32, -16], [-32, -16], [32, 14], [-32, 14],
    ];

    const visibleLabels: LabelPlacement[] = [];
    const visibleIds = new Set<string>();
    for (const placement of labelPlacements) {
      for (const [dx, dy] of labelOffsets) {
        const x = placement.anchorX + dx;
        const y = placement.anchorY + dy;
        const collides = visibleLabels.some((placed) =>
          labelOverlaps(placement, x, y, placed, placed.x, placed.y),
        );
        if (!collides) {
          placement.x = x;
          placement.y = y;
          visibleLabels.push(placement);
          visibleIds.add(placement.id);
          break;
        }
      }
    }

    const secondaryLabels = labelPlacements.filter((p) => !visibleIds.has(p.id));

    let hoverLabelsLayer: d3.Selection<SVGGElement, unknown, null, undefined>;

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

        if (!visibleIds.has(d.id)) {
          hoverLabelsLayer.selectAll('text')
            .attr('opacity', (label: LabelPlacement) => label.id === d.id ? 1 : 0);
        }

        const [x, y] = d3.pointer(event, document.body);

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
        hoverLabelsLayer.selectAll('text').attr('opacity', 0);
        setTooltip(prev => ({ ...prev, visible: false }));
      });

    const labelsLayer = g.append('g').attr('class', 'map-labels');

    labelsLayer.selectAll('line')
      .data(visibleLabels.filter((p) => Math.hypot(p.x - p.anchorX, p.y - p.anchorY) > 3))
      .enter()
      .append('line')
      .attr('x1', (d) => d.anchorX)
      .attr('y1', (d) => d.anchorY)
      .attr('x2', (d) => d.x)
      .attr('y2', (d) => d.y)
      .attr('stroke', '#8b7355')
      .attr('stroke-width', 0.75)
      .attr('stroke-opacity', 0.6);

    labelsLayer.selectAll('text')
      .data(visibleLabels)
      .enter()
      .append('text')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .text((d) => d.text)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', `${fontSize}px`)
      .attr('fill', '#2c2420')
      .attr('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('paint-order', 'stroke')
      .attr('stroke', '#f4ecd8')
      .attr('stroke-width', 2);

    hoverLabelsLayer = g.append('g').attr('class', 'hover-labels');

    hoverLabelsLayer.selectAll('text')
      .data(secondaryLabels)
      .enter()
      .append('text')
      .attr('x', (d) => d.anchorX)
      .attr('y', (d) => d.anchorY)
      .text((d) => d.text)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', `${fontSize}px`)
      .attr('fill', '#2c2420')
      .attr('font-weight', 'bold')
      .attr('opacity', 0)
      .style('pointer-events', 'none')
      .attr('paint-order', 'stroke')
      .attr('stroke', '#f4ecd8')
      .attr('stroke-width', 2);
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
