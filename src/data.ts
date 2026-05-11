import { Character, Relationship } from './types';

const rawData = `梅子玉 Méi Zǐyù	庾香	17	Jinling	scholar	ch.1	Male protagonist; scholar-gentry; falls for Qinyan; later marries Wang Qionghua; promoted examiner (ch.15); builds Qu shrine (ch.59)	男主角；书生士绅；钟情于琴言；后娶王琼华；第15回升任主考官；第59回为屈方正修建祠堂。
杜琴言 Dù Qínyán	琴官 / 玉侬 / 琴仙	15	Jiangsu	performer	ch.1	Central romantic figure; orphaned; renamed by Xu Ziyun (ch.5); redeemed in ch.43; reunites with Ziyu	核心浪漫人物；孤儿；第5回由徐子云改名；第43回赎身；最终与子玉重逢。
颜仲清 Yán Zhòngqīng	剑潭	23	Jinling	scholar	ch.1	A chivalrous scholar and close friend of Ziyu; nephew of Lady Yan. Often mediates between friends and participates in major literary gatherings.	侠义书生，子玉挚友；颜夫人之侄。常在友人间周旋，活跃于各大文会雅集。
史南湘 Shǐ Nánxiāng	竹君	24	Hanyang	scholar	ch.1	Top graduate who compiled the Flower Register; witty and romantic. Deeply attached to Lu Sulan; later achieves Jinshi rank (ch. 44).	乡试榜首，编纂《花选》；机智风流。痴情于陆素兰，后于第44回高中进士。
王恂 Wáng Xún	庸庵	22	Jinling	scholar	ch.1	Son of Wang Wenhui and cousin to Ziyu; a key figure in social circles. Fond of opera and often involved in arranging local social affairs.	王文辉之子，子玉表兄；名士圈核心人物。平生好优伶，常参与筹办京中社交雅事。
魏聘才 Wèi Pìncái	—	~20	Jiangning	scholar	ch.2	A glib and opportunistic scholar; initially a guest at the Mei house. Known for scheming and gossip, he endures public humiliations before marrying a courtesan (ch. 50).	伶牙俐齿的投机文人；初寄居梅府。为人阴险好造谣，历经多次丑闻折辱，最终在第50回娶妓为妻。
李元茂 Lǐ Yuánmào	—	~20	—	scholar	ch.2	The obtuse son of Ziyu's tutor; serves as comic relief. Infamous for being robbed in a disreputable area (ch. 23), he eventually marries into the Sun family as a matrilocal husband.	塾师李性全之子；书中喜剧人物。因在东园遭抢沦为笑谈（第23回），后于第39回招赘入孙家。
徐子云 Xú Zǐyún	度香	25	"Zhejiang, Shanyin"	scholar	ch.4	The generous and refined owner of Yiyuan Garden; a key patron of the arts. He treats performers with respect and redeems Qinyan in ch. 43.	怡园主人，慷慨儒雅的名士领袖。对伶人以礼相待，第43回斥巨资为琴言赎身。
萧次贤 Xiāo Cìxián	静宜	32	"Hunan, Xiangtan"	scholar	ch.5	Xu Ziyun's closest friend; polymath; designed Yiyuan. A detached and brilliant scholar who offers artistic guidance to many.	徐子云的挚友，博学多才，亲手设计了怡园。为人淡泊名利，常为众人提供艺术指引。
刘文泽 Liú Wénzé	前舟	~24	"Henan, Zhengyang"	scholar	ch.6	Vice-minister's son; exceptionally generous and approachable. A close friend of Xu Ziyun who hosts major literary banquets.	刘侍郎之子；慷慨大方，平易近人。徐子云的好友，常在自家宅邸主持重要文会。
高品 Gāo Pǐn	卓然	~25	Suzhou	scholar	ch.2	Tribute student (拔贡); wickedly funny; coins the Sun brothers' nicknames; lives at Hongji Temple	拔贡；极其幽默；为孙氏兄弟起绰号；住在鸿济寺。
张仲雨 Zhāng Zhòngyǔ	—	~22	Yangzhou	scholar	ch.6	Nephew of Grand Secretary Wu; versatile; goes by '二老爷'; frequents Yiyuan (ch.8)	吴阁学之侄；多才多艺；人称“二老爷”；常出入怡园。
沈伯才 Shěn Bócái	—	~30	—	scholar	ch.6	Son of Director Shen; recently selected county magistrate; capable	沈司业之子；新任知县；精明强干。
巴霖 Bā Lín	—	~20	Tianjin	scholar	ch.6	Son of garrison commander Ba; handsome; close to Liu Wenze; dislikes Sun brothers	巴天宠之子；英俊；与刘文泽亲近；讨厌孙氏兄弟。
冯子佩 Féng Zǐpèi	—	~18	Beijing	scholar	ch.6	Son of former Jiangsu magistrate; very handsome; arrives late at banquets	前江苏知县之子；极其俊美；宴会常迟到。
田春航 Tián Chūnháng	湘帆	23	Jinling	scholar	ch.4	A passionate Nanjing scholar who finds a soulmate in Su Huifang (ch. 13); eventually achieves the rank of top laureate (Zhuangyuan) in chapter 49.	金陵才子，第13回与苏蕙芳结为知己，后高中状元（第49回）。
祝芳年 Zhù Fāngnián	—	—	—	scholar	ch.17	Hosts poetry banquet in ch.17; part of Xu Ziyun's literary circle	第17回主持诗宴；徐子云文人圈成员。
金吉甫 Jīn Jífǔ	金栗	—	Jinling	scholar	ch.38	From a great Nanjing family; real name Jin Su (金栗), art name Jifu; leading literary scholar; frames the novel's conclusion in ch.60	南京巨族；本名金栗，号吉甫；文坛名士；第60回为小说作结。
屈方正 Qū Fāngzhèng	—	—	—	scholar	ch.56	Virtuous deceased scholar; appears as a divine spirit (ch.56); Mei builds a shrine for him (ch.59)	正直的已故学者；第56回以神灵身份出现；梅子玉为其建祠。
屈少君 Qū Shàojūn	—	—	—	scholar	ch.59	Son of Qu Fangzheng; returns to capital in ch.59; helped by Ziyu	屈方正之子；第59回回京；得子玉相助。
李性全 Lǐ Xìngquán	—	—	Zhejiang	scholar	ch.1	Ziyu's strict Confucian tutor; Li Yuanmao's father; stays with Mei family	子玉严厉的儒家老师；李元茂之父；住在梅家。
孙嗣徽 Sūn Sìhuī	虫蛀千字文	26	Jinling	scholar	ch.2	Elder Sun son; pedantic; 'Worm-eaten Primer' nickname; red nose	孙家长子；迂腐；绰号”虫蛀千字文”；红鼻子。
孙嗣元 Sūn Sìyuán	迭韵双声谱	~24	Jinling	scholar	ch.2	Younger Sun son; severe stammer; 'Unfinished Three-Character Classic' nickname	孙家次子；严重结巴；绰号”迭韵双声谱”。
袁宝珠 Yuán Bǎozhū	瑶卿	16	Suzhou	performer	ch.1	Top-ranked performer, celebrated for painting and poetry. A close confidant of Xu Ziyun and a loyal friend who supports Qinyan during hardships.	花榜状元，以书画诗词见长。是徐子云的知音，也是琴言最可靠的盟友。
苏蕙芳 Sū Huìfāng	媚香	17	Suzhou	performer	ch.1	High-principled performer of official descent; soulmate to Tian Chunhang. Known for her wit and integrity, helping secure Qinyan's freedom (ch. 43).	花榜榜眼，官宦之后。与田春航情投意合，第43回以机智助琴言赎身。
陆素兰 Lù Sùlán	香畹	16	Suzhou	performer	ch.1	A talented performer and calligrapher, loved by Shi Nanxiang. Known for her righteousness, she actively assists in the Ziyu-Qinyan reunion (ch. 22).	花榜探花，精通书法。史南湘之知己，第22回苦心促成子玉与琴言重逢。
金漱芳 Jīn Shùfāng	瘦香	15	Suzhou	performer	ch.1	#4; plays flute and chess; Lianzhu troupe	花榜第四；擅长吹笛下棋；联珠班。
李玉林 Lǐ Yùlín	佩仙	15	Yangzhou	performer	ch.1	#5; musician; famous for 《折柳阳关》; Lianzhu troupe	花榜第五；乐师；以《折柳阳关》闻名；联珠班。
王兰保 Wáng Lánbǎo	静芳	17	Yangzhou	performer	ch.1	#6; martial arts; refuses powerful patrons; elder brother of Guibao; Lianjin troupe	花榜第六；擅长武术；拒绝权贵；桂保之兄；联锦班。
王桂保 Wáng Guìbǎo	蕊香	15	Yangzhou	performer	ch.1	A charming and witty performer, younger brother of Lanbao. A steady presence in social and literary scenes throughout the novel.	兰保之弟，排行花榜第七，为人机智讨喜。是文人雅集中的常客，贯穿全书始终。
林春喜 Lín Chūnxǐ	小梅	14	Suzhou	performer	ch.1	#8; entered troupe at 12; plays male and female roles; rewrites opera scripts (ch.50)	花榜第八；12岁入班；兼演男女角；第50回改写剧本。
袁琪官 Yuán Qíguān	琪官	14	—	performer	ch.2	Companion to Qinyan on the canal journey; vivid beauty; joins Lianjin troupe	琴言进京途中的同伴；容貌出众；加入联锦班。
蓉官 Róngguān	—	~15	—	performer	ch.3	Friend of Fu Lun; witty; comic scenes chs.2–3; knows about Xi Shiyi	富伦之友；机智；第2-3回有喜剧场面；了解奚十一。
春兰 Chūnlán	—	~15	—	performer	ch.3	"Associated with Xi Shiyi; smashes crockery in the restaurant scene, ch.3"	与奚十一有关；第3回在酒楼摔碎瓷器。
小福 Xiǎofú	—	~15	—	performer	ch.3	Quanfu troupe; rumoured Fu Lun spent 3000 cash on his graduation ceremony	全福班；传闻富伦为其出师礼花费三千钱。
玉美 Yùměi	—	—	—	performer	ch.4	"Jianchun troupe; seen with Tian Chunhang at the tavern scene, ch.4"	建春班；第4回出现在酒楼场面。
四喜 Sìxǐ	—	—	—	performer	ch.4	Jianchun troupe; seen in ch.4 tavern scene	建春班；第4回出现在酒楼场面。
全福 Quánfú	—	—	—	performer	ch.4	Jianchun troupe; seen in ch.4 tavern scene	建春班；第4回出现在酒楼场面。
保珠 Bǎozhū (ch.1)	—	~15	—	performer	ch.1	"Seen at the theatre in ch.1; name accidentally mirrors Yuan Baozhu, causing confusion for Ziyu"	第1回出现在剧场；因名字与袁宝珠相似引起子玉误会。
珊枝 Shānzhī	—	—	—	performer	ch.36	Scandalous; rebuked by the whole group in ch.36; morally condemned	名声不佳；第36回遭众人斥责；受道德谴责。
袁绮香 Yuán Qǐxiāng	—	—	—	performer	ch.57	Hosts a drinking game in ch.57	第57回主持酒令。
王琼华 Wáng Qiónghúa (performer)	—	—	—	performer	ch.57	Poetry-card game leader in ch.57; distinct from Wang Qionghua the daughter	第57回诗牌游戏领袖；非王文辉之女。
林珊枝 Lín Shānzhī	—	—	—	performer	ch.5	"Bought by Hua Guangsu for 8,000 taels; lives in Hua mansion as personal companion"	被华光宿以八千两买下；住在华府作为私人伴侣。
谭八 Tán Bā	—	—	—	performer	ch.2	Comic lead (京丑) of Lianjin troupe; his mannerisms imitated by Sun Lianggong at the banquet	联锦班丑角；宴会上被孙亮功模仿。
小顺儿 Xiǎo Shùn'ér	—	—	—	performer	ch.5	十不闲 drum performer; brought by Fu Lun; rejected by Hua Guangsu with contempt	“十不闲”鼓手；富伦带来；遭华光宿蔑视拒绝。
二喜 Èr Xǐ	—	—	—	performer	ch.8	Male performer (dan); attaches himself to Li Yuanmao at the theatre; performs drinking games	旦角；在剧场缠住李元茂；玩酒令。
保珠 Bǎozhū (ch.8)	—	—	—	performer	ch.8	Performer in ch.8 restaurant scene; distinct from the ch.1 theatre Baozhu	第8回酒楼场面的伶人；非第1回的保珠。
梅士燮 Méi Shìxiè	铁庵	46	Jinling	official	ch.1	Hanlin reader; Ziyu's father; stern Confucian; promoted to vice-minister later; appointed provincial examiner (ch.15)	翰林侍读；子玉之父；严厉的儒者；后升任侍郎；第15回任主考官。
王文辉 Wáng Wénhuī	—	~55	Jinling	official	ch.1	3rd-rank Tongzheng official; Wang Xun's father; father-in-law of Yan Zhongqing; same hometown as Mei Shixie	三品通政使；王恂之父；颜仲清之岳父；与梅士燮同乡。
孙亮功 Sūn Liàngōng	—	~50	Jinling	official	ch.2	An official in the Ministry of Works whose household is a source of domestic drama. Known for his colorful and comic personality at banquets.	工部官员，孙氏兄弟之父。其家宅内斗频发，常在宴席上闹出笑话。
杨方猷 Yáng Fāngyóu	—	—	—	official	ch.2	Ministry of War deputy director; guest at Wang Wenhui's banquet	兵部员外郎；王文辉宴会宾客。
周锡爵 Zhōu Xíjué	—	—	—	official	ch.2	Guanglu Temple junior director; guest at Wang Wenhui's banquet	光禄寺少卿；王文辉宴会宾客。
陆宗沅 Lù Zōngyuán	—	—	—	official	ch.2	Censor; gets wine sprayed in his face by Sun Lianggong; cousin of the two Madam Lu	御史；被孙亮功喷了一脸酒；两位陆夫人的堂兄弟。
富伦 Fú Lún	富三爷	~30	Jiangning	official	ch.3	A warm-hearted and wealthy official who serves as a generous patron to performers. A close friend of many scholars who often mediates social conflicts.	内务府官员，为人热诚。他是名伶们的重要赞助人，常在京城社交圈中排忧解难。
贵芬 Guì Fēn	贵大爷	~30	—	official	ch.3	7th-rank ministry clerk; prudent and steady; Fu Lun's close friend	七品部吏；谨慎稳重；富伦好友。
华光宿 Huá Guāngsù	华公子 / 星北	21	—	official	ch.5	A high-ranking noble and owner of Jinchun Garden. While dissolute, he possesses genuine taste, but his possessive acquisition of Qinyan (ch. 28) makes him a primary antagonist.	世袭侯爵，锦春园主。虽放荡不羁但颇具文采，因强纳琴言入府（第28回）而成为核心反派。
曹长庆 Cáo Chángqìng	—	—	—	official	ch.3	Took in the ill Qinyan before she entered the troupe officially; mentioned briefly	琴言入班前曾收留生病的她；简短提及。
史曾望 Shǐ Zēngwàng	—	—	—	official	ch.1	Shi Nanxiang's father; Censor (吏科给事中)	史南湘之父；吏科给事中。
袁浩 Yuán Hào	—	—	—	official	ch.5	Yunnan governor; Xu Ziyun's father-in-law	云南巡抚；徐子云岳父。
徐震 Xú Zhèn	—	—	—	official	ch.5	Grand Secretary; Xu Ziyun's father; governs Guangdong	大学士；徐子云之父；总督广东。
徐子容 Xú Zǐróng	—	—	—	official	ch.5	Xu Ziyun's elder brother; Huaiyang circuit intendant	徐子云之兄；淮扬道。
刘侍郎 Liú Shìláng	—	—	—	official	ch.6	Vice-minister; Liu Wenze's father; attends the Spring Festival banquet	刘侍郎；刘文泽之父；出席春节宴会。
吴阁学 Wú Gé Xué	—	—	—	official	ch.6	Grand Secretary; Zhang Zhongyu's maternal uncle	大学士；张仲雨舅父。
沈司业 Shěn Sīyè	—	—	—	official	ch.6	National Academy director; Shen Bocai's father; old-fashioned Confucian; praises Ziyu	国子监司业；沈伯才之父；守旧儒者；赞赏子玉。
巴天宠 Bā Tiānchǒng	—	~40	Tianjin	official	ch.6	Garrison commander; father of Ba Lin and Ba Laifeng; misled by a matchmaker	总兵；巴霖与巴来风之父；被媒人误导。
陆宗淮 Lù Zōnghuái	—	—	Sichuan	official	ch.6	Judicial commissioner of Sichuan; elder brother of the two Madam Lu	四川按察使；两位陆夫人之兄。
田状元 Tián Zhuàngyuán	—	—	—	official	ch.49	Top imperial exam graduate; proposes marriage in ch.49	状元；第49回提亲。
侯太史 Hóu Tàishǐ	—	—	—	official	ch.56	Hanlin historian; feigns charity toward orphans; hypocritical antagonist	翰林太史；假装慈善；虚伪的反派。
詹事府正詹事庄 Zhuāng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	詹事府正詹事；春节宴会宾客。
左庶子郑 Zhèng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	左庶子；春节宴会宾客。
国子监司业张 Zhāng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	国子监司业；春节宴会宾客。
掌山西道陆 Lù	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	掌山西道；春节宴会宾客。
奚十一 Xī Shíyī	奚正绅	~30	Guangdong	villain	ch.3	A violent and wealthy Cantonese merchant known as the 'Smoke-Blackened Grand Duke.' He repeatedly harasses Qinyan, ultimately suffering grotesque karmic retribution.	绰号“烟熏太岁”的广东富商。屡次纠缠迫害琴言，最终在第40及58回遭到惨烈的报应。
潘其观 Pān Qíguān	—	—	—	villain	ch.13	A malicious schemer and chronic gambler associated with Xi Shiyi. He endures a series of degrading physical punishments as retribution for his misdeeds.	奚十一的帮凶，为人阴险好赌。因作恶多端，在书中后段多次遭遇毒打与恶疾报应。
老王 Lǎo Wáng	—	~60	—	villain	ch.3	Hunchbacked jade-vendor; tries to extort Pincai at the theatre; expelled by Xi Shiyi's men	驼背玉商；在剧场敲诈聘才；被奚十一的人赶走。
唐和尚 Táng Héshang	—	~40	—	minor	ch.8	Wine-and-meat Buddhist monk (酒肉和尚); purple-faced; fur-robed; friend of Zhang Zhongyu; arranges meetings; comic figure in ch.8	酒肉和尚；紫脸皮袄；张仲雨之友；安排会面；喜剧人物。
起盛银号潘老三 Pān Lǎosān	—	—	—	minor	ch.8	Silver-exchange merchant; dines with Zhang Zhongyu in ch.8; very minor	银号商人；第8回与张仲雨共餐。
屈本立 Qū Běnlì	道生	—	—	minor	ch.7	Calligrapher; his ancient-style inscription hangs in Liu Wenze's study room (ch.7)	书法家；其古风题字挂在刘文泽书房。
华夫人 Huá Fūrén	—	—	—	minor	ch.5	"Hua Guangsu's beautiful wife; née Su, daughter of Jingbian Hou (靖边侯); described as 'the most beautiful woman in the empire'; ten pearl-maids"	华光宿之妻；靖边侯之女；号称“天下第一美人”。
青姨奶奶 Qīng Yínǎinai	—	—	—	minor	ch.3	One of Fu Lun's two quarrelling concubines; fights with Bai Yinainai; mentioned by Rong Guan	富伦的姨太太；与白姨奶奶争吵。
白姨奶奶 Bái Yínǎinai	—	—	—	minor	ch.3	Fu Lun's other quarrelling concubine; fights with Qing Yinainai; mentioned by Rong Guan	富伦的另一位姨太太；与青姨奶奶争吵。
阿呆 Ā Dāi	—	—	—	minor	ch.23	Simple-minded victim who is cruelly harmed by Xi Shiyi's men in ch.23	愚笨的受害者；第23回遭奚十一手下残害。
劣幕 Liè Mù	—	—	—	minor	ch.23	Corrupt private secretary encountered riding the night-soil cart; describes his dissolute schemes (ch.23)	腐败的幕友；出现在粪车上；描述其放荡阴谋。
苗先生 Miáo Xiānsheng	—	—	—	minor	ch.42	Su Huifang's widowed aunt/guardian's male advisor; extorts money for Suifang's redemption in ch.42	苏蕙芳婶母的谋士；在赎身时敲诈钱财。
何三 Hé Sān	—	—	—	minor	ch.18	Dissolute patron type in ch.18; teaches tricks to exploit performers	放荡的赞助人；教授剥削伶人的技巧。
王大夫 Wáng Dàfū	—	—	—	minor	ch.4	Doctor who treats Sun Lianggong when the Sun household couple have a fight; mentioned by Sihui in ch.4	医生；在孙亮功夫妇吵架后为其诊治。
颜夫人 Yán Fūrén	—	44	Jinling	female	ch.1	Wife of Mei Shixie; moral guardian of the novel; arranges Ziyu's betrothal to Wang Qionghua	梅士燮之妻；小说中的道德守护者；安排子玉与王琼华的婚事。
陆氏夫人（王家）	—	40	—	female	ch.1	Wang Wenhui's second wife; stepmother to Wang Xun; sister of Sun family's Madam Lu	王文辉继室；王恂继母；孙家陆夫人之妹。
孙氏 Sūn Shì	—	—	—	female	ch.1	Wang Xun's wife; daughter of Sun Lianggong	王恂之妻；孙亮功之女。
蓉华 Rónghuá	—	—	—	female	ch.1	Yan Zhongqing's wife; Wang Wenhui's daughter; sister of Wang Qionghua	颜仲清之妻；王文辉之女；王琼华之姐。
王琼华 Wáng Qiónghúa	—	16	—	female	ch.1	Wang Wenhui's second daughter; shy; scratches Ziyu's poem; eventually betrothed and married to Ziyu	王文辉次女；害羞；涂抹子玉的诗；最终嫁给子玉。
袁夫人 Yuán Fūrén	—	23	—	female	ch.5	Xu Ziyun's wife; née Yuan; daughter of Yunnan governor; beautiful and virtuous	徐子云之妻；云南巡抚之女；美丽贤德。
郑氏 Zhèng Shì	—	—	—	female	ch.1	Yan Zhuang's wife; fasted to death after his death; honoured for chastity; Yan Zhongqing's mother	颜庄之妻；绝食殉夫；贞节受表彰；颜仲清之母。
苏蕙芳婶母 Sū Fūrén	—	—	—	female	ch.43	Su Huifang's widowed aunt/guardian; deceived by Suifang in ch.43 to allow her redemption	苏蕙芳的婶母；第43回被蕙芳欺骗以允许其赎身。
许三姐 Xǔ Sānjiě	—	—	—	female	ch.49	Recognizes a lost brother unexpectedly; family reunion subplot in ch.49	意外认出失散的弟弟；家庭团圆情节。
林氏 Lín Shì	—	—	—	female	ch.50	Courtesan married by Wei Pincai in ch.50 after he helps revise opera texts	妓女；魏聘才改写剧本后娶其为妻。
陆氏夫人（孙家）	—	39	—	female	ch.6	Sun Lianggong's second wife; jealous and domineering; sister of Wang family's Madam Lu	孙亮功继室；嫉妒霸道；王家陆夫人之姐。
沈芸姑 Shěn Yúngū	—	—	—	female	ch.6	Sun Sihui's wife; née Shen; intelligent but miserable in marriage	孙嗣徽之妻；聪明但婚姻不幸。
巴来风 Bā Láifēng	—	~17	—	female	ch.6	Sun Siyuan's wife; née Ba; beautiful and fierce; physically overpowers husband on wedding night	孙嗣元之妻；美丽凶悍；新婚之夜制服丈夫。
王大姑娘	—	~29	—	female	ch.2	Wang Wenhui's eldest daughter; prematurely white-haired; unable to marry	王文辉长女；少白头；无法出嫁。
佩秋 Pèiqiū	—	~18	—	female	ch.6	Wang Xun's wife; née Sun; daughter of Sun Lianggong's second wife; gentle and beautiful	王恂之妻；孙亮功继室之女；温柔美丽。
潘氏 Pān Shì	—	—	—	female	ch.58	Pan Qiguan's wife; involved in a scandalous scene in ch.58	潘其观之妻；第58回涉及丑闻场面。
云儿 Yún'ér	—	~12	—	servant	ch.1	Ziyu's personal page; rides on horseback; runs errands and carries messages throughout	子玉的小厮；骑马；负责跑腿传信。
俊儿 Jùn'ér	—	~12	—	servant	ch.1	Ziyu's second young page; carries lanterns; also rides on horseback alongside Yun'er	子玉的第二个小厮；打灯笼；也骑马。
许顺 Xǔ Shùn	—	—	—	servant	ch.2	Mei household steward and accounts manager; came with Lady Yan from her natal home	梅府管家；随颜夫人从娘家来。
许顺妻 Xǔ Shùn qī	—	—	—	servant	ch.3	Xu Shun's wife; works alongside him in household management	许顺之妻；协助管理家务。
梅进 Méi Jìn	—	—	—	servant	ch.2	Mei household gate attendant; called in to receive and seat guests	梅府门房；负责接待客人。
虎儿 Hǔ'ér	—	—	—	servant	ch.8	Household page in the Mei residence; brings messages between rooms	梅府小厮；负责传话。
书僮 (×2)	—	—	—	servant	ch.4	Two unnamed study boys; wait outside schoolroom; bring tea during the snow-appreciation gathering	书童；在书房外候着；端茶倒水。
仆妇（门上）	—	—	—	servant	ch.2	Doorwoman who brings calling cards from Wei Pincai and Li Yuanmao in to Mei Shixie	门上仆妇；递送名帖。
家人媳妇（衣裳）	—	—	—	servant	ch.1	Household woman who fetches Ziyu's fur coat at Lady Yan's instruction	家里的媳妇；负责取衣物。
小丫鬟（子玉书房）	—	—	—	servant	ch.7	Maidservant in Ziyu's study; reports that Wang Qionghua scratched out two characters from Ziyu's poem; relays betrothal gossip from Xue'er	子玉书房的小丫鬟；报告王琼华涂诗；传闲话。
四儿 Sì'ér	—	—	—	servant	ch.2	Wei Pincai's personal page-boy; carries money; sits on carriage edge; receives tips from Fu Lun	魏聘才的小厮；管钱；坐车沿；收小费。
健儿 Jiàn'ér	—	—	—	servant	ch.4	Yan Zhongqing's running-boy messenger; carries letters between the Yan and Mei households	颜仲清的跑腿；在颜梅两家间传信。
雪儿 Xuě'ér	—	—	—	servant	ch.7	Wang Qionghua's personal maidservant; gossips about the betrothal arrangement and the jade hairpin incident	王琼华的贴身丫鬟；传关于婚约和玉簪的闲话。
松儿 Sōng'ér	—	—	—	servant	ch.6	Originally Shen Yungu's dowry maid; taken as concubine by Sun Sihui; effectively relieves Shen Yungu	沈芸姑的陪嫁丫鬟；被孙嗣徽收为妾。
伴送婆（巴家）	—	—	—	servant	ch.6	Bridal escort matron who accompanied Ba Laifeng to the Sun household; mediates the violent wedding night	巴家的送亲婆；调解新婚之夜的冲突。
乳母（巴来风）	—	—	—	servant	ch.6	Ba Laifeng's childhood nanny; persuades her to accept the marriage with moral arguments	巴来风的奶妈；劝其接受婚姻。
跟班（富家）	—	—	—	servant	ch.3	Fu Lun's neat household attendant; brings tea to Pincai; wears plain silk padded jacket	富府跟班；端茶；穿素绸棉袄。
卢大爷 Lú Dàyé	—	—	—	servant	ch.5	Hua Guangsu's stable and livestock manager; oversees 100+ horses and 70–80 large mules	华府马房总管；管理百余匹马。
跟班队（华家，~20–30人）	—	—	—	servant	ch.5	20–30 liveried grooms and mounted escorts who accompany Hua Guangsu on outings	华府跟班队；随华光宿出巡。
叶茂林 Yè Màolín	—	50+	Suzhou	servant	ch.2	Impresario who bought and transported the young performers from Suzhou to Beijing by canal boat	班主；将伶人从苏州运往北京。
金二 Jīn Èr	—	—	—	servant	ch.3	Head troupe manager (掌班) of the Lianjin troupe; negotiates booking contracts	联锦班掌班；负责签约。
老三 Lǎo Sān	—	—	—	servant	ch.3	Restaurant server at the crockery-smashing scene; scolded for not bringing fine enough porcelain	酒楼伙计；因瓷器不够好被骂。
掌柜的 Zhǎngguì de	—	—	—	servant	ch.3	Restaurant owner in the crockery-smashing scene; fawns on Xi Shiyi; lectures waiter on porcelain acoustics	酒楼掌柜；讨好奚十一。
梅鼎 Méi Dǐng	—	—	—	deceased	ch.1	Mei Shixie's grandfather; former Minister of Personnel (吏部尚书)	梅士燮之祖父；前吏部尚书。
梅羹调 Méi Gēngdiào	—	—	—	deceased	ch.1	Mei Shixie's father; former Grand Secretary (文华殿大学士)	梅士燮之父；前文华殿大学士。
颜庄 Yán Zhuāng	—	—	—	deceased	ch.1	Hanlin compiler; Lady Yan's brother; died at 30; Yan Zhongqing's father	翰林编修；颜夫人之弟；30岁去世；颜仲清之父。
颜尧臣 Yán Yàochén	—	—	—	deceased	ch.1	Left Censor; Lady Yan's father	左都御史；颜夫人之父。
富安世 Fù Ānshì	—	—	—	deceased	ch.3	Fu Lun's father; former Jiangnan governor; venerated as a local deity in Nanjing	富伦之父；前江南巡抚；在南京被尊为地方神。
杜琴师 Dù Qínshī	—	—	Jiangsu	deceased	ch.5	Qinyan's father; a zither-maker; died of anger after being humiliated by a powerful man	琴言之父；琴师；受辱后气绝身亡。
杜母 Dù Mǔ	—	—	Jiangsu	deceased	ch.5	Qinyan's mother; died of grief a year after her husband	琴言之母；夫死后一年忧郁而亡。
杜族叔 Dù Zúshū	—	—	—	deceased	ch.5	Qinyan's clan uncle who took him in; died when Qinyan was 13	琴言族叔；收留琴言；琴言13岁时去世。
魏老仁 Wèi Lǎorén	—	—	—	deceased	ch.2	Wei Pincai's father; a failed litigious scholar; now works in a salt bureau	魏聘才之父；落魄文人；在盐务局工作。
刘喜 Liú Xǐ	—	40+	—	servant	ch.55	Loyal longtime attendant to Qu Daosheng; protects and supports Qinxian through illness, theft, funeral rites, and return arrangements	屈道生的老仆；在重病、失窃、丧事与返京过程中始终尽心扶持琴仙。
侯石翁 Hóu Shíwēng	石翁	74	Nanjing	scholar	ch.55	Elder literary celebrity at Phoenix Mountain; outwardly patronizing but morally ambiguous in his treatment of Qinxian after Daosheng's death	凤凰山文坛名宿；在道翁身后对琴仙“照应”中显出复杂且暧昧的真实面目。
巴英官 Bā Yīngguān	英官	~15	—	servant	ch.40	Youth attached to Xi Shiyi's household; central to Xi's late-stage debauchery arc and ensuing bodily retribution	奚十一身边少年；卷入其后期淫乱与报应情节，是关键当事人之一。
菊花 Júhuā	—	20+	Guangxi	minor	ch.40	Xi Shiyi's intimate companion; frequently appears in his domestic and decline arcs, including the retribution episodes	奚十一身边亲近之人；在其家内生活与衰败报应线中反复出现。
得月 Déyuè	—	~17	—	performer	ch.40	Young novice/performance-world youth linked with Xi Shiyi, Wei Pincai, and Pan Qiguan; pivotal in major karmic episodes in later chapters	与奚十一、魏聘才、潘其观等线索相连的重要少年人物；在后段多起报应事件中居关键位置。
卓天香 Zhuō Tiānxiāng	—	—	—	performer	ch.40	Performer associated with Wei Pincai's circle; appears repeatedly in the Xi Shiyi/Pan Qiguan late-stage entanglements	与魏聘才圈层相关的伶人；在奚十一、潘其观后期纠葛中多次出现。
阳善修 Yáng Shànxiū	—	—	—	minor	ch.40	Doctor specializing in intimate ailments; repeatedly called to treat major injuries and illnesses of key characters in late chapters	专治下体病症的医生；在后段关键人物伤病处理中多次出场。
屈道翁 Qū Dàowēng	道翁	—	—	scholar	ch.38	Major senior scholar associated with Qu Benli/Qu Fangzheng; adopts Qinxian, mentors him, and remains central through the late-chapter shrine and dream arcs	书中后段核心名士，与屈本立/屈方正同一人物线；收养并教导琴仙，牵动建祠与托梦主线。
苏侯 Sū Hóu	—	—	—	official	ch.48	Powerful noble household head; father-in-law of Tian Chunhang through his daughter's marriage	权势显赫的侯门家长；其女与田春航成婚后，成为田春航岳家核心人物。
姬亮轩 Jī Liàngxuān	—	—	—	minor	ch.27	Corrupt hanger-on tied to Xi Shiyi's milieu; repeatedly appears in rumor, coercion, and underhand social manipulation arcs	与奚十一圈层相关的奸滑人物；多次卷入流言、挟制与权势投机情节。
金粟 Jīn Sù	—	—	—	scholar	ch.32	Literary-circle member active in later gatherings, inscriptions, and the Nine Fragrance cultural projects	后段文士圈成员之一，参与题赞、聚会与九香楼文化工程。
张笑梅 Zhāng Xiàoméi	—	—	—	performer	ch.19	Performer connected to Wei Pincai's social circle; appears in his expanding pleasure-network entanglements	与魏聘才交游圈相关的伶人，出现在其声色关系扩张阶段的关键场景中。
杨梅窗 Yáng Méichuāng	—	—	—	performer	ch.19	Performer in Wei Pincai's orbit; linked to his theatrical-social network and late-stage decline arc	魏聘才圈层伶人之一，牵连其戏园交游网络与后期失序线索。
周小三 Zhōu Xiǎosān	—	—	—	servant	ch.40	Driver and fixer tied to Pan Qiguan's household sphere; central participant in the revenge setup against Pan	与潘其观圈层关联的车夫/办事人；在对潘的报复布局中居关键执行位置。
孟七 Mèng Qī	—	—	—	servant	ch.44	Xu Ziyun household servant appearing in communication and dispatch tasks during conflict-heavy chapters	徐子云家中仆从，主要出现在冲突密集段落中的传递与差遣环节。
姚贤 Yáo Xián	—	—	—	servant	ch.44	Outer attendant under Hua Guangsu's side, dispatched in retrieval and pursuit errands around Qinyan's transfer period	华光宿一侧外跟班人物，在琴言去留风波中承担追索差事。
吴紫烟 Wú Zǐyān	—	23	—	female	ch.57	Liu Wenze's wife; one of the central ladies in Yuan Qixiang's Chapter 57 women-only drinking-game gathering	刘文泽之妻；第57回袁绮香闺阁酒令局中的核心女性成员之一。
蔡某 Cài Mǒu	—	—	—	minor	ch.35	Named suspect in temple theft-related incident chain; appears in the investigation and blame-casting context	寺中失窃事件链条中的具名嫌疑角色，出现在追查与归责语境中。
长庆师娘 Chángqìng Shīniáng	—	—	—	female	ch.42	Widow of troupe master Changqing; involved in maintenance-price bargaining and pressure over performer arrangements	长庆亡后相关寡妇角色；在养赡索价与伶人去留博弈中承担关键施压方。
苏浣香 Sū Huànxiāng	—	21	—	female	ch.57	Wife of Hua Guangsu; ranked 5th among the seven ladies at Yuan Qixiang's ch.57 gathering; graceful and witty	华光宿之妻；第57回袁绮香闺阁酒令局七位女主之一，排行第五；温婉机智。
浣兰 Huàn Lán	—	19	—	female	ch.57	Wife of Tian Chunhang; ranked 6th among the seven ladies at Yuan Qixiang's ch.57 gathering; youngest of the group	田春航之妻；第57回袁绮香闺阁酒令局七位女主之一，排行第六；年龄最小。
红雪 Hóng Xuě	—	—	—	servant	ch.57	Yuan Qixiang's maidservant; active participant in the tongue-twister drinking games in ch.57	袁绮香的丫鬟；第57回酒令游戏中的活跃参与者。
红香 Hóng Xiāng	—	—	—	servant	ch.57	Yuan Qixiang's maidservant; participates in chess and shoe-game sequences in ch.57	袁绮香的丫鬟；第57回棋局与鞋令游戏的参与者。
花珠 Huā Zhū	—	—	—	servant	ch.57	Su Huanxiang's maidservant, lent to Yuan Qixiang's team; plays the role of 商君 in the ch.57 games	苏浣香的丫鬟，被借入袁绮香一方；第57回扮演"商君"角色。
画珠 Huà Zhū	—	—	—	servant	ch.57	Ronghua's maidservant; plays the role of 蔺相如 in the ch.57 poetry-card games	蓉华的丫鬟；第57回诗牌游戏中扮演"蔺相如"角色。
明珠 Míng Zhū	—	—	—	servant	ch.57	Su Huanxiang's maidservant; participates in the topknot and tongue-twister games in ch.57	苏浣香的丫鬟；第57回参与顶针续麻令与绕口令游戏。
荷珠 Hé Zhū	—	—	—	servant	ch.57	Huanlan's maidservant; plays the role of 孟尝君 in the ch.57 games	浣兰的丫鬟；第57回扮演"孟尝君"角色。
蕊珠 Ruǐ Zhū	—	—	—	servant	ch.57	Wang Qionghua's maidservant; plays the role of 张子房 in the ch.57 dice games	王琼华的丫鬟；第57回扮演"张子房"角色。`;

const ROLE_MAP: Record<string, string> = {
  scholar: '名士',
  performer: '伶人',
  official: '官员',
  villain: '反派',
  minor: '配角',
  female: '女性',
  servant: '仆从',
  deceased: '已故',
  Other: '其他'
};

const ORIGIN_MAP: Record<string, string> = {
  'Suzhou': '苏州',
  'Yangzhou': '扬州',
  'Jinling': '金陵',
  'Beijing': '北京',
  'Zhejiang': '浙江',
  'Hangzhou': '杭州',
  'Jiangnan': '江南',
  'Jiangsu': '江苏',
  'Anhui': '安徽',
  'Fujian': '福建',
  'Guangdong': '广东',
  'Shanxi': '山西',
  'Shandong': '山东',
  'Sichuan': '四川',
  'Hubei': '湖北',
  'Hunan': '湖南',
  'Jiangxi': '江西',
  'Henan': '河南',
  'Hebei': '河北',
  'Shaanxi': '陕西',
  'Gansu': '甘肃',
  'Yunnan': '云南',
  'Guizhou': '贵州',
  'Guangxi': '广西',
  'Zhejiang, Shanyin': '浙江山阴',
  'Suzhou, Wu County': '苏州吴县',
  'Hanyang': '汉阳',
  'Jiangning': '江宁',
  'Tianjin': '天津',
  'Hunan, Xiangtan': '湖南湘潭',
  'Henan, Zhengyang': '河南正阳',
  '—': '—'
};

const baseRelationships: Relationship[] = [
  // Core Protagonists: Mei Ziyu (char-0)
  { source: 'char-0', target: 'char-1', type: 'Soulmate', typeZh: '情定知己' },
  { source: 'char-0', target: 'char-90', type: 'Marriage', typeZh: '明媒正娶' },
  { source: 'char-0', target: 'char-4', type: 'Cousin', typeZh: '中表之亲' },
  { source: 'char-0', target: 'char-2', type: 'Close Cousin', typeZh: '姑侄同袍' },
  { source: 'char-0', target: 'char-47', type: 'Father/Son', typeZh: '严父慈子' },
  { source: 'char-0', target: 'char-86', type: 'Mother/Son', typeZh: '母子情深' },
  { source: 'char-0', target: 'char-7', type: 'Literary Circle', typeZh: '文坛诗友' },
  { source: 'char-0', target: 'char-18', type: 'Veneration', typeZh: '修建祠堂' },
  { source: 'char-0', target: 'char-19', type: 'Benefactor', typeZh: '提携后辈' },
  { source: 'char-0', target: 'char-20', type: 'Student/Tutor', typeZh: '师生' },
  { source: 'char-0', target: 'char-102', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-0', target: 'char-103', type: 'Master/Servant', typeZh: '主仆' },

  // Du Qinyan (char-1)
  { source: 'char-1', target: 'char-7', type: 'Patron/Protege', typeZh: '救赎恩主' },
  { source: 'char-1', target: 'char-23', type: 'Loyal Friend', typeZh: '同门挚友' },
  { source: 'char-1', target: 'char-31', type: 'Companion', typeZh: '进京同伴' },
  { source: 'char-1', target: 'char-56', type: 'Former Guardian', typeZh: '曾收留者' },
  { source: 'char-1', target: 'char-130', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-1', target: 'char-131', type: 'Mother/Son', typeZh: '母子' },
  { source: 'char-1', target: 'char-132', type: 'Uncle/Nephew', typeZh: '族叔' },

  // Yan Zhongqing (char-2)
  { source: 'char-2', target: 'char-86', type: 'Aunt/Nephew', typeZh: '姑侄' },
  { source: 'char-2', target: 'char-89', type: 'Marriage', typeZh: '入赘姊妹' },
  { source: 'char-2', target: 'char-92', type: 'Mother/Son', typeZh: '母子' },
  { source: 'char-2', target: 'char-127', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-2', target: 'char-113', type: 'Master/Servant', typeZh: '主仆' },

  // Shi Nanxiang (char-3) & Tian Chunhang (char-15)
  { source: 'char-3', target: 'char-25', type: 'Unrequited Love', typeZh: '痴情苦恋' },
  { source: 'char-15', target: 'char-25', type: 'Passionate Pursuit', typeZh: '热烈追求' },
  { source: 'char-3', target: 'char-57', type: 'Father/Son', typeZh: '父子' },

  // Xu Ziyun Circle (char-7)
  { source: 'char-7', target: 'char-23', type: 'Favored Performer', typeZh: '钟爱伶人' },
  { source: 'char-7', target: 'char-8', type: 'Intimate Friend', typeZh: '莫逆之交' },
  { source: 'char-7', target: 'char-9', type: 'Friend', typeZh: '好友' },
  { source: 'char-7', target: 'char-91', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-7', target: 'char-58', type: 'Son-in-law/Father-in-law', typeZh: '翁婿' },
  { source: 'char-7', target: 'char-59', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-7', target: 'char-60', type: 'Brothers', typeZh: '兄弟' },

  // Wang Family (char-4, 48)
  { source: 'char-4', target: 'char-48', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-4', target: 'char-87', type: 'Stepmother/Son', typeZh: '继母子' },
  { source: 'char-4', target: 'char-88', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-4', target: 'char-100', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-48', target: 'char-87', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-48', target: 'char-89', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-48', target: 'char-90', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-48', target: 'char-99', type: 'Father/Daughter', typeZh: '父女' },

  // Sun Family (char-21, 22, 49)
  { source: 'char-21', target: 'char-22', type: 'Brothers', typeZh: '同胞兄弟' },
  { source: 'char-21', target: 'char-49', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-21', target: 'char-97', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-21', target: 'char-115', type: 'Concubine', typeZh: '收为妾' },
  { source: 'char-22', target: 'char-49', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-22', target: 'char-98', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-49', target: 'char-96', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-49', target: 'char-88', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-49', target: 'char-100', type: 'Father/Daughter', typeZh: '父女' },

  // Performers
  { source: 'char-28', target: 'char-29', type: 'Brothers', typeZh: '同胞兄弟' },

  // Villains & Antagonists
  { source: 'char-72', target: 'char-33', type: 'Associated', typeZh: '有关' },
  { source: 'char-72', target: 'char-81', type: 'Oppressor', typeZh: '残害' },
  { source: 'char-72', target: 'char-124', type: 'Fawning', typeZh: '讨好' },
  { source: 'char-5', target: 'char-6', type: 'Scheming Peers', typeZh: '狐朋狗友' },
  { source: 'char-5', target: 'char-95', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-5', target: 'char-112', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-5', target: 'char-133', type: 'Father/Son', typeZh: '父子' },

  // Others
  { source: 'char-10', target: 'char-21', type: 'Mockery', typeZh: '嘲弄' },
  { source: 'char-10', target: 'char-22', type: 'Mockery', typeZh: '嘲弄' },
  { source: 'char-6', target: 'char-20', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-47', target: 'char-86', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-53', target: 'char-54', type: 'Friend', typeZh: '好友' },
  { source: 'char-53', target: 'char-79', type: 'Concubine', typeZh: '姨太太' },
  { source: 'char-53', target: 'char-80', type: 'Concubine', typeZh: '姨太太' },
  { source: 'char-53', target: 'char-129', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-55', target: 'char-78', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-55', target: 'char-42', type: 'Companion', typeZh: '私人伴侣' },
  { source: 'char-9', target: 'char-61', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-11', target: 'char-62', type: 'Nephew/Uncle', typeZh: '舅侄' },
  { source: 'char-12', target: 'char-63', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-13', target: 'char-64', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-98', target: 'char-64', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-18', target: 'char-19', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-86', target: 'char-127', type: 'Brother/Sister', typeZh: '姐弟' },
  { source: 'char-86', target: 'char-128', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-104', target: 'char-105', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-90', target: 'char-114', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-2', target: 'char-113', type: 'Master/Servant', typeZh: '主仆' },
];

const parsedCharacters: Character[] = rawData.split('\n').map((line, index) => {
  const [name, alias, age, originRaw, role, chapter, description, descriptionZh] = line.split('\t');
  const origin = originRaw?.trim().replace(/^"(.*)"$/, '$1') || '—';
  
  return {
    id: `char-${index}`,
    name: name?.trim() || 'Unknown',
    alias: alias?.trim() || '—',
    age: age?.trim() || '—',
    origin,
    originZh: ORIGIN_MAP[origin] || origin,
    role: role?.trim() || 'Other',
    roleZh: ROLE_MAP[role?.trim() || 'Other'] || role?.trim() || '其他',
    chapter: chapter?.trim() || '—',
    chapterNum: parseInt(chapter?.match(/\d+/)?.[0] || '999'),
    description: description?.trim() || '',
    descriptionZh: descriptionZh?.trim() || ''
  };
});

type MergeGroup = {
  canonicalNameKeyword: string;
  memberNameKeywords: string[];
};

const mergeGroups: MergeGroup[] = [
  {
    canonicalNameKeyword: '屈道翁',
    memberNameKeywords: ['屈方正', '屈本立', '屈道翁'],
  },
  {
    canonicalNameKeyword: '孙氏',
    memberNameKeywords: ['孙氏', '佩秋'],
  },
];

const idRemap: Record<string, string> = {};
const mergedIdentityAliasesByCanonicalId: Record<string, string[]> = {};

for (const group of mergeGroups) {
  const members = parsedCharacters.filter((c) =>
    group.memberNameKeywords.some((keyword) => c.name.includes(keyword))
  );
  if (members.length <= 1) continue;

  const canonical =
    members.find((c) => c.name.includes(group.canonicalNameKeyword)) || members[0];
  const nonCanonical = members.filter((c) => c.id !== canonical.id);
  const mergedAliases = [
    ...new Set(
      members
        .flatMap((c) => [c.name, ...c.alias.split('/').map((item) => item.trim())])
        .map((item) => item.trim())
        .filter((item) => item && item !== '—' && item !== canonical.name)
    ),
  ];

  canonical.alias = mergedAliases.join(' / ') || canonical.alias;
  for (const removed of nonCanonical) {
    idRemap[removed.id] = canonical.id;
  }
  mergedIdentityAliasesByCanonicalId[canonical.id] = mergedAliases;
}

export const characters: Character[] = parsedCharacters.filter((c) => !idRemap[c.id]);

export const identityLinksById: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {};
  for (const [canonicalId, aliases] of Object.entries(mergedIdentityAliasesByCanonicalId)) {
    map[canonicalId] = aliases;
  }
  return map;
})();

const relationshipKey = (rel: Relationship) =>
  [rel.source, rel.target, rel.type, rel.typeZh].join('|');

function findCharacterIdByNameKeyword(keyword: string): string | undefined {
  return characters.find((c) => c.name.includes(keyword))?.id;
}

type RelationshipSpec = {
  sourceKeyword: string;
  targetKeyword: string;
  type: string;
  typeZh: string;
};

const chapterValidatedRelationshipSpecs: RelationshipSpec[] = [
  // Isolated-character links added only where the chapter text/character notes state direct ties.
  { sourceKeyword: '祝芳年', targetKeyword: '徐子云', type: 'Literary Circle Peer', typeZh: '文会同人' },
  { sourceKeyword: '苏蕙芳', targetKeyword: '杜琴言', type: 'Allied Performers', typeZh: '伶界盟友' },
  { sourceKeyword: '金漱芳', targetKeyword: '李玉林', type: 'Lianzhu Troupe Colleagues', typeZh: '联珠班同伶' },
  { sourceKeyword: '蓉官', targetKeyword: '富伦', type: 'Friend/Patron Circle', typeZh: '友朋与 patron 圈' },
  { sourceKeyword: '小福', targetKeyword: '富伦', type: 'Sponsored Performer', typeZh: '出师资助' },
  { sourceKeyword: '玉美', targetKeyword: '田春航', type: 'Tavern Encounter', typeZh: '酒楼同场' },
  { sourceKeyword: '保珠 Bǎozhū (ch.1)', targetKeyword: '袁宝珠', type: 'Name Confusion', typeZh: '同名误认' },
  { sourceKeyword: '袁绮香', targetKeyword: '吴紫烟', type: 'Women\'s Gathering Host/Guest', typeZh: '闺阁酒令主客' },
  { sourceKeyword: '袁绮香', targetKeyword: '王琼华 Wáng Qiónghúa (performer)', type: 'Women\'s Gathering Host/Guest', typeZh: '闺阁酒令主客' },
  { sourceKeyword: '谭八', targetKeyword: '孙亮功', type: 'Imitated Performer', typeZh: '被模仿之角' },
  { sourceKeyword: '小顺儿', targetKeyword: '富伦', type: 'Brought by Patron', typeZh: '携带引见' },
  { sourceKeyword: '小顺儿', targetKeyword: '华光宿', type: 'Rejected by Patron', typeZh: '遭权门拒绝' },
  { sourceKeyword: '二喜', targetKeyword: '李元茂', type: 'Attached Performer/Patron', typeZh: '缠附与 patron' },
  { sourceKeyword: '杨方猷', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '周锡爵', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '陆宗沅', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '陆宗淮', targetKeyword: '陆氏夫人（王家）', type: 'Brother/Sister', typeZh: '兄妹' },
  { sourceKeyword: '陆宗淮', targetKeyword: '陆氏夫人（孙家）', type: 'Brother/Sister', typeZh: '兄妹' },
  { sourceKeyword: '侯太史', targetKeyword: '杜琴言', type: 'Predatory Patronage Attempt', typeZh: '假义逼迫' },
  { sourceKeyword: '老王', targetKeyword: '魏聘才', type: 'Extortion Attempt', typeZh: '敲诈冲突' },
  { sourceKeyword: '老王', targetKeyword: '奚十一', type: 'Driven Out By', typeZh: '被其手下驱逐' },
  { sourceKeyword: '唐和尚', targetKeyword: '张仲雨', type: 'Friend/Intermediary', typeZh: '交游中介' },
  { sourceKeyword: '起盛银号潘老三', targetKeyword: '张仲雨', type: 'Dining Companion', typeZh: '同席酒食' },
  { sourceKeyword: '苗先生', targetKeyword: '苏蕙芳婶母', type: 'Advisor/Guardian', typeZh: '谋士与监护' },
  { sourceKeyword: '苗先生', targetKeyword: '苏蕙芳', type: 'Redemption Extortion', typeZh: '赎身勒索' },
  { sourceKeyword: '王大夫', targetKeyword: '孙亮功', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '苏蕙芳婶母', targetKeyword: '苏蕙芳', type: 'Aunt/Guardian', typeZh: '婶母监护' },
  { sourceKeyword: '潘氏', targetKeyword: '潘其观', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '梅进', targetKeyword: '梅士燮', type: 'Gate Attendant/Master', typeZh: '门房主仆' },
  { sourceKeyword: '虎儿', targetKeyword: '梅子玉', type: 'Page/Master', typeZh: '小厮主仆' },
  { sourceKeyword: '书僮 (×2)', targetKeyword: '李性全', type: 'Study Attendants', typeZh: '塾馆书僮' },
  { sourceKeyword: '仆妇（门上）', targetKeyword: '梅士燮', type: 'Doorkeeper/Master', typeZh: '门上传帖' },
  { sourceKeyword: '家人媳妇（衣裳）', targetKeyword: '颜夫人', type: 'Household Servant', typeZh: '内宅使唤' },
  { sourceKeyword: '小丫鬟（子玉书房）', targetKeyword: '梅子玉', type: 'Maid/Master', typeZh: '书房使女' },
  { sourceKeyword: '小丫鬟（子玉书房）', targetKeyword: '王琼华', type: 'Maid/Young Lady', typeZh: '闺阁侍女' },
  { sourceKeyword: '伴送婆（巴家）', targetKeyword: '巴来风', type: 'Bridal Escort', typeZh: '送亲陪伴' },
  { sourceKeyword: '乳母（巴来风）', targetKeyword: '巴来风', type: 'Nanny/Young Lady', typeZh: '乳母与小姐' },
  { sourceKeyword: '跟班（富家）', targetKeyword: '富伦', type: 'Attendant/Master', typeZh: '跟班主仆' },
  { sourceKeyword: '卢大爷', targetKeyword: '华光宿', type: 'Stable Manager/Master', typeZh: '马房总管主仆' },
  { sourceKeyword: '跟班队（华家，~20–30人）', targetKeyword: '华光宿', type: 'Retinue/Master', typeZh: '随从队伍' },
  { sourceKeyword: '叶茂林', targetKeyword: '袁宝珠', type: 'Impresario/Troupe Link', typeZh: '班主与伶人' },
  { sourceKeyword: '金二', targetKeyword: '袁宝珠', type: 'Troupe Manager/Performer', typeZh: '掌班与伶人' },
  { sourceKeyword: '老三', targetKeyword: '掌柜的', type: 'Waiter/Owner', typeZh: '伙计掌柜' },
  { sourceKeyword: '梅鼎', targetKeyword: '梅士燮', type: 'Grandfather/Grandson', typeZh: '祖孙' },
  { sourceKeyword: '梅羹调', targetKeyword: '梅士燮', type: 'Father/Son', typeZh: '父子' },

  { sourceKeyword: '屈道翁', targetKeyword: '杜琴言', type: 'Adoptive Father/Child', typeZh: '义父义子' },
  { sourceKeyword: '屈道翁', targetKeyword: '刘喜', type: 'Master/Servant', typeZh: '主仆' },
  { sourceKeyword: '屈道翁', targetKeyword: '梅子玉', type: 'Trusted Friend', typeZh: '知交' },
  { sourceKeyword: '屈少君', targetKeyword: '梅子玉', type: 'Benefactor', typeZh: '提携' },
  { sourceKeyword: '苏侯', targetKeyword: '田春航', type: 'Father-in-law/Son-in-law', typeZh: '岳父女婿' },
  { sourceKeyword: '姬亮轩', targetKeyword: '奚十一', type: 'Corrupt Associate', typeZh: '狼狈为奸' },
  { sourceKeyword: '巴英官', targetKeyword: '奚十一', type: 'Attendant', typeZh: '仆从附势' },
  { sourceKeyword: '菊花', targetKeyword: '奚十一', type: 'Concubine', typeZh: '姬妾' },
  { sourceKeyword: '得月', targetKeyword: '奚十一', type: 'Victim/Abuser', typeZh: '受害与加害' },
  { sourceKeyword: '得月', targetKeyword: '魏聘才', type: 'Exploited By', typeZh: '受其摆布' },
  { sourceKeyword: '得月', targetKeyword: '潘其观', type: 'Exploited By', typeZh: '受其摆布' },
  { sourceKeyword: '周小三', targetKeyword: '潘其观', type: 'Driver/Servant', typeZh: '车夫主仆' },
  { sourceKeyword: '孟七', targetKeyword: '徐子云', type: 'Servant', typeZh: '主仆' },
  { sourceKeyword: '姚贤', targetKeyword: '华光宿', type: 'Servant', typeZh: '主仆' },
  { sourceKeyword: '吴紫烟', targetKeyword: '刘文泽', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '蔡某', targetKeyword: '潘其观', type: 'Criminal Entanglement', typeZh: '盗案牵连' },
  { sourceKeyword: '长庆师娘', targetKeyword: '曹长庆', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '金粟', targetKeyword: '徐子云', type: 'Nine Fragrance Literary Collaboration', typeZh: '九香楼文事同道' },
  { sourceKeyword: '张笑梅', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '杨梅窗', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '卓天香', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '阳善修', targetKeyword: '奚十一', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '阳善修', targetKeyword: '潘其观', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '侯石翁', targetKeyword: '屈道翁', type: 'Literary Peers', typeZh: '文坛同辈' },
  { sourceKeyword: '刘喜', targetKeyword: '杜琴言', type: 'Protector', typeZh: '护持' },
];

function buildValidatedRelationshipsFromSpecs(specs: RelationshipSpec[]): Relationship[] {
  const rels: Relationship[] = [];
  for (const spec of specs) {
    const source = findCharacterIdByNameKeyword(spec.sourceKeyword);
    const target = findCharacterIdByNameKeyword(spec.targetKeyword);
    if (!source || !target || source === target) continue;
    rels.push({
      source,
      target,
      type: spec.type,
      typeZh: spec.typeZh,
    });
  }
  return rels;
}

export const relationships: Relationship[] = (() => {
  const seen = new Set<string>();
  const result: Relationship[] = [];
  const manual = buildValidatedRelationshipsFromSpecs(chapterValidatedRelationshipSpecs);
  const allCandidates = [...baseRelationships, ...manual];

  for (const rel of allCandidates) {
    const source = idRemap[rel.source] || rel.source;
    const target = idRemap[rel.target] || rel.target;
    if (source === target) continue;

    const sourceExists = characters.some((c) => c.id === source);
    const targetExists = characters.some((c) => c.id === target);
    if (!sourceExists || !targetExists) continue;

    const normalized =
      source < target
        ? { ...rel, source, target }
        : { ...rel, source: target, target: source };

    const key = relationshipKey(normalized);
    if (seen.has(key)) continue;

    seen.add(key);
    result.push(normalized);
  }

  return result;
})();
