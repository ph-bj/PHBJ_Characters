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
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Dimensions Info interface
interface DimensionInfo {
  icon: React.ReactNode;
  titleZh: string;
  titleEn: string;
  score: number;
  textZh: string;
  textEn: string;
}

// Taxonomy Feeling interface
interface FeelingItem {
  char: string;
  pinyin: string;
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
}

export function ChapterAppreciation({ lang }: { lang: "en" | "zh" }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTaxonomy, setActiveTaxonomy] = useState<"lords" | "performers">("lords");
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingItem | null>(null);

  // 1. Radar Chart Data
  const radarData = [
    {
      subject: lang === "zh" ? "文本结构" : "Structure",
      score: 85,
    },
    {
      subject: lang === "zh" ? "人物塑造" : "Character",
      score: 90,
    },
    {
      subject: lang === "zh" ? "主题思想" : "Themes",
      score: 95,
    },
    {
      subject: lang === "zh" ? "叙事视角" : "POV & Voice",
      score: 80,
    },
    {
      subject: lang === "zh" ? "语言修辞" : "Style",
      score: 88,
    },
    {
      subject: lang === "zh" ? "体验共鸣" : "Resonance",
      score: 85,
    },
  ];

  // 2. Timeline Data (Mei Ziyu's Psychological Trajectory)
  const timelineData = [
    {
      stage: lang === "zh" ? "1. 书房论友" : "1. Study Chat",
      sentiment: 70,
      description:
        lang === "zh"
          ? "处于道学理学防线下，认为优伶不过是谄媚逢迎、浊臭不堪之人"
          : "Protected by Confucian decorum; dismisses actors as sycophantic and impure",
    },
    {
      stage: lang === "zh" ? "2. 初入戏院" : "2. Entering Theater",
      sentiment: 40,
      description:
        lang === "zh"
          ? "厌恶震天的锣鼓、嘈杂的环境，以及到处拉客的暗弱小旦"
          : "Deafened by gongs, irritated by chaotic crowds and shady actor boys",
    },
    {
      stage: lang === "zh" ? "3. 强触白珠" : "3. Accosted by 'Baozhu'",
      sentiment: 20,
      description:
        lang === "zh"
          ? "被粗俗主动的手艺人强拉手、问姓名，心中厌恶不快到极点"
          : "Felt intense disgust when accosted by the pushy, dark-handed 'Baozhu'",
    },
    {
      stage: lang === "zh" ? "4. 狭路幽香" : "4. Passing Perfume",
      sentiment: 85,
      description:
        lang === "zh"
          ? "车流阻塞中闻到异香，掀帘一瞥见绝色美少年，灵魂受到极大震撼"
          : "Smells divine fragrance in traffic; catches a glance of the peerless boy",
    },
    {
      stage: lang === "zh" ? "5. 归途沉思" : "5. Fated Enchantment",
      sentiment: 100,
      description:
        lang === "zh"
          ? "心灵防线彻底瓦解，沉醉流连，叹服世间真有此等如玉人物"
          : "Intellectual barriers collapse; fully enchanted, recognizing fated beauty",
    },
  ];

  // 3. 6-Dimension Analyses
  const dimensions: DimensionInfo[] = [
    {
      icon: <GitBranch size={18} className="text-[var(--accent)]" />,
      titleZh: "文本结构与布局",
      titleEn: "Structure & Layout",
      score: 85,
      textZh:
        "第一回作为全书的“大总纲”与“导言”，其布局极富层次。作者首先通过宏大的开篇论述为男女之“情”立传，并阐明全书写作的道德主旨（好色而不淫）。接着，镜头切入大户人家的书房，通过梅子玉与好友史南湘、严仲清的辩论，确立了主角起初“冰清玉洁、坚守礼法”的心理基础。随后，通过“游戏院”的混乱、恶俗与“归途塞车”的偶然，以梅子玉与杜琴言惊鸿一瞥的“车厢对望”这一命运交汇点戛然而止。这种由理性的思辨，到世俗的试炼，再到最终超凡的审美顿悟的起承转合，构筑了完美的叙事推进器。",
      textEn:
        "Chapter 1 serves as the grand prologue and structural blueprint. It begins with theoretical classifications of 'feeling' (qing), moves to Ziyu's intellectual debate with his peers in his study, descends into the chaotic reality of the capital's theaters, and culminates in a fateful, wordless glance between two carriages. This structure functions as an engine, driving Ziyu away from detached rationality into the vortex of emotional experience, laying the groundwork for his life-long romance with Du Qinyan.",
    },
    {
      icon: <User size={18} className="text-[var(--accent)]" />,
      titleZh: "人物塑造与心理",
      titleEn: "Characterization & Psychology",
      score: 90,
      textZh:
        "本回对主角梅子玉的塑造充满了动态的张力。他并非生来就是情种，而是一个深受正统 neo-Confucian 礼教熏陶、对戏子优伶抱有强烈排斥与偏见的洁癖公子。在戏院中，他对喧闹环境的不适、对拉客艺人的反感，将他的理学防御心理推到了顶点。然而，当他在马车中与那位“如玉少年”对视时，防线瞬间瓦解，陷入了失魂落魄的审美震撼。这种从“偏见/防范”到“震惊/沉醉”的转变十分真实，揭示了他纯真、易感且极度渴求绝对美感的内心深度。",
      textEn:
        "We observe a delicate psychological arc for Mei Ziyu. He starts as a sheltered scholar bound by strict neo-Confucian decorum, expressing disdain for actors. His irritation peaks in the dirty, chaotic theater. Yet, the sudden encounter with the peerless boy collapses his intellectual defense, leaving him stunned and enchanted. This transition reveals his highly sensitive, latent capacity for profound romantic devotion and aesthetic experience.",
    },
    {
      icon: <Heart size={18} className="text-[var(--accent)]" />,
      titleZh: "主题与思想内核",
      titleEn: "Themes & Philosophical Core",
      score: 95,
      textZh:
        "本回奠定了全书的核心思想对立：纯真之“情”（以梅子玉、杜琴言为表征的至真、至洁之爱）与世俗之“淫/利”（以戏院中讨赏的小旦和粗鄙看客为表征的肉欲与商品化交易）。作者通过细分“名士十情”与“优伶十情”，试图为“情”正名。他宣扬一种超脱于世俗肉欲、以灵魂共鸣和才艺欣赏为核心的“好色而不淫”之情。这一核心议题不仅是对理学禁欲主义的温和反叛，也是对当时男色、优伶交易庸俗风气的严厉批判。",
      textEn:
        "The chapter establishes the novel's central tension: pure, ideal sentiment (Qing) versus vulgar, transactional lust (Yin). By classifying ten noble feelings and ten performer virtues, the narrative attempts to reclaim 'feeling' as a spiritual force, arguing that genuine appreciation of beauty can remain pure and distinct from transactional exploitation. It stands as a critique of both rigid asceticism and raw materialism.",
    },
    {
      icon: <Eye size={18} className="text-[var(--accent)]" />,
      titleZh: "叙事视角与声音",
      titleEn: "POV & Voice",
      score: 80,
      textZh:
        "本回的叙事视角灵活多变。开篇部分采用全知视角，以说书人、史家评注的客观口吻对全书进行框架式概括；随后迅速转化为以梅子玉为主的限制性视角。读者的获取信息被严格限制在子玉的所见所感中——我们一同忍受戏院中粗劣的“假宝珠”拉扯，也一同体验那一瞥对视时空气凝固、奇香扑鼻的魔幻瞬间。这种视角的切换使得宏大的社会叙事与幽微的情感体验达成精妙的平衡。",
      textEn:
        "The story utilizes a third-person limited perspective focused on Mei Ziyu. Readers experience the sensory overload of the theater and the sudden quietude of the carriage encounter through Ziyu's eyes. This is framed by a detached, ironic narrator who offers pseudo-historical commentary, balancing raw emotional resonance with intellectual distance.",
    },
    {
      icon: <PenTool size={18} className="text-[var(--accent)]" />,
      titleZh: "语言特色与修辞",
      titleEn: "Stylistic Devices",
      score: 88,
      textZh:
        "文字兼具骈文的华美与白话小说的辛辣。开篇对“十情”的分类排比对偶工整，颇具骈俪色彩。在描写“百花谱”名伶（如袁宝珠、苏徽芳）时，大量运用“秋水为神，玉雪为骨”等经典比喻，以及极为优美的七律组诗，极尽古典辞章之美。而在描写戏院里庸俗丑陋的拉客小旦“假宝珠”时，则切换为粗粝、生动的日常白话，雅俗对比鲜明，展现出强烈的戏剧张力与笔力。",
      textEn:
        "The language blends highly refined classical parallel prose (pianwen) with lively vernacular speech. The 'Register of Flowers' entries utilize beautiful imagery ('autumn waters for spirit, jade and snow for bones') and heavy literary allusions. In contrast, the theater descriptions are rendered in colloquial, biting prose, demonstrating the author's rich range of tone.",
    },
    {
      icon: <MessageSquare size={18} className="text-[var(--accent)]" />,
      titleZh: "阅读体验与共鸣",
      titleEn: "Reader Response & Relevance",
      score: 85,
      textZh:
        "阅读此章的体验是一次情绪起伏的洗礼：从书房辩论的清雅，跌入尘俗戏院的躁动与恶心，再到最后一刻马车狭路相逢时“屏息凝神”的极致美丽。这种由静入闹、最终回归到灵魂对望的节奏安排，让读者产生强烈的审美愉悦。在今天（2026年）的语境下，这一幕关于“偏见被绝对美感击碎”的宿命相遇，依然能唤起我们对超越阶级、性别与社会成见之纯粹爱恋的向往与反思。",
      textEn:
        "The reader travels along an emotional trajectory: intellectual security in the study, chaotic alienation in the theater, and breathtaking aesthetic elevation in the traffic jam. Even today, the contrast between structural prejudice and the undeniable power of aesthetic connection sparks reflection on the nature of love, art, and societal boundaries.",
    },
  ];

  // 4. Taxonomy Data
  const lordsFeelings: FeelingItem[] = [
    { char: "义", pinyin: "yì", nameZh: "义情", nameEn: "Righteous Feeling", descZh: "见义勇为，重情重义，在道义中融入真情", descEn: "Combines justice with romantic devotion; valuing loyalty and honor." },
    { char: "贵", pinyin: "guì", nameZh: "贵情", nameEn: "Eminent Feeling", descZh: "身份高贵而情意深厚，以贵气温润人情", descEn: "Noble status with rich, deep sentiment; gentle and dignified." },
    { char: "高", pinyin: "gāo", nameZh: "高情", nameEn: "Lofty Feeling", descZh: "高洁脱俗，不染尘俗，寄托于高尚的情操", descEn: "Pure, elevated, above worldly desires; holding high ideals." },
    { char: "闲", pinyin: "xián", nameZh: "闲情", nameEn: "Easy Feeling", descZh: "闲适自在，寄情山水与文艺，不为名利羁绊", descEn: "Leisurely ease; investing feeling in nature, poetry, and art." },
    { char: "雅", pinyin: "yǎ", nameZh: "雅情", nameEn: "Refined Feeling", descZh: "雅致风流，通晓琴棋书画，格调高雅", descEn: "Refined elegance; highly versed in classical arts and literature." },
    { char: "侠", pinyin: "xiá", nameZh: "侠情", nameEn: "Bold Feeling", descZh: "豪侠侠骨，肝胆相照，为知己甘冒万险", descEn: "Chivalrous spirit; heroic devotion that faces danger for loved ones." },
    { char: "狂", pinyin: "kuáng", nameZh: "狂情", nameEn: "Wild Feeling", descZh: "狂放不羁，超脱世俗礼法，至真至纯", descEn: "Wild abandon; defying conventional social rites in search of truth." },
    { char: "黠", pinyin: "xiá", nameZh: "黠情", nameEn: "Witty Feeling", descZh: "聪明机智，诙谐有趣，在智巧中含情", descEn: "Sparkling wit; clever, playful, and quick-minded in romance." },
    { char: "和", pinyin: "hé", nameZh: "和情", nameEn: "Harmonious Feeling", descZh: "温和宽厚，情感协调中庸，平淡而持久", descEn: "Gentle harmony; balanced, peaceful affection that lasts long." },
    { char: "欢", pinyin: "huān", nameZh: "欢情", nameEn: "Joyful Feeling", descZh: "欢乐开朗，乐在其中，给身边人带来愉悦", descEn: "Steeped in joy; radiating cheerfulness and celebrating pleasure." },
  ];

  const performersFeelings: FeelingItem[] = [
    { char: "深", pinyin: "shēn", nameZh: "深情", nameEn: "Profound Feeling", descZh: "情感至深，专一执着，至死不渝", descEn: "Most profound emotion; dedicated, single-minded, and unbreakable." },
    { char: "慧", pinyin: "huì", nameZh: "慧情", nameEn: "Wise Feeling", descZh: "聪明智慧，慧眼识人，能看透风尘世相", descEn: "Intellectual wisdom; a discerning mind that recognizes true worth." },
    { char: "婉", pinyin: "wǎn", nameZh: "婉情", nameEn: "Graceful Feeling", descZh: "温婉可人，柔情似水，言行举止极尽娇美", descEn: "Soft grace; tender and gentle as water, full of subtle beauty." },
    { char: "洁", pinyin: "jié", nameZh: "洁情", nameEn: "Pure Feeling", descZh: "冰清玉洁，坚贞自守，出淤泥而不染", descEn: "Purity; keeping body and soul unblemished amid dirty circles." },
    { char: "贤", pinyin: "xián", nameZh: "贤情", nameEn: "Virtuous Feeling", descZh: "贤良德行，通达大体，克己待人", descEn: "Virtuous conduct; possessing high moral characters and wisdom." },
    { char: "烈", pinyin: "liè", nameZh: "烈情", nameEn: "Ardent Feeling", descZh: "热情如火，刚烈决绝，不受任何欺侮", descEn: "Ardent and fierce; passionate, unyielding under oppression." },
    { char: "贞", pinyin: "zhēn", nameZh: "贞情", nameEn: "Chaste Feeling", descZh: "坚贞不屈，操守严明，一生守护所爱之人", descEn: "Strict integrity; chaste devotion to a single chosen partner." },
    { char: "逸", pinyin: "yì", nameZh: "逸情", nameEn: "Flowing Feeling", descZh: "超逸洒脱，超脱戏班流俗，追求心灵自由", descEn: "Flowing abandon; transcending standard troupe lifestyles for freedom." },
    { char: "华", pinyin: "huá", nameZh: "华情", nameEn: "Radiant Feeling", descZh: "光彩照人，华贵大方，舞台上倾国倾城", descEn: "Radiant beauty and elegance; stunning everyone on the stage." },
    { char: "媚", pinyin: "mèi", nameZh: "媚情", nameEn: "Charming Feeling", descZh: "妩媚动人，柔情百转，令人魂牵梦绕", descEn: "Soft charm and alluring grace; deeply attractive and moving." },
  ];

  const currentTaxonomyItems = activeTaxonomy === "lords" ? lordsFeelings : performersFeelings;

  return (
    <div className="mt-12 border border-[var(--paper-border)] bg-black/5 rounded-sm p-4 sm:p-6 space-y-8 font-sans">
      {/* Title */}
      <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/50 pb-3">
        <Compass className="text-[var(--accent)] shrink-0" size={22} />
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--ink-title)] font-hans">
            {lang === "zh" ? "第一回 · 全章点评赏析" : "Ch. 1 · Chapter Appreciation & Analysis"}
          </h3>
          <p className="text-[10px] sm:text-xs text-[var(--ink-dim-text)]">
            {lang === "zh"
              ? "深度挖掘艺术价值、思想内核与表达技巧"
              : "In-depth exploration of artistic value, themes, and techniques"}
          </p>
        </div>
      </div>

      {/* Visualizations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radar Chart (6 Dimensions) */}
        <div className="border border-[var(--paper-border)]/40 bg-[var(--paper-bg)]/40 p-4 rounded-sm flex flex-col items-center">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] mb-4 text-center font-hans">
            {lang === "zh" ? "文学艺术维度评估 (雷达图)" : "Literary Art Dimension Radar"}
          </h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="var(--paper-border)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 10, fontWeight: 500 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "var(--ink-dim-text)" }} />
                <Radar
                  name={lang === "zh" ? "评估值" : "Score"}
                  dataKey="score"
                  stroke="var(--accent)"
                  fill="var(--accent)"
                  fillOpacity={0.25}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trajectory Chart (Mei Ziyu's心理起伏) */}
        <div className="border border-[var(--paper-border)]/40 bg-[var(--paper-bg)]/40 p-4 rounded-sm flex flex-col items-center">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] mb-4 text-center font-hans">
            {lang === "zh" ? "梅子玉心理/情感起伏轨迹" : "Mei Ziyu's Psychological Trajectory"}
          </h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={timelineData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="stage"
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 9 }}
                  interval={0}
                />
                <YAxis domain={[0, 100]} tick={{ fill: "var(--ink-dim-text)", fontSize: 9 }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[var(--paper-bg)] border border-[var(--paper-border)] p-2.5 rounded-sm shadow-md text-left max-w-[200px] text-[10px] sm:text-xs">
                          <p className="font-bold text-[var(--accent)]">{data.stage}</p>
                          <p className="text-[var(--ink-title)] font-bold mt-1">
                            {lang === "zh" ? `情绪指数: ${data.sentiment}` : `Intensity: ${data.sentiment}`}
                          </p>
                          <p className="text-[var(--ink-dim-text)] text-[9px] sm:text-[10px] mt-1 leading-relaxed">
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
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-sm border transition-all cursor-pointer ${
                activeTab === idx
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                  : "border-[var(--paper-border)] bg-[var(--paper-bg)]/40 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
              }`}
            >
              {dim.icon}
              <span className="font-hans">
                {lang === "zh" ? dim.titleZh : dim.titleEn}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="relative overflow-hidden min-h-[140px] border border-[var(--paper-border)]/30 bg-[var(--paper-bg)]/50 p-4 rounded-sm">
          <AnimatePresence mode="wait">
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
                  {dimensions[activeTab].icon}
                  {lang === "zh" ? dimensions[activeTab].titleZh : dimensions[activeTab].titleEn}
                </span>
                <span className="text-[10px] font-bold text-[var(--ink-dim-text)] opacity-75">
                  {lang === "zh" ? `首章侧重度: ${dimensions[activeTab].score}%` : `Emphasis: ${dimensions[activeTab].score}%`}
                </span>
              </div>
              <p className="text-[var(--ink-main)] font-serif indent-6">
                {lang === "zh" ? dimensions[activeTab].textZh : dimensions[activeTab].textEn}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Taxonomy Grid Explorer */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--paper-border)]/30 pb-2">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] flex items-center gap-1.5 font-hans">
            <Sparkles size={16} className="text-[var(--accent)]" />
            {lang === "zh" ? "首章“情学”谱系大观 (交互探秘)" : "The Chapter 1 'Qing-ology' Taxonomy"}
          </h4>
          <div className="flex rounded-sm border border-[var(--paper-border)] overflow-hidden shrink-0">
            <button
              type="button"
              onClick={() => {
                setActiveTaxonomy("lords");
                setSelectedFeeling(null);
              }}
              className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${
                activeTaxonomy === "lords"
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--paper-bg)] text-[var(--ink-dim-text)] hover:bg-black/5"
              }`}
            >
              {lang === "zh" ? "名士十情 (Lords)" : "Ten Scholar Feelings"}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTaxonomy("performers");
                setSelectedFeeling(null);
              }}
              className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${
                activeTaxonomy === "performers"
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--paper-bg)] text-[var(--ink-dim-text)] hover:bg-black/5"
              }`}
            >
              {lang === "zh" ? "优伶十情 (Dan)" : "Ten Actor Feelings"}
            </button>
          </div>
        </div>

        <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
          {lang === "zh"
            ? "* 点击任意字格，解锁书中十种特定“情”之维度的双语定义与文学意义"
            : "* Click any glyph card to unlock the bilingual definition and critique of that specific taxonomy"}
        </p>

        {/* The Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {currentTaxonomyItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedFeeling(item)}
              className={`flex flex-col items-center justify-center p-2 rounded-sm border transition-all cursor-pointer ${
                selectedFeeling?.char === item.char
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white scale-105 shadow-md"
                  : "border-[var(--paper-border)] bg-[var(--paper-bg)] text-[var(--ink-title)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 hover:scale-102"
              }`}
            >
              <span className="text-xl sm:text-2xl font-bold font-hans">{item.char}</span>
              <span className="text-[8px] opacity-75 font-sans mt-0.5">{item.pinyin}</span>
            </button>
          ))}
        </div>

        {/* Selected Taxonomy Detail panel */}
        <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/30 p-3 sm:p-4 rounded-sm min-h-[90px] flex items-center justify-center">
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
                    {selectedFeeling.pinyin.toUpperCase()} ·{" "}
                    {lang === "zh" ? selectedFeeling.nameEn : selectedFeeling.nameZh}
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
    </div>
  );
}
