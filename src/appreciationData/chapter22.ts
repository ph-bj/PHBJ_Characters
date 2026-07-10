import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter22Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 88 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 82 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 86 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 92 },
  ],
  timelineData: [
    {
      stageZh: "1. 阶段起因", stageEn: "1. The Cause", sentiment: 50,
      descriptionZh: "本章开篇局势：素兰定计",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "素兰为子玉安排了一艘安静的画舫，以期与琴言相会。",
      descriptionEn: "Sulan arranges a quiet boat for Ziyu to finally meet Qinyan.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第二十二章：素兰定计与画舫相会' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 22: Sulan's Plan and the Boat Meeting', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "素兰作为富有同情心且聪慧的中间人，使子玉在希望中复苏。", textEn: "Sulan acts as a compassionate and clever intermediary; Ziyu revives with hope." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "友谊与希望促成了一场微妙的重逢", textEn: "Hope and friendship orchestrating a delicate reunion." },
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "文中场景被赋予了强烈的象征意味，暗合人物心境。", textEn: "Scenes in the text are given strong symbolic meaning, matching the characters' moods." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "流露出作者对特定现象的批判态度或审美倾向。", textEn: "Reveals the author's critical attitude or aesthetic tendency towards certain phenomena." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "Point of View & Voice", score: 82,
      subsections: [
        { labelZh: "叙事视角", labelEn: "Narrative POV", textZh: "视角的切换灵活，既有全知的宏观掌握，又有局部的心理聚焦。", textEn: "Flexible perspective switching, with both omniscient macro-mastery and local psychological focus." },
        { labelZh: "语调与语体", labelEn: "Tone & Voice", textZh: "叙述语调与场景氛围高度契合，增强了代入感。", textEn: "The narrative tone perfectly matches the scene atmosphere, enhancing immersion." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 86,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetic", textZh: "修辞手法运用得当，提升了文学表现力。", textEn: "Proper use of rhetorical devices enhances literary expression." },
        { labelZh: "感官描写", labelEn: "Sensory", textZh: "视觉与听觉等多重感官描写的交织，构建了生动的临场感。", textEn: "The intertwining of visual and auditory descriptions builds a vivid sense of presence." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 92,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "剧情的起伏给读者带来较强的情绪共振与思考。", textEn: "The ups and downs of the plot bring readers strong emotional resonance and reflection." },
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“友谊与希望促成了一场微妙的重逢”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'Hope and friendship orchestrating a delicate reunion.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "spatialMapping",
    spaces: [
        {
          id: 1,
          locationZh: "东门外的画舫", locationEn: "The Painted Boat Outside East Gate",
          atmosphereZh: "清幽、隐秘、超脱世俗喧嚣", atmosphereEn: "Quiet, secret, transcending worldly noise",
          significanceZh: "象征着摆脱名利场与规矩束缚的纯粹情感空间，是子玉与琴言灵魂交汇的避难所。", significanceEn: "Symbolizes a pure emotional space free from vanity and rules, a sanctuary for Ziyu and Qinyan's souls."
        },
        {
          id: 2,
          locationZh: "琴言被堵的院落", locationEn: "Qinyan's Blocked Courtyard",
          atmosphereZh: "嘈杂、混乱、充满市井的压迫感", atmosphereEn: "Noisy, chaotic, filled with vulgar oppression",
          significanceZh: "代表了优伶无法摆脱的底层身份与残酷的社会现实。", significanceEn: "Represents the inescapable low status of actors and the cruel social reality."
        }
      ]
  },
    {
      "type": "rumorNetwork",
      "rumors": [
        {
          "id": 1,
          "rumorZh": "琴言在华府受委屈",
          "rumorEn": "Qinyan suffers in Hua mansion",
          "originZh": "优伶间的私下议论",
          "originEn": "Private chatter among actors",
          "effectZh": "加重了外界的刻板印象",
          "effectEn": "Reinforces external stereotypes"
        }
      ]
    }
  ]
};
