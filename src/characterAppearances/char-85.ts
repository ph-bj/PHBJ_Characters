// Character: 王大夫 Wáng Dàfū
// Chapter Appearances: 1, 4, 17, 38, 46, 56
import type { SceneBullet } from './types';

export const char_85Appearances: Record<number, SceneBullet[]> = {
  1: [
    {
      en: "The text references scholars and officials (士大夫) treasuring calligraphy; this is a false positive for Doctor Wang.",
      zh: "文本提到士大夫争相珍藏书法作品，这并非指王大夫，为误匹配。"
    }
  ],
  4: [
    {
      en: "Sun Sihui mentions consulting a 'Doctor Wang' (王大夫) to treat his illness, though this refers to a metaphorical doctor in his scholarly jesting.",
      zh: "孙嗣徽提到请了一位“王大夫”来治病，但在他满口文言的玩笑中，这只是一个比喻性质的医生。"
    }
  ],
  17: [
    {
      en: "Wang Xun mentions an 'officer' (大夫) in his comparison, which is a false positive matching the generic title, not Doctor Wang.",
      zh: "王恂在比喻中提到了“大夫”，这是一个由于通用称呼造成的误匹配，并非王大夫。"
    }
  ],
  38: [
    {
      en: "The text describes Mr. Qu as a descendant of the 'Sanlü Dafu' (三闾大夫, referring to Qu Yuan); this is a generic title match and not Doctor Wang.",
      zh: "文中提到屈公是“三闾大夫”的后裔，这是指屈原的官职，并非王大夫。"
    }
  ],
  46: [
    {
      en: "The text refers to Yan Dafu (晏大夫) in a historical or literary allusion; this is a generic title match and not Doctor Wang.",
      zh: "文本在一处典故中提到了晏大夫，这是一个由于通用称呼造成的误匹配，并非王大夫。"
    }
  ],
  56: [
    {
      en: "Liu Xi informs Qinxian that Doctor Wang has traveled to Yizheng County and will be away for a few days, prompting him to fetch Doctor Li instead to treat Daoweng.",
      zh: "刘喜告诉琴仙，王大夫今天去了仪征县，要耽搁几天才回，所以他只好去请李大夫来给道翁看病。"
    }
  ]
};
