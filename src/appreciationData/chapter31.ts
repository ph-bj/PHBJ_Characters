import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter31Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：戏台上下",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "一场戏曲表演引发了后台的争吵以及观众和演员之间的嫉妒。",
      descriptionEn: "A theatrical performance leads to backstage bickering and jealousy among the audience and actors.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第三十一章：戏台上下与争风吃醋' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 31: Theatrical Performances and Jealousy', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "子佩的用力过猛与防御性自尊，文泽的尖锐批评。", textEn: "Zipei's overacting and defensive pride; Wenze's sharp critique." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "戏台表演与现实名利场的交织", textEn: "The intersection of theatrical performance and real-world vanity." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“戏台表演与现实名利场的交织”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The intersection of theatrical performance and real-world vanity.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "emotionalDichotomy",
    dichotomies: [
        {
          id: 1,
          characterZh: "冯子佩", characterEn: "Feng Zipei",
          surfaceEmotionZh: "舞台上的卖力与台下的愤怒防卫", surfaceEmotionEn: "Overexertion on stage and angry defensiveness off stage",
          hiddenEmotionZh: "对自身技艺的不自信与对名士评价的极度渴望", hiddenEmotionEn: "Insecurity about his skills and an extreme craving for validation from scholars",
          triggerZh: "听到文泽等人的闲聊，误以为是对自己演技的贬低", triggerEn: "Hearing Wenze's idle chat and mistaking it for a critique of his acting"
        }
      ]
  },
    {
      "type": "spatialMapping",
      "spaces": [
        {
          "id": 1,
          "locationZh": "喧闹的戏台",
          "locationEn": "The Noisy Stage",
          "atmosphereZh": "繁华浮躁",
          "atmosphereEn": "Prosperous and impetuous",
          "significanceZh": "优伶们争奇斗艳的名利场",
          "significanceEn": "The vanity fair for actors"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "冯子佩 ⇄ 刘文泽",
          "pairEn": "Feng Zipei ⇄ Liu Wenze",
          "relationZh": "无端猜隙",
          "relationEn": "A Groundless Grudge",
          "temperature": 30,
          "noteZh": "台上费力、台下疑谤，一场误会闹成满座笑谈。",
          "noteEn": "Straining on stage, suspecting slander below — a misunderstanding that becomes the table's best joke."
        },
        {
          "id": 2,
          "pairZh": "杜琴言 ⇄ 席间繁华",
          "pairEn": "Du Qinyan ⇄ the Glittering Feast",
          "relationZh": "身在心不在",
          "relationEn": "Present in Body Only",
          "temperature": 20,
          "noteZh": "托病离席独坐屏后，乐声愈欢，愁绪愈浓。",
          "noteEn": "Pleading illness, he sits alone behind the screen — the merrier the music, the deeper his sorrow."
        },
        {
          "id": 3,
          "pairZh": "梅子玉 ⇄ 众名士",
          "pairEn": "Mei Ziyu ⇄ the Scholars",
          "relationZh": "翰墨争锋",
          "relationEn": "Duels in Ink",
          "temperature": 65,
          "noteZh": "就书法诗词高论迭出，争辩不休而愈见风雅。",
          "noteEn": "Theories of calligraphy and verse clash and spark — contention as refinement."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "子佩登台献艺，却疑心文泽在台下讥评",
          "decisionEn": "Zipei performs on stage, then suspects Wenze of mocking him from below",
          "rippleZh": "华公子笑比“阎婆惜”，满座莞尔。",
          "rippleEn": "Young Master Hua laughingly likens him to Yan Poxi, to the table's delight.",
          "echoZh": "名利场中的敏感自尊被写成一面镜子，照见清客与优伶的共同处境。",
          "echoEn": "Thin-skinned pride becomes a mirror held up to retainer and performer alike."
        },
        {
          "id": 2,
          "decisionZh": "琴言托病离席，独坐屏后垂泪",
          "decisionEn": "Qinyan pleads illness and weeps alone behind the screen",
          "rippleZh": "繁华与悲凉同框，无人察觉。",
          "rippleEn": "Splendor and desolation share one frame, and no one notices.",
          "echoZh": "“困于金笼”的意象反复回响，直至赎身出府方止（第44回）。",
          "echoEn": "The gilded-cage image echoes on and on, silenced only by the ransom of chapter 44."
        }
      ]
    }
  ]
};
