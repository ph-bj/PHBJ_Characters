import type { Actor } from '../../beats/album';
import { DAN_POSES } from '../../figures';

/**
 * The eight performers of Shi Nanxiang's 《花选》 (Chapter 1, paragraphs 13–34), as their album
 * pages present them. Shared by those paragraphs' cinemas.
 */
export const ACTORS = {
  // 琼楼珠树 — dances the 《霓裳》 with sleeves raised.
  baozhu: { name: '袁宝珠', emblem: '琼楼珠树', motif: 'pearl-tree', facts: ['年十六', '姑苏人', '联锦部'], flower: 'peony', pose: DAN_POSES[0], seal: '宝珠' },
  // 瑶台璧月 — an official's son of integrity; poised with a fan.
  huifang: { name: '苏蕙芳', emblem: '瑶台璧月', motif: 'jade-moon', facts: ['年十七', '姑苏人', '联锦部'], flower: 'plum', pose: DAN_POSES[4], seal: '蕙芳' },
  // 碧海珊枝 — plays Yang Guifei dancing on the tray: a whirling turn.
  sulan: { name: '陆素兰', emblem: '碧海珊枝', motif: 'coral', facts: ['年十六', '姑苏人', '联锦部'], flower: 'orchid', pose: DAN_POSES[8], seal: '素兰' },
  // 嵰山艳雪 — plays the flute.
  shufang: { name: '金漱芳', emblem: '嵰山艳雪', motif: 'snow-peak', facts: ['年十五', '姑苏人', '联珠部'], flower: 'begonia', pose: { lift: [0.9, 2.3], swing: 0.1, sleeve: 0.8, turn: 0, crouch: 0, crown: true, prop: 'flute' }, seal: '漱芳' },
  // 玉树临风 — famous for 《折柳阳关》: a willow branch in hand.
  yulin: { name: '李玉林', emblem: '玉树临风', motif: 'jade-tree', facts: ['年十五', '扬州人', '联珠部'], flower: 'lotus', pose: { lift: [0.6, 1.9], swing: 0.2, sleeve: 1, turn: 0, crouch: 0, prop: 'willow' }, seal: '玉林' },
  // 火树银花 — martial roles: a sword on the back and one in hand.
  lanbao: { name: '王兰保', emblem: '火树银花', motif: 'fire-tree', facts: ['年十七', '扬州人', '联锦部'], flower: 'pomegranate', pose: { lift: [1.6, 2.5], swing: 0.3, sleeve: 0.7, turn: 0, crouch: 0.1, prop: 'sword', swordOnBack: true }, seal: '兰保' },
  // 秋水芙蓉 — playful, with the ivory clappers.
  guibao: { name: '王桂保', emblem: '秋水芙蓉', motif: 'autumn-lotus', facts: ['年十五', '兰保弟', '联锦部'], flower: 'hibiscus', pose: { lift: [0.7, 1.7], swing: 0.35, sleeve: 0.8, turn: 0, crouch: 0, prop: 'clappers' }, seal: '桂保' },
  // 天上玉麟 — the youngest; holds the incense burner "waiting upon the Jade Emperor".
  chunxi: { name: '林春喜', emblem: '天上玉麟', motif: 'qilin', facts: ['年十四', '姑苏人', '联锦部'], flower: 'peach', pose: { lift: [0.5, 1.4], swing: 0.1, sleeve: 0.7, turn: 0, crouch: 0, prop: 'censer' }, seal: '春喜' },
} satisfies Record<string, Actor>;
