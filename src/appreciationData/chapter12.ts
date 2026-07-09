import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter12Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 92 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 95 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 80 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 88 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 90 },
  ],
  timelineData: [
    {
      stageZh: "1. 夫人刻令", stageEn: "1. Madam's Engraving", sentiment: 80,
      descriptionZh: "袁夫人将上次酒宴的酒令刻印流传，外人视之为美谈，为前文余波。",
      descriptionEn: "Madam Yuan engraves and circulates the drinking games from the previous feast, making them a popular anecdote."
    },
    {
      stageZh: "2. 春航身世", stageEn: "2. Chunhang's Background", sentiment: 75,
      descriptionZh: "插叙交代田春航（湘帆）的出身、才貌与南下扬州后的风流做派，引出关键新人物。",
      descriptionEn: "A flashback details Tian Chunhang's background, his talents, and his romantic escapades in Yangzhou, introducing a key new character."
    },
    {
      stageZh: "3. 挥金如土", stageEn: "3. Lavish Spending", sentiment: 60,
      descriptionZh: "春航进京后迷恋戏班，挥霍无度，将盘缠花光，陷入窘境。",
      descriptionEn: "After arriving in the capital, Chunhang becomes obsessed with opera troupes, spends recklessly, and falls into financial ruin."
    },
    {
      stageZh: "4. 高品规劝", stageEn: "4. Gao Pin's Advice", sentiment: 85,
      descriptionZh: "高品见春航自奉菲薄却对戏子慷慨，出言相劝，引发了一场关于“诚”与“情”的精彩辩论。",
      descriptionEn: "Seeing Chunhang's frugality toward himself but generosity to performers, Gao Pin advises him, sparking a brilliant debate on 'sincerity' and 'love'."
    },
    {
      stageZh: "5. 春航奇论", stageEn: "5. Chunhang's Marvelous Theory", sentiment: 95,
      descriptionZh: "春航发表长篇大论，将相公之美提升到形而上的“天理”高度，驳斥了世俗的功利婚恋观。",
      descriptionEn: "Chunhang delivers a lengthy monologue, elevating the beauty of performers to a metaphysical 'heavenly principle', refuting secular, utilitarian views of love."
    },
    {
      stageZh: "6. 仲清赠金", stageEn: "6. Zhongqing's Gift", sentiment: 85,
      descriptionZh: "颜仲清慕其才华，又因亲戚关系，赠金二百两以资助，春航却转手又挥霍一空。",
      descriptionEn: "Admiring his talent and discovering their family ties, Yan Zhongqing gifts him 200 taels, which Chunhang quickly squanders again."
    },
    {
      stageZh: "7. 戏园遭冷", stageEn: "7. Cold Reception at the Theater", sentiment: 50,
      descriptionZh: "春航衣衫褴褛在戏园看戏，遭蓉官冷遇，亲眼见证了风月场中的势利。",
      descriptionEn: "Watching a play in tattered clothes, Chunhang receives a cold shoulder from Rong Guan, witnessing firsthand the snobbery of the entertainment world."
    }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "前段简短收尾第十一回的行令，随即以“如今要特说一个人的行事”转入正题，正式引入全书灵魂人物之一：田春航。结尾处春航遭蓉官冷遇，则为他日后的转变或与其他优伶的相遇埋下伏笔。", textEn: "Briefly concludes the previous chapter's drinking games before explicitly introducing Tian Chunhang, a core character. His cold reception at the end foreshadows his eventual transformation or encounters with other performers." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "本章采用“先抑后扬再抑”的逻辑：先极写其身世高贵、才华横溢；再写其进京后的荒唐落魄；最后通过雄辩展现其精神世界的富足，但现实中却惨遭冷落，形成了巨大的张力。", textEn: "The chapter employs a 'high-low-high-low' arc: highlighting his noble background and talent, detailing his absurd downfall in the capital, showcasing his spiritual wealth through his monologue, yet ending with harsh real-world rejection." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "前半部分叙述其生平，节奏较快；中段高品与春航的辩论是全章的“高光时刻”，节奏放缓，详细铺陈；结尾处戏园的场景描写则生动再现了当时的社会风貌。", textEn: "Fast-paced narration of his early life, slowing down for the brilliant debate between Gao Pin and Chunhang (the chapter's highlight), and ending with a vivid depiction of the theater scene." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 92,
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "田春航：痴情、率性、狂放不羁，视金钱如粪土，追求纯粹的唯美主义。高品：通达世故，幽默风趣，虽身在风尘却保持清醒的现实主义者。", textEn: "Tian Chunhang: Passionate, impulsive, unrestrained, despising money and pursuing pure aestheticism. Gao Pin: Worldly, humorous, a clear-headed realist despite moving in the same circles." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "春航对于美的追求近乎宗教般的狂热（“有一分假处，有一分虚处，便不得谓诚了”），他试图在风尘中寻找真正的“知音”，这种心理带有强烈的浪漫主义悲剧色彩。", textEn: "Chunhang's pursuit of beauty borders on religious zeal ('One part false or empty means no sincerity'). His search for a true 'soulmate' in the pleasure districts carries strong romantic tragedy." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "高品与春航构成了经典的“理智与情感”对立；仲清对春航的赏识与慷慨，体现了传统文人相重相惜的情谊；而戏子蓉官的势利，则构成了对春航理想主义的无情嘲弄。", textEn: "Gao Pin and Chunhang form a classic 'Sense and Sensibility' dichotomy; Zhongqing's generosity reflects traditional literati solidarity; Rong Guan's snobbery harshly mocks Chunhang's idealism." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Concepts", score: 95,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "本章深刻探讨了“情与理”、“义与利”的哲学命题。春航借理学之名（“性即理，理即天”），行反抗礼教之实，将对男色的痴迷升华为对造物主杰作的膜拜，是对传统价值观的一次大胆解构。", textEn: "Explores the philosophical dualities of 'emotion vs. reason' and 'righteousness vs. profit'. Chunhang uses Neo-Confucian terminology to rebel against orthodox morality, elevating his obsession with male beauty to worshipping the Creator's masterpieces." },
        { labelZh: "象征与隐喻", labelEn: "Symbols", textZh: "春航吃“青蔬半碟，白饭一盂”却依然谈笑风生，象征着他精神上的自足与高洁，与他给优伶挥金如土形成鲜明对比，隐喻了“真情”高于“物质”。", textEn: "Chunhang's 'half-dish of vegetables and plain rice' symbolizes his spiritual self-sufficiency and purity, contrasting with his lavish spending on performers, implying that 'true emotion' transcends 'material wealth'." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "作者借春航之口，不仅是在为特定的审美癖好辩护，更是在批判当时社会中“财色并重”、将人际关系彻底商品化的现象。", textEn: "Through Chunhang, the author defends a specific aesthetic taste while critiquing a society that equates 'wealth with beauty' and thoroughly commodifies human relationships." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "Point of View & Voice", score: 80,
      subsections: [
        { labelZh: "叙事视角", labelEn: "Narrative Perspective", textZh: "采用全知视角，但在叙述春航的过往时，融入了社会公众的评判（如“时下谓其可与侯太史……”），增强了故事的真实感。", textEn: "Employs an omniscient perspective, but incorporates public opinion when detailing Chunhang's past, enhancing the story's realism." },
        { labelZh: "语调与语体", labelEn: "Tone & Register", textZh: "叙述春航家世时带有史传文学的庄重感；转入京城生活后则变得市井、世俗。春航辩论时的语体则充满古典散文的雄辩与抒情色彩。", textEn: "The account of his family history feels like formal biographical literature; it shifts to a colloquial, worldly tone for his capital life. His debate speech is full of classical prose's eloquence and lyricism." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 88,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetic Appeal", textZh: "春航的辩词中使用了大量排比和比喻，如“如时花，却非草木；如美玉，不假铅华……”气势磅礴，文采斐然。", textEn: "Chunhang's speech uses extensive parallelism and metaphors ('like seasonal flowers, yet not plants; like fine jade, yet requiring no polish...'), creating a majestic and highly literary effect." },
        { labelZh: "经典句式", labelEn: "Classic Phrasing", textZh: "“有一分假处，有一分虚处，便不得谓诚了。”将儒家《中庸》的“诚”学说巧妙化用于风月之情，令人拍案叫绝。", textEn: "'One part false or empty means no sincerity.' Cleverly adapting the Confucian concept of 'sincerity' from the Doctrine of the Mean to romantic love is utterly brilliant." },
        { labelZh: "感官描写", labelEn: "Sensory Details", textZh: "戏园一节，通过对胖子和魏聘才衣着、语言的细节刻画，生动再现了当时戏园内的嘈杂与世俗感。", textEn: "In the theater scene, details of the fat man and Wei Pincai's clothing and speech vividly recreate the noisy, secular atmosphere." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 90,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "春航的痴狂令人震惊，他的宏论虽看似荒谬，却因其极度的纯粹而令人感动。结尾处他因贫穷而遭冷落，又让人感到强烈的现实悲凉。", textEn: "Chunhang's obsession is shocking; his grand theory, while seemingly absurd, is moving due to its sheer purity. His eventual rejection due to poverty evokes a strong sense of worldly sorrow." },
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "在高度物质化的现代社会，春航这种“以烂臭之粪土，换奇香之宝花”的纯粹唯美主义和反功利主义爱情观，依然具有强烈的反思价值。他提醒人们在利益算计之外，是否还保留着一丝对“美”与“真”的敬畏。", textEn: "In highly materialistic modern society, Chunhang's pure aestheticism and anti-utilitarian views on love ('trading stinking dung for fragrant flowers') remain highly thought-provoking, questioning if we still hold reverence for 'beauty' and 'truth' beyond mere calculation." }
      ]
    }
  ],
  visualizer: {
    type: "poetryCritique",
    critiques: [{ id: 1, titleZh: "群鸦乱噪风中戏", titleEn: "The Flock of Crows Cawing in the Wind", contentZh: "不拘平仄不拘韵，\n信口开河皆是真。\n笑煞书房穷腐客，\n不如闺阁女儿心。", contentEn: "Unbound by meter, unbound by rhyme,\nSpeaking freely, all is true.\nLaughing to death the pedantic scholars in the study,\nNot matching the hearts of the inner chamber girls.", critiqueZh: "丫鬟们的诗作虽然粗糙，却充满了生机与活力，是对正统文人僵化诗词体系的一次戏谑与解构。", critiqueEn: "Though crude, the maids' poetry is full of vitality, acting as a playful deconstruction of the rigid poetic system of orthodox scholars." }]
  }
};