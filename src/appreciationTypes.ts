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


export interface WealthFlowItem {
  id: number;
  sourceZh: string;
  sourceEn: string;
  targetZh: string;
  targetEn: string;
  amountZh: string;
  amountEn: string;
  impactZh: string;
  impactEn: string;
}

export interface WealthFlowVisualizerData {
  type: "wealthFlow";
  flows: WealthFlowItem[];
}

export interface SpatialMappingItem {
  id: number;
  locationZh: string;
  locationEn: string;
  atmosphereZh: string;
  atmosphereEn: string;
  significanceZh: string;
  significanceEn: string;
}

export interface SpatialMappingVisualizerData {
  type: "spatialMapping";
  spaces: SpatialMappingItem[];
}

export interface RumorNetworkItem {
  id: number;
  rumorZh: string;
  rumorEn: string;
  originZh: string;
  originEn: string;
  effectZh: string;
  effectEn: string;
}

export interface RumorNetworkVisualizerData {
  type: "rumorNetwork";
  rumors: RumorNetworkItem[];
}

export interface SocialLadderItem {
  id: number;
  characterZh: string;
  characterEn: string;
  initialStatusZh: string;
  initialStatusEn: string;
  finalStatusZh: string;
  finalStatusEn: string;
  methodZh: string;
  methodEn: string;
}

export interface SocialLadderVisualizerData {
  type: "socialLadder";
  ladder: SocialLadderItem[];
}

export interface PoetryItem {
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

export interface PoetryCritiqueItem {
  id: number;
  titleZh: string;
  titleEn: string;
  contentZh: string;
  contentEn: string;
  critiqueZh: string;
  critiqueEn: string;
}

export interface PoetryCritiqueVisualizerData {
  type: "poetryCritique";
  poems?: PoetryItem[];
  critiques?: PoetryCritiqueItem[];
}

export interface EmotionalDichotomyItem {
  id: number;
  characterZh: string;
  characterEn: string;
  surfaceEmotionZh: string;
  surfaceEmotionEn: string;
  hiddenEmotionZh: string;
  hiddenEmotionEn: string;
  triggerZh: string;
  triggerEn: string;
}

export interface EmotionalDichotomyVisualizerData {
  type: "emotionalDichotomy";
  dichotomies: EmotionalDichotomyItem[];
}

export interface PowerDynamicsItem {
  id: number;
  dominatorZh: string;
  dominatorEn: string;
  submissiveZh: string;
  submissiveEn: string;
  powerBaseZh: string;
  powerBaseEn: string;
  shiftZh: string;
  shiftEn: string;
}

export interface PowerDynamicsVisualizerData {
  type: "powerDynamics";
  dynamics: PowerDynamicsItem[];
}

export interface ObjectSymbolismItem {
  id: number;
  objectZh: string;
  objectEn: string;
  appearanceZh: string;
  appearanceEn: string;
  meaningZh: string;
  meaningEn: string;
}

export interface ObjectSymbolismVisualizerData {
  type: "objectSymbolism";
  objects: ObjectSymbolismItem[];
}

export type ChapterVisualizerData =
  | TaxonomyVisualizerData
  | DrinkingCupsVisualizerData
  | ArchetypesVisualizerData
  | WealthFlowVisualizerData
  | SpatialMappingVisualizerData
  | RumorNetworkVisualizerData
  | SocialLadderVisualizerData
  | PoetryCritiqueVisualizerData
  | EmotionalDichotomyVisualizerData
  | PowerDynamicsVisualizerData
  | ObjectSymbolismVisualizerData
  | { type: "none" };

export interface ChapterAppreciationData {
  radarData: RadarNode[];
  timelineData: TimelineNode[];
  dimensions: DimensionInfo[];
  visualizer?: ChapterVisualizerData;
  visualizers?: ChapterVisualizerData[];
  protagonistZh?: string;
  protagonistEn?: string;
}
