import React, { useMemo, useState } from 'react';
import {
  ChevronRight,
  Compass,
  Home,
  MapPin,
  Mountain,
  Trees,
  Users,
} from 'lucide-react';
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
} from '../utils';
import type { NovelLocationWithChapters } from '../utils';

type MapCategory = LocationType | 'hometown';

const mapCategoryOrder: MapCategory[] = ['hometown', ...locationTypeOrder];

const typeIcons: Record<MapCategory, React.ComponentType<{ size?: number; className?: string }>> = {
  hometown: Users,
  place: MapPin,
  garden: Trees,
  site: Home,
  landscape: Mountain,
};

const mapCategoryLabels: Record<MapCategory, { en: string; zh: string }> = {
  hometown: { en: 'Character Hometowns', zh: '人物籍贯' },
  place: { en: 'Places', zh: '地方' },
  garden: locationTypeLabels.garden,
  site: locationTypeLabels.site,
  landscape: locationTypeLabels.landscape,
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
  gardens: Garden[];
  locationsByType: Array<{
    type: LocationType;
    label: { en: string; zh: string };
    locations: NovelLocationWithChapters[];
  }>;
  lang: 'en' | 'zh';
  onSelectGarden: (garden: Garden) => void;
  onSelectLocation: (location: NovelLocationWithChapters) => void;
}

export function HometownMap({
  characters,
  gardens,
  locationsByType,
  lang,
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

    const hometownData = Object.entries(charOriginMap).map(([origin, data]) => {
      const locMatch = novelLocations.find(
        (location) => location.id.includes(origin.toLowerCase())
          || origin.toLowerCase().includes(location.nameEn.toLowerCase())
          || location.nameEn.toLowerCase().includes(origin.toLowerCase())
          || location.name === origin
          || origin === location.id,
      );
      let coords = locMatch ? (coordinates as any)[locMatch.id] : undefined;
      coords ||= (coordinates as any)[origin]
        || (coordinates as any)[`city-${origin.toLowerCase()}`];

      if (!coords) {
        const matchingKey = Object.keys(coordinates).find(
          (key) => key.includes(origin) || origin.includes(key),
        );
        coords = matchingKey ? (coordinates as any)[matchingKey] : [105, 35];
      }

      return {
        id: `hometown-${origin}`,
        origin,
        originZh: data.originZh,
        type: 'place',
        count: data.count,
        chars: data.chars,
        coords,
        ...(locMatch ? bookInfoForLocation(locMatch) : {}),
      } satisfies MapLocationData;
    });

    const allLocations = Object.values(locationMap);
    const grouped = { hometown: hometownData } as Record<MapCategory, MapLocationData[]>;

    for (const type of locationTypeOrder) {
      grouped[type] = allLocations.filter((data) => data.type === type);
    }

    for (const category of mapCategoryOrder) {
      grouped[category].sort((a, b) => b.count - a.count);
    }

    return grouped;
  }, [characters]);

  const activeTypes = mapCategoryOrder.filter(
    (category) => mapDataByType[category].length > 0,
  );

  const [activeType, setActiveType] = useState<MapCategory>(
    () => activeTypes[0] ?? 'hometown',
  );

  const resolvedActiveType = activeTypes.includes(activeType)
    ? activeType
    : activeTypes[0] ?? 'hometown';

  const majorGardens = gardens.filter((garden) => garden.type === 'major');
  const subLocations = gardens.filter((garden) => garden.type === 'sublocation');
  const otherSpaces = gardens.filter((garden) => garden.type === 'other');
  const locationCount = locationsByType.reduce(
    (sum, group) => sum + group.locations.length,
    0,
  );
  const gardenLocationGroup = locationsByType.find((group) => group.type === 'garden');
  const additionalGardenLocations = (gardenLocationGroup?.locations ?? []).filter(
    (location) => !gardens.some(
      (garden) => garden.name === location.name
        || garden.nameEn === location.nameEn
        || garden.searchTokens.some((token) => location.searchTokens.includes(token)),
    ),
  );
  const mergedGardenCount = gardens.length + additionalGardenLocations.length;
  const storyGeographyCount = locationCount
    - (gardenLocationGroup?.locations.length ?? 0)
    + mergedGardenCount;

  return (
    <div
      className="parchment relative mt-6 scroll-mt-24 overflow-hidden rounded-sm border-double border-4 border-[var(--paper-border)]"
      id="hometown-map"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[var(--accent)]/10" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-[var(--accent)]/10" />

      <header className="relative border-b border-[var(--paper-border)] bg-[var(--accent)]/[0.035] px-4 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 text-[var(--accent)] shadow-sm">
              <Compass size={20} strokeWidth={1.7} />
            </div>
            <div>
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {lang === 'zh' ? '小说地理志' : 'An atlas of the novel'}
              </p>
              <h2 className="font-hans text-xl font-bold leading-tight tracking-tight text-[var(--ink-title)] sm:text-2xl">
                {lang === 'zh' ? '籍贯、园林与地点' : 'Hometowns, Gardens & Locations'}
              </h2>
              <p className="mt-2 max-w-2xl text-[11px] leading-relaxed text-[var(--ink-dim-text)] sm:text-xs">
                {lang === 'zh'
                  ? '循地图探索人物来处、名园胜景与章回中出现的地点。'
                  : 'Trace where characters come from and explore the gardens, landmarks, and landscapes that shape the story.'}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative space-y-6 p-4 sm:p-6">
        <section aria-labelledby="map-explorer-title">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                {lang === 'zh' ? '交互地图' : 'Interactive map'}
              </p>
              <h3 id="map-explorer-title" className="mt-1 text-sm font-bold text-[var(--ink-title)]">
                {lang === 'zh' ? '按地点类型探索' : 'Explore by location type'}
              </h3>
            </div>
            <p className="hidden text-[10px] italic text-[var(--ink-dim-text)] sm:block">
              {lang === 'zh' ? '选择类别以更新地图' : 'Choose a category to update the map'}
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-1.5 rounded-sm border border-[var(--paper-border)] bg-black/[0.025] p-1.5 sm:grid-cols-3"
            role="tablist"
            aria-label={lang === 'zh' ? '地点类型' : 'Location types'}
          >
            {activeTypes.map((type) => {
              const label = mapCategoryLabels[type];
              const count = mapDataByType[type].length;
              const isActive = resolvedActiveType === type;
              const Icon = typeIcons[type];

              return (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  id={`location-tab-${type}`}
                  aria-selected={isActive}
                  aria-controls="location-map-panel"
                  onClick={() => setActiveType(type)}
                  className={`group flex min-h-[50px] items-center gap-2.5 rounded-sm border px-3 py-2 text-left transition-all ${
                    isActive
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--paper-bg)] shadow-sm'
                      : 'border-transparent bg-[var(--paper-bg)]/70 text-[var(--ink-dim-text)] hover:border-[var(--paper-border)] hover:bg-[var(--paper-bg)] hover:text-[var(--ink-title)]'
                  }`}
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    isActive ? 'bg-[var(--paper-bg)]/15' : 'bg-[var(--accent)]/10 text-[var(--accent)]'
                  }`}>
                    <Icon size={14} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold leading-tight">
                      {lang === 'zh' ? label.zh : label.en}
                    </span>
                    <span className={`mt-0.5 block text-[9px] ${
                      isActive ? 'text-[var(--paper-bg)]/75' : 'text-[var(--ink-dim-text)]/70'
                    }`}>
                      {lang === 'zh' ? `${count} 处地点` : `${count} map ${count === 1 ? 'point' : 'points'}`}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="location-map-panel"
            role="tabpanel"
            aria-labelledby={`location-tab-${resolvedActiveType}`}
            className="mt-3 overflow-hidden rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/50 shadow-sm"
          >
            {activeTypes.length > 0 ? (
              <div key={resolvedActiveType}>
                <LocationMapPanel
                  mapData={mapDataByType[resolvedActiveType]}
                  lang={lang}
                  locationType={resolvedActiveType === 'hometown' ? 'site' : resolvedActiveType}
                  title={lang === 'zh'
                    ? mapCategoryLabels[resolvedActiveType].zh
                    : mapCategoryLabels[resolvedActiveType].en}
                  onSelectLocation={onSelectLocation}
                  onSelectGarden={onSelectGarden}
                />
              </div>
            ) : (
              <div className="p-8 text-center text-sm italic text-[var(--ink-dim-text)]">
                {lang === 'zh' ? '暂无地点数据' : 'No location data available'}
              </div>
            )}
          </div>
        </section>

        <div className="h-px bg-[var(--paper-border)]" />

        <section
          className="rounded-sm border border-[var(--paper-border)] bg-white/10 p-4 sm:p-5"
          aria-labelledby="locations-title"
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--paper-border)]/70 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                <MapPin size={13} />
              </span>
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {lang === 'zh' ? '章回地理' : 'Story geography'}
                </p>
                <h3 id="locations-title" className="text-xs font-bold text-[var(--ink-title)]">
                  {lang === 'zh' ? '地点索引' : 'Location Index'}
                </h3>
              </div>
            </div>
            <span className="rounded-full border border-[var(--paper-border)] bg-[var(--paper-bg)] px-2.5 py-1 text-[9px] font-bold tabular-nums text-[var(--ink-dim-text)]">
              {lang === 'zh' ? `${storyGeographyCount} 处` : `${storyGeographyCount} places`}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Character Hometowns Section */}
            {mapDataByType.hometown.length > 0 && (
              <div>
                <div className="mb-2.5 flex items-center gap-2">
                  <Users size={11} className="text-[var(--accent)]" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--ink-dim-text)]">
                    {lang === 'zh' ? '人物籍贯' : 'Character Hometowns'}
                  </p>
                  <span className="ml-auto rounded-full bg-[var(--accent)]/10 px-1.5 py-0.5 text-[8px] font-bold tabular-nums text-[var(--accent)]">
                    {mapDataByType.hometown.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mapDataByType.hometown.map((hometown) => {
                    const name = lang === 'zh' ? (hometown.originZh || hometown.origin) : hometown.origin;
                    return (
                      <button
                        key={hometown.id}
                        type="button"
                        onClick={() => {
                          const hometownLocation: NovelLocationWithChapters = {
                            id: hometown.id,
                            name: hometown.originZh || hometown.origin,
                            nameEn: hometown.origin,
                            type: 'place',
                            typeZh: lang === 'zh' ? '地方' : 'Place',
                            searchTokens: hometown.searchTokens || [hometown.originZh || hometown.origin, hometown.origin],
                            chapterIds: hometown.chapterIds || [],
                          };
                          onSelectLocation(hometownLocation);
                        }}
                        className="group flex items-center gap-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 px-2.5 py-1.5 text-left transition-all hover:border-[#4d6a3a]/40 hover:bg-[#4d6a3a]/[0.06]"
                        title={lang === 'zh' ? `${name} (共 ${hometown.count} 人)` : `${name} (${hometown.count} ${hometown.count === 1 ? 'character' : 'characters'})`}
                      >
                        <Users size={10} className="shrink-0 text-[#4d6a3a]/60" />
                        <span className="whitespace-nowrap font-hans text-[9px] font-bold leading-tight text-[var(--ink-title)] transition-colors group-hover:text-[#4d6a3a]">
                          {name}
                          <span className="ml-1 text-[8px] font-normal text-[var(--ink-dim-text)]">
                            ({hometown.count})
                          </span>
                        </span>
                        <ChevronRight size={10} className="shrink-0 text-[var(--ink-dim-text)]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[#4d6a3a]" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {locationsByType.map((group) => {
              const Icon = typeIcons[group.type];

              if (group.type === 'garden') {
                return (
                  <div key={group.type} className="sm:col-span-2">
                    <div className="mb-3 flex items-center gap-2">
                      <Trees size={11} className="text-[#4d6a3a]" />
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--ink-dim-text)]">
                        {lang === 'zh' ? group.label.zh : group.label.en}
                      </p>
                      <span className="ml-auto rounded-full bg-[#4d6a3a]/10 px-1.5 py-0.5 text-[8px] font-bold tabular-nums text-[#4d6a3a]">
                        {mergedGardenCount}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--ink-dim-text)]">
                          {lang === 'zh' ? '主要园林' : 'Major Gardens'}
                        </p>
                        <div className="space-y-1.5">
                          {majorGardens.map((garden) => (
                            <button
                              key={garden.id}
                              type="button"
                              onClick={() => onSelectGarden(garden)}
                              className="group flex w-full items-center gap-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 px-2.5 py-1.5 text-left transition-all hover:border-[#4d6a3a]/40 hover:bg-[#4d6a3a]/[0.06]"
                            >
                              <Trees size={10} className="shrink-0 text-[#4d6a3a]/60" />
                              <span className="min-w-0 flex-1">
                                <span className="block truncate font-hans text-[9px] font-bold text-[var(--ink-title)] transition-colors group-hover:text-[#4d6a3a]">
                                  {lang === 'zh' ? garden.name : garden.nameEn}
                                </span>
                                <span className="mt-0.5 block truncate text-[8px] text-[var(--ink-dim-text)]">
                                  {lang === 'zh' ? garden.location : garden.locationEn}
                                </span>
                              </span>
                              <ChevronRight size={10} className="shrink-0 text-[var(--ink-dim-text)]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[#4d6a3a]" />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            label: lang === 'zh' ? '园中胜景' : 'Sub-Locations',
                            items: subLocations,
                          },
                          {
                            label: lang === 'zh' ? '其他场所' : 'Other Spaces',
                            items: otherSpaces,
                          },
                        ].map((gardenGroup) => (
                          <div key={gardenGroup.label}>
                            <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--ink-dim-text)]">
                              {gardenGroup.label}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {gardenGroup.items.map((garden) => (
                                <button
                                  key={garden.id}
                                  type="button"
                                  onClick={() => onSelectGarden(garden)}
                                  className="group flex items-center gap-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 px-2.5 py-1.5 text-left transition-all hover:border-[#4d6a3a]/40 hover:bg-[#4d6a3a]/[0.06]"
                                >
                                  <Trees size={10} className="shrink-0 text-[#4d6a3a]/60" />
                                  <span className="whitespace-nowrap font-hans text-[9px] font-bold leading-tight text-[var(--ink-title)] transition-colors group-hover:text-[#4d6a3a]">
                                    {lang === 'zh' ? garden.name : garden.nameEn}
                                  </span>
                                  <ChevronRight size={10} className="shrink-0 text-[var(--ink-dim-text)]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[#4d6a3a]" />
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {additionalGardenLocations.length > 0 && (
                      <div className="mt-4 border-t border-[var(--paper-border)]/60 pt-4">
                        <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--ink-dim-text)]">
                          {lang === 'zh' ? '其他园林地点' : 'Additional Garden Sites'}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {additionalGardenLocations.map((location) => (
                            <button
                              key={location.id}
                              type="button"
                              onClick={() => onSelectLocation(location)}
                              className="group flex items-center gap-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 px-2.5 py-1.5 text-left transition-all hover:border-[#4d6a3a]/40 hover:bg-[#4d6a3a]/[0.06]"
                              title={lang === 'zh' ? location.name : location.nameEn}
                            >
                              <Trees size={10} className="shrink-0 text-[#4d6a3a]/60" />
                              <span className="whitespace-nowrap font-hans text-[9px] font-bold text-[var(--ink-title)] group-hover:text-[#4d6a3a]">
                                {lang === 'zh' ? location.name : location.nameEn}
                              </span>
                              <ChevronRight size={10} className="text-[var(--ink-dim-text)]/30" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={group.type}>
                  <div className="mb-2.5 flex items-center gap-2">
                    <Icon size={11} className="text-[var(--accent)]" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--ink-dim-text)]">
                      {lang === 'zh' ? group.label.zh : group.label.en}
                    </p>
                    <span className="ml-auto rounded-full bg-[var(--accent)]/10 px-1.5 py-0.5 text-[8px] font-bold tabular-nums text-[var(--accent)]">
                      {group.locations.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.locations.map((location) => (
                      <button
                        key={location.id}
                        type="button"
                        onClick={() => onSelectLocation(location)}
                        className="group flex items-center gap-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 px-2.5 py-1.5 text-left transition-all hover:border-[#4d6a3a]/40 hover:bg-[#4d6a3a]/[0.06]"
                        title={lang === 'zh' ? location.name : location.nameEn}
                      >
                        <Icon size={10} className="shrink-0 text-[#4d6a3a]/60" />
                        <span className="whitespace-nowrap font-hans text-[9px] font-bold leading-tight text-[var(--ink-title)] transition-colors group-hover:text-[#4d6a3a]">
                          {lang === 'zh' ? location.name : location.nameEn}
                        </span>
                        <ChevronRight size={10} className="shrink-0 text-[var(--ink-dim-text)]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[#4d6a3a]" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
