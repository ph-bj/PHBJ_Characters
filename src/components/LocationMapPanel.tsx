import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as d3 from 'd3';
import { Character } from '../types';
import { locationColors, locationTypeLabels, LocationType } from '../locations';
import geoData from '../assets/countries.geo.json';

export interface MapLocationData {
  id: string;
  origin: string;
  originZh: string;
  type: string;
  count: number;
  chars: Character[];
  coords: [number, number];
  searchTokens?: string[];
  chapterIds?: number[];
  firstSnippet?: string | null;
  firstChapterId?: number | null;
}

interface MapMarker {
  id: string;
  baseX: number;
  baseY: number;
  offsetX: number;
  offsetY: number;
  location: MapLocationData;
}

interface LocationMapPanelProps {
  mapData: MapLocationData[];
  lang: 'en' | 'zh';
  title: string;
  locationType: LocationType;
}

const MARKER_RADIUS_PX = 5;
const MARKER_HIT_RADIUS_PX = 12;
const MARKER_LABEL_FONT_SIZE_PX = 9;
const PROXIMITY_RADIUS_PX = 22;
const SPIRAL_SPACING_PX = MARKER_RADIUS_PX * 2 + 4;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function formatMapLabel(location: MapLocationData, lang: 'en' | 'zh'): string {
  const name = lang === 'zh' ? (location.originZh || location.origin) : location.origin;
  const maxLen = lang === 'zh' ? 6 : 12;
  if (name.length <= maxLen) return name;
  return `${name.slice(0, maxLen - 1)}…`;
}

function spiralOffset(index: number, spacing: number): { x: number; y: number } {
  if (index === 0) return { x: 0, y: 0 };
  const radius = spacing * Math.sqrt(index);
  const angle = index * GOLDEN_ANGLE;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

function groupNearbyLocations(
  nodes: { id: string; x: number; y: number; count: number; label: string }[],
  radiusPx: number,
) {
  const sorted = [...nodes].sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label),
  );

  const groups: typeof nodes[] = [];
  const assigned = new Set<string>();

  for (const node of sorted) {
    if (assigned.has(node.id)) continue;

    const members = [node];
    assigned.add(node.id);

    for (const other of nodes) {
      if (assigned.has(other.id)) continue;
      if (Math.hypot(node.x - other.x, node.y - other.y) <= radiusPx) {
        members.push(other);
        assigned.add(other.id);
      }
    }

    groups.push(members);
  }

  return groups;
}

function markerOffsetRetention(zoomK: number, baseZoomK: number, maxZoomK: number): number {
  if (zoomK <= baseZoomK) return 1;
  if (zoomK >= maxZoomK) return 0;
  return 1 - (zoomK - baseZoomK) / (maxZoomK - baseZoomK);
}

function layoutMapMarkers(
  mapData: MapLocationData[],
  projection: d3.GeoProjection,
): MapMarker[] {
  const nodes = mapData.map((location) => {
    const projected = projection(location.coords) as [number, number];
    return {
      id: location.id,
      x: projected[0],
      y: projected[1],
      count: location.count,
      label: location.origin,
      location,
    };
  });

  const groups = groupNearbyLocations(nodes, PROXIMITY_RADIUS_PX);
  const markers: MapMarker[] = [];

  for (const group of groups) {
    if (group.length === 1) {
      const node = group[0];
      markers.push({
        id: node.id,
        baseX: node.x,
        baseY: node.y,
        offsetX: 0,
        offsetY: 0,
        location: node.location,
      });
      continue;
    }

    const centroidX = group.reduce((sum, node) => sum + node.x, 0) / group.length;
    const centroidY = group.reduce((sum, node) => sum + node.y, 0) / group.length;
    const sorted = [...group].sort(
      (a, b) => b.location.count - a.location.count || a.location.origin.localeCompare(b.location.origin),
    );

    sorted.forEach((node, index) => {
      const spiral = spiralOffset(index, SPIRAL_SPACING_PX);
      markers.push({
        id: node.id,
        baseX: node.x,
        baseY: node.y,
        offsetX: centroidX + spiral.x - node.x,
        offsetY: centroidY + spiral.y - node.y,
        location: node.location,
      });
    });
  }

  return markers;
}

function formatChapterList(chapterIds: number[], lang: 'en' | 'zh') {
  if (chapterIds.length === 0) return '';
  if (chapterIds.length <= 12) {
    return chapterIds.map((id) => (lang === 'zh' ? `第${id}回` : `Ch.${id}`)).join(lang === 'zh' ? '、' : ', ');
  }
  const preview = chapterIds
    .slice(0, 10)
    .map((id) => (lang === 'zh' ? `第${id}回` : `Ch.${id}`))
    .join(lang === 'zh' ? '、' : ', ');
  const suffix = lang === 'zh'
    ? ` 等 ${chapterIds.length} 回`
    : `, … (${chapterIds.length} chapters)`;
  return preview + suffix;
}

function formatCharacterNames(chars: Character[], lang: 'en' | 'zh') {
  if (chars.length === 0) return '';
  return chars
    .map((c) => (lang === 'zh' ? c.name.split(' ')[0] : c.name.split(' ')[1] || c.name.split(' ')[0]))
    .join(lang === 'zh' ? '、' : ', ');
}

function LocationTooltipSection({
  location,
  lang,
  showDivider,
}: {
  location: MapLocationData;
  lang: 'en' | 'zh';
  showDivider: boolean;
}) {
  const altNames = (location.searchTokens ?? []).filter(
    (token) => token !== location.originZh && token !== location.origin,
  );
  const names = formatCharacterNames(location.chars, lang);

  return (
    <div className={showDivider ? 'border-t border-[#5d5048]/60 pt-2 mt-2' : ''}>
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-2.5 h-2.5 rounded-full border border-[#f4ecd8] shadow-sm shrink-0"
          style={{ backgroundColor: locationColors[location.type as LocationType] || '#8b4513' }}
        />
        <p className="font-bold text-sm leading-tight">
          {lang === 'zh' ? (location.originZh || location.origin) : location.origin}
        </p>
      </div>

      {lang === 'en' && location.originZh && location.originZh !== location.origin && (
        <p className="text-[10px] text-amber-200/70 mb-1 font-hans">{location.originZh}</p>
      )}

      <p className="text-[10px] text-amber-200/80 mb-1.5">
        {lang === 'zh'
          ? locationTypeLabels[location.type as LocationType]?.zh || location.type
          : locationTypeLabels[location.type as LocationType]?.en || location.type}
        {location.count > 0 && (
          <span className="ml-2">
            · {location.count} {lang === 'zh' ? '人籍贯' : 'characters'}
          </span>
        )}
      </p>

      {altNames.length > 0 && (
        <p className="text-[10px] text-[#f4ecd8]/75 mb-1.5 leading-relaxed">
          <span className="text-amber-200/60 uppercase tracking-wider text-[9px] block mb-0.5">
            {lang === 'zh' ? '书中称谓' : 'In the text'}
          </span>
          {altNames.join(' / ')}
        </p>
      )}

      {(location.chapterIds?.length ?? 0) > 0 && (
        <p className="text-[10px] text-[#f4ecd8]/85 mb-1.5 leading-relaxed">
          <span className="text-amber-200/60 uppercase tracking-wider text-[9px] block mb-0.5">
            {lang === 'zh' ? '出现回目' : 'Chapter appearances'}
          </span>
          {formatChapterList(location.chapterIds ?? [], lang)}
        </p>
      )}

      {location.firstSnippet && (location.searchTokens?.length ?? 0) > 0 && (
        <p className="text-[10px] leading-relaxed font-hans text-[#f4ecd8]/90 mb-1.5">
          <span className="text-amber-200/60 uppercase tracking-wider text-[9px] block mb-0.5">
            {lang === 'zh'
              ? `书中摘录${location.firstChapterId ? `（第${location.firstChapterId}回）` : ''}`
              : `From the novel${location.firstChapterId ? ` (Ch.${location.firstChapterId})` : ''}`}
          </span>
          …{location.firstSnippet.split(
            new RegExp(`(${(location.searchTokens ?? [])
              .sort((a, b) => b.length - a.length)
              .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
              .join('|')})`),
          ).map((part, i) =>
            (location.searchTokens ?? []).includes(part) ? (
              <mark key={i} className="bg-amber-300/80 text-[#2c2420] px-0.5 rounded-sm">{part}</mark>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}…
        </p>
      )}

      {names && (
        <p className="text-[10px] opacity-80 leading-relaxed">
          <span className="text-amber-200/60 uppercase tracking-wider text-[9px] block mb-0.5">
            {lang === 'zh' ? '相关人物' : 'Characters'}
          </span>
          {names}
        </p>
      )}
    </div>
  );
}

function MapClusterTooltip({
  lang,
  tooltip,
}: {
  lang: 'en' | 'zh';
  tooltip: {
    x: number;
    y: number;
    locations: MapLocationData[];
  };
}) {
  const { locations } = tooltip;
  const isCluster = locations.length > 1;

  return (
    <div
      className="fixed z-[200] pointer-events-none bg-[#2c2420] text-[#f4ecd8] px-3 py-2.5 rounded shadow-lg border border-[#5d5048] max-w-[min(340px,calc(100vw-24px))] max-h-[min(70vh,480px)] overflow-y-auto"
      style={{
        left: tooltip.x,
        top: tooltip.y - 8,
        transform: 'translate(-50%, -100%)',
      }}
    >
      {isCluster && (
        <p className="text-[10px] uppercase tracking-wider text-amber-200/70 mb-2 pb-1.5 border-b border-[#5d5048]">
          {lang === 'zh'
            ? `${locations.length} 个邻近地点`
            : `${locations.length} nearby locations`}
        </p>
      )}

      {locations.map((location, index) => (
        <div key={location.id}>
          <LocationTooltipSection
            location={location}
            lang={lang}
            showDivider={index > 0}
          />
        </div>
      ))}
    </div>
  );
}

export function LocationMapPanel({ mapData, lang, title, locationType }: LocationMapPanelProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const setTooltipRef = useRef<typeof setTooltipState>(null!);
  const [tooltip, setTooltipState] = useState<{
    visible: boolean;
    x: number;
    y: number;
    locations: MapLocationData[];
  }>({
    visible: false,
    x: 0,
    y: 0,
    locations: [],
  });
  setTooltipRef.current = setTooltipState;

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || mapData.length === 0) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.min(width * 0.75, 420);

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svg.append('g');

    const chinaFeature = geoData.features.find(
      (f: { id?: string; properties?: { name?: string } }) =>
        f.id === '156' || f.properties?.name === 'China',
    );

    const projection = d3.geoMercator();
    if (chinaFeature) {
      projection.fitExtent([[24, 24], [width - 24, height - 24]], chinaFeature as any);
    } else {
      projection.center([110, 32]).scale(width * 0.85).translate([width / 2, height / 2]);
    }

    const path = d3.geoPath().projection(projection);

    const markers = layoutMapMarkers(mapData, projection);

    const fitPointsTransform = (
      points: [number, number][],
      padding: number,
    ): d3.ZoomTransform => {
      if (points.length === 0) return d3.zoomIdentity;

      const xs = points.map((p) => p[0]);
      const ys = points.map((p) => p[1]);
      const minX = d3.min(xs) ?? 0;
      const maxX = d3.max(xs) ?? 0;
      const minY = d3.min(ys) ?? 0;
      const maxY = d3.max(ys) ?? 0;
      const dx = Math.max(maxX - minX, 50);
      const dy = Math.max(maxY - minY, 50);
      const scale = Math.min(
        (width - padding * 2) / dx,
        (height - padding * 2) / dy,
        8,
      );
      const midX = (minX + maxX) / 2;
      const midY = (minY + maxY) / 2;

      return d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(scale)
        .translate(-midX, -midY);
    };

    const initialTransform = fitPointsTransform(
      markers.map((marker) => [marker.baseX, marker.baseY]),
      48,
    );

    g.append('g')
      .attr('class', 'map-layer')
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('fill', '#e5dcc3')
      .attr('stroke', '#d4c5a9')
      .attr('stroke-width', 1)
      .style('pointer-events', 'none');

    const markerLayer = g.append('g').attr('class', 'marker-layer');

    const maxZoomK = 12;

    const updateMarkerTransforms = (scale: number) => {
      const inverse = 1 / scale;
      const retention = markerOffsetRetention(scale, initialTransform.k, maxZoomK);
      markerLayer.selectAll<SVGGElement, MapMarker>('g.marker')
        .attr('transform', (marker) => {
          const x = marker.baseX + marker.offsetX * retention;
          const y = marker.baseY + marker.offsetY * retention;
          return `translate(${x},${y}) scale(${inverse})`;
        });
    };

    const updateTooltipPosition = (event: PointerEvent) => {
      setTooltipRef.current((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
      }));
    };

    const markerGroups = markerLayer.selectAll<SVGGElement, MapMarker>('g.marker')
      .data(markers, (d) => d.id)
      .enter()
      .append('g')
      .attr('class', 'marker')
      .style('cursor', 'pointer');

    markerGroups.append('circle')
      .attr('class', 'hit-area')
      .attr('r', MARKER_HIT_RADIUS_PX)
      .attr('fill', 'transparent')
      .attr('stroke', 'none');

    markerGroups.append('circle')
      .attr('class', 'marker-dot')
      .attr('r', MARKER_RADIUS_PX)
      .attr('fill', locationColors[locationType])
      .attr('fill-opacity', 0.65)
      .attr('stroke', '#5d5048')
      .attr('stroke-width', 1)
      .style('pointer-events', 'none');

    markerGroups.append('text')
      .attr('class', `marker-label${lang === 'zh' ? ' font-hans' : ''}`)
      .attr('y', MARKER_RADIUS_PX + MARKER_LABEL_FONT_SIZE_PX + 1)
      .attr('text-anchor', 'middle')
      .attr('font-size', MARKER_LABEL_FONT_SIZE_PX)
      .attr('fill', '#5d5048')
      .attr('stroke', '#f4ecd8')
      .attr('stroke-width', 0.75)
      .attr('paint-order', 'stroke')
      .style('pointer-events', 'none')
      .text((marker) => formatMapLabel(marker.location, lang));

    markerGroups
      .on('pointerenter', (event, marker) => {
        markerGroups.classed('is-hovered', false);
        d3.select(event.currentTarget).classed('is-hovered', true);
        d3.select(event.currentTarget).select('.marker-dot')
          .attr('fill-opacity', 0.9)
          .attr('stroke-width', 2);
        d3.select(event.currentTarget).select('.marker-label')
          .attr('fill', '#2c2420')
          .attr('font-weight', 600);

        setTooltipRef.current({
          visible: true,
          x: event.clientX,
          y: event.clientY,
          locations: [marker.location],
        });
      })
      .on('pointermove', (event) => {
        updateTooltipPosition(event);
      })
      .on('pointerleave', (event) => {
        d3.select(event.currentTarget).classed('is-hovered', false);
        d3.select(event.currentTarget).select('.marker-dot')
          .attr('fill-opacity', 0.65)
          .attr('stroke-width', 1);
        d3.select(event.currentTarget).select('.marker-label')
          .attr('fill', '#5d5048')
          .attr('font-weight', 400);
        setTooltipRef.current((prev) => ({ ...prev, visible: false }));
      });

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, maxZoomK])
      .translateExtent([[-width * 1.5, -height * 1.5], [width * 2.5, height * 2.5]])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        updateMarkerTransforms(event.transform.k);
      });

    svg.call(zoom);
    svg.call(zoom.transform, initialTransform);
    updateMarkerTransforms(initialTransform.k);
  }, [mapData, lang, locationType]);

  if (mapData.length === 0) {
    return (
      <div className="rounded border border-[#d4c5a9]/50 bg-[#e5dcc3]/50 p-8 text-center text-sm text-[#5d5048] italic">
        {lang === 'zh' ? '此类别暂无地点' : 'No locations in this category'}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-3 h-3 rounded-full border border-[#5d5048] opacity-80 shrink-0"
          style={{ backgroundColor: locationColors[locationType] }}
        />
        <h3 className="text-[11px] uppercase tracking-[0.15em] text-[#5d5048] font-bold">
          {title}
        </h3>
        <span className="text-[10px] text-[#5d5048] italic ml-auto">
          {lang === 'zh' ? `${mapData.length} 个地点` : `${mapData.length} locations`}
        </span>
      </div>

      <div
        ref={containerRef}
        className="w-full relative overflow-hidden rounded border border-[#d4c5a9]/50 bg-[#e5dcc3]"
        style={{ aspectRatio: '4/3', maxHeight: '420px' }}
      >
        <svg ref={svgRef} className="w-full h-full" />

        <div className="absolute bottom-2 left-2 text-[9px] text-[#5d5048] opacity-70 pointer-events-none">
          {lang === 'zh' ? '悬停圆点查看详情，滚动缩放' : 'Hover dots for details, scroll to zoom'}
        </div>
      </div>

      {tooltip.visible && tooltip.locations.length > 0 && createPortal(
        <MapClusterTooltip lang={lang} tooltip={tooltip} />,
        document.body,
      )}
    </div>
  );
}
