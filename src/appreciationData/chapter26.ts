import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter26Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：星楼春晓",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "华公子回府，十名着装统一的侍女在星楼等候。",
      descriptionEn: "Hua returns to his mansion to find ten identically dressed maids awaiting him.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第二十六章：星楼春晓与侍女盈门' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 26: The Star-Lattice Bedchamber', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "整齐划一的侍女反映了华公子周围的物化与奢靡。", textEn: "The identical maids reflect the objectification and luxury surrounding Hua." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "华府的极致颓靡与审美沉迷", textEn: "The extreme decadence and aesthetic indulgence of the Hua mansion." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“华府的极致颓靡与审美沉迷”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The extreme decadence and aesthetic indulgence of the Hua mansion.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "objectSymbolism",
    objects: [
        {
          id: 1,
          objectZh: "十名统一着装的侍女", objectEn: "Ten Identically Dressed Maids",
          appearanceZh: "皆穿白纺绸大衫，梳麻姑髻，簪茉莉花", appearanceEn: "All wearing white silk gowns, Magu chignons, pinned with jasmine",
          meaningZh: "极致的审美追求掩盖了对女性的物化。她们不再是独立的个体，而是华公子权力与审美的标准化展示品。", meaningEn: "Extreme aesthetic pursuit masking the objectification of women. They are no longer individuals, but standardized displays of Hua's power."
        },
        {
          id: 2,
          objectZh: "星楼的灯光与香气", objectEn: "Lamplight and Perfume in the Star-Lattice",
          appearanceZh: "柔和暧昧，香气袭人", appearanceEn: "Soft, ambiguous, with overwhelming fragrance",
          meaningZh: "象征着华府内部那种令人窒息的颓靡与温柔乡的沉沦，与外界的现实完全隔离。", meaningEn: "Symbolizes the suffocating decadence and indulgence within the Hua mansion, completely isolated from outside reality."
        }
      ]
  },
    {
      "type": "archetypes",
      "archetypes": [
        {
          "id": 1,
          "titleZh": "市井无赖",
          "titleEn": "The Street Rogue",
          "roleZh": "底层混混",
          "roleEn": "Bottom-rung hustlers",
          "descZh": "坑蒙拐骗生存的底层人物",
          "descEn": "Figures surviving on scams"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "华公子 ⇄ 林珊枝",
          "pairEn": "Young Master Hua ⇄ Lin Shanzhi",
          "relationZh": "心腹密谈",
          "relationEn": "Confidant in the Night",
          "temperature": 60,
          "noteZh": "收留琴言之事夜议内室，心腹奉命穿针引线。",
          "noteEn": "The plan to take in Qinyan is weighed in the inner chamber; the confidant is sent to thread the needle."
        },
        {
          "id": 2,
          "pairZh": "魏聘才 ⇄ 长庆",
          "pairEn": "Wei Pincai ⇄ Changqing",
          "relationZh": "威逼施压",
          "relationEn": "Coercion",
          "temperature": 10,
          "noteZh": "以“无身价”之名逼戏班就范，幕后黑手浮出水面。",
          "noteEn": "Pressure to hand Qinyan over 'without a price' — the hidden hand shows itself."
        },
        {
          "id": 3,
          "pairZh": "华公子 ⇄ 十珠侍女",
          "pairEn": "Young Master Hua ⇄ the Ten Pearl Maids",
          "relationZh": "奢靡日常",
          "relationEn": "Luxury as Routine",
          "temperature": 50,
          "noteZh": "星楼调粥的精致画卷，写尽豪门的物化与讲究。",
          "noteEn": "The exquisite tableau of porridge-making at Star Tower — refinement built on objectification."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "聘才向长庆施压，谋划将琴言送入华府",
          "decisionEn": "Pincai squeezes Changqing, engineering Qinyan's transfer into the Hua mansion",
          "rippleZh": "幕后运作悄然收网。",
          "rippleEn": "The behind-the-scenes net quietly closes.",
          "echoZh": "第28回琴言被亲送入府，生离之悲全由此局。",
          "echoEn": "By chapter 28 Qinyan is delivered to the mansion — all the grief of that parting begins with this plot."
        },
        {
          "id": 2,
          "decisionZh": "华公子决意“重国色”而购名花",
          "decisionEn": "Young Master Hua resolves to 'prize national beauty' and acquire the famous flower",
          "rippleZh": "琴言浑然不觉，命运的转折已然逼近。",
          "rippleEn": "Qinyan suspects nothing as the turn of his fate bears down.",
          "echoZh": "高墙内的岁月成为琴言一生最暗的章节，直至第44回赎身方解。",
          "echoEn": "The years behind those high walls are the darkest of his life — unbroken until the ransom of chapter 44."
        }
      ]
    }
  ]
};
