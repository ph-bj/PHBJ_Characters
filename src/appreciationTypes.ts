export interface DimensionSubSection {
  labelZh: string;
  labelEn: string;
  textZh: string;
  textEn: string;
}

export interface DimensionInfo {
  iconType: "GitBranch" | "User" | "Heart" | "Eye" | "PenTool" | "MessageSquare";
  titleZh: string;
  titleEn: string;
  score: number;
  textZh?: string;
  textEn?: string;
  subsections?: DimensionSubSection[];
}

export interface RadarNode {
  subjectZh: string;
  subjectEn: string;
  score: number;
}

export interface TimelineNode {
  stageZh: string;
  stageEn: string;
  sentiment: number;
  descriptionZh: string;
  descriptionEn: string;
}

// Custom Visualizer Data Types
export interface TaxonomyFeelingItem {
  char: string;
  pinyin: string;
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
}

export interface TaxonomyVisualizerData {
  type: "taxonomy";
  lordsFeelings: TaxonomyFeelingItem[];
  performersFeelings: TaxonomyFeelingItem[];
}

export interface DrinkingCupItem {
  id: number;
  titleZh: string;
  titleEn: string;
  ruleZh: string;
  ruleEn: string;
  actionZh: string;
  actionEn: string;
  poetryZh?: string;
  poetryEn?: string;
  critiqueZh: string;
  critiqueEn: string;
}

export interface DrinkingCupsVisualizerData {
  type: "drinkingCups";
  cups: DrinkingCupItem[];
}

export interface ArchetypeItem {
  id: number;
  titleZh: string;
  titleEn: string;
  roleZh: string;
  roleEn: string;
  descZh: string;
  descEn: string;
}

export interface ArchetypesVisualizerData {
  type: "archetypes";
  archetypes: ArchetypeItem[];
}


export interface PoetryCritiqueItem {
  id: number;
  titleZh: string;
  titleEn: string;
  authorZh: string;
  authorEn: string;
  textZh: string;
  textEn: string;
  critiqueZh: string;
  critiqueEn: string;
}

export interface PoetryCritiqueVisualizerData {
  type: "poetryCritique";
  poems: PoetryCritiqueItem[];
}

export type ChapterVisualizerData =
  | TaxonomyVisualizerData
  | DrinkingCupsVisualizerData
  | ArchetypesVisualizerData
  | PoetryCritiqueVisualizerData
  | { type: "none" };

export interface ChapterAppreciationData {
  radarData: RadarNode[];
  timelineData: TimelineNode[];
  dimensions: DimensionInfo[];
  visualizer: ChapterVisualizerData;
}
