import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter46Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：琴仙从学",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "琴仙专心学习诗文书法，与养父建立起了深厚的父子情谊。",
      descriptionEn: "Qinxian dedicates himself to study and calligraphy, developing a strong bond with his adopted father.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第四十六章：琴仙从学与父子情深' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 46: Qinxian's Studies under Qu Daosheng', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "琴仙（琴言）勤奋学习，在屈公的慈爱教导下完成了身份的转变。", textEn: "Qinxian (Qinyan) diligently studies, transforming his identity under Master Qu's loving guidance." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "教育的转化力量与收养的亲情", textEn: "The transformative power of education and adopted familial love." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“教育的转化力量与收养的亲情”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The transformative power of education and adopted familial love.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "socialLadder",
    ladder: [
        {
          id: 1,
          characterZh: "杜琴仙 (原琴言)", characterEn: "Du Qinxian (formerly Qinyan)",
          initialStatusZh: "供人亵玩的优伶", initialStatusEn: "An actor treated as a plaything",
          finalStatusZh: "受人尊敬的士子阶层预备役", finalStatusEn: "Respected scholar-in-training",
          methodZh: "拜名士屈公为义父，潜心研习传统诗书经典", methodEn: "Adopted by the renowned scholar Master Qu, devoting himself to classical studies"
        }
      ]
  },
    {
      "type": "spatialMapping",
      "spaces": [
        {
          "id": 1,
          "locationZh": "幽静园林",
          "locationEn": "Quiet Garden",
          "atmosphereZh": "避世凄美",
          "atmosphereEn": "Escapist and poignant",
          "significanceZh": "精神避风港",
          "significanceEn": "Spiritual haven"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "屈道翁 ⇄ 杜琴仙",
          "pairEn": "Qu Daoweng ⇄ Du Qinxian",
          "relationZh": "义父义子",
          "relationEn": "Father & Son by Choice",
          "temperature": 95,
          "noteZh": "晨昏对课、日授诗文，父慈子孝竟如亲生。",
          "noteEn": "Lessons at dawn and dusk, poetry daily — a father and son more devoted than blood."
        },
        {
          "id": 2,
          "pairZh": "徐子云 ⇄ 屈道翁",
          "pairEn": "Xu Ziyun ⇄ Qu Daoweng",
          "relationZh": "宾主相得",
          "relationEn": "Host & Honored Guest",
          "temperature": 80,
          "noteZh": "园序勒石、“赐书楼”题联语惊四座。",
          "noteEn": "The garden preface carved in stone, the 'Bestowed Books Tower' couplet stunning the assembly."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "屈道翁收琴仙为义子，日授诗文",
          "decisionEn": "Qu Daoweng adopts Qinxian and tutors him daily",
          "rippleZh": "半月之内文理大进，脱籍从学。",
          "rippleEn": "Within a fortnight his letters leap forward; the register of performers is behind him.",
          "echoZh": "琴仙的士人身份自此奠基——第59、60回重返都门时，已能以士礼见故人。",
          "echoEn": "His identity as a literatus is founded here — by chapters 59-60 he returns to the capital greeting old friends as a scholar."
        },
        {
          "id": 2,
          "decisionZh": "子云大开园会，道翁改楼名“赐书楼”",
          "decisionEn": "Ziyun throws the garden assembly; Qu renames the tower 'Bestowed Books'",
          "rippleZh": "分题赋对、觥筹交错，雅集之乐达于鼎盛。",
          "rippleEn": "Assigned verses and flowing cups — the gatherings at their absolute zenith.",
          "echoZh": "怡园的黄金时代在此定格，此后聚散渐多、盛景难再。",
          "echoEn": "Yiyuan's golden age is fixed in this frame; from here, partings multiply and the splendor never quite returns."
        }
      ]
    }
  ]
};
