import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Character } from '../types';
import { locationColors, locationTypeLabels, LocationType } from '../locations';
import geoData from '../assets/countries.geo.json';
import coordinates from '../assets/coordinates.json';
import { getCharacterNameForLanguage, type NovelLocationWithChapters } from '../utils';
import { getGardenById, type Garden } from '../gardens';

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
  onSelectLocation: (location: NovelLocationWithChapters) => void;
  onSelectGarden: (garden: Garden) => void;
}

const MARKER_RADIUS_PX = 9;
const MARKER_HIT_RADIUS_PX = 14;
const MARKER_LABEL_FONT_SIZE_PX = 12;
const PROXIMITY_RADIUS_PX = 26;
const SPIRAL_SPACING_PX = MARKER_RADIUS_PX * 2 + 4;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const BEIJING_COORDS = (coordinates as any).Beijing as [number, number];
const CAPITAL_STAR_RADIUS_PX = 10;

function capitalStarPath(outerRadius: number, innerRatio = 0.42): string {
  let d = '';
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 === 0 ? outerRadius : outerRadius * innerRatio;
    d += `${i === 0 ? 'M' : 'L'}${(r * Math.cos(angle)).toFixed(2)},${(r * Math.sin(angle)).toFixed(2)}`;
  }
  return `${d}Z`;
}

function formatMapLabel(location: MapLocationData, lang: 'en' | 'zh'): string {
  return lang === 'zh' ? (location.originZh || location.origin) : location.origin;
}

function getLocationIconPath(location: MapLocationData): string {
  const name = location.originZh || location.origin;
  if (!name) return 'M 0 6 L -3 1 A 4 4 0 1 1 3 1 Z M 0 -5 L 0 -1 M -2 -3 L 2 -3 M 0 -3 A 2 2 0 1 0 0 -2.99';

  // 1. Mountain (山) - Layered peaks
  if (name.includes('山')) {
    return 'M -7 5 Q -4 -2 -2 -5 Q 0 -1 2 -3 Q 5 1 7 5 Z M -3 0 L -3 5 M 3 1 L 3 5 M -1 -2 L -1 5';
  }

  // 2. Water / River / Canal / Lake (河/湖/江/川/溪/水/湾/矶/塘) - Curling waves
  if (name.includes('河') || name.includes('湖') || name.includes('江') || name.includes('川') || name.includes('溪') || name.includes('水') || name.includes('湾') || name.includes('矶') || name.includes('塘')) {
    return 'M -7 -1 C -4 -4 -3 2 0 -1 C 3 -4 4 2 7 -1 M -7 2 C -4 -1 -3 5 0 2 C 3 -1 4 5 7 2';
  }

  // 3. Temple / Shrine (寺/庙/祠/观) - Pagoda
  if (name.includes('寺') || name.includes('庙') || name.includes('祠') || name.includes('观')) {
    return 'M -5 6 L 5 6 M -4 6 L -4 3 L 4 3 L 4 6 M -6 3 Q -4 2 -3 -1 L 3 -1 Q 4 2 6 3 M -2 -1 L -2 -4 L 2 -4 L 2 -1 M -4 -4 Q -2 -5 -1 -7 L 1 -7 Q 2 -5 4 -4 M 0 -7 L 0 -9';
  }

  // 4. Garden / Forest / Plantations (园/圃/林/草/梅/海棠/花) - Weeping willow
  if (name.includes('园') || name.includes('圃') || name.includes('林') || name.includes('草') || name.includes('梅') || name.includes('海棠') || name.includes('花')) {
    return 'M 0 6 L 0 2 Q 0 -4 4 -6 Q 2 -4 1 -3 Q 3 -1 1 0 Q 3 2 0 3 M 0 2 Q -2 -2 -5 -3 Q -3 -1 -2 0 Q -4 2 -1 3';
  }

  // 5. Building / House / Mansion (宅/府/家/楼/阁/堂/馆/舍/轩/院/庄/署/司/部) - Grand courtyard
  if (name.includes('宅') || name.includes('府') || name.includes('家') || name.includes('楼') || name.includes('阁') || name.includes('堂') || name.includes('馆') || name.includes('舍') || name.includes('轩') || name.includes('院') || name.includes('庄') || name.includes('署') || name.includes('司') || name.includes('部')) {
    return 'M -7 6 L 7 6 M -5 6 L -5 2 L 5 2 L 5 6 M -2 6 L -2 2 M 2 6 L 2 2 M -8 2 Q -5 0 -4 -2 L 4 -2 Q 5 0 8 2 M -3 -2 L -3 -5 L 3 -5 L 3 -2 M -5 -5 Q -3 -6 -1 -8 L 1 -8 Q 3 -6 5 -5';
  }

  // 6. Street / Lane / Bridge (街/巷/里/路/关/门/桥) - Arched bridge
  if (name.includes('街') || name.includes('巷') || name.includes('里') || name.includes('路') || name.includes('关') || name.includes('门') || name.includes('桥')) {
    return 'M -8 4 L -5 4 Q 0 -4 5 4 L 8 4 M -5 4 L -5 6 M 5 4 L 5 6 M -3 2 L -3 5 M 3 2 L 3 5 M 0 1 L 0 4 M -8 6 L 8 6';
  }

  // Default by location category / type
  if (location.type === 'garden') {
    return 'M 0 6 L 0 2 Q 0 -4 4 -6 Q 2 -4 1 -3 Q 3 -1 1 0 Q 3 2 0 3 M 0 2 Q -2 -2 -5 -3 Q -3 -1 -2 0 Q -4 2 -1 3';
  }
  if (location.type === 'landscape') {
    return 'M -7 5 Q -4 -2 -2 -5 Q 0 -1 2 -3 Q 5 1 7 5 Z M -3 0 L -3 5 M 3 1 L 3 5 M -1 -2 L -1 5';
  }
  if (location.type === 'site') {
    return 'M -7 6 L 7 6 M -5 6 L -5 2 L 5 2 L 5 6 M -2 6 L -2 2 M 2 6 L 2 2 M -8 2 Q -5 0 -4 -2 L 4 -2 Q 5 0 8 2 M -3 -2 L -3 -5 L 3 -5 L 3 -2 M -5 -5 Q -3 -6 -1 -8 L 1 -8 Q 3 -6 5 -5';
  }

  // Map Pin for default places (cities/provinces/origins)
  return 'M 0 6 L -3 1 A 4 4 0 1 1 3 1 Z M 0 -5 L 0 -1 M -2 -3 L 2 -3 M 0 -3 A 2 2 0 1 0 0 -2.99';
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
  nodes: { id: string; x: number; y: number; count: number; label: string; location: MapLocationData }[],
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

function getMarkerDisplayPosition(
  marker: MapMarker,
  zoomK: number,
  baseZoomK: number,
  maxZoomK: number,
) {
  const retention = markerOffsetRetention(zoomK, baseZoomK, maxZoomK);
  return {
    x: marker.baseX + marker.offsetX * retention,
    y: marker.baseY + marker.offsetY * retention,
    retention,
  };
}

function getLeaderLineEndpoints(
  marker: MapMarker,
  displayX: number,
  displayY: number,
  zoomK: number,
) {
  const dx = marker.baseX - displayX;
  const dy = marker.baseY - displayY;
  const len = Math.hypot(dx, dy);
  if (len < 0.01) return null;

  const inset = MARKER_RADIUS_PX / zoomK;
  const ux = dx / len;
  const uy = dy / len;

  return {
    x1: displayX + ux * inset,
    y1: displayY + uy * inset,
    x2: marker.baseX - ux * inset,
    y2: marker.baseY - uy * inset,
  };
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
      const spiral = spiralOffset(index + 1, SPIRAL_SPACING_PX);
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


export function LocationMapPanel({
  mapData,
  lang,
  title,
  locationType,
  onSelectLocation,
  onSelectGarden,
}: LocationMapPanelProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    const beijingProjected = projection(BEIJING_COORDS) as [number, number];
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
      .attr('fill', 'var(--paper-bg)')
      .attr('stroke', 'var(--paper-border)')
      .attr('stroke-width', 1)
      .style('pointer-events', 'none');

    const leaderLayer = g.append('g').attr('class', 'leader-layer');

    const capitalStarLayer = g.append('g').attr('class', 'capital-star-layer');
    const capitalStar = capitalStarLayer.append('g')
      .attr('class', 'capital-star')
      .attr('transform', `translate(${beijingProjected[0]},${beijingProjected[1]})`);

    capitalStar.append('path')
      .attr('d', capitalStarPath(CAPITAL_STAR_RADIUS_PX))
      .attr('fill', '#c9a227')
      .attr('stroke', 'var(--ink-dim-text)')
      .attr('stroke-width', 0.75)
      .style('pointer-events', 'none');

    capitalStar.append('text')
      .attr('class', `capital-star-label${lang === 'zh' ? ' font-hans' : ''}`)
      .attr('y', CAPITAL_STAR_RADIUS_PX + MARKER_LABEL_FONT_SIZE_PX + 1)
      .attr('text-anchor', 'middle')
      .attr('font-size', MARKER_LABEL_FONT_SIZE_PX)
      .attr('fill', 'var(--ink-dim-text)')
      .attr('stroke', 'var(--paper-bg)')
      .attr('stroke-width', 0.75)
      .attr('paint-order', 'stroke')
      .style('pointer-events', 'none')
      .text(lang === 'zh' ? '京师' : 'Beijing');

    const markerLayer = g.append('g').attr('class', 'marker-layer');

    const maxZoomK = 12;

    const updateMarkerTransforms = (scale: number) => {
      const inverse = 1 / scale;
      const lineWidth = 1 / scale;

      capitalStarLayer.select('g.capital-star')
        .attr('transform', `translate(${beijingProjected[0]},${beijingProjected[1]}) scale(${inverse})`);

      leaderLayer.selectAll<SVGLineElement, MapMarker>('line.marker-leader')
        .each(function (marker) {
          const { x, y } = getMarkerDisplayPosition(marker, scale, initialTransform.k, maxZoomK);
          const endpoints = getLeaderLineEndpoints(marker, x, y, scale);
          const line = d3.select(this);
          if (!endpoints) {
            line.style('display', 'none');
            return;
          }
          line
            .style('display', null)
            .attr('x1', endpoints.x1)
            .attr('y1', endpoints.y1)
            .attr('x2', endpoints.x2)
            .attr('y2', endpoints.y2)
            .attr('stroke-width', lineWidth);
        });

      markerLayer.selectAll<SVGGElement, MapMarker>('g.marker')
        .attr('transform', (marker) => {
          const { x, y } = getMarkerDisplayPosition(marker, scale, initialTransform.k, maxZoomK);
          return `translate(${x},${y}) scale(${inverse})`;
        });
    };

    leaderLayer.selectAll<SVGLineElement, MapMarker>('line.marker-leader')
      .data(markers, (d) => d.id)
      .enter()
      .append('line')
      .attr('class', 'marker-leader')
      .attr('stroke', 'var(--ink-dim-text)')
      .attr('stroke-opacity', 0.45)
      .style('pointer-events', 'none');

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

    markerGroups.append('path')
      .attr('class', 'marker-symbol-halo')
      .attr('d', (marker) => getLocationIconPath(marker.location))
      .attr('fill', 'none')
      .attr('stroke', 'var(--body-bg)')
      .attr('stroke-width', 3.5)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .style('pointer-events', 'none');

    markerGroups.append('path')
      .attr('class', 'marker-symbol')
      .attr('d', (marker) => getLocationIconPath(marker.location))
      .attr('fill', 'none')
      .attr('stroke', locationColors[locationType])
      .attr('stroke-width', 1.5)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .style('pointer-events', 'none');

    markerGroups.append('text')
      .attr('class', `marker-label${lang === 'zh' ? ' font-hans' : ''}`)
      .attr('y', MARKER_RADIUS_PX + MARKER_LABEL_FONT_SIZE_PX + 2)
      .attr('text-anchor', 'middle')
      .attr('font-size', MARKER_LABEL_FONT_SIZE_PX)
      .attr('fill', 'var(--ink-dim-text)')
      .attr('stroke', 'var(--paper-bg)')
      .attr('stroke-width', 0.75)
      .attr('paint-order', 'stroke')
      .style('pointer-events', 'none')
      .text((marker) => formatMapLabel(marker.location, lang));

    markerGroups.on('click', (event, marker) => {
      console.log('CLICKED MARKER ID:', marker.location.id);
      const garden = getGardenById(marker.location.id);
      console.log('FOUND GARDEN:', garden);
      if (garden) {
        console.log('CALLING onSelectGarden');
        onSelectGarden(garden);
      } else {
        const isHometown = marker.location.id.startsWith('hometown-');
        const typeLabels: Record<string, string> = {
          place: lang === 'zh' ? '地方' : 'Place',
          garden: lang === 'zh' ? '园林' : 'Garden',
          site: lang === 'zh' ? '住宅/街场' : 'Site',
          landscape: lang === 'zh' ? '山水名胜' : 'Landscape',
        };
        const location: NovelLocationWithChapters = {
          id: marker.location.id,
          name: marker.location.originZh || marker.location.origin,
          nameEn: marker.location.origin,
          type: isHometown ? 'place' : (marker.location.type as any || 'place'),
          typeZh: typeLabels[marker.location.type] || (lang === 'zh' ? '地方' : 'Place'),
          searchTokens: marker.location.searchTokens || [marker.location.originZh || marker.location.origin, marker.location.origin],
          chapterIds: marker.location.chapterIds || [],
        };
        console.log('CALLING onSelectLocation', location);
        onSelectLocation(location);
      }
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

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!containerRef.current || !svgRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = Math.min(w * 0.75, 420);
        if (w > 0 && h > 0) {
          svg.attr('viewBox', `0 0 ${w} ${h}`);
        }
      }, 150);
    });
    resizeObserver.observe(container);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      svg.on('.zoom', null);
      svg.selectAll('*').remove();
    };
  }, [mapData, lang, locationType]);

  if (mapData.length === 0) {
    return (
      <div className="rounded border border-[var(--paper-border)]/50 bg-[var(--body-bg)]/50 p-8 text-center text-sm text-[var(--ink-dim-text)] italic">
        {lang === 'zh' ? '此类别暂无地点' : 'No locations in this category'}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-[var(--paper-border)]/40 pb-2.5">
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full border border-[var(--paper-border)] shrink-0 shadow-xs"
            style={{ backgroundColor: locationColors[locationType] }}
          />
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-title)]">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-[var(--paper-border)] bg-[var(--paper-bg)] px-2 py-0.5 text-[9px] font-bold tabular-nums text-[var(--ink-dim-text)]">
          {lang === 'zh' ? `${mapData.length} 个图例标记` : `${mapData.length} legend markers`}
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-sm border border-[var(--paper-border)]/60 bg-[var(--body-bg)] shadow-xs"
        style={{ aspectRatio: '16/9', minHeight: '320px', maxHeight: '440px' }}
      >
        <svg ref={svgRef} className="h-full w-full" />

        <div className="pointer-events-none absolute bottom-2.5 left-3 rounded-sm border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/85 px-2 py-0.5 text-[9px] font-medium text-[var(--ink-dim-text)] shadow-xs backdrop-blur-xs">
          {lang === 'zh' ? '点击图标打开档案 · 鼠标滚动与拖拽缩放' : 'Click icon to view profile · Scroll & drag to zoom'}
        </div>
      </div>
    </div>
  );
}
