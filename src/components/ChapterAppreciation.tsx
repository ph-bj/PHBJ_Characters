import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  GitBranch,
  Heart,
  Eye,
  PenTool,
  MessageSquare,
  Sparkles,
  User,
  Wine,
  ArrowRight,
  MapPin,
  MessageCircle,
  TrendingUp,
  Feather,
  Zap,
  Shield,
  Gem,
  Users,
  Waves,

} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getChapterAppreciation } from "../appreciationData";
import {
  TaxonomyFeelingItem,
  DrinkingCupItem,
  ArchetypeItem,
  ChapterVisualizerData
} from "../appreciationTypes";



function getProtagonist(chapterId: number): { zh: string; en: string } | null {
  const mapping: Record<number, { zh: string; en: string }> = {
    1: { zh: "梅子玉", en: "Mei Ziyu" },
    2: { zh: "孙亮功", en: "Sun Lianggong" },
    3: { zh: "魏聘才", en: "Wei Pincai" },
    4: { zh: "梅子玉", en: "Mei Ziyu" },
    5: { zh: "杜琴言", en: "Du Qinyan" },
    6: { zh: "梅子玉", en: "Mei Ziyu" },
    7: { zh: "梅子玉与众名士", en: "Mei Ziyu & the Scholars" },
    8: { zh: "李元茂与魏聘才", en: "Li Yuanmao & Wei Pincai" },
    9: { zh: "梅子玉", en: "Mei Ziyu" },
    10: { zh: "梅子玉", en: "Mei Ziyu" },
    11: { zh: "袁夫人与众夫人", en: "Lady Yuan & the Noble Ladies" },
    12: { zh: "田春航", en: "Tian Chunhang" },
    13: { zh: "田春航与苏蕙芳", en: "Tian Chunhang & Su Huifang" },
    14: { zh: "田春航与苏蕙芳", en: "Tian Chunhang & Su Huifang" },
    15: { zh: "梅子玉与众名士", en: "Mei Ziyu & the Scholars" },
    16: { zh: "魏聘才与梅子玉", en: "Wei Pincai & Mei Ziyu" },
    17: { zh: "梅子玉与众名士", en: "Mei Ziyu & the Scholars" },
    18: { zh: "魏聘才", en: "Wei Pincai" },
    19: { zh: "魏聘才", en: "Wei Pincai" },
    20: { zh: "徐子云与众名士", en: "Xu Ziyun & the Scholars" },
    21: { zh: "梅子玉与魏聘才", en: "Mei Ziyu & Wei Pincai" },
    22: { zh: "梅子玉与杜琴言", en: "Mei Ziyu & Du Qinyan" },
    23: { zh: "李元茂", en: "Li Yuanmao" },
    24: { zh: "颜仲清与王恂", en: "Yan Zhongqing & Wang Xun" },
    25: { zh: "华公子", en: "Young Master Hua" },
    26: { zh: "华公子与魏聘才", en: "Young Master Hua & Wei Pincai" },
    27: { zh: "奚十一与魏聘才", en: "Xi Shiyi & Wei Pincai" },
    28: { zh: "杜琴言", en: "Du Qinyan" },
    29: { zh: "梅子玉与杜琴言", en: "Mei Ziyu & Du Qinyan" },
    30: { zh: "杜琴言", en: "Du Qinyan" },
    31: { zh: "冯子佩与杜琴言", en: "Feng Zipei & Du Qinyan" },
    32: { zh: "田春航与苏蕙芳", en: "Tian Chunhang & Su Huifang" },
    33: { zh: "梅子玉与袁宝珠", en: "Mei Ziyu & Yuan Baozhu" },
    34: { zh: "魏聘才与李元茂", en: "Wei Pincai & Li Yuanmao" },
    35: { zh: "魏聘才", en: "Wei Pincai" },
    36: { zh: "杜琴言", en: "Du Qinyan" },
    37: { zh: "杜琴言", en: "Du Qinyan" },
    38: { zh: "屈道翁与众名士", en: "Qu Daoweng & the Scholars" },
    39: { zh: "李元茂与魏聘才", en: "Li Yuanmao & Wei Pincai" },
    40: { zh: "奚十一与潘其观", en: "Xi Shiyi & Pan Qiguan" },
    41: { zh: "华公子", en: "Young Master Hua" },
    42: { zh: "杜琴言", en: "Du Qinyan" },
    43: { zh: "苏蕙芳与徐子云", en: "Su Huifang & Xu Ziyun" },
    44: { zh: "华公子与徐子云", en: "Young Master Hua & Xu Ziyun" },
    45: { zh: "梅子玉与杜琴言", en: "Mei Ziyu & Du Qinyan" },
    46: { zh: "杜琴仙与屈道翁", en: "Du Qinxian & Qu Daoweng" },
    47: { zh: "田春航", en: "Tian Chunhang" },
    48: { zh: "杜琴仙与田春航", en: "Du Qinxian & Tian Chunhang" },
    49: { zh: "田春航", en: "Tian Chunhang" },
    50: { zh: "刘文泽与林春喜", en: "Liu Wenze & Lin Chunxi" },
    51: { zh: "孙嗣徽与李元茂", en: "Sun Sihui & Li Yuanmao" },
    52: { zh: "田春航", en: "Tian Chunhang" },
    53: { zh: "华公子与陆素兰", en: "Young Master Hua & Lu Sulan" },
    54: { zh: "梅子玉", en: "Mei Ziyu" },
    55: { zh: "杜琴仙 (杜琴言)", en: "Du Qinxian (Du Qinyan)" },
    56: { zh: "杜琴仙与屈道翁", en: "Du Qinxian & Qu Daoweng" },
    57: { zh: "袁绮香与众夫人", en: "Yuan Qixiang & the Ladies" },
    58: { zh: "奚十一", en: "Xi Shiyi" },
    59: { zh: "杜琴仙 (杜琴言)", en: "Du Qinxian (Du Qinyan)" },
    60: { zh: "杜琴仙与众名士", en: "Du Qinxian & the Company" }
  };
  return mapping[chapterId] || null;
}

export function ChapterAppreciation({
  chapterId = 1,
  lang,
}: {
  chapterId?: number;
  lang: "en" | "zh";
}) {
  const data = getChapterAppreciation(chapterId);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTaxonomy, setActiveTaxonomy] = useState<"lords" | "performers">("lords");
  const [selectedFeeling, setSelectedFeeling] = useState<TaxonomyFeelingItem | null>(null);
  const [selectedCup, setSelectedCup] = useState<number | null>(null);
  const [selectedArchetype, setSelectedArchetype] = useState<number | null>(null);
  const [selectedEcho, setSelectedEcho] = useState<number | null>(null);

  if (!data) return null;

  const defaultProtagonist = getProtagonist(chapterId);
  const protagonistZh = data.protagonistZh || defaultProtagonist?.zh;
  const protagonistEn = data.protagonistEn || defaultProtagonist?.en;

  const getIcon = (type: string, className: string = "text-current") => {
    const props = { size: 18, className };
    switch (type) {
      case "GitBranch": return <GitBranch {...props} />;
      case "User": return <User {...props} />;
      case "Heart": return <Heart {...props} />;
      case "Eye": return <Eye {...props} />;
      case "PenTool": return <PenTool {...props} />;
      case "MessageSquare": return <MessageSquare {...props} />;
      default: return null;
    }
  };

  const timelineDataLocal = data.timelineData.map(d => ({
    stage: lang === "zh" ? d.stageZh : d.stageEn,
    sentiment: d.sentiment,
    description: lang === "zh" ? d.descriptionZh : d.descriptionEn
  }));

  const dimensions = data.dimensions;
  const visualizer = data.visualizer;

  const renderVisualizer = (vis: ChapterVisualizerData) => {
    if (vis.type === "taxonomy") {
      const currentTaxonomyItems = activeTaxonomy === "lords" ? vis.lordsFeelings : vis.performersFeelings;
      return (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--paper-border)]/30 pb-2">
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] flex items-center gap-1.5 font-hans">
              <Sparkles size={16} className="text-[var(--accent)]" />
              {lang === "zh" ? "首章“情学”谱系大观 (交互探密)" : "The Chapter 1 'Qing-ology' Taxonomy"}
            </h4>
            <div className="flex rounded-sm border border-[var(--paper-border)] overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveTaxonomy("lords");
                  setSelectedFeeling(null);
                }}
                className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${activeTaxonomy === "lords"
                    ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                    : "bg-[var(--paper-bg)]/40 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
                  }`}
              >
                {lang === "zh" ? "名士十情" : "Ten Scholar Feelings"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTaxonomy("performers");
                  setSelectedFeeling(null);
                }}
                className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${activeTaxonomy === "performers"
                    ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                    : "bg-[var(--paper-bg)]/40 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
                  }`}
              >
                {lang === "zh" ? "优伶十情" : "Ten Actor Feelings"}
              </button>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击任意字格，解锁书中十种特定“情”之维度的定义与文学意义"
              : "* Click any glyph card to unlock the definition and critique of that specific taxonomy"}
          </p>

          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {currentTaxonomyItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedFeeling(item)}
                className={`rounded-sm border transition-all duration-300 cursor-pointer ${
                  lang === "zh"
                    ? "flex flex-col items-center justify-center p-2 min-h-[56px]"
                    : "flex items-center justify-center p-1 sm:p-2 min-h-[44px] sm:min-h-[56px]"
                } ${
                  selectedFeeling?.char === item.char
                    ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)] scale-105 shadow-md"
                    : "border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 text-[var(--ink-title)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 hover:scale-102"
                }`}
              >
                <span className={
                  lang === "zh"
                    ? "text-xl sm:text-2xl font-bold font-hans"
                    : "text-[7.5px] min-[360px]:text-[8.5px] min-[400px]:text-[9.5px] sm:text-xs md:text-sm tracking-tighter leading-none font-bold font-sans text-center whitespace-nowrap"
                }>
                  {lang === "zh" ? item.char : item.nameEn.replace(/\s+Feeling$/i, "")}
                </span>
                {lang === "zh" && (
                  <span className="text-[8px] opacity-75 font-sans mt-0.5">{item.pinyin}</span>
                )}
              </button>
            ))}
          </div>

          <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/20 p-4 rounded-sm min-h-[90px] flex items-center justify-center">
            {selectedFeeling ? (
              <div className="w-full text-left space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[var(--accent)] font-hans">
                    {selectedFeeling.char}
                  </span>
                  <div className="leading-tight">
                    <h5 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
                      {lang === "zh" ? selectedFeeling.nameZh : selectedFeeling.nameEn}
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-[var(--ink-dim-text)] opacity-75 font-sans">
                      {selectedFeeling.pinyin.toUpperCase()}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--ink-main)] font-serif">
                  {lang === "zh" ? selectedFeeling.descZh : selectedFeeling.descEn}
                </p>
              </div>
            ) : (
              <div className="text-center py-2 text-xs text-[var(--ink-dim-text)] italic">
                {lang === "zh"
                  ? "💡 请点击上方十个字格之一以浏览点评内容"
                  : "💡 Click one of the ten glyph blocks above to explore detail"}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (vis.type === "wealthFlow") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <TrendingUp className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "金钱流动分析" : "Wealth Flow Analysis"}
            </h4>
          </div>
          <div className="grid gap-3">
            {vis.flows.map(f => (
              <div key={f.id} className="p-3 border border-l-[3px] border-[var(--paper-border)]/50 border-l-[var(--accent)] bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 hover:border-l-[var(--accent)] transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-[var(--ink-title)]">{lang === "zh" ? f.sourceZh : f.sourceEn}</span>
                  <ArrowRight size={14} className="text-[var(--accent)]" />
                  <span className="font-bold text-[var(--ink-title)]">{lang === "zh" ? f.targetZh : f.targetEn}</span>
                </div>
                <div className="text-xs text-[var(--ink-dim-text)]">
                  <p><span className="text-[var(--accent)] font-bold">{lang === "zh" ? "金额: " : "Amount: "}</span>{lang === "zh" ? f.amountZh : f.amountEn}</p>
                  <p className="mt-1"><span className="text-[var(--accent)] font-bold">{lang === "zh" ? "影响: " : "Impact: "}</span>{lang === "zh" ? f.impactZh : f.impactEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "spatialMapping") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <MapPin className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "空间意象解析" : "Spatial Symbolism"}
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {vis.spaces.map(s => (
              <div key={s.id} className="p-3 border border-l-[3px] border-[var(--paper-border)]/50 border-l-[var(--accent)] bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 hover:border-l-[var(--accent)] transition-all duration-300 shadow-sm">
                <h5 className="font-bold text-[var(--ink-title)] mb-2">{lang === "zh" ? s.locationZh : s.locationEn}</h5>
                <div className="text-xs space-y-1 text-[var(--ink-dim-text)]">
                  <p><span className="font-bold">{lang === "zh" ? "氛围: " : "Atmosphere: "}</span>{lang === "zh" ? s.atmosphereZh : s.atmosphereEn}</p>
                  <p><span className="font-bold">{lang === "zh" ? "隐喻: " : "Significance: "}</span>{lang === "zh" ? s.significanceZh : s.significanceEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "rumorNetwork") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <MessageCircle className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "流言网络解构" : "Rumor Network"}
            </h4>
          </div>
          <div className="space-y-3">
            {vis.rumors.map(r => (
              <div key={r.id} className="p-3 border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <p className="font-bold text-[var(--ink-main)] italic">"{lang === "zh" ? r.rumorZh : r.rumorEn}"</p>
                <div className="mt-2 text-xs flex gap-4 text-[var(--ink-dim-text)]">
                  <p>📍 {lang === "zh" ? r.originZh : r.originEn}</p>
                  <p>💥 {lang === "zh" ? r.effectZh : r.effectEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "socialLadder") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <TrendingUp className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "阶层跃迁分析" : "Social Ladder"}
            </h4>
          </div>
          <div className="grid gap-3">
            {vis.ladder.map(l => (
              <div key={l.id} className="p-3 border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-4 hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <div className="font-bold text-[var(--accent)]">{lang === "zh" ? l.characterZh : l.characterEn}</div>
                <div className="flex flex-1 items-center justify-between w-full">
                  <div className="text-xs text-center p-2 bg-[var(--paper-border)]/30 border border-[var(--paper-border)]/50 rounded-sm text-[var(--ink-title)] font-semibold">{lang === "zh" ? l.initialStatusZh : l.initialStatusEn}</div>
                  <div className="text-[10px] text-[var(--ink-dim-text)] px-2">{lang === "zh" ? l.methodZh : l.methodEn}</div>
                  <div className="text-xs text-center p-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-sm font-bold text-[var(--accent)]">{lang === "zh" ? l.finalStatusZh : l.finalStatusEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "poetryCritique") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Feather className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "诗词文本细读" : "Poetry Critique"}
            </h4>
          </div>
          <div className="space-y-4">
            {vis.poems && vis.poems.map((poem, idx) => (
              <div key={idx} className="border border-[var(--paper-border)]/50 rounded-sm bg-[var(--paper-bg)]/40 hover:bg-[var(--paper-bg)]/60 transition-all duration-300 shadow-sm overflow-hidden">
                <div className="bg-[var(--paper-bg)]/60 px-4 py-2 border-b border-[var(--paper-border)]/30 flex justify-between items-center">
                  <h5 className="font-bold text-[var(--accent)] font-hans text-sm sm:text-base">
                    {lang === "zh" ? poem.titleZh : poem.titleEn}
                  </h5>
                  <span className="text-[10px] sm:text-xs text-[var(--ink-dim-text)] font-hans">
                    {lang === "zh" ? poem.authorZh : poem.authorEn}
                  </span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-xs text-[var(--ink-dim-text)] uppercase tracking-wider font-bold font-hans">
                      {lang === "zh" ? "原诗选段" : "Poem Excerpt"}
                    </p>
                    <p className="text-sm text-[var(--ink-main)] font-serif whitespace-pre-wrap leading-relaxed">
                      {lang === "zh" ? poem.textZh : poem.textEn}
                    </p>
                  </div>
                  <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-[var(--paper-border)] pt-4 sm:pt-0 sm:pl-4">
                    <p className="text-xs text-[var(--ink-dim-text)] uppercase tracking-wider font-bold font-hans">
                      {lang === "zh" ? "梅子玉鉴赏" : "Ziyu's Critique"}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--ink-title)] font-hans leading-relaxed">
                      {lang === "zh" ? poem.critiqueZh : poem.critiqueEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {vis.critiques && vis.critiques.map(p => (
              <div key={p.id} className="p-4 border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <h5 className="font-bold text-[var(--ink-title)] text-center mb-2">{lang === "zh" ? p.titleZh : p.titleEn}</h5>
                <pre className="font-serif text-sm text-center mb-4 text-[var(--ink-main)] whitespace-pre-wrap leading-relaxed">{lang === "zh" ? p.contentZh : p.contentEn}</pre>
                <div className="border-t border-dashed border-[var(--paper-border)]/40 pt-2 mt-2">
                  <p className="text-xs text-[var(--ink-dim-text)] font-sans">{lang === "zh" ? p.critiqueZh : p.critiqueEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "emotionalDichotomy") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Zap className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "情感表里剖析" : "Emotional Dichotomy"}
            </h4>
          </div>
          <div className="grid gap-3">
            {vis.dichotomies.map(d => (
              <div key={d.id} className="grid sm:grid-cols-3 gap-3 p-3 border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <div className="font-bold text-[var(--accent)] flex items-center justify-center border-b sm:border-b-0 sm:border-r border-[var(--paper-border)]/30 pb-2 sm:pb-0 sm:pr-2">
                  {lang === "zh" ? d.characterZh : d.characterEn}
                </div>
                <div className="text-xs p-2 bg-[var(--paper-border)]/20 border border-[var(--paper-border)]/40 rounded-sm">
                  <span className="font-bold block mb-1 text-[9px] uppercase tracking-wider text-[var(--ink-dim-text)] opacity-70">SURFACE</span>
                  {lang === "zh" ? d.surfaceEmotionZh : d.surfaceEmotionEn}
                </div>
                <div className="text-xs p-2 bg-[var(--accent)]/5 border-l-[3px] border-l-[var(--accent)] border border-[var(--paper-border)]/40 rounded-sm">
                  <span className="font-bold text-[var(--accent)] block mb-1 text-[9px] uppercase tracking-wider">HIDDEN</span>
                  {lang === "zh" ? d.hiddenEmotionZh : d.hiddenEmotionEn}
                </div>
                <div className="col-span-1 sm:col-span-3 text-[10px] text-[var(--ink-dim-text)] text-center mt-1 italic">
                  {lang === "zh" ? "触发点: " : "Trigger: "}{lang === "zh" ? d.triggerZh : d.triggerEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "powerDynamics") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Shield className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "权力动态推演" : "Power Dynamics"}
            </h4>
          </div>
          <div className="space-y-3">
            {vis.dynamics.map(pd => (
              <div key={pd.id} className="p-3 border border-l-[3px] border-[var(--paper-border)]/50 border-l-[var(--accent)] bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 hover:border-l-[var(--accent)] transition-all duration-300 shadow-sm">
                <div className="flex justify-between items-center mb-2 ml-2">
                  <span className="font-bold font-serif text-lg">{lang === "zh" ? pd.dominatorZh : pd.dominatorEn}</span>
                  <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-1.5 py-0.5 rounded-sm font-sans font-bold text-[9px] uppercase tracking-wider">DOMINANT</span>
                </div>
                <div className="flex justify-between items-center mb-3 ml-2 border-b border-[var(--paper-border)]/35 pb-2">
                  <span className="text-sm opacity-70">{lang === "zh" ? pd.submissiveZh : pd.submissiveEn}</span>
                  <span className="bg-[var(--paper-border)]/40 text-[var(--ink-dim-text)] px-1.5 py-0.5 rounded-sm font-sans font-bold text-[9px] uppercase tracking-wider">SUBMISSIVE</span>
                </div>
                <div className="text-xs space-y-1 ml-2 text-[var(--ink-dim-text)]">
                  <p><span className="font-bold text-[var(--ink-main)]">Base: </span>{lang === "zh" ? pd.powerBaseZh : pd.powerBaseEn}</p>
                  <p><span className="font-bold text-[var(--ink-main)]">Shift: </span>{lang === "zh" ? pd.shiftZh : pd.shiftEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "objectSymbolism") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Gem className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "物象隐喻解构" : "Object Symbolism"}
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {vis.objects.map(o => (
              <div key={o.id} className="p-4 border border-[var(--paper-border)]/50 rounded-sm bg-gradient-to-br from-[var(--paper-bg)]/40 to-[var(--accent)]/5 hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <h5 className="font-bold text-lg text-[var(--accent)] mb-2 font-serif">{lang === "zh" ? o.objectZh : o.objectEn}</h5>
                <div className="text-xs space-y-2">
                  <p><span className="font-bold bg-[var(--paper-border)]/40 px-1 rounded-sm">{lang === "zh" ? "外观/场景:" : "Appearance/Scene:"}</span> {lang === "zh" ? o.appearanceZh : o.appearanceEn}</p>
                  <p><span className="font-bold bg-[var(--paper-border)]/40 px-1 rounded-sm">{lang === "zh" ? "深层隐喻:" : "Symbolism:"}</span> {lang === "zh" ? o.meaningZh : o.meaningEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (vis.type === "drinkingCups") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Wine className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "宴席解析 (互动探源)" : "Feast Game Explorer"}
            </h4>
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击以下卡片，了解当晚行令规则及背后的社会文化解构"
              : "* Click any cup below to inspect the game rules and sociological deconstruction"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {vis.cups.map((cup) => (
              <button
                key={cup.id}
                type="button"
                onClick={() => setSelectedCup(cup.id)}
                className={`p-3 rounded-sm border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                  selectedCup === cup.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md scale-102"
                    : "border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <Wine
                    size={16}
                    className={selectedCup === cup.id ? "text-[var(--accent)]" : "text-[var(--ink-dim-text)]/60"}
                  />
                  <span className="text-[9px] font-bold text-[var(--ink-dim-text)]">
                    STAGE {cup.id}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-[var(--ink-title)] mt-3 font-hans">
                  {lang === "zh" ? cup.titleZh : cup.titleEn}
                </h5>
              </button>
            ))}
          </div>

          <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/20 p-4 rounded-sm min-h-[140px] flex items-center justify-center">
            {selectedCup !== null ? (
              (() => {
                const cup = vis.cups.find((c) => c.id === selectedCup);
                if (!cup) return null;
                return (
                  <div className="w-full text-left space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--paper-border)]/20 pb-1.5">
                      <h5 className="text-sm font-bold text-[var(--accent)] font-hans">
                        {lang === "zh" ? cup.titleZh : cup.titleEn}
                      </h5>
                      <span className="text-[10px] bg-[var(--paper-border)]/30 px-2 py-0.5 rounded-sm text-[var(--ink-dim-text)] font-sans">
                        {lang === "zh" ? `规则: ${cup.ruleZh}` : `Rule: ${cup.ruleEn}`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <p className="font-bold text-[var(--ink-title)]">
                          {lang === "zh" ? "现场交锋实况：" : "Action:"}
                        </p>
                        <p className="text-[var(--ink-dim-text)] leading-relaxed font-sans">
                          {lang === "zh" ? cup.actionZh : cup.actionEn}
                        </p>
                        {cup.poetryZh && (
                          <div className="mt-2 bg-[var(--accent)]/5 border-l-2 border-[var(--accent)] p-2 font-serif italic text-[11px] sm:text-xs">
                            <p className="font-hans font-semibold not-italic text-[var(--accent)]">
                              {lang === "zh" ? "行令吟诵诗句：" : "Recited Poetry Lines:"}
                            </p>
                            <p className="mt-0.5 text-[var(--ink-title)]">{cup.poetryZh}</p>
                            <p className="text-[var(--ink-dim-text)] text-[10px] mt-0.5 font-sans">
                              {cup.poetryEn}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[var(--paper-border)]/20 pt-2 sm:pt-0 sm:pl-4">
                        <p className="font-bold text-[var(--accent)]">
                          {lang === "zh" ? "深层社会学赏析：" : "Sociological Analysis:"}
                        </p>
                        <p className="text-[var(--ink-main)] leading-relaxed font-serif">
                          {lang === "zh" ? cup.critiqueZh : cup.critiqueEn}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="text-center py-4 text-xs text-[var(--ink-dim-text)] italic">
                {lang === "zh"
                  ? "💡 请点击上方卡片之一，解锁深层解析"
                  : "💡 Click one of the cards above to unlock details"}
              </div>
            )}
          </div>
        </div>
      );
    }
    if (vis.type === "archetypes") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <User className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "名利场·角色图鉴" : "Vanity Fair: Archetypes"}
            </h4>
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击以下图鉴卡片，洞察人物的社交面具与权力游戏"
              : "* Click any archetype card below to explore social masks and power plays"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {vis.archetypes.map((arc) => (
              <button
                key={arc.id}
                type="button"
                onClick={() => setSelectedArchetype(arc.id)}
                className={`p-3 rounded-sm border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                  selectedArchetype === arc.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md scale-102"
                    : "border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <User
                    size={16}
                    className={selectedArchetype === arc.id ? "text-[var(--accent)]" : "text-[var(--ink-dim-text)]/60"}
                  />
                  <span className="text-[9px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider">
                    {lang === "zh" ? "人物卡" : "CARD"} {arc.id}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-[var(--ink-title)] mt-3 font-hans">
                  {lang === "zh" ? arc.titleZh : arc.titleEn}
                </h5>
              </button>
            ))}
          </div>

          <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/20 p-4 rounded-sm min-h-[140px] flex flex-col justify-center">
            {selectedArchetype !== null ? (
              (() => {
                const arc = vis.archetypes.find((a) => a.id === selectedArchetype);
                if (!arc) return null;
                return (
                  <div className="w-full text-left space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--paper-border)]/20 pb-1.5">
                      <h5 className="text-sm font-bold text-[var(--accent)] font-hans">
                        {lang === "zh" ? arc.titleZh : arc.titleEn}
                      </h5>
                      <span className="text-[10px] bg-[var(--paper-border)]/30 px-2 py-0.5 rounded-sm text-[var(--ink-dim-text)] font-sans">
                        {lang === "zh" ? `代表人物: ${arc.roleZh}` : `Key Figure: ${arc.roleEn}`}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm space-y-2">
                      <p className="text-[var(--ink-dim-text)] leading-relaxed font-sans">
                        {lang === "zh" ? arc.descZh : arc.descEn}
                      </p>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="text-center py-2 text-xs text-[var(--ink-dim-text)] italic">
                {lang === "zh"
                  ? "💡 请点击上方图鉴之一以浏览阶层剖析"
                  : "💡 Click an archetype card above to explore"}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (vis.type === "relationCompass") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Users className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "人物关系温度计" : "Relationship Compass"}
            </h4>
          </div>
          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 温度自“冰点”（对立疏离）升至“沸点”（莫逆知音），度量本章人物关系的亲疏冷暖"
              : "* Temperature runs from 'freezing' (antagonism) to 'boiling' (soulmates), gauging each bond in this chapter"}
          </p>
          <div className="grid gap-3">
            {vis.relations.map(r => (
              <div key={r.id} className="p-3 border border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 rounded-sm hover:bg-[var(--paper-bg)]/60 hover:border-[var(--accent)]/30 transition-all duration-300 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-[var(--ink-title)] font-hans">
                    {lang === "zh" ? r.pairZh : r.pairEn}
                  </span>
                  <span className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-2 py-0.5 rounded-sm font-hans">
                    {lang === "zh" ? r.relationZh : r.relationEn}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] text-[var(--ink-dim-text)] shrink-0 font-hans">
                    {lang === "zh" ? "冰点" : "Cold"}
                  </span>
                  <div className="relative flex-1 h-1.5 rounded-full bg-gradient-to-r from-[var(--paper-border)]/60 via-[var(--accent)]/30 to-[var(--accent)]">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--paper-bg)] shadow"
                      style={{ left: `${Math.min(100, Math.max(0, r.temperature))}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-[var(--ink-dim-text)] shrink-0 font-hans">
                    {lang === "zh" ? "沸点" : "Warm"}
                  </span>
                  <span className="text-[10px] font-bold text-[var(--accent)] w-8 text-right">{r.temperature}°</span>
                </div>
                <p className="text-xs text-[var(--ink-dim-text)] leading-relaxed">
                  {lang === "zh" ? r.noteZh : r.noteEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (vis.type === "echoes") {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Waves className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "关键抉择与回响" : "Decisions & Echoes"}
            </h4>
          </div>
          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击卡片，追踪本章的一个决定如何激起即时涟漪，又在后文的远处回响"
              : "* Click a card to trace how a decision in this chapter ripples immediately — and echoes far into later chapters"}
          </p>
          <div className="grid gap-3">
            {vis.echoes.map(e => (
              <button
                key={e.id}
                type="button"
                onClick={() => setSelectedEcho(selectedEcho === e.id ? null : e.id)}
                className={`w-full text-left p-3 rounded-sm border transition-all duration-300 cursor-pointer ${
                  selectedEcho === e.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/5 shadow-md"
                    : "border-[var(--paper-border)]/50 bg-[var(--paper-bg)]/40 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--paper-bg)] bg-[var(--accent)] px-1.5 py-0.5 rounded-sm shrink-0 mt-0.5 font-hans">
                    {lang === "zh" ? "抉择" : "CHOICE"}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[var(--ink-title)] leading-relaxed font-hans">
                    {lang === "zh" ? e.decisionZh : e.decisionEn}
                  </span>
                </div>
                {selectedEcho === e.id ? (
                  <div className="mt-3 space-y-2 border-t border-dashed border-[var(--paper-border)]/40 pt-2">
                    <div className="flex items-start gap-2 text-xs sm:text-sm">
                      <ArrowRight size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <span className="font-bold text-[var(--accent)] font-hans">{lang === "zh" ? "涟漪：" : "Ripple: "}</span>
                        <span className="text-[var(--ink-main)]">{lang === "zh" ? e.rippleZh : e.rippleEn}</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm">
                      <ArrowRight size={14} className="text-[var(--ink-dim-text)] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <span className="font-bold text-[var(--ink-title)] font-hans">{lang === "zh" ? "回响：" : "Echo: "}</span>
                        <span className="text-[var(--ink-dim-text)]">{lang === "zh" ? e.echoZh : e.echoEn}</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-1.5 text-[10px] text-[var(--ink-dim-text)] italic">
                    {lang === "zh" ? "点击展开涟漪与回响…" : "Click to reveal ripple & echo…"}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mt-8 space-y-8 bg-[var(--paper-bg)]/50 border-t-2 border-[var(--accent)]/30 pt-8 pb-4 border-b">
      {/* Title Header */}
      <div className="flex flex-col items-center justify-center space-y-2 mb-6">
        <div className="flex items-center gap-2 text-[var(--accent)]">
          <Compass size={24} />
          <h3 className="text-xl sm:text-2xl font-bold font-hans tracking-wider">
            {lang === "zh" ? "全章深度点评赏析" : "Deep Chapter Critique"}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[var(--ink-dim-text)] max-w-md text-center italic">
          {lang === "zh"
            ? "“透过文字的表象，窥探晚清京城名利场与纯情理想的激烈交锋”"
            : '"Piercing through the text to observe the clash between late Qing vanity and pure ideals"'}
        </p>
      </div>

      {/* Visualizations row */}
      <div className="w-full">
        {/* Emotion / Dignity Trajectory */}
        <div className="bg-[var(--paper-bg)]/80 rounded-sm border border-[var(--paper-border)]/30 p-4 h-[300px] sm:h-[350px]">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] mb-2 flex flex-wrap items-center justify-between gap-2 font-hans">
            <span>
              {lang === "zh" ? "主角心理状态与环境反馈轨迹" : "Protagonist Psychology Trajectory"}
            </span>
            {protagonistZh && (
              <span className="text-[10px] sm:text-xs font-normal text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-sm border border-[var(--accent)]/30">
                {lang === "zh" ? `主角: ${protagonistZh}` : `Protagonist: ${protagonistEn}`}
              </span>
            )}
          </h4>
          <p className="text-[10px] text-[var(--ink-dim-text)] mb-4">
            {lang === "zh"
              ? "* 纵轴代表情感的正向度(狂喜/威严至极度失落/狼狈)"
              : "* Y-axis represents sentiment (High: Joy/Authority, Low: Despair/Panic)"}
          </p>
          <div className="h-full w-full pb-12">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineDataLocal} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="stage"
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 10 }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 10 }}
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[var(--paper-bg)] border border-[var(--paper-border)] p-2 rounded-sm max-w-[200px] shadow-lg">
                          <p className="font-bold text-[var(--accent)] text-xs mb-1">
                            {data.stage} ({lang === "zh" ? "指数" : "Index"}: {data.sentiment})
                          </p>
                          <p className="text-[10px] text-[var(--ink-main)] leading-relaxed">
                            {data.description}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sentiment"
                  stroke="var(--accent)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSentiment)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Six Dimensions Narrative Tabs */}
      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] border-b border-[var(--paper-border)]/30 pb-1.5 font-hans">
          {lang === "zh" ? "六大赏析维度解读" : "Interpretation of Six Critique Dimensions"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {dimensions.map((dim, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-sm border transition-all cursor-pointer ${activeTab === idx
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                  : "border-[var(--paper-border)] bg-[var(--paper-bg)]/40 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
                }`}
            >
              {getIcon(dim.iconType, "text-current shrink-0")}
              <span className="font-hans">
                {lang === "zh" ? dim.titleZh : dim.titleEn}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="relative overflow-hidden min-h-[140px] border border-[var(--paper-border)]/30 bg-[var(--paper-bg)]/50 p-4 rounded-sm">
          <AnimatePresence mode="wait">
            {dimensions[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 text-xs sm:text-sm leading-relaxed"
              >
                <div className="flex items-center justify-between border-b border-[var(--paper-border)]/20 pb-1">
                  <span className="font-bold text-[var(--accent)] flex items-center gap-1.5">
                    {getIcon(dimensions[activeTab].iconType, "text-[var(--accent)] shrink-0")}
                    {lang === "zh" ? dimensions[activeTab].titleZh : dimensions[activeTab].titleEn}
                  </span>
                  <span className="text-[10px] font-bold text-[var(--ink-dim-text)] opacity-75">
                    {lang === "zh"
                      ? `本章侧重度: ${dimensions[activeTab].score}%`
                      : `Emphasis: ${dimensions[activeTab].score}%`}
                  </span>
                </div>
                <div className="text-[var(--ink-main)] font-serif space-y-3">
                  {dimensions[activeTab].textZh && (
                    <p className="indent-6">
                      {lang === "zh" ? dimensions[activeTab].textZh : dimensions[activeTab].textEn}
                    </p>
                  )}
                  {dimensions[activeTab].subsections && (
                    <div className="space-y-2.5 mt-2">
                      {dimensions[activeTab].subsections.map((sub, idx) => (
                        <div key={idx} className="bg-[var(--accent)]/5 p-2 rounded-sm border-l-[3px] border-[var(--accent)]/50">
                          <span className="font-bold text-[var(--ink-title)] mr-1.5 font-hans">
                            {lang === "zh" ? sub.labelZh : sub.labelEn}:
                          </span>
                          <span className="leading-relaxed">
                            {lang === "zh" ? sub.textZh : sub.textEn}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Feature - Template renderer */}
      <div className="space-y-12">
        {(data.visualizers || [data.visualizer]).map((v, i) => (
          <div key={i}>{renderVisualizer(v)}</div>
        ))}
      </div>
    </div>
  );
}
