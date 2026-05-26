// Pre-computed per-chapter appearance analysis for specific characters.
// Key: character id → chapter number → array of bilingual scene descriptions.
export type SceneBullet = { en: string; zh: string };

export const characterAppearances: Record<string, Record<number, SceneBullet[]>> = {
  "char-0": {
    1: [
      {
        en: "Formally introduced as a 17-year-old scholar of exceptional talent and moral purity, son of official Mei Shaoyan.",
        zh: "正式登场：梅少言之子，年十七岁，才学超群、品行纯正。",
      },
      {
        en: "Debates the beauty and virtue of famous actors with friends Shi Nanxiang, Yan Zhongqing, and Wang Xun.",
        zh: "与史南湘、颜仲清、王珣等至友辩论名伶之美德与才情。",
      },
      {
        en: "Visits the theater with Wang Xun and, on the way back, catches a glimpse of a strikingly beautiful young actor in a passing carriage — later revealed to be Du Qinyan — leaving him profoundly shaken.",
        zh: "同王珣入班肆看戏，归途中瞥见一华美少年（后知为杜琴言）自车中驰过，心中为之震动。",
      },
    ],
    2: [
      {
        en: "Listens to Wei Pengcai describe two exceptionally beautiful actors he encountered on the journey north, deepening Ziyu's longing for the one he briefly saw.",
        zh: "听韦朋才讲述北行路上遇见之两位绝代伶人，益加思念旧日一瞥之人。",
      },
      {
        en: "Participates in family meals while his father and Wang Wenhui discuss political affairs.",
        zh: "侍父与王文惠议论朝事，家宴相陪。",
      },
      {
        en: "Visits the theater with Wang Xun to observe Beijing's theatrical world firsthand.",
        zh: "与王珣再入班肆，观京师戏坛一隅。",
      },
    ],
    3: [
      {
        en: "Peripherally referenced through the activities of Wei Pengcai, who is a guest in the Mei household, as the social world Ziyu inhabits is shown through others' encounters at the theater.",
        zh: "以韦朋才在梅家之事迹，隐约显其所处之社交圈。",
      },
    ],
    4: [
      {
        en: "Composes eight snow-themed poems alone in his study, with thoughts of Qinyan threading through his poetic imagery.",
        zh: "独在书房撰雪题诗八篇，琴言之思贯于诗句之中。",
      },
      {
        en: "Hosts and exchanges poem drafts with friends Yan Zhongqing and Wang Xun during a snowy gathering.",
        zh: "雪夜款待颜仲清、王珣，互相评论诗篇。",
      },
      {
        en: "His friends separately spot a beautiful young man (later revealed to be the wealthy Hua Gongzi) in an opposing carriage on a snowy street.",
        zh: "友人于雪中见一美貌少年（后知为华公子）过街而行。",
      },
    ],
    5: [
      {
        en: "Catches a second glimpse of Qinyan riding in a carriage with Yuan Baozhu toward the garden, and they exchange a lingering glance.",
        zh: "再见琴言同袁宝珠乘车入园，两心相视、目光交缠。",
      },
      {
        en: "Hears from Wei Pengcai a detailed account of the extravagant Hua Gongzi's retinue and fearsome reputation.",
        zh: "自韦朋才处闻华公子奢华仪从及其威名。",
      },
    ],
    6: [
      {
        en: "Women guests discover his poetry and a small portrait in his bedroom; his cousin Wang Qionghua quietly erases lines that reference her name.",
        zh: "女客见其卧房诗稿及小像，堂妹王琼华悄悄抹去自己名字。",
      },
      {
        en: "Attends a formal gathering where Qinyan performs 'The Peony Pavilion,' and is so transfixed that their mutual gaze is noticed by all present.",
        zh: "琴言演《牡丹亭》，子玉凝视若痴，二人目光相交为众人所见。",
      },
      {
        en: "Engages in literary discussions with scholars and officials, beginning to recognize his own deepening romantic feelings.",
        zh: "与诸名士贵人文会，渐悟己心之所系。",
      },
    ],
    7: [
      {
        en: "Participates in a competitive couplet-composition session with friends, with his thoughts of Qinyan weaving through his literary engagement.",
        zh: "与友人结句相对，心间琴言之思萦绕不散。",
      },
      {
        en: "Continues social gatherings and literary exchanges that reflect his emotional preoccupation.",
        zh: "往来诗酒酬和，其心事尽显于笔端。",
      },
    ],
    8: [
      {
        en: "Briefly referenced in connection with the broader social circle as his friends encounter troubles at the theater and a wine-shop brawl.",
        zh: "友人因班肆及酒肆事生波澜，子玉隐约相关。",
      },
    ],
    9: [
      {
        en: "Goes out on Lantern Festival night with Liu Wenze, Zhongqing, and Wang Xun to view lantern displays.",
        zh: "元宵夜同刘文泽、颜仲清、王珣出游灯市。",
      },
      {
        en: "Visits the Yiyuan garden to solve lantern riddles and meets Xiao Cixian in a refined literary gathering.",
        zh: "至怡园灯谜会中，与萧次贤相识于雅集。",
      },
      {
        en: "Learns from Yuan Baozhu that Qinyan was taken to another banquet by Xu Ziyun, causing him deep regret at yet another near-miss; he and Baozhu exchange meaningful glances observed by Liu Wenze.",
        zh: "闻袁宝珠言琴言为徐子云引赴他席，心中悔恨；与宝珠目光暗通，为刘文泽所见。",
      },
    ],
    10: [
      {
        en: "Central to extended scenes of deepening romantic longing, in which the narrator traces his emotional obsession with Qinyan through dreams, poetry, and private reflection.",
        zh: "绵长岁月中，日夜思琴言，梦魂相系，诗笔为之摇曳。",
      },
      {
        en: "Participates in multiple social gatherings where his connection to Qinyan is discussed or observed by others, firmly establishing him as the novel's romantic protagonist.",
        zh: "于众多社交场合，与琴言之缘为人所议所见，确立小说男主之地位。",
      },
    ],
    11: [
      {
        en: "Briefly referenced in passing as the social activities of servant women and maidservants in and around the Mei household are described.",
        zh: "梅家仆妾往来之事，隐约言及子玉。",
      },
    ],
    15: [
      {
        en: "After his father departs for an official post in Jiangxi, Ziyu is left free to pursue his own affairs and begins actively seeking out Qinyan.",
        zh: "父赴江西上任后，子玉方得自由，遂积极寻访琴言。",
      },
      {
        en: "Takes advantage of his new freedom to attend gatherings and visit acquaintances connected to the theatrical world.",
        zh: "往来班肆、结识伶人故交，频繁出入于文人聚集之所。",
      },
    ],
    16: [
      {
        en: "Maintains his scholarly routine and social circles following his father's departure, now effectively master of his own schedule.",
        zh: "父离京后，子玉学问社交如旧，不复父教约束。",
      },
      {
        en: "Visits the ailing Qinyan to offer comfort, and converses with Sulan about his emotional situation.",
        zh: "往探重病中之琴言，与苏兰密语心事。",
      },
    ],
    17: [
      {
        en: "Composes and sends congratulatory letters, and attends literary gatherings where his reputation among refined circles is praised.",
        zh: "撰书贺状、赴诗会，其名声为雅集中人所推重。",
      },
      {
        en: "Is compared favorably to other celebrated figures in rankings of distinguished courtiers and their associates.",
        zh: "被列为品评中之佳士，与诸名流并列。",
      },
    ],
    18: [
      {
        en: "Recalled and longed for by Qinyan during his illness; makes an effort to visit Qinyan outside the city walls.",
        zh: "琴言病中日念子玉；子玉亦力赴城郊相探。",
      },
    ],
    19: [
      {
        en: "Referenced as the sole person toward whom Qinyan shows genuine warmth and devotion, contrasting with Qinyan's cold indifference toward all other patrons.",
        zh: "琴言独对子玉展现真情，对他人则冷漠以待，形成鲜明对比。",
      },
    ],
    20: [
      {
        en: "Their alternating illnesses prevent them from meeting; Ziyu is too unwell to attend the garden's Dragon Boat Festival celebration where Qinyan performs.",
        zh: "子玉病重，未能赴园中端午会；琴言亦因疾阻，二人失之交臂。",
      },
    ],
    21: [
      {
        en: "Central to extended narrative discussion of his character and the social damage done by Wei Pengcai's malicious gossip about him.",
        zh: "韦朋才造谣中伤，其名誉遭损，众人皆知其事。",
      },
      {
        en: "Shown enduring cold treatment from acquaintances who have believed the rumors, while he himself remains unaware of the source.",
        zh: "故旧因谣言疏远，子玉初不知言之何出。",
      },
    ],
    22: [
      {
        en: "Arranges a secret private meeting with Qinyan along the Grand Canal through Sulan's intermediation.",
        zh: "由苏兰为媒，与琴言约在大运河畔密会。",
      },
      {
        en: "The two make their first mutual declaration of exclusive, lasting affection during their clandestine Grand Canal outing.",
        zh: "舟中促膝，两心相许，立下白首之盟。",
      },
    ],
    23: [
      {
        en: "Briefly referenced in the immediate aftermath of the Grand Canal outing as surrounding events unfold.",
        zh: "大运河之事既毕，子玉隐现于后续风波之中。",
      },
    ],
    24: [
      {
        en: "The secret Grand Canal outing has become public gossip among courtesans and socialites throughout Beijing.",
        zh: "大运河私会之事已为京城伶界及贵妇所知，成为街谈巷议。",
      },
      {
        en: "His exclusive claim on Qinyan's affections is now treated as settled fact in their shared social world.",
        zh: "子玉于琴言心中之地位，举世公认，成为既定之事实。",
      },
    ],
    25: [
      {
        en: "Cannot attend a major banquet due to relapsed illness; Qinyan performs at the gathering while mentally picturing Ziyu present.",
        zh: "子玉因病复发未赴大宴；琴言演艺场中，心中所思唯子玉。",
      },
      {
        en: "His relationship with Qinyan is openly acknowledged and discussed among the assembled guests in his absence.",
        zh: "子玉与琴言之情，为宾客所议所认，二人若为配对。",
      },
    ],
    26: [
      {
        en: "Referenced as Wei Pengcai schemes to have Qinyan acquired by the Hua household — a plot that would permanently sever Ziyu's access to Qinyan.",
        zh: "韦朋才图将琴言售与华家，意在永绝其与子玉之缘。",
      },
    ],
    27: [
      {
        en: "Mourned and longed for by Qinyan as the crisis unfolds; Qinyan seeks to send him a farewell through intermediaries.",
        zh: "琴言被迫入华家前，日夜思念子玉，欲托人送别书。",
      },
      {
        en: "Ziyu himself remains unaware of the impending forced separation.",
        zh: "子玉犹不知离别在即。",
      },
    ],
    28: [
      {
        en: "Qinyan is purchased and removed to the Hua household, severing their access to each other.",
        zh: "琴言为华公子所纳，迁入华府，二人从此隔阻。",
      },
      {
        en: "Receives a farewell embroidered handkerchief from Qinyan, delivered through Sulan, as a token of parting.",
        zh: "由苏兰转送琴言之绣帕，暗含离别之意。",
      },
    ],
    29: [
      {
        en: "Falls gravely ill from despair and grief over Qinyan's removal to the Hua household.",
        zh: "琴言入华家，子玉悲恸成疾，卧床不起。",
      },
      {
        en: "Qinyan secretly visits the Mei household to see the bedridden Ziyu, and they are briefly reconciled before parting again.",
        zh: "琴言冒险夜访梅家，与病中子玉促膝谈心，暂得重逢，又复离别。",
      },
    ],
    30: [
      {
        en: "Still in convalescence; Qinyan visits him again, and their mutual longing is tenderly acknowledged.",
        zh: "子玉犹未全愈，琴言复至，两心相许、深情难舍。",
      },
      {
        en: "Qinyan performs at a Mei family banquet held during this visit.",
        zh: "琴言于梅家宴中献艺，子玉在侧观看。",
      },
    ],
    31: [
      {
        en: "Friends visit him at home to celebrate his recovery from summer illness and lift his spirits.",
        zh: "友人来探子玉病愈，把酒言欢。",
      },
      {
        en: "Accompanies friends to visit theater celebrities Chun Hang and Gao Pin to review their examination essays.",
        zh: "同友人往访春航、高品，共评其试卷。",
      },
      {
        en: "His unwillingness to attend a planned temple outing is noted by the group and attributed to his lingering melancholy.",
        zh: "友人议赴庙会，子玉推辞，众人知其心绪未佳。",
      },
    ],
    33: [
      {
        en: "Becomes withdrawn and melancholy after his closest friends depart Beijing, spending more time in solitude.",
        zh: "至友离京，子玉益增冷寂，独处居多。",
      },
      {
        en: "Visits the courtesan Baozhu for tea and refined conversation to ease his loneliness.",
        zh: "频往访袁宝珠，以诗酒解愁。",
      },
      {
        en: "Learns that his friend Wei Pengcai has been imprisoned on forgery charges, alarming him greatly.",
        zh: "闻韦朋才以伪造之罪入狱，惊骇莫名。",
      },
      {
        en: "Receives a stern letter from his father rebuking him for reckless behavior and failure of filial duty, which deeply frightens and chastens him.",
        zh: "父自江西遣书痛责其行止不端、不尽孝道，子玉惶恐悔悟。",
      },
    ],
    34: [
      {
        en: "Mentioned by Wei Pengcai, who notes he hasn't called on Ziyu recently; the Wang family is said to be arranging Ziyu's marriage in the coming spring.",
        zh: "韦朋才言未曾见子玉；王家传言春时拟为子玉议婚。",
      },
    ],
    35: [
      {
        en: "Attends Baozhu's birthday celebration at Xu Ziyun's garden as one of five distinguished gentleman guests.",
        zh: "赴徐子云园中宝珠生辰宴，列为上客之一。",
      },
      {
        en: "Participates extensively in elaborate wine games using mechanized cups and numbered wheels to select recipients.",
        zh: "参与机关酒令，轮转之间，命运自择。",
      },
      {
        en: "Competes in sophisticated poetry contests requiring matching flower names with classical literary allusions.",
        zh: "与诸名士竞花名联对，引经据典、对答如流。",
      },
      {
        en: "Experiences the rare joy of sitting close to Qinyan in mixed company for the first time since they fell in love.",
        zh: "难得在众人眼前与琴言同席而坐，自相识以来此为首次。",
      },
    ],
    36: [
      {
        en: "Qinyan wonders whether Wei Pengcai might be staying with Ziyu and resolves to pay Ziyu's household a visit.",
        zh: "琴言疑韦朋才或暂居梅家，遂决意往访。",
      },
      {
        en: "Conversations confirm that Ziyu has withdrawn from social gatherings and is quietly awaiting his arranged marriage.",
        zh: "众人言及子玉已隐退诗酒，静候婚期。",
      },
    ],
    37: [
      {
        en: "Arrives early to admire spring plum blossoms with fellow scholars in the garden.",
        zh: "早至园中同诸名士赏春梅。",
      },
      {
        en: "Seated at the place of honor as host; he and Qinyan share an intense, emotion-laden glance across the banquet table.",
        zh: "为主人而坐上席，与琴言隔席相望，目光千言万语。",
      },
      {
        en: "Participates brilliantly in character-transformation literary games, where a single written character must be modified into three distinct new ones.",
        zh: "字迹变幻游戏中，子玉笔下生花、妙语连珠。",
      },
      {
        en: "Engages in theatrical-title matching competitions with witty responses that demonstrate his cultural depth.",
        zh: "戏曲题名对答，文采斐然、声价倍增。",
      },
      {
        en: "Gently suggests ending the competitions when he notices Qinyan's fatigue, revealing his tender attentiveness.",
        zh: "见琴言疲态，温言止游，体贴入微。",
      },
    ],
    38: [
      {
        en: "Attends an intellectual gathering with the renowned Daoist scholar Qu Daosheng and engages in learned discussion about ancient texts, philosophy, and cultural interpretation.",
        zh: "赴道学家屈道生之研讨会，论古籍、议哲学，文采飞扬。",
      },
    ],
    39: [
      {
        en: "Becomes noticeably cold toward Wei Pengcai during a visit, troubled by jealousy over Pengcai's proximity to Qinyan.",
        zh: "韦朋才访时，子玉态度冷淡，因其与琴言之事而心生嫉意。",
      },
      {
        en: "Serves as an accompanying guest at Li Yuanmao's wedding celebration.",
        zh: "赴李元茂婚宴，为陪客之一。",
      },
      {
        en: "Meets for the first time a young man named Ji Liangxuan, who has become a retainer for Xi Shier.",
        zh: "初识少年姬亮轩，乃奚十一之幕僚。",
      },
    ],
    42: [
      {
        en: "Qinyan spends several joyful days with him in the garden after leaving his courtesan position, finding deep mutual contentment.",
        zh: "琴言脱离伶籍后，数日来园与子玉相聚，两心相悦、若有所得。",
      },
    ],
    44: [
      {
        en: "Invited to a farewell gathering organized by Xu Ziyun to honor Shi Nanxiang and Chun Hang before their provincial examination departure.",
        zh: "赴徐子云为史南湘、春航饯别之宴。",
      },
    ],
    45: [
      {
        en: "Listed among the prominent gentleman guests at Xu Ziyun's grand gathering with a visiting Daoist diviner.",
        zh: "赴徐园中邀请屈道生驻宿之盛宴，列为显客。",
      },
      {
        en: "Visits the garden by moonlight for intimate private conversation with Qinyan away from the other guests.",
        zh: "月下同琴言私语于花间，避开众人。",
      },
      {
        en: "Endures a lengthy sales pitch from a talkative bookseller trying to interest him in purchasing an expensive encyclopedia.",
        zh: "为缠人书贩所困，听其夸夸其谈。",
      },
      {
        en: "Escapes to the Begonia Pavilion to share romantic moments with Qinyan, discussing the fragrance and beauty of hawthorn blossoms.",
        zh: "同琴言逃至海棠春圃，共赏海棠芬芳，笑靥如花。",
      },
      {
        en: "Participates in an elaborate spirit-writing divination séance where Qu Daosheng channels messages from past-life connections.",
        zh: "参与屈道生主持之扶乩大会，沟通前世因缘。",
      },
      {
        en: "Witnesses the revelation that Qinyan shares a karmic bond with Qu Daosheng from a previous life, and is moved to tears.",
        zh: "得知琴言与道生有前世之缘，感动涕泪涟涟。",
      },
      {
        en: "Advocates joyfully that Qinyan become Qu Daosheng's adopted daughter and spiritual disciple for her moral protection and future happiness.",
        zh: "欣然赞同琴言拜道生为父，得道学庇护、指引前途。",
      },
      {
        en: "Sits at the seat of honor during the celebratory feast marking Qinyan's adoption into Qu Daosheng's household.",
        zh: "琴言认父之宴，子玉为上座。",
      },
    ],
    46: [
      {
        en: "Joins other scholars on a tour of the garden, participating in discussions about architectural features and poetic names for pavilions.",
        zh: "与诸名士游园，评论亭台楼阁之名。",
      },
      {
        en: "Composes couplets for garden structures and assists Qinyan with calligraphy practice.",
        zh: "为园舍撰对联，助琴言习字。",
      },
    ],
    47: [
      {
        en: "Briefly referenced in casual conversation about impending relocations and farewells among the Beijing literary circle.",
        zh: "北京文人将散，众人言及子玉之去留。",
      },
    ],
    48: [
      {
        en: "Falls into prolonged illness caused by emotional distress over Qinyan's departure from Beijing.",
        zh: "琴言随屈道生南下，子玉因之消沉，旧疾复发。",
      },
      {
        en: "Throughout the chapter he is in recurring emotional turmoil — reflecting on Qinyan's absence, re-reading old letters, and struggling to resume normal life.",
        zh: "日日忆琴言南行，旧信反复读之，心绪不宁，难以如常生活。",
      },
    ],
    49: [
      {
        en: "Recovers from illness; his mother learns more about Qinyan's circumstances from outside sources.",
        zh: "子玉病渐愈；母氏闻及琴言南下后之事。",
      },
      {
        en: "His father's letter from the provinces discusses arranging Ziyu's formal marriage when he turns nineteen.",
        zh: "父自外省遣书，谓子玉十九岁当成婚。",
      },
    ],
    50: [
      {
        en: "Attends a casual dinner gathering with fellow scholars at a restaurant.",
        zh: "与诸友聚饭，诗酒往还。",
      },
    ],
    52: [
      {
        en: "Attends a spring wedding celebration among officials and scholars, participating in poetry discussion and social affairs.",
        zh: "赴春日婚宴，与官员名士交游。",
      },
    ],
    53: [
      {
        en: "Is present when letters arrive from Qu Daosheng's journey south, learning of the old Daoist's accident along the way.",
        zh: "屈道生南下路中遭厄，书信传至，子玉得知。",
      },
      {
        en: "Appears in multiple social gatherings where literary and romantic matters involving Qinyan and Qu Daosheng are discussed.",
        zh: "多次出现于文人聚会，议论琴言与道生之事。",
      },
    ],
    54: [
      {
        en: "Receives Qinyan's reply poem and falls into deep melancholy at the distance between them.",
        zh: "得琴言复诗，距离遥远、鸿雁传信，子玉因而黯然。",
      },
      {
        en: "His father sends instructions and funds for marriage arrangements; Ziyu prepares for the imperial examination while the family discusses his impending marriage to Wang Qionghua.",
        zh: "父遣书及婚资，子玉准备乡试，家中筹议其与王琼华之婚期。",
      },
    ],
    55: [
      {
        en: "Referenced in Qu Daosheng's philosophical conversation with a southern literary figure about fate, life choices, and career.",
        zh: "屈道生与南方文士谈论命运、人生抉择，言及子玉。",
      },
    ],
    56: [
      {
        en: "Referenced in Qu Daosheng's deathbed dictations, which include messages intended for Qinyan and those close to Ziyu.",
        zh: "屈道生临终遗言，涉及琴言及子玉至友。",
      },
      {
        en: "Mentioned in context of a disreputable official's improper advances toward Qinyan following Qu Daosheng's death.",
        zh: "道生身后，有品行不端官员欲非礼琴言，事涉子玉。",
      },
    ],
    57: [
      {
        en: "His wife Wang Qionghua is invited to a gathering of wives of prominent families, establishing Ziyu's new domestic status as a married official.",
        zh: "妻子王琼华列席贵妇之会，子玉之已婚官员身份由此确立。",
      },
    ],
    59: [
      {
        en: "Receives a letter from Qinyan seeking financial help to arrange a proper burial for Qu Daosheng.",
        zh: "琴言遣信乞助，欲为屈道生营葬。",
      },
      {
        en: "His father, now an Assistant Minister, decides to build a memorial temple for Qu Daosheng in recognition of the old Daoist's virtue.",
        zh: "父官至侍郎，决为道生建庙以纪其德。",
      },
      {
        en: "The Mei family extends formal charity to Qinyan and draws him back into their household circle, reuniting Ziyu with his lifelong love under legitimate patronage.",
        zh: "梅家正式纳琴言入世家圈子，子玉与琴言遂得以名正言顺地相聚。",
      },
    ],
    60: [
      {
        en: "Attends a grand New Year celebration gathering with fellow scholars and old friends.",
        zh: "与诸名士故友赴元旦大宴。",
      },
      {
        en: "Participates in discussions about creating a commemorative collection — flower goddess portraits and literary tributes to nine celebrated beauties — as a lasting legacy project.",
        zh: "议定编纂花神图及九佳传记，以流芳百世。",
      },
    ],
  },

  "char-1": {
    2: [
      {
        en: "Introduced as a gifted new opera performer named 琴官, fifteen years old, who has just arrived in Beijing — Wei Pengcai describes him to Ziyu as a sensation of exceptional beauty and talent.",
        zh: "初入京城的新秀伶人琴官，年方十五，以天资绝伦的容貌与艺技惊动四座，由韦朋才之口道与子玉。",
      },
    ],
    3: [
      {
        en: "Mentioned as a patient recovering from illness at the household of his teacher Cao Changqing, and praised for his unmatched looks and vocal ability.",
        zh: "在师父曹长青家中养疾，闻其容貌绝伦、歌喉无双，众人皆赞。",
      },
    ],
    4: [
      {
        en: "Discussed among the scholars as the new sensation in the capital, fuelling Ziyu's growing romantic curiosity about him.",
        zh: "京城新秀之名日盛，引得士子议论纷纷，激起子玉心中之思。",
      },
    ],
    5: [
      {
        en: "His full background is revealed: originally named 琴官, surname Du, son of a zither-maker; he is formally renamed 琴言 and given the style-name 玉侬 by his patrons Xu Ziyun and Xiao Cixian.",
        zh: "本姓杜，原名琴官，琴匠之子，今为徐子云、萧次贤两位恩主雅名曰琴言，号玉侬。",
      },
      {
        en: "His first street encounter with Ziyu occurs as he rides in a carriage with Yuan Baozhu — they exchange a charged glance that marks the beginning of their romantic connection.",
        zh: "与子玉在街头初遇，随袁宝珠乘舆而过，一眼相识，情缘至此而萌。",
      },
    ],
    6: [
      {
        en: "Performs in a stage production that captivates Ziyu, who watches him so intently that their mutual gaze is noticed by the assembled guests.",
        zh: "登台演《牡丹亭》，技艺绝妙，与子玉眼光相交，为在座众宾所见。",
      },
    ],
    7: [
      {
        en: "Praised in conversations among the scholars for his exceptional theatrical talent and beauty, which continues to preoccupy Ziyu's thoughts.",
        zh: "士子间频频称颂其台上风采，美色与才情并绝，令子玉心念不忘。",
      },
    ],
    8: [
      {
        en: "Notable for his absence from the theater, discussed as a temperamental but captivating performer currently lodging with one of his patrons.",
        zh: "以气性高洁著称，近日寓于一恩主家中，久不见其登台。",
      },
    ],
    9: [
      {
        en: "The gifted zither given to him by Xu Ziyun as a romantic token is referenced; Ziyu learns Qinyan was taken to a rival banquet the same evening, causing their meeting to be missed yet again.",
        zh: "徐子云馈以名琴；然时乖命蹇，琴言当晚被携往他处赴筵，两人又失之交臂。",
      },
    ],
    10: [
      {
        en: "Portrayed as melancholic and emotionally withdrawn despite Xu Ziyun's devotion to him, longing for someone more spiritually aligned.",
        zh: "虽得徐子云垂爱，心中却怅然若失，冀求精神相知之人。",
      },
      {
        en: "Has his first private meeting with Ziyu at the garden; they develop a deep romantic understanding through intimate conversation.",
        zh: "与子玉园中初聚，通宵谈心，相知相许，情谊渐深。",
      },
      {
        en: "Discovers that Ziyu is the man from his dream, confirming the karmic nature of their mutual attraction.",
        zh: "悟得子玉即梦中人，因缘际会，天定之缘也。",
      },
    ],
    11: [
      {
        en: "Xu Ziyun discusses his romantic connection with Ziyu with his wife, marking it as an acknowledged bond.",
        zh: "徐子云与妻言及琴言与子玉之心事，往来有信。",
      },
    ],
    15: [
      {
        en: "Wei Pengcai visits Qinyan's residence and discusses Ziyu's feelings on his behalf.",
        zh: "韦朋才往访琴言寓所，代为传述子玉之情意。",
      },
      {
        en: "An arrangement is made through Ou Sulan for Qinyan and Ziyu to meet privately.",
        zh: "由欧苏兰撮合，两人密约得期。",
      },
    ],
    16: [
      {
        en: "Reported to be ill and confined to bed, avoiding social visits while his teacher receives clients.",
        zh: "卧病在床，谢客不见，师父曹长青仍接待宾客。",
      },
      {
        en: "His remarkable integrity and emotional fidelity toward Ziyu are noted by those who know him.",
        zh: "其人心性高洁，对子玉一片真心，为知者所称许。",
      },
    ],
    17: [
      {
        en: "Absent from a major literary gathering due to illness, causing Ziyu visible distress; he is considered the foremost talent among the courtesans.",
        zh: "因疾未能赴文会，令子玉忧形于色；论伶人之才貌，琴言首屈一指。",
      },
    ],
    18: [
      {
        en: "Ill and confined indoors, receiving occasional visits from friends; he is economically dependent on his teacher Cao Changqing.",
        zh: "寝疾缠身，经济拮据，靠师父曹长青接待宾客而维持。",
      },
    ],
    19: [
      {
        en: "Referenced as unable to attend social occasions due to continuing illness, while his independent and dignified character is emphasised in contrast to his circumstances.",
        zh: "虽久病难出，然其气节高卓，不为俗事所动。",
      },
    ],
    20: [
      {
        en: "Repeated missed meetings with Ziyu — alternating illnesses and social obligations continue to keep them apart despite their mutual devotion.",
        zh: "两人相继抱恙或他事缠身，与子玉时乖命蹇，迟迟未得相聚。",
      },
    ],
    21: [
      {
        en: "Ziyu falls ill from lovesickness over Qinyan and is confined to bed; Wei Pengcai visits Qinyan's residence in Yingtao Lane to check on him.",
        zh: "子玉相思成疾；韦朋才往樱桃巷琴言寓所探问。",
      },
      {
        en: "Qinyan is punished by his teacher after a dispute with the actor Changqing over the actress Xiufang.",
        zh: "因与伶人长庆争宠女伶绣芳，被师父责罚。",
      },
    ],
    22: [
      {
        en: "Lu Sulan arranges a secret meeting between Qinyan and Ziyu.",
        zh: "陆素兰为两人撮合密约。",
      },
      {
        en: "Qinyan and Ziyu are reunited along the Grand Canal and declare their exclusive mutual devotion — the emotional culmination of their long separation.",
        zh: "两人运河畔重逢，倾心吐意，互许终身，万千思绪化作一句誓言。",
      },
    ],
    24: [
      {
        en: "Wei Pengcai pays someone to publicly insult Qinyan out of spite; an apology follows.",
        zh: "韦朋才怀恨，暗遣人当众侮辱琴言，事后悔过补礼。",
      },
      {
        en: "News of the Grand Canal outing with Ziyu and Sulan spreads throughout Beijing's social circles.",
        zh: "运河之游事露，传遍京城士庶间。",
      },
      {
        en: "Others openly discuss the origins and depth of the romantic bond between Ziyu and Qinyan.",
        zh: "两人之情谊为众所知，议论纷纷。",
      },
    ],
    25: [
      {
        en: "Performs at a banquet in the Hua household and is singled out for special attention and gifts by Hua Gongzi.",
        zh: "于华家宴席献艺，华公子独加垂青，赏赐甚厚。",
      },
      {
        en: "Performs as the lead female-role actor, demonstrating his exceptional theatrical skills.",
        zh: "担任花旦主角，其台上技艺之妙令人叹赏。",
      },
    ],
    26: [
      {
        en: "Shanzhi introduces Qinyan's background and talents to Hua Gongzi, who inquires about the possibility of acquiring him as an exclusive performer.",
        zh: "珊枝将琴言身世才艺详述于华公子，华公子遂询问纳其为己有之可能。",
      },
    ],
    27: [
      {
        en: "Xi Shier is attracted by Qinyan's beauty and attempts to proposition him at Qiushui Hall, causing Qinyan fear and distress.",
        zh: "奚十一垂涎琴言容貌，于秋水堂欲加非礼，琴言震恐。",
      },
      {
        en: "Qinyan consults with Changqing about Xi Shier's harassment, anxious both about the threat and about potential separation from Ziyu.",
        zh: "琴言就此事询问长庆，忧心忡忡，既虑己身，更虑与子玉离别。",
      },
      {
        en: "Qinyan moves into the Hua household to escape Xi Shier's harassment — and to avoid the greater disruption Hua Gongzi's formal acquisition would cause.",
        zh: "琴言遂移居华家，以脱奚十一之魔爪，兼免日后华公子强取之累。",
      },
    ],
    28: [
      {
        en: "Formally purchased by Hua Gongzi and relocated from Qiushui Hall to the Hua household, severing his daily access to Ziyu.",
        zh: "被华公子正式收购，迁离秋水堂入华府，自此与子玉日不得见。",
      },
      {
        en: "Ziyu sends him an embroidered fabric as a farewell token containing hidden coded messages of longing.",
        zh: "子玉赠以绣帕一条，其中暗寓千般相思与惜别之意。",
      },
    ],
    29: [
      {
        en: "Secretly visits the Mei household to see the bedridden Ziyu; initially fearful at the number of people present.",
        zh: "秘密造访梅家，欲见卧疾之子玉，初见人众而惶恐。",
      },
      {
        en: "He and Ziyu talk through the night, sharing their deepest feelings about life's hardships and their bond.",
        zh: "两人彻夜谈心，诉说人生之悲欢与心事之隐秘。",
      },
      {
        en: "The two achieve profound spiritual understanding and mutual recognition of the authenticity of their love.",
        zh: "于此际达成灵犀相通，互认彼此心之真挚无欺。",
      },
    ],
    30: [
      {
        en: "Returns to the Hua household after his visit with Ziyu, the tenderness of their reunion acknowledged.",
        zh: "自梅家归返华府，与子玉重逢之温馨往事犹在心间。",
      },
      {
        en: "Performs as the lead female-role actor at a lantern-moon banquet hosted by the Hua household.",
        zh: "于华家灯月宴上担任花旦主角献艺。",
      },
    ],
    31: [
      {
        en: "Performs and sings at a literati gathering, earning widespread acclaim from the assembled scholars.",
        zh: "于文人雅集献歌舞，博得满堂彩。",
      },
    ],
    33: [
      {
        en: "Hua Gongzi's farewell interactions before departing Beijing are described in relation to Qinyan, marking a period of transition.",
        zh: "华公子北京将去，与琴言有诸多交代之事，局势为之转变。",
      },
    ],
    35: [
      {
        en: "Ziyu recalls with nostalgia the anniversary of his first encounter with Qinyan, feeling the bittersweet passage of time.",
        zh: "子玉忆及初遇琴言之日，感慨光阴流逝、人事沧桑。",
      },
      {
        en: "Poems recently composed by Qinyan (under his alias 玉侬) are copied and circulated among the literary community.",
        zh: "琴言近作诗词以玉侬之名流传文人间，被竞相传抄。",
      },
    ],
    36: [
      {
        en: "Yuan Baozhu harbors deep resentment toward Qinyan for failing to win his favor, leading to schemes against him.",
        zh: "袁宝珠心有不平，怀怨琴言之不纳其好，遂暗生图谋。",
      },
      {
        en: "Qinyan is widely praised as a person of integrity who cannot be swayed by money or material temptation.",
        zh: "琴言之气节高卓、不为利诱之名声远播，众人咸称其品行端洁。",
      },
    ],
    37: [
      {
        en: "Returns home after an upsetting encounter and weeps privately over what occurred.",
        zh: "经历不快之事而归，独自伤心堕泪。",
      },
      {
        en: "Participates in literary games — flying-flower verse competitions and opera-title matching — showcasing his considerable cultural accomplishments.",
        zh: "参与飞花令、戏名相对等文化游戏，展露渊博才学。",
      },
    ],
    38: [
      {
        en: "The Daoist master Qu Daosheng advises Qinyan to leave the performance world and pursue serious literary study, seeing in him a refined spiritual nature.",
        zh: "道士屈道生劝琴言远离伶界，致力文学修为，见其气质清雅，堪为佳器。",
      },
      {
        en: "Attends the literati gathering as an honored guest, further integrating him into the scholarly social world.",
        zh: "作为嘉宾出席文人雅集，渐融入士林社交圈。",
      },
    ],
    39: [
      {
        en: "Briefly referenced as background context during the wedding-chamber revelry at a friend's celebration.",
        zh: "于友人婚礼洞房花烛之际略作提及。",
      },
    ],
    40: [
      {
        en: "Xi Shier's earlier obsessive harassment of Qinyan is cited as the karmic cause of the retribution now befalling him.",
        zh: "奚十一早年骚扰琴言之业因，今已遭报应。",
      },
    ],
    41: [
      {
        en: "Hua Gongzi anxiously awaits his return after his leave period expires, asking attendants when Qinyan will come back.",
        zh: "华公子归期将至，倚门待琴言归来，日日问讯。",
      },
      {
        en: "Hua Furen praises Qinyan's singing technique as uniquely preserving the pure classical tradition despite his youth.",
        zh: "华夫人赞其歌喉之妙，虽年幼而保存古雅纯正之韵味。",
      },
    ],
    42: [
      {
        en: "Lives in seclusion at the Yiyuan garden with Ziyu, recovering from illness and finding rare contentment, while financial pressure mounts as his widowed teacher's mother demands ongoing support.",
        zh: "与子玉偕隐怡园，疾愈而心乐；然师母纠缠索钱，经济拮据，两人陷入两难之境。",
      },
    ],
    43: [
      {
        en: "Experiences emotional distress after hearing malicious rumors; visits friends for comfort.",
        zh: "闻恶言而心烦意乱，往访友人以排忧。",
      },
      {
        en: "Is formally redeemed from his contract by the patron Xu Ziyun, supported financially by Su Huifang, ending his servitude to his teacher's household.",
        zh: "由恩主徐子云正式赎身，苏蕙芳资助，自此脱离曹长青家之束缚。",
      },
    ],
    44: [
      {
        en: "His redemption shocks Hua Gongzi, who had expected his return; the news triggers rumors and misunderstandings that fracture relationships among the aristocratic patrons.",
        zh: "其赎身消息令华公子震惊意外，由此引发种种传言，诸贵人间因而生隙。",
      },
      {
        en: "His newly free status becomes the catalyst for a serious falling-out between two powerful benefactors.",
        zh: "其自由身份遂成为两位权贵反目之导火索。",
      },
    ],
    45: [
      {
        en: "Settles at the Yiyuan garden and gradually recovers emotionally through literary and social gatherings.",
        zh: "安居怡园，借文会以疗心伤，渐复其明慧清爽之姿。",
      },
      {
        en: "Has an intimate moonlit reunion with Ziyu; supernatural spirit-writing suggests a deep karmic bond between them across incarnations.",
        zh: "与子玉月下重聚，灵通神笔暗示两人跨越轮回之因缘。",
      },
      {
        en: "Qu Daosheng formally adopts him as a spiritual daughter, providing him moral protection and a path out of the performance world.",
        zh: "屈道生正式收其为义女，既为其把持风节，又为其指点人生出路。",
      },
    ],
    47: [
      {
        en: "Referenced (as 玉侬) as soon departing to accompany Qu Daosheng on his journey south to a new official post.",
        zh: "以玉侬之名，即将随屈道生南下就官。",
      },
    ],
    48: [
      {
        en: "Recites melancholic poetry about celestial separation during the southward journey, moving his traveling companions to reflection.",
        zh: "南下途中吟诵离别之诗，其声凄婉，同伴无不为之动容。",
      },
      {
        en: "Exchanges heartfelt farewells with Qi Guan before departing, expressing fear about mortality and the uncertainty of reunion.",
        zh: "与琪官话别，叹人生无常，离别难期，泪染衣襟。",
      },
    ],
    49: [
      {
        en: "His romantic entanglement creates complications at a social gathering; others discuss his relationships delicately in his absence.",
        zh: "其感情之事在社交场合引发微妙之议论，众人婉言相劝。",
      },
    ],
    50: [
      {
        en: "His departure south with Qu Daosheng affects Ziyu so deeply that friends notice Ziyu appears physically ill — his spirit seemingly traveling with his beloved on the river.",
        zh: "琴言南下，子玉形销骨立，友人见其神魂似随琴言于江上漂泊。",
      },
    ],
    52: [
      {
        en: "His absence from a wedding celebration is felt acutely by Ziyu, who becomes melancholic reflecting on their separation.",
        zh: "婚礼上琴言之缺席令子玉黯然神伤，思绪飘零于远方。",
      },
      {
        en: "Hua Gongzi compares Su Lan favorably to Qinyan, acknowledging Qinyan's exceptional qualities as a benchmark.",
        zh: "华公子以琴言为评鉴之标准，言苏兰不如，反衬其卓越之处。",
      },
    ],
    53: [
      {
        en: "Su Lan's nostalgic spring poetry contains hidden allusions to Qinyan, using him as a metaphor for lost beauty and passing time.",
        zh: "苏兰春日怀旧诗中暗寓琴言之影，以之喻逝水年华。",
      },
      {
        en: "Letters relayed from Qu Daosheng's journey include messages composed by Qinyan — his penmanship limited by an injury — expressing gratitude and cataloguing the generous gifts he has received.",
        zh: "屈道生南下信中有琴言所作之笔，虽因伤病笔力不如，然感恩之心溢于言表，并细数所得厚赐。",
      },
    ],
    54: [
      {
        en: "Ziyu grieves after receiving Qinyan's reply poem, haunted by dreams of Qinyan's pallid appearance and fearing omens of misfortune.",
        zh: "子玉得琴言复诗而悲切，梦中见其面容苍白，疑虑其有凶兆。",
      },
      {
        en: "Wang Qionghua wonders aloud about the 'troublesome' Qinyan who previously caused Ziyu such illness and distress.",
        zh: "王琼华私下议论琴言之事，言其昔日如何致子玉沉疾。",
      },
    ],
    59: [
      {
        en: "Following Qu Daosheng's death, arrangements are made to bring Qinyan (as 玉侬) back north from his southern journey to Beijing.",
        zh: "屈道生身故后，琴言以玉侬之身北归京城。",
      },
      {
        en: "The Mei family extends formal charity and welcome to him, drawing him back into their household circle under legitimate patronage.",
        zh: "梅家正式纳其为赡养对象，以名正言顺之名义将其纳入家族保护范围。",
      },
    ],
    60: [
      {
        en: "Reconnects with the scholarly social circle at the grand reunion gathering, now having transitioned from performer to person of refined literary standing.",
        zh: "于大型重聚中复见士林友朋，此时已非伶人之身，而为清雅文人矣。",
      },
      {
        en: "Referenced (as 玉侬) among those to be commemorated in the planned flower-goddess portrait collection celebrating nine celebrated beauties.",
        zh: "以玉侬之名列于拟绘之《花神图》中，与九位佳人并存青史。",
      },
    ],
  },

  "char-2": {
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    13: [
      {
        en: "After Yan Zhongqing",
        zh: "颜仲清激怒春航后，暗中托王恂送去百金助其度日。走投无路的春航寄食于高品处，却仍每日守在联锦班戏园门口，痴痴等候苏蕙芳。蕙芳留意到这个神清骨秀、衣衫憔悴却不失风雅的身影，心生怜念，终于叫人将他请进门来。二人于花满院落的小客厅中初次对坐，蕙芳吐属雅洁，春航感激涕零，两人相视无言，默契已生。蕙芳引春航入内室，陈设精雅，仇十洲画悬壁，三蓝绒毯铺地，一尘不染。春航甫一踏入，便知此后心上的归处。",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
    54: [
      {
        en: "Grief makes a strange fuel. Haunted by a troubling dream of Du Qinyan — gaunt and sorrowful — and weighed down by longing, Mei Ziyu nonetheless marshals every resource of his brilliant mind for the Grand Examination. Across three demanding rounds he excels: eight classical essays, two grand fu compositions, and a final round of verse written in the exact rhymes of Du Fu and Han Yu. He places second overall and wins the palace examination outright — the youngest candidate in the cohort — earning appointment as a Hanlin Compiler. Yet there is no triumph in his bearing. Yan Zhongqing and Gao Pin have both failed; Wang Xun too. Ziyu visits each in turn with quiet apologies, as though his own success were somehow their loss. The examiner Su Hou, remembering Xu Ziyun",
        zh: "梅子玉在对琴言的日夜思念中强打精神，应博学鸿词考试。三场下来他文思泉涌，一路过关，最终高中第二，殿试更夺魁首，授翰林编修之职。仲清、高品相继落第，子玉非但不以己之荣耀自矜，反而深感愧疚，益加谦逊。颜夫人欣喜异常，子玉的婚事也在料理之中。昔日落魄书生，如今风光入仕，命运的齿轮悄然转动，情与功名的纠缠愈发难以分解。",
      },
    ],
  },
  "char-3": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    33: [
      {
        en: "As the year draws to a close, Shi Nanxiang departs Beijing to take up his new posting, leaving the circle of intimates noticeably thinner. Mei Ziyu, setting out on a city errand he abandons halfway, chances upon Yuan Baozhu in a lane jammed with camels and carriages. Baozhu leads him to his exquisite study, the \\",
        zh: "腊月时节，史南湘随任出京，众名士相送，知己又少了几人。梅子玉偶遇袁宝珠，被邀入其精致书斋「小琅室」，见壁悬名迹、案置梅花，雅洁脱俗。两人煮雪烹茶，又邀陆素兰同来，共作清谈雅叙。宝珠忆及落难画师金粟，含泪长叹，子玉随口触动其心事，忙以竹石之语转圜解围。席间子玉婚事被一语道破，他只淡淡推说家信未回，神情间却另有隐衷。窗外寒梅暗香，室内风雅依旧，然离别与羁绊的况味，早已渗入每一壶茶香之中。",
      },
    ],
    47: [
      {
        en: "The examination results arrive like a spring thunderclap: Tian Chunhang has taken first place in the palace examination—zhuangyuan, top of the empire—and Shi Nanxiang has placed fourth in the second tier. Su Huifang, who staked years of earnings and devotion on Chunhang",
        zh: "南湘、春航双双高中进士，蕙芳欣喜之余，为二人张罗搬迁事宜。子云慷慨邀请入住怡园，奈何春航急于接家眷，另觅新宅。而奚十一病愈后旧习难改，伤处留下隐疾，内外皆难应酬，苦不堪言。一日去宏济寺谢恩，偶见寺旁新开了一家奇特医馆，院中立着各色怪人，隐隐透出一股市井江湖气——奚十一的那桩荒唐求医之旅，就此埋下伏笔。",
      },
    ],
  },
  "char-4": {
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    13: [
      {
        en: "After Yan Zhongqing",
        zh: "颜仲清激怒春航后，暗中托王恂送去百金助其度日。走投无路的春航寄食于高品处，却仍每日守在联锦班戏园门口，痴痴等候苏蕙芳。蕙芳留意到这个神清骨秀、衣衫憔悴却不失风雅的身影，心生怜念，终于叫人将他请进门来。二人于花满院落的小客厅中初次对坐，蕙芳吐属雅洁，春航感激涕零，两人相视无言，默契已生。蕙芳引春航入内室，陈设精雅，仇十洲画悬壁，三蓝绒毯铺地，一尘不染。春航甫一踏入，便知此后心上的归处。",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
  },
  "char-5": {
    2: [
      {
        en: "Ziyu returns home to find his father entertaining Wang Wenzheng, the two men trading news of the upcoming New Year banquet and debating how best to find a suitable match for Wang",
        zh: "子玉随父归家，撞见父亲正陪着王文辉议事，话题从同年团拜选戏，到给王家次女物色佳婿，随口又论起择婿之难。不多时，两张红帖送到：一是世侄魏聘才，一是西席之子李元茂，均从外省远道投奔而来。魏聘才身材瘦小、伶俐油滑，叩头见礼时那股子讨巧劲儿一览无余；李元茂则身形笨浊、近视木讷，行礼如拜神像，咕噜了几句竟无人听懂。梅学士将二人安置于后院厢房，命子玉引他们往书房见老师性全。那厢魏聘才在账房翻到一册《曲台花选》，将八位名旦的姓名风姿一一记熟，心里盘算着何时能亲眼一睹。京城的繁华与诱惑，已悄悄向这位新来的外省少年张开了怀抱。",
      },
    ],
    3: [
      {
        en: "Wei Pincai misses the household meal and is hospitably invited to eat in the accounts room by the steward Xu Shun. Afterward, idling away the afternoon, he pulls a slim volume from a bamboo bookshelf: the Flower Register, a connoisseur",
        zh: "魏聘才错过饭点回来，管事许顺热心留他在账房用饭。饭毕无聊，他随手从紫竹书架上翻出一册《曲台花选》，躺在炕上细细研读，将八位名旦的姓名才貌一一默记，心中暗叹京城名旦果然名不虚传——比起他心里念念不忘的",
      },
    ],
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
    8: [
      {
        en: "Ziyu returns from his dinner to find Wei Pincai and Li Yuanmao long gone. The two had seized their opportunity the moment he left: Pincai talked Yuanmao into raiding his father",
        zh: "子玉赴宴归来已是深夜，魏聘才与李元茂却不见踪影。原来二人趁子玉不在，一合计便打起了看戏的主意。囊中羞涩，聘才怂恿元茂偷取父亲箱中银两，前后凑了八九两，雇车直奔太和园联锦班。元茂初次进戏园，看得眼花缭乱，不防绊倒在门口长凳上，恰被一人双手扶起——此人正是华光宿，自此引出一条险恶支线。聘才领着元茂挤进官座，一群相公围着嘻嘻笑笑，正是他心心念念的花花世界。戏毕上馆子饮酒，口脂花香、莺声燕语，聘才如鱼得水。岂料结账时发现银两不翼而飞，二人狼狈不堪。与此同时，戏场之中另有一番情节——子玉之外，另几位公子的喜好与心思亦借看戏之机一一呈现，梨园世界的人情冷暖在台上台下同步上演。",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
    21: [
      {
        en: "Wei Pincai, emboldened by weeks of comfortable lodging in the Hua mansion, arrives at the Mei household in a hired lacquer carriage, putting on airs as he comes to visit the ailing Mei Ziyu. Ziyu has languished in bed for over a month, his illness no medicine can touch — only Du Qinyan",
        zh: "魏聘才寄居华府日久，渐生骄纵之气，竟雇车耀武扬威地登门探视病中的梅子玉。子玉缠绵榻上已逾月，心病难医，唯知症结全在杜琴言。聘才话锋一转，竟贬琴言冷若冰霜，不及府中诸人。子玉拍案而起，以高花冬月为喻，力辩琴言之挚情深韵非俗人所能领略，言辞间不觉将聘才比作粗鄙之流。聘才面有愠色，强颜附和，心中已暗生嫉恨，离去前假意允诺传话，却打定主意另行算计。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    26: [
      {
        en: "Hua Guangsu returns to the mansion after nightfall to find his ten pearl-named maids arranged in white silk, fanning and tending him with practiced grace. He dictates a recipe for a cooling medicinal porridge — each flower-dew and medicinal powder measured to the grain — while the girls joke and tussle in the lamplight, a portrait of gilded domesticity. Once the household settles, Hua summons his confidential attendant Lin Shanzhi and dispatches him to Wei Pincai",
        zh: "华公子夜归府中，在星栊卧室与十珠侍女把玩消夏，调配防风粥，笑语盈盈，奢靡生活的细节铺陈得如画卷般精致。入夜后公子召林珊枝入内室，密谈收留杜琴言之事。珊枝奉命前往魏聘才书房商议，聘才已向戏班老板长庆施压，谋划将琴言以",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    34: [
      {
        en: "Having been expelled from Hua Guangsu",
        zh: "魏聘才从华府出走，寄居唐和尚处，债台高筑，年关将近却囊空如洗。李元茂登门借钱，聘才当场抖出一叠债单自证穷困，两人相互倒苦水，不欢而散。入夜，聘才被唐和尚邀谈密事，言辞含糊，隐现算计之意。元茂厚颜留宿，借烟吃点心，呼奴唤婢，扰得聘才不得安宁。寺中气氛暧昧，金钱纠葛与人情算计交织其间，一干闲人在岁末寒夜中各打各的算盘，市井江湖的势利面孔，在这逼仄的禅房里显得格外分明。",
      },
    ],
    35: [
      {
        en: "The night",
        zh: "一夜之间，聘才寄存的箱笼、拜匣遭贼洗劫，金银细软悉数被盗，仅余几件棉衣和一块摔碎的洋表。众人趁月色搜查菜园，发现空箱弃于墙角，灌园伙计神秘失踪。唐和尚疑是内贼，将种菜人夫妇绑缚审问，老婆子哭天抢地。聘才清点损失逾千金，草草报了官，坊里几番审讯，终查明是那新来伙计蔡某借机逃盗，案情虽明，人却早已无踪。宝珠生日喜宴与聘才的遭窃之夜遥相对照，世间悲喜从不相让，热闹与凄凉往往只隔一墙之遥。",
      },
    ],
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
  },
  "char-6": {
    2: [
      {
        en: "Ziyu returns home to find his father entertaining Wang Wenzheng, the two men trading news of the upcoming New Year banquet and debating how best to find a suitable match for Wang",
        zh: "子玉随父归家，撞见父亲正陪着王文辉议事，话题从同年团拜选戏，到给王家次女物色佳婿，随口又论起择婿之难。不多时，两张红帖送到：一是世侄魏聘才，一是西席之子李元茂，均从外省远道投奔而来。魏聘才身材瘦小、伶俐油滑，叩头见礼时那股子讨巧劲儿一览无余；李元茂则身形笨浊、近视木讷，行礼如拜神像，咕噜了几句竟无人听懂。梅学士将二人安置于后院厢房，命子玉引他们往书房见老师性全。那厢魏聘才在账房翻到一册《曲台花选》，将八位名旦的姓名风姿一一记熟，心里盘算着何时能亲眼一睹。京城的繁华与诱惑，已悄悄向这位新来的外省少年张开了怀抱。",
      },
    ],
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
    8: [
      {
        en: "Ziyu returns from his dinner to find Wei Pincai and Li Yuanmao long gone. The two had seized their opportunity the moment he left: Pincai talked Yuanmao into raiding his father",
        zh: "子玉赴宴归来已是深夜，魏聘才与李元茂却不见踪影。原来二人趁子玉不在，一合计便打起了看戏的主意。囊中羞涩，聘才怂恿元茂偷取父亲箱中银两，前后凑了八九两，雇车直奔太和园联锦班。元茂初次进戏园，看得眼花缭乱，不防绊倒在门口长凳上，恰被一人双手扶起——此人正是华光宿，自此引出一条险恶支线。聘才领着元茂挤进官座，一群相公围着嘻嘻笑笑，正是他心心念念的花花世界。戏毕上馆子饮酒，口脂花香、莺声燕语，聘才如鱼得水。岂料结账时发现银两不翼而飞，二人狼狈不堪。与此同时，戏场之中另有一番情节——子玉之外，另几位公子的喜好与心思亦借看戏之机一一呈现，梨园世界的人情冷暖在台上台下同步上演。",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    23: [
      {
        en: "Chapter twenty-three steps away from the central romance to deliver a comic interlude. The bookish Li Yuanmao, having borrowed eight strings of cash from Ziyu, converts it into banknotes and ventures out in high spirits. Drawn by curiosity toward the dingy pleasure-dens of the East Garden, he is easily flattered by two street rogues who convince him to step inside a squalid establishment. The moment the door closes behind him, local thugs strip him bare. Trapped, he can only wrap himself in a straw curtain, unable to flee while a gathering crowd hoots with laughter until the flimsy walls of the den nearly collapse from the press of spectators. The episode, which quickly becomes the gossip of the season, provides both comic relief and a sharp social commentary — the collision between naive scholarly pretension and the raw, mercenary world just beyond the garden gate.",
        zh: "这一回插叙迂腐书生李元茂游荡东园的笑话。元茂向子玉借了八吊钱，换成票子揣在怀里，志得意满地出门寻欢。误入土窑子，被两个市井流氓花言巧语哄进门，随即遭土棍洗劫一空，衣裤尽脱，只能围着草帘子无法出来，引来众人围观哄笑，险些将那破屋子都挤塌。元茂灰头土脸、狼狈不堪地脱身而去。此番丑事成为京城一时笑谈，衬托出那班名士圈子外的世相百态，也从侧面折射出金钱与人心的复杂纠葛。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    34: [
      {
        en: "Having been expelled from Hua Guangsu",
        zh: "魏聘才从华府出走，寄居唐和尚处，债台高筑，年关将近却囊空如洗。李元茂登门借钱，聘才当场抖出一叠债单自证穷困，两人相互倒苦水，不欢而散。入夜，聘才被唐和尚邀谈密事，言辞含糊，隐现算计之意。元茂厚颜留宿，借烟吃点心，呼奴唤婢，扰得聘才不得安宁。寺中气氛暧昧，金钱纠葛与人情算计交织其间，一干闲人在岁末寒夜中各打各的算盘，市井江湖的势利面孔，在这逼仄的禅房里显得格外分明。",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
    51: [
      {
        en: "The Sun brothers sit for the Tongzhou prefectural examinations, each by dishonest means: Sun Sihui hires a ghostwriter while the hapless Sun Siyuan scrawls sheer gibberish on his paper. When the examiner publicly mocks the chaotic script, Sihui strides forward and, with breathtaking cheek, offers an elaborate medical excuse for his brother",
        zh: "孙嗣徽兄弟赴通州院考，嗣徽花钱雇了枪手，嗣元却胡乱涂鸦，卷子被宗师点名嘲讽。堂上嗣徽厚颜为弟辩解，语出惊人，引得诸生哄堂大笑，宗师也斥其为疯子。考毕，元茂得了秀才，心满意足，独自在运河边散步解闷，粮船如云，市声喧嚣，一派世俗繁华，与科场闹剧遥相映衬，尽显世态炎凉。",
      },
    ],
  },
  "char-7": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
    10: [
      {
        en: "After the lantern festival, Chapter Ten turns to the hidden currents running beneath Yiyuan",
        zh: "元宵灯会之后，怡园这边另有一番情愫暗涌。琴言自去年进京，随众名旦常往怡园，深受子云优待，却始终只把他当半个知己——因为他心上真正挂念的，是那个在进京途中梦中救过他的人。几番梦境，或与子玉相对而笑，或执手同哭，醒来怅然若失。一日子云归园，萧次贤讲起灯谜之夜子玉猜中了琴言的谜，大赞其才貌，子云听了亦颇赞许，道两家本有世谊，随口说要替琴言",
      },
    ],
    11: [
      {
        en: "Returning home after seeing Mei Ziyu off, Xu Ziyun recounts to his wife Yuan the tender bond between Ziyu and Qinyan. When Yuan wonders aloud what advantage these dan performers hold over her own lovely maids, Ziyun offers a studied defence: they possess the face of a woman yet the body of a man, pleasing the eye while stilling desire — the best of both worlds. The next day Yuan herself rides out in silks and furs to the birthday banquet of Hua Guangsu",
        zh: "徐子云归宅，与袁夫人谈及梅子玉与琴言的深情，袁夫人将相公们与自家丫鬟相比，子云则娓娓辩称这些少年\\",
      },
    ],
    12: [
      {
        en: "Lady Yuan returns from the Hua banquet and recounts every drinking game to Ziyun, who secretly has all sixteen forfeits engraved and circulated among friends — the set becomes known as the",
        zh: "袁夫人归来，将华府宴上所行酒令一一讲与子云，子云背着夫人将那十六个令刻版印行，题诗传世，外号\\",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    22: [
      {
        en: "Lu Sulan devises a scheme to reunite the two lovesick young men: she hires a tastefully furnished canal boat under the pretext of a leisure excursion, and sends an invitation to the Mei household in Xu Ziyun",
        zh: "为成全琴言与子玉的再会，陆素兰苦心筹划，借逛运河为名，悄悄租下一艘装点雅致的船，又以徐子云名义致书梅宅。子玉见信，沉锁心头的愁雾顿散，病已去了九分，欣然回函应约。然而素兰前往传喜讯时，却撞见琴言寓中险象横生——奚十一的爪牙登门撒野，粗声喝骂，威逼琴言出来陪酒。琴言的家人跪地求饶，送钱了事方才打发走这伙恶人。一喜一惊之间，运河相会的期盼愈发显得珍贵而脆弱。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    30: [
      {
        en: "Punished for slipping out to see Ziyu, Qinyan is moved to the inner apartments of the Hua mansion — a world sealed from the outside as completely as a birdcage. Sitting alone beside the crystal rockery, he watches a clump of garden balsam and finds his own image in it: flowers transplanted into gilded pots lose the companionship of their roots and the freedom of wind and rain. He who laughs on command, weeps in secret, and is forbidden to choose even his own expression is no different. He thinks of Ziyu — recovering now, perhaps, but cut off from any word — and fears the silence itself will bring the illness back. Tears fall. Weeks pass. By the twelfth of the eighth month, the osmanthus is in bloom and Hua Guangsu has arranged a grand Mid-Autumn eve banquet in the West Garden, complete with five troupes performing simultaneously under festive lanterns. Xu Ziyun, Xiao Cixian, and Liu Wenze make their way to the brilliantly lit estate while Ziyu, bound by kinship-avoidance rules, sits alone in his study with no company but the moon — its cold light falling equally on the feast he cannot attend and the face he cannot reach.",
        zh: "琴言回府后因私自外出被华公子迁入内室，与外界全然隔绝。他独坐水晶山畔，望着一丛凤仙花沉思：花被折入金盆，失了根本，正如自己身陷华府，笑不敢笑，哭不敢哭。想及子玉病虽将愈，却内外音讯断绝，旧情复萌恐又成病，不禁泪流满面。转眼已是八月，桂香盈院，华公子筹备中秋前夕的西园夜宴，召来子云、次贤、文泽等人赏灯观戏。子玉因与华公子有亲属回避之例，只能枯坐书斋，对月独愁，与那灯火辉煌、丝竹管弦的夜宴咫尺天涯。",
      },
    ],
    31: [
      {
        en: "As Hua Guangsu",
        zh: "华公子酒宴将散，命众旦各展所长——琴箫合奏、丹青题诗、笙琵竞鸣、猜谜舞剑，雅趣横生。杜琴言却托病离席，独坐屏后，难掩心中悲凉。座中文人互相品评书法诗词，梅子玉与众人就翰墨之道争辩不休，一时高论迭出。夜深宴罢，子云提议以戏文题目行令，众人竞猜，热闹喧天。琴言困于繁华之中，愈发思念旧日自由，悲从中来，暗自垂泪，乐声与愁绪交织，欢笑背后尽是难言的身世之感。",
      },
    ],
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    43: [
      {
        en: "Yuan Baozhu and Lu Sulan arrive to find Qinyan in a fog of anxiety. The moment they hear about the widow",
        zh: "宝珠与素兰闻知师娘索钱之事，立刻各有主意。素兰一拍手便断言：出师最妙！但三千两银子从何而来？二人你来我往，盘算着谁能替琴言出这笔钱。话锋一转，议及子云——怡园的徐子云素来慷慨，且对琴言颇有情谊。若能由他出面，以赎身之名将琴言从师娘手中赎出，既解了燃眉之急，又给琴言留了余地。谋议已定，众人心照不宣地去赏杏花，让这一桩关乎命运的密谋，在春花烂漫中悄然成形。",
      },
    ],
    44: [
      {
        en: "On the very day Xu Ziyun",
        zh: "琴言出师之日，华府的跑腿姚贤出城寻人，却从麻子嘴里听到一个惊天消息：有江南人替琴言出了师，人已走了！姚贤惊慌失措，辗转打探，偶遇子云家人孟七，方知真相——正是徐子云以两千四百五十两银票，替琴言赎了自由身。消息传回华府，公子大为震怒，却也无可奈何。而此刻琴言已悄然住进怡园，从牢笼般的旧日身份中挣脱出来，开始了一段崭新的人生。",
      },
    ],
    45: [
      {
        en: "The Garden of Ease receives Qinyan like a convalescent receiving clean air. Xu Ziyun and Xiao Cixian take turns drawing him out of his melancholy, and the garden",
        zh: "怡园春深，琴言在子云、次贤的悉心开导下，渐渐收拾起愁绪。牡丹台、芍药圃，每日皆有文人名旦相聚，吟花斗酒，好不风雅。入夜，子玉趁着一钩新月，独自来访。两人在海棠春圃相遇，凭栏闲话，子玉说海棠之香藏于花肌深处，非凝眸久视不得，须以心闻之。琴言俯身嗅花，若有所悟，莞尔点头。月色如水，花影婆娑，一段久别重逢的情谊，在夜风中悄悄复苏。",
      },
    ],
    46: [
      {
        en: "Scholar Qu Daoweng takes up residence in the Garden of Ease and formally adopts Qinyan as his son, renaming him Qinxian. From dawn to dusk he teaches classical texts, poetry, calligraphy, and the rhythms of parallel prose. Qinxian proves a scholar",
        zh: "屈道翁入住怡园，收琴仙为义子，日授诗词文章，晨昏对课，父慈子孝，竟如亲生。琴仙天资聪颖，过目成诵，半月之内文理大进。道翁为园作序，文采斐然，子云喜而欲勒石永存。二十八日，子云大开园会，诸名士齐聚含万楼，道翁改楼名为",
      },
    ],
    47: [
      {
        en: "The examination results arrive like a spring thunderclap: Tian Chunhang has taken first place in the palace examination—zhuangyuan, top of the empire—and Shi Nanxiang has placed fourth in the second tier. Su Huifang, who staked years of earnings and devotion on Chunhang",
        zh: "南湘、春航双双高中进士，蕙芳欣喜之余，为二人张罗搬迁事宜。子云慷慨邀请入住怡园，奈何春航急于接家眷，另觅新宅。而奚十一病愈后旧习难改，伤处留下隐疾，内外皆难应酬，苦不堪言。一日去宏济寺谢恩，偶见寺旁新开了一家奇特医馆，院中立着各色怪人，隐隐透出一股市井江湖气——奚十一的那桩荒唐求医之旅，就此埋下伏笔。",
      },
    ],
    52: [
      {
        en: "With the Grand Examination for Broad Learning and Extensive Words approaching, scholars from across the realm converge on the capital. The focus, however, is a magnificent wedding: Tian Chunhang takes his bride from the wealthy Su family, whose dowry — two hundred acres, ten maids, twenty thousand taels of silver and three thousand in gold — staggers everyone present. Xu Ziyun lends an entire wing of his own residence to accommodate the extravagance. At the banquet Su Huifang rushes between guests and ledgers, the most harried person in the garden. The wit flows freely: Gao Pin stages a sly theatrical joke at Chunhang",
        zh: "七月，博学鸿词考期将近，四方名士云集京城。田春航迎娶苏氏女，苏家妆奁竟达数万两之巨，子云慷慨借出东厢大宅相助，园中宾客如云，两班戏子同场竞艳。席间高品借《当巾》一出暗讽春航，春航以郑元和自比巧妙还击，宾主应答机锋迭出，言笑晏晏。子玉强撑病体出席，却因琴言缺席而黯然神伤，众人皆心知肚明，却只能以欢笑相掩。",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
    59: [
      {
        en: "A hundred days of mourning have stripped Qinyan of nearly everything. The money is gone; the warm clothes are pawned. Old retainer Liu Xi sets up a modest fruit stall at the temple gate while Qinyan paints flowers on raw paper to sell to passers-by — and discovers, to his own surprise, that his brushwork commands real admiration: a peony sells for two hundred cash, a plum blossom for a hundred and fifty, and a customer commissions a full eight-panel screen. Then Historian Hou arrives, all unctuous concern and subtle pressure, offering money and a comfortable room in his household — with unmistakable intent. Qinyan receives him with a face like winter ice and sends him away unthanked, choosing dignified poverty over purchased comfort. Letters go out to Mei Ziyu, Xu Ziyun, and Su Huifang — careful, heartfelt, each one a lifeline cast into the distance.",
        zh: "琴仙在南京护国寺为道翁守灵已逾百日，盘缠耗尽，衣单食薄。刘喜在庙门口摆摊卖果，琴仙则以丹青糊口，在生纸上画花卉出售，竟颇受好评。道貌岸然的侯太史携金登门，企图趁人之危笼络琴仙，被琴仙冷脸相拒，其虚伪嘴脸暴露无遗。琴仙写信向子玉、子云、蕙芳等人求援，心中对子玉的牵念，如寒冬里一炉炭火，始终不曾熄灭。",
      },
    ],
    60: [
      {
        en: "The Lantern Festival brings the novel full circle. Xu Ziyun hosts one last great gathering at the Yi Garden; fireworks turn the night sky to daylight; Du Qinyan sits among friends — no longer a theatre boy but a scholar among scholars — and feels the long nightmare of the south dissolve like fog. It is Jin Jifu who gives the evening its lasting shape: he proposes that the nine celebrated beauties of the Nine Fragrance Pavilion be commemorated in portrait and prose, carved in stone to outlast them all, enshrined as flower deities. The company draws lots for assignments with the delighted solemnity of a literary game — and the lots fall with the uncanny aptness of fate: Mei Ziyu draws Du Qinyan and the Lady Du, the two souls most entwined with his own. Yan Zhongqing, Wang Xun, Gao Pin, Tian Chunhang — each receives his subject as though the slips of paper already knew. The novel closes not with loss but with consecration: art and friendship conspiring to make beauty permanent.",
        zh: "元宵佳节，子云大宴群友，琴仙重回京城，与众名旦、名士把酒言欢，旧日艰辛恍若隔世一梦。席间金吉甫提议以九香楼诸人入画立传，刻石传世，众人一拍即合，拈阄分赋，子玉得琴仙与杜仙女，缘分天定，令人叹服。小说以众人共绘花神图、分写传赞作结，屈道翁精神永存，一段才子佳人的传奇，于诗画流传中获得了超越时间的不朽。",
      },
    ],
  },
  "char-8": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
    10: [
      {
        en: "After the lantern festival, Chapter Ten turns to the hidden currents running beneath Yiyuan",
        zh: "元宵灯会之后，怡园这边另有一番情愫暗涌。琴言自去年进京，随众名旦常往怡园，深受子云优待，却始终只把他当半个知己——因为他心上真正挂念的，是那个在进京途中梦中救过他的人。几番梦境，或与子玉相对而笑，或执手同哭，醒来怅然若失。一日子云归园，萧次贤讲起灯谜之夜子玉猜中了琴言的谜，大赞其才貌，子云听了亦颇赞许，道两家本有世谊，随口说要替琴言",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    30: [
      {
        en: "Punished for slipping out to see Ziyu, Qinyan is moved to the inner apartments of the Hua mansion — a world sealed from the outside as completely as a birdcage. Sitting alone beside the crystal rockery, he watches a clump of garden balsam and finds his own image in it: flowers transplanted into gilded pots lose the companionship of their roots and the freedom of wind and rain. He who laughs on command, weeps in secret, and is forbidden to choose even his own expression is no different. He thinks of Ziyu — recovering now, perhaps, but cut off from any word — and fears the silence itself will bring the illness back. Tears fall. Weeks pass. By the twelfth of the eighth month, the osmanthus is in bloom and Hua Guangsu has arranged a grand Mid-Autumn eve banquet in the West Garden, complete with five troupes performing simultaneously under festive lanterns. Xu Ziyun, Xiao Cixian, and Liu Wenze make their way to the brilliantly lit estate while Ziyu, bound by kinship-avoidance rules, sits alone in his study with no company but the moon — its cold light falling equally on the feast he cannot attend and the face he cannot reach.",
        zh: "琴言回府后因私自外出被华公子迁入内室，与外界全然隔绝。他独坐水晶山畔，望着一丛凤仙花沉思：花被折入金盆，失了根本，正如自己身陷华府，笑不敢笑，哭不敢哭。想及子玉病虽将愈，却内外音讯断绝，旧情复萌恐又成病，不禁泪流满面。转眼已是八月，桂香盈院，华公子筹备中秋前夕的西园夜宴，召来子云、次贤、文泽等人赏灯观戏。子玉因与华公子有亲属回避之例，只能枯坐书斋，对月独愁，与那灯火辉煌、丝竹管弦的夜宴咫尺天涯。",
      },
    ],
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
    45: [
      {
        en: "The Garden of Ease receives Qinyan like a convalescent receiving clean air. Xu Ziyun and Xiao Cixian take turns drawing him out of his melancholy, and the garden",
        zh: "怡园春深，琴言在子云、次贤的悉心开导下，渐渐收拾起愁绪。牡丹台、芍药圃，每日皆有文人名旦相聚，吟花斗酒，好不风雅。入夜，子玉趁着一钩新月，独自来访。两人在海棠春圃相遇，凭栏闲话，子玉说海棠之香藏于花肌深处，非凝眸久视不得，须以心闻之。琴言俯身嗅花，若有所悟，莞尔点头。月色如水，花影婆娑，一段久别重逢的情谊，在夜风中悄悄复苏。",
      },
    ],
  },
  "char-9": {
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    30: [
      {
        en: "Punished for slipping out to see Ziyu, Qinyan is moved to the inner apartments of the Hua mansion — a world sealed from the outside as completely as a birdcage. Sitting alone beside the crystal rockery, he watches a clump of garden balsam and finds his own image in it: flowers transplanted into gilded pots lose the companionship of their roots and the freedom of wind and rain. He who laughs on command, weeps in secret, and is forbidden to choose even his own expression is no different. He thinks of Ziyu — recovering now, perhaps, but cut off from any word — and fears the silence itself will bring the illness back. Tears fall. Weeks pass. By the twelfth of the eighth month, the osmanthus is in bloom and Hua Guangsu has arranged a grand Mid-Autumn eve banquet in the West Garden, complete with five troupes performing simultaneously under festive lanterns. Xu Ziyun, Xiao Cixian, and Liu Wenze make their way to the brilliantly lit estate while Ziyu, bound by kinship-avoidance rules, sits alone in his study with no company but the moon — its cold light falling equally on the feast he cannot attend and the face he cannot reach.",
        zh: "琴言回府后因私自外出被华公子迁入内室，与外界全然隔绝。他独坐水晶山畔，望着一丛凤仙花沉思：花被折入金盆，失了根本，正如自己身陷华府，笑不敢笑，哭不敢哭。想及子玉病虽将愈，却内外音讯断绝，旧情复萌恐又成病，不禁泪流满面。转眼已是八月，桂香盈院，华公子筹备中秋前夕的西园夜宴，召来子云、次贤、文泽等人赏灯观戏。子玉因与华公子有亲属回避之例，只能枯坐书斋，对月独愁，与那灯火辉煌、丝竹管弦的夜宴咫尺天涯。",
      },
    ],
    50: [
      {
        en: "Midsummer in the capital: the heat sits on the city like a lid. Tian Chunhang is promised in marriage to Minister Su",
        zh: "盛夏炎炎，春航已与苏侯之女订下婚约，七夕完婚在即。刘文泽路过林春喜门口，顺道拜访，见他书室幽雅，芭蕉叶上密密写满了练笔的字，院中支着小卷篷，盆景点缀其间。春喜将团扇递来，上面画着螳螂捕蝉，栩栩如生，叫文泽看得目瞪口呆。原来春喜这几个月悄悄钻研绘画，已大有长进，连素来挑剔的瑶卿也甘拜下风。文泽索扇不得，讨来一把，心满意足而去。才情与风雅，在这一片消夏的蝉声里，轻盈地流转。",
      },
    ],
  },
  "char-10": {
    13: [
      {
        en: "After Yan Zhongqing",
        zh: "颜仲清激怒春航后，暗中托王恂送去百金助其度日。走投无路的春航寄食于高品处，却仍每日守在联锦班戏园门口，痴痴等候苏蕙芳。蕙芳留意到这个神清骨秀、衣衫憔悴却不失风雅的身影，心生怜念，终于叫人将他请进门来。二人于花满院落的小客厅中初次对坐，蕙芳吐属雅洁，春航感激涕零，两人相视无言，默契已生。蕙芳引春航入内室，陈设精雅，仇十洲画悬壁，三蓝绒毯铺地，一尘不染。春航甫一踏入，便知此后心上的归处。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    32: [
      {
        en: "After a week of relentless autumn rain the sky finally clears, and the examination results are due within days. Every candidate in the capital is sleepless with anticipation — even the usually composed Gao Pin and Tian Chunhang lie awake through the night, swapping stories of divination disasters from previous sittings. Gao Pin recalls a hexagram that seemed to promise first place on the list, yet delivered nothing; both men laugh ruefully at the unreliability of omens. Su Huifang, waiting alone at home, proves more agitated than the candidates themselves: she dismisses a visiting official, presses every servant for news, and spends the afternoon pacing between the couch and the window. When the runners finally arrive, the results bring sharply mixed fortune — Gao Pin",
        zh: "秋雨连绵七八日后初晴，贡院放榜在即，场中士子无不魂不守舍、寝食难安。高品与田春航彻夜长谈，忆起往年问卜中举的笑话，苦中作乐。苏蕙芳比春航更为焦急，坐卧不宁，遣人打探消息，心中挂念远胜儿女私情。报喜声终于传来，几家欢喜几家愁——高品榜上有名，春航名落孙山。消息在怡园迅速传开，众人或贺或慰。蕙芳闻讯，百感交集，深知才情不敌八股，科场公道从来难料，惟将一腔情义深埋心底。",
      },
    ],
    52: [
      {
        en: "With the Grand Examination for Broad Learning and Extensive Words approaching, scholars from across the realm converge on the capital. The focus, however, is a magnificent wedding: Tian Chunhang takes his bride from the wealthy Su family, whose dowry — two hundred acres, ten maids, twenty thousand taels of silver and three thousand in gold — staggers everyone present. Xu Ziyun lends an entire wing of his own residence to accommodate the extravagance. At the banquet Su Huifang rushes between guests and ledgers, the most harried person in the garden. The wit flows freely: Gao Pin stages a sly theatrical joke at Chunhang",
        zh: "七月，博学鸿词考期将近，四方名士云集京城。田春航迎娶苏氏女，苏家妆奁竟达数万两之巨，子云慷慨借出东厢大宅相助，园中宾客如云，两班戏子同场竞艳。席间高品借《当巾》一出暗讽春航，春航以郑元和自比巧妙还击，宾主应答机锋迭出，言笑晏晏。子玉强撑病体出席，却因琴言缺席而黯然神伤，众人皆心知肚明，却只能以欢笑相掩。",
      },
    ],
    54: [
      {
        en: "Grief makes a strange fuel. Haunted by a troubling dream of Du Qinyan — gaunt and sorrowful — and weighed down by longing, Mei Ziyu nonetheless marshals every resource of his brilliant mind for the Grand Examination. Across three demanding rounds he excels: eight classical essays, two grand fu compositions, and a final round of verse written in the exact rhymes of Du Fu and Han Yu. He places second overall and wins the palace examination outright — the youngest candidate in the cohort — earning appointment as a Hanlin Compiler. Yet there is no triumph in his bearing. Yan Zhongqing and Gao Pin have both failed; Wang Xun too. Ziyu visits each in turn with quiet apologies, as though his own success were somehow their loss. The examiner Su Hou, remembering Xu Ziyun",
        zh: "梅子玉在对琴言的日夜思念中强打精神，应博学鸿词考试。三场下来他文思泉涌，一路过关，最终高中第二，殿试更夺魁首，授翰林编修之职。仲清、高品相继落第，子玉非但不以己之荣耀自矜，反而深感愧疚，益加谦逊。颜夫人欣喜异常，子玉的婚事也在料理之中。昔日落魄书生，如今风光入仕，命运的齿轮悄然转动，情与功名的纠缠愈发难以分解。",
      },
    ],
  },
  "char-11": {
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    27: [
      {
        en: "Xi Shiyi — the",
        zh: "奚十一重金归来，与张仲雨、潘其观日日把酒看戏，肆意妄为。此人横行无忌，人称",
      },
    ],
  },
  "char-14": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-15": {
    13: [
      {
        en: "After Yan Zhongqing",
        zh: "颜仲清激怒春航后，暗中托王恂送去百金助其度日。走投无路的春航寄食于高品处，却仍每日守在联锦班戏园门口，痴痴等候苏蕙芳。蕙芳留意到这个神清骨秀、衣衫憔悴却不失风雅的身影，心生怜念，终于叫人将他请进门来。二人于花满院落的小客厅中初次对坐，蕙芳吐属雅洁，春航感激涕零，两人相视无言，默契已生。蕙芳引春航入内室，陈设精雅，仇十洲画悬壁，三蓝绒毯铺地，一尘不染。春航甫一踏入，便知此后心上的归处。",
      },
    ],
    14: [
      {
        en: "Huifang dresses Chunhang in fresh clothes from her own wardrobe, and when she holds up a mirror so they can see themselves side by side, two luminous faces reflected together, Chunhang feels a sudden surge of longing that he wrestles down with conscious effort, reminding himself that she is his companion in hardship, not an object of desire. Huifang, seemingly unaware, picks up his travel manuscript",
        zh: "蕙芳为春航换上新衣，二人对镜而照，两张玉颜并影，春航情动而自持，强压邪念，敛神还礼。蕙芳取出春航随身携带的诗稿《燕台旅稿》，轻声吟诵其中一首香艳的七言古风，句句点评精妙，知音之态令春航惊叹。诗中有\\",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    32: [
      {
        en: "After a week of relentless autumn rain the sky finally clears, and the examination results are due within days. Every candidate in the capital is sleepless with anticipation — even the usually composed Gao Pin and Tian Chunhang lie awake through the night, swapping stories of divination disasters from previous sittings. Gao Pin recalls a hexagram that seemed to promise first place on the list, yet delivered nothing; both men laugh ruefully at the unreliability of omens. Su Huifang, waiting alone at home, proves more agitated than the candidates themselves: she dismisses a visiting official, presses every servant for news, and spends the afternoon pacing between the couch and the window. When the runners finally arrive, the results bring sharply mixed fortune — Gao Pin",
        zh: "秋雨连绵七八日后初晴，贡院放榜在即，场中士子无不魂不守舍、寝食难安。高品与田春航彻夜长谈，忆起往年问卜中举的笑话，苦中作乐。苏蕙芳比春航更为焦急，坐卧不宁，遣人打探消息，心中挂念远胜儿女私情。报喜声终于传来，几家欢喜几家愁——高品榜上有名，春航名落孙山。消息在怡园迅速传开，众人或贺或慰。蕙芳闻讯，百感交集，深知才情不敌八股，科场公道从来难料，惟将一腔情义深埋心底。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    47: [
      {
        en: "The examination results arrive like a spring thunderclap: Tian Chunhang has taken first place in the palace examination—zhuangyuan, top of the empire—and Shi Nanxiang has placed fourth in the second tier. Su Huifang, who staked years of earnings and devotion on Chunhang",
        zh: "南湘、春航双双高中进士，蕙芳欣喜之余，为二人张罗搬迁事宜。子云慷慨邀请入住怡园，奈何春航急于接家眷，另觅新宅。而奚十一病愈后旧习难改，伤处留下隐疾，内外皆难应酬，苦不堪言。一日去宏济寺谢恩，偶见寺旁新开了一家奇特医馆，院中立着各色怪人，隐隐透出一股市井江湖气——奚十一的那桩荒唐求医之旅，就此埋下伏笔。",
      },
    ],
    48: [
      {
        en: "The Garden of Ease prepares for a departure. Qu Daoweng has received his appointment to Nanchang and will leave within days, taking Qinxian with him. The farewell banquets multiply—scholars, performers, friends who have shared the garden",
        zh: "屈道翁领了南昌通判，怡园即将失去这对父子。名士们轮流为琴仙饯行，依依惜别。春航高中状元，苏侯一见倾心，欲招为东床，惜已有妻，遗憾而止。不料家书传来噩耗：春航之妻已于二月间暴病亡故。悲喜交集之际，老母与舅父又将同赴京城。蕙芳一力操持新宅事宜，感情深厚却身份尴尬，冷暖自知。春航命下人从此称蕙芳为",
      },
    ],
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
    50: [
      {
        en: "Midsummer in the capital: the heat sits on the city like a lid. Tian Chunhang is promised in marriage to Minister Su",
        zh: "盛夏炎炎，春航已与苏侯之女订下婚约，七夕完婚在即。刘文泽路过林春喜门口，顺道拜访，见他书室幽雅，芭蕉叶上密密写满了练笔的字，院中支着小卷篷，盆景点缀其间。春喜将团扇递来，上面画着螳螂捕蝉，栩栩如生，叫文泽看得目瞪口呆。原来春喜这几个月悄悄钻研绘画，已大有长进，连素来挑剔的瑶卿也甘拜下风。文泽索扇不得，讨来一把，心满意足而去。才情与风雅，在这一片消夏的蝉声里，轻盈地流转。",
      },
    ],
    52: [
      {
        en: "With the Grand Examination for Broad Learning and Extensive Words approaching, scholars from across the realm converge on the capital. The focus, however, is a magnificent wedding: Tian Chunhang takes his bride from the wealthy Su family, whose dowry — two hundred acres, ten maids, twenty thousand taels of silver and three thousand in gold — staggers everyone present. Xu Ziyun lends an entire wing of his own residence to accommodate the extravagance. At the banquet Su Huifang rushes between guests and ledgers, the most harried person in the garden. The wit flows freely: Gao Pin stages a sly theatrical joke at Chunhang",
        zh: "七月，博学鸿词考期将近，四方名士云集京城。田春航迎娶苏氏女，苏家妆奁竟达数万两之巨，子云慷慨借出东厢大宅相助，园中宾客如云，两班戏子同场竞艳。席间高品借《当巾》一出暗讽春航，春航以郑元和自比巧妙还击，宾主应答机锋迭出，言笑晏晏。子玉强撑病体出席，却因琴言缺席而黯然神伤，众人皆心知肚明，却只能以欢笑相掩。",
      },
    ],
  },
  "char-17": {
    60: [
      {
        en: "The Lantern Festival brings the novel full circle. Xu Ziyun hosts one last great gathering at the Yi Garden; fireworks turn the night sky to daylight; Du Qinyan sits among friends — no longer a theatre boy but a scholar among scholars — and feels the long nightmare of the south dissolve like fog. It is Jin Jifu who gives the evening its lasting shape: he proposes that the nine celebrated beauties of the Nine Fragrance Pavilion be commemorated in portrait and prose, carved in stone to outlast them all, enshrined as flower deities. The company draws lots for assignments with the delighted solemnity of a literary game — and the lots fall with the uncanny aptness of fate: Mei Ziyu draws Du Qinyan and the Lady Du, the two souls most entwined with his own. Yan Zhongqing, Wang Xun, Gao Pin, Tian Chunhang — each receives his subject as though the slips of paper already knew. The novel closes not with loss but with consecration: art and friendship conspiring to make beauty permanent.",
        zh: "元宵佳节，子云大宴群友，琴仙重回京城，与众名旦、名士把酒言欢，旧日艰辛恍若隔世一梦。席间金吉甫提议以九香楼诸人入画立传，刻石传世，众人一拍即合，拈阄分赋，子玉得琴仙与杜仙女，缘分天定，令人叹服。小说以众人共绘花神图、分写传赞作结，屈道翁精神永存，一段才子佳人的传奇，于诗画流传中获得了超越时间的不朽。",
      },
    ],
  },
  "char-20": {
    2: [
      {
        en: "Ziyu returns home to find his father entertaining Wang Wenzheng, the two men trading news of the upcoming New Year banquet and debating how best to find a suitable match for Wang",
        zh: "子玉随父归家，撞见父亲正陪着王文辉议事，话题从同年团拜选戏，到给王家次女物色佳婿，随口又论起择婿之难。不多时，两张红帖送到：一是世侄魏聘才，一是西席之子李元茂，均从外省远道投奔而来。魏聘才身材瘦小、伶俐油滑，叩头见礼时那股子讨巧劲儿一览无余；李元茂则身形笨浊、近视木讷，行礼如拜神像，咕噜了几句竟无人听懂。梅学士将二人安置于后院厢房，命子玉引他们往书房见老师性全。那厢魏聘才在账房翻到一册《曲台花选》，将八位名旦的姓名风姿一一记熟，心里盘算着何时能亲眼一睹。京城的繁华与诱惑，已悄悄向这位新来的外省少年张开了怀抱。",
      },
    ],
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
  },
  "char-21": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    51: [
      {
        en: "The Sun brothers sit for the Tongzhou prefectural examinations, each by dishonest means: Sun Sihui hires a ghostwriter while the hapless Sun Siyuan scrawls sheer gibberish on his paper. When the examiner publicly mocks the chaotic script, Sihui strides forward and, with breathtaking cheek, offers an elaborate medical excuse for his brother",
        zh: "孙嗣徽兄弟赴通州院考，嗣徽花钱雇了枪手，嗣元却胡乱涂鸦，卷子被宗师点名嘲讽。堂上嗣徽厚颜为弟辩解，语出惊人，引得诸生哄堂大笑，宗师也斥其为疯子。考毕，元茂得了秀才，心满意足，独自在运河边散步解闷，粮船如云，市声喧嚣，一派世俗繁华，与科场闹剧遥相映衬，尽显世态炎凉。",
      },
    ],
  },
  "char-22": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    51: [
      {
        en: "The Sun brothers sit for the Tongzhou prefectural examinations, each by dishonest means: Sun Sihui hires a ghostwriter while the hapless Sun Siyuan scrawls sheer gibberish on his paper. When the examiner publicly mocks the chaotic script, Sihui strides forward and, with breathtaking cheek, offers an elaborate medical excuse for his brother",
        zh: "孙嗣徽兄弟赴通州院考，嗣徽花钱雇了枪手，嗣元却胡乱涂鸦，卷子被宗师点名嘲讽。堂上嗣徽厚颜为弟辩解，语出惊人，引得诸生哄堂大笑，宗师也斥其为疯子。考毕，元茂得了秀才，心满意足，独自在运河边散步解闷，粮船如云，市声喧嚣，一派世俗繁华，与科场闹剧遥相映衬，尽显世态炎凉。",
      },
    ],
  },
  "char-23": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    33: [
      {
        en: "As the year draws to a close, Shi Nanxiang departs Beijing to take up his new posting, leaving the circle of intimates noticeably thinner. Mei Ziyu, setting out on a city errand he abandons halfway, chances upon Yuan Baozhu in a lane jammed with camels and carriages. Baozhu leads him to his exquisite study, the \\",
        zh: "腊月时节，史南湘随任出京，众名士相送，知己又少了几人。梅子玉偶遇袁宝珠，被邀入其精致书斋「小琅室」，见壁悬名迹、案置梅花，雅洁脱俗。两人煮雪烹茶，又邀陆素兰同来，共作清谈雅叙。宝珠忆及落难画师金粟，含泪长叹，子玉随口触动其心事，忙以竹石之语转圜解围。席间子玉婚事被一语道破，他只淡淡推说家信未回，神情间却另有隐衷。窗外寒梅暗香，室内风雅依旧，然离别与羁绊的况味，早已渗入每一壶茶香之中。",
      },
    ],
    35: [
      {
        en: "The night",
        zh: "一夜之间，聘才寄存的箱笼、拜匣遭贼洗劫，金银细软悉数被盗，仅余几件棉衣和一块摔碎的洋表。众人趁月色搜查菜园，发现空箱弃于墙角，灌园伙计神秘失踪。唐和尚疑是内贼，将种菜人夫妇绑缚审问，老婆子哭天抢地。聘才清点损失逾千金，草草报了官，坊里几番审讯，终查明是那新来伙计蔡某借机逃盗，案情虽明，人却早已无踪。宝珠生日喜宴与聘才的遭窃之夜遥相对照，世间悲喜从不相让，热闹与凄凉往往只隔一墙之遥。",
      },
    ],
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    43: [
      {
        en: "Yuan Baozhu and Lu Sulan arrive to find Qinyan in a fog of anxiety. The moment they hear about the widow",
        zh: "宝珠与素兰闻知师娘索钱之事，立刻各有主意。素兰一拍手便断言：出师最妙！但三千两银子从何而来？二人你来我往，盘算着谁能替琴言出这笔钱。话锋一转，议及子云——怡园的徐子云素来慷慨，且对琴言颇有情谊。若能由他出面，以赎身之名将琴言从师娘手中赎出，既解了燃眉之急，又给琴言留了余地。谋议已定，众人心照不宣地去赏杏花，让这一桩关乎命运的密谋，在春花烂漫中悄然成形。",
      },
    ],
    50: [
      {
        en: "Midsummer in the capital: the heat sits on the city like a lid. Tian Chunhang is promised in marriage to Minister Su",
        zh: "盛夏炎炎，春航已与苏侯之女订下婚约，七夕完婚在即。刘文泽路过林春喜门口，顺道拜访，见他书室幽雅，芭蕉叶上密密写满了练笔的字，院中支着小卷篷，盆景点缀其间。春喜将团扇递来，上面画着螳螂捕蝉，栩栩如生，叫文泽看得目瞪口呆。原来春喜这几个月悄悄钻研绘画，已大有长进，连素来挑剔的瑶卿也甘拜下风。文泽索扇不得，讨来一把，心满意足而去。才情与风雅，在这一片消夏的蝉声里，轻盈地流转。",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
  },
  "char-24": {
    7: [
      {
        en: "Two days after the Suzhou Guild Hall performance, Ziyu is still entirely in thrall to the memory of Qinguan. He ranks and re-ranks the celebrated performers in his mind, always arriving at the same conclusion: Qinguan stands alone. His reverie is interrupted by an odd discovery — two characters scratched out of his poem \\",
        zh: "姑苏会馆那出戏后，子玉将琴官的身影足足想了两日，反复比较苏蕙芳、陆素兰诸人，最终仍以琴官为首。他自问：琴官若非生在梨园，天下人怎得瞻仰这样的人？由此生出一番",
      },
    ],
    13: [
      {
        en: "After Yan Zhongqing",
        zh: "颜仲清激怒春航后，暗中托王恂送去百金助其度日。走投无路的春航寄食于高品处，却仍每日守在联锦班戏园门口，痴痴等候苏蕙芳。蕙芳留意到这个神清骨秀、衣衫憔悴却不失风雅的身影，心生怜念，终于叫人将他请进门来。二人于花满院落的小客厅中初次对坐，蕙芳吐属雅洁，春航感激涕零，两人相视无言，默契已生。蕙芳引春航入内室，陈设精雅，仇十洲画悬壁，三蓝绒毯铺地，一尘不染。春航甫一踏入，便知此后心上的归处。",
      },
    ],
    14: [
      {
        en: "Huifang dresses Chunhang in fresh clothes from her own wardrobe, and when she holds up a mirror so they can see themselves side by side, two luminous faces reflected together, Chunhang feels a sudden surge of longing that he wrestles down with conscious effort, reminding himself that she is his companion in hardship, not an object of desire. Huifang, seemingly unaware, picks up his travel manuscript",
        zh: "蕙芳为春航换上新衣，二人对镜而照，两张玉颜并影，春航情动而自持，强压邪念，敛神还礼。蕙芳取出春航随身携带的诗稿《燕台旅稿》，轻声吟诵其中一首香艳的七言古风，句句点评精妙，知音之态令春航惊叹。诗中有\\",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    17: [
      {
        en: "That evening Gao Pin, Shi Nanxiang, Yan Zhongqing, and Wang Xun arrive together at Ziyu",
        zh: "入夜后，高品、史南湘、颜仲清、王恂相携来访，众人在子玉书房中畅谈，提议趁苏蕙芳生日，邀集众名士与当红相公在刘文泽宅中大聚，共成一段风雅佳话。王恂点将，将琴言也列入名单，子玉心中一动，却又惦记着琴言病体未愈，忧喜交织。大家定妥人数、席位，子玉独自挥毫，写就一封情文并茂的邀帖，送与怡园的徐子云和萧次贤，措辞既典雅又真挚。春航自与蕙芳订交后闭门读书，名动京师，又经高品从中调解，与仲清重归于好。众缘汇聚，花会前夕，一股欢欣的期待弥漫于字里行间。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    32: [
      {
        en: "After a week of relentless autumn rain the sky finally clears, and the examination results are due within days. Every candidate in the capital is sleepless with anticipation — even the usually composed Gao Pin and Tian Chunhang lie awake through the night, swapping stories of divination disasters from previous sittings. Gao Pin recalls a hexagram that seemed to promise first place on the list, yet delivered nothing; both men laugh ruefully at the unreliability of omens. Su Huifang, waiting alone at home, proves more agitated than the candidates themselves: she dismisses a visiting official, presses every servant for news, and spends the afternoon pacing between the couch and the window. When the runners finally arrive, the results bring sharply mixed fortune — Gao Pin",
        zh: "秋雨连绵七八日后初晴，贡院放榜在即，场中士子无不魂不守舍、寝食难安。高品与田春航彻夜长谈，忆起往年问卜中举的笑话，苦中作乐。苏蕙芳比春航更为焦急，坐卧不宁，遣人打探消息，心中挂念远胜儿女私情。报喜声终于传来，几家欢喜几家愁——高品榜上有名，春航名落孙山。消息在怡园迅速传开，众人或贺或慰。蕙芳闻讯，百感交集，深知才情不敌八股，科场公道从来难料，惟将一腔情义深埋心底。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    47: [
      {
        en: "The examination results arrive like a spring thunderclap: Tian Chunhang has taken first place in the palace examination—zhuangyuan, top of the empire—and Shi Nanxiang has placed fourth in the second tier. Su Huifang, who staked years of earnings and devotion on Chunhang",
        zh: "南湘、春航双双高中进士，蕙芳欣喜之余，为二人张罗搬迁事宜。子云慷慨邀请入住怡园，奈何春航急于接家眷，另觅新宅。而奚十一病愈后旧习难改，伤处留下隐疾，内外皆难应酬，苦不堪言。一日去宏济寺谢恩，偶见寺旁新开了一家奇特医馆，院中立着各色怪人，隐隐透出一股市井江湖气——奚十一的那桩荒唐求医之旅，就此埋下伏笔。",
      },
    ],
    48: [
      {
        en: "The Garden of Ease prepares for a departure. Qu Daoweng has received his appointment to Nanchang and will leave within days, taking Qinxian with him. The farewell banquets multiply—scholars, performers, friends who have shared the garden",
        zh: "屈道翁领了南昌通判，怡园即将失去这对父子。名士们轮流为琴仙饯行，依依惜别。春航高中状元，苏侯一见倾心，欲招为东床，惜已有妻，遗憾而止。不料家书传来噩耗：春航之妻已于二月间暴病亡故。悲喜交集之际，老母与舅父又将同赴京城。蕙芳一力操持新宅事宜，感情深厚却身份尴尬，冷暖自知。春航命下人从此称蕙芳为",
      },
    ],
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
    59: [
      {
        en: "A hundred days of mourning have stripped Qinyan of nearly everything. The money is gone; the warm clothes are pawned. Old retainer Liu Xi sets up a modest fruit stall at the temple gate while Qinyan paints flowers on raw paper to sell to passers-by — and discovers, to his own surprise, that his brushwork commands real admiration: a peony sells for two hundred cash, a plum blossom for a hundred and fifty, and a customer commissions a full eight-panel screen. Then Historian Hou arrives, all unctuous concern and subtle pressure, offering money and a comfortable room in his household — with unmistakable intent. Qinyan receives him with a face like winter ice and sends him away unthanked, choosing dignified poverty over purchased comfort. Letters go out to Mei Ziyu, Xu Ziyun, and Su Huifang — careful, heartfelt, each one a lifeline cast into the distance.",
        zh: "琴仙在南京护国寺为道翁守灵已逾百日，盘缠耗尽，衣单食薄。刘喜在庙门口摆摊卖果，琴仙则以丹青糊口，在生纸上画花卉出售，竟颇受好评。道貌岸然的侯太史携金登门，企图趁人之危笼络琴仙，被琴仙冷脸相拒，其虚伪嘴脸暴露无遗。琴仙写信向子玉、子云、蕙芳等人求援，心中对子玉的牵念，如寒冬里一炉炭火，始终不曾熄灭。",
      },
    ],
  },
  "char-25": {
    7: [
      {
        en: "Two days after the Suzhou Guild Hall performance, Ziyu is still entirely in thrall to the memory of Qinguan. He ranks and re-ranks the celebrated performers in his mind, always arriving at the same conclusion: Qinguan stands alone. His reverie is interrupted by an odd discovery — two characters scratched out of his poem \\",
        zh: "姑苏会馆那出戏后，子玉将琴官的身影足足想了两日，反复比较苏蕙芳、陆素兰诸人，最终仍以琴官为首。他自问：琴官若非生在梨园，天下人怎得瞻仰这样的人？由此生出一番",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    22: [
      {
        en: "Lu Sulan devises a scheme to reunite the two lovesick young men: she hires a tastefully furnished canal boat under the pretext of a leisure excursion, and sends an invitation to the Mei household in Xu Ziyun",
        zh: "为成全琴言与子玉的再会，陆素兰苦心筹划，借逛运河为名，悄悄租下一艘装点雅致的船，又以徐子云名义致书梅宅。子玉见信，沉锁心头的愁雾顿散，病已去了九分，欣然回函应约。然而素兰前往传喜讯时，却撞见琴言寓中险象横生——奚十一的爪牙登门撒野，粗声喝骂，威逼琴言出来陪酒。琴言的家人跪地求饶，送钱了事方才打发走这伙恶人。一喜一惊之间，运河相会的期盼愈发显得珍贵而脆弱。",
      },
    ],
    24: [
      {
        en: "Over wine, Yan Zhongqing and Wang Xun trade the season",
        zh: "颜仲清与王恂把盏闲话，将近日京城诸事一一道来：苏蕙芳以妙计灌醉骚扰的潘三银匠，令其丑态百出；李元茂土窑子遭劫的笑话已传遍街巷；魏聘才仗势横行、派人骚扰琴言的卑劣行径也在素兰处坐实。二人继而谈及梅子玉与杜琴言那段说不清的情缘——正月初见惊鸿一瞥，怡园灯谜定情，船上久别重逢，情根何处而生，令人费解而又感叹。仲清盛赞琴言之情深，王恂则叹世间知音难求。一席谈话，将诸人命运与性情勾连，前因后果脉络渐明。",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    33: [
      {
        en: "As the year draws to a close, Shi Nanxiang departs Beijing to take up his new posting, leaving the circle of intimates noticeably thinner. Mei Ziyu, setting out on a city errand he abandons halfway, chances upon Yuan Baozhu in a lane jammed with camels and carriages. Baozhu leads him to his exquisite study, the \\",
        zh: "腊月时节，史南湘随任出京，众名士相送，知己又少了几人。梅子玉偶遇袁宝珠，被邀入其精致书斋「小琅室」，见壁悬名迹、案置梅花，雅洁脱俗。两人煮雪烹茶，又邀陆素兰同来，共作清谈雅叙。宝珠忆及落难画师金粟，含泪长叹，子玉随口触动其心事，忙以竹石之语转圜解围。席间子玉婚事被一语道破，他只淡淡推说家信未回，神情间却另有隐衷。窗外寒梅暗香，室内风雅依旧，然离别与羁绊的况味，早已渗入每一壶茶香之中。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
    43: [
      {
        en: "Yuan Baozhu and Lu Sulan arrive to find Qinyan in a fog of anxiety. The moment they hear about the widow",
        zh: "宝珠与素兰闻知师娘索钱之事，立刻各有主意。素兰一拍手便断言：出师最妙！但三千两银子从何而来？二人你来我往，盘算着谁能替琴言出这笔钱。话锋一转，议及子云——怡园的徐子云素来慷慨，且对琴言颇有情谊。若能由他出面，以赎身之名将琴言从师娘手中赎出，既解了燃眉之急，又给琴言留了余地。谋议已定，众人心照不宣地去赏杏花，让这一桩关乎命运的密谋，在春花烂漫中悄然成形。",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
  },
  "char-26": {
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
  },
  "char-27": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-28": {
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
  },
  "char-29": {
    37: [
      {
        en: "Reeling from a humiliating encounter with Wei Pincai the previous afternoon, Du Qinyan returns to his room in Hua",
        zh: "琴言昨日探望聘才，却遭算计受辱，含恨而归，彻夜哭泣，悔不当初。翌日清晨，徐子云遣人相召，言梅子玉已先到园中等候。梅崦中，早春的茶花与玉兰正盛，梅花尚未开遍。子云提议以十日梅叙会友，不拘人数多寡，随兴而至。萧次贤纵论时人消遣之道，从赌博看戏到登台唱曲，信口谑语，满座皆笑。王恂以「人中花与花中花孰美」为题，引得众人争辩，子云笑而不答。少顷宝珠、桂保到来，席间众人谈书论艺，月下品花，怡园一日，竟如世外桃源，暂将城中一切烦扰隔绝于梅香之外。",
      },
    ],
  },
  "char-30": {
    50: [
      {
        en: "Midsummer in the capital: the heat sits on the city like a lid. Tian Chunhang is promised in marriage to Minister Su",
        zh: "盛夏炎炎，春航已与苏侯之女订下婚约，七夕完婚在即。刘文泽路过林春喜门口，顺道拜访，见他书室幽雅，芭蕉叶上密密写满了练笔的字，院中支着小卷篷，盆景点缀其间。春喜将团扇递来，上面画着螳螂捕蝉，栩栩如生，叫文泽看得目瞪口呆。原来春喜这几个月悄悄钻研绘画，已大有长进，连素来挑剔的瑶卿也甘拜下风。文泽索扇不得，讨来一把，心满意足而去。才情与风雅，在这一片消夏的蝉声里，轻盈地流转。",
      },
    ],
  },
  "char-31": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
  },
  "char-32": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-33": {
    40: [
      {
        en: "The moral ledger begins at last to balance. Xi Shiyi, who engineered Du Qinyan",
        zh: "奚十一曾以琴言之事大闹上门，种下的恶因如今开始结出报应之果。他弃旧怜新、玩弄情义，春兰、巴英官皆对其寒心，私下历数他昔日种种不堪，尤其那只诓人的机关桶子，不知害了多少无辜。奚十一一日独自入寺，见得月酣睡，意图轻薄，不料得月腹泻骤发，秽物喷涌，弄得狼狈不堪。另一边厢，潘其观长期于寺庙赌场厮混，输多赢少，欠下烂账，终至众怒，被人揪住痛打，颜面尽失。两人一臭一打，皆因平日作恶多端，天道轮回，报应不爽，令旁观者拍手称快。",
      },
    ],
    58: [
      {
        en: "The wheel turns against Xi Shiyi. The man who scattered silver like chaff through the pleasure quarters now finds himself utterly broke: his family",
        zh: "表面风流的奚十一，如今债台高筑，家道中落，洋行倒闭，盐场漂没，向潘其观借贷被迫立下万两欠票，狼狈至极。深夜独自吞云吐雾，菊花无意间窥见下人春兰的丑事，心中既恼又酸，五味杂陈。当年呼风唤雨的公子哥，如今走头无路，色与财的双重衰落同步上演，世事无常，因果昭彰，报应之弦已悄然绷紧。",
      },
    ],
  },
  "char-39": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
    26: [
      {
        en: "Hua Guangsu returns to the mansion after nightfall to find his ten pearl-named maids arranged in white silk, fanning and tending him with practiced grace. He dictates a recipe for a cooling medicinal porridge — each flower-dew and medicinal powder measured to the grain — while the girls joke and tussle in the lamplight, a portrait of gilded domesticity. Once the household settles, Hua summons his confidential attendant Lin Shanzhi and dispatches him to Wei Pincai",
        zh: "华公子夜归府中，在星栊卧室与十珠侍女把玩消夏，调配防风粥，笑语盈盈，奢靡生活的细节铺陈得如画卷般精致。入夜后公子召林珊枝入内室，密谈收留杜琴言之事。珊枝奉命前往魏聘才书房商议，聘才已向戏班老板长庆施压，谋划将琴言以",
      },
    ],
    36: [
      {
        en: "On the Lantern Festival, Hua Guangsu orders Du Qinyan to perform. Qinyan is unwell and burdened with grief; during the performance, moved beyond control by the scene",
        zh: "元宵佳节，华公子命琴言登台演戏。琴言身体欠安，心中更是悲怆，演至动情处竟真情流露、泪洒台上，华公子大为不悦，将其痛斥一番，此后数日将其晾在一旁。琴言独居小院，对着盛开的绿萼梅与红梅，满心思念怡园旧日时光，又恨奚十一当年陷害之仇。正凝神伤感间，林珊枝带来噩耗——其师傅于睡梦中猝然离世。琴言强忍悲痛，趁机出府奔丧，然华公子叮嘱不可久留，须事毕即回。这一场出走，是笼中鸟短暂的振翅，归处依然是那四面高墙。",
      },
    ],
  },
  "char-40": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-41": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-42": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
    26: [
      {
        en: "Hua Guangsu returns to the mansion after nightfall to find his ten pearl-named maids arranged in white silk, fanning and tending him with practiced grace. He dictates a recipe for a cooling medicinal porridge — each flower-dew and medicinal powder measured to the grain — while the girls joke and tussle in the lamplight, a portrait of gilded domesticity. Once the household settles, Hua summons his confidential attendant Lin Shanzhi and dispatches him to Wei Pincai",
        zh: "华公子夜归府中，在星栊卧室与十珠侍女把玩消夏，调配防风粥，笑语盈盈，奢靡生活的细节铺陈得如画卷般精致。入夜后公子召林珊枝入内室，密谈收留杜琴言之事。珊枝奉命前往魏聘才书房商议，聘才已向戏班老板长庆施压，谋划将琴言以",
      },
    ],
    36: [
      {
        en: "On the Lantern Festival, Hua Guangsu orders Du Qinyan to perform. Qinyan is unwell and burdened with grief; during the performance, moved beyond control by the scene",
        zh: "元宵佳节，华公子命琴言登台演戏。琴言身体欠安，心中更是悲怆，演至动情处竟真情流露、泪洒台上，华公子大为不悦，将其痛斥一番，此后数日将其晾在一旁。琴言独居小院，对着盛开的绿萼梅与红梅，满心思念怡园旧日时光，又恨奚十一当年陷害之仇。正凝神伤感间，林珊枝带来噩耗——其师傅于睡梦中猝然离世。琴言强忍悲痛，趁机出府奔丧，然华公子叮嘱不可久留，须事毕即回。这一场出走，是笼中鸟短暂的振翅，归处依然是那四面高墙。",
      },
    ],
  },
  "char-45": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-47": {
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
  },
  "char-48": {
    2: [
      {
        en: "Ziyu returns home to find his father entertaining Wang Wenzheng, the two men trading news of the upcoming New Year banquet and debating how best to find a suitable match for Wang",
        zh: "子玉随父归家，撞见父亲正陪着王文辉议事，话题从同年团拜选戏，到给王家次女物色佳婿，随口又论起择婿之难。不多时，两张红帖送到：一是世侄魏聘才，一是西席之子李元茂，均从外省远道投奔而来。魏聘才身材瘦小、伶俐油滑，叩头见礼时那股子讨巧劲儿一览无余；李元茂则身形笨浊、近视木讷，行礼如拜神像，咕噜了几句竟无人听懂。梅学士将二人安置于后院厢房，命子玉引他们往书房见老师性全。那厢魏聘才在账房翻到一册《曲台花选》，将八位名旦的姓名风姿一一记熟，心里盘算着何时能亲眼一睹。京城的繁华与诱惑，已悄悄向这位新来的外省少年张开了怀抱。",
      },
    ],
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
  },
  "char-53": {
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
  },
  "char-55": {
    8: [
      {
        en: "Ziyu returns from his dinner to find Wei Pincai and Li Yuanmao long gone. The two had seized their opportunity the moment he left: Pincai talked Yuanmao into raiding his father",
        zh: "子玉赴宴归来已是深夜，魏聘才与李元茂却不见踪影。原来二人趁子玉不在，一合计便打起了看戏的主意。囊中羞涩，聘才怂恿元茂偷取父亲箱中银两，前后凑了八九两，雇车直奔太和园联锦班。元茂初次进戏园，看得眼花缭乱，不防绊倒在门口长凳上，恰被一人双手扶起——此人正是华光宿，自此引出一条险恶支线。聘才领着元茂挤进官座，一群相公围着嘻嘻笑笑，正是他心心念念的花花世界。戏毕上馆子饮酒，口脂花香、莺声燕语，聘才如鱼得水。岂料结账时发现银两不翼而飞，二人狼狈不堪。与此同时，戏场之中另有一番情节——子玉之外，另几位公子的喜好与心思亦借看戏之机一一呈现，梨园世界的人情冷暖在台上台下同步上演。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
    20: [
      {
        en: "As the Dragon Boat Festival approaches, Xu Ziyun and Xiao Cixian host a garden excursion at the Garden of Ease for the remaining scholars — Wang Xun and Yan Zhongqing are held back by a birthday celebration at the Wang household. The four who come mount horses and ride through a landscape of stacked crags, ancient pines, and the summit pavilion called",
        zh: "端午前夕，徐子云与萧次贤邀众名士至怡园赏榴花、观龙舟。王恂、仲清因家中有事未能成行，子云、次贤、春航、南湘四人骑马穿越园中胜景，峭壁、古松、缥缈亭、十亩方塘，一一入目，春航诗兴大发。停云叙雨之斋内，一副华光宿手书的对联令众人刮目相看，子云为其辩护，指出豪门公子也自有胸中丘壑。不多时，宝珠、蕙芳、素兰、漱芳等人乘画舫摇橹而来，榴花映水，彩裙点波，五位名旦登岸与众名士汇聚，水榭之上，一幅绝世的端午行乐图就此铺展开来。",
      },
    ],
    25: [
      {
        en: "Late summer finds Hua Guangsu hosting an elaborate banquet at the Garden of Ease, with Xu Ziyun and Liu Wenze among the few who actually appear. Ziyun leads Wenze through the garden",
        zh: "夏末时节，华公子在怡园大摆宴席，邀请刘文泽、徐子云等人观赏新排的堂会戏。园中荷香满院，含万楼气宇轩昂，子云一一介绍园中布置之巧。然而约好的名士们借故缺席：子玉旧病复发，史竹君醉伤呕血，其余诸人亦各有推辞。文泽与张仲雨赴约，席间谈论华公子性情，话锋转向萧次贤在后台指点演员声律的细节，气氛悠闲而隐有暗流。名士圈子中，与华府的若即若离，折射出各人不同的处世态度与内心算盘。",
      },
    ],
    26: [
      {
        en: "Hua Guangsu returns to the mansion after nightfall to find his ten pearl-named maids arranged in white silk, fanning and tending him with practiced grace. He dictates a recipe for a cooling medicinal porridge — each flower-dew and medicinal powder measured to the grain — while the girls joke and tussle in the lamplight, a portrait of gilded domesticity. Once the household settles, Hua summons his confidential attendant Lin Shanzhi and dispatches him to Wei Pincai",
        zh: "华公子夜归府中，在星栊卧室与十珠侍女把玩消夏，调配防风粥，笑语盈盈，奢靡生活的细节铺陈得如画卷般精致。入夜后公子召林珊枝入内室，密谈收留杜琴言之事。珊枝奉命前往魏聘才书房商议，聘才已向戏班老板长庆施压，谋划将琴言以",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    30: [
      {
        en: "Punished for slipping out to see Ziyu, Qinyan is moved to the inner apartments of the Hua mansion — a world sealed from the outside as completely as a birdcage. Sitting alone beside the crystal rockery, he watches a clump of garden balsam and finds his own image in it: flowers transplanted into gilded pots lose the companionship of their roots and the freedom of wind and rain. He who laughs on command, weeps in secret, and is forbidden to choose even his own expression is no different. He thinks of Ziyu — recovering now, perhaps, but cut off from any word — and fears the silence itself will bring the illness back. Tears fall. Weeks pass. By the twelfth of the eighth month, the osmanthus is in bloom and Hua Guangsu has arranged a grand Mid-Autumn eve banquet in the West Garden, complete with five troupes performing simultaneously under festive lanterns. Xu Ziyun, Xiao Cixian, and Liu Wenze make their way to the brilliantly lit estate while Ziyu, bound by kinship-avoidance rules, sits alone in his study with no company but the moon — its cold light falling equally on the feast he cannot attend and the face he cannot reach.",
        zh: "琴言回府后因私自外出被华公子迁入内室，与外界全然隔绝。他独坐水晶山畔，望着一丛凤仙花沉思：花被折入金盆，失了根本，正如自己身陷华府，笑不敢笑，哭不敢哭。想及子玉病虽将愈，却内外音讯断绝，旧情复萌恐又成病，不禁泪流满面。转眼已是八月，桂香盈院，华公子筹备中秋前夕的西园夜宴，召来子云、次贤、文泽等人赏灯观戏。子玉因与华公子有亲属回避之例，只能枯坐书斋，对月独愁，与那灯火辉煌、丝竹管弦的夜宴咫尺天涯。",
      },
    ],
    31: [
      {
        en: "As Hua Guangsu",
        zh: "华公子酒宴将散，命众旦各展所长——琴箫合奏、丹青题诗、笙琵竞鸣、猜谜舞剑，雅趣横生。杜琴言却托病离席，独坐屏后，难掩心中悲凉。座中文人互相品评书法诗词，梅子玉与众人就翰墨之道争辩不休，一时高论迭出。夜深宴罢，子云提议以戏文题目行令，众人竞猜，热闹喧天。琴言困于繁华之中，愈发思念旧日自由，悲从中来，暗自垂泪，乐声与愁绪交织，欢笑背后尽是难言的身世之感。",
      },
    ],
    36: [
      {
        en: "On the Lantern Festival, Hua Guangsu orders Du Qinyan to perform. Qinyan is unwell and burdened with grief; during the performance, moved beyond control by the scene",
        zh: "元宵佳节，华公子命琴言登台演戏。琴言身体欠安，心中更是悲怆，演至动情处竟真情流露、泪洒台上，华公子大为不悦，将其痛斥一番，此后数日将其晾在一旁。琴言独居小院，对着盛开的绿萼梅与红梅，满心思念怡园旧日时光，又恨奚十一当年陷害之仇。正凝神伤感间，林珊枝带来噩耗——其师傅于睡梦中猝然离世。琴言强忍悲痛，趁机出府奔丧，然华公子叮嘱不可久留，须事毕即回。这一场出走，是笼中鸟短暂的振翅，归处依然是那四面高墙。",
      },
    ],
    41: [
      {
        en: "Spring is at its most lavish in the Garden of Ease. The young master of the Hua household invites his wife aboard a lacquered pleasure boat and drifts through arched bridges and willow-lined causeways, pausing to admire the pink-and-white peach blossoms of Liuxian Pavilion while the water chimes against copper fittings like a set of jade chimes. The maidservants Jin Ling and Yu Ling take the oars with more enthusiasm than skill, spinning the craft in helpless circles and drenching themselves—sending the whole party into laughter. Wine and sweetmeats are laid out in a garden pavilion, and for one luminous afternoon the world seems perfectly arranged. Yet beneath the festivity Hua",
        zh: "春光正盛，华公子携夫人泛舟园中，穿桥过堤，赏碧桃、听流水，好不惬意。然琴言假期已满迟迟未归，公子心存挂念。游罢留仙院，宴席摆开，觥筹交错间，众人谈笑风生。丫鬟金龄、玉龄划桨忙乱，险些翻船，惹得满船欢笑。这一片春日浮生，歌舞笙箫，衬得园外的波谲云诡更显遥远——不知那位令公子朝思暮想的人，此刻身在何处。",
      },
    ],
    53: [
      {
        en: "A painted fan sets two worlds in motion. The young lord Hua calls Lu Sulan to his garden pavilion to reclaim a peach-blossom fan inadvertently given away — but the errand becomes an occasion for art. Surrounded by autumn colour and the attentive silence of his garden, he asks Sulan to compose a lyric in the demanding",
        zh: "华公子索还题有桃花画的团扇，陆素兰携扇赴约，华公子命其题写《梁州序》词以赏花。素兰含羞援笔，词成字美，华公子大加叹赏，双扇互换，题诗赠别，一段风雅情缘就此结下。与此同时，蕙芳、宝珠、兰保等人齐聚商议，打算借怡园一角开设古董书画铺，盘算着分取度香园旧藏，众人畅谈兴致勃勃，一派生机盎然。",
      },
    ],
  },
  "char-56": {
    26: [
      {
        en: "Hua Guangsu returns to the mansion after nightfall to find his ten pearl-named maids arranged in white silk, fanning and tending him with practiced grace. He dictates a recipe for a cooling medicinal porridge — each flower-dew and medicinal powder measured to the grain — while the girls joke and tussle in the lamplight, a portrait of gilded domesticity. Once the household settles, Hua summons his confidential attendant Lin Shanzhi and dispatches him to Wei Pincai",
        zh: "华公子夜归府中，在星栊卧室与十珠侍女把玩消夏，调配防风粥，笑语盈盈，奢靡生活的细节铺陈得如画卷般精致。入夜后公子召林珊枝入内室，密谈收留杜琴言之事。珊枝奉命前往魏聘才书房商议，聘才已向戏班老板长庆施压，谋划将琴言以",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    42: [
      {
        en: "The ink on the mourning documents for the troupe master Changging is barely dry before his widow turns her attention to money. Cornering Qinyan after breakfast, she lays out the household",
        zh: "师父长庆刚入土，师娘便算起了经济账。她拦住琴言，开口便要一月二百吊钱的养膳，言辞软硬兼施，暗指若无钱则出师无望，此生便要挂在她门下。琴言进退两难：既不知华府每月给了多少，又难以开口向公子讨要，更不敢轻易答应一个空头承诺。师娘步步紧逼，琴言愁眉苦脸，只得以",
      },
    ],
  },
  "char-66": {
    48: [
      {
        en: "The Garden of Ease prepares for a departure. Qu Daoweng has received his appointment to Nanchang and will leave within days, taking Qinxian with him. The farewell banquets multiply—scholars, performers, friends who have shared the garden",
        zh: "屈道翁领了南昌通判，怡园即将失去这对父子。名士们轮流为琴仙饯行，依依惜别。春航高中状元，苏侯一见倾心，欲招为东床，惜已有妻，遗憾而止。不料家书传来噩耗：春航之妻已于二月间暴病亡故。悲喜交集之际，老母与舅父又将同赴京城。蕙芳一力操持新宅事宜，感情深厚却身份尴尬，冷暖自知。春航命下人从此称蕙芳为",
      },
    ],
  },
  "char-67": {
    59: [
      {
        en: "A hundred days of mourning have stripped Qinyan of nearly everything. The money is gone; the warm clothes are pawned. Old retainer Liu Xi sets up a modest fruit stall at the temple gate while Qinyan paints flowers on raw paper to sell to passers-by — and discovers, to his own surprise, that his brushwork commands real admiration: a peony sells for two hundred cash, a plum blossom for a hundred and fifty, and a customer commissions a full eight-panel screen. Then Historian Hou arrives, all unctuous concern and subtle pressure, offering money and a comfortable room in his household — with unmistakable intent. Qinyan receives him with a face like winter ice and sends him away unthanked, choosing dignified poverty over purchased comfort. Letters go out to Mei Ziyu, Xu Ziyun, and Su Huifang — careful, heartfelt, each one a lifeline cast into the distance.",
        zh: "琴仙在南京护国寺为道翁守灵已逾百日，盘缠耗尽，衣单食薄。刘喜在庙门口摆摊卖果，琴仙则以丹青糊口，在生纸上画花卉出售，竟颇受好评。道貌岸然的侯太史携金登门，企图趁人之危笼络琴仙，被琴仙冷脸相拒，其虚伪嘴脸暴露无遗。琴仙写信向子玉、子云、蕙芳等人求援，心中对子玉的牵念，如寒冬里一炉炭火，始终不曾熄灭。",
      },
    ],
  },
  "char-72": {
    22: [
      {
        en: "Lu Sulan devises a scheme to reunite the two lovesick young men: she hires a tastefully furnished canal boat under the pretext of a leisure excursion, and sends an invitation to the Mei household in Xu Ziyun",
        zh: "为成全琴言与子玉的再会，陆素兰苦心筹划，借逛运河为名，悄悄租下一艘装点雅致的船，又以徐子云名义致书梅宅。子玉见信，沉锁心头的愁雾顿散，病已去了九分，欣然回函应约。然而素兰前往传喜讯时，却撞见琴言寓中险象横生——奚十一的爪牙登门撒野，粗声喝骂，威逼琴言出来陪酒。琴言的家人跪地求饶，送钱了事方才打发走这伙恶人。一喜一惊之间，运河相会的期盼愈发显得珍贵而脆弱。",
      },
    ],
    27: [
      {
        en: "Xi Shiyi — the",
        zh: "奚十一重金归来，与张仲雨、潘其观日日把酒看戏，肆意妄为。此人横行无忌，人称",
      },
    ],
    36: [
      {
        en: "On the Lantern Festival, Hua Guangsu orders Du Qinyan to perform. Qinyan is unwell and burdened with grief; during the performance, moved beyond control by the scene",
        zh: "元宵佳节，华公子命琴言登台演戏。琴言身体欠安，心中更是悲怆，演至动情处竟真情流露、泪洒台上，华公子大为不悦，将其痛斥一番，此后数日将其晾在一旁。琴言独居小院，对着盛开的绿萼梅与红梅，满心思念怡园旧日时光，又恨奚十一当年陷害之仇。正凝神伤感间，林珊枝带来噩耗——其师傅于睡梦中猝然离世。琴言强忍悲痛，趁机出府奔丧，然华公子叮嘱不可久留，须事毕即回。这一场出走，是笼中鸟短暂的振翅，归处依然是那四面高墙。",
      },
    ],
    40: [
      {
        en: "The moral ledger begins at last to balance. Xi Shiyi, who engineered Du Qinyan",
        zh: "奚十一曾以琴言之事大闹上门，种下的恶因如今开始结出报应之果。他弃旧怜新、玩弄情义，春兰、巴英官皆对其寒心，私下历数他昔日种种不堪，尤其那只诓人的机关桶子，不知害了多少无辜。奚十一一日独自入寺，见得月酣睡，意图轻薄，不料得月腹泻骤发，秽物喷涌，弄得狼狈不堪。另一边厢，潘其观长期于寺庙赌场厮混，输多赢少，欠下烂账，终至众怒，被人揪住痛打，颜面尽失。两人一臭一打，皆因平日作恶多端，天道轮回，报应不爽，令旁观者拍手称快。",
      },
    ],
    47: [
      {
        en: "The examination results arrive like a spring thunderclap: Tian Chunhang has taken first place in the palace examination—zhuangyuan, top of the empire—and Shi Nanxiang has placed fourth in the second tier. Su Huifang, who staked years of earnings and devotion on Chunhang",
        zh: "南湘、春航双双高中进士，蕙芳欣喜之余，为二人张罗搬迁事宜。子云慷慨邀请入住怡园，奈何春航急于接家眷，另觅新宅。而奚十一病愈后旧习难改，伤处留下隐疾，内外皆难应酬，苦不堪言。一日去宏济寺谢恩，偶见寺旁新开了一家奇特医馆，院中立着各色怪人，隐隐透出一股市井江湖气——奚十一的那桩荒唐求医之旅，就此埋下伏笔。",
      },
    ],
    58: [
      {
        en: "The wheel turns against Xi Shiyi. The man who scattered silver like chaff through the pleasure quarters now finds himself utterly broke: his family",
        zh: "表面风流的奚十一，如今债台高筑，家道中落，洋行倒闭，盐场漂没，向潘其观借贷被迫立下万两欠票，狼狈至极。深夜独自吞云吐雾，菊花无意间窥见下人春兰的丑事，心中既恼又酸，五味杂陈。当年呼风唤雨的公子哥，如今走头无路，色与财的双重衰落同步上演，世事无常，因果昭彰，报应之弦已悄然绷紧。",
      },
    ],
  },
  "char-73": {
    27: [
      {
        en: "Xi Shiyi — the",
        zh: "奚十一重金归来，与张仲雨、潘其观日日把酒看戏，肆意妄为。此人横行无忌，人称",
      },
    ],
    40: [
      {
        en: "The moral ledger begins at last to balance. Xi Shiyi, who engineered Du Qinyan",
        zh: "奚十一曾以琴言之事大闹上门，种下的恶因如今开始结出报应之果。他弃旧怜新、玩弄情义，春兰、巴英官皆对其寒心，私下历数他昔日种种不堪，尤其那只诓人的机关桶子，不知害了多少无辜。奚十一一日独自入寺，见得月酣睡，意图轻薄，不料得月腹泻骤发，秽物喷涌，弄得狼狈不堪。另一边厢，潘其观长期于寺庙赌场厮混，输多赢少，欠下烂账，终至众怒，被人揪住痛打，颜面尽失。两人一臭一打，皆因平日作恶多端，天道轮回，报应不爽，令旁观者拍手称快。",
      },
    ],
    58: [
      {
        en: "The wheel turns against Xi Shiyi. The man who scattered silver like chaff through the pleasure quarters now finds himself utterly broke: his family",
        zh: "表面风流的奚十一，如今债台高筑，家道中落，洋行倒闭，盐场漂没，向潘其观借贷被迫立下万两欠票，狼狈至极。深夜独自吞云吐雾，菊花无意间窥见下人春兰的丑事，心中既恼又酸，五味杂陈。当年呼风唤雨的公子哥，如今走头无路，色与财的双重衰落同步上演，世事无常，因果昭彰，报应之弦已悄然绷紧。",
      },
    ],
  },
  "char-75": {
    34: [
      {
        en: "Having been expelled from Hua Guangsu",
        zh: "魏聘才从华府出走，寄居唐和尚处，债台高筑，年关将近却囊空如洗。李元茂登门借钱，聘才当场抖出一叠债单自证穷困，两人相互倒苦水，不欢而散。入夜，聘才被唐和尚邀谈密事，言辞含糊，隐现算计之意。元茂厚颜留宿，借烟吃点心，呼奴唤婢，扰得聘才不得安宁。寺中气氛暧昧，金钱纠葛与人情算计交织其间，一干闲人在岁末寒夜中各打各的算盘，市井江湖的势利面孔，在这逼仄的禅房里显得格外分明。",
      },
    ],
    35: [
      {
        en: "The night",
        zh: "一夜之间，聘才寄存的箱笼、拜匣遭贼洗劫，金银细软悉数被盗，仅余几件棉衣和一块摔碎的洋表。众人趁月色搜查菜园，发现空箱弃于墙角，灌园伙计神秘失踪。唐和尚疑是内贼，将种菜人夫妇绑缚审问，老婆子哭天抢地。聘才清点损失逾千金，草草报了官，坊里几番审讯，终查明是那新来伙计蔡某借机逃盗，案情虽明，人却早已无踪。宝珠生日喜宴与聘才的遭窃之夜遥相对照，世间悲喜从不相让，热闹与凄凉往往只隔一墙之遥。",
      },
    ],
  },
  "char-77": {
    38: [
      {
        en: "Xu Ziyun hosts a more elevated gathering in the Meiyan pavilion: the distinguished elder scholar Qu Daosheng, lately retired from a magistracy in Jiangxi, is the guest of honour. Yan Zhongqing, Mei Ziyu, Tian Chunhang, and Shi Nanxiang attend as company; Yuan Baozhu, Su Huifang, and Lu Sulan serve wine and hold ink-stones at the table",
        zh: "徐子云在梅崦设宴，请来老名士屈道生，颜仲清、梅子玉、田春航等作陪，宝珠、蕙芳、素兰等名旦侍席。屈公身世坎坷，连丁九年忧、宦游四方，以诗文名重一时，时人比之杜少陵、孟东野。席间屈公细察子玉，见其温润儒雅、气象冲虚，心中大喜，暗赞「梅铁庵可为有子矣」。酒酣之际，众人就书法源流与诗歌正统展开一场高谈阔论：颜仲清主张碑帖之别，子玉援引古例力辩，屈公从容裁断，见识深远，令众人叹服。名旦们捧砚拂笺，亦得屈公一一品题，儒林与梨园在梅香中难得相遇，各见风流。",
      },
    ],
  },
  "char-78": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    11: [
      {
        en: "Returning home after seeing Mei Ziyu off, Xu Ziyun recounts to his wife Yuan the tender bond between Ziyu and Qinyan. When Yuan wonders aloud what advantage these dan performers hold over her own lovely maids, Ziyun offers a studied defence: they possess the face of a woman yet the body of a man, pleasing the eye while stilling desire — the best of both worlds. The next day Yuan herself rides out in silks and furs to the birthday banquet of Hua Guangsu",
        zh: "徐子云归宅，与袁夫人谈及梅子玉与琴言的深情，袁夫人将相公们与自家丫鬟相比，子云则娓娓辩称这些少年\\",
      },
    ],
    12: [
      {
        en: "Lady Yuan returns from the Hua banquet and recounts every drinking game to Ziyun, who secretly has all sixteen forfeits engraved and circulated among friends — the set becomes known as the",
        zh: "袁夫人归来，将华府宴上所行酒令一一讲与子云，子云背着夫人将那十六个令刻版印行，题诗传世，外号\\",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    29: [
      {
        en: "Lady Yan, learning Qinyan has come, sends him into Ziyu",
        zh: "颜夫人得知琴言登门，命其入内安慰病中的子玉。琴言战战兢兢走近床边，见子玉黄瘦憔悴，不禁泪如泉涌，滴落子玉脸上。子玉却在梦呓中念出",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
    41: [
      {
        en: "Spring is at its most lavish in the Garden of Ease. The young master of the Hua household invites his wife aboard a lacquered pleasure boat and drifts through arched bridges and willow-lined causeways, pausing to admire the pink-and-white peach blossoms of Liuxian Pavilion while the water chimes against copper fittings like a set of jade chimes. The maidservants Jin Ling and Yu Ling take the oars with more enthusiasm than skill, spinning the craft in helpless circles and drenching themselves—sending the whole party into laughter. Wine and sweetmeats are laid out in a garden pavilion, and for one luminous afternoon the world seems perfectly arranged. Yet beneath the festivity Hua",
        zh: "春光正盛，华公子携夫人泛舟园中，穿桥过堤，赏碧桃、听流水，好不惬意。然琴言假期已满迟迟未归，公子心存挂念。游罢留仙院，宴席摆开，觥筹交错间，众人谈笑风生。丫鬟金龄、玉龄划桨忙乱，险些翻船，惹得满船欢笑。这一片春日浮生，歌舞笙箫，衬得园外的波谲云诡更显遥远——不知那位令公子朝思暮想的人，此刻身在何处。",
      },
    ],
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
    54: [
      {
        en: "Grief makes a strange fuel. Haunted by a troubling dream of Du Qinyan — gaunt and sorrowful — and weighed down by longing, Mei Ziyu nonetheless marshals every resource of his brilliant mind for the Grand Examination. Across three demanding rounds he excels: eight classical essays, two grand fu compositions, and a final round of verse written in the exact rhymes of Du Fu and Han Yu. He places second overall and wins the palace examination outright — the youngest candidate in the cohort — earning appointment as a Hanlin Compiler. Yet there is no triumph in his bearing. Yan Zhongqing and Gao Pin have both failed; Wang Xun too. Ziyu visits each in turn with quiet apologies, as though his own success were somehow their loss. The examiner Su Hou, remembering Xu Ziyun",
        zh: "梅子玉在对琴言的日夜思念中强打精神，应博学鸿词考试。三场下来他文思泉涌，一路过关，最终高中第二，殿试更夺魁首，授翰林编修之职。仲清、高品相继落第，子玉非但不以己之荣耀自矜，反而深感愧疚，益加谦逊。颜夫人欣喜异常，子玉的婚事也在料理之中。昔日落魄书生，如今风光入仕，命运的齿轮悄然转动，情与功名的纠缠愈发难以分解。",
      },
    ],
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-83": {
    4: [
      {
        en: "An overnight snowfall blankets Beijing in five inches of white — a rare winter gift after months of dry winds. Tutor Li Xingquan, struck by the chill, retreats to bed, leaving Ziyu gloriously unsupervised. He settles into his study, the Twenty-Four Qin Chamber, to read Xie Huilian",
        zh: "腊雪忽至，一夜铺下五寸，琼装世界。先生性全感了风寒，卧床休养，子玉得了片刻自由，独坐二十四琴斋，翻阅谢惠连《雪赋》消遣。他唤来聘才、元茂，备下佳肴，共在雪景中小酌赏玩。席间他再问聘才琴官近况，聘才此时改了口风，将琴官的才情身份盛赞一番，令子玉愈加倾慕，心想若能在这雪天一见玉人，当真胜过瑶岛看花。饭后煮雪煎茶，别有韵味。不多时，颜仲清遣人送来书信一封，附有王恂初稿的《雪窗八咏》组诗——雪山、雪塔、雪屏、雪灯，逐一吟咏，工整华美。子玉阅后大为赞赏，当即着手应和，一股少年才子的诗情在雪天里自然流露，令人忘却了室外的寒意。",
      },
    ],
  },
  "char-86": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    11: [
      {
        en: "Returning home after seeing Mei Ziyu off, Xu Ziyun recounts to his wife Yuan the tender bond between Ziyu and Qinyan. When Yuan wonders aloud what advantage these dan performers hold over her own lovely maids, Ziyun offers a studied defence: they possess the face of a woman yet the body of a man, pleasing the eye while stilling desire — the best of both worlds. The next day Yuan herself rides out in silks and furs to the birthday banquet of Hua Guangsu",
        zh: "徐子云归宅，与袁夫人谈及梅子玉与琴言的深情，袁夫人将相公们与自家丫鬟相比，子云则娓娓辩称这些少年\\",
      },
    ],
    12: [
      {
        en: "Lady Yuan returns from the Hua banquet and recounts every drinking game to Ziyun, who secretly has all sixteen forfeits engraved and circulated among friends — the set becomes known as the",
        zh: "袁夫人归来，将华府宴上所行酒令一一讲与子云，子云背着夫人将那十六个令刻版印行，题诗传世，外号\\",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    29: [
      {
        en: "Lady Yan, learning Qinyan has come, sends him into Ziyu",
        zh: "颜夫人得知琴言登门，命其入内安慰病中的子玉。琴言战战兢兢走近床边，见子玉黄瘦憔悴，不禁泪如泉涌，滴落子玉脸上。子玉却在梦呓中念出",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
    41: [
      {
        en: "Spring is at its most lavish in the Garden of Ease. The young master of the Hua household invites his wife aboard a lacquered pleasure boat and drifts through arched bridges and willow-lined causeways, pausing to admire the pink-and-white peach blossoms of Liuxian Pavilion while the water chimes against copper fittings like a set of jade chimes. The maidservants Jin Ling and Yu Ling take the oars with more enthusiasm than skill, spinning the craft in helpless circles and drenching themselves—sending the whole party into laughter. Wine and sweetmeats are laid out in a garden pavilion, and for one luminous afternoon the world seems perfectly arranged. Yet beneath the festivity Hua",
        zh: "春光正盛，华公子携夫人泛舟园中，穿桥过堤，赏碧桃、听流水，好不惬意。然琴言假期已满迟迟未归，公子心存挂念。游罢留仙院，宴席摆开，觥筹交错间，众人谈笑风生。丫鬟金龄、玉龄划桨忙乱，险些翻船，惹得满船欢笑。这一片春日浮生，歌舞笙箫，衬得园外的波谲云诡更显遥远——不知那位令公子朝思暮想的人，此刻身在何处。",
      },
    ],
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
    54: [
      {
        en: "Grief makes a strange fuel. Haunted by a troubling dream of Du Qinyan — gaunt and sorrowful — and weighed down by longing, Mei Ziyu nonetheless marshals every resource of his brilliant mind for the Grand Examination. Across three demanding rounds he excels: eight classical essays, two grand fu compositions, and a final round of verse written in the exact rhymes of Du Fu and Han Yu. He places second overall and wins the palace examination outright — the youngest candidate in the cohort — earning appointment as a Hanlin Compiler. Yet there is no triumph in his bearing. Yan Zhongqing and Gao Pin have both failed; Wang Xun too. Ziyu visits each in turn with quiet apologies, as though his own success were somehow their loss. The examiner Su Hou, remembering Xu Ziyun",
        zh: "梅子玉在对琴言的日夜思念中强打精神，应博学鸿词考试。三场下来他文思泉涌，一路过关，最终高中第二，殿试更夺魁首，授翰林编修之职。仲清、高品相继落第，子玉非但不以己之荣耀自矜，反而深感愧疚，益加谦逊。颜夫人欣喜异常，子玉的婚事也在料理之中。昔日落魄书生，如今风光入仕，命运的齿轮悄然转动，情与功名的纠缠愈发难以分解。",
      },
    ],
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-89": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-90": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-91": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
    11: [
      {
        en: "Returning home after seeing Mei Ziyu off, Xu Ziyun recounts to his wife Yuan the tender bond between Ziyu and Qinyan. When Yuan wonders aloud what advantage these dan performers hold over her own lovely maids, Ziyun offers a studied defence: they possess the face of a woman yet the body of a man, pleasing the eye while stilling desire — the best of both worlds. The next day Yuan herself rides out in silks and furs to the birthday banquet of Hua Guangsu",
        zh: "徐子云归宅，与袁夫人谈及梅子玉与琴言的深情，袁夫人将相公们与自家丫鬟相比，子云则娓娓辩称这些少年\\",
      },
    ],
    12: [
      {
        en: "Lady Yuan returns from the Hua banquet and recounts every drinking game to Ziyun, who secretly has all sixteen forfeits engraved and circulated among friends — the set becomes known as the",
        zh: "袁夫人归来，将华府宴上所行酒令一一讲与子云，子云背着夫人将那十六个令刻版印行，题诗传世，外号\\",
      },
    ],
    15: [
      {
        en: "Shi Nanxiang returns to Wang Xun and Yan Zhongqing",
        zh: "史南湘归来，向王恂、仲清讲起春航与蕙芳的相处情形，众人艳羡不已。另一头，梅子玉家中传来喜讯——父亲梅士燮放了江西学差，府中张灯结彩，宾客络绎，子玉却心系琴言，只好将相思暂时搁置。士燮临行前为二女儿与王家订定婚事，礼数周全，颜夫人操持内外，井井有条。子玉与聘才、元茂将父亲送出城外三十五里，依依惜别，洒泪而返。家中顿显冷清，子玉的课业与情怀都悬在空中，既无人约束，亦无人共诉，唯有在书卷与暗思之间独自度日。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
    28: [
      {
        en: "Cornered at last, Changqing escorts Du Qinyan to the Hua mansion and presents him without asking a fee — a calculated gesture that flatters the master while securing future goodwill. Hua Guangsu examines Qinyan with undisguised satisfaction; even the usually reserved Madam Hua pronounces him pleasing. Qinyan settles into the Liuqing Study and comports himself with dignified silence, meeting Wei Pincai",
        zh: "长庆迫于压力，领着琴言亲赴华府，以不收身价为名送入留青精舍听用。华公子细打量之后甚为满意，华夫人亦称赞。琴言入府后举止端谨，见到聘才只是沉默相对，无可奈何。临行前夕，琴言将一方常拭泪的罗帕并四味药草，交托素兰转呈子玉，万语千言尽在此物。子玉不知变故，数日后登门素兰处，偶遇兰保、琪官，素兰一句话便知他全然蒙在鼓里，令人心疼。情人相隔一墙，却已是两重天地，生离之悲弥漫字里行间。",
      },
    ],
    29: [
      {
        en: "Lady Yan, learning Qinyan has come, sends him into Ziyu",
        zh: "颜夫人得知琴言登门，命其入内安慰病中的子玉。琴言战战兢兢走近床边，见子玉黄瘦憔悴，不禁泪如泉涌，滴落子玉脸上。子玉却在梦呓中念出",
      },
    ],
    39: [
      {
        en: "Li Yuanmao",
        zh: "李元茂的婚事终于办妥，招赘入孙家，王恂居中奔走，聘才代为料理礼仪。颜夫人借出珠冠补服，铺设十六盒彩礼，场面勉强撑得起门面。吉日当晚，子玉、仲清、王恂陪席，互赠戏谑诗句，元茂自言若新人略丑也无妨，近视眼自有近视眼的好处，引得哄堂大笑。孙宅鼓乐迎门，洞房花烛，喜气之中却带着几分将就与凑合。与此同时，聘才为向王文辉示好特意奔走，却在颜家碰了软钉子——子玉对他的态度明显冷淡，往日亲厚已成过眼云烟，种种旧账在笑语之下暗暗计算，人情冷暖尽在这一场婚宴之中。",
      },
    ],
    41: [
      {
        en: "Spring is at its most lavish in the Garden of Ease. The young master of the Hua household invites his wife aboard a lacquered pleasure boat and drifts through arched bridges and willow-lined causeways, pausing to admire the pink-and-white peach blossoms of Liuxian Pavilion while the water chimes against copper fittings like a set of jade chimes. The maidservants Jin Ling and Yu Ling take the oars with more enthusiasm than skill, spinning the craft in helpless circles and drenching themselves—sending the whole party into laughter. Wine and sweetmeats are laid out in a garden pavilion, and for one luminous afternoon the world seems perfectly arranged. Yet beneath the festivity Hua",
        zh: "春光正盛，华公子携夫人泛舟园中，穿桥过堤，赏碧桃、听流水，好不惬意。然琴言假期已满迟迟未归，公子心存挂念。游罢留仙院，宴席摆开，觥筹交错间，众人谈笑风生。丫鬟金龄、玉龄划桨忙乱，险些翻船，惹得满船欢笑。这一片春日浮生，歌舞笙箫，衬得园外的波谲云诡更显遥远——不知那位令公子朝思暮想的人，此刻身在何处。",
      },
    ],
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
    54: [
      {
        en: "Grief makes a strange fuel. Haunted by a troubling dream of Du Qinyan — gaunt and sorrowful — and weighed down by longing, Mei Ziyu nonetheless marshals every resource of his brilliant mind for the Grand Examination. Across three demanding rounds he excels: eight classical essays, two grand fu compositions, and a final round of verse written in the exact rhymes of Du Fu and Han Yu. He places second overall and wins the palace examination outright — the youngest candidate in the cohort — earning appointment as a Hanlin Compiler. Yet there is no triumph in his bearing. Yan Zhongqing and Gao Pin have both failed; Wang Xun too. Ziyu visits each in turn with quiet apologies, as though his own success were somehow their loss. The examiner Su Hou, remembering Xu Ziyun",
        zh: "梅子玉在对琴言的日夜思念中强打精神，应博学鸿词考试。三场下来他文思泉涌，一路过关，最终高中第二，殿试更夺魁首，授翰林编修之职。仲清、高品相继落第，子玉非但不以己之荣耀自矜，反而深感愧疚，益加谦逊。颜夫人欣喜异常，子玉的婚事也在料理之中。昔日落魄书生，如今风光入仕，命运的齿轮悄然转动，情与功名的纠缠愈发难以分解。",
      },
    ],
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-94": {
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
  },
  "char-97": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
  },
  "char-98": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
  },
  "char-104": {
    3: [
      {
        en: "Wei Pincai misses the household meal and is hospitably invited to eat in the accounts room by the steward Xu Shun. Afterward, idling away the afternoon, he pulls a slim volume from a bamboo bookshelf: the Flower Register, a connoisseur",
        zh: "魏聘才错过饭点回来，管事许顺热心留他在账房用饭。饭毕无聊，他随手从紫竹书架上翻出一册《曲台花选》，躺在炕上细细研读，将八位名旦的姓名才貌一一默记，心中暗叹京城名旦果然名不虚传——比起他心里念念不忘的",
      },
    ],
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
    16: [
      {
        en: "With Shize gone to Jiangxi, the Mei household settles into a gentle routine: Lady Yan manages domestic affairs, the steward Xu Shun oversees the outer staff, and Ziyu bends himself to his studies. On fine days he gathers Liu Wenze, Yan Zhongqing, and a few other kindred spirits for poetry parties — brushes, ink, and wine on a clean table, the world held at bay. Wei Pincai, by contrast, grows restless and schemes his way into the household of Hua Guangsu as a resident guest, imagining that proximity to such wealth and influence must lead somewhere. He is quickly disillusioned. Hundreds of parasites already crowd the Hua establishment; the servants are arrogant; Hua himself remains invisible behind a wall of engagements and excuses. Pincai endures a month of thankless socialising and mounting expenditure, unable to secure even a proper introduction to his host. The chapter offers a dry, sharp-eyed portrait of a great household",
        zh: "梅士燮赴任之后，梅宅内由颜夫人主掌，外由管家许顺经理，秩序如故。子玉专心攻读，花晨月夕偶邀刘文泽、颜仲清等知己小聚，把酒清谈，题诗分韵，悠然自得。魏聘才则百无聊赖，思谋着自谋出路，辗转托富三爷引荐，进了华光宿门下做食客。华公子府中门客数百，奴仆横行，聘才进去一月，始终见不着主人一面，尽是赔累，内心郁郁。贫富之间的落差、富贵场中的势利人情，借聘才的眼睛一一呈现，嘲弄之意隐于字里行间。",
      },
    ],
  },
  "char-115": {
    6: [
      {
        en: "The New Year social season unfolds in Chapter Six. Mei Shixie receives an invitation to the usual cohort banquet — only twelve guests this year, the list shortened by postings and absences — while Lady Yan holds her own gathering for the women of connected families. The two Mrs. Lu sisters, married into the Wang and Sun households respectively, are the social anchors of the scene: both middle-aged, both still handsome, and possessing very different domestic circumstances. The chapter",
        zh: "正月里京城的官场应酬热闹非凡。梅学士收到王文辉同年团拜的请帖，宾客名单寥寥十二人，较往年愈发冷清。颜夫人亦在家中设宴，请来王、孙两家亲眷——两位陆氏夫人姊妹，虽年届四旬，风韵犹存。本回以细腻的笔法刻画了孙家几位奇葩儿媳：嗣徽妻沈芸姑，书香门第出身，嫁了个红鼻子废物丈夫，只得忍辱将陪嫁丫头松儿送与他收房，自己泪洗面；嗣元妻巴来风，武将之女，性气燥烈，十七岁嫁入孙家，却遭遇了另一番窘境。本回以对比笔法写尽了官宦之家后院的参差众生相：有的夫妻和谐，有的凑合将就，有的悲苦无声。笔墨虽属旁线，却将彼时贵族婚姻的荒诞与女子命运的无奈刻画入骨。",
      },
    ],
  },
  "char-121": {
    9: [
      {
        en: "The Lantern Festival arrives, and Beijing ignites. Wei Pincai and Li Yuanmao quietly clear up the previous night",
        zh: "元宵佳节，灯火通明。聘才、元茂深夜归来狼狈收场，次日央了许顺借来钱票，悄悄托人送与叶茂林，遮掩了昨日的窘事。子玉盘问时，二人推说是张仲雨相请，遮过了实情。元宵夜，性全带元茂赴会馆吃年酒，聘才出门逛灯，子玉正感无聊，刘文泽、颜仲清、王恂联袂来邀，四人弃车步行，混入灯市。灯棚里人山人海，玻璃灯、画纱灯、灯屏灯楼次第辉映，炮竹锣鼓声中，华车秀撵鱼贯而过。子玉忽被车轴拦住去路，车内一位少妇目不转睛地凝视他，甚至展示莲足，嫣然微笑。文泽、王恂在旁悄声调侃，仲清打趣道不知是看你还是看文泽。子玉回过神来，与那少妇目光相接，颇觉局促，少妇的车才悠悠开走。灯市的繁华与人间的多情，在这一夜交织成一幅热闹而隐约暧昧的画卷。",
      },
    ],
  },
  "char-130": {
    5: [
      {
        en: "Chapter Five introduces Xu Ziyun — scion of seven generations of officials, twenty-five years old, holder of a minor ministry post, and possessor of a rare combination of wealth, cultivation, and genuine human warmth. His great project is Yiyuan, the Garden of Contentment: a once-derelict plot of land outside his residence transformed over three or four years, under the supervision of his brilliant friend Xiao Cixian, into a landscape of four hundred rooms, winding streams, and ancient trees that has become the beating heart of Beijing",
        zh: "第五回将目光转向怡园的主人：徐子云，浙江山阴人，七世簪缨之后，年二十五，员外郎出身，举人及第，温文俊雅，度量过人。他将府邸前一片废园大加改造，经好友萧次贤监工历时三四年，建成楼台四百余间、曲水山石俱备的怡园，成为京城名士雅集的中心。子云爱才惜才，对史南湘《花选》中的八位名旦皆珍爱有加，而尤钟情于袁宝珠——他视这些相公如奇珍异宝、名花好鸟，只有爱惜之心，绝无亵渎之念，故众名旦皆愿对他推心置腹。一日在堂会中见到新来的琴官与琪官，子云赞叹不已，当即命人连夜赶制服饰相赠，又嘱宝珠引他们来园游览。本回亦交代了琴官的身世：父亲杜琴师以制琴为业，遭豪贵殴辱含冤而死，母亦随后悲痛离世，孤苦伶仃的琴官十三岁起入梨园，由此踏上这条华美而孤独的舞台之路。",
      },
    ],
  },
  "char-134": {
    59: [
      {
        en: "A hundred days of mourning have stripped Qinyan of nearly everything. The money is gone; the warm clothes are pawned. Old retainer Liu Xi sets up a modest fruit stall at the temple gate while Qinyan paints flowers on raw paper to sell to passers-by — and discovers, to his own surprise, that his brushwork commands real admiration: a peony sells for two hundred cash, a plum blossom for a hundred and fifty, and a customer commissions a full eight-panel screen. Then Historian Hou arrives, all unctuous concern and subtle pressure, offering money and a comfortable room in his household — with unmistakable intent. Qinyan receives him with a face like winter ice and sends him away unthanked, choosing dignified poverty over purchased comfort. Letters go out to Mei Ziyu, Xu Ziyun, and Su Huifang — careful, heartfelt, each one a lifeline cast into the distance.",
        zh: "琴仙在南京护国寺为道翁守灵已逾百日，盘缠耗尽，衣单食薄。刘喜在庙门口摆摊卖果，琴仙则以丹青糊口，在生纸上画花卉出售，竟颇受好评。道貌岸然的侯太史携金登门，企图趁人之危笼络琴仙，被琴仙冷脸相拒，其虚伪嘴脸暴露无遗。琴仙写信向子玉、子云、蕙芳等人求援，心中对子玉的牵念，如寒冬里一炉炭火，始终不曾熄灭。",
      },
    ],
  },
  "char-136": {
    40: [
      {
        en: "The moral ledger begins at last to balance. Xi Shiyi, who engineered Du Qinyan",
        zh: "奚十一曾以琴言之事大闹上门，种下的恶因如今开始结出报应之果。他弃旧怜新、玩弄情义，春兰、巴英官皆对其寒心，私下历数他昔日种种不堪，尤其那只诓人的机关桶子，不知害了多少无辜。奚十一一日独自入寺，见得月酣睡，意图轻薄，不料得月腹泻骤发，秽物喷涌，弄得狼狈不堪。另一边厢，潘其观长期于寺庙赌场厮混，输多赢少，欠下烂账，终至众怒，被人揪住痛打，颜面尽失。两人一臭一打，皆因平日作恶多端，天道轮回，报应不爽，令旁观者拍手称快。",
      },
    ],
  },
  "char-137": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
    58: [
      {
        en: "The wheel turns against Xi Shiyi. The man who scattered silver like chaff through the pleasure quarters now finds himself utterly broke: his family",
        zh: "表面风流的奚十一，如今债台高筑，家道中落，洋行倒闭，盐场漂没，向潘其观借贷被迫立下万两欠票，狼狈至极。深夜独自吞云吐雾，菊花无意间窥见下人春兰的丑事，心中既恼又酸，五味杂陈。当年呼风唤雨的公子哥，如今走头无路，色与财的双重衰落同步上演，世事无常，因果昭彰，报应之弦已悄然绷紧。",
      },
    ],
  },
  "char-138": {
    40: [
      {
        en: "The moral ledger begins at last to balance. Xi Shiyi, who engineered Du Qinyan",
        zh: "奚十一曾以琴言之事大闹上门，种下的恶因如今开始结出报应之果。他弃旧怜新、玩弄情义，春兰、巴英官皆对其寒心，私下历数他昔日种种不堪，尤其那只诓人的机关桶子，不知害了多少无辜。奚十一一日独自入寺，见得月酣睡，意图轻薄，不料得月腹泻骤发，秽物喷涌，弄得狼狈不堪。另一边厢，潘其观长期于寺庙赌场厮混，输多赢少，欠下烂账，终至众怒，被人揪住痛打，颜面尽失。两人一臭一打，皆因平日作恶多端，天道轮回，报应不爽，令旁观者拍手称快。",
      },
    ],
  },
  "char-141": {
    46: [
      {
        en: "Scholar Qu Daoweng takes up residence in the Garden of Ease and formally adopts Qinyan as his son, renaming him Qinxian. From dawn to dusk he teaches classical texts, poetry, calligraphy, and the rhythms of parallel prose. Qinxian proves a scholar",
        zh: "屈道翁入住怡园，收琴仙为义子，日授诗词文章，晨昏对课，父慈子孝，竟如亲生。琴仙天资聪颖，过目成诵，半月之内文理大进。道翁为园作序，文采斐然，子云喜而欲勒石永存。二十八日，子云大开园会，诸名士齐聚含万楼，道翁改楼名为",
      },
    ],
    48: [
      {
        en: "The Garden of Ease prepares for a departure. Qu Daoweng has received his appointment to Nanchang and will leave within days, taking Qinxian with him. The farewell banquets multiply—scholars, performers, friends who have shared the garden",
        zh: "屈道翁领了南昌通判，怡园即将失去这对父子。名士们轮流为琴仙饯行，依依惜别。春航高中状元，苏侯一见倾心，欲招为东床，惜已有妻，遗憾而止。不料家书传来噩耗：春航之妻已于二月间暴病亡故。悲喜交集之际，老母与舅父又将同赴京城。蕙芳一力操持新宅事宜，感情深厚却身份尴尬，冷暖自知。春航命下人从此称蕙芳为",
      },
    ],
    55: [
      {
        en: "The journey south unfolds like a classical scroll, beautiful and melancholy in equal measure. Du Qinyan travels with Dao Weng along the Grand Canal, passing the ruins of the Little Rainbow Garden where elegant banquets were once held among famous poets — now nothing but collapsed walls, weeping trees, and the clatter of cicadas. At the Lotus Bridge two bold merchant wives on a pleasure boat toss a bundle of fruit across the water at the pretty young traveller; Dao Weng laughs at the classical allusion —",
        zh: "琴言随道翁顺运河南下，途经小虹园、莲花桥，扬州旧日繁华已是一片废墟荒草，触目惊心。平山堂附近游船上，两个盐商家的妇人抛来一包果品，引得道翁笑称",
      },
    ],
    56: [
      {
        en: "A fall on deck breaks more than Dao Weng",
        zh: "道翁在南京一跌成疾，旧病复发，卧床不起，琴言衣不解带地悉心照料。顶风阻行，舟泊燕子矶，琴言代笔写信，心系子玉，在摇晃的船舱里构思和词，字斟句酌，直至深夜。迁入护国寺养病，道翁病势日沉，琴言在神前焚香祈愿，愿以己身相代。道翁感其孝心，心中悲悯交加，在弥留之际仍为眼前这个无依无靠的少年忧心忡忡，父子深情令人动容。",
      },
    ],
    59: [
      {
        en: "A hundred days of mourning have stripped Qinyan of nearly everything. The money is gone; the warm clothes are pawned. Old retainer Liu Xi sets up a modest fruit stall at the temple gate while Qinyan paints flowers on raw paper to sell to passers-by — and discovers, to his own surprise, that his brushwork commands real admiration: a peony sells for two hundred cash, a plum blossom for a hundred and fifty, and a customer commissions a full eight-panel screen. Then Historian Hou arrives, all unctuous concern and subtle pressure, offering money and a comfortable room in his household — with unmistakable intent. Qinyan receives him with a face like winter ice and sends him away unthanked, choosing dignified poverty over purchased comfort. Letters go out to Mei Ziyu, Xu Ziyun, and Su Huifang — careful, heartfelt, each one a lifeline cast into the distance.",
        zh: "琴仙在南京护国寺为道翁守灵已逾百日，盘缠耗尽，衣单食薄。刘喜在庙门口摆摊卖果，琴仙则以丹青糊口，在生纸上画花卉出售，竟颇受好评。道貌岸然的侯太史携金登门，企图趁人之危笼络琴仙，被琴仙冷脸相拒，其虚伪嘴脸暴露无遗。琴仙写信向子玉、子云、蕙芳等人求援，心中对子玉的牵念，如寒冬里一炉炭火，始终不曾熄灭。",
      },
    ],
    60: [
      {
        en: "The Lantern Festival brings the novel full circle. Xu Ziyun hosts one last great gathering at the Yi Garden; fireworks turn the night sky to daylight; Du Qinyan sits among friends — no longer a theatre boy but a scholar among scholars — and feels the long nightmare of the south dissolve like fog. It is Jin Jifu who gives the evening its lasting shape: he proposes that the nine celebrated beauties of the Nine Fragrance Pavilion be commemorated in portrait and prose, carved in stone to outlast them all, enshrined as flower deities. The company draws lots for assignments with the delighted solemnity of a literary game — and the lots fall with the uncanny aptness of fate: Mei Ziyu draws Du Qinyan and the Lady Du, the two souls most entwined with his own. Yan Zhongqing, Wang Xun, Gao Pin, Tian Chunhang — each receives his subject as though the slips of paper already knew. The novel closes not with loss but with consecration: art and friendship conspiring to make beauty permanent.",
        zh: "元宵佳节，子云大宴群友，琴仙重回京城，与众名旦、名士把酒言欢，旧日艰辛恍若隔世一梦。席间金吉甫提议以九香楼诸人入画立传，刻石传世，众人一拍即合，拈阄分赋，子玉得琴仙与杜仙女，缘分天定，令人叹服。小说以众人共绘花神图、分写传赞作结，屈道翁精神永存，一段才子佳人的传奇，于诗画流传中获得了超越时间的不朽。",
      },
    ],
  },
  "char-142": {
    48: [
      {
        en: "The Garden of Ease prepares for a departure. Qu Daoweng has received his appointment to Nanchang and will leave within days, taking Qinxian with him. The farewell banquets multiply—scholars, performers, friends who have shared the garden",
        zh: "屈道翁领了南昌通判，怡园即将失去这对父子。名士们轮流为琴仙饯行，依依惜别。春航高中状元，苏侯一见倾心，欲招为东床，惜已有妻，遗憾而止。不料家书传来噩耗：春航之妻已于二月间暴病亡故。悲喜交集之际，老母与舅父又将同赴京城。蕙芳一力操持新宅事宜，感情深厚却身份尴尬，冷暖自知。春航命下人从此称蕙芳为",
      },
    ],
    50: [
      {
        en: "Midsummer in the capital: the heat sits on the city like a lid. Tian Chunhang is promised in marriage to Minister Su",
        zh: "盛夏炎炎，春航已与苏侯之女订下婚约，七夕完婚在即。刘文泽路过林春喜门口，顺道拜访，见他书室幽雅，芭蕉叶上密密写满了练笔的字，院中支着小卷篷，盆景点缀其间。春喜将团扇递来，上面画着螳螂捕蝉，栩栩如生，叫文泽看得目瞪口呆。原来春喜这几个月悄悄钻研绘画，已大有长进，连素来挑剔的瑶卿也甘拜下风。文泽索扇不得，讨来一把，心满意足而去。才情与风雅，在这一片消夏的蝉声里，轻盈地流转。",
      },
    ],
  },
  "char-144": {
    33: [
      {
        en: "As the year draws to a close, Shi Nanxiang departs Beijing to take up his new posting, leaving the circle of intimates noticeably thinner. Mei Ziyu, setting out on a city errand he abandons halfway, chances upon Yuan Baozhu in a lane jammed with camels and carriages. Baozhu leads him to his exquisite study, the \\",
        zh: "腊月时节，史南湘随任出京，众名士相送，知己又少了几人。梅子玉偶遇袁宝珠，被邀入其精致书斋「小琅室」，见壁悬名迹、案置梅花，雅洁脱俗。两人煮雪烹茶，又邀陆素兰同来，共作清谈雅叙。宝珠忆及落难画师金粟，含泪长叹，子玉随口触动其心事，忙以竹石之语转圜解围。席间子玉婚事被一语道破，他只淡淡推说家信未回，神情间却另有隐衷。窗外寒梅暗香，室内风雅依旧，然离别与羁绊的况味，早已渗入每一壶茶香之中。",
      },
    ],
  },
  "char-145": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-146": {
    19: [
      {
        en: "Acting on Zhang Zhongyu",
        zh: "聘才依张仲雨所授，在华府内先从林珊枝处下手，以昆曲技艺一鸣惊人，获珊枝赞誉，渐入华公子视野。他又广撒小恩小惠，将府中上下打点得熨熨帖帖，人人称好。某日趁华公子出门，聘才约了张笑梅出城，到冯子佩家中闲聚，又遇杨梅窗，四人相携到酒楼小饮。席间叫来相公，琴言、玉林皆以病辞，蓉官赴约，聘才心知琴言对除子玉以外的人始终冷淡。觥筹交错、嬉笑取闹之间，聘才自报进了华公府，二喜等顿时另眼相看。繁华热闹的表面下，众人各怀算盘，情义与利益的边界日渐模糊。",
      },
    ],
  },
  "char-147": {
    49: [
      {
        en: "Mei Ziyu escorts Qinxian to the city gate and watches the carriage diminish into the road dust. The grief hits him like a physical blow: his old illness returns, and he spends a month confined to bed. When he recovers, the city feels rearranged. Tian Chunhang, newly widowed, faces his own domestic crisis. His elderly mother is installed in the new house but accustomed to Southern refinement; the succession of Beijing housemaids she tries proves uniformly unsuitable—one a tireless gossip, another with the habits of a tavern regular. It is the coachman Zhou Xiaosan who solves the problem by recommending his own sister. She arrives looking understated and capable, with a waist like a willow stem and eyes quick with intelligence, and both the old lady and Chunhang are immediately won over. Su Huifang, organizing the household as always from an ambiguous position between guest and steward, finds himself unexpectedly charmed when she addresses him one afternoon—soft-voiced, smiling—as Master Su. A small moment, but the novel watches it with careful attention.",
        zh: "琴仙离京后，子玉大恸，旧病复发，足月方愈。春航家中断弦，太夫人无人服侍，苦于北地难觅贤婢。赶车的周小三推荐了他三姐，那三姐扎着蛾眉，腰细如柳，进门一见，令春航大为惊异。三姐千伶百俐，上下周到，老太太喜欢，蕙芳也待她有几分异样的亲近。一日蕙芳独坐书房，三姐奉命送点心进来，两人相对，各自心事，一时皆沉在那一声软软的",
      },
    ],
  },
  "char-148": {
    44: [
      {
        en: "On the very day Xu Ziyun",
        zh: "琴言出师之日，华府的跑腿姚贤出城寻人，却从麻子嘴里听到一个惊天消息：有江南人替琴言出了师，人已走了！姚贤惊慌失措，辗转打探，偶遇子云家人孟七，方知真相——正是徐子云以两千四百五十两银票，替琴言赎了自由身。消息传回华府，公子大为震怒，却也无可奈何。而此刻琴言已悄然住进怡园，从牢笼般的旧日身份中挣脱出来，开始了一段崭新的人生。",
      },
    ],
  },
  "char-149": {
    44: [
      {
        en: "On the very day Xu Ziyun",
        zh: "琴言出师之日，华府的跑腿姚贤出城寻人，却从麻子嘴里听到一个惊天消息：有江南人替琴言出了师，人已走了！姚贤惊慌失措，辗转打探，偶遇子云家人孟七，方知真相——正是徐子云以两千四百五十两银票，替琴言赎了自由身。消息传回华府，公子大为震怒，却也无可奈何。而此刻琴言已悄然住进怡园，从牢笼般的旧日身份中挣脱出来，开始了一段崭新的人生。",
      },
    ],
  },
  "char-150": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
  "char-151": {
    35: [
      {
        en: "The night",
        zh: "一夜之间，聘才寄存的箱笼、拜匣遭贼洗劫，金银细软悉数被盗，仅余几件棉衣和一块摔碎的洋表。众人趁月色搜查菜园，发现空箱弃于墙角，灌园伙计神秘失踪。唐和尚疑是内贼，将种菜人夫妇绑缚审问，老婆子哭天抢地。聘才清点损失逾千金，草草报了官，坊里几番审讯，终查明是那新来伙计蔡某借机逃盗，案情虽明，人却早已无踪。宝珠生日喜宴与聘才的遭窃之夜遥相对照，世间悲喜从不相让，热闹与凄凉往往只隔一墙之遥。",
      },
    ],
  },
  "char-152": {
    42: [
      {
        en: "The ink on the mourning documents for the troupe master Changging is barely dry before his widow turns her attention to money. Cornering Qinyan after breakfast, she lays out the household",
        zh: "师父长庆刚入土，师娘便算起了经济账。她拦住琴言，开口便要一月二百吊钱的养膳，言辞软硬兼施，暗指若无钱则出师无望，此生便要挂在她门下。琴言进退两难：既不知华府每月给了多少，又难以开口向公子讨要，更不敢轻易答应一个空头承诺。师娘步步紧逼，琴言愁眉苦脸，只得以",
      },
    ],
    43: [
      {
        en: "Yuan Baozhu and Lu Sulan arrive to find Qinyan in a fog of anxiety. The moment they hear about the widow",
        zh: "宝珠与素兰闻知师娘索钱之事，立刻各有主意。素兰一拍手便断言：出师最妙！但三千两银子从何而来？二人你来我往，盘算着谁能替琴言出这笔钱。话锋一转，议及子云——怡园的徐子云素来慷慨，且对琴言颇有情谊。若能由他出面，以赎身之名将琴言从师娘手中赎出，既解了燃眉之急，又给琴言留了余地。谋议已定，众人心照不宣地去赏杏花，让这一桩关乎命运的密谋，在春花烂漫中悄然成形。",
      },
    ],
  },
  "char-153": {
    57: [
      {
        en: "October brings a different kind of gathering to the Yi Garden. Yuan Qixiang, wife of Xu Ziyun, hosts six of Beijing",
        zh: "十月，怡园重归热闹，袁绮香设宴邀请七位名门夫人赏菊。苏浣香、吴紫烟、颜蓉华、梅琼华等佳人云集宝香堂，锦褥翠幕，七层菊花堆砌如山。众人仿竹林七贤结拜姊妹，序齿排行，欢声笑语，香风盈袖。席间行酒令、联诗句，才思横溢，相互唱和，宛若群花争妍，百鸟竞鸣，京城闺秀的风雅气象尽在其中。",
      },
    ],
  },
};

export type CharacterSceneFallback = {
  characterName: string;
  snippets: string[];
  tokens: string[];
  chapterTitleZh?: string;
  chapterTitleEn?: string;
};

/** Curated scene bullets when present; otherwise character-focused bullets from mention excerpts. */
export function getCharacterSceneBullets(
  characterId: string,
  chapterId: number,
  fallback?: CharacterSceneFallback,
): SceneBullet[] {
  const curated = characterAppearances[characterId]?.[chapterId];
  if (curated && curated.length > 0) return curated;
  if (!fallback) return [];
  return buildSyntheticCharacterSceneBullets(fallback);
}

function buildSyntheticCharacterSceneBullets({
  characterName,
  snippets,
  tokens,
  chapterTitleZh = '',
  chapterTitleEn = '',
}: CharacterSceneFallback): SceneBullet[] {
  const chineseName = characterName.split(' ')[0];
  const givenShort = chineseName.length >= 2 ? chineseName.slice(-2) : chineseName;
  const englishRest = characterName.slice(chineseName.length).trim();
  const englishDisplayName = englishRest || chineseName;

  const clip = (s: string, max = 56) => {
    const t = s.replace(/\s+/g, ' ').trim();
    return t.length > max ? `${t.slice(0, max)}…` : t;
  };

  const bullets: SceneBullet[] = [];

  for (const snippet of snippets.slice(0, 4)) {
    let focusToken = tokens[0] ?? givenShort;
    let bestIdx = -1;
    for (const token of tokens) {
      const idx = snippet.indexOf(token);
      if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
        bestIdx = idx;
        focusToken = token;
      }
    }

    const windowStart = bestIdx === -1 ? 0 : Math.max(0, bestIdx - 28);
    const windowText = clip(snippet.slice(windowStart), 64);

    const zh = chapterTitleZh
      ? `本回《${chapterTitleZh}》叙事中，点及「${focusToken}」，语境紧接「${windowText}」，可见其在此回人事中的位置与照应。`
      : `本回叙事中，点及「${focusToken}」，语境紧接「${windowText}」，可见其在此回情节中的具体关涉。`;

    const en = chapterTitleEn
      ? `Within this chapter’s arc (“${chapterTitleEn}”), the text names “${focusToken}” in a passage adjoining “${windowText}”, situating ${englishDisplayName} in the scene’s immediate action rather than summarizing the whole chapter.`
      : `In this chapter’s narration, the text names “${focusToken}” in a passage adjoining “${windowText}”, foregrounding ${englishDisplayName} in the moment rather than the whole episode.`;

    bullets.push({ en, zh });
  }

  if (bullets.length === 0) {
    bullets.push({
      zh: `本回文本虽不便于自动摘录连续片段，但仍可见「${givenShort}」之名出现，关合其在全书脉络中的位置。`,
      en: `Although this chapter does not yield a clean contiguous excerpt here, the name “${givenShort}” still appears in ways that anchor ${englishDisplayName} within the chapter’s events.`,
    });
  }

  return bullets;
}
