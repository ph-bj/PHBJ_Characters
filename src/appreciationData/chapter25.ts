import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter25Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：华公子游怡园",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "众人谈论新戏，为华公子游园做铺垫。",
      descriptionEn: "Discussions of new plays precede Young Master Hua's visit to the garden.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第二十五章：华公子游怡园' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 25: Young Master Hua at Pleasant Garden', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "华公子的盛大登场彰显了其社会统治力。", textEn: "Young Master Hua's grand arrival underscores his social dominance." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "上层社会的表面浮华与社交手腕", textEn: "The superficial splendor and social maneuvering of the elite." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“上层社会的表面浮华与社交手腕”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The superficial splendor and social maneuvering of the elite.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "powerDynamics",
    dynamics: [
        {
          id: 1,
          dominatorZh: "华公子", dominatorEn: "Young Master Hua",
          submissiveZh: "名士与优伶群体", submissiveEn: "Scholars and Actors",
          powerBaseZh: "无与伦比的财富与显赫的家世背景", powerBaseEn: "Unrivaled wealth and prominent family background",
          shiftZh: "他的到来让怡园的焦点瞬间转移，所有人的活动（如排新戏）都围绕取悦他而展开，确立了绝对的中心地位。", shiftEn: "His arrival shifts the garden's focus instantly; all activities revolve around pleasing him, establishing his absolute centrality."
        }
      ]
  },
    {
      "type": "spatialMapping",
      "spaces": [
        {
          "id": 1,
          "locationZh": "华府内宅",
          "locationEn": "Hua Mansion Inner Quarters",
          "atmosphereZh": "封闭压抑",
          "atmosphereEn": "Enclosed and oppressive",
          "significanceZh": "代表琴言受困的牢笼",
          "significanceEn": "Represents Qinyan's cage"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "华公子 ⇄ 徐子云",
          "pairEn": "Young Master Hua ⇄ Xu Ziyun",
          "relationZh": "贵胄相酬",
          "relationEn": "Nobles Exchanging Courtesies",
          "temperature": 55,
          "noteZh": "怡园设宴看戏，豪门社交的雍容之下各有心思。",
          "noteEn": "A banquet and opera at Yiyuan — beneath the aristocratic polish, separate agendas."
        },
        {
          "id": 2,
          "pairZh": "众名士 ⇄ 华府",
          "pairEn": "The Scholars ⇄ the Hua Mansion",
          "relationZh": "借故缺席",
          "relationEn": "Polite Absences",
          "temperature": 35,
          "noteZh": "子玉称病、竹君醉伤，各有推辞各怀心事。",
          "noteEn": "Ziyu pleads illness, Zhujun a drinking injury — every excuse hides a reservation."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "华公子在怡园大摆宴席邀名士看戏",
          "decisionEn": "Young Master Hua throws a grand opera banquet at Yiyuan",
          "rippleZh": "名士纷纷借故缺席，宾主之间隐有暗流。",
          "rippleEn": "The scholars beg off one after another; undercurrents run beneath the courtesies.",
          "echoZh": "名士圈与华府的疏离，预示了琴言日后入府的孤立无援。",
          "echoEn": "The circle's distance from the Hua mansion foreshadows how alone Qinyan will be inside it."
        },
        {
          "id": 2,
          "decisionZh": "萧次贤在后台指点演员声律",
          "decisionEn": "Xiao Cixian coaches the performers on melody backstage",
          "rippleZh": "华公子见识了怡园的艺文底蕴。",
          "rippleEn": "Young Master Hua glimpses Yiyuan's artistic depth.",
          "echoZh": "对“名花”的欣赏渐成占有欲——第26回便密谋购琴言入府。",
          "echoEn": "Appreciation of 'famous flowers' curdles into possession — by chapter 26 he is scheming to acquire Qinyan."
        }
      ]
    }
  ]
};
