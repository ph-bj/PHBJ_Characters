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
import { type Garden } from '../gardens';
import { LocationMapPanel, MapLocationData } from './LocationMapPanel';
import {
  getLocationChapterIds,
  getLocationFirstChapterId,
  getLocationFirstSnippet,
  getCharacterNameForLanguage,
} from '../utils';
import type { NovelLocationWithChapters } from '../utils';

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
  originStats: Array<{
    name: string;
    count: number;
    chars: Character[];
    percentage: number;
  }>;
  gardens: Garden[];
  locationsByType: Array<{
    type: LocationType;
    label: { en: string; zh: string };
    locations: NovelLocationWithChapters[];
  }>;
  lang: 'en' | 'zh';
  onSelectCharacter: (character: Character) => void;
  onSelectGarden: (garden: Garden) => void;
  onSelectLocation: (location: NovelLocationWithChapters) => void;
}

export function HometownMap({
  characters,
  originStats,
  gardens,
  locationsByType,
  lang,
  onSelectCharacter,
  onSelectGarden,
  onSelectLocation,
}: HometownMapProps) {
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
  const majorGardens = gardens.filter((garden) => garden.type === 'major');
  const subLocations = gardens.filter((garden) => garden.type === 'sublocation');
  const otherSpaces = gardens.filter((garden) => garden.type === 'other');
  const locationCount = locationsByType.reduce(
    (sum, group) => sum + group.locations.length,
    0,
  );

  return (
    <div
      className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[var(--paper-border)] mt-6 scroll-mt-24"
      id="hometown-map"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between border-b border-[var(--paper-border)] pb-3 mb-4">
        <div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
            {lang === 'zh' ? '籍贯、园林与地点总图' : 'Hometowns, Gardens & Locations'}
          </h2>
          <p className="text-[11px] text-[var(--ink-dim-text)] italic mt-1">
            {lang === 'zh'
              ? '整合人物籍贯、园林场所、章回地点与地理分布的交互式索引。'
              : 'An integrated index of character hometowns, gardens, named locations, and their chapter distribution.'}
          </p>
        </div>
        <span className="text-[12px] sm:text-[14px] text-[var(--ink-dim-text)] italic">
          {lang === 'zh'
            ? `${totalLocations} 个地图点 · ${locationCount} 处命名地点`
            : `${totalLocations} map points · ${locationCount} named locations`}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
        <section className="lg:col-span-2 rounded-sm border border-[var(--paper-border)]/60 bg-white/10 p-4">
          <div className="flex items-center justify-between gap-3 mb-3 border-b border-[var(--paper-border)]/60 pb-2">
            <div className="flex items-center gap-2">
              <Home size={11} className="text-[var(--accent)]" />
              <h3 className="text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim-text)] font-bold">
                {lang === 'zh' ? '人物籍贯' : 'Character Hometowns'}
              </h3>
            </div>
            <span className="text-[11px] text-[var(--ink-dim-text)] italic">
              {lang === 'zh' ? `${originStats.length} 处` : `${originStats.length} origins`}
            </span>
          </div>

          <div className="space-y-3 max-h-[26rem] overflow-y-auto pr-1">
            {originStats.map((stat) => (
              <div key={stat.name} className="space-y-1.5">
                <div className="flex justify-between text-[12px] gap-3">
                  <span className="truncate pr-2 font-hans text-[var(--ink-title)]">
                    {lang === 'zh'
                      ? stat.name === 'Unknown'
                        ? '未知'
                        : stat.chars[0]?.originZh || stat.name
                      : stat.name}
                  </span>
                  <span className="text-[var(--ink-dim-text)] flex-shrink-0">
                    {stat.count}
                  </span>
                </div>
                <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--accent)] opacity-60"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {stat.chars.map((character) => (
                    <button
                      key={character.id}
                      onClick={() => onSelectCharacter(character)}
                      className="text-[9px] px-1.5 py-0.5 bg-black/5 hover:bg-[var(--accent)]/15 text-[var(--ink-dim-text)] hover:text-[var(--accent)] rounded-sm transition-colors font-sans leading-tight"
                    >
                      {getCharacterNameForLanguage(character, lang)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-sm border border-[var(--paper-border)]/60 bg-white/10 p-4">
          <div className="flex items-center justify-between gap-3 mb-3 border-b border-[var(--paper-border)]/60 pb-2">
            <div className="flex items-center gap-2">
              <Trees size={11} className="text-[#4d6a3a]" />
              <h3 className="text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim-text)] font-bold">
                {lang === 'zh' ? '园林与场所' : 'Gardens & Spaces'}
              </h3>
            </div>
            <span className="text-[11px] text-[var(--ink-dim-text)] italic">
              {lang === 'zh' ? `${gardens.length} 处` : `${gardens.length} spaces`}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-2 font-bold">
                {lang === 'zh' ? '主要园林' : 'Major Gardens'}
              </p>
              <div className="flex flex-col gap-1.5">
                {majorGardens.map((garden) => (
                  <button
                    key={garden.id}
                    onClick={() => onSelectGarden(garden)}
                    className="text-left px-2.5 py-2 rounded-sm border border-[var(--paper-border)]/60 hover:border-[#4d6a3a]/50 hover:bg-[#4d6a3a]/5 transition-all group flex items-center gap-2"
                  >
                    <Trees
                      size={10}
                      className="text-[#4d6a3a]/50 group-hover:text-[#4d6a3a] shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[12px] font-hans font-bold text-[var(--ink-title)] block leading-tight">
                        {lang === 'zh' ? garden.name : garden.nameEn}
                      </span>
                      <span className="text-[9px] text-[var(--ink-dim-text)] leading-tight">
                        {lang === 'zh' ? garden.location : garden.locationEn}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-2 font-bold">
                {lang === 'zh' ? '园中胜景' : 'Sub-Locations'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {subLocations.map((garden) => (
                  <button
                    key={garden.id}
                    onClick={() => onSelectGarden(garden)}
                    className="text-[10px] px-2 py-1 rounded-sm border border-[var(--paper-border)]/60 hover:border-[var(--accent)]/40 bg-white/20 hover:bg-[var(--accent)]/5 text-[var(--ink-dim-text)] hover:text-[var(--accent)] transition-all font-hans leading-tight"
                  >
                    {lang === 'zh' ? garden.name : garden.nameEn}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-2 font-bold">
                {lang === 'zh' ? '其他场所' : 'Other Spaces'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {otherSpaces.map((garden) => (
                  <button
                    key={garden.id}
                    onClick={() => onSelectGarden(garden)}
                    className="text-[10px] px-2 py-1 rounded-sm border border-[var(--paper-border)]/60 hover:border-[var(--accent)]/40 bg-white/20 hover:bg-[var(--accent)]/5 text-[var(--ink-dim-text)] hover:text-[var(--accent)] transition-all font-hans leading-tight"
                  >
                    {lang === 'zh' ? garden.name : garden.nameEn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-sm border border-[var(--paper-border)]/60 bg-white/10 p-4 mb-5">
        <div className="flex items-center justify-between gap-3 mb-3 border-b border-[var(--paper-border)]/60 pb-2">
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-[var(--accent)]" />
            <h3 className="text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim-text)] font-bold">
              {lang === 'zh' ? '地点索引' : 'Locations'}
            </h3>
          </div>
          <span className="text-[11px] text-[var(--ink-dim-text)] italic">
            {lang === 'zh' ? `${locationCount} 处` : `${locationCount} places`}
          </span>
        </div>

        <div className="space-y-4">
          {locationsByType.map((group) => (
            <div key={group.type}>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
                  {lang === 'zh' ? group.label.zh : group.label.en}
                </p>
                <span className="text-[9px] text-[var(--accent)] font-sans font-bold">
                  {group.locations.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => onSelectLocation(location)}
                    className="px-2.5 py-1.5 rounded-sm border border-[var(--paper-border)]/50 bg-white/10 hover:bg-[var(--accent)]/5 hover:border-[var(--accent)]/30 transition-all group"
                    title={lang === 'zh' ? `${location.name}` : location.nameEn}
                  >
                    <p className="text-[11px] font-bold text-[var(--ink-title)] font-hans leading-tight group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                      {lang === 'zh' ? location.name : location.nameEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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
                  ? 'bg-[var(--accent)] text-[var(--paper-bg)] border-[var(--accent)] shadow-sm'
                  : 'bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] border-[var(--paper-border)] hover:bg-[var(--paper-bg)] hover:text-[var(--ink-title)] hover:border-[var(--accent)]/50'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 font-semibold">
                {Icon && <Icon size={14} className={isActive ? "text-[var(--paper-bg)]" : "text-[var(--accent)]"} />}
                <span>
                  {lang === 'zh' ? label.zh : label.en}
                </span>
              </div>
              <span className={`block text-[11px] ${isActive ? 'text-[var(--paper-bg)]/80' : 'text-[var(--ink-dim-text)]/60'}`}>
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
        <div className="rounded border border-[var(--paper-border)]/50 bg-[var(--body-bg)]/50 p-8 text-center text-sm text-[var(--ink-dim-text)] italic">
          {lang === 'zh' ? '暂无地点数据' : 'No location data available'}
        </div>
      )}
    </div>
  );
}
