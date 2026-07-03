import React, { useMemo, useState } from 'react';
import { MapPin, Trees, Home, Mountain } from 'lucide-react';
import { Character } from '../types';
import coordinates from '../assets/coordinates.json';
import {
  locationTypeLabels,
  locationTypeOrder,
  LocationType,
  novelLocations,
} from '../locations';
import { LocationMapPanel, MapLocationData } from './LocationMapPanel';
import {
  getLocationChapterIds,
  getLocationFirstChapterId,
  getLocationFirstSnippet,
} from '../utils';

const typeIcons: Record<LocationType, React.ComponentType<{ size?: number; className?: string }>> = {
  place: MapPin,
  garden: Trees,
  site: Home,
  landscape: Mountain,
};

function bookInfoForLocation(loc: (typeof novelLocations)[number]) {
  return {
    searchTokens: loc.searchTokens,
    chapterIds: getLocationChapterIds(loc),
    firstSnippet: getLocationFirstSnippet(loc),
    firstChapterId: getLocationFirstChapterId(loc),
  };
}

interface HometownMapProps {
  characters: Character[];
  lang: 'en' | 'zh';
}

export function HometownMap({ characters, lang }: HometownMapProps) {
  const mapDataByType = useMemo(() => {
    const locationMap: Record<string, MapLocationData> = {};

    novelLocations.forEach((loc) => {
      const coords = (coordinates as any)[loc.id];
      if (coords) {
        locationMap[loc.id] = {
          id: loc.id,
          origin: loc.nameEn,
          originZh: loc.name,
          type: loc.type,
          count: 0,
          chars: [],
          coords,
          ...bookInfoForLocation(loc),
        };
      }
    });

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
      const locMatch = novelLocations.find(
        (l) => l.id.includes(origin.toLowerCase())
          || origin.toLowerCase().includes(l.nameEn.toLowerCase())
          || l.nameEn.toLowerCase().includes(origin.toLowerCase())
          || l.name === origin
          || origin === l.id,
      );

      if (locMatch && locationMap[locMatch.id]) {
        locationMap[locMatch.id].count += data.count;
        locationMap[locMatch.id].chars.push(...data.chars);
      } else {
        let coords = (coordinates as any)[origin]
          || (coordinates as any)[`city-${origin.toLowerCase()}`];
        if (!coords) {
          const matchingKey = Object.keys(coordinates).find(
            (k) => k.includes(origin) || origin.includes(k),
          );
          if (matchingKey) coords = (coordinates as any)[matchingKey];
          else coords = [105, 35];
        }
        locationMap[origin] = {
          id: origin,
          origin,
          originZh: data.originZh,
          type: 'place',
          count: data.count,
          chars: data.chars,
          coords,
          ...(locMatch ? bookInfoForLocation(locMatch) : {}),
        };
      }
    });

    const allData = Object.values(locationMap);
    const grouped = {} as Record<LocationType, MapLocationData[]>;

    for (const type of locationTypeOrder) {
      grouped[type] = allData
        .filter((d) => d.type === type)
        .sort((a, b) => b.count - a.count);
    }

    return grouped;
  }, [characters]);

  const activeTypes = locationTypeOrder.filter(
    (type) => mapDataByType[type].length > 0,
  );

  const [activeType, setActiveType] = useState<LocationType>(
    () => activeTypes[0] ?? 'site',
  );

  const resolvedActiveType = activeTypes.includes(activeType)
    ? activeType
    : activeTypes[0] ?? 'site';

  const totalLocations = activeTypes.reduce(
    (sum, type) => sum + mapDataByType[type].length,
    0,
  );

  return (
    <div
      className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] mt-6 scroll-mt-24"
      id="hometown-map"
    >
      <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#5d5048] font-bold">
          {lang === 'zh' ? '全书地点与人物分布图' : 'Locations & Character Hometowns'}
        </h2>
        <span className="text-[14px] text-[#5d5048] italic">
          {lang === 'zh' ? `${totalLocations} 个地点` : `${totalLocations} locations`}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2 mb-4">
        {activeTypes.map((type) => {
          const label = locationTypeLabels[type];
          const count = mapDataByType[type].length;
          const isActive = resolvedActiveType === type;

          const Icon = typeIcons[type];

          return (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={`w-full min-h-[45px] px-2 py-1.5 rounded-sm border text-[14px] sm:text-[14px] leading-tight text-center transition-all flex flex-col items-center justify-center gap-1 ${
                isActive
                  ? 'bg-[#8b4513] text-[#f4ecd8] border-[#8b4513] shadow-sm'
                  : 'bg-[#f4ecd8]/80 text-[#5d5048] border-[#d4c5a9] hover:bg-[#f4ecd8] hover:text-[#2c2420] hover:border-[#8b4513]/50'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 font-semibold">
                {Icon && <Icon size={14} className={isActive ? "text-[#f4ecd8]" : "text-[#8b4513]"} />}
                <span>
                  {lang === 'zh' ? label.zh : label.en}
                </span>
              </div>
              <span className={`block text-[11px] ${isActive ? 'text-[#f4ecd8]/80' : 'text-[#5d5048]/60'}`}>
                {count} {lang === 'zh' ? '处' : 'pts'}
              </span>
            </button>
          );
        })}
      </div>

      {activeTypes.length > 0 ? (
        <div key={resolvedActiveType}>
          <LocationMapPanel
            mapData={mapDataByType[resolvedActiveType]}
            lang={lang}
            locationType={resolvedActiveType}
            title={lang === 'zh'
              ? locationTypeLabels[resolvedActiveType].zh
              : locationTypeLabels[resolvedActiveType].en}
          />
        </div>
      ) : (
        <div className="rounded border border-[#d4c5a9]/50 bg-[#e5dcc3]/50 p-8 text-center text-sm text-[#5d5048] italic">
          {lang === 'zh' ? '暂无地点数据' : 'No location data available'}
        </div>
      )}
    </div>
  );
}
