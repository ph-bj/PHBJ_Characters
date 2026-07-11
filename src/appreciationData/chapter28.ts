import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter28Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：长庆请罪",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "长庆与叶茂林负荆请罪，助长了聘才的得意。",
      descriptionEn: "Changqing and Ye Maolin beg pardon, feeding Pincai's triumph.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第二十八章：长庆请罪与聘才得意' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 28: Changqing's Submission', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "长庆的温顺屈服与聘才膨胀的自尊形成对比。", textEn: "Changqing's meek submission contrasts with Pincai's inflated ego." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "社会等级的残酷现实与被迫的屈辱", textEn: "The harsh reality of social hierarchy and forced humiliation." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“社会等级的残酷现实与被迫的屈辱”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The harsh reality of social hierarchy and forced humiliation.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "poetryCritique",
    critiques: [
        {
          id: 1,
          titleZh: "负荆请罪的荒诞诗意", titleEn: "The Absurd Poetics of Begging Pardon",
          contentZh: `长庆背负荆条，\n步入权贵的书房。\n不索一文，只求苟全。\n小人的嘴角，\n挂着最得意的笑。`, contentEn: `Changqing bears thorns on his back,\nEntering the study of power.\nAsking not a single coin, only to survive.\nThe petty man's lips,\nCurl in the most triumphant smile.`,
          critiqueZh: "这一幕犹如一出荒诞的戏剧，传统的‘负荆请罪’被剥夺了道德内涵，沦为纯粹的权力碾压与平民的极致屈辱。聘才的‘拒收赎金’并非宽宏，而是为了彻底摧毁对方的尊严底线。", critiqueEn: "This scene is like an absurd play. The traditional 'bearing thorns' is stripped of moral meaning, reduced to pure power crushing and ultimate civilian humiliation. Pincai's 'refusal of ransom' is not generosity, but a move to utterly destroy their dignity."
        }
      ]
  },
    {
      "type": "archetypes",
      "archetypes": [
        {
          "id": 1,
          "titleZh": "精明戏班主",
          "titleEn": "The Shrewd Troupe Master",
          "roleZh": "长庆",
          "roleEn": "Changqing",
          "descZh": "唯利是图的长庆",
          "descEn": "The profit-driven Changqing"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "杜琴言 ⇄ 梅子玉",
          "pairEn": "Du Qinyan ⇄ Mei Ziyu",
          "relationZh": "罗帕寄情",
          "relationEn": "A Kerchief of Farewell",
          "temperature": 90,
          "noteZh": "一方泪帕、四味药草，万语千言尽在隐语之中。",
          "noteEn": "One tear-stained kerchief and four herbs — ten thousand words folded into a cipher."
        },
        {
          "id": 2,
          "pairZh": "长庆 ⇄ 魏聘才",
          "pairEn": "Changqing ⇄ Wei Pincai",
          "relationZh": "屈从胁迫",
          "relationEn": "Submission Under Duress",
          "temperature": 15,
          "noteZh": "迫于压力亲送琴言入府，温顺屈服助长小人气焰。",
          "noteEn": "Pressured into delivering Qinyan himself, his meekness only feeds the schemer's swagger."
        },
        {
          "id": 3,
          "pairZh": "杜琴言 ⇄ 华公子",
          "pairEn": "Du Qinyan ⇄ Young Master Hua",
          "relationZh": "笼中新客",
          "relationEn": "New to the Cage",
          "temperature": 30,
          "noteZh": "举止端谨、沉默相对，是笼中人仅有的自卫。",
          "noteEn": "Careful manners and silence — the only armor left to the caged."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "琴言将罗帕与药草托素兰转呈子玉",
          "decisionEn": "Qinyan entrusts the kerchief and herbs to Sulan for Ziyu",
          "rippleZh": "数日后子玉方知变故，如坠冰窟。",
          "rippleEn": "Days later Ziyu learns the truth and plunges into ice.",
          "echoZh": "这份隐语信物成为二人隔墙相守的凭证。",
          "echoEn": "The coded keepsake becomes the token of a vigil kept across walls."
        },
        {
          "id": 2,
          "decisionZh": "长庆以“不收身价”将琴言送入华府",
          "decisionEn": "Changqing hands Qinyan to the Hua mansion 'without taking a price'",
          "rippleZh": "华公子甚为满意，琴言入住留青精舍。",
          "rippleEn": "Young Master Hua is well pleased; Qinyan is installed in the Liuqing Studio.",
          "echoZh": "“无身价”三字日后成为赎身的死结，直到子云重金破局（第43-44回）。",
          "echoEn": "'No price' becomes the legal knot strangling any ransom — until Ziyun's fortune cuts it (ch. 43-44)."
        }
      ]
    }
  ]
};
