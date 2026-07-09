import fs from 'fs';

const chapterContexts = {
  21: {
    titleEn: "Chapter 21: Wei Pincai's Schemes and Ziyu's Lovesickness",
    titleZh: "第二十一章：魏聘才得志与子玉相思",
    themeEn: "The alienation of power and the torment of unfulfilled love.",
    themeZh: "权力的异化与求而不得的相思之苦",
    charEn: "Wei Pincai shows his true petty nature after gaining power; Ziyu languishes in lovesickness.",
    charZh: "魏聘才得志便猖狂的小人嘴脸，与梅子玉因相思而积郁成疾形成鲜明对比。",
    plotEn: "Wei Pincai visits the sick Ziyu, contrasting his new arrogance with Ziyu's melancholy.",
    plotZh: "魏聘才拜访病中的子玉，其新得的傲慢与子玉的忧郁形成对比。"
  },
  22: {
    titleEn: "Chapter 22: Sulan's Plan and the Boat Meeting",
    titleZh: "第二十二章：素兰定计与画舫相会",
    themeEn: "Hope and friendship orchestrating a delicate reunion.",
    themeZh: "友谊与希望促成了一场微妙的重逢",
    charEn: "Sulan acts as a compassionate and clever intermediary; Ziyu revives with hope.",
    charZh: "素兰作为富有同情心且聪慧的中间人，使子玉在希望中复苏。",
    plotEn: "Sulan arranges a quiet boat for Ziyu to finally meet Qinyan.",
    plotZh: "素兰为子玉安排了一艘安静的画舫，以期与琴言相会。"
  },
  23: {
    titleEn: "Chapter 23: Li Yuanmao and the Silver Notes",
    titleZh: "第二十三章：李元茂借银与银票风波",
    themeEn: "The practicalities of life and the burden of financial struggles.",
    themeZh: "生活的现实性与财务困境的重压",
    charEn: "Li Yuanmao's meticulous and desperate handling of money highlights his precarity.",
    charZh: "李元茂对金钱的小心翼翼与绝望，凸显了他的处境堪忧。",
    plotEn: "Yuanmao borrows money from Ziyu and exchanges it for notes, leading to new troubles.",
    plotZh: "元茂向子玉借钱并换成银票，引发了新的风波。"
  },
  24: {
    titleEn: "Chapter 24: Pan the Third's Pestering",
    titleZh: "第二十四章：潘三纠缠与应对之策",
    themeEn: "The harassment faced by actors and the strategies of resistance.",
    themeZh: "优伶面临的骚扰及反抗策略",
    charEn: "Pan the Third's predatory nature against Su Huifang and Meixiang's reluctant diplomacy.",
    charZh: "潘三对苏蕙芳的掠夺本性，以及梅香无奈的外交周旋。",
    plotEn: "Rumors spread about Pan the Third demanding to adopt Su Huifang.",
    plotZh: "潘三强求收苏蕙芳为义子的流言四起。"
  },
  25: {
    titleEn: "Chapter 25: Young Master Hua at Pleasant Garden",
    titleZh: "第二十五章：华公子游怡园",
    themeEn: "The superficial splendor and social maneuvering of the elite.",
    themeZh: "上层社会的表面浮华与社交手腕",
    charEn: "Young Master Hua's grand arrival underscores his social dominance.",
    charZh: "华公子的盛大登场彰显了其社会统治力。",
    plotEn: "Discussions of new plays precede Young Master Hua's visit to the garden.",
    plotZh: "众人谈论新戏，为华公子游园做铺垫。"
  },
  26: {
    titleEn: "Chapter 26: The Star-Lattice Bedchamber",
    titleZh: "第二十六章：星楼春晓与侍女盈门",
    themeEn: "The extreme decadence and aesthetic indulgence of the Hua mansion.",
    themeZh: "华府的极致颓靡与审美沉迷",
    charEn: "The identical maids reflect the objectification and luxury surrounding Hua.",
    charZh: "整齐划一的侍女反映了华公子周围的物化与奢靡。",
    plotEn: "Hua returns to his mansion to find ten identically dressed maids awaiting him.",
    plotZh: "华公子回府，十名着装统一的侍女在星楼等候。"
  },
  27: {
    titleEn: "Chapter 27: Wei Pincai's Extortion Plot",
    titleZh: "第二十七章：魏聘才的勒索阴谋",
    themeEn: "The corrupting influence of unearned power and greed.",
    themeZh: "不当权力与贪婪的腐蚀力",
    charEn: "Pincai plots ruthlessly, seeking a massive ransom and enjoying his cruelty.",
    charZh: "聘才冷酷地策划着巨额勒索，享受着他的残忍。",
    plotEn: "Pincai plots to harry Changqing for ransom and force submission.",
    plotZh: "聘才密谋敲诈长清，迫其就范。"
  },
  28: {
    titleEn: "Chapter 28: Changqing's Submission",
    titleZh: "第二十八章：长清请罪与聘才得意",
    themeEn: "The harsh reality of social hierarchy and forced humiliation.",
    themeZh: "社会等级的残酷现实与被迫的屈辱",
    charEn: "Changqing's meek submission contrasts with Pincai's inflated ego.",
    charZh: "长清的温顺屈服与聘才膨胀的自尊形成对比。",
    plotEn: "Changqing and Ye Maolin beg pardon, feeding Pincai's triumph.",
    plotZh: "长清与叶茂林负荆请罪，助长了聘才的得意。"
  },
  29: {
    titleEn: "Chapter 29: Qinyan Comforts Ziyu",
    titleZh: "第二十九章：琴言慰子玉与夫人的慈悲",
    themeEn: "Unexpected compassion breaking down rigid social barriers.",
    themeZh: "意想不到的慈悲打破了僵化的社会藩篱",
    charEn: "Lady Yan's kindness shocks Qinyan, who approaches Ziyu with deep empathy.",
    charZh: "颜夫人的仁慈令琴言震惊，他满怀同理心去安慰子玉。",
    plotEn: "Qinyan visits the Mei residence and is unexpectedly welcomed by Lady Yan to comfort Ziyu.",
    plotZh: "琴言造访梅府，意外受到颜夫人的欢迎并去安慰子玉。"
  },
  30: {
    titleEn: "Chapter 30: Qinyan's Tears and the Balsam Flowers",
    titleZh: "第三十章：琴言泣凤仙与深闺幽闭",
    themeEn: "The tragic ephemeral nature of beauty and lack of autonomy.",
    themeZh: "美丽的短暂悲剧与缺乏自主权",
    charEn: "Qinyan identifies with the plucked flowers, feeling the existential dread of his confined life.",
    charZh: "琴言与被采摘的凤仙花产生共鸣，感受着幽闭生活带来的存在主义恐惧。",
    plotEn: "Confined to the inner chambers, Qinyan weeps while reflecting on his fate.",
    plotZh: "琴言被禁闭在内室，对着凤仙花流泪感叹自己的命运。"
  }
};

for (let i = 21; i <= 30; i++) {
  const ctx = chapterContexts[i];
  const content = `import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter${i}Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 85 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 80 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 80 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 85 },
  ],
  timelineData: [
    {
      stageZh: "1. 阶段起因", stageEn: "1. The Cause", sentiment: 50,
      descriptionZh: "本章开篇的局势",
      descriptionEn: "The situation at the beginning of the chapter",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "${ctx.plotZh}",
      descriptionEn: "${ctx.plotEn}",
    },
    {
      stageZh: "3. 剧情高潮", stageEn: "3. Climax", sentiment: 80,
      descriptionZh: "本章的高潮点与情感爆发",
      descriptionEn: "The climax and emotional burst of this chapter",
    }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "本章紧接上文，推动了核心情节发展。", textEn: "This chapter directly follows the previous text, advancing the core plot." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '${ctx.titleZh}' 展开，结构严密。", textEn: "The plot revolves around '${ctx.titleEn}', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "${ctx.charZh}", textEn: "${ctx.charEn}" },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 85,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "${ctx.themeZh}", textEn: "${ctx.themeEn}" },
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "文中场景被赋予了强烈的象征意味，暗合人物心境。", textEn: "Scenes in the text are given strong symbolic meaning, matching the characters' moods." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "流露出作者对特定现象的批判态度或审美倾向。", textEn: "Reveals the author's critical attitude or aesthetic tendency towards certain phenomena." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "Point of View & Voice", score: 80,
      subsections: [
        { labelZh: "叙事视角", labelEn: "Narrative POV", textZh: "视角的切换灵活，既有全知的宏观掌握，又有局部的心理聚焦。", textEn: "Flexible perspective switching, with both omniscient macro-mastery and local psychological focus." },
        { labelZh: "语调与语体", labelEn: "Tone & Voice", textZh: "叙述语调与场景氛围高度契合，增强了代入感。", textEn: "The narrative tone perfectly matches the scene atmosphere, enhancing immersion." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 80,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetic", textZh: "修辞手法运用得当，提升了文学表现力。", textEn: "Proper use of rhetorical devices enhances literary expression." },
        { labelZh: "感官描写", labelEn: "Sensory", textZh: "视觉与听觉等多重感官描写的交织，构建了生动的临场感。", textEn: "The intertwining of visual and auditory descriptions builds a vivid sense of presence." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 85,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "剧情的起伏给读者带来较强的情绪共振与思考。", textEn: "The ups and downs of the plot bring readers strong emotional resonance and reflection." },
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“${ctx.themeZh}”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of '${ctx.themeEn}' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizer: { type: "none" }
};
`;
  fs.writeFileSync(`temp_chapter${i}.ts`, content, 'utf8');
}
