import { Relationship } from './types';

/**
 * The single source of truth for character relationships.
 *
 * Invariants, enforced when this file is regenerated:
 *  - exactly one entry per unordered character pair;
 *  - `source` and `target` are canonical ids (identities merged by
 *    `mergeGroups` in data.ts are already resolved) and both exist in
 *    `characters`, with `source` < `target` lexicographically;
 *  - where several sources described the same pair, the most detailed label
 *    was kept — a real relationship over a bare co-occurrence note, then the
 *    label used by the fewest pairs, then the longer wording.
 *
 * Merged from the former baseRelationships, chapterValidatedRelationshipSpecs,
 * cooccurrenceSpecificRelationships and generatedRelationships lists.
 */
export const relationships: Relationship[] = [
  { source: 'char-0', target: 'char-1', type: 'Platonic Soulmates', typeZh: '精神知己与生死契' }, // 梅子玉 — 杜琴言
  { source: 'char-0', target: 'char-2', type: 'Chivalrous Cousin-Friend', typeZh: '侠义表兄与文会同道' }, // 梅子玉 — 颜仲清
  { source: 'char-0', target: 'char-3', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 史南湘
  { source: 'char-0', target: 'char-4', type: 'Maternal Cousin & Opera Host', typeZh: '表兄弟与戏曲文席同好' }, // 梅子玉 — 王恂
  { source: 'char-0', target: 'char-5', type: 'Parasitic Guest & Household Gossip', typeZh: '寄居造谣与家庭嫌隙' }, // 梅子玉 — 魏聘才
  { source: 'char-0', target: 'char-6', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 李元茂
  { source: 'char-0', target: 'char-7', type: 'Garden of Contentment Salon Host & Guest', typeZh: '怡园雅集主宾与艺术知音' }, // 梅子玉 — 徐子云
  { source: 'char-0', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 萧次贤
  { source: 'char-0', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 刘文泽
  { source: 'char-0', target: 'char-10', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 高品
  { source: 'char-0', target: 'char-11', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 张仲雨
  { source: 'char-0', target: 'char-14', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 冯子佩
  { source: 'char-0', target: 'char-15', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 田春航
  { source: 'char-0', target: 'char-17', type: 'Senior Literary Arbiter & Historian', typeZh: '文坛耆宿与结语名士' }, // 梅子玉 — 金吉甫
  { source: 'char-0', target: 'char-20', type: 'Student/Tutor', typeZh: '师生' }, // 梅子玉 — 李性全
  { source: 'char-0', target: 'char-21', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 梅子玉 — 孙嗣徽
  { source: 'char-0', target: 'char-22', type: 'Literary Peer', typeZh: '同好文人' }, // 梅子玉 — 孙嗣元
  { source: 'char-0', target: 'char-23', type: 'Literary Confidant & Performer', typeZh: '清高琴友与画中知音' }, // 梅子玉 — 袁宝珠
  { source: 'char-0', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 苏蕙芳
  { source: 'char-0', target: 'char-25', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 陆素兰
  { source: 'char-0', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 金漱芳
  { source: 'char-0', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 李玉林
  { source: 'char-0', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 王兰保
  { source: 'char-0', target: 'char-29', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 王桂保
  { source: 'char-0', target: 'char-30', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 林春喜
  { source: 'char-0', target: 'char-31', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 秦琪官
  { source: 'char-0', target: 'char-32', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 蓉官
  { source: 'char-0', target: 'char-33', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 春兰
  { source: 'char-0', target: 'char-35', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 玉美
  { source: 'char-0', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 保珠
  { source: 'char-0', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 袁绮香
  { source: 'char-0', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 林珊枝
  { source: 'char-0', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 二喜
  { source: 'char-0', target: 'char-47', type: 'Strict Confucian Father & Son', typeZh: '翰林严父与功名期望' }, // 梅子玉 — 梅士燮
  { source: 'char-0', target: 'char-48', type: 'Father-in-law/Son-in-law', typeZh: '翁婿' }, // 梅子玉 — 王文辉
  { source: 'char-0', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 孙亮功
  { source: 'char-0', target: 'char-50', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 杨方猷
  { source: 'char-0', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 周锡爵
  { source: 'char-0', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 陆宗沅
  { source: 'char-0', target: 'char-53', type: 'Social Friend', typeZh: '交游朋友' }, // 梅子玉 — 富伦
  { source: 'char-0', target: 'char-54', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 贵芬
  { source: 'char-0', target: 'char-55', type: 'Romantic Rival & Aristocratic Antagonist', typeZh: '夺琴之仇与贵戚宿敌' }, // 梅子玉 — 华光宿
  { source: 'char-0', target: 'char-56', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 曹长庆
  { source: 'char-0', target: 'char-59', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 徐震
  { source: 'char-0', target: 'char-61', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 刘侍郎
  { source: 'char-0', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 吴阁学
  { source: 'char-0', target: 'char-72', type: 'Persecutor of Qinyan & Depraved Merchant', typeZh: '逼迫琴言之市井恶少' }, // 梅子玉 — 奚十一
  { source: 'char-0', target: 'char-73', type: 'Adversary', typeZh: '对立冲突' }, // 梅子玉 — 潘其观
  { source: 'char-0', target: 'char-75', type: 'Adversary', typeZh: '对立冲突' }, // 梅子玉 — 唐和尚
  { source: 'char-0', target: 'char-86', type: 'Protective Mother & Son', typeZh: '道德守护慈母与顺从子' }, // 梅子玉 — 颜夫人
  { source: 'char-0', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 王家陆夫人
  { source: 'char-0', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 蓉华
  { source: 'char-0', target: 'char-90', type: 'Betrothed Spouse & Literary Partner', typeZh: '诗文缔姻与正室伉俪' }, // 梅子玉 — 王琼华
  { source: 'char-0', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 许三姐
  { source: 'char-0', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 玉天仙
  { source: 'char-0', target: 'char-102', type: 'Message-Carrying Page & Master', typeZh: '骑马传信小厮' }, // 梅子玉 — 云儿
  { source: 'char-0', target: 'char-103', type: 'Master/Servant', typeZh: '主仆' }, // 梅子玉 — 俊儿
  { source: 'char-0', target: 'char-104', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 许顺
  { source: 'char-0', target: 'char-106', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 梅进
  { source: 'char-0', target: 'char-107', type: 'Page/Master', typeZh: '小厮主仆' }, // 梅子玉 — 虎儿
  { source: 'char-0', target: 'char-111', type: 'Maid/Master', typeZh: '书房使女' }, // 梅子玉 — 子玉书房小丫鬟
  { source: 'char-0', target: 'char-112', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 梅子玉 — 四儿
  { source: 'char-0', target: 'char-119', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 梅子玉 — 卢大爷
  { source: 'char-0', target: 'char-121', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 梅子玉 — 叶茂林
  { source: 'char-0', target: 'char-123', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 梅子玉 — 老三
  { source: 'char-0', target: 'char-134', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅子玉 — 刘喜
  { source: 'char-0', target: 'char-135', type: 'Literary Peer', typeZh: '同好文人' }, // 梅子玉 — 侯石翁
  { source: 'char-0', target: 'char-136', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 巴英官
  { source: 'char-0', target: 'char-137', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 梅子玉 — 菊花
  { source: 'char-0', target: 'char-138', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 得月
  { source: 'char-0', target: 'char-139', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 梅子玉 — 卓天香
  { source: 'char-0', target: 'char-141', type: 'Trusted Friend', typeZh: '知交' }, // 梅子玉 — 屈道翁
  { source: 'char-0', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅子玉 — 苏侯
  { source: 'char-0', target: 'char-143', type: 'Adversary', typeZh: '对立冲突' }, // 梅子玉 — 姬亮轩
  { source: 'char-0', target: 'char-145', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 张笑梅
  { source: 'char-0', target: 'char-146', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 梅子玉 — 杨梅窗
  { source: 'char-0', target: 'char-147', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 周小三
  { source: 'char-0', target: 'char-150', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 吴紫烟
  { source: 'char-0', target: 'char-152', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅子玉 — 长庆师娘
  { source: 'char-0', target: 'char-153', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅子玉 — 苏浣香
  { source: 'char-0', target: 'char-154', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅子玉 — 浣兰
  { source: 'char-0', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 红雪
  { source: 'char-0', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 红香
  { source: 'char-0', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 花珠
  { source: 'char-0', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 画珠
  { source: 'char-0', target: 'char-159', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 梅子玉 — 明珠
  { source: 'char-0', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 荷珠
  { source: 'char-0', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅子玉 — 蕊珠
  { source: 'char-0', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅子玉 — 黄掌柜
  { source: 'char-0', target: 'char-197', type: 'Employer & Artisan', typeZh: '雇佣与刻工' }, // 梅子玉 — 季十矮子
  { source: 'char-1', target: 'char-2', type: 'Rescuer & Rescued', typeZh: '施救与受助' }, // 杜琴言 — 颜仲清
  { source: 'char-1', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 史南湘
  { source: 'char-1', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 王恂
  { source: 'char-1', target: 'char-5', type: 'Scheming Hanger-on & Victim', typeZh: '利诱陷害与同路受害者' }, // 杜琴言 — 魏聘才
  { source: 'char-1', target: 'char-6', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 李元茂
  { source: 'char-1', target: 'char-7', type: 'Redeemer Patron & Mentor', typeZh: '重金赎身恩主与艺术知己' }, // 杜琴言 — 徐子云
  { source: 'char-1', target: 'char-8', type: 'Patron & Performer', typeZh: '恩主与伶人' }, // 杜琴言 — 萧次贤
  { source: 'char-1', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 刘文泽
  { source: 'char-1', target: 'char-10', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 高品
  { source: 'char-1', target: 'char-11', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 张仲雨
  { source: 'char-1', target: 'char-14', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 冯子佩
  { source: 'char-1', target: 'char-15', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 田春航
  { source: 'char-1', target: 'char-17', type: 'Literary Patron', typeZh: '名士与伶人' }, // 杜琴言 — 金吉甫
  { source: 'char-1', target: 'char-20', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杜琴言 — 李性全
  { source: 'char-1', target: 'char-21', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 杜琴言 — 孙嗣徽
  { source: 'char-1', target: 'char-22', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杜琴言 — 孙嗣元
  { source: 'char-1', target: 'char-23', type: 'Loyal Friend', typeZh: '同门挚友' }, // 杜琴言 — 袁宝珠
  { source: 'char-1', target: 'char-24', type: 'High-Principled Allies & Redemption Strategists', typeZh: '机智助赎身之同道' }, // 杜琴言 — 苏蕙芳
  { source: 'char-1', target: 'char-25', type: 'Loyal Allies in Qinyan Redemption', typeZh: '苦心促成重逢之盟友' }, // 杜琴言 — 陆素兰
  { source: 'char-1', target: 'char-26', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 金漱芳
  { source: 'char-1', target: 'char-27', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 李玉林
  { source: 'char-1', target: 'char-28', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 王兰保
  { source: 'char-1', target: 'char-29', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 王桂保
  { source: 'char-1', target: 'char-30', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 林春喜
  { source: 'char-1', target: 'char-31', type: 'Companion', typeZh: '进京同伴' }, // 杜琴言 — 秦琪官
  { source: 'char-1', target: 'char-32', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 杜琴言 — 蓉官
  { source: 'char-1', target: 'char-33', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 春兰
  { source: 'char-1', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 玉美
  { source: 'char-1', target: 'char-38', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 保珠
  { source: 'char-1', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 袁绮香
  { source: 'char-1', target: 'char-42', type: 'Fellow Performer', typeZh: '同台伶人' }, // 杜琴言 — 林珊枝
  { source: 'char-1', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 二喜
  { source: 'char-1', target: 'char-47', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 杜琴言 — 梅士燮
  { source: 'char-1', target: 'char-48', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 杜琴言 — 王文辉
  { source: 'char-1', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 孙亮功
  { source: 'char-1', target: 'char-50', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 杨方猷
  { source: 'char-1', target: 'char-51', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 周锡爵
  { source: 'char-1', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 陆宗沅
  { source: 'char-1', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杜琴言 — 富伦
  { source: 'char-1', target: 'char-54', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 贵芬
  { source: 'char-1', target: 'char-55', type: 'Captor & Forcible Abduction Victim', typeZh: '强纳锦春园之霸占与受害者' }, // 杜琴言 — 华光宿
  { source: 'char-1', target: 'char-56', type: 'Troupe Master & Star Apprentice', typeZh: '师傅与摇钱树徒弟' }, // 杜琴言 — 曹长庆
  { source: 'char-1', target: 'char-59', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 徐震
  { source: 'char-1', target: 'char-61', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 刘侍郎
  { source: 'char-1', target: 'char-62', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 吴阁学
  { source: 'char-1', target: 'char-67', type: 'Predatory Patronage Attempt', typeZh: '假义逼迫' }, // 杜琴言 — 侯太史
  { source: 'char-1', target: 'char-72', type: 'Depraved Merchant Harasser & Victim', typeZh: '纠缠逼迫之恶少与受害者' }, // 杜琴言 — 奚十一
  { source: 'char-1', target: 'char-73', type: 'Victim & Persecutor', typeZh: '受害与迫害' }, // 杜琴言 — 潘其观
  { source: 'char-1', target: 'char-75', type: 'Victim & Persecutor', typeZh: '受害与迫害' }, // 杜琴言 — 唐和尚
  { source: 'char-1', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 杜琴言 — 颜夫人
  { source: 'char-1', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 蓉华
  { source: 'char-1', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 王琼华
  { source: 'char-1', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 许三姐
  { source: 'char-1', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 玉天仙
  { source: 'char-1', target: 'char-102', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 云儿
  { source: 'char-1', target: 'char-104', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 许顺
  { source: 'char-1', target: 'char-106', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 梅进
  { source: 'char-1', target: 'char-112', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 四儿
  { source: 'char-1', target: 'char-119', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 杜琴言 — 卢大爷
  { source: 'char-1', target: 'char-121', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 叶茂林
  { source: 'char-1', target: 'char-123', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 老三
  { source: 'char-1', target: 'char-130', type: 'Father/Son', typeZh: '父子' }, // 杜琴言 — 杜琴师
  { source: 'char-1', target: 'char-131', type: 'Mother/Son', typeZh: '母子' }, // 杜琴言 — 杜母
  { source: 'char-1', target: 'char-132', type: 'Uncle/Nephew', typeZh: '族叔' }, // 杜琴言 — 杜族叔
  { source: 'char-1', target: 'char-134', type: 'Protector', typeZh: '护持' }, // 杜琴言 — 刘喜
  { source: 'char-1', target: 'char-135', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杜琴言 — 侯石翁
  { source: 'char-1', target: 'char-136', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 巴英官
  { source: 'char-1', target: 'char-137', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 杜琴言 — 菊花
  { source: 'char-1', target: 'char-138', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 得月
  { source: 'char-1', target: 'char-139', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 杜琴言 — 卓天香
  { source: 'char-1', target: 'char-141', type: 'Adoptive Father & Spiritual Master', typeZh: '屈道翁义父与琴仙宗师' }, // 杜琴言 — 屈道翁
  { source: 'char-1', target: 'char-142', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杜琴言 — 苏侯
  { source: 'char-1', target: 'char-143', type: 'Victim & Schemer', typeZh: '受害与算计' }, // 杜琴言 — 姬亮轩
  { source: 'char-1', target: 'char-145', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 张笑梅
  { source: 'char-1', target: 'char-146', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杜琴言 — 杨梅窗
  { source: 'char-1', target: 'char-147', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 周小三
  { source: 'char-1', target: 'char-150', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 吴紫烟
  { source: 'char-1', target: 'char-152', type: "Troupe Master's Family", typeZh: '师门眷属' }, // 杜琴言 — 长庆师娘
  { source: 'char-1', target: 'char-153', type: 'Captive & Mistress', typeZh: '入府与主母' }, // 杜琴言 — 苏浣香
  { source: 'char-1', target: 'char-154', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 浣兰
  { source: 'char-1', target: 'char-155', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 红雪
  { source: 'char-1', target: 'char-156', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 红香
  { source: 'char-1', target: 'char-157', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 花珠
  { source: 'char-1', target: 'char-158', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 画珠
  { source: 'char-1', target: 'char-159', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 明珠
  { source: 'char-1', target: 'char-160', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 荷珠
  { source: 'char-1', target: 'char-161', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 杜琴言 — 蕊珠
  { source: 'char-1', target: 'char-164', type: 'Household Hanger-on', typeZh: '寓中帮闲' }, // 杜琴言 — 伍麻子
  { source: 'char-1', target: 'char-165', type: 'Fellow Disciples', typeZh: '同门师兄弟' }, // 杜琴言 — 天福
  { source: 'char-1', target: 'char-166', type: 'Fellow Disciples', typeZh: '同门师兄弟' }, // 杜琴言 — 天寿
  { source: 'char-1', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 黄掌柜
  { source: 'char-1', target: 'char-196', type: 'Dream Encounter', typeZh: '梦中相识' }, // 杜琴言 — 华正昌书铺掌柜
  { source: 'char-1', target: 'char-197', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杜琴言 — 季十矮子
  { source: 'char-2', target: 'char-3', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 史南湘
  { source: 'char-2', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 王恂
  { source: 'char-2', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 颜仲清 — 魏聘才
  { source: 'char-2', target: 'char-6', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 李元茂
  { source: 'char-2', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 徐子云
  { source: 'char-2', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 萧次贤
  { source: 'char-2', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 颜仲清 — 刘文泽
  { source: 'char-2', target: 'char-20', type: 'Literary Peer', typeZh: '同好文人' }, // 颜仲清 — 李性全
  { source: 'char-2', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' }, // 颜仲清 — 孙嗣徽
  { source: 'char-2', target: 'char-22', type: 'Literary Peer', typeZh: '同好文人' }, // 颜仲清 — 孙嗣元
  { source: 'char-2', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 袁宝珠
  { source: 'char-2', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 苏蕙芳
  { source: 'char-2', target: 'char-25', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 陆素兰
  { source: 'char-2', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 金漱芳
  { source: 'char-2', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 李玉林
  { source: 'char-2', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 王兰保
  { source: 'char-2', target: 'char-29', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 王桂保
  { source: 'char-2', target: 'char-30', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 林春喜
  { source: 'char-2', target: 'char-31', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 秦琪官
  { source: 'char-2', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 颜仲清 — 蓉官
  { source: 'char-2', target: 'char-35', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 颜仲清 — 玉美
  { source: 'char-2', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 颜仲清 — 保珠
  { source: 'char-2', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 颜仲清 — 袁绮香
  { source: 'char-2', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 颜仲清 — 林珊枝
  { source: 'char-2', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 颜仲清 — 二喜
  { source: 'char-2', target: 'char-47', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 颜仲清 — 梅士燮
  { source: 'char-2', target: 'char-48', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 颜仲清 — 王文辉
  { source: 'char-2', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 孙亮功
  { source: 'char-2', target: 'char-50', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 杨方猷
  { source: 'char-2', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 周锡爵
  { source: 'char-2', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 陆宗沅
  { source: 'char-2', target: 'char-53', type: 'Social Friend', typeZh: '交游朋友' }, // 颜仲清 — 富伦
  { source: 'char-2', target: 'char-54', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 贵芬
  { source: 'char-2', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 颜仲清 — 华光宿
  { source: 'char-2', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 颜仲清 — 曹长庆
  { source: 'char-2', target: 'char-59', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 徐震
  { source: 'char-2', target: 'char-61', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 刘侍郎
  { source: 'char-2', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 颜仲清 — 吴阁学
  { source: 'char-2', target: 'char-72', type: 'Adversary', typeZh: '死敌宿仇' }, // 颜仲清 — 奚十一
  { source: 'char-2', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 颜仲清 — 潘其观
  { source: 'char-2', target: 'char-75', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 颜仲清 — 唐和尚
  { source: 'char-2', target: 'char-86', type: 'Aunt/Nephew', typeZh: '姑侄' }, // 颜仲清 — 颜夫人
  { source: 'char-2', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' }, // 颜仲清 — 王家陆夫人
  { source: 'char-2', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 颜仲清 — 孙氏
  { source: 'char-2', target: 'char-89', type: 'Marriage', typeZh: '入赘姊妹' }, // 颜仲清 — 蓉华
  { source: 'char-2', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 颜仲清 — 王琼华
  { source: 'char-2', target: 'char-92', type: 'Mother/Son', typeZh: '母子' }, // 颜仲清 — 郑氏
  { source: 'char-2', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' }, // 颜仲清 — 许三姐
  { source: 'char-3', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 史南湘 — 王恂
  { source: 'char-3', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 史南湘 — 魏聘才
  { source: 'char-3', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' }, // 史南湘 — 李元茂
  { source: 'char-3', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' }, // 史南湘 — 徐子云
  { source: 'char-3', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 史南湘 — 萧次贤
  { source: 'char-3', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 史南湘 — 刘文泽
  { source: 'char-3', target: 'char-30', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 史南湘 — 林春喜
  { source: 'char-3', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 史南湘 — 秦琪官
  { source: 'char-3', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 史南湘 — 保珠
  { source: 'char-3', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 史南湘 — 袁绮香
  { source: 'char-3', target: 'char-42', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 史南湘 — 林珊枝
  { source: 'char-3', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 史南湘 — 梅士燮
  { source: 'char-3', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 史南湘 — 王文辉
  { source: 'char-3', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 史南湘 — 孙亮功
  { source: 'char-3', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 史南湘 — 华光宿
  { source: 'char-3', target: 'char-57', type: 'Father/Son', typeZh: '父子' }, // 史南湘 — 史曾望
  { source: 'char-3', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 史南湘 — 吴阁学
  { source: 'char-3', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 史南湘 — 奚十一
  { source: 'char-3', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 史南湘 — 唐和尚
  { source: 'char-3', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 史南湘 — 颜夫人
  { source: 'char-3', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 史南湘 — 孙氏
  { source: 'char-3', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 史南湘 — 王琼华
  { source: 'char-4', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 王恂 — 魏聘才
  { source: 'char-4', target: 'char-6', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 王恂 — 李元茂
  { source: 'char-4', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 王恂 — 徐子云
  { source: 'char-4', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 王恂 — 萧次贤
  { source: 'char-4', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 王恂 — 刘文泽
  { source: 'char-4', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 王恂 — 袁绮香
  { source: 'char-4', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王恂 — 林珊枝
  { source: 'char-4', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 王恂 — 二喜
  { source: 'char-4', target: 'char-47', type: 'Family/Household', typeZh: '家属/内眷' }, // 王恂 — 梅士燮
  { source: 'char-4', target: 'char-48', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 王恂 — 王文辉
  { source: 'char-4', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 孙亮功
  { source: 'char-4', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 周锡爵
  { source: 'char-4', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 陆宗沅
  { source: 'char-4', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 王恂 — 华光宿
  { source: 'char-4', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 王恂 — 曹长庆
  { source: 'char-4', target: 'char-59', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 徐震
  { source: 'char-4', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 吴阁学
  { source: 'char-4', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王恂 — 沈司业
  { source: 'char-4', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 王恂 — 奚十一
  { source: 'char-4', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王恂 — 潘其观
  { source: 'char-4', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王恂 — 唐和尚
  { source: 'char-4', target: 'char-86', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 王恂 — 颜夫人
  { source: 'char-4', target: 'char-87', type: 'Stepmother/Son', typeZh: '继母子' }, // 王恂 — 王家陆夫人
  { source: 'char-4', target: 'char-88', type: 'Marriage', typeZh: '夫妻' }, // 王恂 — 孙氏
  { source: 'char-4', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 王恂 — 蓉华
  { source: 'char-4', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 王恂 — 王琼华
  { source: 'char-4', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 王恂 — 孙家陆夫人
  { source: 'char-5', target: 'char-6', type: 'Scheming Peers', typeZh: '狐朋狗友' }, // 魏聘才 — 李元茂
  { source: 'char-5', target: 'char-7', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 魏聘才 — 徐子云
  { source: 'char-5', target: 'char-8', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 魏聘才 — 萧次贤
  { source: 'char-5', target: 'char-9', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 魏聘才 — 刘文泽
  { source: 'char-5', target: 'char-51', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 周锡爵
  { source: 'char-5', target: 'char-52', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 陆宗沅
  { source: 'char-5', target: 'char-53', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 富伦
  { source: 'char-5', target: 'char-54', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 贵芬
  { source: 'char-5', target: 'char-55', type: 'Sycophantic Parasite & Noble Patron', typeZh: '投机附势与奢靡公府' }, // 魏聘才 — 华光宿
  { source: 'char-5', target: 'char-56', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 魏聘才 — 曹长庆
  { source: 'char-5', target: 'char-59', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 徐震
  { source: 'char-5', target: 'char-61', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 刘侍郎
  { source: 'char-5', target: 'char-62', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 吴阁学
  { source: 'char-5', target: 'char-72', type: 'Sycophantic Cronies & Opium/Gambling Partners', typeZh: '附势帮凶与烟赌同恶' }, // 魏聘才 — 奚十一
  { source: 'char-5', target: 'char-73', type: 'Villainous Associate', typeZh: '狐朋狗友' }, // 魏聘才 — 潘其观
  { source: 'char-5', target: 'char-74', type: 'Extortion Attempt', typeZh: '敲诈冲突' }, // 魏聘才 — 老王
  { source: 'char-5', target: 'char-75', type: 'Sycophantic Cronies & Opium Partners', typeZh: '投机帮凶与烟赌恶少' }, // 魏聘才 — 唐和尚
  { source: 'char-5', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 魏聘才 — 颜夫人
  { source: 'char-5', target: 'char-89', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 蓉华
  { source: 'char-5', target: 'char-90', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 王琼华
  { source: 'char-5', target: 'char-94', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 许三姐
  { source: 'char-5', target: 'char-95', type: 'Marriage', typeZh: '夫妻' }, // 魏聘才 — 玉天仙
  { source: 'char-5', target: 'char-96', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 魏聘才 — 孙家陆夫人
  { source: 'char-6', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 李元茂 — 徐子云
  { source: 'char-6', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 李元茂 — 萧次贤
  { source: 'char-6', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 李元茂 — 刘文泽
  { source: 'char-6', target: 'char-61', type: 'Official & Scholar', typeZh: '官员与名士' }, // 李元茂 — 刘侍郎
  { source: 'char-6', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 李元茂 — 奚十一
  { source: 'char-6', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 李元茂 — 潘其观
  { source: 'char-6', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 李元茂 — 唐和尚
  { source: 'char-6', target: 'char-86', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 李元茂 — 颜夫人
  { source: 'char-6', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 李元茂 — 孙氏
  { source: 'char-6', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 李元茂 — 玉天仙
  { source: 'char-6', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 李元茂 — 孙家陆夫人
  { source: 'char-6', target: 'char-99', type: 'Marriage', typeZh: '夫妻' }, // 李元茂 — 孙大姑娘
  { source: 'char-7', target: 'char-8', type: 'Garden of Contentment Designers & Polymath Intimates', typeZh: '怡园营造同道与莫逆之交' }, // 徐子云 — 萧次贤
  { source: 'char-7', target: 'char-9', type: 'Banquet Host & Garden of Contentment Patron', typeZh: '侍郎之子与怡园主客' }, // 徐子云 — 刘文泽
  { source: 'char-7', target: 'char-72', type: 'Adversary', typeZh: '死敌宿仇' }, // 徐子云 — 奚十一
  { source: 'char-7', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 徐子云 — 潘其观
  { source: 'char-7', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 徐子云 — 唐和尚
  { source: 'char-7', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 徐子云 — 颜夫人
  { source: 'char-7', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 徐子云 — 孙氏
  { source: 'char-7', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 徐子云 — 蓉华
  { source: 'char-7', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 徐子云 — 玉天仙
  { source: 'char-8', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 萧次贤 — 刘文泽
  { source: 'char-8', target: 'char-86', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 萧次贤 — 颜夫人
  { source: 'char-8', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 萧次贤 — 蓉华
  { source: 'char-8', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 萧次贤 — 王琼华
  { source: 'char-8', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' }, // 萧次贤 — 许三姐
  { source: 'char-9', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 刘文泽 — 王琼华
  { source: 'char-9', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' }, // 刘文泽 — 许三姐
  { source: 'char-10', target: 'char-2', type: 'Witty Tribute Student & Hongji Temple Peer', typeZh: '鸿济寺幽默拔贡与戏考同好' }, // 高品 — 颜仲清
  { source: 'char-10', target: 'char-3', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 史南湘
  { source: 'char-10', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 王恂
  { source: 'char-10', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 高品 — 魏聘才
  { source: 'char-10', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 李元茂
  { source: 'char-10', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 徐子云
  { source: 'char-10', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 萧次贤
  { source: 'char-10', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 刘文泽
  { source: 'char-10', target: 'char-11', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 张仲雨
  { source: 'char-10', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 沈伯才
  { source: 'char-10', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 巴霖
  { source: 'char-10', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 冯子佩
  { source: 'char-10', target: 'char-15', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 田春航
  { source: 'char-10', target: 'char-17', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 金吉甫
  { source: 'char-10', target: 'char-20', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 李性全
  { source: 'char-10', target: 'char-21', type: 'Mockery', typeZh: '嘲弄' }, // 高品 — 孙嗣徽
  { source: 'char-10', target: 'char-22', type: 'Mockery', typeZh: '嘲弄' }, // 高品 — 孙嗣元
  { source: 'char-10', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 袁宝珠
  { source: 'char-10', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 苏蕙芳
  { source: 'char-10', target: 'char-25', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 陆素兰
  { source: 'char-10', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 金漱芳
  { source: 'char-10', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 李玉林
  { source: 'char-10', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 王兰保
  { source: 'char-10', target: 'char-29', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 王桂保
  { source: 'char-10', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 林春喜
  { source: 'char-10', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 秦琪官
  { source: 'char-10', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 蓉官
  { source: 'char-10', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 保珠
  { source: 'char-10', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 袁绮香
  { source: 'char-10', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 高品 — 林珊枝
  { source: 'char-10', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 二喜
  { source: 'char-10', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 梅士燮
  { source: 'char-10', target: 'char-48', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 高品 — 王文辉
  { source: 'char-10', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 孙亮功
  { source: 'char-10', target: 'char-50', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 杨方猷
  { source: 'char-10', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 周锡爵
  { source: 'char-10', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 陆宗沅
  { source: 'char-10', target: 'char-53', type: 'Social Friend', typeZh: '交游朋友' }, // 高品 — 富伦
  { source: 'char-10', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 高品 — 华光宿
  { source: 'char-10', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 高品 — 曹长庆
  { source: 'char-10', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 吴阁学
  { source: 'char-10', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 高品 — 奚十一
  { source: 'char-10', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 高品 — 潘其观
  { source: 'char-10', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 高品 — 唐和尚
  { source: 'char-10', target: 'char-86', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 高品 — 颜夫人
  { source: 'char-10', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 王家陆夫人
  { source: 'char-10', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 孙氏
  { source: 'char-10', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 蓉华
  { source: 'char-10', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 王琼华
  { source: 'char-10', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 高品 — 许三姐
  { source: 'char-10', target: 'char-102', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 高品 — 云儿
  { source: 'char-10', target: 'char-104', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 许顺
  { source: 'char-10', target: 'char-106', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 梅进
  { source: 'char-10', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 四儿
  { source: 'char-10', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 富府跟班
  { source: 'char-10', target: 'char-119', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 卢大爷
  { source: 'char-10', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 叶茂林
  { source: 'char-10', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 老三
  { source: 'char-10', target: 'char-135', type: 'Literary Peer', typeZh: '同好文人' }, // 高品 — 侯石翁
  { source: 'char-10', target: 'char-137', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 高品 — 菊花
  { source: 'char-10', target: 'char-141', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 高品 — 屈道翁
  { source: 'char-10', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' }, // 高品 — 苏侯
  { source: 'char-10', target: 'char-145', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 高品 — 张笑梅
  { source: 'char-10', target: 'char-150', type: 'Family/Household', typeZh: '家属/内眷' }, // 高品 — 吴紫烟
  { source: 'char-10', target: 'char-153', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 高品 — 苏浣香
  { source: 'char-10', target: 'char-154', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 高品 — 浣兰
  { source: 'char-10', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 红香
  { source: 'char-10', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 花珠
  { source: 'char-10', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 明珠
  { source: 'char-10', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 高品 — 蕊珠
  { source: 'char-11', target: 'char-2', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 颜仲清
  { source: 'char-11', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 张仲雨 — 史南湘
  { source: 'char-11', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 王恂
  { source: 'char-11', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 张仲雨 — 魏聘才
  { source: 'char-11', target: 'char-6', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 李元茂
  { source: 'char-11', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 徐子云
  { source: 'char-11', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 萧次贤
  { source: 'char-11', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 刘文泽
  { source: 'char-11', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' }, // 张仲雨 — 沈伯才
  { source: 'char-11', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' }, // 张仲雨 — 巴霖
  { source: 'char-11', target: 'char-14', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 冯子佩
  { source: 'char-11', target: 'char-15', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 张仲雨 — 田春航
  { source: 'char-11', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' }, // 张仲雨 — 孙嗣徽
  { source: 'char-11', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 袁宝珠
  { source: 'char-11', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 苏蕙芳
  { source: 'char-11', target: 'char-25', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 陆素兰
  { source: 'char-11', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 金漱芳
  { source: 'char-11', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 李玉林
  { source: 'char-11', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 王兰保
  { source: 'char-11', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 王桂保
  { source: 'char-11', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 林春喜
  { source: 'char-11', target: 'char-31', type: 'Grand Secretary Nephew & Opera Patron', typeZh: '阁学之侄与名伶追捧者' }, // 张仲雨 — 秦琪官
  { source: 'char-11', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 蓉官
  { source: 'char-11', target: 'char-33', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 春兰
  { source: 'char-11', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 保珠
  { source: 'char-11', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 张仲雨 — 林珊枝
  { source: 'char-11', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 二喜
  { source: 'char-11', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 梅士燮
  { source: 'char-11', target: 'char-48', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 张仲雨 — 王文辉
  { source: 'char-11', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 孙亮功
  { source: 'char-11', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 陆宗沅
  { source: 'char-11', target: 'char-53', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 富伦
  { source: 'char-11', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 张仲雨 — 华光宿
  { source: 'char-11', target: 'char-56', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 曹长庆
  { source: 'char-11', target: 'char-62', type: 'Nephew/Uncle', typeZh: '舅侄' }, // 张仲雨 — 吴阁学
  { source: 'char-11', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 沈司业
  { source: 'char-11', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 张仲雨 — 奚十一
  { source: 'char-11', target: 'char-73', type: 'Dining Companion', typeZh: '同席酒食' }, // 张仲雨 — 潘其观
  { source: 'char-11', target: 'char-75', type: 'Friend/Intermediary', typeZh: '交游中介' }, // 张仲雨 — 唐和尚
  { source: 'char-11', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 张仲雨 — 颜夫人
  { source: 'char-11', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 张仲雨 — 孙氏
  { source: 'char-11', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 张仲雨 — 蓉华
  { source: 'char-11', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 张仲雨 — 玉天仙
  { source: 'char-11', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 四儿
  { source: 'char-11', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 富府跟班
  { source: 'char-11', target: 'char-119', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 卢大爷
  { source: 'char-11', target: 'char-121', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 张仲雨 — 叶茂林
  { source: 'char-11', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 老三
  { source: 'char-11', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 酒楼掌柜
  { source: 'char-11', target: 'char-136', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 巴英官
  { source: 'char-11', target: 'char-137', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张仲雨 — 菊花
  { source: 'char-11', target: 'char-138', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 得月
  { source: 'char-11', target: 'char-139', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 卓天香
  { source: 'char-11', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' }, // 张仲雨 — 苏侯
  { source: 'char-11', target: 'char-143', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张仲雨 — 姬亮轩
  { source: 'char-11', target: 'char-145', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 张笑梅
  { source: 'char-11', target: 'char-146', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张仲雨 — 杨梅窗
  { source: 'char-11', target: 'char-147', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 周小三
  { source: 'char-11', target: 'char-153', type: 'Family/Household', typeZh: '家属/内眷' }, // 张仲雨 — 苏浣香
  { source: 'char-11', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 张仲雨 — 明珠
  { source: 'char-11', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张仲雨 — 黄掌柜
  { source: 'char-12', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' }, // 沈伯才 — 颜仲清
  { source: 'char-12', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 沈伯才 — 史南湘
  { source: 'char-12', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 沈伯才 — 王恂
  { source: 'char-12', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' }, // 沈伯才 — 刘文泽
  { source: 'char-12', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' }, // 沈伯才 — 巴霖
  { source: 'char-12', target: 'char-63', type: 'Father/Son', typeZh: '父子' }, // 沈伯才 — 沈司业
  { source: 'char-12', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 沈伯才 — 孙氏
  { source: 'char-13', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' }, // 巴霖 — 颜仲清
  { source: 'char-13', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 巴霖 — 史南湘
  { source: 'char-13', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 巴霖 — 王恂
  { source: 'char-13', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' }, // 巴霖 — 刘文泽
  { source: 'char-13', target: 'char-64', type: 'Father/Son', typeZh: '父子' }, // 巴霖 — 巴天宠
  { source: 'char-13', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 巴霖 — 孙氏
  { source: 'char-14', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 颜仲清
  { source: 'char-14', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 史南湘
  { source: 'char-14', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 王恂
  { source: 'char-14', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 冯子佩 — 魏聘才
  { source: 'char-14', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 李元茂
  { source: 'char-14', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 徐子云
  { source: 'char-14', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 萧次贤
  { source: 'char-14', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 刘文泽
  { source: 'char-14', target: 'char-15', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 冯子佩 — 田春航
  { source: 'char-14', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' }, // 冯子佩 — 孙嗣徽
  { source: 'char-14', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 冯子佩 — 袁宝珠
  { source: 'char-14', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 冯子佩 — 苏蕙芳
  { source: 'char-14', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 陆素兰
  { source: 'char-14', target: 'char-26', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 金漱芳
  { source: 'char-14', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 李玉林
  { source: 'char-14', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 王兰保
  { source: 'char-14', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 王桂保
  { source: 'char-14', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 林春喜
  { source: 'char-14', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 秦琪官
  { source: 'char-14', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 蓉官
  { source: 'char-14', target: 'char-42', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 林珊枝
  { source: 'char-14', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 二喜
  { source: 'char-14', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 冯子佩 — 梅士燮
  { source: 'char-14', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 冯子佩 — 王文辉
  { source: 'char-14', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 冯子佩 — 华光宿
  { source: 'char-14', target: 'char-56', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 曹长庆
  { source: 'char-14', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 冯子佩 — 吴阁学
  { source: 'char-14', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' }, // 冯子佩 — 沈司业
  { source: 'char-14', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 冯子佩 — 奚十一
  { source: 'char-14', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 冯子佩 — 潘其观
  { source: 'char-14', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 冯子佩 — 唐和尚
  { source: 'char-14', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 冯子佩 — 颜夫人
  { source: 'char-14', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 冯子佩 — 玉天仙
  { source: 'char-14', target: 'char-145', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 张笑梅
  { source: 'char-14', target: 'char-146', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 冯子佩 — 杨梅窗
  { source: 'char-14', target: 'char-163', type: 'Brothers-in-law', typeZh: '郎舅' }, // 冯子佩 — 归自荣
  { source: 'char-14', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 冯子佩 — 黄掌柜
  { source: 'char-15', target: 'char-2', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 颜仲清
  { source: 'char-15', target: 'char-3', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 史南湘
  { source: 'char-15', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 王恂
  { source: 'char-15', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 田春航 — 魏聘才
  { source: 'char-15', target: 'char-6', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 李元茂
  { source: 'char-15', target: 'char-7', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 徐子云
  { source: 'char-15', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 萧次贤
  { source: 'char-15', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 刘文泽
  { source: 'char-15', target: 'char-17', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 田春航 — 金吉甫
  { source: 'char-15', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' }, // 田春航 — 孙嗣徽
  { source: 'char-15', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 袁宝珠
  { source: 'char-15', target: 'char-24', type: 'Romantic Soulmates & Exam Laureate', typeZh: '情投意合与状元知己' }, // 田春航 — 苏蕙芳
  { source: 'char-15', target: 'char-25', type: 'Passionate Pursuit', typeZh: '热烈追求' }, // 田春航 — 陆素兰
  { source: 'char-15', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 金漱芳
  { source: 'char-15', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 李玉林
  { source: 'char-15', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 王兰保
  { source: 'char-15', target: 'char-29', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 王桂保
  { source: 'char-15', target: 'char-30', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 林春喜
  { source: 'char-15', target: 'char-31', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 秦琪官
  { source: 'char-15', target: 'char-32', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 蓉官
  { source: 'char-15', target: 'char-33', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 田春航 — 春兰
  { source: 'char-15', target: 'char-35', type: 'Tavern Encounter', typeZh: '酒楼同场' }, // 田春航 — 玉美
  { source: 'char-15', target: 'char-42', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 田春航 — 林珊枝
  { source: 'char-15', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 田春航 — 二喜
  { source: 'char-15', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 田春航 — 梅士燮
  { source: 'char-15', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 田春航 — 王文辉
  { source: 'char-15', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 田春航 — 孙亮功
  { source: 'char-15', target: 'char-53', type: 'Social Friend', typeZh: '交游朋友' }, // 田春航 — 富伦
  { source: 'char-15', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 田春航 — 华光宿
  { source: 'char-15', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 田春航 — 曹长庆
  { source: 'char-15', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 田春航 — 吴阁学
  { source: 'char-15', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 田春航 — 奚十一
  { source: 'char-15', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 田春航 — 潘其观
  { source: 'char-15', target: 'char-75', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 田春航 — 唐和尚
  { source: 'char-15', target: 'char-86', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 田春航 — 颜夫人
  { source: 'char-15', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 田春航 — 许三姐
  { source: 'char-15', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 田春航 — 玉天仙
  { source: 'char-15', target: 'char-153', type: 'Family/Household', typeZh: '家属/内眷' }, // 田春航 — 苏浣香
  { source: 'char-15', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 田春航 — 红雪
  { source: 'char-15', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 田春航 — 红香
  { source: 'char-15', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 田春航 — 花珠
  { source: 'char-15', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 田春航 — 明珠
  { source: 'char-15', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 田春航 — 蕊珠
  { source: 'char-15', target: 'char-186', type: 'Attendant/Master', typeZh: '跟班主仆' }, // 田春航 — 许老三
  { source: 'char-15', target: 'char-187', type: 'Old Retainer/Master', typeZh: '老家人主仆' }, // 田春航 — 田安
  { source: 'char-15', target: 'char-188', type: 'Mother/Son', typeZh: '母子' }, // 田春航 — 田太夫人
  { source: 'char-15', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 田春航 — 黄掌柜
  { source: 'char-15', target: 'char-197', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 田春航 — 季十矮子
  { source: 'char-17', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' }, // 金吉甫 — 颜仲清
  { source: 'char-17', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 金吉甫 — 史南湘
  { source: 'char-17', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 金吉甫 — 王恂
  { source: 'char-17', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 金吉甫 — 魏聘才
  { source: 'char-17', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 金吉甫 — 萧次贤
  { source: 'char-17', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' }, // 金吉甫 — 刘文泽
  { source: 'char-17', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 袁宝珠
  { source: 'char-17', target: 'char-24', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 苏蕙芳
  { source: 'char-17', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 陆素兰
  { source: 'char-17', target: 'char-26', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 金漱芳
  { source: 'char-17', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 李玉林
  { source: 'char-17', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 王兰保
  { source: 'char-17', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 王桂保
  { source: 'char-17', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 林春喜
  { source: 'char-17', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金吉甫 — 秦琪官
  { source: 'char-17', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 金吉甫 — 王文辉
  { source: 'char-17', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 金吉甫 — 华光宿
  { source: 'char-17', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' }, // 金吉甫 — 吴阁学
  { source: 'char-17', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 金吉甫 — 奚十一
  { source: 'char-17', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 金吉甫 — 唐和尚
  { source: 'char-17', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 金吉甫 — 颜夫人
  { source: 'char-17', target: 'char-197', type: 'Patron & Artisan', typeZh: '推荐与刻工' }, // 金吉甫 — 季十矮子
  { source: 'char-20', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' }, // 李性全 — 史南湘
  { source: 'char-20', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 李性全 — 王恂
  { source: 'char-20', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 李性全 — 魏聘才
  { source: 'char-20', target: 'char-6', type: 'Father/Son', typeZh: '父子' }, // 李性全 — 李元茂
  { source: 'char-20', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' }, // 李性全 — 萧次贤
  { source: 'char-20', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' }, // 李性全 — 孙嗣徽
  { source: 'char-20', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 袁宝珠
  { source: 'char-20', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 陆素兰
  { source: 'char-20', target: 'char-26', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 金漱芳
  { source: 'char-20', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 李玉林
  { source: 'char-20', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 王兰保
  { source: 'char-20', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 王桂保
  { source: 'char-20', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 林春喜
  { source: 'char-20', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 秦琪官
  { source: 'char-20', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李性全 — 保珠
  { source: 'char-20', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 李性全 — 梅士燮
  { source: 'char-20', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 李性全 — 王文辉
  { source: 'char-20', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' }, // 李性全 — 孙亮功
  { source: 'char-20', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 李性全 — 颜夫人
  { source: 'char-21', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 孙嗣徽 — 王恂
  { source: 'char-21', target: 'char-5', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 孙嗣徽 — 魏聘才
  { source: 'char-21', target: 'char-6', type: 'Comic Targets & Matrilocal In-Laws', typeZh: '东园笑柄与招赘姻亲' }, // 孙嗣徽 — 李元茂
  { source: 'char-21', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' }, // 孙嗣徽 — 徐子云
  { source: 'char-21', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' }, // 孙嗣徽 — 刘文泽
  { source: 'char-21', target: 'char-22', type: 'Brothers', typeZh: '同胞兄弟' }, // 孙嗣徽 — 孙嗣元
  { source: 'char-21', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 袁宝珠
  { source: 'char-21', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 陆素兰
  { source: 'char-21', target: 'char-26', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 金漱芳
  { source: 'char-21', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 李玉林
  { source: 'char-21', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 王桂保
  { source: 'char-21', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 林春喜
  { source: 'char-21', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 秦琪官
  { source: 'char-21', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 保珠
  { source: 'char-21', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 孙嗣徽 — 二喜
  { source: 'char-21', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙嗣徽 — 王文辉
  { source: 'char-21', target: 'char-49', type: 'Father/Son', typeZh: '父子' }, // 孙嗣徽 — 孙亮功
  { source: 'char-21', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙嗣徽 — 陆宗沅
  { source: 'char-21', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙嗣徽 — 华光宿
  { source: 'char-21', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙嗣徽 — 奚十一
  { source: 'char-21', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙嗣徽 — 潘其观
  { source: 'char-21', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙嗣徽 — 唐和尚
  { source: 'char-21', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙嗣徽 — 颜夫人
  { source: 'char-21', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙嗣徽 — 孙氏
  { source: 'char-21', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙嗣徽 — 孙家陆夫人
  { source: 'char-21', target: 'char-97', type: 'Marriage', typeZh: '夫妻' }, // 孙嗣徽 — 沈芸姑
  { source: 'char-22', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 孙嗣元 — 王恂
  { source: 'char-22', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙嗣元 — 魏聘才
  { source: 'char-22', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' }, // 孙嗣元 — 李元茂
  { source: 'char-22', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙嗣元 — 王文辉
  { source: 'char-22', target: 'char-49', type: 'Father/Son', typeZh: '父子' }, // 孙嗣元 — 孙亮功
  { source: 'char-22', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙嗣元 — 陆宗沅
  { source: 'char-22', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙嗣元 — 颜夫人
  { source: 'char-22', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙嗣元 — 孙家陆夫人
  { source: 'char-22', target: 'char-98', type: 'Marriage', typeZh: '夫妻' }, // 孙嗣元 — 巴来风
  { source: 'char-23', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 袁宝珠 — 史南湘
  { source: 'char-23', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 袁宝珠 — 王恂
  { source: 'char-23', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 袁宝珠 — 魏聘才
  { source: 'char-23', target: 'char-6', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 袁宝珠 — 李元茂
  { source: 'char-23', target: 'char-7', type: 'Garden of Contentment Patron & Flower Champion', typeZh: '怡园主人与花榜状元知音' }, // 袁宝珠 — 徐子云
  { source: 'char-23', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 袁宝珠 — 萧次贤
  { source: 'char-23', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 袁宝珠 — 刘文泽
  { source: 'char-23', target: 'char-24', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 苏蕙芳
  { source: 'char-23', target: 'char-25', type: 'Top Flower Rank Performers', typeZh: '花榜状元探花与画艺文友' }, // 袁宝珠 — 陆素兰
  { source: 'char-23', target: 'char-26', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 金漱芳
  { source: 'char-23', target: 'char-27', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 李玉林
  { source: 'char-23', target: 'char-28', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 王兰保
  { source: 'char-23', target: 'char-29', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 王桂保
  { source: 'char-23', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 林春喜
  { source: 'char-23', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 秦琪官
  { source: 'char-23', target: 'char-32', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 蓉官
  { source: 'char-23', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 袁宝珠 — 春兰
  { source: 'char-23', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 袁宝珠 — 玉美
  { source: 'char-23', target: 'char-38', type: 'Name Confusion', typeZh: '同名误认' }, // 袁宝珠 — 保珠
  { source: 'char-23', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁宝珠 — 袁绮香
  { source: 'char-23', target: 'char-42', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 袁宝珠 — 林珊枝
  { source: 'char-23', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 袁宝珠 — 二喜
  { source: 'char-23', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 梅士燮
  { source: 'char-23', target: 'char-48', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 袁宝珠 — 王文辉
  { source: 'char-23', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 孙亮功
  { source: 'char-23', target: 'char-51', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 周锡爵
  { source: 'char-23', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 陆宗沅
  { source: 'char-23', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 袁宝珠 — 富伦
  { source: 'char-23', target: 'char-54', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 贵芬
  { source: 'char-23', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 袁宝珠 — 华光宿
  { source: 'char-23', target: 'char-56', type: 'Troupe Master/Performer', typeZh: '班主与伶人' }, // 袁宝珠 — 曹长庆
  { source: 'char-23', target: 'char-59', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 徐震
  { source: 'char-23', target: 'char-62', type: 'Official & Performer', typeZh: '官员与伶人' }, // 袁宝珠 — 吴阁学
  { source: 'char-23', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 袁宝珠 — 奚十一
  { source: 'char-23', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 袁宝珠 — 潘其观
  { source: 'char-23', target: 'char-75', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 袁宝珠 — 唐和尚
  { source: 'char-23', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 袁宝珠 — 颜夫人
  { source: 'char-23', target: 'char-87', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁宝珠 — 王家陆夫人
  { source: 'char-23', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁宝珠 — 蓉华
  { source: 'char-23', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁宝珠 — 王琼华
  { source: 'char-23', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁宝珠 — 玉天仙
  { source: 'char-24', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 史南湘
  { source: 'char-24', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 王恂
  { source: 'char-24', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 苏蕙芳 — 魏聘才
  { source: 'char-24', target: 'char-6', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 李元茂
  { source: 'char-24', target: 'char-7', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 徐子云
  { source: 'char-24', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 萧次贤
  { source: 'char-24', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 苏蕙芳 — 刘文泽
  { source: 'char-24', target: 'char-25', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 陆素兰
  { source: 'char-24', target: 'char-26', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 金漱芳
  { source: 'char-24', target: 'char-27', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 李玉林
  { source: 'char-24', target: 'char-28', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 王兰保
  { source: 'char-24', target: 'char-29', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 王桂保
  { source: 'char-24', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 林春喜
  { source: 'char-24', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 秦琪官
  { source: 'char-24', target: 'char-32', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 蓉官
  { source: 'char-24', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 苏蕙芳 — 春兰
  { source: 'char-24', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 苏蕙芳 — 玉美
  { source: 'char-24', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏蕙芳 — 袁绮香
  { source: 'char-24', target: 'char-42', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 林珊枝
  { source: 'char-24', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 苏蕙芳 — 二喜
  { source: 'char-24', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 梅士燮
  { source: 'char-24', target: 'char-48', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 苏蕙芳 — 王文辉
  { source: 'char-24', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 孙亮功
  { source: 'char-24', target: 'char-50', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 杨方猷
  { source: 'char-24', target: 'char-51', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 周锡爵
  { source: 'char-24', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 陆宗沅
  { source: 'char-24', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 苏蕙芳 — 富伦
  { source: 'char-24', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 苏蕙芳 — 华光宿
  { source: 'char-24', target: 'char-56', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 苏蕙芳 — 曹长庆
  { source: 'char-24', target: 'char-59', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 徐震
  { source: 'char-24', target: 'char-62', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏蕙芳 — 吴阁学
  { source: 'char-24', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 苏蕙芳 — 奚十一
  { source: 'char-24', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 苏蕙芳 — 潘其观
  { source: 'char-24', target: 'char-75', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 苏蕙芳 — 唐和尚
  { source: 'char-24', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 苏蕙芳 — 颜夫人
  { source: 'char-24', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏蕙芳 — 王琼华
  { source: 'char-24', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏蕙芳 — 许三姐
  { source: 'char-24', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏蕙芳 — 玉天仙
  { source: 'char-25', target: 'char-3', type: 'Passionate Lover & Calligraphy Confidant', typeZh: '痴情金兰与书法知己' }, // 陆素兰 — 史南湘
  { source: 'char-25', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 陆素兰 — 王恂
  { source: 'char-25', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 陆素兰 — 魏聘才
  { source: 'char-25', target: 'char-6', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 陆素兰 — 李元茂
  { source: 'char-25', target: 'char-7', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 陆素兰 — 徐子云
  { source: 'char-25', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 陆素兰 — 萧次贤
  { source: 'char-25', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 陆素兰 — 刘文泽
  { source: 'char-25', target: 'char-26', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 金漱芳
  { source: 'char-25', target: 'char-27', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 李玉林
  { source: 'char-25', target: 'char-28', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 王兰保
  { source: 'char-25', target: 'char-29', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 王桂保
  { source: 'char-25', target: 'char-30', type: 'Fellow Performer', typeZh: '同台伶人' }, // 陆素兰 — 林春喜
  { source: 'char-25', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 秦琪官
  { source: 'char-25', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 陆素兰 — 蓉官
  { source: 'char-25', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 陆素兰 — 春兰
  { source: 'char-25', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 陆素兰 — 玉美
  { source: 'char-25', target: 'char-38', type: 'Fellow Performer', typeZh: '同台伶人' }, // 陆素兰 — 保珠
  { source: 'char-25', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 袁绮香
  { source: 'char-25', target: 'char-42', type: 'Fellow Performer', typeZh: '同台伶人' }, // 陆素兰 — 林珊枝
  { source: 'char-25', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 陆素兰 — 二喜
  { source: 'char-25', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 陆素兰 — 梅士燮
  { source: 'char-25', target: 'char-48', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 陆素兰 — 王文辉
  { source: 'char-25', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 陆素兰 — 孙亮功
  { source: 'char-25', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 陆素兰 — 陆宗沅
  { source: 'char-25', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 陆素兰 — 富伦
  { source: 'char-25', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 陆素兰 — 华光宿
  { source: 'char-25', target: 'char-56', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 陆素兰 — 曹长庆
  { source: 'char-25', target: 'char-59', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 徐震
  { source: 'char-25', target: 'char-62', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 吴阁学
  { source: 'char-25', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 陆素兰 — 奚十一
  { source: 'char-25', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 陆素兰 — 潘其观
  { source: 'char-25', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 陆素兰 — 唐和尚
  { source: 'char-25', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 陆素兰 — 颜夫人
  { source: 'char-25', target: 'char-87', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 王家陆夫人
  { source: 'char-25', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 蓉华
  { source: 'char-25', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 王琼华
  { source: 'char-25', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 陆素兰 — 玉天仙
  { source: 'char-26', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 金漱芳 — 史南湘
  { source: 'char-26', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 金漱芳 — 王恂
  { source: 'char-26', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 金漱芳 — 魏聘才
  { source: 'char-26', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金漱芳 — 李元茂
  { source: 'char-26', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 金漱芳 — 徐子云
  { source: 'char-26', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 金漱芳 — 萧次贤
  { source: 'char-26', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 金漱芳 — 刘文泽
  { source: 'char-26', target: 'char-27', type: 'Lianzhu Troupe Musicians', typeZh: '联珠班笛师与乐艺琴友' }, // 金漱芳 — 李玉林
  { source: 'char-26', target: 'char-28', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 金漱芳 — 王兰保
  { source: 'char-26', target: 'char-29', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 金漱芳 — 王桂保
  { source: 'char-26', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 金漱芳 — 林春喜
  { source: 'char-26', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 金漱芳 — 秦琪官
  { source: 'char-26', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 金漱芳 — 蓉官
  { source: 'char-26', target: 'char-38', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 金漱芳 — 保珠
  { source: 'char-26', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 金漱芳 — 袁绮香
  { source: 'char-26', target: 'char-42', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 金漱芳 — 林珊枝
  { source: 'char-26', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 金漱芳 — 二喜
  { source: 'char-26', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 金漱芳 — 梅士燮
  { source: 'char-26', target: 'char-48', type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' }, // 金漱芳 — 王文辉
  { source: 'char-26', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 金漱芳 — 孙亮功
  { source: 'char-26', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 金漱芳 — 陆宗沅
  { source: 'char-26', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 金漱芳 — 华光宿
  { source: 'char-26', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 金漱芳 — 曹长庆
  { source: 'char-26', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 金漱芳 — 奚十一
  { source: 'char-26', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 金漱芳 — 唐和尚
  { source: 'char-26', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 金漱芳 — 颜夫人
  { source: 'char-26', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 金漱芳 — 蓉华
  { source: 'char-26', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 金漱芳 — 王琼华
  { source: 'char-27', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 李玉林 — 史南湘
  { source: 'char-27', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 李玉林 — 王恂
  { source: 'char-27', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 李玉林 — 魏聘才
  { source: 'char-27', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李玉林 — 李元茂
  { source: 'char-27', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 李玉林 — 徐子云
  { source: 'char-27', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 李玉林 — 萧次贤
  { source: 'char-27', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 李玉林 — 刘文泽
  { source: 'char-27', target: 'char-28', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 李玉林 — 王兰保
  { source: 'char-27', target: 'char-29', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 李玉林 — 王桂保
  { source: 'char-27', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 李玉林 — 林春喜
  { source: 'char-27', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 李玉林 — 秦琪官
  { source: 'char-27', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 李玉林 — 蓉官
  { source: 'char-27', target: 'char-38', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 李玉林 — 保珠
  { source: 'char-27', target: 'char-40', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 李玉林 — 袁绮香
  { source: 'char-27', target: 'char-42', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 李玉林 — 林珊枝
  { source: 'char-27', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 李玉林 — 二喜
  { source: 'char-27', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 李玉林 — 梅士燮
  { source: 'char-27', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 李玉林 — 王文辉
  { source: 'char-27', target: 'char-49', type: 'Official & Performer', typeZh: '官员与伶人' }, // 李玉林 — 孙亮功
  { source: 'char-27', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 李玉林 — 陆宗沅
  { source: 'char-27', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 李玉林 — 华光宿
  { source: 'char-27', target: 'char-62', type: 'Official & Performer', typeZh: '官员与伶人' }, // 李玉林 — 吴阁学
  { source: 'char-27', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 李玉林 — 奚十一
  { source: 'char-27', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 李玉林 — 潘其观
  { source: 'char-27', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 李玉林 — 唐和尚
  { source: 'char-27', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 李玉林 — 颜夫人
  { source: 'char-27', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 李玉林 — 蓉华
  { source: 'char-27', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 李玉林 — 王琼华
  { source: 'char-28', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王兰保 — 史南湘
  { source: 'char-28', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王兰保 — 王恂
  { source: 'char-28', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王兰保 — 魏聘才
  { source: 'char-28', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 王兰保 — 李元茂
  { source: 'char-28', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 王兰保 — 徐子云
  { source: 'char-28', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王兰保 — 萧次贤
  { source: 'char-28', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王兰保 — 刘文泽
  { source: 'char-28', target: 'char-29', type: 'Brothers', typeZh: '同胞兄弟' }, // 王兰保 — 王桂保
  { source: 'char-28', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 王兰保 — 林春喜
  { source: 'char-28', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 王兰保 — 秦琪官
  { source: 'char-28', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 王兰保 — 春兰
  { source: 'char-28', target: 'char-42', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 王兰保 — 林珊枝
  { source: 'char-28', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 王兰保 — 王文辉
  { source: 'char-28', target: 'char-51', type: 'Official & Performer', typeZh: '官员与伶人' }, // 王兰保 — 周锡爵
  { source: 'char-28', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 王兰保 — 陆宗沅
  { source: 'char-28', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王兰保 — 华光宿
  { source: 'char-28', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 王兰保 — 曹长庆
  { source: 'char-28', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王兰保 — 奚十一
  { source: 'char-28', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王兰保 — 潘其观
  { source: 'char-28', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王兰保 — 唐和尚
  { source: 'char-28', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 王兰保 — 颜夫人
  { source: 'char-28', target: 'char-89', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 王兰保 — 蓉华
  { source: 'char-29', target: 'char-3', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王桂保 — 史南湘
  { source: 'char-29', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王桂保 — 王恂
  { source: 'char-29', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王桂保 — 魏聘才
  { source: 'char-29', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 王桂保 — 李元茂
  { source: 'char-29', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 王桂保 — 徐子云
  { source: 'char-29', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王桂保 — 萧次贤
  { source: 'char-29', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 王桂保 — 刘文泽
  { source: 'char-29', target: 'char-30', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 王桂保 — 林春喜
  { source: 'char-29', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 王桂保 — 秦琪官
  { source: 'char-29', target: 'char-42', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 王桂保 — 林珊枝
  { source: 'char-29', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 王桂保 — 梅士燮
  { source: 'char-29', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 王桂保 — 王文辉
  { source: 'char-29', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王桂保 — 华光宿
  { source: 'char-29', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 王桂保 — 奚十一
  { source: 'char-29', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王桂保 — 潘其观
  { source: 'char-29', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王桂保 — 唐和尚
  { source: 'char-29', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 王桂保 — 颜夫人
  { source: 'char-30', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 林春喜 — 王恂
  { source: 'char-30', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 林春喜 — 魏聘才
  { source: 'char-30', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林春喜 — 李元茂
  { source: 'char-30', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林春喜 — 徐子云
  { source: 'char-30', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 林春喜 — 萧次贤
  { source: 'char-30', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 林春喜 — 刘文泽
  { source: 'char-30', target: 'char-31', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 林春喜 — 秦琪官
  { source: 'char-30', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 林春喜 — 蓉官
  { source: 'char-30', target: 'char-42', type: 'Fellow Performer', typeZh: '同台伶人' }, // 林春喜 — 林珊枝
  { source: 'char-30', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 林春喜 — 梅士燮
  { source: 'char-30', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 林春喜 — 王文辉
  { source: 'char-30', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 林春喜 — 华光宿
  { source: 'char-30', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 林春喜 — 奚十一
  { source: 'char-30', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 林春喜 — 唐和尚
  { source: 'char-30', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 林春喜 — 颜夫人
  { source: 'char-31', target: 'char-4', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 秦琪官 — 王恂
  { source: 'char-31', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 秦琪官 — 魏聘才
  { source: 'char-31', target: 'char-6', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 秦琪官 — 李元茂
  { source: 'char-31', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 秦琪官 — 徐子云
  { source: 'char-31', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 秦琪官 — 萧次贤
  { source: 'char-31', target: 'char-9', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 秦琪官 — 刘文泽
  { source: 'char-31', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 蓉官
  { source: 'char-31', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 春兰
  { source: 'char-31', target: 'char-38', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 保珠
  { source: 'char-31', target: 'char-42', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 林珊枝
  { source: 'char-31', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 二喜
  { source: 'char-31', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 秦琪官 — 梅士燮
  { source: 'char-31', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 秦琪官 — 王文辉
  { source: 'char-31', target: 'char-52', type: 'Official & Performer', typeZh: '官员与伶人' }, // 秦琪官 — 陆宗沅
  { source: 'char-31', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 秦琪官 — 富伦
  { source: 'char-31', target: 'char-54', type: 'Official & Performer', typeZh: '官员与伶人' }, // 秦琪官 — 贵芬
  { source: 'char-31', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 秦琪官 — 华光宿
  { source: 'char-31', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 秦琪官 — 曹长庆
  { source: 'char-31', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 秦琪官 — 奚十一
  { source: 'char-31', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 秦琪官 — 潘其观
  { source: 'char-31', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 秦琪官 — 唐和尚
  { source: 'char-31', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 秦琪官 — 颜夫人
  { source: 'char-32', target: 'char-4', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 蓉官 — 王恂
  { source: 'char-32', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 蓉官 — 魏聘才
  { source: 'char-32', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 蓉官 — 李元茂
  { source: 'char-32', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 蓉官 — 徐子云
  { source: 'char-32', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 蓉官 — 萧次贤
  { source: 'char-32', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 春兰
  { source: 'char-32', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 玉美
  { source: 'char-32', target: 'char-36', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 四喜
  { source: 'char-32', target: 'char-42', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 林珊枝
  { source: 'char-32', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 二喜
  { source: 'char-32', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 蓉官 — 王文辉
  { source: 'char-32', target: 'char-53', type: 'Friend/Patron Circle', typeZh: '友朋与 patron 圈' }, // 蓉官 — 富伦
  { source: 'char-32', target: 'char-54', type: 'Official & Performer', typeZh: '官员与伶人' }, // 蓉官 — 贵芬
  { source: 'char-32', target: 'char-55', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 蓉官 — 华光宿
  { source: 'char-32', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 蓉官 — 曹长庆
  { source: 'char-32', target: 'char-59', type: 'Official & Performer', typeZh: '官员与伶人' }, // 蓉官 — 徐震
  { source: 'char-32', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 蓉官 — 奚十一
  { source: 'char-32', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 蓉官 — 潘其观
  { source: 'char-32', target: 'char-74', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 蓉官 — 老王
  { source: 'char-32', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 蓉官 — 唐和尚
  { source: 'char-32', target: 'char-79', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 蓉官 — 青姨奶奶
  { source: 'char-32', target: 'char-80', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 蓉官 — 白姨奶奶
  { source: 'char-32', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 蓉官 — 颜夫人
  { source: 'char-32', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 蓉官 — 玉天仙
  { source: 'char-33', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 春兰 — 魏聘才
  { source: 'char-33', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 春兰 — 二喜
  { source: 'char-33', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 春兰 — 华光宿
  { source: 'char-33', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 春兰 — 曹长庆
  { source: 'char-33', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 春兰 — 奚十一
  { source: 'char-33', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 春兰 — 潘其观
  { source: 'char-33', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 春兰 — 唐和尚
  { source: 'char-34', target: 'char-53', type: 'Sponsored Performer', typeZh: '出师资助' }, // 小福 — 富伦
  { source: 'char-35', target: 'char-4', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 玉美 — 王恂
  { source: 'char-35', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 玉美 — 魏聘才
  { source: 'char-35', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 玉美 — 李元茂
  { source: 'char-35', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 玉美 — 徐子云
  { source: 'char-35', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 玉美 — 萧次贤
  { source: 'char-35', target: 'char-36', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 玉美 — 四喜
  { source: 'char-38', target: 'char-4', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 保珠 — 王恂
  { source: 'char-38', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 保珠 — 魏聘才
  { source: 'char-38', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 保珠 — 李元茂
  { source: 'char-38', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 保珠 — 萧次贤
  { source: 'char-38', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 保珠 — 刘文泽
  { source: 'char-38', target: 'char-42', type: 'Fellow Performer', typeZh: '同台伶人' }, // 保珠 — 林珊枝
  { source: 'char-38', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 保珠 — 二喜
  { source: 'char-38', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 保珠 — 梅士燮
  { source: 'char-38', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 保珠 — 华光宿
  { source: 'char-38', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 保珠 — 颜夫人
  { source: 'char-40', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 袁绮香 — 魏聘才
  { source: 'char-40', target: 'char-7', type: 'Marriage', typeZh: '夫妻' }, // 袁绮香 — 徐子云
  { source: 'char-40', target: 'char-8', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 萧次贤
  { source: 'char-40', target: 'char-9', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 刘文泽
  { source: 'char-40', target: 'char-47', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 梅士燮
  { source: 'char-40', target: 'char-48', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 王文辉
  { source: 'char-40', target: 'char-52', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 陆宗沅
  { source: 'char-40', target: 'char-55', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 袁绮香 — 华光宿
  { source: 'char-40', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 袁绮香 — 奚十一
  { source: 'char-40', target: 'char-86', type: 'Female Companion', typeZh: '闺阁女伴' }, // 袁绮香 — 颜夫人
  { source: 'char-40', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 孙氏
  { source: 'char-40', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 袁绮香 — 蓉华
  { source: 'char-40', target: 'char-90', type: "Women's Gathering Host/Guest", typeZh: '闺阁酒令主客' }, // 袁绮香 — 王琼华
  { source: 'char-42', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 林珊枝 — 魏聘才
  { source: 'char-42', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林珊枝 — 李元茂
  { source: 'char-42', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林珊枝 — 徐子云
  { source: 'char-42', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 林珊枝 — 萧次贤
  { source: 'char-42', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林珊枝 — 刘文泽
  { source: 'char-42', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 林珊枝 — 二喜
  { source: 'char-42', target: 'char-47', type: 'Official & Performer', typeZh: '官员与伶人' }, // 林珊枝 — 梅士燮
  { source: 'char-42', target: 'char-48', type: 'Official & Performer', typeZh: '官员与伶人' }, // 林珊枝 — 王文辉
  { source: 'char-42', target: 'char-53', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 林珊枝 — 富伦
  { source: 'char-42', target: 'char-55', type: 'Companion', typeZh: '私人伴侣' }, // 林珊枝 — 华光宿
  { source: 'char-42', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 林珊枝 — 曹长庆
  { source: 'char-42', target: 'char-62', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 林珊枝 — 吴阁学
  { source: 'char-42', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 林珊枝 — 奚十一
  { source: 'char-42', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 林珊枝 — 潘其观
  { source: 'char-42', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 林珊枝 — 唐和尚
  { source: 'char-42', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 林珊枝 — 颜夫人
  { source: 'char-42', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 林珊枝 — 玉天仙
  { source: 'char-43', target: 'char-49', type: 'Imitated Performer', typeZh: '被模仿之角' }, // 谭八 — 孙亮功
  { source: 'char-44', target: 'char-53', type: 'Brought by Patron', typeZh: '携带引见' }, // 小顺儿 — 富伦
  { source: 'char-44', target: 'char-55', type: 'Rejected by Patron', typeZh: '遭权门拒绝' }, // 小顺儿 — 华光宿
  { source: 'char-45', target: 'char-5', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 二喜 — 魏聘才
  { source: 'char-45', target: 'char-6', type: 'Attached Performer/Patron', typeZh: '缠附与 patron' }, // 二喜 — 李元茂
  { source: 'char-45', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 二喜 — 徐子云
  { source: 'char-45', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 二喜 — 萧次贤
  { source: 'char-45', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 二喜 — 刘文泽
  { source: 'char-45', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 二喜 — 华光宿
  { source: 'char-45', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 二喜 — 奚十一
  { source: 'char-45', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 二喜 — 孙氏
  { source: 'char-47', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 梅士燮 — 魏聘才
  { source: 'char-47', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅士燮 — 李元茂
  { source: 'char-47', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅士燮 — 萧次贤
  { source: 'char-47', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 梅士燮 — 刘文泽
  { source: 'char-47', target: 'char-48', type: 'Official Colleague', typeZh: '同朝为官' }, // 梅士燮 — 王文辉
  { source: 'char-47', target: 'char-49', type: 'Official Colleague', typeZh: '同朝为官' }, // 梅士燮 — 孙亮功
  { source: 'char-47', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' }, // 梅士燮 — 陆宗沅
  { source: 'char-47', target: 'char-55', type: 'Official & Noble', typeZh: '官员与侯门' }, // 梅士燮 — 华光宿
  { source: 'char-47', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅士燮 — 曹长庆
  { source: 'char-47', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 梅士燮 — 奚十一
  { source: 'char-47', target: 'char-86', type: 'Marriage', typeZh: '夫妻' }, // 梅士燮 — 颜夫人
  { source: 'char-47', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅士燮 — 蓉华
  { source: 'char-47', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 梅士燮 — 王琼华
  { source: 'char-48', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王文辉 — 魏聘才
  { source: 'char-48', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王文辉 — 李元茂
  { source: 'char-48', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 王文辉 — 徐子云
  { source: 'char-48', target: 'char-8', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 王文辉 — 萧次贤
  { source: 'char-48', target: 'char-9', type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' }, // 王文辉 — 刘文泽
  { source: 'char-48', target: 'char-49', type: 'Official Colleague', typeZh: '同朝为官' }, // 王文辉 — 孙亮功
  { source: 'char-48', target: 'char-50', type: 'Banquet Guest', typeZh: '宴会宾客' }, // 王文辉 — 杨方猷
  { source: 'char-48', target: 'char-51', type: 'Banquet Guest', typeZh: '宴会宾客' }, // 王文辉 — 周锡爵
  { source: 'char-48', target: 'char-52', type: 'Banquet Guest', typeZh: '宴会宾客' }, // 王文辉 — 陆宗沅
  { source: 'char-48', target: 'char-53', type: 'Official Colleague', typeZh: '同朝为官' }, // 王文辉 — 富伦
  { source: 'char-48', target: 'char-55', type: 'Official & Noble', typeZh: '官员与侯门' }, // 王文辉 — 华光宿
  { source: 'char-48', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 王文辉 — 曹长庆
  { source: 'char-48', target: 'char-61', type: 'Official Colleague', typeZh: '同朝为官' }, // 王文辉 — 刘侍郎
  { source: 'char-48', target: 'char-62', type: 'Official Colleague', typeZh: '同朝为官' }, // 王文辉 — 吴阁学
  { source: 'char-48', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王文辉 — 奚十一
  { source: 'char-48', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王文辉 — 潘其观
  { source: 'char-48', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 王文辉 — 唐和尚
  { source: 'char-48', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 王文辉 — 颜夫人
  { source: 'char-48', target: 'char-87', type: 'Marriage', typeZh: '夫妻' }, // 王文辉 — 王家陆夫人
  { source: 'char-48', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' }, // 王文辉 — 孙氏
  { source: 'char-48', target: 'char-89', type: 'Father/Daughter', typeZh: '父女' }, // 王文辉 — 蓉华
  { source: 'char-48', target: 'char-90', type: 'Father/Daughter', typeZh: '父女' }, // 王文辉 — 王琼华
  { source: 'char-48', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 王文辉 — 孙家陆夫人
  { source: 'char-49', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙亮功 — 魏聘才
  { source: 'char-49', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙亮功 — 李元茂
  { source: 'char-49', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙亮功 — 徐子云
  { source: 'char-49', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 孙亮功 — 刘文泽
  { source: 'char-49', target: 'char-50', type: 'Official Colleague', typeZh: '同朝为官' }, // 孙亮功 — 杨方猷
  { source: 'char-49', target: 'char-51', type: 'Official Colleague', typeZh: '同朝为官' }, // 孙亮功 — 周锡爵
  { source: 'char-49', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' }, // 孙亮功 — 陆宗沅
  { source: 'char-49', target: 'char-62', type: 'Official Colleague', typeZh: '同朝为官' }, // 孙亮功 — 吴阁学
  { source: 'char-49', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 孙亮功 — 奚十一
  { source: 'char-49', target: 'char-85', type: 'Physician/Patient', typeZh: '医患' }, // 孙亮功 — 王大夫
  { source: 'char-49', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙亮功 — 颜夫人
  { source: 'char-49', target: 'char-88', type: 'Father/Daughter', typeZh: '父女' }, // 孙亮功 — 孙氏
  { source: 'char-49', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙亮功 — 蓉华
  { source: 'char-49', target: 'char-96', type: 'Marriage', typeZh: '夫妻' }, // 孙亮功 — 孙家陆夫人
  { source: 'char-49', target: 'char-99', type: 'Father/Daughter', typeZh: '父女' }, // 孙亮功 — 孙大姑娘
  { source: 'char-50', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 杨方猷 — 徐子云
  { source: 'char-50', target: 'char-51', type: 'Official Colleague', typeZh: '同朝为官' }, // 杨方猷 — 周锡爵
  { source: 'char-50', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' }, // 杨方猷 — 陆宗沅
  { source: 'char-51', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 周锡爵 — 徐子云
  { source: 'char-51', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 周锡爵 — 萧次贤
  { source: 'char-51', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 周锡爵 — 刘文泽
  { source: 'char-51', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' }, // 周锡爵 — 陆宗沅
  { source: 'char-52', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 陆宗沅 — 李元茂
  { source: 'char-52', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 陆宗沅 — 徐子云
  { source: 'char-52', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 陆宗沅 — 萧次贤
  { source: 'char-52', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 陆宗沅 — 刘文泽
  { source: 'char-52', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 陆宗沅 — 华光宿
  { source: 'char-52', target: 'char-61', type: 'Official Colleague', typeZh: '同朝为官' }, // 陆宗沅 — 刘侍郎
  { source: 'char-52', target: 'char-62', type: 'Official Colleague', typeZh: '同朝为官' }, // 陆宗沅 — 吴阁学
  { source: 'char-52', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 陆宗沅 — 奚十一
  { source: 'char-52', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 陆宗沅 — 颜夫人
  { source: 'char-52', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' }, // 陆宗沅 — 王家陆夫人
  { source: 'char-52', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 陆宗沅 — 蓉华
  { source: 'char-52', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' }, // 陆宗沅 — 王琼华
  { source: 'char-52', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' }, // 陆宗沅 — 孙家陆夫人
  { source: 'char-53', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 富伦 — 李元茂
  { source: 'char-53', target: 'char-8', type: 'Social Friend', typeZh: '交游朋友' }, // 富伦 — 萧次贤
  { source: 'char-53', target: 'char-54', type: 'Friend', typeZh: '好友' }, // 富伦 — 贵芬
  { source: 'char-53', target: 'char-55', type: 'Social Friend', typeZh: '交游朋友' }, // 富伦 — 华光宿
  { source: 'char-53', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 富伦 — 曹长庆
  { source: 'char-53', target: 'char-72', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 富伦 — 奚十一
  { source: 'char-53', target: 'char-73', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 富伦 — 潘其观
  { source: 'char-53', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 富伦 — 唐和尚
  { source: 'char-53', target: 'char-79', type: 'Concubine', typeZh: '姨太太' }, // 富伦 — 青姨奶奶
  { source: 'char-53', target: 'char-80', type: 'Concubine', typeZh: '姨太太' }, // 富伦 — 白姨奶奶
  { source: 'char-53', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 富伦 — 颜夫人
  { source: 'char-53', target: 'char-95', type: 'Family/Household', typeZh: '家属/内眷' }, // 富伦 — 玉天仙
  { source: 'char-54', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 贵芬 — 李元茂
  { source: 'char-54', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 贵芬 — 萧次贤
  { source: 'char-54', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 贵芬 — 华光宿
  { source: 'char-54', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 贵芬 — 奚十一
  { source: 'char-54', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 贵芬 — 潘其观
  { source: 'char-54', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 贵芬 — 颜夫人
  { source: 'char-55', target: 'char-6', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 华光宿 — 李元茂
  { source: 'char-55', target: 'char-7', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 华光宿 — 徐子云
  { source: 'char-55', target: 'char-8', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 华光宿 — 萧次贤
  { source: 'char-55', target: 'char-9', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 华光宿 — 刘文泽
  { source: 'char-55', target: 'char-56', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 华光宿 — 曹长庆
  { source: 'char-55', target: 'char-59', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 徐震
  { source: 'char-55', target: 'char-62', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 吴阁学
  { source: 'char-55', target: 'char-72', type: 'Dissolute Noble & Depraved Merchant Allies', typeZh: '纨绔侯门与广东富商恶少' }, // 华光宿 — 奚十一
  { source: 'char-55', target: 'char-73', type: 'Villainous Associate', typeZh: '狐朋狗友' }, // 华光宿 — 潘其观
  { source: 'char-55', target: 'char-75', type: 'Villainous Associate', typeZh: '狐朋狗友' }, // 华光宿 — 唐和尚
  { source: 'char-55', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 华光宿 — 颜夫人
  { source: 'char-55', target: 'char-89', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 蓉华
  { source: 'char-55', target: 'char-90', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 王琼华
  { source: 'char-55', target: 'char-94', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 许三姐
  { source: 'char-55', target: 'char-95', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 华光宿 — 玉天仙
  { source: 'char-56', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 曹长庆 — 李元茂
  { source: 'char-56', target: 'char-7', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 曹长庆 — 徐子云
  { source: 'char-56', target: 'char-8', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 曹长庆 — 萧次贤
  { source: 'char-56', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 曹长庆 — 刘文泽
  { source: 'char-56', target: 'char-72', type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' }, // 曹长庆 — 奚十一
  { source: 'char-56', target: 'char-73', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 曹长庆 — 潘其观
  { source: 'char-56', target: 'char-86', type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' }, // 曹长庆 — 颜夫人
  { source: 'char-58', target: 'char-7', type: 'Son-in-law/Father-in-law', typeZh: '翁婿' }, // 袁浩 — 徐子云
  { source: 'char-59', target: 'char-6', type: 'Official & Scholar', typeZh: '官员与名士' }, // 徐震 — 李元茂
  { source: 'char-59', target: 'char-7', type: 'Father/Son', typeZh: '父子' }, // 徐震 — 徐子云
  { source: 'char-59', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 徐震 — 萧次贤
  { source: 'char-59', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 徐震 — 奚十一
  { source: 'char-60', target: 'char-7', type: 'Brothers', typeZh: '兄弟' }, // 徐子容 — 徐子云
  { source: 'char-61', target: 'char-9', type: 'Father/Son', typeZh: '父子' }, // 刘侍郎 — 刘文泽
  { source: 'char-61', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 刘侍郎 — 奚十一
  { source: 'char-61', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘侍郎 — 颜夫人
  { source: 'char-62', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 吴阁学 — 萧次贤
  { source: 'char-62', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 吴阁学 — 刘文泽
  { source: 'char-62', target: 'char-63', type: 'Official Colleague', typeZh: '同朝为官' }, // 吴阁学 — 沈司业
  { source: 'char-62', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 吴阁学 — 奚十一
  { source: 'char-62', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 吴阁学 — 颜夫人
  { source: 'char-63', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 沈司业 — 刘文泽
  { source: 'char-64', target: 'char-98', type: 'Father/Daughter', typeZh: '父女' }, // 巴天宠 — 巴来风
  { source: 'char-65', target: 'char-87', type: 'Brother/Sister', typeZh: '兄妹' }, // 陆宗淮 — 王家陆夫人
  { source: 'char-65', target: 'char-96', type: 'Brother/Sister', typeZh: '兄妹' }, // 陆宗淮 — 孙家陆夫人
  { source: 'char-72', target: 'char-8', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 奚十一 — 萧次贤
  { source: 'char-72', target: 'char-9', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 奚十一 — 刘文泽
  { source: 'char-72', target: 'char-73', type: 'Villainous Associate', typeZh: '狐朋狗友' }, // 奚十一 — 潘其观
  { source: 'char-72', target: 'char-74', type: 'Driven Out By', typeZh: '被其手下驱逐' }, // 奚十一 — 老王
  { source: 'char-72', target: 'char-75', type: 'Dissolute Monk & Opium Den Partners', typeZh: '宏济寺酒肉和尚与烟赌同伙' }, // 奚十一 — 唐和尚
  { source: 'char-72', target: 'char-81', type: 'Oppressor', typeZh: '残害' }, // 奚十一 — 阿呆
  { source: 'char-72', target: 'char-86', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 奚十一 — 颜夫人
  { source: 'char-72', target: 'char-90', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 奚十一 — 王琼华
  { source: 'char-72', target: 'char-94', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 奚十一 — 许三姐
  { source: 'char-72', target: 'char-95', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 奚十一 — 玉天仙
  { source: 'char-73', target: 'char-8', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 潘其观 — 萧次贤
  { source: 'char-73', target: 'char-9', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 潘其观 — 刘文泽
  { source: 'char-73', target: 'char-75', type: 'Villainous Associate', typeZh: '狐朋狗友' }, // 潘其观 — 唐和尚
  { source: 'char-73', target: 'char-86', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 潘其观 — 颜夫人
  { source: 'char-75', target: 'char-8', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 唐和尚 — 萧次贤
  { source: 'char-75', target: 'char-9', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 唐和尚 — 刘文泽
  { source: 'char-75', target: 'char-86', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 唐和尚 — 颜夫人
  { source: 'char-75', target: 'char-95', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 唐和尚 — 玉天仙
  { source: 'char-79', target: 'char-80', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 青姨奶奶 — 白姨奶奶
  { source: 'char-86', target: 'char-9', type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' }, // 颜夫人 — 刘文泽
  { source: 'char-86', target: 'char-87', type: 'Female Companion', typeZh: '闺阁女伴' }, // 颜夫人 — 王家陆夫人
  { source: 'char-86', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' }, // 颜夫人 — 孙氏
  { source: 'char-86', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 颜夫人 — 蓉华
  { source: 'char-86', target: 'char-90', type: 'Female Companion', typeZh: '闺阁女伴' }, // 颜夫人 — 王琼华
  { source: 'char-86', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' }, // 颜夫人 — 孙家陆夫人
  { source: 'char-87', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' }, // 王家陆夫人 — 孙氏
  { source: 'char-87', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 王家陆夫人 — 蓉华
  { source: 'char-87', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' }, // 王家陆夫人 — 孙家陆夫人
  { source: 'char-88', target: 'char-9', type: 'Family/Household', typeZh: '家属/内眷' }, // 孙氏 — 刘文泽
  { source: 'char-88', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 孙氏 — 蓉华
  { source: 'char-88', target: 'char-94', type: 'Female Companion', typeZh: '闺阁女伴' }, // 孙氏 — 许三姐
  { source: 'char-88', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' }, // 孙氏 — 孙家陆夫人
  { source: 'char-89', target: 'char-9', type: 'Family/Household', typeZh: '家属/内眷' }, // 蓉华 — 刘文泽
  { source: 'char-89', target: 'char-90', type: 'Female Companion', typeZh: '闺阁女伴' }, // 蓉华 — 王琼华
  { source: 'char-89', target: 'char-94', type: 'Female Companion', typeZh: '闺阁女伴' }, // 蓉华 — 许三姐
  { source: 'char-89', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' }, // 蓉华 — 孙家陆夫人
  { source: 'char-101', target: 'char-73', type: 'Marriage', typeZh: '夫妻' }, // 石氏 — 潘其观
  { source: 'char-102', target: 'char-2', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 云儿 — 颜仲清
  { source: 'char-102', target: 'char-3', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 史南湘
  { source: 'char-102', target: 'char-4', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 云儿 — 王恂
  { source: 'char-102', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 魏聘才
  { source: 'char-102', target: 'char-6', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 云儿 — 李元茂
  { source: 'char-102', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 徐子云
  { source: 'char-102', target: 'char-8', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 云儿 — 萧次贤
  { source: 'char-102', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 刘文泽
  { source: 'char-102', target: 'char-11', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 张仲雨
  { source: 'char-102', target: 'char-14', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 冯子佩
  { source: 'char-102', target: 'char-15', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 田春航
  { source: 'char-102', target: 'char-17', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 金吉甫
  { source: 'char-102', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 李性全
  { source: 'char-102', target: 'char-21', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 孙嗣徽
  { source: 'char-102', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 袁宝珠
  { source: 'char-102', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 苏蕙芳
  { source: 'char-102', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 陆素兰
  { source: 'char-102', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 金漱芳
  { source: 'char-102', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 李玉林
  { source: 'char-102', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 王兰保
  { source: 'char-102', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 王桂保
  { source: 'char-102', target: 'char-30', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 林春喜
  { source: 'char-102', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 秦琪官
  { source: 'char-102', target: 'char-32', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 蓉官
  { source: 'char-102', target: 'char-38', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 保珠
  { source: 'char-102', target: 'char-40', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 袁绮香
  { source: 'char-102', target: 'char-42', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 林珊枝
  { source: 'char-102', target: 'char-45', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 二喜
  { source: 'char-102', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 云儿 — 梅士燮
  { source: 'char-102', target: 'char-48', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 云儿 — 王文辉
  { source: 'char-102', target: 'char-49', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 云儿 — 孙亮功
  { source: 'char-102', target: 'char-52', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 云儿 — 陆宗沅
  { source: 'char-102', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 华光宿
  { source: 'char-102', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 云儿 — 曹长庆
  { source: 'char-102', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 奚十一
  { source: 'char-102', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 潘其观
  { source: 'char-102', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 唐和尚
  { source: 'char-102', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 颜夫人
  { source: 'char-102', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 蓉华
  { source: 'char-102', target: 'char-90', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 王琼华
  { source: 'char-102', target: 'char-103', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 俊儿
  { source: 'char-102', target: 'char-104', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 许顺
  { source: 'char-102', target: 'char-106', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 梅进
  { source: 'char-102', target: 'char-112', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 四儿
  { source: 'char-102', target: 'char-119', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 卢大爷
  { source: 'char-102', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 叶茂林
  { source: 'char-102', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 老三
  { source: 'char-102', target: 'char-135', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 侯石翁
  { source: 'char-102', target: 'char-141', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 云儿 — 屈道翁
  { source: 'char-102', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 云儿 — 明珠
  { source: 'char-103', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 俊儿 — 颜仲清
  { source: 'char-103', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 俊儿 — 王恂
  { source: 'char-103', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 俊儿 — 李性全
  { source: 'char-103', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 俊儿 — 袁宝珠
  { source: 'char-103', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 俊儿 — 王桂保
  { source: 'char-104', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 颜仲清
  { source: 'char-104', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 王恂
  { source: 'char-104', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 魏聘才
  { source: 'char-104', target: 'char-6', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 李元茂
  { source: 'char-104', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 许顺 — 陆素兰
  { source: 'char-104', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 许顺 — 王兰保
  { source: 'char-104', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 许顺 — 秦琪官
  { source: 'char-104', target: 'char-42', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 许顺 — 林珊枝
  { source: 'char-104', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 许顺 — 王文辉
  { source: 'char-104', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 华光宿
  { source: 'char-104', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 许顺 — 曹长庆
  { source: 'char-104', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 潘其观
  { source: 'char-104', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 许顺 — 颜夫人
  { source: 'char-104', target: 'char-105', type: 'Marriage', typeZh: '夫妻' }, // 许顺 — 许顺妻
  { source: 'char-104', target: 'char-112', type: 'Household Staff', typeZh: '同府仆从' }, // 许顺 — 四儿
  { source: 'char-104', target: 'char-119', type: 'Household Staff', typeZh: '同府仆从' }, // 许顺 — 卢大爷
  { source: 'char-104', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' }, // 许顺 — 叶茂林
  { source: 'char-104', target: 'char-122', type: 'Household Staff', typeZh: '同府仆从' }, // 许顺 — 金二
  { source: 'char-104', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 许顺 — 老三
  { source: 'char-106', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 颜仲清
  { source: 'char-106', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 王恂
  { source: 'char-106', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 魏聘才
  { source: 'char-106', target: 'char-6', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 李元茂
  { source: 'char-106', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 萧次贤
  { source: 'char-106', target: 'char-11', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 张仲雨
  { source: 'char-106', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 李性全
  { source: 'char-106', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 梅进 — 袁宝珠
  { source: 'char-106', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 梅进 — 苏蕙芳
  { source: 'char-106', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 梅进 — 陆素兰
  { source: 'char-106', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 梅进 — 金漱芳
  { source: 'char-106', target: 'char-47', type: 'Gate Attendant/Master', typeZh: '门房主仆' }, // 梅进 — 梅士燮
  { source: 'char-106', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅进 — 王文辉
  { source: 'char-106', target: 'char-49', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅进 — 孙亮功
  { source: 'char-106', target: 'char-52', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 梅进 — 陆宗沅
  { source: 'char-106', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅进 — 颜夫人
  { source: 'char-106', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' }, // 梅进 — 叶茂林
  { source: 'char-109', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 王恂
  { source: 'char-109', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 魏聘才
  { source: 'char-109', target: 'char-6', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 李元茂
  { source: 'char-109', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 李性全
  { source: 'char-109', target: 'char-47', type: 'Doorkeeper/Master', typeZh: '门上传帖' }, // 梅府传帖仆妇 — 梅士燮
  { source: 'char-109', target: 'char-48', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 王文辉
  { source: 'char-109', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 颜夫人
  { source: 'char-109', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 孙氏
  { source: 'char-109', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 蓉华
  { source: 'char-109', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府传帖仆妇 — 苏浣香
  { source: 'char-109', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 梅府传帖仆妇 — 明珠
  { source: 'char-110', target: 'char-86', type: 'Household Servant', typeZh: '内宅使唤' }, // 梅府取衣媳妇 — 颜夫人
  { source: 'char-110', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府取衣媳妇 — 蓉华
  { source: 'char-110', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府取衣媳妇 — 苏浣香
  { source: 'char-110', target: 'char-154', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 梅府取衣媳妇 — 浣兰
  { source: 'char-110', target: 'char-155', type: 'Household Staff', typeZh: '同府仆从' }, // 梅府取衣媳妇 — 红雪
  { source: 'char-110', target: 'char-156', type: 'Household Staff', typeZh: '同府仆从' }, // 梅府取衣媳妇 — 红香
  { source: 'char-111', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 子玉书房小丫鬟 — 林珊枝
  { source: 'char-111', target: 'char-90', type: 'Maid/Young Lady', typeZh: '闺阁侍女' }, // 子玉书房小丫鬟 — 王琼华
  { source: 'char-111', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 子玉书房小丫鬟 — 苏浣香
  { source: 'char-111', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' }, // 子玉书房小丫鬟 — 花珠
  { source: 'char-111', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' }, // 子玉书房小丫鬟 — 画珠
  { source: 'char-111', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 子玉书房小丫鬟 — 明珠
  { source: 'char-112', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 颜仲清
  { source: 'char-112', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 王恂
  { source: 'char-112', target: 'char-5', type: 'Master/Servant', typeZh: '主仆' }, // 四儿 — 魏聘才
  { source: 'char-112', target: 'char-6', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 四儿 — 李元茂
  { source: 'char-112', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 徐子云
  { source: 'char-112', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 萧次贤
  { source: 'char-112', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 刘文泽
  { source: 'char-112', target: 'char-14', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 冯子佩
  { source: 'char-112', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 李性全
  { source: 'char-112', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 袁宝珠
  { source: 'char-112', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 苏蕙芳
  { source: 'char-112', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 陆素兰
  { source: 'char-112', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 金漱芳
  { source: 'char-112', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 李玉林
  { source: 'char-112', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 王兰保
  { source: 'char-112', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 秦琪官
  { source: 'char-112', target: 'char-32', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 蓉官
  { source: 'char-112', target: 'char-38', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 保珠
  { source: 'char-112', target: 'char-42', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 林珊枝
  { source: 'char-112', target: 'char-45', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 二喜
  { source: 'char-112', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 四儿 — 梅士燮
  { source: 'char-112', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 四儿 — 王文辉
  { source: 'char-112', target: 'char-53', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 四儿 — 富伦
  { source: 'char-112', target: 'char-54', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 四儿 — 贵芬
  { source: 'char-112', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 华光宿
  { source: 'char-112', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 曹长庆
  { source: 'char-112', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 奚十一
  { source: 'char-112', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 潘其观
  { source: 'char-112', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 唐和尚
  { source: 'char-112', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 颜夫人
  { source: 'char-112', target: 'char-118', type: 'Household Staff', typeZh: '同府仆从' }, // 四儿 — 富府跟班
  { source: 'char-112', target: 'char-119', type: 'Household Staff', typeZh: '同府仆从' }, // 四儿 — 卢大爷
  { source: 'char-112', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' }, // 四儿 — 叶茂林
  { source: 'char-112', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 四儿 — 老三
  { source: 'char-112', target: 'char-139', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 卓天香
  { source: 'char-112', target: 'char-146', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 四儿 — 杨梅窗
  { source: 'char-112', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 四儿 — 苏浣香
  { source: 'char-113', target: 'char-2', type: 'Master/Servant', typeZh: '主仆' }, // 健儿 — 颜仲清
  { source: 'char-114', target: 'char-90', type: 'Master/Servant', typeZh: '主仆' }, // 雪儿 — 王琼华
  { source: 'char-115', target: 'char-21', type: 'Concubine', typeZh: '收为妾' }, // 松儿 — 孙嗣徽
  { source: 'char-116', target: 'char-98', type: 'Bridal Escort', typeZh: '送亲陪伴' }, // 巴府送亲婆 — 巴来风
  { source: 'char-117', target: 'char-98', type: 'Nanny/Young Lady', typeZh: '乳母与小姐' }, // 巴来风乳母 — 巴来风
  { source: 'char-118', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 颜仲清
  { source: 'char-118', target: 'char-3', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 史南湘
  { source: 'char-118', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 王恂
  { source: 'char-118', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 魏聘才
  { source: 'char-118', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 萧次贤
  { source: 'char-118', target: 'char-14', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 冯子佩
  { source: 'char-118', target: 'char-15', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 田春航
  { source: 'char-118', target: 'char-17', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 金吉甫
  { source: 'char-118', target: 'char-23', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 袁宝珠
  { source: 'char-118', target: 'char-24', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 苏蕙芳
  { source: 'char-118', target: 'char-27', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 李玉林
  { source: 'char-118', target: 'char-28', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 王兰保
  { source: 'char-118', target: 'char-32', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 蓉官
  { source: 'char-118', target: 'char-33', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 春兰
  { source: 'char-118', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 林珊枝
  { source: 'char-118', target: 'char-48', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 王文辉
  { source: 'char-118', target: 'char-50', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 杨方猷
  { source: 'char-118', target: 'char-53', type: 'Attendant/Master', typeZh: '跟班主仆' }, // 富府跟班 — 富伦
  { source: 'char-118', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 奚十一
  { source: 'char-118', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 潘其观
  { source: 'char-118', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 唐和尚
  { source: 'char-118', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 富府跟班 — 老三
  { source: 'char-118', target: 'char-136', type: 'Household Staff', typeZh: '同府仆从' }, // 富府跟班 — 巴英官
  { source: 'char-118', target: 'char-137', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 富府跟班 — 菊花
  { source: 'char-118', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 富府跟班 — 明珠
  { source: 'char-119', target: 'char-2', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 卢大爷 — 颜仲清
  { source: 'char-119', target: 'char-3', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 史南湘
  { source: 'char-119', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 王恂
  { source: 'char-119', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 魏聘才
  { source: 'char-119', target: 'char-6', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 李元茂
  { source: 'char-119', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 徐子云
  { source: 'char-119', target: 'char-8', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 卢大爷 — 萧次贤
  { source: 'char-119', target: 'char-9', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 卢大爷 — 刘文泽
  { source: 'char-119', target: 'char-15', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 卢大爷 — 田春航
  { source: 'char-119', target: 'char-17', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 金吉甫
  { source: 'char-119', target: 'char-23', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 卢大爷 — 袁宝珠
  { source: 'char-119', target: 'char-24', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 卢大爷 — 苏蕙芳
  { source: 'char-119', target: 'char-25', type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' }, // 卢大爷 — 陆素兰
  { source: 'char-119', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 金漱芳
  { source: 'char-119', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 李玉林
  { source: 'char-119', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 王兰保
  { source: 'char-119', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 王桂保
  { source: 'char-119', target: 'char-30', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 林春喜
  { source: 'char-119', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 秦琪官
  { source: 'char-119', target: 'char-32', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 蓉官
  { source: 'char-119', target: 'char-33', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 春兰
  { source: 'char-119', target: 'char-42', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 林珊枝
  { source: 'char-119', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 梅士燮
  { source: 'char-119', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 王文辉
  { source: 'char-119', target: 'char-53', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 富伦
  { source: 'char-119', target: 'char-54', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 贵芬
  { source: 'char-119', target: 'char-55', type: 'Stable Manager/Master', typeZh: '马房总管主仆' }, // 卢大爷 — 华光宿
  { source: 'char-119', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 曹长庆
  { source: 'char-119', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 奚十一
  { source: 'char-119', target: 'char-73', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 潘其观
  { source: 'char-119', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 唐和尚
  { source: 'char-119', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 颜夫人
  { source: 'char-119', target: 'char-94', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 许三姐
  { source: 'char-119', target: 'char-95', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 玉天仙
  { source: 'char-119', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' }, // 卢大爷 — 叶茂林
  { source: 'char-119', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 卢大爷 — 老三
  { source: 'char-119', target: 'char-134', type: 'Household Staff', typeZh: '同府仆从' }, // 卢大爷 — 刘喜
  { source: 'char-119', target: 'char-135', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 侯石翁
  { source: 'char-119', target: 'char-136', type: 'Household Staff', typeZh: '同府仆从' }, // 卢大爷 — 巴英官
  { source: 'char-119', target: 'char-137', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 菊花
  { source: 'char-119', target: 'char-138', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 得月
  { source: 'char-119', target: 'char-139', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 卓天香
  { source: 'char-119', target: 'char-141', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 卢大爷 — 屈道翁
  { source: 'char-119', target: 'char-142', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 苏侯
  { source: 'char-119', target: 'char-143', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 卢大爷 — 姬亮轩
  { source: 'char-119', target: 'char-145', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 张笑梅
  { source: 'char-119', target: 'char-146', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卢大爷 — 杨梅窗
  { source: 'char-119', target: 'char-147', type: 'Household Staff', typeZh: '同府仆从' }, // 卢大爷 — 周小三
  { source: 'char-119', target: 'char-152', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 长庆师娘
  { source: 'char-119', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 卢大爷 — 苏浣香
  { source: 'char-120', target: 'char-55', type: 'Retinue/Master', typeZh: '随从队伍' }, // 华府随从队 — 华光宿
  { source: 'char-121', target: 'char-2', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 叶茂林 — 颜仲清
  { source: 'char-121', target: 'char-3', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 史南湘
  { source: 'char-121', target: 'char-4', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 叶茂林 — 王恂
  { source: 'char-121', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 魏聘才
  { source: 'char-121', target: 'char-6', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 叶茂林 — 李元茂
  { source: 'char-121', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 徐子云
  { source: 'char-121', target: 'char-8', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 叶茂林 — 萧次贤
  { source: 'char-121', target: 'char-9', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 叶茂林 — 刘文泽
  { source: 'char-121', target: 'char-14', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 冯子佩
  { source: 'char-121', target: 'char-15', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 田春航
  { source: 'char-121', target: 'char-20', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 李性全
  { source: 'char-121', target: 'char-23', type: 'Impresario/Troupe Link', typeZh: '班主与伶人' }, // 叶茂林 — 袁宝珠
  { source: 'char-121', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 苏蕙芳
  { source: 'char-121', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 陆素兰
  { source: 'char-121', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 金漱芳
  { source: 'char-121', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 李玉林
  { source: 'char-121', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 王兰保
  { source: 'char-121', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 王桂保
  { source: 'char-121', target: 'char-30', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 林春喜
  { source: 'char-121', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 秦琪官
  { source: 'char-121', target: 'char-32', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 蓉官
  { source: 'char-121', target: 'char-38', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 保珠
  { source: 'char-121', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 林珊枝
  { source: 'char-121', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 叶茂林 — 梅士燮
  { source: 'char-121', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 叶茂林 — 王文辉
  { source: 'char-121', target: 'char-49', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 叶茂林 — 孙亮功
  { source: 'char-121', target: 'char-53', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 叶茂林 — 富伦
  { source: 'char-121', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 华光宿
  { source: 'char-121', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 叶茂林 — 曹长庆
  { source: 'char-121', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 奚十一
  { source: 'char-121', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 潘其观
  { source: 'char-121', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 颜夫人
  { source: 'char-121', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' }, // 叶茂林 — 老三
  { source: 'char-121', target: 'char-141', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 屈道翁
  { source: 'char-121', target: 'char-153', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 叶茂林 — 苏浣香
  { source: 'char-122', target: 'char-23', type: 'Troupe Manager/Performer', typeZh: '掌班与伶人' }, // 金二 — 袁宝珠
  { source: 'char-123', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 颜仲清
  { source: 'char-123', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 王恂
  { source: 'char-123', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 魏聘才
  { source: 'char-123', target: 'char-6', type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' }, // 老三 — 李元茂
  { source: 'char-123', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 徐子云
  { source: 'char-123', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 萧次贤
  { source: 'char-123', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 刘文泽
  { source: 'char-123', target: 'char-14', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 冯子佩
  { source: 'char-123', target: 'char-15', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 田春航
  { source: 'char-123', target: 'char-21', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 孙嗣徽
  { source: 'char-123', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 袁宝珠
  { source: 'char-123', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 苏蕙芳
  { source: 'char-123', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 陆素兰
  { source: 'char-123', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 李玉林
  { source: 'char-123', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 王兰保
  { source: 'char-123', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 王桂保
  { source: 'char-123', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 秦琪官
  { source: 'char-123', target: 'char-32', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 蓉官
  { source: 'char-123', target: 'char-33', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 春兰
  { source: 'char-123', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 林珊枝
  { source: 'char-123', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 王文辉
  { source: 'char-123', target: 'char-53', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 富伦
  { source: 'char-123', target: 'char-54', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 贵芬
  { source: 'char-123', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 华光宿
  { source: 'char-123', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 曹长庆
  { source: 'char-123', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 奚十一
  { source: 'char-123', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 潘其观
  { source: 'char-123', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 唐和尚
  { source: 'char-123', target: 'char-86', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 老三 — 颜夫人
  { source: 'char-123', target: 'char-136', type: 'Household Staff', typeZh: '同府仆从' }, // 老三 — 巴英官
  { source: 'char-123', target: 'char-137', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 菊花
  { source: 'char-123', target: 'char-138', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 得月
  { source: 'char-123', target: 'char-139', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 卓天香
  { source: 'char-123', target: 'char-145', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 张笑梅
  { source: 'char-123', target: 'char-146', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 老三 — 杨梅窗
  { source: 'char-123', target: 'char-147', type: 'Household Staff', typeZh: '同府仆从' }, // 老三 — 周小三
  { source: 'char-123', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 老三 — 黄掌柜
  { source: 'char-124', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 王恂
  { source: 'char-124', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 魏聘才
  { source: 'char-124', target: 'char-6', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 李元茂
  { source: 'char-124', target: 'char-38', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 保珠
  { source: 'char-124', target: 'char-45', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 二喜
  { source: 'char-124', target: 'char-72', type: 'Fawning', typeZh: '讨好' }, // 酒楼掌柜 — 奚十一
  { source: 'char-124', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 酒楼掌柜 — 唐和尚
  { source: 'char-125', target: 'char-47', type: 'Grandfather/Grandson', typeZh: '祖孙' }, // 梅鼎 — 梅士燮
  { source: 'char-126', target: 'char-47', type: 'Father/Son', typeZh: '父子' }, // 梅羹调 — 梅士燮
  { source: 'char-127', target: 'char-2', type: 'Father/Son', typeZh: '父子' }, // 颜庄 — 颜仲清
  { source: 'char-127', target: 'char-86', type: 'Brother/Sister', typeZh: '姐弟' }, // 颜庄 — 颜夫人
  { source: 'char-128', target: 'char-86', type: 'Father/Daughter', typeZh: '父女' }, // 颜尧臣 — 颜夫人
  { source: 'char-129', target: 'char-53', type: 'Father/Son', typeZh: '父子' }, // 富安世 — 富伦
  { source: 'char-133', target: 'char-5', type: 'Father/Son', typeZh: '父子' }, // 魏老仁 — 魏聘才
  { source: 'char-134', target: 'char-2', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 颜仲清
  { source: 'char-134', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 萧次贤
  { source: 'char-134', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 苏蕙芳
  { source: 'char-134', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 陆素兰
  { source: 'char-134', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 梅士燮
  { source: 'char-134', target: 'char-55', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 华光宿
  { source: 'char-134', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 刘喜 — 奚十一
  { source: 'char-134', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 刘喜 — 唐和尚
  { source: 'char-134', target: 'char-135', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 刘喜 — 侯石翁
  { source: 'char-134', target: 'char-141', type: 'Master/Servant', typeZh: '主仆' }, // 刘喜 — 屈道翁
  { source: 'char-134', target: 'char-190', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 刘喜 — 李大夫
  { source: 'char-134', target: 'char-191', type: 'Fellow Servant', typeZh: '同僚' }, // 刘喜 — 张贵
  { source: 'char-134', target: 'char-194', type: 'Business Partner', typeZh: '合作/合伙' }, // 刘喜 — 黄掌柜
  { source: 'char-135', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' }, // 侯石翁 — 颜仲清
  { source: 'char-135', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' }, // 侯石翁 — 王恂
  { source: 'char-135', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 侯石翁 — 魏聘才
  { source: 'char-135', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' }, // 侯石翁 — 萧次贤
  { source: 'char-135', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 袁宝珠
  { source: 'char-135', target: 'char-24', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 苏蕙芳
  { source: 'char-135', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 陆素兰
  { source: 'char-135', target: 'char-26', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 金漱芳
  { source: 'char-135', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 李玉林
  { source: 'char-135', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 王兰保
  { source: 'char-135', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 王桂保
  { source: 'char-135', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 侯石翁 — 秦琪官
  { source: 'char-135', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 侯石翁 — 梅士燮
  { source: 'char-135', target: 'char-55', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 侯石翁 — 华光宿
  { source: 'char-135', target: 'char-72', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 侯石翁 — 奚十一
  { source: 'char-135', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 侯石翁 — 唐和尚
  { source: 'char-135', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 侯石翁 — 颜夫人
  { source: 'char-135', target: 'char-141', type: 'Literary Peers', typeZh: '文坛同辈' }, // 侯石翁 — 屈道翁
  { source: 'char-136', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 魏聘才
  { source: 'char-136', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 徐子云
  { source: 'char-136', target: 'char-23', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 巴英官 — 袁宝珠
  { source: 'char-136', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 巴英官 — 苏蕙芳
  { source: 'char-136', target: 'char-25', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 巴英官 — 陆素兰
  { source: 'char-136', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 巴英官 — 王兰保
  { source: 'char-136', target: 'char-33', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 春兰
  { source: 'char-136', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 华光宿
  { source: 'char-136', target: 'char-56', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 巴英官 — 曹长庆
  { source: 'char-136', target: 'char-72', type: 'Attendant', typeZh: '仆从附势' }, // 巴英官 — 奚十一
  { source: 'char-136', target: 'char-73', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 潘其观
  { source: 'char-136', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 唐和尚
  { source: 'char-136', target: 'char-137', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 菊花
  { source: 'char-136', target: 'char-138', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 得月
  { source: 'char-136', target: 'char-139', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 卓天香
  { source: 'char-136', target: 'char-143', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 巴英官 — 姬亮轩
  { source: 'char-136', target: 'char-147', type: 'Household Staff', typeZh: '同府仆从' }, // 巴英官 — 周小三
  { source: 'char-137', target: 'char-2', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 颜仲清
  { source: 'char-137', target: 'char-4', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 王恂
  { source: 'char-137', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 菊花 — 魏聘才
  { source: 'char-137', target: 'char-7', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 菊花 — 徐子云
  { source: 'char-137', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 萧次贤
  { source: 'char-137', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 刘文泽
  { source: 'char-137', target: 'char-15', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 田春航
  { source: 'char-137', target: 'char-17', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 金吉甫
  { source: 'char-137', target: 'char-23', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 袁宝珠
  { source: 'char-137', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 苏蕙芳
  { source: 'char-137', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 陆素兰
  { source: 'char-137', target: 'char-26', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 金漱芳
  { source: 'char-137', target: 'char-28', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 王兰保
  { source: 'char-137', target: 'char-29', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 王桂保
  { source: 'char-137', target: 'char-30', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 林春喜
  { source: 'char-137', target: 'char-31', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 秦琪官
  { source: 'char-137', target: 'char-33', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 春兰
  { source: 'char-137', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 菊花 — 华光宿
  { source: 'char-137', target: 'char-72', type: 'Concubine', typeZh: '姬妾' }, // 菊花 — 奚十一
  { source: 'char-137', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 菊花 — 潘其观
  { source: 'char-137', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 菊花 — 唐和尚
  { source: 'char-137', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' }, // 菊花 — 蓉华
  { source: 'char-137', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 许三姐
  { source: 'char-137', target: 'char-95', type: 'Sworn Sisters', typeZh: '门户姊妹' }, // 菊花 — 玉天仙
  { source: 'char-137', target: 'char-138', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 得月
  { source: 'char-137', target: 'char-139', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 卓天香
  { source: 'char-137', target: 'char-140', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 阳善修
  { source: 'char-137', target: 'char-141', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 屈道翁
  { source: 'char-137', target: 'char-143', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 姬亮轩
  { source: 'char-137', target: 'char-145', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 张笑梅
  { source: 'char-137', target: 'char-147', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 菊花 — 周小三
  { source: 'char-137', target: 'char-181', type: 'Keeper/Courtesan', typeZh: '鸨母门户' }, // 菊花 — 陶妈妈
  { source: 'char-138', target: 'char-5', type: 'Exploited By', typeZh: '受其摆布' }, // 得月 — 魏聘才
  { source: 'char-138', target: 'char-15', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 得月 — 田春航
  { source: 'char-138', target: 'char-23', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 得月 — 袁宝珠
  { source: 'char-138', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 得月 — 苏蕙芳
  { source: 'char-138', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 得月 — 蓉官
  { source: 'char-138', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 得月 — 春兰
  { source: 'char-138', target: 'char-72', type: 'Victim/Abuser', typeZh: '受害与加害' }, // 得月 — 奚十一
  { source: 'char-138', target: 'char-73', type: 'Exploited By', typeZh: '受其摆布' }, // 得月 — 潘其观
  { source: 'char-138', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 得月 — 唐和尚
  { source: 'char-138', target: 'char-139', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 得月 — 卓天香
  { source: 'char-138', target: 'char-147', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 得月 — 周小三
  { source: 'char-139', target: 'char-2', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 颜仲清
  { source: 'char-139', target: 'char-4', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 王恂
  { source: 'char-139', target: 'char-5', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' }, // 卓天香 — 魏聘才
  { source: 'char-139', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 李元茂
  { source: 'char-139', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 徐子云
  { source: 'char-139', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 萧次贤
  { source: 'char-139', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 刘文泽
  { source: 'char-139', target: 'char-15', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 卓天香 — 田春航
  { source: 'char-139', target: 'char-23', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 袁宝珠
  { source: 'char-139', target: 'char-24', type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' }, // 卓天香 — 苏蕙芳
  { source: 'char-139', target: 'char-25', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 陆素兰
  { source: 'char-139', target: 'char-26', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 金漱芳
  { source: 'char-139', target: 'char-27', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 李玉林
  { source: 'char-139', target: 'char-28', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 王兰保
  { source: 'char-139', target: 'char-29', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 王桂保
  { source: 'char-139', target: 'char-30', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 林春喜
  { source: 'char-139', target: 'char-31', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 秦琪官
  { source: 'char-139', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 卓天香 — 春兰
  { source: 'char-139', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 卓天香 — 华光宿
  { source: 'char-139', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 卓天香 — 奚十一
  { source: 'char-139', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 卓天香 — 潘其观
  { source: 'char-139', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 卓天香 — 唐和尚
  { source: 'char-139', target: 'char-147', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 卓天香 — 周小三
  { source: 'char-140', target: 'char-33', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 阳善修 — 春兰
  { source: 'char-140', target: 'char-72', type: 'Physician/Patient', typeZh: '医患' }, // 阳善修 — 奚十一
  { source: 'char-140', target: 'char-73', type: 'Physician/Patient', typeZh: '医患' }, // 阳善修 — 潘其观
  { source: 'char-140', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 阳善修 — 唐和尚
  { source: 'char-141', target: 'char-2', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 颜仲清
  { source: 'char-141', target: 'char-3', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 史南湘
  { source: 'char-141', target: 'char-4', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 王恂
  { source: 'char-141', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 屈道翁 — 魏聘才
  { source: 'char-141', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' }, // 屈道翁 — 李元茂
  { source: 'char-141', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' }, // 屈道翁 — 徐子云
  { source: 'char-141', target: 'char-8', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 萧次贤
  { source: 'char-141', target: 'char-9', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 刘文泽
  { source: 'char-141', target: 'char-15', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 田春航
  { source: 'char-141', target: 'char-17', type: 'Garden of Contentment Salon Scholar Peers', typeZh: '怡园雅集同道文人' }, // 屈道翁 — 金吉甫
  { source: 'char-141', target: 'char-23', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 袁宝珠
  { source: 'char-141', target: 'char-24', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 苏蕙芳
  { source: 'char-141', target: 'char-25', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 陆素兰
  { source: 'char-141', target: 'char-26', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 金漱芳
  { source: 'char-141', target: 'char-27', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 李玉林
  { source: 'char-141', target: 'char-28', type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' }, // 屈道翁 — 王兰保
  { source: 'char-141', target: 'char-29', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 屈道翁 — 王桂保
  { source: 'char-141', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 屈道翁 — 林春喜
  { source: 'char-141', target: 'char-31', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 屈道翁 — 秦琪官
  { source: 'char-141', target: 'char-42', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 屈道翁 — 林珊枝
  { source: 'char-141', target: 'char-47', type: 'Official & Scholar', typeZh: '官员与名士' }, // 屈道翁 — 梅士燮
  { source: 'char-141', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' }, // 屈道翁 — 王文辉
  { source: 'char-141', target: 'char-55', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 屈道翁 — 华光宿
  { source: 'char-141', target: 'char-56', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 屈道翁 — 曹长庆
  { source: 'char-141', target: 'char-72', type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' }, // 屈道翁 — 奚十一
  { source: 'char-141', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 屈道翁 — 唐和尚
  { source: 'char-141', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' }, // 屈道翁 — 颜夫人
  { source: 'char-141', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' }, // 屈道翁 — 苏侯
  { source: 'char-141', target: 'char-153', type: 'Family/Household', typeZh: '家属/内眷' }, // 屈道翁 — 苏浣香
  { source: 'char-141', target: 'char-190', type: 'Doctor & Patient', typeZh: '医患' }, // 屈道翁 — 李大夫
  { source: 'char-141', target: 'char-191', type: 'Master/Servant', typeZh: '主仆' }, // 屈道翁 — 张贵
  { source: 'char-141', target: 'char-192', type: 'Master/Servant', typeZh: '主仆' }, // 屈道翁 — 汪升
  { source: 'char-141', target: 'char-193', type: 'Master/Servant', typeZh: '主仆' }, // 屈道翁 — 钱德
  { source: 'char-141', target: 'char-197', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 屈道翁 — 季十矮子
  { source: 'char-142', target: 'char-2', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 颜仲清
  { source: 'char-142', target: 'char-3', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 史南湘
  { source: 'char-142', target: 'char-4', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 王恂
  { source: 'char-142', target: 'char-7', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 徐子云
  { source: 'char-142', target: 'char-8', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 萧次贤
  { source: 'char-142', target: 'char-9', type: 'Official & Scholar', typeZh: '官员与名士' }, // 苏侯 — 刘文泽
  { source: 'char-142', target: 'char-15', type: 'Father-in-law/Son-in-law', typeZh: '岳父女婿' }, // 苏侯 — 田春航
  { source: 'char-142', target: 'char-23', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏侯 — 袁宝珠
  { source: 'char-142', target: 'char-24', type: 'Official & Performer', typeZh: '官员与伶人' }, // 苏侯 — 苏蕙芳
  { source: 'char-142', target: 'char-48', type: 'Official Colleague', typeZh: '同朝为官' }, // 苏侯 — 王文辉
  { source: 'char-142', target: 'char-50', type: 'Official Colleague', typeZh: '同朝为官' }, // 苏侯 — 杨方猷
  { source: 'char-142', target: 'char-55', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏侯 — 华光宿
  { source: 'char-142', target: 'char-153', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏侯 — 苏浣香
  { source: 'char-142', target: 'char-154', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏侯 — 浣兰
  { source: 'char-143', target: 'char-4', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 王恂
  { source: 'char-143', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 魏聘才
  { source: 'char-143', target: 'char-6', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 李元茂
  { source: 'char-143', target: 'char-7', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 徐子云
  { source: 'char-143', target: 'char-15', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 田春航
  { source: 'char-143', target: 'char-21', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 孙嗣徽
  { source: 'char-143', target: 'char-23', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 袁宝珠
  { source: 'char-143', target: 'char-24', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 苏蕙芳
  { source: 'char-143', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 陆素兰
  { source: 'char-143', target: 'char-28', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 王兰保
  { source: 'char-143', target: 'char-33', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 春兰
  { source: 'char-143', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 王文辉
  { source: 'char-143', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 华光宿
  { source: 'char-143', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 姬亮轩 — 曹长庆
  { source: 'char-143', target: 'char-72', type: 'Corrupt Associate', typeZh: '狼狈为奸' }, // 姬亮轩 — 奚十一
  { source: 'char-143', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 姬亮轩 — 潘其观
  { source: 'char-143', target: 'char-162', type: 'Cronies', typeZh: '狐朋狗友' }, // 姬亮轩 — 乌大傻
  { source: 'char-145', target: 'char-2', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张笑梅 — 颜仲清
  { source: 'char-145', target: 'char-5', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' }, // 张笑梅 — 魏聘才
  { source: 'char-145', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张笑梅 — 李元茂
  { source: 'char-145', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张笑梅 — 萧次贤
  { source: 'char-145', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张笑梅 — 刘文泽
  { source: 'char-145', target: 'char-15', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 张笑梅 — 田春航
  { source: 'char-145', target: 'char-23', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 袁宝珠
  { source: 'char-145', target: 'char-24', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 苏蕙芳
  { source: 'char-145', target: 'char-25', type: 'Fellow Performer', typeZh: '同台伶人' }, // 张笑梅 — 陆素兰
  { source: 'char-145', target: 'char-31', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 秦琪官
  { source: 'char-145', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 蓉官
  { source: 'char-145', target: 'char-42', type: 'Fellow Performer', typeZh: '同台伶人' }, // 张笑梅 — 林珊枝
  { source: 'char-145', target: 'char-53', type: 'Official & Performer', typeZh: '官员与伶人' }, // 张笑梅 — 富伦
  { source: 'char-145', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 张笑梅 — 华光宿
  { source: 'char-145', target: 'char-56', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 曹长庆
  { source: 'char-145', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 张笑梅 — 奚十一
  { source: 'char-145', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 张笑梅 — 潘其观
  { source: 'char-145', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 张笑梅 — 唐和尚
  { source: 'char-145', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张笑梅 — 颜夫人
  { source: 'char-145', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张笑梅 — 玉天仙
  { source: 'char-145', target: 'char-146', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 张笑梅 — 杨梅窗
  { source: 'char-145', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 张笑梅 — 黄掌柜
  { source: 'char-146', target: 'char-2', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 颜仲清
  { source: 'char-146', target: 'char-5', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' }, // 杨梅窗 — 魏聘才
  { source: 'char-146', target: 'char-6', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 李元茂
  { source: 'char-146', target: 'char-7', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 徐子云
  { source: 'char-146', target: 'char-8', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 萧次贤
  { source: 'char-146', target: 'char-9', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 刘文泽
  { source: 'char-146', target: 'char-15', type: 'Patron & Performer', typeZh: '名士与伶人' }, // 杨梅窗 — 田春航
  { source: 'char-146', target: 'char-23', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杨梅窗 — 袁宝珠
  { source: 'char-146', target: 'char-24', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杨梅窗 — 苏蕙芳
  { source: 'char-146', target: 'char-31', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杨梅窗 — 秦琪官
  { source: 'char-146', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杨梅窗 — 蓉官
  { source: 'char-146', target: 'char-42', type: 'Theatrical Colleague', typeZh: '同台伶人' }, // 杨梅窗 — 林珊枝
  { source: 'char-146', target: 'char-53', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杨梅窗 — 富伦
  { source: 'char-146', target: 'char-54', type: 'Official & Performer', typeZh: '官员与伶人' }, // 杨梅窗 — 贵芬
  { source: 'char-146', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 杨梅窗 — 华光宿
  { source: 'char-146', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 杨梅窗 — 奚十一
  { source: 'char-146', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 杨梅窗 — 潘其观
  { source: 'char-146', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 杨梅窗 — 唐和尚
  { source: 'char-146', target: 'char-95', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杨梅窗 — 玉天仙
  { source: 'char-146', target: 'char-194', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 杨梅窗 — 黄掌柜
  { source: 'char-147', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 颜仲清
  { source: 'char-147', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 魏聘才
  { source: 'char-147', target: 'char-7', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 徐子云
  { source: 'char-147', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 萧次贤
  { source: 'char-147', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 周小三 — 刘文泽
  { source: 'char-147', target: 'char-15', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 田春航
  { source: 'char-147', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 周小三 — 袁宝珠
  { source: 'char-147', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 周小三 — 苏蕙芳
  { source: 'char-147', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 华光宿
  { source: 'char-147', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 周小三 — 奚十一
  { source: 'char-147', target: 'char-73', type: 'Driver/Servant', typeZh: '车夫主仆' }, // 周小三 — 潘其观
  { source: 'char-147', target: 'char-75', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 周小三 — 唐和尚
  { source: 'char-147', target: 'char-94', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 周小三 — 许三姐
  { source: 'char-148', target: 'char-7', type: 'Servant', typeZh: '主仆' }, // 孟七 — 徐子云
  { source: 'char-148', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 孟七 — 林珊枝
  { source: 'char-148', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 孟七 — 奚十一
  { source: 'char-148', target: 'char-149', type: 'Household Staff', typeZh: '同府仆从' }, // 孟七 — 姚贤
  { source: 'char-149', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 姚贤 — 林珊枝
  { source: 'char-149', target: 'char-55', type: 'Servant', typeZh: '主仆' }, // 姚贤 — 华光宿
  { source: 'char-149', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 姚贤 — 奚十一
  { source: 'char-150', target: 'char-2', type: 'Family/Household', typeZh: '家属/内眷' }, // 吴紫烟 — 颜仲清
  { source: 'char-150', target: 'char-4', type: 'Family/Household', typeZh: '家属/内眷' }, // 吴紫烟 — 王恂
  { source: 'char-150', target: 'char-8', type: 'Family/Household', typeZh: '家属/内眷' }, // 吴紫烟 — 萧次贤
  { source: 'char-150', target: 'char-9', type: 'Marriage', typeZh: '夫妻' }, // 吴紫烟 — 刘文泽
  { source: 'char-150', target: 'char-40', type: "Women's Gathering Host/Guest", typeZh: '闺阁酒令主客' }, // 吴紫烟 — 袁绮香
  { source: 'char-150', target: 'char-55', type: 'Family/Household', typeZh: '家属/内眷' }, // 吴紫烟 — 华光宿
  { source: 'char-150', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' }, // 吴紫烟 — 孙氏
  { source: 'char-150', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 吴紫烟 — 蓉华
  { source: 'char-150', target: 'char-153', type: 'Female Companion', typeZh: '闺阁女伴' }, // 吴紫烟 — 苏浣香
  { source: 'char-150', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' }, // 吴紫烟 — 浣兰
  { source: 'char-150', target: 'char-177', type: 'Maid/Mistress', typeZh: '主仆' }, // 吴紫烟 — 侍香
  { source: 'char-151', target: 'char-73', type: 'Criminal Entanglement', typeZh: '盗案牵连' }, // 蔡某 — 潘其观
  { source: 'char-152', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 长庆师娘 — 魏聘才
  { source: 'char-152', target: 'char-7', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 长庆师娘 — 徐子云
  { source: 'char-152', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 长庆师娘 — 萧次贤
  { source: 'char-152', target: 'char-23', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 长庆师娘 — 袁宝珠
  { source: 'char-152', target: 'char-24', type: "Troupe Master's Family", typeZh: '师门眷属' }, // 长庆师娘 — 苏蕙芳
  { source: 'char-152', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 长庆师娘 — 陆素兰
  { source: 'char-152', target: 'char-55', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 长庆师娘 — 华光宿
  { source: 'char-152', target: 'char-56', type: 'Marriage', typeZh: '夫妻' }, // 长庆师娘 — 曹长庆
  { source: 'char-152', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 长庆师娘 — 奚十一
  { source: 'char-152', target: 'char-164', type: 'Cousins', typeZh: '表姊弟' }, // 长庆师娘 — 伍麻子
  { source: 'char-153', target: 'char-2', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 颜仲清
  { source: 'char-153', target: 'char-4', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏浣香 — 王恂
  { source: 'char-153', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 苏浣香 — 魏聘才
  { source: 'char-153', target: 'char-7', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏浣香 — 徐子云
  { source: 'char-153', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 萧次贤
  { source: 'char-153', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 刘文泽
  { source: 'char-153', target: 'char-23', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 袁宝珠
  { source: 'char-153', target: 'char-24', type: 'Acquaintance', typeZh: '相识' }, // 苏浣香 — 苏蕙芳
  { source: 'char-153', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 陆素兰
  { source: 'char-153', target: 'char-28', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 王兰保
  { source: 'char-153', target: 'char-31', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 秦琪官
  { source: 'char-153', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏浣香 — 袁绮香
  { source: 'char-153', target: 'char-42', type: 'Acquaintance', typeZh: '相识' }, // 苏浣香 — 林珊枝
  { source: 'char-153', target: 'char-48', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏浣香 — 王文辉
  { source: 'char-153', target: 'char-55', type: 'Marriage', typeZh: '夫妻' }, // 苏浣香 — 华光宿
  { source: 'char-153', target: 'char-56', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 苏浣香 — 曹长庆
  { source: 'char-153', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 苏浣香 — 奚十一
  { source: 'char-153', target: 'char-86', type: 'Female Companion', typeZh: '闺阁女伴' }, // 苏浣香 — 颜夫人
  { source: 'char-153', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' }, // 苏浣香 — 孙氏
  { source: 'char-153', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 苏浣香 — 蓉华
  { source: 'char-153', target: 'char-90', type: 'Female Companion', typeZh: '闺阁女伴' }, // 苏浣香 — 王琼华
  { source: 'char-153', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' }, // 苏浣香 — 许三姐
  { source: 'char-153', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' }, // 苏浣香 — 浣兰
  { source: 'char-153', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 红雪
  { source: 'char-153', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 红香
  { source: 'char-153', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 花珠
  { source: 'char-153', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 画珠
  { source: 'char-153', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 明珠
  { source: 'char-153', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 荷珠
  { source: 'char-153', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 苏浣香 — 蕊珠
  { source: 'char-153', target: 'char-167', type: 'Maid/Mistress', typeZh: '主仆' }, // 苏浣香 — 爱珠
  { source: 'char-153', target: 'char-168', type: 'Maid/Mistress', typeZh: '主仆' }, // 苏浣香 — 掌珠
  { source: 'char-153', target: 'char-169', type: 'Maid/Mistress', typeZh: '主仆' }, // 苏浣香 — 珍珠
  { source: 'char-153', target: 'char-170', type: 'Maid/Mistress', typeZh: '主仆' }, // 苏浣香 — 赠珠
  { source: 'char-154', target: 'char-2', type: 'Family/Household', typeZh: '家属/内眷' }, // 浣兰 — 颜仲清
  { source: 'char-154', target: 'char-8', type: 'Family/Household', typeZh: '家属/内眷' }, // 浣兰 — 萧次贤
  { source: 'char-154', target: 'char-9', type: 'Family/Household', typeZh: '家属/内眷' }, // 浣兰 — 刘文泽
  { source: 'char-154', target: 'char-40', type: 'Family/Household', typeZh: '家属/内眷' }, // 浣兰 — 袁绮香
  { source: 'char-154', target: 'char-55', type: 'Family/Household', typeZh: '家属/内眷' }, // 浣兰 — 华光宿
  { source: 'char-154', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 浣兰 — 奚十一
  { source: 'char-154', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' }, // 浣兰 — 孙氏
  { source: 'char-154', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' }, // 浣兰 — 蓉华
  { source: 'char-154', target: 'char-90', type: 'Female Companion', typeZh: '闺阁女伴' }, // 浣兰 — 王琼华
  { source: 'char-154', target: 'char-94', type: 'Female Companion', typeZh: '闺阁女伴' }, // 浣兰 — 许三姐
  { source: 'char-154', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 红雪
  { source: 'char-154', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 红香
  { source: 'char-154', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 花珠
  { source: 'char-154', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 画珠
  { source: 'char-154', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 明珠
  { source: 'char-154', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 荷珠
  { source: 'char-154', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 浣兰 — 蕊珠
  { source: 'char-154', target: 'char-179', type: 'Maid/Mistress', typeZh: '主仆' }, // 浣兰 — 小翠
  { source: 'char-155', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 颜仲清
  { source: 'char-155', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 王恂
  { source: 'char-155', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 萧次贤
  { source: 'char-155', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 刘文泽
  { source: 'char-155', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 红雪 — 袁宝珠
  { source: 'char-155', target: 'char-40', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 袁绮香
  { source: 'char-155', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 华光宿
  { source: 'char-155', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 红雪 — 奚十一
  { source: 'char-155', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 孙氏
  { source: 'char-155', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 蓉华
  { source: 'char-155', target: 'char-94', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红雪 — 许三姐
  { source: 'char-155', target: 'char-156', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 红香
  { source: 'char-155', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 花珠
  { source: 'char-155', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 画珠
  { source: 'char-155', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 明珠
  { source: 'char-155', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 荷珠
  { source: 'char-155', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 红雪 — 蕊珠
  { source: 'char-156', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 颜仲清
  { source: 'char-156', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 王恂
  { source: 'char-156', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 魏聘才
  { source: 'char-156', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 萧次贤
  { source: 'char-156', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 刘文泽
  { source: 'char-156', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 红香 — 袁宝珠
  { source: 'char-156', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 红香 — 苏蕙芳
  { source: 'char-156', target: 'char-25', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 红香 — 陆素兰
  { source: 'char-156', target: 'char-40', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 袁绮香
  { source: 'char-156', target: 'char-42', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 红香 — 林珊枝
  { source: 'char-156', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 华光宿
  { source: 'char-156', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 红香 — 奚十一
  { source: 'char-156', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 孙氏
  { source: 'char-156', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 蓉华
  { source: 'char-156', target: 'char-94', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 红香 — 许三姐
  { source: 'char-156', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' }, // 红香 — 花珠
  { source: 'char-156', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' }, // 红香 — 画珠
  { source: 'char-156', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 红香 — 明珠
  { source: 'char-156', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' }, // 红香 — 荷珠
  { source: 'char-156', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 红香 — 蕊珠
  { source: 'char-157', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 颜仲清
  { source: 'char-157', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 魏聘才
  { source: 'char-157', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 萧次贤
  { source: 'char-157', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 刘文泽
  { source: 'char-157', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 花珠 — 袁宝珠
  { source: 'char-157', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 花珠 — 苏蕙芳
  { source: 'char-157', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 林珊枝
  { source: 'char-157', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 华光宿
  { source: 'char-157', target: 'char-72', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 奚十一
  { source: 'char-157', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 孙氏
  { source: 'char-157', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 花珠 — 蓉华
  { source: 'char-157', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' }, // 花珠 — 画珠
  { source: 'char-157', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 花珠 — 明珠
  { source: 'char-157', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' }, // 花珠 — 荷珠
  { source: 'char-157', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 花珠 — 蕊珠
  { source: 'char-158', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 画珠 — 袁宝珠
  { source: 'char-158', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 画珠 — 林珊枝
  { source: 'char-158', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 画珠 — 华光宿
  { source: 'char-158', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 画珠 — 奚十一
  { source: 'char-158', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 画珠 — 孙氏
  { source: 'char-158', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 画珠 — 蓉华
  { source: 'char-158', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' }, // 画珠 — 明珠
  { source: 'char-158', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' }, // 画珠 — 荷珠
  { source: 'char-158', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 画珠 — 蕊珠
  { source: 'char-159', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 颜仲清
  { source: 'char-159', target: 'char-3', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 史南湘
  { source: 'char-159', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 王恂
  { source: 'char-159', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 魏聘才
  { source: 'char-159', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 萧次贤
  { source: 'char-159', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 刘文泽
  { source: 'char-159', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 袁宝珠
  { source: 'char-159', target: 'char-24', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 苏蕙芳
  { source: 'char-159', target: 'char-25', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 陆素兰
  { source: 'char-159', target: 'char-26', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 金漱芳
  { source: 'char-159', target: 'char-27', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 李玉林
  { source: 'char-159', target: 'char-28', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 王兰保
  { source: 'char-159', target: 'char-29', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 王桂保
  { source: 'char-159', target: 'char-30', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 林春喜
  { source: 'char-159', target: 'char-31', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 明珠 — 秦琪官
  { source: 'char-159', target: 'char-38', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 保珠
  { source: 'char-159', target: 'char-40', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 袁绮香
  { source: 'char-159', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 林珊枝
  { source: 'char-159', target: 'char-47', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 梅士燮
  { source: 'char-159', target: 'char-48', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 王文辉
  { source: 'char-159', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 华光宿
  { source: 'char-159', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 明珠 — 奚十一
  { source: 'char-159', target: 'char-86', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 颜夫人
  { source: 'char-159', target: 'char-87', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 王家陆夫人
  { source: 'char-159', target: 'char-88', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 孙氏
  { source: 'char-159', target: 'char-89', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 蓉华
  { source: 'char-159', target: 'char-90', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 明珠 — 王琼华
  { source: 'char-159', target: 'char-94', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 明珠 — 许三姐
  { source: 'char-159', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' }, // 明珠 — 荷珠
  { source: 'char-159', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 明珠 — 蕊珠
  { source: 'char-160', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 荷珠 — 魏聘才
  { source: 'char-160', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 荷珠 — 萧次贤
  { source: 'char-160', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 荷珠 — 袁宝珠
  { source: 'char-160', target: 'char-40', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 荷珠 — 袁绮香
  { source: 'char-160', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 荷珠 — 林珊枝
  { source: 'char-160', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 荷珠 — 华光宿
  { source: 'char-160', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 荷珠 — 奚十一
  { source: 'char-160', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' }, // 荷珠 — 蕊珠
  { source: 'char-161', target: 'char-2', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 颜仲清
  { source: 'char-161', target: 'char-4', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 王恂
  { source: 'char-161', target: 'char-5', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 魏聘才
  { source: 'char-161', target: 'char-8', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 萧次贤
  { source: 'char-161', target: 'char-9', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 刘文泽
  { source: 'char-161', target: 'char-23', type: 'Theatrical Household', typeZh: '戏班/府上' }, // 蕊珠 — 袁宝珠
  { source: 'char-161', target: 'char-42', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 林珊枝
  { source: 'char-161', target: 'char-55', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 华光宿
  { source: 'char-161', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 蕊珠 — 奚十一
  { source: 'char-161', target: 'char-94', type: 'Master & Servant', typeZh: '主仆/雇佣' }, // 蕊珠 — 许三姐
  { source: 'char-162', target: 'char-163', type: 'In-laws', typeZh: '姻亲' }, // 乌大傻 — 归自荣
  { source: 'char-165', target: 'char-56', type: 'Apprentice/Master', typeZh: '师徒' }, // 天福 — 曹长庆
  { source: 'char-166', target: 'char-56', type: 'Apprentice/Master', typeZh: '师徒' }, // 天寿 — 曹长庆
  { source: 'char-167', target: 'char-55', type: 'Maid/Master', typeZh: '主仆' }, // 爱珠 — 华光宿
  { source: 'char-171', target: 'char-40', type: 'Maid/Mistress', typeZh: '主仆' }, // 红薇 — 袁绮香
  { source: 'char-172', target: 'char-40', type: 'Maid/Mistress', typeZh: '主仆' }, // 红玉 — 袁绮香
  { source: 'char-173', target: 'char-40', type: 'Maid/Mistress', typeZh: '主仆' }, // 红雯 — 袁绮香
  { source: 'char-174', target: 'char-40', type: 'Maid/Mistress', typeZh: '主仆' }, // 红莲 — 袁绮香
  { source: 'char-175', target: 'char-40', type: 'Maid/Mistress', typeZh: '主仆' }, // 红娟 — 袁绮香
  { source: 'char-176', target: 'char-89', type: 'Maid/Mistress', typeZh: '主仆' }, // 秋莲 — 蓉华
  { source: 'char-178', target: 'char-88', type: 'Maid/Mistress', typeZh: '主仆' }, // 金凤 — 孙氏
  { source: 'char-180', target: 'char-90', type: 'Maid/Mistress', typeZh: '主仆' }, // 青琴 — 王琼华
  { source: 'char-181', target: 'char-72', type: 'Keeper/Client', typeZh: '门户主客' }, // 陶妈妈 — 奚十一
  { source: 'char-181', target: 'char-95', type: 'Keeper/Courtesan', typeZh: '鸨母门户' }, // 陶妈妈 — 玉天仙
  { source: 'char-182', target: 'char-53', type: 'Circle Acquaintance', typeZh: '交游相识' }, // 杨八 — 富伦
  { source: 'char-182', target: 'char-72', type: 'Circle Acquaintance', typeZh: '交游相识' }, // 杨八 — 奚十一
  { source: 'char-183', target: 'char-184', type: 'Tea-house Colleagues', typeZh: '茶馆同僚' }, // 陆皂隶 — 葛逢时
  { source: 'char-185', target: 'char-73', type: 'Revenge', typeZh: '报复惩治' }, // 许老二 — 潘其观
  { source: 'char-185', target: 'char-94', type: 'Siblings', typeZh: '姐弟' }, // 许老二 — 许三姐
  { source: 'char-186', target: 'char-73', type: 'Shop Assistant/Owner', typeZh: '伙计东家' }, // 许老三 — 潘其观
  { source: 'char-186', target: 'char-94', type: 'Siblings', typeZh: '姐弟' }, // 许老三 — 许三姐
  { source: 'char-189', target: 'char-6', type: 'Street Quarrel', typeZh: '街头争闹' }, // 缝穷婆 — 李元茂
  { source: 'char-194', target: 'char-2', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 颜仲清
  { source: 'char-194', target: 'char-5', type: 'Conflict', typeZh: '冲突' }, // 黄掌柜 — 魏聘才
  { source: 'char-194', target: 'char-6', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 李元茂
  { source: 'char-194', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 萧次贤
  { source: 'char-194', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 刘文泽
  { source: 'char-194', target: 'char-21', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 孙嗣徽
  { source: 'char-194', target: 'char-23', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 袁宝珠
  { source: 'char-194', target: 'char-24', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 苏蕙芳
  { source: 'char-194', target: 'char-31', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 秦琪官
  { source: 'char-194', target: 'char-45', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 黄掌柜 — 二喜
  { source: 'char-194', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 黄掌柜 — 奚十一
  { source: 'char-194', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 黄掌柜 — 潘其观
  { source: 'char-194', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' }, // 黄掌柜 — 唐和尚
  { source: 'char-195', target: 'char-53', type: 'Customer & Banker', typeZh: '客户与银号掌柜' }, // 银号掌柜 — 富伦
  { source: 'char-197', target: 'char-2', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 季十矮子 — 颜仲清
  { source: 'char-197', target: 'char-7', type: 'Employer & Artisan', typeZh: '雇佣与刻工' }, // 季十矮子 — 徐子云
  { source: 'char-197', target: 'char-8', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 季十矮子 — 萧次贤
  { source: 'char-197', target: 'char-9', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 季十矮子 — 刘文泽
  { source: 'char-197', target: 'char-28', type: 'Social Acquaintance', typeZh: '泛泛之交' }, // 季十矮子 — 王兰保
];
