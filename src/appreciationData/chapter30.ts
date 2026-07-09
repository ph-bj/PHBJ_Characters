import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter30Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 88 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 80 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 92 },
  ],
  timelineData: [
    {
      stageZh: "1. 阶段起因", stageEn: "1. The Cause", sentiment: 50,
      descriptionZh: "本章开篇局势：第三十章：琴言泣凤仙",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "琴言被禁闭在内室，对着凤仙花流泪感叹自己的命运。",
      descriptionEn: "Confined to the inner chambers, Qinyan weeps while reflecting on his fate.",
    },
    {
      stageZh: "3. 剧情高潮", stageEn: "3. Climax", sentiment: 80,
      descriptionZh: "本章的高潮点与情感爆发",
      descriptionEn: "The climax and emotional burst of this chapter.",
    }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "本章紧接上文，推动了核心情节发展。", textEn: "This chapter directly follows the previous text, advancing the core plot." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第三十章：琴言泣凤仙与深闺幽闭' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 30: Qinyan's Tears and the Balsam Flowers', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "琴言与被采摘的凤仙花产生共鸣，感受着幽闭生活带来的存在主义恐惧。", textEn: "Qinyan identifies with the plucked flowers, feeling the existential dread of his confined life." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "美丽的短暂悲剧与缺乏自主权", textEn: "The tragic ephemeral nature of beauty and lack of autonomy." },
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
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 85,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetic", textZh: "修辞手法运用得当，提升了文学表现力。", textEn: "Proper use of rhetorical devices enhances literary expression." },
        { labelZh: "感官描写", labelEn: "Sensory", textZh: "视觉与听觉等多重感官描写的交织，构建了生动的临场感。", textEn: "The intertwining of visual and auditory descriptions builds a vivid sense of presence." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 92,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "剧情的起伏给读者带来较强的情绪共振与思考。", textEn: "The ups and downs of the plot bring readers strong emotional resonance and reflection." },
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“美丽的短暂悲剧与缺乏自主权”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The tragic ephemeral nature of beauty and lack of autonomy.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizer: {
    type: "objectSymbolism",
    objects: [
        {
          id: 1,
          objectZh: "被采摘的凤仙花", objectEn: "Plucked Balsam Flowers",
          appearanceZh: "花色娇艳，却离开枝头插在瓶中或鬓边", appearanceEn: "Brightly colored, but removed from the branch and placed in a vase or hair",
          meaningZh: "完美隐喻了琴言自身的命运：因美丽而被权贵（华公子）‘采摘’把玩，看似受宠，实则切断了生命的根基，注定迅速枯萎。", meaningEn: "A perfect metaphor for Qinyan's fate: 'plucked' by power (Hua) for his beauty. Seemingly favored, but cut off from his life's roots, doomed to wither quickly."
        },
        {
          id: 2,
          objectZh: "深闺与水晶假山", objectEn: "Inner Chambers and Crystal Rockery",
          appearanceZh: "精致、幽闭、与世隔绝", appearanceEn: "Exquisite, claustrophobic, isolated from the world",
          meaningZh: "象征着华丽的牢笼。水晶的透明看似自由，实则是坚硬的壁垒，将琴言囚禁在无形的权力网中。", meaningEn: "Symbolizes a gilded cage. The crystal's transparency mimics freedom but is a hard barrier, trapping Qinyan in an invisible web of power."
        }
      ]
  }
};
