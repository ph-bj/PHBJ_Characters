import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter52Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：春航大婚",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "春航迎娶侯爷千金，获得了价值连城的嫁妆与庄园。",
      descriptionEn: "Chunhang marries the Marquis's daughter, receiving a massive dowry of estates and wealth.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第五十二章：春航大婚与天价嫁妆' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 52: Chunhang's Lavish Wedding', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "春航通过婚姻获得了巨额财富，巩固了他的新精英地位。", textEn: "Chunhang receives immense wealth through marriage, solidifying his new elite status." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "婚姻的商品化以及财富与学者地位的交集", textEn: "The commodification of marriage and the intersection of wealth and scholarly status." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“婚姻的商品化以及财富与学者地位的交集”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The commodification of marriage and the intersection of wealth and scholarly status.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "wealthFlow",
    flows: [
        {
          id: 1,
          sourceZh: "苏侯爷", sourceEn: "Marquis Su",
          targetZh: "田春航", targetEn: "Tian Chunhang",
          amountZh: "二百顷庄园与巨额嫁妆", amountEn: "200 qing of estates and a massive dowry",
          impactZh: "彻底改变了春航清贫文人的阶层属性，使其跃升为顶级权贵阶层，展示了联姻作为财富转移的工具。", impactEn: "Completely altered Chunhang's class from poor scholar to top-tier elite, showing marriage as a tool for wealth transfer."
        }
      ]
  },
    {
      "type": "emotionalDichotomy",
      "dichotomies": [
        {
          "id": 1,
          "characterZh": "杜琴言",
          "characterEn": "Du Qinyan",
          "surfaceEmotionZh": "顺从木然",
          "surfaceEmotionEn": "Submissive numbness",
          "hiddenEmotionZh": "渴望自由",
          "hiddenEmotionEn": "Thirst for freedom",
          "triggerZh": "被迫赴宴",
          "triggerEn": "Forced to attend banquet"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "田春航 ⇄ 苏氏千金",
          "pairEn": "Tian Chunhang ⇄ the Marquis's Daughter",
          "relationZh": "豪门联姻",
          "relationEn": "An Alliance of Houses",
          "temperature": 65,
          "noteZh": "数万妆奁的婚事，巩固了状元的新贵地位。",
          "noteEn": "A dowry in the tens of thousands cements the new champion's standing."
        },
        {
          "id": 2,
          "pairZh": "高品 ⇄ 田春航",
          "pairEn": "Gao Pin ⇄ Tian Chunhang",
          "relationZh": "令中相讥",
          "relationEn": "Barbs at the Banquet",
          "temperature": 60,
          "noteZh": "《当巾》暗讽对郑元和自比，机锋往来言笑晏晏。",
          "noteEn": "A pointed opera reference meets a deft Zheng Yuanhe rejoinder — blades flashing through the laughter."
        },
        {
          "id": 3,
          "pairZh": "梅子玉 ⇄ 喜宴",
          "pairEn": "Mei Ziyu ⇄ the Wedding Feast",
          "relationZh": "强颜与会",
          "relationEn": "Smiling Through",
          "temperature": 30,
          "noteZh": "强撑病体出席，因琴仙缺席而黯然神伤。",
          "noteEn": "He drags his sick body to the feast, hollowed by the one absence that matters."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "春航迎娶苏侯千金",
          "decisionEn": "Chunhang weds the marquis's daughter",
          "rippleZh": "妆奁数万、宾客如云、两班竞艳。",
          "rippleEn": "A vast dowry, a sea of guests, two opera troupes competing in splendor.",
          "echoZh": "财富与功名交汇的顶点，也为蕙芳的位置留下永恒的微妙。",
          "echoEn": "The summit where wealth meets rank — leaving Huifang's place forever, delicately, unresolved."
        },
        {
          "id": 2,
          "decisionZh": "高品席间借《当巾》一出暗讽新郎",
          "decisionEn": "Gao Pin needles the groom with a pointed scene from 'Pawning the Kerchief'",
          "rippleZh": "春航以郑元和自比，巧妙还击。",
          "rippleEn": "Chunhang parries by casting himself as Zheng Yuanhe.",
          "echoZh": "名士间的机锋不因富贵而钝——风骨犹在，是全书对功名的温和提醒。",
          "echoEn": "Wit stays sharp even in silk — the novel's gentle reminder that character outranks rank."
        }
      ]
    }
  ]
};
