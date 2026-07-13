export interface Lacuna {
  context: string;   // text snippet showing the gap in situ
  inference: string; // inferred missing character(s)
  confidence: 'certain' | 'probable' | 'speculative';
  note: string;      // basis for the inference
}

export interface ChapterLacunae {
  chapterId: number;
  lacunae: Lacuna[];
}

export const chapterLacunae: ChapterLacunae[] = [
  {
    chapterId: 1,
    lacunae: [
      {
        context: '其演《乔醋》一出，香（□单）红酣，真令潘骑省心醉欲死矣',
        inference: '亸',
        confidence: 'certain',
        note: '「香亸红酣」为经典词组，「亸」（繁体「嚲」，指花枝下垂或女子娇态）与「单」字形声相近，此处因印本模糊或字形残缺被错录作「（□单）」。',
      },
      {
        context: '把方才这个保珠比他，做他的舆□，也还不配',
        inference: '儓',
        confidence: 'certain',
        note: '「舆儓」（或作「舆台」）指低贱的仆役、奴隶。',
      },
    ],
  },
  {
    chapterId: 3,
    lacunae: [
      {
        context: '那个黑大汉听了大怒，便命家人□他出去',
        inference: '撵',
        confidence: 'probable',
        note: '下文紧接「将他乱推乱撵」，「撵」（驱赶）与文意最合。',
      },
    ],
  },
  {
    chapterId: 4,
    lacunae: [
      {
        context: '如马周之过新丰，卫▉之渡江表，一腔惋愤，感慨缠绵',
        inference: '玠',
        confidence: 'certain',
        note: '「卫玠渡江」为著名典故：西晋美男子卫玠南渡时，被众人围观，积劳成疾而逝（「看杀卫玠」）。与「马周过新丰」并举，极为贴切。',
      },
    ],
  },
  {
    chapterId: 5,
    lacunae: [
      {
        context: '真有驱云排岳之势，祟楼迭阁之观，窈□□□之胜',
        inference: '窕深秀',
        confidence: 'probable',
        note: '「窈窕深秀」语出欧阳修《醉翁亭记》「山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然……其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也」等句，用于园林描写极为自然。三空与「窈」合成四字。',
      },
    ],
  },
  {
    chapterId: 6,
    lacunae: [
      {
        context: '虽在中年，却还生得少艾，性爱▉华，其服饰与少年人一样',
        inference: '铅',
        confidence: 'certain',
        note: '「铅华」（铅粉、脂粉）为固定词组，指好用化妆品、爱打扮。',
      },
      {
        context: '道：「恶用是□□者为哉？鸡鸣狗吠相闻，而达乎四境。」',
        inference: '戚戚',
        confidence: 'probable',
        note: '「鸡鸣狗吠相闻，而达乎四境」出《孟子·公孙丑上》。此处孙嗣徽借孟子语反讽高品，「恶用是戚戚者为哉」（何必如此忧虑、小气）文意顺畅。',
      },
    ],
  },
  {
    chapterId: 7,
    lacunae: [
      {
        context: '子玉道：「三鸦水上一归人，是韩□的诗。」',
        inference: '翃',
        confidence: 'probable',
        note: '韩翃，唐代诗人，以送别诗见长。《送襄垣王君归别墅》与其风格相符。',
      },
    ],
  },
  {
    chapterId: 10,
    lacunae: [
      {
        context: '未免纨袴习气。其实焉能□我？',
        inference: '比',
        confidence: 'probable',
        note: '「焉能比我」（怎能与我相比）语气与前文轻蔑之意一致。',
      },
    ],
  },
  {
    chapterId: 11,
    lacunae: [
      {
        context: '遂于十二红丫鬟中带了红雪，红□、红香、红玉、红薇、红雯六个',
        inference: '绡',
        confidence: 'probable',
        note: '第五十二回明列「红雪、红莲、红香、红玉、红梅、红月、红露、红□」，此回之「红□」与第五十七回大量出场之「红□」当属同一人物。「红绡」（绡：薄绢）雅致，符合命名风格。',
      },
      {
        context: '红缎绣金天马皮蟒裙，玉▉玎▉，珠璎珞索',
        inference: '珰…珰',
        confidence: 'probable',
        note: '「玎珰」为叠音词，象声词，模拟玉器碰击声。「玉珰玎珰」即玉饰叮当作响，与「珠璎珞索」并列，皆为首饰描写。',
      },
      {
        context: '红雪、红香过去拉开了，红□▉头上花朵也掉了',
        inference: '绡…的',
        confidence: 'probable',
        note: '「红绡的头上」——「的」字脱落，原文当为「红绡的头上花朵也掉了」。',
      },
    ],
  },
  {
    chapterId: 12,
    lacunae: [
      {
        context: '遂令春航游学京师，命一老家人田安随了。□被出门，先到杭州',
        inference: '既',
        confidence: 'probable',
        note: '「既被出门」即「既已出门/出发之后」，「既」为转折副词，与下文「先到杭州，后到苏州」衔接自然。',
      },
      {
        context: '虽能封到荥阳郡公，恐此辈中，竟无▉国夫人',
        inference: '虢',
        confidence: 'probable',
        note: '「虢国夫人」为杨贵妃之姊，唐玄宗封号，最为著名。与「荥阳郡公」并举，以唐代极品封号形容歌伎之高贵。',
      },
    ],
  },
  {
    chapterId: 13,
    lacunae: [
      {
        context: '满院的嫣红姹紫，▉艳芬芳',
        inference: '娇',
        confidence: 'certain',
        note: '「娇艳芬芳」为描写春花之极常见四字成语，「嫣红姹紫，娇艳芬芳」对仗工整。',
      },
      {
        context: '珠钿刻翠，金▉飞霞，是为宝妆',
        inference: '钗',
        confidence: 'probable',
        note: '「金钗飞霞」——金钗（首饰）如云霞飞动，与「珠钿刻翠」对仗，描绘华美妆饰。',
      },
      {
        context: '彼此都有知遇之感，不禁慷慨欷▉起来',
        inference: '歔',
        confidence: 'certain',
        note: '「欷歔」（xī xū）为固定词组，意为叹息哽咽。「慷慨欷歔」是极常见成语，无可置疑。',
      },
    ],
  },
  {
    chapterId: 15,
    lacunae: [
      {
        context: '今见素兰，秀若芝兰，▉如桃李，极清中恰生出极艳来',
        inference: '艳',
        confidence: 'certain',
        note: '「秀若芝兰，艳如桃李」为工整对仗：芝兰之秀雅 / 桃李之艳丽，两句一清一艳，与后文「极清中恰生出极艳」完全呼应。',
      },
    ],
  },
  {
    chapterId: 23,
    lacunae: [
      {
        context: '无论大席小席，都是一样下作，胁肩谄笑，□刺营求',
        inference: '钻',
        confidence: 'probable',
        note: '「钻刺营求」（钻营谋私）为固定说法，指通过不正当手段谋取私利。',
      },
      {
        context: '若是一个进来，我便□东家墙而搂之可乎？',
        inference: '逾',
        confidence: 'certain',
        note: '直引《孟子·告子下》：「逾东家墙而搂其处子」——翻越邻家墙头去拥抱人家女儿。孙嗣徽借孟子语打趣，与本章多处引孟子一致。',
      },
    ],
  },
  {
    chapterId: 25,
    lacunae: [
      {
        context: '那个是翠羽瑶▉，天女六铢之佩',
        inference: '环',
        confidence: 'probable',
        note: '「瑶环」（美玉圆环）为常见首饰。「翠羽瑶环，天女六铢之佩」——翠羽装饰的玉环，如天女所佩六铢天衣之饰物。与「金梁却月，百宝之钗」对仗。',
      },
    ],
  },
  {
    chapterId: 27,
    lacunae: [
      {
        context: '叫我搜着了，就打烂你这娘卖□的',
        inference: '逼',
        confidence: 'probable',
        note: '清代常见粗口「娘卖X」中缺字为卑俗字，结合第40、58回同类语境，当为「逼」字。',
      },
    ],
  },
  {
    chapterId: 30,
    lacunae: [
      {
        context: '至一带曲廊，作凹字形，罘□轻幕，帘栊半遮',
        inference: '罳',
        confidence: 'certain',
        note: '「罘罳」（fú sī）为固定词组，指古建筑中的木制屏风或窗格。「罘罳轻幕」（屏格与轻帷）为园林建筑常见描写。',
      },
      {
        context: '绮窗雕▉□，中间用乌木、象牙、紫檀、黄杨作成极细的花样',
        inference: '楹栊',
        confidence: 'probable',
        note: '「雕楹」（雕饰的廊柱）+「栊」（窗格）描述精雕细刻的内部装饰，与下文「乌木、象牙、紫檀、黄杨」之精工相衬。',
      },
    ],
  },
  {
    chapterId: 31,
    lacunae: [
      {
        context: '且一醉，莫□□田',
        inference: '问桑',
        confidence: 'probable',
        note: '「莫问桑田」化用「沧海桑田」典故，意为不必追问世事沧桑变化。与前文「诗唱秋坟聊当哭」的悲慨基调相合。',
      },
    ],
  },
  {
    chapterId: 33,
    lacunae: [
      {
        context: '西间便是书斋，上悬一额是「小琅▉室」',
        inference: '嬛',
        confidence: 'certain',
        note: '「琅嬛」（láng huán）为传说中的仙界藏书之所（「琅嬛福地」），文人斋名「小琅嬛」极为常见，如清代文人书斋多有此名。',
      },
      {
        context: '这里的和尚是僧▉司，他的兄弟就是吏部文选司的经承',
        inference: '录',
        confidence: 'certain',
        note: '「僧录司」为清代管理佛教事务的官方机构，掌管全国僧籍，与吏部文选司并列，皆为实际官署名称。',
      },
    ],
  },
  {
    chapterId: 36,
    lacunae: [
      {
        context: '你不记得从前王静芳在燕□堂要打他么？',
        inference: '喜',
        confidence: 'probable',
        note: '「燕喜堂」为古典园林或宅院中常见的堂号，取「燕喜于归」之意，适合宴饮聚会场所。',
      },
      {
        context: '潘三满拟这杯酒，他若喝了，琴言便亲了他的□嘴一样',
        inference: '朱',
        confidence: 'probable',
        note: '「朱嘴」（朱唇、红唇）为常见雅称，与「亲」字搭配自然。「亲了他的朱嘴」即吻了他的红唇。',
      },
    ],
  },
  {
    chapterId: 37,
    lacunae: [
      {
        context: '琴言道：「我有个水字，加一点是□字，移上去是永字。」',
        inference: '冰',
        confidence: 'probable',
        note: '水字加点在左侧成「冰」；若将冰字的冫旁上移，则字形趋近「永」。字谜游戏，冰为最可能过渡字。',
      },
      {
        context: '次贤道：「这个永字些须欠一点儿，也只好算个薄水□。然眼前的却也没有多少。」',
        inference: '仙',
        confidence: 'speculative',
        note: '「薄水仙」（单薄的水仙花）——水仙花生于水中，形清瘦，故称「薄水仙」；「眼前的却也没有多少」呼应水仙之稀少珍贵。此处为次贤机智打趣之语。',
      },
    ],
  },
  {
    chapterId: 38,
    lacunae: [
      {
        context: '何异虱之处□中』为先了',
        inference: '裈',
        confidence: 'certain',
        note: '直接引用阮籍《大人先生传》原文：「何异夫虱之处裈中乎」——裈（kūn），古代裤裆。此句极为著名。',
      },
      {
        context: '宗疏事裒，劳余神□。郁塞昏徙，南溃衍亨',
        inference: '龄',
        confidence: 'speculative',
        note: '疑为古代韵文（或《禹贡》系文本）残句，「劳余神龄」（耗尽我的精神年岁）尚存疑，待考。',
      },
      {
        context: '掘地得兰亭，并门铜□，舍利数颗',
        inference: '印',
        confidence: 'probable',
        note: '「铜印」（铜制官印）是地下出土文物中常见之物，与兰亭、舍利同为珍贵遗物。「门铜印」或指墓门铜印章。',
      },
      {
        context: '尽见满纸黝黑，崭崭□□，所以目为文体',
        inference: '峭峭',
        confidence: 'probable',
        note: '「崭崭峭峭」形容文字笔势峻峭险峻，与「满纸黝黑」并列描述骈文险峻的视觉效果。',
      },
      {
        context: '齐周□作《四声切韵》，梁沈约撰《四声》一卷，而韵谱成',
        inference: '颙',
        confidence: 'certain',
        note: '南齐周颙（Zhōu Yōng）著《四声切韵》，此为汉语音韵学史实，有明确文献记载。',
      },
      {
        context: '孙□又为《唐韵》，丁度、宋祁为《集韵》',
        inference: '愐',
        confidence: 'certain',
        note: '唐代孙愐（Sūn Miǎn）著《唐韵》，为《广韵》前身，是汉语音韵学史上重要文献，有确切文献记载。',
      },
      {
        context: '自淳▉中，平水刘渊始并为一百七部',
        inference: '祐',
        confidence: 'certain',
        note: '平水刘渊于宋淳祐年间（1241—1252）将韵部并为107部，是汉语诗韵史上的重要节点，史有明文。',
      },
      {
        context: '夏雀生鹑，楚鸠生▉，《南海记》曰',
        inference: '鹊',
        confidence: 'speculative',
        note: '《禽经》记载鸟类化生之说。楚鸠（布谷鸟）与鹊有关联（鸠占鹊巢）。待考。',
      },
      {
        context: '先曰：『硕人其颀，衣锦□衣。』',
        inference: '褧',
        confidence: 'certain',
        note: '直引《诗经·卫风·硕人》原文：「衣锦褧衣」（褧，kǒng，罩在锦衣外的麻布罩衫，避免炫耀）。',
      },
      {
        context: '『领如蝤蛴』，至『美目□兮』',
        inference: '盼',
        confidence: 'certain',
        note: '直引《诗经·卫风·硕人》原文：「美目盼兮」——美丽的眼睛顾盼流转，为《诗经》最脍炙人口的名句之一。',
      },
    ],
  },
  {
    chapterId: 39,
    lacunae: [
      {
        context: '真所谓『无感我▉兮，无使龙也吠。』',
        inference: '帨',
        confidence: 'certain',
        note: '引《诗经·召南·野有死麕》：「无感我帨兮，使犬也吠」（帨，shuì，佩巾）。原诗用「犬」，此处改「犬」为「龙」作戏谑，「帨」字确定无疑。',
      },
      {
        context: '虽他姐姐□里头，也有这许多黑水',
        inference: '肚',
        confidence: 'probable',
        note: '「肚里头」（肚子里）——「黑水」比喻学问、墨水，「肚里有多少黑水」为常见口语。',
      },
      {
        context: '我就头发白了些，那一样不如你，难道还配不上一个□瞅眼儿？',
        inference: '媚',
        confidence: 'probable',
        note: '「媚瞅眼儿」（娇媚的一眼）——说话者自比不老，认为自己还配得上一个风情的眼神。',
      },
    ],
  },
  {
    chapterId: 40,
    lacunae: [
      {
        context: '他□了你，倒说我撒赖',
        inference: '讹',
        confidence: 'probable',
        note: '「他讹了你」（他敲诈了你）——与下文「讹钱」呼应；「撒赖」指无赖行为，前文亦有「别撒赖讹人」。',
      },
      {
        context: '我好意请你喝酒，你到要□起人家的堂客来',
        inference: '睡',
        confidence: 'probable',
        note: '「睡起人家堂客」（勾引/睡人家妻子）——此为市井粗话，与上下文的粗鄙场景吻合。',
      },
      {
        context: '你这狗鸡巴□的，□了我的兄弟，还想□我的妹子',
        inference: '操 / 操 / 操',
        confidence: 'probable',
        note: '此处三个□均为清代刊本有意遮蔽之粗口，结合上下文语境，皆为「操」（fuck）类性词汇，是清代小说中常见的文字删改现象。',
      },
      {
        context: '你会□人的屁股，老爷子也要□□你的屁股',
        inference: '操 / 操操',
        confidence: 'probable',
        note: '同上，刊本删改之粗口字。',
      },
    ],
  },
  {
    chapterId: 41,
    lacunae: [
      {
        context: '那流水过来便有▉琮之声，如琴筑一般',
        inference: '琤',
        confidence: 'certain',
        note: '「琤琮」（chēng cóng）为固定词组，象声词，形容玉石或水流相碰击之清脆声音。',
      },
      {
        context: '约有两刻工夫，听得环□▉▉，华夫人带了明珠、花珠、荷珠、赠珠四个女婢过来',
        inference: '佩叮当',
        confidence: 'probable',
        note: '「环佩叮当」（叮当作响的环佩）为描写女子走来之固定套语，三字填满三个空位，完整。',
      },
      {
        context: '玉玎▉一声声乱我柔肠',
        inference: '珰',
        confidence: 'certain',
        note: '「玎珰」（dīng dāng）为固定词组，象声词，玉器叮当响声。「玉玎珰」即玉饰叮当作响。',
      },
    ],
  },
  {
    chapterId: 42,
    lacunae: [
      {
        context: '只听得背后□□促促，脚步接着脚步，衣裳碰着衣裳',
        inference: '仓仓',
        confidence: 'probable',
        note: '「仓仓促促」（匆匆忙忙）为口语叠音词，「仓促」义为仓皇匆忙，描述人群拥挤赶路之状。',
      },
      {
        context: '不要脸的狗鸡巴□的',
        inference: '逼',
        confidence: 'probable',
        note: '同第27回、第40回语境，「娘卖逼」系列粗口之一，刊本删改。',
      },
    ],
  },
  {
    chapterId: 43,
    lacunae: [
      {
        context: '窗间青琐，红牙白□选词场',
        inference: '雪',
        confidence: 'certain',
        note: '「白雪」为古代著名乐曲（《阳春白雪》），与「红牙」（红牙板，打节拍的乐器）并举，「红牙白雪选词场」意为以红牙板打节拍、唱阳春白雪之调，在词场竞技。第46回同句可作互证。',
      },
    ],
  },
  {
    chapterId: 45,
    lacunae: [
      {
        context: '子云取出商彝、周□、汉鼎、秦盘',
        inference: '尊',
        confidence: 'probable',
        note: '「尊」（zūn）为周代青铜酒礼器，「商彝、周尊、汉鼎、秦盘」按朝代列举四种古代青铜礼器，「彝」「鼎」「盘」皆为礼器名，「尊」最为常见。',
      },
      {
        context: '大家下楼冠带，□漱已毕，重亲上楼',
        inference: '盥',
        confidence: 'certain',
        note: '「盥漱」（guàn shù，洗手漱口）为固定词组，古礼仪式前的洁净行为。「冠带盥漱」为祭祀、仙乩等仪式前的标准程序。',
      },
      {
        context: '今日坡仙必有佳作，我们当□漱恭读',
        inference: '盥',
        confidence: 'certain',
        note: '同上，「盥漱恭读」即洗手漱口、恭敬阅读（苏轼遗作），礼仪之义明确。',
      },
      {
        context: '只惜豪华怒□琴，明珠减价珊瑚贱',
        inference: '折',
        confidence: 'probable',
        note: '「怒折琴」——石崇因恼怒而摔折乐器，与「石崇王恺争豪富」典故相合。石崇曾因绿珠事而盛怒，有「折」物之故事。',
      },
      {
        context: '汨罗沉冤感天帝，千百余世□明磬',
        inference: '传',
        confidence: 'probable',
        note: '「千百余世传明磬」——屈原的沉冤感动天帝，其精神如清磬之声，千百年来代代相传。',
      },
    ],
  },
  {
    chapterId: 46,
    lacunae: [
      {
        context: '楚江烟水吴江雨；▉字阑杆丁字帘',
        inference: '工',
        confidence: 'probable',
        note: '「工字阑杆」（工字形栏杆）与「丁字帘」对仗，均以汉字形状描述建筑构件之形，工整。',
      },
      {
        context: '把园中的景致，望得□然',
        inference: '豁',
        confidence: 'certain',
        note: '「豁然」（huò rán，豁然开朗）为描述登高后视野开阔之极常见词，欧阳修《醉翁亭记》亦有此用法。',
      },
      {
        context: '窗间青琐，红牙白□选词场',
        inference: '雪',
        confidence: 'certain',
        note: '与第43回同句，「白雪」（《阳春白雪》乐曲）确定无疑。',
      },
      {
        context: '其园也峥嵘窈□，突兀□崎',
        inference: '窕 / 嶙',
        confidence: 'certain',
        note: '「峥嵘窈窕」为常见形容园林山水的四字组合，「窈窕」固定词组。「突兀嶙崎」（嶙崎，岩石嶙峋险峻），描写山势险峻。',
      },
      {
        context: '何论蛾眉螓首，▉夸桃李之颜',
        inference: '更',
        confidence: 'probable',
        note: '「更夸桃李之颜」——何必再说蛾眉螓首，更有桃李般的美颜可夸赞。「更」字与「何论」呼应，表递进。',
      },
      {
        context: '华□忉利之天，原许神仙游戏',
        inference: '光',
        confidence: 'probable',
        note: '「忉利天」（Trāyastriṃśa，三十三天）为佛教天界。「华光忉利之天」意为光华灿烂如忉利天宫，烘托园中景致之华美。',
      },
      {
        context: '忘华岳之高而惊培□也',
        inference: '塿',
        confidence: 'certain',
        note: '「培塿」（péi lǒu）为固定词组，指小土丘，出自《左传》等典籍。「忘华岳之高而惊培塿」——忘了华山之高却对小土丘大惊小怪，比喻眼界狭小。',
      },
      {
        context: '会珠敦玉□之场，作联袂题襟之集',
        inference: '斝',
        confidence: 'speculative',
        note: '「珠敦玉斝」（珍贵的祭祀礼器组合）——敦（青铜盛食器）与斝（jiǎ，青铜温酒器）并举，形容宴饮之豪华隆重。待考。',
      },
    ],
  },
  {
    chapterId: 47,
    lacunae: [
      {
        context: '一个张师□，叫笑梅，是魏大爷的相好',
        inference: '道',
        confidence: 'speculative',
        note: '「张师道」——文人名字，「师道」取「尊师重道」之意，雅致。别号「笑梅」（含笑的梅花）风格相符。待考。',
      },
    ],
  },
  {
    chapterId: 48,
    lacunae: [
      {
        context: '便□脚而卧，口中吟道',
        inference: '伸',
        confidence: 'probable',
        note: '「伸脚而卧」（伸开腿躺下）——喝完酒后随意躺卧的动作描写，「伸」字自然。',
      },
      {
        context: '▉琅一声掷下，却也奇怪',
        inference: '铿',
        confidence: 'probable',
        note: '「铿琅」（kēng láng）为固定象声词，形容金属或玉石落地的铿锵清脆声音，掷骰子时音响形象。',
      },
    ],
  },
  {
    chapterId: 50,
    lacunae: [
      {
        context: '远远望见春喜穿着白□丝衫子',
        inference: '绡',
        confidence: 'probable',
        note: '「白绡」（白色薄绢）为夏季常见轻薄衣料，「白绡丝衫子」即白色薄绢丝质上衣，与夏日冰碗场景吻合。',
      },
      {
        context: '神前设誓，誓同生死……呵哟，是这么的□',
        inference: '哟',
        confidence: 'probable',
        note: '「是这么的哟」——语气助词，表示感叹/强调，「哟」在口语唱词中极常见，与前文「呵哟」呼应。',
      },
      {
        context: '一旦把奴休了，是令人气愤不过□',
        inference: '了',
        confidence: 'probable',
        note: '「气愤不过了」——语气词「了」表示事态完结，为口语常用。',
      },
      {
        context: '钻出个光头来，穿件黄□丝短僧衣',
        inference: '绮',
        confidence: 'probable',
        note: '「黄绮」（黄色锦绮）为华美的黄色丝绸，佛教僧人常用黄色衣料，「黄绮丝短僧衣」描写此和尚衣着华贵。',
      },
    ],
  },
  {
    chapterId: 51,
    lacunae: [
      {
        context: '轻重疾徐，声声中▉，而泥黏水滑之声，令人心荡',
        inference: '节',
        confidence: 'probable',
        note: '「声声中节」——每声都合乎节拍，「中节」为固定词组，形容动作或声音合乎节律。',
      },
      {
        context: '忽然的「□蹋」一声，倒把元茂吃了一惊',
        inference: '扑',
        confidence: 'probable',
        note: '「扑蹋」象声词，形容重物倒地的声音，「扑蹋一声」为常见口语表达。',
      },
      {
        context: '带着南边话「□娘、□娘」的乱骂',
        inference: '阿',
        confidence: 'probable',
        note: '「阿娘」为吴语（苏州话）中对母亲的称呼，被打时「阿娘阿娘」呼叫，符合「南边话」的方言特征。',
      },
      {
        context: '嗣元听得明白，爬了起来，骂道：「我□你的娘！」',
        inference: '操',
        confidence: 'probable',
        note: '粗口，刊本删改，结合语境为「操」字。',
      },
      {
        context: '又在里头狗□狗卵的骂个不清',
        inference: '日',
        confidence: 'probable',
        note: '「狗日狗卵」系列粗口，刊本删改。',
      },
      {
        context: '碰着了这些浑虫，没有开过□眼',
        inference: '好',
        confidence: 'probable',
        note: '「没有开过好眼」（没遇上好事/没看到好东西）——「开眼」指遇见好事，修饰语「好」最为自然。',
      },
      {
        context: '嗣元道：「倒是□余又该□兮。满口之乎者也」',
        inference: '敝 / 补',
        confidence: 'probable',
        note: '仿《诗经·郑风·缁衣》：「缁衣之好兮，敝予又改造兮」。嗣元戏谑改为「敝余又该补兮」（破了还得缝补），以「补」对「造」，语带嘲讽。',
      },
      {
        context: '连声哎哟道：「了不得，□兄之臂。」',
        inference: '折',
        confidence: 'probable',
        note: '「折兄之臂」——被棍子打到肩膀，哀呼「要折断我的手臂」，「折」字最为贴切。',
      },
    ],
  },
  {
    chapterId: 52,
    lacunae: [
      {
        context: '我只得门前窥伺，跟随他绣□香车',
        inference: '幰',
        confidence: 'probable',
        note: '「绣幰」（xiǎn）为车的装饰性帷盖，「绣幰香车」（绣花车幰的香车）为描写贵族车驾的固定套语。',
      },
      {
        context: '雕轮绣□，流水一般的出城',
        inference: '毂',
        confidence: 'probable',
        note: '「雕轮绣毂」（雕花车轮与绣饰轮毂）——描写华丽车驾，「毂」（gǔ，车轮中心）与「轮」对仗。',
      },
      {
        context: '徐家的红雪、红莲……红□八个',
        inference: '绡',
        confidence: 'probable',
        note: '与第11、57回一致，「红绡」为徐子云第八位红字丫鬟的名字。',
      },
    ],
  },
  {
    chapterId: 53,
    lacunae: [
      {
        context: '就怕什么香料、针□、顾绣的东西倒少',
        inference: '黹',
        confidence: 'certain',
        note: '「针黹」（zhǐ，女红针线活）为固定词组，与「顾绣」（精美刺绣）并列，皆为女性手工艺品，上下文极吻合。',
      },
      {
        context: '中端砚六方、□石砚十方、假铜雀砚二方',
        inference: '歙',
        confidence: 'probable',
        note: '「歙石砚」（歙砚，产自安徽歙县）为中国四大名砚之一，与「端砚」（广东端州）、「铜雀砚」并列，最为自然。',
      },
      {
        context: '被那女郎挽住，□□的笑道：「世间有此呆郎」',
        inference: '嫣然',
        confidence: 'probable',
        note: '「嫣然的笑道」（甜美地笑着说）——「嫣然」形容女子美笑，为常见描写，与「女郎」身份相符。',
      },
    ],
  },
  {
    chapterId: 54,
    lacunae: [
      {
        context: '温飞卿之『冰□银床梦不成』',
        inference: '簟',
        confidence: 'certain',
        note: '直引温庭筠（飞卿）《瑶瑟怨》名句：「冰簟银床梦不成，碧天如水夜云轻」——簟（diàn，竹席），「冰簟」即清凉的竹席。第54回同句两见，皆为「簟」。',
      },
      {
        context: '七律如崔颢之『□荛太华俯咸京』',
        inference: '采',
        confidence: 'speculative',
        note: '「采荛太华俯咸京」——采荛（割草薪），在华山采薪而俯瞰咸阳，描写隐逸之志。「采荛」为古语，借指隐居樵采。待确认崔颢具体诗句。',
      },
    ],
  },
  {
    chapterId: 55,
    lacunae: [
      {
        context: '有妍有□，不是一样',
        inference: '媸',
        confidence: 'certain',
        note: '「妍媸」（yán chī，美丑）为固定词组，「有妍有媸」即有美有丑，「妍媸不一」为成语。',
      },
      {
        context: '琴仙真成了个看杀卫▉',
        inference: '玠',
        confidence: 'certain',
        note: '「看杀卫玠」为千古名典：西晋卫玠（jiè）貌美如玉，南渡后被众人争相围观，积郁而死。与第4回「卫▉之渡江表」同一人物，确定无疑。',
      },
    ],
  },
  {
    chapterId: 57,
    lacunae: [
      {
        context: '点了红香、红玉、红雪、红雯、红薇、红莲、红□、红娟',
        inference: '绡',
        confidence: 'probable',
        note: '与第11、52回一致，「红绡」为徐子云红字丫鬟之一，本回大量出场（扮赵高一角）。',
      },
      {
        context: '红□掣的是赵高……红□与荷珠掷了一会，红□输了（多处）',
        inference: '绡',
        confidence: 'probable',
        note: '本回「红□」共26处，均指同一人物——徐家红字丫鬟，推断为「红绡」，本回担任「赵高」角色与荷珠对弈。',
      },
      {
        context: '便咮咮□□的学起鸡叫来，学了几声，即从凳下钻了三次',
        inference: '格格',
        confidence: 'probable',
        note: '「咮咮格格」——「咮咮」形容嘴型（喙），「格格」模拟鸡叫声，叠音象声词，生动描写学鸡叫的滑稽场景。',
      },
      {
        context: '都笑得粉黛霪霪，秋波□泪',
        inference: '噙',
        confidence: 'probable',
        note: '「秋波噙泪」（含着泪水的美目）——「噙」（qín，含住，使不落下）与「泪」搭配为固定表达，形容笑中带泪。',
      },
      {
        context: '在车里又各相辞谢了几句，方才坐了绣□，碾动双轮',
        inference: '舆',
        confidence: 'probable',
        note: '「绣舆」（绣花的车/轿）——「碾动双轮」说明是有轮之车，「绣舆」（华丽马车）较「绣轿」更合。',
      },
    ],
  },
  {
    chapterId: 58,
    lacunae: [
      {
        context: '倒不料这两个小狗□的也会闹鬼',
        inference: '日',
        confidence: 'probable',
        note: '粗口「狗日的」，刊本删改，同第51回语境。',
      },
      {
        context: '那个小狗□的？连那佛手也摘了两个',
        inference: '日',
        confidence: 'probable',
        note: '同上，粗口「狗日的」。',
      },
      {
        context: '将老婆的□去讹钱，讹到了手，如今要充二爷了',
        inference: '色',
        confidence: 'probable',
        note: '「将老婆的色去讹钱」——用妻子的色相去敲诈勒索，「色」字与「讹钱」语意贯通，指色诱骗财。',
      },
      {
        context: '我们好好的家伙为什么要装这个狗鸡巴？……□了要烂鸡巴的',
        inference: '操',
        confidence: 'probable',
        note: '粗口，刊本删改，「操了要烂鸡巴」——语义连贯，「操」字符合语境。',
      },
      {
        context: '他方才□屁股□断的，还有一个脏头子拖长三四寸的',
        inference: '操 / 操',
        confidence: 'probable',
        note: '连续两处粗口删改，结合语境均为「操」字。',
      },
      {
        context: '自己的屁股被人□出虫来，才花了钱请人挖干净了，你如今又想□',
        inference: '操 / 操',
        confidence: 'probable',
        note: '同上，刊本删改粗口。',
      },
    ],
  },
  {
    chapterId: 59,
    lacunae: [
      {
        context: '及要抬起手来，抬不动了，遂「扑□」的一笑，各人漱洗',
        inference: '哧',
        confidence: 'certain',
        note: '「扑哧」（pū chī）为固定象声词，形容忍不住笑出声来（噗嗤一笑），极为常用，无可置疑。',
      },
    ],
  },
  {
    chapterId: 60,
    lacunae: [
      {
        context: '如月之临，如水之鲜。亦曰其□□，而妍其妍',
        inference: '明明',
        confidence: 'probable',
        note: '「亦曰其明明，而妍其妍」——以镜为题，「明明」（光明透亮）形容镜面之光，「妍其妍」（使美的更美）呼应，语义完整。',
      },
      {
        context: '金枝翠羽，玉□明▉。华月光满，蓬山路长',
        inference: '佩 / 珰',
        confidence: 'probable',
        note: '「玉佩明珰」——玉佩（玉质腰饰）与明珰（明亮的耳饰），「金枝翠羽，玉佩明珰」描写女子华美首饰，对仗工整。',
      },
      {
        context: '琴仙道：「瑶卿之▉艳韶华，却一齐被静宜画出来」',
        inference: '绝',
        confidence: 'probable',
        note: '「绝艳韶华」（绝世美艳、年华正好）——「绝艳」形容容颜绝世，「韶华」指青春年华，「绝艳韶华」为常见夸赞词。',
      },
      {
        context: '纤纤弱质，□辕舞凌风，有掌上轻盈之态',
        inference: '飞',
        confidence: 'probable',
        note: '「飞辕」——驾飞车，御风而行，「飞辕舞凌风」（驾飞车凌风起舞）描写仙女轻盈之态，与「掌上轻盈」呼应。',
      },
      {
        context: '隐身阆苑依琼树，返劫□□典玉签',
        inference: '归来',
        confidence: 'probable',
        note: '「返劫归来典玉签」——历经劫难归来后，整理（典）玉签（仙界书目/签文），表示重归仙界之意。',
      },
      {
        context: '唯有日▉清香一炷，以祝诸贵人福寿绵长',
        inference: '夜',
        confidence: 'probable',
        note: '「日夜清香一炷」——日日夜夜焚香一炷，表示虔诚祝愿，「日夜」为常见时间副词。',
      },
      {
        context: '谨□百和之香，酿百花之酒，献于诸文星之座',
        inference: '焚',
        confidence: 'probable',
        note: '「谨焚百和之香」（恭敬焚烧合成香料）——「焚香」为祭祀祝文的标准程序，与「酿酒」「献于…座」并列，动词「焚」最为自然。',
      },
      {
        context: '酬□太白，颠倒雌黄',
        inference: '赓',
        confidence: 'probable',
        note: '「酬赓太白」——「赓」（gēng，继续/和诗）为诗词酬唱之专用字，「酬赓太白（李白）」即以诗文与李白遥相唱和，雅语。',
      },
    ],
  },
];

export const lacunaeByChapter = new Map<number, ChapterLacunae>(
  chapterLacunae.map((cl) => [cl.chapterId, cl])
);
