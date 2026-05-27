// Pre-computed per-chapter appearance analysis for Mei Ziyu (char-0) and Du Qinyan (char-1).
// Key: character id → chapter number → array of bilingual scene descriptions.
export type SceneBullet = { en: string; zh: string };

export const characterAppearances: Record<
  string,
  Record<number, SceneBullet[]>
> = {
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

  "char-5": {
    2: [
      {
        en: "Introduced as a glib and opportunistic scholar accompanying Yuanmao to Beijing; stays as a guest at the Mei household.",
        zh: "正式登场：伶牙俐齿的投机文人，陪伴李元茂进京；寄居在梅府。",
      },
      {
        en: "Describes the beauty of the newly arrived performers (including Qinyan) to Ziyu, planting the initial seeds of Ziyu's romantic obsession.",
        zh: "向子玉绘声绘色地描述新进京伶人（包括琴言）的美貌，种下子玉痴情的种子。",
      },
    ],
    3: [
      {
        en: "Explores the theatrical and social world of Beijing, attempting to ingratiate himself with wealthy patrons like Fu Sanye.",
        zh: "初探京城戏园与社交圈，试图巴结富三爷等阔绰恩主。",
      },
    ],
    4: [
      {
        en: "Shares further details about Qinyan's background with Ziyu during a snowy gathering, noting Qinyan's connection to Xu Ziyun.",
        zh: "雪夜聚会中，进一步向子玉透露琴言的身世背景及与徐子云的关系。",
      },
    ],
    5: [
      {
        en: "Describes the formidable reputation and extravagant lifestyle of Hua Gongzi to Ziyu.",
        zh: "向子玉绘声绘色地描述华公子的奢华生活与威名。",
      },
    ],
    6: [
      {
        en: "Attends the grand literary gathering but his gossiping nature and superficiality are contrasted with the genuine scholars.",
        zh: "参加盛大的文人雅集，其八卦与浅薄与真才实学的名士形成对比。",
      },
    ],
    8: [
      {
        en: "Starts a chaotic and embarrassing brawl in a wine shop due to a misunderstanding, highlighting his reckless behavior.",
        zh: "因误会而在酒肆中引发一场混乱不堪的斗殴，凸显其轻率妄为。",
      },
    ],
    9: [
      {
        en: "His mishandling of Yuanmao's lost money and attempts to cover it up lead to awkward encounters with performers and friends.",
        zh: "对李元茂遗失银两一事处理不当并试图掩饰，导致与相公及友人的尴尬相处。",
      },
    ],
    10: [
      {
        en: "Gossip and rumors spread by him begin to cause misunderstandings among the social circles.",
        zh: "其四处散播的流言蜚语开始在社交圈中引发误会。",
      },
    ],
    11: [
      {
        en: "Mentioned as an untrustworthy figure by others as they navigate the complexities of their patron-performer relationships.",
        zh: "在众人处理复杂的恩客与伶人关系时，被视为不可靠的人物。",
      },
    ],
    15: [
      {
        en: "Visits Qinyan on Ziyu's behalf to express Ziyu's feelings, acting as an opportunistic intermediary.",
        zh: "代子玉前往拜访琴言，传达情意，充当投机的中间人。",
      },
    ],
    21: [
      {
        en: "Spreads malicious rumors out of spite, causing significant damage to Ziyu's reputation among their acquaintances.",
        zh: "怀恨在心散播恶意谣言，严重损害了子玉在故交中的名誉。",
      },
    ],
    24: [
      {
        en: "Pays someone to publicly insult Qinyan in a petty act of revenge before later apologizing.",
        zh: "出于卑劣的报复心理，花钱雇人当众侮辱琴言，事后再行道歉。",
      },
    ],
    26: [
      {
        en: "Schemes with Cao Changqing to have Qinyan sold to the powerful Hua Gongzi, aiming to permanently sever Ziyu and Qinyan's bond.",
        zh: "与曹长青密谋，企图将琴言卖给权势显赫的华公子，意在彻底切断子玉与琴言的情缘。",
      },
    ],
    27: [
      {
        en: "Continues his manipulative negotiations to finalize Qinyan's transfer to the Hua household.",
        zh: "继续其阴险的谈判，以促成琴言入华府的交易。",
      },
    ],
    28: [
      {
        en: "Succeeds in his plot as Qinyan is formally acquired by Hua Gongzi; he feigns innocence to Ziyu's mother.",
        zh: "阴谋得逞，琴言正式被华公子买下；他在颜夫人面前装作若无其事。",
      },
    ],
    29: [
      {
        en: "Accompanies Qinyan during a secret visit to the bedridden Ziyu, witnessing their deep bond while pursuing his own agenda.",
        zh: "陪同琴言秘密探望病榻上的子玉，目睹两人情深，却仍心怀鬼胎。",
      },
    ],
    33: [
      {
        en: "His deceitful actions catch up with him, and he is arrested and imprisoned on forgery charges.",
        zh: "其欺诈行径终遭败露，因伪造罪名被捕入狱。",
      },
    ],
    34: [
      {
        en: "In prison, he relies on a disreputable monk and extracts money from others to bribe his way out of trouble.",
        zh: "狱中依靠声名狼藉的和尚，并向他人索要钱财以贿赂脱身。",
      },
    ],
    35: [
      {
        en: "Hosts a chaotic gathering filled with unsavory characters where his stolen goods and money are completely lost to thieves.",
        zh: "举办一场充满三教九流的混乱聚会，结果其赃物与钱财被盗贼洗劫一空。",
      },
    ],
    36: [
      {
        en: "Attempts to harass Qinyan at his new residence, leading to Qinyan fleeing in distress and tears.",
        zh: "企图在新居骚扰琴言，导致琴言惊恐落泪而逃。",
      },
    ],
    39: [
      {
        en: "Makes an inappropriate joke about a bride's physical appearance, sparking an escalating conflict at Li Yuanmao's wedding.",
        zh: "在李元茂婚礼上对新娘的外貌开不当的玩笑，引发不断升级的冲突。",
      },
    ],
    50: [
      {
        en: "Secures an official posting through bribery and departs Beijing, but not before marrying a courtesan he had previously exploited.",
        zh: "通过行贿谋得官职离开北京，临行前娶了曾被其利用的妓女为妻。",
      },
    ],
  },
  "char-4": {
    1: [
      {
        en: "Introduced as Wang Wenhui's son and Ziyu's twenty-two-year-old cousin. A key figure in the capital's social circles, he frequently visits the theater and is deeply knowledgeable about the opera world.",
        zh: "正式登场：王文辉之子，子玉二十二岁的表兄。京城名士圈中的核心人物，常常出入戏园，对梨园掌故了如指掌。",
      },
      {
        en: "Visits Ziyu with Zhongqing and Nanxiang, participating in debates about performers and persuading Ziyu to visit the theater with him.",
        zh: "与仲清、南湘同访子玉，参与对优伶的辩论，并怂恿子玉同往戏园看戏。",
      },
    ],
    2: [
      {
        en: "Hosts Zhongqing in his study, where they are interrupted by the eccentric and foolish Sun brothers (Sihui and Siyuan), whose absurd literary pretensions they quietly mock.",
        zh: "在书房接待仲清，遭遇举止乖张、不学无术的孙氏兄弟（嗣徽、嗣元）打扰，两人对孙氏兄弟的荒诞言行暗自发笑。",
      },
      {
        en: "Assists his father Wang Wenhui in hosting a banquet, after which he goes to the theater with Ziyu to show him the performances firsthand.",
        zh: "协助父亲王文辉款待宾客，随后带子玉一同前往戏园，让其亲身见识梨园风采。",
      },
    ],
    4: [
      {
        en: "Visits Ziyu's study on a snowy evening alongside Zhongqing. They enjoy a warm feast, evaluate Ziyu's snow-themed poetry, and compose matching verses.",
        zh: "雪夜与仲清同访子玉书房。三人围炉饮酒，品评子玉新赋的咏雪诗，并联句相和。",
      },
    ],
    5: [
      {
        en: "Accompanies Ziyu and Zhongqing to the theatrical garden, serving as a knowledgeable guide to the performers and navigating the social dynamics of the opera patrons.",
        zh: "陪同子玉、仲清游园看戏，作为内行向他们介绍优伶，并在梨园恩客的社交场中游刃有余。",
      },
    ],
    6: [
      {
        en: "Attends the grand literary gathering where Qinyan performs, participating in the scholarly conversations and observing the deepening connection between Ziyu and Qinyan.",
        zh: "参加琴言献艺的盛大文人雅集，参与名士间的清谈，并在一旁观察子玉与琴言之间日益加深的情愫。",
      },
    ],
    7: [
      {
        en: "Joins Ziyu, Zhongqing, and Gao Pin at Liu Wenze's poetry gathering, engaging in witty literary games and couplet-matching.",
        zh: "与子玉、仲清、高品同赴刘文泽的诗会，参与机智的文字游戏与联句应对。",
      },
    ],
    9: [
      {
        en: "Goes on a Lantern Festival night outing with Ziyu, Zhongqing, and Liu Wenze, enjoying the festive atmosphere and mingling in the crowds.",
        zh: "元宵夜同子玉、仲清、刘文泽一同出游观灯，融入繁华喧闹的节日气氛。",
      },
    ],
    12: [
      {
        en: "Briefly referenced among the circle of scholars as Gao Pin introduces Tian Chunhang into their social network.",
        zh: "在高品将田春航引入名士圈子时，作为圈中常客被提及。",
      },
    ],
    14: [
      {
        en: "Participates in discussions regarding the passionate romantic pursuits of Chunhang and the social affairs of the capital's literary elite.",
        zh: "参与探讨春航痴情的浪漫追求，以及京城文人雅士间的种种社交轶事。",
      },
    ],
    20: [
      {
        en: "Meets with Zhongqing and others to discuss recent dramatic events, including the ongoing entanglements between the scholars and the performers.",
        zh: "与仲清等人聚会，谈论近来发生的风波，包括名士与优伶之间不断交织的情感纠葛。",
      },
    ],
    24: [
      {
        en: "Shares gossip with Zhongqing about Tian Chunhang's expensive devotion to Su Huifang and discusses Li Yuanmao's academic progress.",
        zh: "与仲清闲谈京中轶事，议论田春航为苏蕙芳一掷千金的痴情，并谈及李元茂的学业进展。",
      },
    ],
    30: [
      {
        en: "Visits the bedridden Ziyu alongside Zhongqing and Nanxiang, attempting to comfort his cousin with poetry and lively conversation.",
        zh: "与仲清、南湘同往探望病榻上的子玉，试图以诗文对谈和欢快的话语宽慰表弟。",
      },
    ],
    31: [
      {
        en: "Continues to visit Ziyu during his convalescence, discussing the upcoming examinations and the academic prospects of their friends.",
        zh: "在子玉病愈期间继续探望，众人同议即将到来的科考及友人们的学业前景。",
      },
    ],
    35: [
      {
        en: "Attends the Lantern Festival gathering at Yiyuan Garden, taking part in the elaborate stone-inscription drinking games alongside the other gentlemen.",
        zh: "赴怡园参加元宵雅集，与众名士一同参与梅花墩旁的刻石行令游戏。",
      },
    ],
    37: [
      {
        en: "Participates in the extensive springtime garden parties at Yiyuan, enjoying wine, poetry contests, and theatrical performances with the entire literary circle.",
        zh: "参加怡园盛大的春日游园会，在酒宴、诗赛与戏曲表演中与众人同乐。",
      },
    ],
    38: [
      {
        en: "Continues his involvement in the festive celebrations at Yiyuan, demonstrating his ease and familiarity in both scholarly and theatrical settings.",
        zh: "继续参与怡园的欢庆活动，在文人雅集与戏曲交际中皆显得游刃有余。",
      },
    ],
    46: [
      {
        en: "Gathers with Ziyu, Chunhang, and others for an outing, sharing the collective delight when Qinxian's singing receives high praise.",
        zh: "与子玉、春航等人同游，当琴仙的曲艺赢得满堂喝彩时，与众人共享这份欢愉。",
      },
    ],
    50: [
      {
        en: "Attends a gathering where witty wordplay and couplets are shared, enjoying the camaraderie of the scholars.",
        zh: "参与一场文字游戏聚会，享受文人同侪间的欢声笑语。",
      },
    ],
    52: [
      {
        en: "Present at springtime social events, offering his perspectives during a period of transition for several characters in their circle.",
        zh: "出席春日社交活动，在圈中几位人物经历人生转折之际，发表自己的见解。",
      },
    ],
    54: [
      {
        en: "Attends gatherings where the intertwining destinies of the scholars and their favored performers are further discussed and celebrated.",
        zh: "参加聚会，见证并庆祝名士与伶人们日益交织的命运。",
      },
    ],
    60: [
      {
        en: "Participates in the grand finale gathering at Yiyuan, celebrating the enduring bonds of friendship and romance as the performers honor the scholars.",
        zh: "参加怡园的大团圆聚会，见证伶人向名士致敬，共庆经久不衰的友谊与情缘。",
      },
    ],
  },
  "char-2": {
    1: [
      {
        en: "Introduced as a twenty-three-year-old chivalrous scholar, nephew of Lady Yan and cousin/closest friend to Ziyu. He shares a deep, complementary bond with Ziyu, where his broad-minded perspective balances Ziyu's precision.",
        zh: "正式出场：二十三岁的侠义书生，颜夫人之侄，子玉的表兄兼至交。他气度豁达，与子玉的严谨精细形成互补，两人交情极深。",
      },
      {
        en: "Accompanies Shi Nanxiang to visit Ziyu, where they discuss the Flower Register and the nature of beauty, challenging Ziyu's limited views on performers and sparking his initial interest.",
        zh: "同史南湘拜访子玉，谈论《花选》与美之本质，打破子玉对优伶的成见，激起他初探梨园的兴趣。",
      },
    ],
    2: [
      {
        en: "Encounters Wei Pengcai and the eccentric Sun brothers (Sihui and Siyuan) at the Wang household, observing their absurd behavior with quiet amusement and discussing it later with Wang Xun.",
        zh: "在王府遇见韦朋才与行为古怪的孙氏兄弟（思回、思远），对其荒诞行径暗自觉得好笑，事后与王珣谈论。",
      },
    ],
    4: [
      {
        en: "Attends a snowy gathering at Ziyu's study along with Wang Xun, where they share a feast, evaluate Ziyu's newly composed snow poems, and match verses.",
        zh: "与王珣雪夜造访子玉书房，共享小宴，品评子玉新赋之咏雪诗，并联句相和。",
      },
    ],
    5: [
      {
        en: "Visits the theatrical garden with Wang Xun and Ziyu. He observes the performers and engages in banter, bringing his worldly insight to Ziyu's growing fascination.",
        zh: "与王珣、子玉同游戏园。他观察伶人，与众人说笑，以世故的眼光看待子玉日渐浓厚的兴趣。",
      },
    ],
    6: [
      {
        en: "Participates in the large literary and theatrical gathering where Qinyan performs. He engages in poetry and conversation, serving as a key member of the scholarly circle.",
        zh: "参加琴言登台献演的盛大文人雅集，参与诗文唱和，是名士圈子中的核心人物之一。",
      },
    ],
    7: [
      {
        en: "Attends the refined poetry gathering at Liu Wenze's residence alongside Ziyu, Wang Xun, and Gao Pin, engaging in literary games and matching poetic couplets with easy brilliance.",
        zh: "与子玉、王珣、高品同赴刘文泽府上的雅集，参与文字游戏与对对子，才思敏捷，挥洒自如。",
      },
    ],
    9: [
      {
        en: "Accompanies Ziyu, Wang Xun, and Liu Wenze on a Lantern Festival night outing, viewing the festive displays and mingling with the lively crowd.",
        zh: "元宵夜与子玉、王珣、刘文泽一同出游，观赏花灯，融入繁华的人潮之中。",
      },
    ],
    12: [
      {
        en: "Introduced by Gao Pin to the passionate scholar Tian Chunhang. Zhongqing praises Chunhang's lyric poetry and they immediately form a mutual respect.",
        zh: "经高品引荐结识深情的田春航。仲清对其词作大加赞赏，两人一见如故，惺惺相惜。",
      },
    ],
    13: [
      {
        en: "Hears Tian Chunhang's fervent poetry and deeply appreciates it. He supports Chunhang's romantic pursuits and helps connect him with the wider social circle.",
        zh: "聆听田春航深情的诗作并大加赞赏，支持春航的浪漫追求，助其融入更广泛的社交圈。",
      },
    ],
    14: [
      {
        en: "Visits Tian Chunhang alongside Gao Pin and others, admiring Chunhang's dedication to Su Huifang and engaging in scholarly and romantic discourse.",
        zh: "与高品等人拜访田春航，赞叹春航对苏蕙芳的痴情，并参与名士间的风雅对谈。",
      },
    ],
    15: [
      {
        en: "Attends another lively gathering involving Chunhang and Huifang, contributing his wit and maintaining the harmonious atmosphere among the friends.",
        zh: "参加春航与蕙芳等人的热闹聚会，以机智言谈助兴，维持友朋间的和谐气氛。",
      },
    ],
    16: [
      {
        en: "Continues to socialize with Gao Pin and Chunhang, discussing literature and the emotional entanglements of their peers.",
        zh: "继续与高品、春航交游，谈论诗文及同辈中人的情感纠葛。",
      },
    ],
    17: [
      {
        en: "Attends another literary banquet with his close circle, mediating discussions and helping to elevate the mood with poetry when the conversation turns to the complexities of theater patronage.",
        zh: "参加文友聚会，在席间调和气氛，当众人谈及狎优的种种纠葛时，他以诗酒助兴，化解沉闷。",
      },
    ],
    20: [
      {
        en: "Meets with Wang Xun and others to discuss recent events, including the ongoing drama surrounding Chunhang and the performers.",
        zh: "与王珣等人聚会，谈论近来发生之事，包括春航与伶人间的种种风波。",
      },
    ],
    24: [
      {
        en: "Shares gossip and social news with Wang Xun, discussing Tian Chunhang's passionate and expensive pursuit of Su Huifang, and helping direct Li Yuanmao's studies.",
        zh: "与王珣闲谈京中轶事，谈及田春航不惜重金追求苏蕙芳的痴情，并为李元茂的学业指点迷津。",
      },
    ],
    28: [
      {
        en: "Participates in discussions regarding literary examinations and essays, sharing his sharp critiques and supporting his friends' academic ambitions.",
        zh: "参与科考与文章的讨论，发表敏锐的见解，支持友人们的学业抱负。",
      },
    ],
    30: [
      {
        en: "Visits Ziyu during his illness, offering comfort and distracting him with literary conversations alongside Wang Xun and Nanxiang.",
        zh: "在子玉病中前去探望，与王珣、南湘一同以诗文对谈宽慰其心。",
      },
    ],
    31: [
      {
        en: "Visits Ziyu with Wang Xun and Nanxiang while Ziyu is recovering. They discuss the upcoming examinations, with Zhongqing expressing high confidence in Chunhang and Gao Pin's essays.",
        zh: "与王珣、南湘一同探望病中的子玉。谈及即将到来的科考，仲清对春航与高品的文章极有信心。",
      },
    ],
    32: [
      {
        en: "Celebrates the successful examination results of Chunhang and Gao Pin, organizing gatherings to honor their academic achievements.",
        zh: "庆祝春航与高品科考高中的佳绩，筹办聚会以表祝贺。",
      },
    ],
    35: [
      {
        en: "Joins the Lantern Festival viewing at Yiyuan Garden, participating in the stone-inscription drinking games and reciting poetry among friends and performers.",
        zh: "赴怡园赏元宵花灯，参与梅花墩旁的刻石行令游戏，与众名士和伶人饮酒赋诗。",
      },
    ],
    37: [
      {
        en: "Joins the extensive springtime garden parties at Yiyuan, partaking in wine, poetry, and theatrical performances with the entire circle.",
        zh: "参加怡园盛大的春日游园会，与众人在酒宴、诗会及戏曲表演中同乐。",
      },
    ],
    38: [
      {
        en: "Continues the festive celebrations at Yiyuan, demonstrating his usual easy brilliance in literary games.",
        zh: "继续参与怡园的欢庆活动，在文字游戏中展现其一贯的才思敏捷。",
      },
    ],
    39: [
      {
        en: "Engages in deeper conversations with the group at Yiyuan, helping to navigate the complex social dynamics between the scholars and the performers.",
        zh: "在怡园与众人深入交谈，协助调和名士与伶人间复杂的社交关系。",
      },
    ],
    44: [
      {
        en: "Attends further social gatherings, maintaining his role as a stabilizing and intelligent presence among his more volatile friends.",
        zh: "出席各种社交聚会，在情绪波动的友朋之间，始终扮演着沉稳而机智的角色。",
      },
    ],
    45: [
      {
        en: "Participates in poetic exchanges and observes the growing bonds and tensions within their social network.",
        zh: "参与诗词唱和，冷眼旁观社交圈中日益加深的情感纽带与暗流涌动。",
      },
    ],
    46: [
      {
        en: "Gathers with Ziyu, Chunhang, and others for an outing. He rejoices with the group when Qinxian's singing is praised and shares the collective delight of the literary circle.",
        zh: "与子玉、春航等人同游。当琴仙的曲艺赢得满堂喝彩时，他与众人同乐，共享文人雅集的欢愉。",
      },
    ],
    47: [
      {
        en: "Joins an outing where Qinxian's performance is highly praised, sharing in the group's elation and contributing to the artistic appreciation.",
        zh: "参加一次聚会，当琴仙的表演备受赞誉时，他与众人同欢，共赏其艺术造诣。",
      },
    ],
    48: [
      {
        en: "Is present at gatherings that solidify the romantic and artistic commitments of the group, offering supportive commentary.",
        zh: "出席那些确立圈内人情感与艺术追求的聚会，并适时给予支持性的评论。",
      },
    ],
    49: [
      {
        en: "Continues his active involvement in the social life of the capital's literary and theatrical elite.",
        zh: "继续活跃于京城文人与戏曲精英的社交生活中。",
      },
    ],
    50: [
      {
        en: "Attends a gathering where wordplay and couplets are shared. He jokes with Wenze and explains Ziyu's recent seclusion to the group.",
        zh: "参与一场文字游戏聚会，与文泽谈笑风生，并向众人解释子玉近来闭门不出的缘由。",
      },
    ],
    52: [
      {
        en: "Offers insights and advice during a period of transition for several characters, demonstrating his steadfast loyalty.",
        zh: "在部分人物经历人生转折之际提供见解与建议，展现其坚定不移的忠诚。",
      },
    ],
    54: [
      {
        en: "Attends gatherings where the intertwined destinies of the scholars and performers are further unraveled and celebrated.",
        zh: "参加聚会，见证并庆祝名士与伶人交织的命运得到进一步展现。",
      },
    ],
    57: [
      {
        en: "Is part of the events leading up to the final grand reunion, assisting in the preparations and social arrangements.",
        zh: "参与大团圆前夕的各项活动，协助筹备与社交安排。",
      },
    ],
    59: [
      {
        en: "Is present when Mei Shixie returns with Qinxian (now adopted as Qu Daoweng's son). Zhongqing quickly assesses the situation, discreetly mediating to ensure Qinxian's true identity is handled gracefully within the Mei household.",
        zh: "当梅侍郎带琴仙（已过继为屈道翁之子）归家时，他在场并迅速洞察局势，暗中斡旋，确保琴仙的身份在梅府得到妥善处理。",
      },
    ],
    60: [
      {
        en: "Participates in the grand finale gathering at Yiyuan where the performers honor the scholars. He writes the encomium for Qin Qiguan as the 'Tribute-Ranking Flower Scribe' and is himself honored with a portrait and poem as the 'Eminent Scribe Among Immortals'.",
        zh: "参加怡园的大团圆聚会。他为秦琪官撰写“及第花史”的赞语，并被伶人们尊为“仙中高品”，获赠画像与颂诗。",
      },
    ],
  },
  "char-3": {
    1: [
      {
        en: "Introduced as a brilliantly unconventional scholar and author of the 'Flower Register', he playfully debates the merits of theater performers with Mei Ziyu, setting the novel's thematic stage.",
        zh: "以才华横溢、放荡不羁的才子身份登场，作为《花选》的编撰者，他与梅子玉就戏曲伶人的品格展开了深入辩论，定下了全书的情感基调。",
      },
    ],
    5: [
      {
        en: "Attends a literary gathering where his poetic talents and unconventional views on romance continue to influence the intellectual circle.",
        zh: "参加文人雅集，以其出众的诗才与不落俗套的爱情观继续影响着京城名士圈。",
      },
    ],
    6: [
      {
        en: "Joins Liu Wenze's banquet, cementing his role as a prominent, witty figure among the capital's young elite scholars.",
        zh: "出席刘文泽的宴会，进一步巩固了其作为京城青年才俊中机智、耀眼人物的地位。",
      },
    ],
    7: [
      {
        en: "His 'Flower Register' remains a point of discussion among the elite, while he himself continues to shine at elite social dinners.",
        zh: "他编纂的《花选》持续成为名流们热议的话题，而他本人也在权贵晚宴上大放异彩。",
      },
    ],
    9: [
      {
        en: "Discusses the nuances of opera and performer patronage, offering his sharp critiques and maintaining his status as a tastemaker.",
        zh: "探讨戏曲与品鉴伶人之道，凭借其犀利的评判维持着品位引领者的身份。",
      },
    ],
    10: [
      {
        en: "Becomes deeply enamored with Lu Sulan, recognizing her exceptional artistic talent and pure character, marking the start of his most significant romantic arc.",
        zh: "对陆素兰一往情深，十分赏识其非凡的艺术才华与纯洁品格，开启了他最重要的感情线。",
      },
    ],
    14: [
      {
        en: "Continues his passionate pursuit and patronage of Lu Sulan, distinguishing himself by treating her with profound respect rather than mere indulgence.",
        zh: "继续热烈追求并支持陆素兰，以发自内心的尊重而非单纯的消遣态度对待她，与众不同。",
      },
    ],
    15: [
      {
        en: "Plays a central role in organizing the grand poetry and theater gatherings, showcasing his leadership in the literary community.",
        zh: "在组织盛大的诗会与戏曲雅集中发挥核心作用，展现了他在文人圈中的领导才能。",
      },
    ],
    17: [
      {
        en: "Participates prominently in the poetry banquet at Zhu Fangnian's estate, composing verses that impress the assembled scholars.",
        zh: "在祝芳年府邸的诗宴上大显身手，其所作诗句令在座的名士们赞叹不已。",
      },
    ],
    30: [
      {
        en: "Navigates the complex social dynamics of the capital, offering guidance and witty commentary to his friends amidst their various romantic entanglements.",
        zh: "在京城复杂的社交场中游刃有余，在朋友们陷入各种感情纠葛时，频频给出指点与机智的点评。",
      },
    ],
    31: [
      {
        en: "Defends the honor of the performers against the vulgar behavior of other patrons, reinforcing his philosophy of 'feeling-in-rectitude'.",
        zh: "挺身而出，痛斥其他恩客的粗俗行径以维护伶人尊严，进一步践行了他“情正”的理念。",
      },
    ],
    32: [
      {
        en: "Helps to mediate conflicts within the social circle, acting as a voice of reason disguised beneath his usual wild persona.",
        zh: "出面调解社交圈内的冲突，在其一贯的狂放外表下，扮演着理智发声者的角色。",
      },
    ],
    37: [
      {
        en: "His relationship with Lu Sulan deepens, proving to be one of the most stable and intellectually matched pairings in the narrative.",
        zh: "他与陆素兰的感情日益加深，成为全书中最为稳定、精神契合度最高的一对伴侣。",
      },
    ],
    38: [
      {
        en: "Collaborates with the leading scholars to plan future literary projects and support the careers of their favored performers.",
        zh: "与顶尖学者们合作筹划未来的文学项目，并大力支持他们所钟爱的伶人的事业。",
      },
    ],
    45: [
      {
        en: "Prepares for the upcoming imperial examinations while maintaining his active social life, balancing his scholarly ambitions with his aesthetic pursuits.",
        zh: "在保持活跃社交生活的同时，积极备战即将到来的科举考试，在学术抱负与审美追求间寻找平衡。",
      },
    ],
    48: [
      {
        en: "Awaits the examination results, sharing the anxiety and excitement with his closest companions in the literary circle.",
        zh: "等待科举放榜，与文人圈中最亲密的挚友们共同分享着那份焦虑与激动。",
      },
    ],
    49: [
      {
        en: "Achieves great success in the imperial examinations, solidifying his future and validating his immense literary talent.",
        zh: "在科举考试中金榜题名，这不仅稳固了他的前程，也印证了他卓越的文学才华。",
      },
    ],
    60: [
      {
        en: "Attends the grand finale at Yiyuan Garden, celebrating the reunion of all couples and contributing a final poem that immortalizes the performers.",
        zh: "参加怡园的大团圆盛会，庆祝所有有情人的重逢，并赋诗一首，使名伶们的风采得以流芳百世。",
      },
    ],
  },
};

/** Curated scene bullets from characterAppearances; empty when none exist for this chapter. */
export function getCharacterSceneBullets(
  characterId: string,
  chapterId: number,
): SceneBullet[] {
  return characterAppearances[characterId]?.[chapterId] ?? [];
}
