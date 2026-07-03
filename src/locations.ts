export type LocationType =
  | 'place'
  | 'garden'
  | 'site'
  | 'landscape';

export interface NovelLocation {
  id: string;
  name: string;
  nameEn: string;
  type: LocationType;
  typeZh: string;
  searchTokens: string[];
}

export const locationTypeOrder: LocationType[] = [
  'site',
  'garden',
  'place',
  'landscape',
];

export const locationTypeLabels: Record<LocationType, { en: string; zh: string }> = {
  place: { en: 'Places & Origins', zh: '地方与籍贯' },
  garden: { en: 'Gardens & Garden Sites', zh: '园林' },
  site: { en: 'Houses, Streets & Venues', zh: '府邸街巷与场馆' },
  landscape: { en: 'Rivers, Mountains & Landmarks', zh: '山水名胜' },
};

export const novelLocations: NovelLocation[] = [
  // —— Places & origins (provinces, cities, counties, broad regions) ——
  { id: 'region-jiangnan', name: '江南', nameEn: 'Jiangnan', type: 'place', typeZh: '地方', searchTokens: ['江南'] },
  { id: 'region-capital', name: '京师 / 京城', nameEn: 'Capital (Beijing)', type: 'place', typeZh: '地方', searchTokens: ['京师', '京城', '京中', '都中'] },
  { id: 'region-south-city', name: '南城', nameEn: 'Southern City (Beijing)', type: 'place', typeZh: '地方', searchTokens: ['南城'] },
  { id: 'province-zhejiang', name: '浙江', nameEn: 'Zhejiang', type: 'place', typeZh: '地方', searchTokens: ['浙江'] },
  { id: 'province-huguang', name: '湖广', nameEn: 'Huguang', type: 'place', typeZh: '地方', searchTokens: ['湖广'] },
  { id: 'province-guangdong', name: '广东', nameEn: 'Guangdong', type: 'place', typeZh: '地方', searchTokens: ['广东'] },
  { id: 'province-guangxi', name: '广西', nameEn: 'Guangxi', type: 'place', typeZh: '地方', searchTokens: ['广西'] },
  { id: 'province-jiangxi', name: '江西', nameEn: 'Jiangxi', type: 'place', typeZh: '地方', searchTokens: ['江西'] },
  { id: 'province-sichuan', name: '四川', nameEn: 'Sichuan', type: 'place', typeZh: '地方', searchTokens: ['四川'] },
  { id: 'province-henan', name: '河南', nameEn: 'Henan', type: 'place', typeZh: '地方', searchTokens: ['河南'] },
  { id: 'province-zhili', name: '直隶', nameEn: 'Zhili', type: 'place', typeZh: '地方', searchTokens: ['直隶'] },
  { id: 'province-guizhou', name: '贵州', nameEn: 'Guizhou', type: 'place', typeZh: '地方', searchTokens: ['贵州'] },
  { id: 'city-beijing', name: '北京', nameEn: 'Beijing', type: 'place', typeZh: '地方', searchTokens: ['北京'] },
  { id: 'city-jinling', name: '金陵', nameEn: 'Jinling', type: 'place', typeZh: '地方', searchTokens: ['金陵'] },
  { id: 'city-nanjing', name: '南京', nameEn: 'Nanjing', type: 'place', typeZh: '地方', searchTokens: ['南京'] },
  { id: 'city-jiangning', name: '江宁', nameEn: 'Jiangning', type: 'place', typeZh: '地方', searchTokens: ['江宁'] },
  { id: 'city-yangzhou', name: '扬州', nameEn: 'Yangzhou', type: 'place', typeZh: '地方', searchTokens: ['扬州'] },
  { id: 'city-suzhou', name: '苏州', nameEn: 'Suzhou', type: 'place', typeZh: '地方', searchTokens: ['苏州'] },
  { id: 'city-tianjin', name: '天津', nameEn: 'Tianjin', type: 'place', typeZh: '地方', searchTokens: ['天津'] },
  { id: 'city-nanchang', name: '南昌', nameEn: 'Nanchang', type: 'place', typeZh: '地方', searchTokens: ['南昌'] },
  { id: 'city-hangzhou', name: '杭州', nameEn: 'Hangzhou', type: 'place', typeZh: '地方', searchTokens: ['杭州'] },
  { id: 'city-changzhou', name: '常州', nameEn: 'Changzhou', type: 'place', typeZh: '地方', searchTokens: ['常州'] },
  { id: 'city-jiujiang', name: '九江', nameEn: 'Jiujiang', type: 'place', typeZh: '地方', searchTokens: ['九江'] },
  { id: 'city-yizheng', name: '仪征', nameEn: 'Yizheng', type: 'place', typeZh: '地方', searchTokens: ['仪征'] },
  { id: 'county-shanyin', name: '山阴', nameEn: 'Shanyin', type: 'place', typeZh: '地方', searchTokens: ['山阴'] },
  { id: 'county-hanyang', name: '汉阳', nameEn: 'Hanyang', type: 'place', typeZh: '地方', searchTokens: ['汉阳'] },
  { id: 'county-xiangtan', name: '湘潭', nameEn: 'Xiangtan', type: 'place', typeZh: '地方', searchTokens: ['湘潭'] },
  { id: 'county-zhengyang', name: '正阳', nameEn: 'Zhengyang', type: 'place', typeZh: '地方', searchTokens: ['正阳'] },

  // —— Gardens & spots within them (mostly Beijing) ——
  { id: 'garden-yiyuan', name: '怡园', nameEn: 'Yiyuan / Garden of Contentment', type: 'garden', typeZh: '园林', searchTokens: ['怡园'] },
  { id: 'garden-jinchun', name: '锦春园', nameEn: 'Jinchun Garden', type: 'garden', typeZh: '园林', searchTokens: ['锦春园'] },
  { id: 'garden-west', name: '西园', nameEn: 'West Garden (Hua mansion)', type: 'garden', typeZh: '园林', searchTokens: ['西园'] },
  { id: 'garden-east', name: '东园', nameEn: 'East Garden', type: 'garden', typeZh: '园林', searchTokens: ['东园'] },
  { id: 'garden-duxiang', name: '度香园', nameEn: 'Duxiang Garden', type: 'garden', typeZh: '园林', searchTokens: ['度香园'] },
  { id: 'garden-liang', name: '梁园', nameEn: 'Liang Garden', type: 'garden', typeZh: '园林', searchTokens: ['梁园'] },
  { id: 'garden-sanle', name: '三乐园', nameEn: 'Three Joys Garden', type: 'garden', typeZh: '园林', searchTokens: ['三乐园'] },
  { id: 'garden-derelict', name: '废园', nameEn: 'Derelict Garden', type: 'garden', typeZh: '园林', searchTokens: ['废园'] },
  { id: 'garden-little-rainbow', name: '小虹园', nameEn: 'Little Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['小虹园'] },
  { id: 'garden-great-rainbow', name: '大虹园', nameEn: 'Great Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['大虹园'] },
  { id: 'garden-rainbow', name: '虹园', nameEn: 'Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['虹园'] },
  { id: 'garden-qifeng', name: '起凤园', nameEn: 'Qifeng Garden', type: 'garden', typeZh: '园林', searchTokens: ['起凤园'] },
  { id: 'feature-meian', name: '梅崦', nameEn: 'Plum Ravine (Yiyuan)', type: 'garden', typeZh: '园林', searchTokens: ['梅崦'] },
  { id: 'feature-hanwanlou', name: '含万楼', nameEn: 'Tower of Ten Thousand', type: 'garden', typeZh: '园林', searchTokens: ['含万楼'] },
  { id: 'feature-cishulou', name: '赐书楼', nameEn: 'Tower of Gifted Books', type: 'garden', typeZh: '园林', searchTokens: ['赐书楼'] },
  { id: 'feature-liuxian', name: '留仙院', nameEn: 'Fairy-Detaining Courtyard', type: 'garden', typeZh: '园林', searchTokens: ['留仙院'] },
  { id: 'feature-haitang', name: '海棠春圃', nameEn: 'Crabapple Spring Garden', type: 'garden', typeZh: '园林', searchTokens: ['海棠春圃', '海棠圃'] },
  { id: 'feature-hongcha', name: '红茶仙馆', nameEn: 'Red Tea Immortal Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['红茶仙馆'] },
  { id: 'feature-ruizhu', name: '蕊珠仙府', nameEn: 'Palace of the Petal Immortal', type: 'garden', typeZh: '园林', searchTokens: ['蕊珠仙府'] },
  { id: 'feature-qingliang', name: '清凉诗境', nameEn: 'Cool Poetic Realm', type: 'garden', typeZh: '园林', searchTokens: ['清凉诗境'] },
  { id: 'feature-jicuixuan', name: '积翠轩', nameEn: 'Accumulated-Green Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['积翠轩'] },
  { id: 'feature-mudan', name: '牡丹香国', nameEn: 'Kingdom of Peony Fragrance', type: 'garden', typeZh: '园林', searchTokens: ['牡丹香国'] },
  { id: 'feature-mudantai', name: '牡丹台', nameEn: 'Peony Terrace', type: 'garden', typeZh: '园林', searchTokens: ['牡丹台'] },
  { id: 'feature-shaoyao', name: '芍药圃', nameEn: 'Peony Garden', type: 'garden', typeZh: '园林', searchTokens: ['芍药圃'] },
  { id: 'feature-lihuayuan', name: '梨花院', nameEn: 'Pear-Blossom Court', type: 'garden', typeZh: '园林', searchTokens: ['梨花院', '梨院'] },
  { id: 'feature-liuqing', name: '留青精舍', nameEn: 'Quiet-Green Lodge', type: 'garden', typeZh: '园林', searchTokens: ['留青精舍', '留青舍'] },
  { id: 'feature-xiaopingshan', name: '小平山', nameEn: 'Little Level Mountain (West Garden)', type: 'garden', typeZh: '园林', searchTokens: ['小平山'] },
  { id: 'feature-dongfeng', name: '东风昨夜楼', nameEn: 'Last-Night East Wind Tower', type: 'garden', typeZh: '园林', searchTokens: ['东风昨夜楼'] },
  { id: 'feature-jiuxianglou', name: '九香楼', nameEn: 'Nine-Fragrance Tower', type: 'garden', typeZh: '园林', searchTokens: ['九香楼'] },
  { id: 'feature-cinnamon', name: '桂花厅', nameEn: 'Cassia Hall', type: 'garden', typeZh: '园林', searchTokens: ['桂花厅'] },
  { id: 'water-jade-belt', name: '玉带河', nameEn: 'Jade Belt River (Yiyuan)', type: 'garden', typeZh: '园林', searchTokens: ['玉带河'] },
  { id: 'water-lake', name: '湖上 / 湖中', nameEn: 'Garden lake scenes', type: 'garden', typeZh: '园林', searchTokens: ['湖上', '湖中'] },

  // —— Beijing houses, streets, venues & temples ——
  { id: 'residence-mei', name: '梅宅', nameEn: 'Mei residence', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['梅宅', '梅府', '梅家'] },
  { id: 'residence-hua', name: '华府', nameEn: 'Hua mansion', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['华府', '华公府', '华公子府'] },
  { id: 'residence-xu', name: '徐府', nameEn: 'Xu residence', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['徐府'] },
  { id: 'residence-wang', name: '王家', nameEn: 'Wang household', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['王家', '王宅'] },
  { id: 'residence-yan', name: '颜家', nameEn: 'Yan household', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['颜家'] },
  { id: 'residence-sun', name: '孙家', nameEn: 'Sun household', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['孙家', '孙宅'] },
  { id: 'street-mingke', name: '鸣珂里', nameEn: 'Mingke Lane', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['鸣珂里'] },
  { id: 'street-nanxiao', name: '南小街', nameEn: 'South Small Street', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['南小街'] },
  { id: 'street-xiawazi', name: '下洼子', nameEn: 'Xiawazi', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['下洼子'] },
  { id: 'street-east-garden-quarter', name: '东园土窑子', nameEn: 'East Garden brothel quarter', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['东园土窑子', '土窑子'] },
  { id: 'street-fangli', name: '坊里', nameEn: 'The quarter', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['坊里'] },
  { id: 'venue-tianxianglou', name: '天香楼', nameEn: 'Tianxiang Tower', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['天香楼'] },
  { id: 'venue-chunyang', name: '春阳馆', nameEn: 'Chunyang House', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['春阳馆'] },
  { id: 'venue-gusu', name: '姑苏会馆', nameEn: 'Gusu Guild Hall (Beijing)', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['姑苏会馆'] },
  { id: 'venue-hanlin', name: '翰林院', nameEn: 'Hanlin Academy', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['翰林院'] },
  { id: 'venue-liubu', name: '礼部', nameEn: 'Ministry of Rites', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['礼部'] },
  { id: 'venue-fuyin', name: '府尹', nameEn: 'Prefectural Office', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['府尹'] },
  { id: 'temple-hongji', name: '宏济寺 / 鸿济寺', nameEn: 'Hongji Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['宏济寺', '鸿济寺'] },
  { id: 'temple-huguo', name: '护国寺', nameEn: 'Huguo Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['护国寺'] },
  { id: 'temple-shoufo', name: '寿佛寺', nameEn: 'Shoufo Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['寿佛寺'] },
  { id: 'temple-flower', name: '花神庙', nameEn: 'Flower-Deity Shrine', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['花神庙'] },
  { id: 'temple-wenxing', name: '文星祠', nameEn: 'Literary-Star Shrine', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['文星祠'] },

  // —— Rivers, mountains & landmarks (travel scenes & natural sites) ——
  { id: 'site-mochou', name: '莫愁湖', nameEn: 'Mochou Lake (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['莫愁湖'] },
  { id: 'site-pingshan', name: '平山堂', nameEn: 'Pingshan Hall (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['平山堂'] },
  { id: 'site-yanziji', name: '燕子矶', nameEn: 'Swallow Bluff (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['燕子矶'] },
  { id: 'site-rainbow-bridge', name: '虹桥', nameEn: 'Rainbow Bridge (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['虹桥'] },
  { id: 'site-lotus-bridge', name: '莲花桥', nameEn: 'Lotus Bridge (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['莲花桥'] },
  { id: 'site-hanxi-gate', name: '旱西门', nameEn: 'Hanxi Gate (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['旱西门'] },
  { id: 'water-canal', name: '运河', nameEn: 'Grand Canal', type: 'landscape', typeZh: '山水名胜', searchTokens: ['运河'] },
  { id: 'water-yangtze', name: '长江', nameEn: 'Yangtze River', type: 'landscape', typeZh: '山水名胜', searchTokens: ['长江'] },
  { id: 'water-qinhuai', name: '秦淮河', nameEn: 'Qinhuai River', type: 'landscape', typeZh: '山水名胜', searchTokens: ['秦淮河', '秦淮'] },
  { id: 'mountain-phoenix', name: '凤凰山', nameEn: 'Phoenix Mountain (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['凤凰山'] },
  { id: 'mountain-golden', name: '金山', nameEn: 'Jinshan / Golden Mountain', type: 'landscape', typeZh: '山水名胜', searchTokens: ['金山'] },
  { id: 'mountain-beigu', name: '北固山', nameEn: 'Beigu Mountain', type: 'landscape', typeZh: '山水名胜', searchTokens: ['北固山'] },
  { id: 'mountain-ebo', name: '峨嵋山', nameEn: 'Mount Emei', type: 'landscape', typeZh: '山水名胜', searchTokens: ['峨嵋山'] },
  { id: 'mountain-fragrant', name: '香山', nameEn: 'Fragrant Hills (Beijing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['香山'] },
];

export const locationColors: Record<LocationType, string> = {
  place: 'var(--legend-place)',
  garden: 'var(--legend-garden)',
  site: 'var(--legend-site)',
  landscape: 'var(--legend-landscape)',
};
