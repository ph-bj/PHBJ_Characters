import React from 'react';
import { InkSceneCard, Scene } from './ChapterScene';

/**
 * Mid-chapter ink wash (水墨) scenes: for each of the 60 chapters, the most
 * visually evocative paragraph was selected and rendered as a scene in the
 * same brush-drawn vocabulary and parchment tile style as the opening and
 * closing illustrations. `para` is the 0-based paragraph index (matching
 * chapter.content.split("\n\n")) beneath which the scene is displayed.
 */

type MidScene = { para: number; scene: Scene };

const MID_SCENES: Record<number, MidScene> = {
  // 演《折柳阳关》，婉转娇柔，哀情艳思，如睹霍小玉灞桥送别
  1: { para: 27, scene: { seal: '柳', els: [['ground', 140, 126], ['willow', 45, 122, 0.95], ['figStand', 105, 124, 0.9], ['water', 140, 132, 0.9], ['bridge', 152, 126, 0.9], ['figStand', 195, 124, 0.85], ['birds', 232, 38]] } },
  // 王宅安席，桂保斟了一巡酒，杨方猷命他入席
  2: { para: 34, scene: { seal: '席', wash: [], els: [['ground', 140, 124], ['screen', 55, 116, 0.8], ['figSit', 105, 122, 0.9], ['tableRound', 140, 122, 0.95], ['figSit', 140, 117, 0.8], ['figSit', 175, 122, 0.9], ['figStand', 214, 122, 0.85], ['candle', 243, 110, 0.7]] } },
  // 戏园楼上京官如云，帘内小旦露半面，攒三聚五上去请安
  3: { para: 8, scene: { seal: '伶', els: [['ground', 140, 122], ['stage', 90, 120], ['lanterns', 90, 64, 0.75], ['figStand', 155, 122, 0.85], ['figBow', 183, 122, 0.8], ['figStand', 210, 122, 0.85], ['birds', 250, 40]] } },
  // 咏雪诗：飞来雪山如白玉芙蓉，着屐好吟亭畔絮
  4: { para: 7, scene: { seal: '吟', els: [['ground', 140, 122], ['snow', 140, 55], ['pavilion', 75, 118, 0.9], ['figStand', 128, 122, 0.9], ['rock', 168, 124, 0.7], ['plum', 200, 26, 0.85]] } },
  // 怡园：驱云排岳，崇楼迭阁，大山连络，曲水湾环
  5: { para: 4, scene: { seal: '怡', els: [['ground', 140, 124], ['mansion', 70, 120, 0.9], ['pavilion', 138, 118, 0.75], ['rock', 178, 124, 0.7], ['water', 140, 134, 0.9], ['bridge', 215, 128, 0.8], ['willow', 252, 122, 0.85]] } },
  // 猞猁裘大毛貂冠，两辆车四匹马，一径来到姑苏会馆
  6: { para: 20, scene: { seal: '裘', els: [['ground', 140, 122], ['mansion', 55, 120, 0.85], ['cart', 135, 122], ['cart', 218, 122, 0.8], ['birds', 178, 40]] } },
  // 文泽宅园：太湖石假山寒树，石桥绿竹红阑，廊下迎客
  7: { para: 5, scene: { seal: '竹', els: [['ground', 140, 124], ['rock', 55, 124, 0.9], ['bridge', 100, 126, 0.8], ['bamboo', 140, 120, 0.9], ['figStand', 172, 122, 0.85], ['figBow', 194, 122, 0.8], ['house', 232, 120, 0.85]] } },
  // 戏园门口花架子花花绿绿，元茂绊凳栽葱，路人双手拉起
  8: { para: 3, scene: { seal: '跌', els: [['ground', 140, 122], ['house', 75, 120, 0.95], ['lanterns', 75, 64, 0.8], ['figBow', 142, 122, 0.9], ['figStand', 166, 122, 0.9], ['figWalk', 215, 122, 0.85], ['birds', 245, 40]] } },
  // 灯棚人山人海：悬灯结彩，火树银花，流星赶月，香车秀辇
  9: { para: 2, scene: { seal: '灯', els: [['ground', 140, 122], ['lanterns', 70, 60, 0.9], ['lanterns', 140, 56, 0.7], ['firework', 212, 32], ['firework', 246, 52, 0.6], ['cart', 105, 122, 0.9], ['figWalk', 170, 122, 0.9], ['figStand', 196, 122, 0.8]] } },
  // 梅崦：梅花盛开，屋围着花，花围着屋，望之林屋不分
  10: { para: 11, scene: { seal: '梅', els: [['ground', 140, 124], ['plum', 12, 26], ['house', 92, 120, 0.9], ['house', 150, 120, 0.75], ['plum', 192, 20, 0.7], ['rock', 205, 124, 0.7], ['figStand', 235, 124, 0.8]] } },
  // 苏小姐梦入姐姐园中看灯，几千人试灯说得天花乱坠
  11: { para: 6, scene: { seal: '梦', els: [['ground', 140, 124], ['moon', 45, 30, 0.8], ['lanterns', 110, 60, 0.85], ['lanterns', 180, 62, 0.7], ['figStand', 145, 122, 0.85], ['pavilion', 232, 118, 0.8]] } },
  // 春航寓宏济寺，日日酒楼戏馆，作乐陶情，专心听戏
  12: { para: 8, scene: { seal: '客', els: [['ground', 140, 122], ['temple', 70, 120, 0.9], ['figWalk', 132, 122, 0.9], ['stage', 195, 120, 0.9], ['lanterns', 195, 66, 0.7]] } },
  // 蕙芳小院：篱内五间，楠木琉璃窗，落地罩，素心兰一尘不染
  13: { para: 6, scene: { seal: '幽', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.85], ['screen', 95, 116, 0.8], ['figSit', 145, 122, 0.85], ['figStand', 178, 122, 0.9], ['incense', 215, 114, 0.7], ['peony', 245, 124, 0.7]] } },
  // 蕙芳持镜倚春航一照，镜中映出两个玉人
  14: { para: 1, scene: { seal: '镜', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.85], ['tableRound', 62, 122, 0.7], ['figStand', 130, 122, 0.9], ['figStand', 152, 122, 0.9], ['candle', 190, 110, 0.75], ['screen', 235, 116, 0.8]] } },
  // 桃花坞：桃花开满，烂若晴霞，一水盈盈，曲榭中喝酒
  15: { para: 17, scene: { seal: '桃', els: [['ground', 140, 126], ['plum', 12, 24], ['plum', 98, 34, 0.75], ['water', 140, 134, 0.9], ['figWalk', 162, 124, 0.85], ['pavilion', 212, 118, 0.9], ['birds', 60, 40]] } },
  // 华府门面：大照墙琉璃瓦，石狮参天树，甬道直望二门
  16: { para: 16, scene: { seal: '府', els: [['ground', 140, 122], ['cart', 45, 122, 0.75], ['cityGate', 105, 120], ['figStand', 158, 122, 0.85], ['mansion', 210, 120, 0.9], ['willow', 255, 122, 0.75]] } },
  // 瑶岛群仙同朝金阙：月貌花肤，猜枚行令，玉液金波
  17: { para: 16, scene: { seal: '筵', els: [['ground', 140, 124], ['plum', 12, 26, 0.8], ['lanterns', 62, 62, 0.75], ['figSit', 108, 122, 0.9], ['tableRound', 140, 122, 0.9], ['figSit', 140, 117, 0.8], ['figSit', 172, 122, 0.9], ['moon', 240, 30, 0.75]] } },
  // 奚十一步行到陶家，白菊花袅袅婷婷，一身香艳出见
  18: { para: 23, scene: { seal: '访', els: [['ground', 140, 122], ['willow', 45, 122, 0.9], ['figWalk', 105, 122, 0.95], ['figStand', 158, 122, 0.85], ['house', 195, 120, 0.95], ['birds', 245, 40]] } },
  // 潘三清闲无事受了闷气，不同仲雨，一人独来蕙芳处
  19: { para: 16, scene: { seal: '独', els: [['ground', 140, 122], ['house', 85, 120, 0.9], ['figWalk', 152, 122, 0.95], ['handLantern', 164, 105, 0.85], ['moon', 235, 32, 0.8]] } },
  // 菊畦稻庄：桔槔戽水，渔帘蟹簖，鹤栏鹿棚，长廊曲径像个村落
  20: { para: 12, scene: { seal: '畦', els: [['ground', 140, 124], ['rock', 52, 124, 0.85], ['house', 100, 120, 0.9], ['water', 152, 132, 0.8], ['bridge', 170, 128, 0.7], ['willow', 218, 122, 0.9], ['birds', 248, 36]] } },
  // 琴言小院：绿窗深闭，庭前梅树红绽，白鹦鹉檐下学语
  21: { para: 4, scene: { seal: '鹦', els: [['ground', 140, 124], ['house', 80, 120, 0.95], ['plum', 150, 30, 0.9], ['figWalk', 180, 124, 0.9], ['birds', 232, 36]] } },
  // 舟行三四里静悄清饮：如蔷薇濯露，芍药笼烟，珠联璧合
  22: { para: 28, scene: { seal: '泛', els: [['ground', 140, 130], ['willow', 40, 122, 0.9], ['water', 140, 128], ['boat', 150, 118, 1.15], ['figSit', 138, 112, 0.6], ['figSit', 162, 112, 0.6], ['birds', 230, 38]] } },
  // 客店里打得落花流水，元茂上天无路入地无门
  23: { para: 7, scene: { seal: '哄', els: [['ground', 140, 122], ['birds', 60, 40], ['figWalk', 118, 122, 0.95], ['figStand', 152, 122, 0.9], ['figStand', 176, 122, 0.85], ['house', 218, 120, 0.9]] } },
  // 夕阳西下，卷帘移桌廊前，摆了四座浅斟低酌
  24: { para: 5, scene: { seal: '酌', els: [['ground', 140, 124], ['sun', 45, 32, 0.85], ['figSit', 115, 122, 0.9], ['tableRound', 148, 122, 0.9], ['figSit', 148, 118, 0.8], ['figSit', 181, 122, 0.9], ['screen', 243, 116, 0.75]] } },
  // 含万楼：四面开窗，梧桐如屏，垂杨池水，荷花开满香满庭院
  25: { para: 4, scene: { seal: '荷', els: [['ground', 140, 124], ['rock', 45, 124, 0.7], ['mansion', 88, 120, 1.05], ['willow', 150, 122, 0.9], ['water', 165, 132, 0.85], ['lotus', 200, 128, 0.95], ['lotus', 235, 130, 0.8]] } },
  // 聘才坐大鞍车出城，劈面遇张仲雨，两边停车说话
  26: { para: 13, scene: { seal: '遇', els: [['ground', 140, 122], ['cart', 88, 122, 0.9], ['figStand', 148, 122, 0.9], ['figStand', 172, 122, 0.85], ['cart', 228, 122, 0.85], ['birds', 40, 40]] } },
  // 推开半掩小门：静悄悄大梅树，绿纱窗内两个绝色相公
  27: { para: 28, scene: { seal: '窥', els: [['ground', 140, 124], ['plum', 55, 28, 0.95], ['figWalk', 140, 122, 0.85], ['figStand', 163, 122, 0.8], ['house', 212, 120, 0.95]] } },
  // 素兰迎进：兰保、琪官杏脸柳眉，光彩奕奕袅娜婷婷
  28: { para: 3, scene: { seal: '晤', wash: [], els: [['ground', 140, 124], ['window', 50, 82, 0.85], ['figStand', 120, 122, 0.9], ['figStand', 148, 122, 0.85], ['figStand', 176, 122, 0.9], ['incense', 210, 114, 0.7], ['screen', 243, 116, 0.75]] } },
  // 珊枝盘问琴言：怎么无缘无故会害起病来？琴言臊得忍气
  29: { para: 18, scene: { seal: '诘', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.8], ['candle', 95, 110, 0.7], ['figSit', 138, 122, 0.9], ['figStand', 175, 122, 0.9], ['screen', 235, 116, 0.8]] } },
  // 华府园：玉带河六折六桥，小艇泊岸，苍藤绿苔，亭榭花木
  30: { para: 7, scene: { seal: '桥', els: [['ground', 140, 128], ['bamboo', 45, 120, 0.9], ['bridge', 92, 128, 0.9], ['water', 140, 130], ['boat', 145, 122, 0.75], ['bridge', 192, 128, 0.75], ['rock', 235, 124, 0.8]] } },
  // 宝珠限刻作《良宵风月图》：黑笔楼台丛林修竹，月照彩云
  31: { para: 7, scene: { seal: '画', wash: [], els: [['ground', 140, 124], ['bamboo', 45, 120, 0.9], ['figStand', 102, 122, 0.85], ['desk', 142, 118], ['figSit', 142, 122, 0.85], ['figStand', 180, 122, 0.85], ['moon', 240, 32, 0.8]] } },
  // 春航中南元，拜谒座师，从此与文泽王恂更加亲爱
  32: { para: 9, scene: { seal: '谒', els: [['ground', 140, 122], ['cart', 75, 122, 0.85], ['figBow', 148, 122, 0.9], ['figStand', 172, 122, 0.9], ['mansion', 218, 120, 0.95]] } },
  // 聘才租了宏济寺房子，高车大马，日日征歌斗酒
  33: { para: 20, scene: { seal: '豪', els: [['ground', 140, 122], ['birds', 48, 40], ['temple', 88, 120, 0.95], ['figStand', 140, 122, 0.85], ['cart', 185, 122, 0.9], ['lanterns', 245, 62, 0.6]] } },
  // 元茂独酌看铺设：岁朝图、自鸣钟，颇为精致
  34: { para: 6, scene: { seal: '闲', wash: [], els: [['ground', 140, 124], ['screen', 60, 116, 0.85], ['tableRound', 138, 122, 0.85], ['figSit', 152, 122, 0.9], ['candle', 192, 110, 0.75], ['window', 240, 82, 0.85]] } },
  // 红茶仙馆：英州灵石丈二，大玉兰倚石，宝珠山茶千朵红花
  35: { para: 7, scene: { seal: '茶', els: [['ground', 140, 124], ['plum', 12, 26, 0.9], ['rock', 92, 124, 1.1], ['peony', 130, 124, 0.95], ['figWalk', 172, 124, 0.85], ['house', 218, 120, 0.95]] } },
  // 聘才斟酒相劝，琴言只得接杯，平生第一次两人对坐
  36: { para: 16, scene: { seal: '劝', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.85], ['figSit', 118, 122, 0.9], ['tableRound', 150, 122, 0.85], ['figSit', 182, 122, 0.9], ['candle', 220, 108, 0.75]] } },
  // 梅崦五处钩连：长廊曲槛，绿萼红香，外望唯一片香雪
  37: { para: 2, scene: { seal: '雪', els: [['ground', 140, 124], ['plum', 12, 24], ['plum', 112, 34, 0.8], ['figWalk', 152, 124, 0.85], ['figStand', 176, 124, 0.8], ['pavilion', 215, 118, 0.95], ['birds', 60, 38]] } },
  // 道翁论《硕人》《神女》《洛神》：咏月月满，写花花开
  38: { para: 34, scene: { seal: '论', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.85], ['desk', 128, 118, 0.9], ['figSit', 128, 122, 0.85], ['figSit', 170, 122, 0.9], ['figStand', 205, 122, 0.85], ['incense', 240, 114, 0.7]] } },
  // 洞房：剪亮蜡花揭开帐子，灯下银盆脸乌云发
  39: { para: 13, scene: { seal: '帐', wash: [], els: [['ground', 140, 124], ['lanterns', 60, 62, 0.7], ['bed', 132, 120], ['candle', 192, 110, 0.8], ['screen', 240, 116, 0.75]] } },
  // 菊花吓了一跳，忙打发人去请唐和尚来看病
  40: { para: 13, scene: { seal: '医', els: [['ground', 140, 122], ['willow', 45, 122, 0.85], ['house', 95, 120, 0.95], ['figStand', 150, 122, 0.85], ['figWalk', 198, 122, 0.9], ['birds', 245, 40]] } },
  // 清风徐来涟漪深碧：小桥古藤垂水，苏堤杨柳桃花，众鸟齐鸣
  41: { para: 6, scene: { seal: '漪', els: [['ground', 140, 128], ['plum', 12, 24, 0.8], ['water', 140, 128], ['boat', 102, 120, 0.9], ['birds', 148, 38], ['bridge', 178, 128, 0.85], ['willow', 222, 122, 0.9]] } },
  // 街心两人：一个圆脸皂靴，一个獐头鼠目拖红帽纬
  42: { para: 7, scene: { seal: '街', els: [['ground', 140, 122], ['house', 70, 120, 0.9], ['figWalk', 125, 122, 0.9], ['figStand', 175, 122, 0.9], ['figStand', 198, 122, 0.85], ['birds', 240, 40]] } },
  // 迷楼款式：楼阁层层迭迭围满杏花，隔小山望桃花坞
  43: { para: 11, scene: { seal: '杏', els: [['ground', 140, 124], ['plum', 12, 24, 0.9], ['mansion', 92, 120], ['house', 148, 120, 0.7], ['plum', 178, 30, 0.75], ['rock', 235, 124, 0.75]] } },
  // 蕊珠跪背《长恨歌》背不出，公子大笑，众珠掩口羞他
  44: { para: 7, scene: { seal: '诵', wash: [], els: [['ground', 140, 124], ['window', 45, 82, 0.8], ['figStand', 90, 122, 0.8], ['figBow', 122, 122, 0.85], ['figSit', 170, 122, 0.95], ['candle', 210, 108, 0.75], ['screen', 245, 116, 0.8]] } },
  // 含万楼设仙坛扶乩：商彝周鼎，百花酿百和香，中铺净沙
  45: { para: 13, scene: { seal: '乩', wash: [], els: [['ground', 140, 124], ['window', 48, 82, 0.85], ['figStand', 102, 122, 0.9], ['desk', 142, 118], ['antiques', 142, 104], ['incense', 178, 112, 0.8], ['figStand', 212, 122, 0.85], ['candle', 243, 110, 0.7]] } },
  // 菊畦泛舟：绕过石矶，苍松夹道，松龛鹤栏，白鹤雪羽皑皑
  46: { para: 17, scene: { seal: '松', els: [['ground', 140, 128], ['house', 55, 120, 0.85], ['boat', 105, 122, 0.85], ['water', 140, 130, 0.9], ['rock', 175, 124, 0.8], ['bamboo', 220, 120, 0.95], ['birds', 248, 36]] } },
  // 菊花灯下调药，收带三次方才止痛
  47: { para: 12, scene: { seal: '药', wash: [], els: [['ground', 140, 124], ['screen', 60, 116, 0.8], ['bed', 128, 120], ['figSit', 182, 122, 0.85], ['candle', 218, 110, 0.8]] } },
  // 双桨从莲萍菱芡中荡去：白鹭横飞，绿杨倒挂，琴仙凭栏微笑
  48: { para: 15, scene: { seal: '鹭', els: [['ground', 140, 128], ['willow', 42, 122, 0.9], ['boat', 95, 120, 0.9], ['birds', 130, 36], ['water', 140, 128], ['lotus', 148, 128, 0.9], ['bridge', 188, 128, 0.75], ['pavilion', 235, 118, 0.8]] } },
  // 华公子认了不是，子云留他春风沉醉轩小饮，冰释前嫌
  49: { para: 7, scene: { seal: '释', wash: [], els: [['ground', 140, 124], ['window', 52, 82, 0.85], ['figSit', 110, 122, 0.9], ['tableRound', 142, 122, 0.85], ['figSit', 174, 122, 0.9], ['candle', 212, 108, 0.75]] } },
  // 二门口依依拉手说话，亮轩剜破窗纸从隙里偷望
  50: { para: 24, scene: { seal: '隙', els: [['ground', 140, 122], ['house', 82, 120, 0.95], ['figStand', 145, 122, 0.85], ['figStand', 167, 122, 0.85], ['willow', 240, 122, 0.85], ['birds', 45, 40]] } },
  // 运河边：粮船如云，官船大旗招展，沿河堤慢慢走去
  51: { para: 7, scene: { seal: '漕', els: [['ground', 140, 128], ['figWalk', 50, 124, 0.9], ['boat', 100, 120, 0.95], ['water', 140, 128], ['boat', 190, 122, 0.8], ['willow', 250, 122, 0.85], ['birds', 222, 38]] } },
  // 花轿进门：笙歌鼎沸，仪从纷纭，满街车填马塞，拜了花烛
  52: { para: 23, scene: { seal: '喜', els: [['ground', 140, 122], ['lanterns', 70, 60, 0.9], ['figWalk', 105, 122, 0.85], ['sedan', 145, 122], ['figStand', 185, 122, 0.85], ['mansion', 232, 120, 0.7]] } },
  // 公子清点珍玩：绣蟒刻丝两大箱，端砚徽墨田黄图章
  53: { para: 9, scene: { seal: '珍', wash: [], els: [['ground', 140, 124], ['figStand', 95, 122, 0.85], ['desk', 140, 118], ['antiques', 140, 104], ['figSit', 140, 122, 0.85], ['figStand', 190, 122, 0.85], ['window', 243, 82, 0.8]] } },
  // 《望蓟门》：万里寒光生积雪，三边曙色动危旌
  54: { para: 18, scene: { seal: '塞', els: [['ground', 140, 122], ['sun', 45, 30, 0.8], ['snow', 140, 52], ['rock', 92, 124, 0.8], ['figStand', 122, 122, 0.75], ['cityGate', 190, 120, 0.95]] } },
  // 扬州废园：朱楼青琐成瓦砾场，灵石坍倒，楼阁只剩柱子
  55: { para: 3, scene: { seal: '墟', els: [['ground', 140, 124], ['birds', 45, 38], ['rock', 72, 124, 0.85], ['rock', 104, 126, 0.6], ['figStand', 133, 124, 0.8], ['figStand', 151, 124, 0.75], ['bridge', 185, 126, 0.9], ['house', 232, 120, 0.85]] } },
  // 日暮：柏树老鸦呀呀，破楼枭鸟，新月模糊，树边人影一闪
  56: { para: 6, scene: { seal: '影', els: [['ground', 140, 122], ['willow', 58, 122, 0.95], ['birds', 92, 40], ['birds', 116, 32], ['house', 165, 120, 0.9], ['figStand', 215, 122, 0.75], ['moon', 245, 32, 0.7]] } },
  // 园中菊花开满五色斑斓，晴光和蔼，十二红婢盈盈侍立
  57: { para: 1, scene: { seal: '菊', els: [['ground', 140, 124], ['pavilion', 68, 118, 0.9], ['peony', 118, 124, 0.9], ['peony', 148, 124, 0.8], ['figStand', 182, 124, 0.8], ['figStand', 202, 124, 0.75], ['figStand', 222, 124, 0.8], ['sun', 245, 30, 0.7]] } },
  // 唐和尚生日请吃面，石氏爱得月认作干儿子，抹牌顽耍
  58: { para: 32, scene: { seal: '寿', els: [['ground', 140, 124], ['temple', 75, 120, 0.95], ['figSit', 130, 122, 0.9], ['tableRound', 158, 122, 0.85], ['figSit', 186, 122, 0.9], ['figStand', 222, 122, 0.8]] } },
  // 屈公祠成名胜：湖心亭九曲红桥，石牌坊华表，花木假山
  59: { para: 18, scene: { seal: '祠', els: [['ground', 140, 128], ['tomb', 45, 122, 0.9], ['pavilion', 92, 118, 0.9], ['water', 140, 130, 0.95], ['bridge', 158, 128, 0.85], ['boat', 208, 124, 0.75], ['rock', 245, 124, 0.65]] } },
  // 《仙中趣品》：鹤鸣在林，濯足清涧，抱琴禅关，江皋有梅
  60: { para: 26, scene: { seal: '逸', els: [['ground', 140, 126], ['plum', 12, 26, 0.85], ['peony', 98, 126, 0.75], ['qin', 140, 120, 0.7], ['figSit', 170, 124, 0.85], ['water', 140, 133, 0.8], ['birds', 208, 36], ['bamboo', 246, 120, 0.95]] } },
};

/** 0-based paragraph index the mid-chapter scene is anchored to, or null. */
export function midSceneParagraphIndex(chapterId: number): number | null {
  return MID_SCENES[chapterId]?.para ?? null;
}

export const ChapterMidScene: React.FC<{ chapterId: number }> = ({ chapterId }) => {
  const entry = MID_SCENES[chapterId];
  if (!entry) return null;
  return <InkSceneCard scene={entry.scene} className="mt-6" />;
};
