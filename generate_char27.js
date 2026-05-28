const fs = require('fs');
const chapters = [1, 2, 6, 7, 9, 12, 14, 17, 19, 24, 25, 30, 31, 32, 35, 36, 37, 43, 45, 48, 53, 60];
const char27Info = {
    1: { en: "Li Yulin is introduced as a fifteen-year-old performer from Yangzhou, known by his courtesy name Peixian.", zh: "李玉林出场，字佩仙，十五岁，扬州人。" },
    2: { en: "Li Yulin's name appears among the guest lists and conversations during social gatherings.", zh: "在社交聚会的宾客名单和谈话中提及了李玉林。" },
    6: { en: "Li Yulin performs on stage, and his interactions and performance are observed by others.", zh: "李玉林登台表演，其表演与互动被众人关注。" },
    7: { en: "Mei Ziyu reflects on the talents and beauty of the performers, including Li Yulin.", zh: "梅子玉回想各名伶的才艺与美貌，其中包含李玉林。" },
    9: { en: "Shi Nanxiang mentions spending the day drinking at a tavern with Li Yulin (Peixian) and others.", zh: "史南湘提到曾与李玉林（佩仙）等人同在酒楼饮酒。" },
    12: { en: "Li Yulin visits Gao Pin, displaying his charming and elegant demeanor.", zh: "李玉林拜访高品，展现出其娟媚韶秀的风姿。" },
    14: { en: "Li Yulin is present during a playful poetry matching game among the guests.", zh: "众人在聚会中对句时，李玉林在场参与。" },
    17: { en: "Li Yulin partakes in the lively banter and conversations among the scholars and performers.", zh: "李玉林参与了名士与名伶间的一场热闹谈笑。" },
    19: { en: "Li Yulin joins a gathering where the guests order food and drinks, sharing jokes.", zh: "李玉林参加聚会，众人点菜饮酒、说笑取乐。" },
    24: { en: "Li Yulin and Gui Bao arrive at Wang Xun's place, joining the conversation about recent events.", zh: "李玉林与桂保来到王恂处，加入众人的谈话。" },
    25: { en: "Li Yulin and Gui Bao discuss the rehearsals for the new play at Yi Garden.", zh: "李玉林与桂保谈论怡园排练新戏的情况。" },
    30: { en: "Li Yulin performs alongside other famous actors during a grand gathering with exquisite food and wine.", zh: "五大名班合演，李玉林与其他名伶同台献艺，宾客饮酒作乐。" },
    31: { en: "Hua Gongzi invites Li Yulin and other performers to showcase their talents in poetry, painting, or music.", zh: "华公子邀请李玉林等名伶在戏曲之外展示诗词书画等才艺。" },
    32: { en: "Li Yulin's artistic skills are highlighted as the performers take turns displaying their other talents.", zh: "各名伶展示才艺，李玉林也展现了其独特的技艺。" },
    35: { en: "Li Yulin is among the select performers who attend the gathering while others are busy with other engagements.", zh: "李玉林等几位名旦出席聚会，与其他名士共计十二人同乐。" },
    36: { en: "Li Yulin is mentioned as part of the group during discussions about past gatherings and social dynamics.", zh: "在众人讨论过往聚会及社交动态时，李玉林被提及。" },
    37: { en: "Li Yulin is part of the broader narrative as characters recount recent troublesome incidents.", zh: "角色们讲述近来的波折与冲突时，李玉林在背景中有所参与。" },
    43: { en: "Li Yulin is involved in discussions with Su Heifang and others regarding plans and strategies.", zh: "李玉林与苏蕙芳等人商议对策与计划。" },
    45: { en: "Li Yulin attends the Daoist ceremony, gathering early with other scholars and performers.", zh: "李玉林与其他名士、名伶一早到达，参加设坛扶乩的聚会。" },
    48: { en: "Li Yulin and other performers join the scholars to see off Qu Daoweng at Huanghua Pavilion.", zh: "李玉林与其他名伶随众名士在皇华亭为屈道翁送行。" },
    53: { en: "Li Yulin joins a discussion with Su Heifang and others about pooling resources to open an antique shop.", zh: "李玉林参与苏蕙芳等人的商议，计划共同出资开办古董铺。" },
    60: { en: "Li Yulin's name is included in the lots drawn for writing biographies of the twelve famous performers.", zh: "众名士抓阄为十二金钗作传，李玉林亦在作传之列。" }
};

let output = `// Character: 李玉林 Lǐ Yùlín
// Chapter Appearances: ${chapters.join(', ')}
import type { SceneBullet } from './types';

export const char_27Appearances: Record<number, SceneBullet[]> = {
`;
for (let c of chapters) {
    if (char27Info[c]) {
        output += `  "${c}": [
    {
      en: "${char27Info[c].en}",
      zh: "${char27Info[c].zh}"
    }
  ],\n`;
    } else {
        output += `  "${c}": [],\n`;
    }
}
output += `};
`;
fs.writeFileSync('src/characterAppearances/char-27.ts', output);
