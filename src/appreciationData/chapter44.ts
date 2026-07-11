import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter44Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：琴言赎身",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "华府的仆人发现琴言已被赎身搬走，使得华公子的传唤落空。",
      descriptionEn: "Hua's servant discovers Qinyan has been redeemed and moved out, frustrating Hua's summons.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第四十四章：琴言赎身与华公子的震惊' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 44: Qinyan's Redemption and Hua's Surprise', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "琴言重获自由，彻底颠覆了华公子的占有欲。", textEn: "Qinyan gains his freedom, completely upending Young Master Hua's sense of ownership." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "权力的局限与意外解放的震惊", textEn: "The limits of power and the shock of unexpected liberation." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“权力的局限与意外解放的震惊”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The limits of power and the shock of unexpected liberation.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "powerDynamics",
    dynamics: [
        {
          id: 1,
          dominatorZh: "江南义士 (暗指救助者)", dominatorEn: "The Southern Righteous Man (Rescuer)",
          submissiveZh: "华公子的话语权", submissiveEn: "Young Master Hua's Authority",
          powerBaseZh: "资本的介入与契约的合法解除", powerBaseEn: "Capital intervention and legal termination of the contract",
          shiftZh: "通过合法的银钱赎身，彻底瓦解了华公子基于身份碾压的特权，完成了权力的完美反转。", shiftEn: "Through legal monetary redemption, Hua's privilege based on status crushing is completely dismantled, completing a perfect power reversal."
        }
      ]
  },
    {
      "type": "archetypes",
      "archetypes": [
        {
          "id": 1,
          "titleZh": "隐忍的牺牲者",
          "titleEn": "The Patient Sacrifice",
          "roleZh": "杜琴言",
          "roleEn": "Du Qinyan",
          "descZh": "独自承受压力",
          "descEn": "Bears pressure alone"
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
          "relationZh": "绝交之札",
          "relationEn": "The Letter of Rupture",
          "temperature": 10,
          "noteZh": "赎身消息激起震怒，一纸恶札断绝两府往来。",
          "noteEn": "News of the ransom ignites fury; one venomous letter severs the two houses."
        },
        {
          "id": 2,
          "pairZh": "姚贤 ⇄ 孟七",
          "pairEn": "Yao Xian ⇄ Meng Qi",
          "relationZh": "仆从探信",
          "relationEn": "Servants Piecing the Truth",
          "temperature": 45,
          "noteZh": "底层跑腿的口中拼出惊天真相。",
          "noteEn": "The earth-shaking truth is assembled from errand-runners' gossip."
        },
        {
          "id": 3,
          "pairZh": "杜琴言 ⇄ 怡园",
          "pairEn": "Du Qinyan ⇄ Yiyuan",
          "relationZh": "新生之所",
          "relationEn": "Place of Rebirth",
          "temperature": 90,
          "noteZh": "从牢笼般的旧身份中挣脱，崭新人生自此开始。",
          "noteEn": "Free of the old caged identity at last — a new life begins here."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "子云以两千四百五十两银票替琴言赎身",
          "decisionEn": "Ziyun redeems Qinyan with a note for 2,450 taels",
          "rippleZh": "华公子传唤落空，震怒之下却无可奈何。",
          "rippleEn": "Young Master Hua's summons finds no one; his rage has nowhere to land.",
          "echoZh": "两府绝交的裂痕，直到第60回团圆宴方才弥合。",
          "echoEn": "The rupture between the houses heals only at the grand reunion of chapter 60."
        },
        {
          "id": 2,
          "decisionZh": "琴言悄然住进怡园",
          "decisionEn": "Qinyan quietly moves into Yiyuan",
          "rippleZh": "从此告别樊笼岁月。",
          "rippleEn": "The years of the cage end without fanfare.",
          "echoZh": "从优伶到义子、再到受人尊敬的士人（第46、60回），命运的转折自此起笔。",
          "echoEn": "From performer to adopted son to respected literatus (ch. 46, 60) — the great turn of his fate starts here."
        }
      ]
    }
  ]
};
