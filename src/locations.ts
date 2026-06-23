export type LocationType =
  | 'region'
  | 'province'
  | 'city'
  | 'county'
  | 'residence'
  | 'garden'
  | 'gardenFeature'
  | 'temple'
  | 'scenicSite'
  | 'waterway'
  | 'mountain'
  | 'street'
  | 'venue';

export interface NovelLocation {
  id: string;
  name: string;
  nameEn: string;
  type: LocationType;
  typeZh: string;
  searchTokens: string[];
}

export const locationTypeOrder: LocationType[] = [
  'region',
  'province',
  'city',
  'county',
  'residence',
  'garden',
  'gardenFeature',
  'temple',
  'scenicSite',
  'waterway',
  'mountain',
  'street',
  'venue',
];

export const locationTypeLabels: Record<LocationType, { en: string; zh: string }> = {
  region: { en: 'Regions', zh: '地域' },
  province: { en: 'Provinces & Circuits', zh: '省域与辖区' },
  city: { en: 'Cities & Towns', zh: '城市' },
  county: { en: 'Counties & Native Places', zh: '县邑与籍贯' },
  residence: { en: 'Residences & Households', zh: '宅第与府邸' },
  garden: { en: 'Gardens', zh: '园林' },
  gardenFeature: { en: 'Garden Sites', zh: '园中胜景' },
  temple: { en: 'Temples & Shrines', zh: '寺观祠庙' },
  scenicSite: { en: 'Scenic Sites', zh: '名胜古迹' },
  waterway: { en: 'Rivers, Lakes & Canals', zh: '江河湖渠' },
  mountain: { en: 'Mountains', zh: '山岳' },
  street: { en: 'Streets & Quarters', zh: '街巷坊里' },
  venue: { en: 'Venues & Institutions', zh: '场馆与机构' },
};

export const novelLocations: NovelLocation[] = [
  { id: 'region-jiangnan', name: '江南', nameEn: 'Jiangnan', type: 'region', typeZh: '地域', searchTokens: ['江南'] },
  { id: 'region-capital', name: '京师 / 京城', nameEn: 'Capital / Beijing', type: 'region', typeZh: '地域', searchTokens: ['京师', '京城', '京中', '都中'] },
  { id: 'region-south-city', name: '南城', nameEn: 'Southern City', type: 'region', typeZh: '地域', searchTokens: ['南城'] },
  { id: 'region-south', name: '南边', nameEn: 'The South', type: 'region', typeZh: '地域', searchTokens: ['南边'] },

  { id: 'province-zhejiang', name: '浙江', nameEn: 'Zhejiang', type: 'province', typeZh: '省域', searchTokens: ['浙江'] },
  { id: 'province-huguang', name: '湖广', nameEn: 'Huguang', type: 'province', typeZh: '省域', searchTokens: ['湖广'] },
  { id: 'province-guangdong', name: '广东', nameEn: 'Guangdong', type: 'province', typeZh: '省域', searchTokens: ['广东'] },
  { id: 'province-guangxi', name: '广西', nameEn: 'Guangxi', type: 'province', typeZh: '省域', searchTokens: ['广西'] },
  { id: 'province-jiangxi', name: '江西', nameEn: 'Jiangxi', type: 'province', typeZh: '省域', searchTokens: ['江西'] },
  { id: 'province-sichuan', name: '四川', nameEn: 'Sichuan', type: 'province', typeZh: '省域', searchTokens: ['四川'] },
  { id: 'province-henan', name: '河南', nameEn: 'Henan', type: 'province', typeZh: '省域', searchTokens: ['河南'] },
  { id: 'province-zhili', name: '直隶', nameEn: 'Zhili', type: 'province', typeZh: '省域', searchTokens: ['直隶'] },
  { id: 'province-guizhou', name: '贵州', nameEn: 'Guizhou', type: 'province', typeZh: '省域', searchTokens: ['贵州'] },

  { id: 'city-beijing', name: '北京', nameEn: 'Beijing', type: 'city', typeZh: '城市', searchTokens: ['北京'] },
  { id: 'city-jinling', name: '金陵', nameEn: 'Jinling', type: 'city', typeZh: '城市', searchTokens: ['金陵'] },
  { id: 'city-nanjing', name: '南京', nameEn: 'Nanjing', type: 'city', typeZh: '城市', searchTokens: ['南京'] },
  { id: 'city-jiangning', name: '江宁', nameEn: 'Jiangning', type: 'city', typeZh: '城市', searchTokens: ['江宁'] },
  { id: 'city-yangzhou', name: '扬州', nameEn: 'Yangzhou', type: 'city', typeZh: '城市', searchTokens: ['扬州'] },
  { id: 'city-suzhou', name: '苏州', nameEn: 'Suzhou', type: 'city', typeZh: '城市', searchTokens: ['苏州'] },
  { id: 'city-tianjin', name: '天津', nameEn: 'Tianjin', type: 'city', typeZh: '城市', searchTokens: ['天津'] },
  { id: 'city-nanchang', name: '南昌', nameEn: 'Nanchang', type: 'city', typeZh: '城市', searchTokens: ['南昌'] },
  { id: 'city-hangzhou', name: '杭州', nameEn: 'Hangzhou', type: 'city', typeZh: '城市', searchTokens: ['杭州'] },
  { id: 'city-changzhou', name: '常州', nameEn: 'Changzhou', type: 'city', typeZh: '城市', searchTokens: ['常州'] },
  { id: 'city-jiujiang', name: '九江', nameEn: 'Jiujiang', type: 'city', typeZh: '城市', searchTokens: ['九江'] },
  { id: 'city-yizheng', name: '仪征', nameEn: 'Yizheng', type: 'city', typeZh: '城市', searchTokens: ['仪征'] },

  { id: 'county-shanyin', name: '山阴', nameEn: 'Shanyin', type: 'county', typeZh: '县邑', searchTokens: ['山阴'] },
  { id: 'county-hanyang', name: '汉阳', nameEn: 'Hanyang', type: 'county', typeZh: '县邑', searchTokens: ['汉阳'] },
  { id: 'county-xiangtan', name: '湘潭', nameEn: 'Xiangtan', type: 'county', typeZh: '县邑', searchTokens: ['湘潭'] },
  { id: 'county-zhengyang', name: '正阳', nameEn: 'Zhengyang', type: 'county', typeZh: '县邑', searchTokens: ['正阳'] },

  { id: 'residence-mei', name: '梅宅', nameEn: 'Mei residence', type: 'residence', typeZh: '宅第', searchTokens: ['梅宅', '梅府', '梅家'] },
  { id: 'residence-hua', name: '华府', nameEn: 'Hua mansion', type: 'residence', typeZh: '宅第', searchTokens: ['华府', '华公府', '华公子府'] },
  { id: 'residence-xu', name: '徐府', nameEn: 'Xu residence', type: 'residence', typeZh: '宅第', searchTokens: ['徐府'] },
  { id: 'residence-wang', name: '王家', nameEn: 'Wang household', type: 'residence', typeZh: '宅第', searchTokens: ['王家', '王宅'] },
  { id: 'residence-yan', name: '颜家', nameEn: 'Yan household', type: 'residence', typeZh: '宅第', searchTokens: ['颜家'] },
  { id: 'residence-sun', name: '孙家', nameEn: 'Sun household', type: 'residence', typeZh: '宅第', searchTokens: ['孙家', '孙宅'] },

  { id: 'garden-yiyuan', name: '怡园', nameEn: 'Yiyuan / Garden of Contentment', type: 'garden', typeZh: '园林', searchTokens: ['怡园'] },
  { id: 'garden-jinchun', name: '锦春园', nameEn: 'Jinchun Garden', type: 'garden', typeZh: '园林', searchTokens: ['锦春园'] },
  { id: 'garden-west', name: '西园', nameEn: 'West Garden', type: 'garden', typeZh: '园林', searchTokens: ['西园'] },
  { id: 'garden-east', name: '东园', nameEn: 'East Garden', type: 'garden', typeZh: '园林', searchTokens: ['东园'] },
  { id: 'garden-duxiang', name: '度香园', nameEn: 'Duxiang Garden', type: 'garden', typeZh: '园林', searchTokens: ['度香园'] },
  { id: 'garden-liang', name: '梁园', nameEn: 'Liang Garden', type: 'garden', typeZh: '园林', searchTokens: ['梁园'] },
  { id: 'garden-sanle', name: '三乐园', nameEn: 'Three Joys Garden', type: 'garden', typeZh: '园林', searchTokens: ['三乐园'] },
  { id: 'garden-derelict', name: '废园', nameEn: 'Derelict Garden', type: 'garden', typeZh: '园林', searchTokens: ['废园'] },
  { id: 'garden-little-rainbow', name: '小虹园', nameEn: 'Little Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['小虹园'] },
  { id: 'garden-great-rainbow', name: '大虹园', nameEn: 'Great Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['大虹园'] },
  { id: 'garden-rainbow', name: '虹园', nameEn: 'Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['虹园'] },
  { id: 'garden-qifeng', name: '起凤园', nameEn: 'Qifeng Garden', type: 'garden', typeZh: '园林', searchTokens: ['起凤园'] },

  { id: 'feature-meian', name: '梅崦', nameEn: 'Plum Ravine', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['梅崦'] },
  { id: 'feature-hanwanlou', name: '含万楼', nameEn: 'Tower of Ten Thousand', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['含万楼'] },
  { id: 'feature-cishulou', name: '赐书楼', nameEn: 'Tower of Gifted Books', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['赐书楼'] },
  { id: 'feature-liuxian', name: '留仙院', nameEn: 'Fairy-Detaining Courtyard', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['留仙院'] },
  { id: 'feature-haitang', name: '海棠春圃', nameEn: 'Crabapple Spring Garden', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['海棠春圃', '海棠圃'] },
  { id: 'feature-hongcha', name: '红茶仙馆', nameEn: 'Red Tea Immortal Pavilion', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['红茶仙馆'] },
  { id: 'feature-ruizhu', name: '蕊珠仙府', nameEn: 'Palace of the Petal Immortal', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['蕊珠仙府'] },
  { id: 'feature-qingliang', name: '清凉诗境', nameEn: 'Cool Poetic Realm', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['清凉诗境'] },
  { id: 'feature-jicuixuan', name: '积翠轩', nameEn: 'Accumulated-Green Pavilion', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['积翠轩'] },
  { id: 'feature-mudan', name: '牡丹香国', nameEn: 'Kingdom of Peony Fragrance', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['牡丹香国'] },
  { id: 'feature-mudantai', name: '牡丹台', nameEn: 'Peony Terrace', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['牡丹台'] },
  { id: 'feature-shaoyao', name: '芍药圃', nameEn: 'Peony Garden', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['芍药圃'] },
  { id: 'feature-lihuayuan', name: '梨花院', nameEn: 'Pear-Blossom Court', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['梨花院', '梨院'] },
  { id: 'feature-liuqing', name: '留青精舍', nameEn: 'Quiet-Green Lodge', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['留青精舍', '留青舍'] },
  { id: 'feature-xiaopingshan', name: '小平山', nameEn: 'Little Level Mountain', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['小平山'] },
  { id: 'feature-dongfeng', name: '东风昨夜楼', nameEn: 'Last-Night East Wind Tower', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['东风昨夜楼'] },
  { id: 'feature-jiuxianglou', name: '九香楼', nameEn: 'Nine-Fragrance Tower', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['九香楼'] },
  { id: 'feature-cinnamon', name: '桂花厅', nameEn: 'Cassia Hall', type: 'gardenFeature', typeZh: '园中胜景', searchTokens: ['桂花厅'] },

  { id: 'temple-hongji', name: '宏济寺 / 鸿济寺', nameEn: 'Hongji Temple', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['宏济寺', '鸿济寺'] },
  { id: 'temple-huguo', name: '护国寺', nameEn: 'Huguo Temple', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['护国寺'] },
  { id: 'temple-shoufo', name: '寿佛寺', nameEn: 'Shoufo Temple', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['寿佛寺'] },
  { id: 'temple-flower', name: '花神庙', nameEn: 'Flower-Deity Shrine', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['花神庙'] },
  { id: 'temple-qu', name: '屈祠', nameEn: 'Qu Shrine', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['屈祠'] },
  { id: 'temple-wenxing', name: '文星祠', nameEn: 'Literary-Star Shrine', type: 'temple', typeZh: '寺观祠庙', searchTokens: ['文星祠'] },

  { id: 'site-mochou', name: '莫愁湖', nameEn: 'Mochou Lake', type: 'scenicSite', typeZh: '名胜', searchTokens: ['莫愁湖'] },
  { id: 'site-pingshan', name: '平山堂', nameEn: 'Pingshan Hall', type: 'scenicSite', typeZh: '名胜', searchTokens: ['平山堂'] },
  { id: 'site-yanziji', name: '燕子矶', nameEn: 'Swallow Bluff', type: 'scenicSite', typeZh: '名胜', searchTokens: ['燕子矶'] },
  { id: 'site-rainbow-bridge', name: '虹桥', nameEn: 'Rainbow Bridge', type: 'scenicSite', typeZh: '名胜', searchTokens: ['虹桥'] },
  { id: 'site-lotus-bridge', name: '莲花桥', nameEn: 'Lotus Bridge', type: 'scenicSite', typeZh: '名胜', searchTokens: ['莲花桥'] },
  { id: 'site-hanxi-gate', name: '汉西门', nameEn: 'Hanxi Gate', type: 'scenicSite', typeZh: '名胜', searchTokens: ['汉西门'] },

  { id: 'water-canal', name: '运河', nameEn: 'Grand Canal', type: 'waterway', typeZh: '江河湖渠', searchTokens: ['运河'] },
  { id: 'water-yangtze', name: '长江', nameEn: 'Yangtze River', type: 'waterway', typeZh: '江河湖渠', searchTokens: ['长江'] },
  { id: 'water-qinhuai', name: '秦淮河', nameEn: 'Qinhuai River', type: 'waterway', typeZh: '江河湖渠', searchTokens: ['秦淮河', '秦淮'] },
  { id: 'water-jade-belt', name: '玉带河', nameEn: 'Jade Belt River', type: 'waterway', typeZh: '江河湖渠', searchTokens: ['玉带河'] },
  { id: 'water-lake', name: '湖上 / 湖中', nameEn: 'Garden lake scenes', type: 'waterway', typeZh: '江河湖渠', searchTokens: ['湖上', '湖中'] },

  { id: 'mountain-phoenix', name: '凤凰山', nameEn: 'Phoenix Mountain', type: 'mountain', typeZh: '山岳', searchTokens: ['凤凰山'] },
  { id: 'mountain-golden', name: '金山', nameEn: 'Jinshan / Golden Mountain', type: 'mountain', typeZh: '山岳', searchTokens: ['金山'] },
  { id: 'mountain-liang', name: '梁山', nameEn: 'Liang Mountain', type: 'mountain', typeZh: '山岳', searchTokens: ['梁山'] },
  { id: 'mountain-beigu', name: '北固山', nameEn: 'Beigu Mountain', type: 'mountain', typeZh: '山岳', searchTokens: ['北固山'] },
  { id: 'mountain-ebo', name: '峨嵋山', nameEn: 'Mount Emei', type: 'mountain', typeZh: '山岳', searchTokens: ['峨嵋山'] },
  { id: 'mountain-fragrant', name: '香山', nameEn: 'Fragrant Hills', type: 'mountain', typeZh: '山岳', searchTokens: ['香山'] },

  { id: 'street-mingke', name: '鸣珂里', nameEn: 'Mingke Lane', type: 'street', typeZh: '街巷坊里', searchTokens: ['鸣珂里'] },
  { id: 'street-nanxiao', name: '南小街', nameEn: 'South Small Street', type: 'street', typeZh: '街巷坊里', searchTokens: ['南小街'] },
  { id: 'street-xiawazi', name: '下洼子', nameEn: 'Xiawazi', type: 'street', typeZh: '街巷坊里', searchTokens: ['下洼子'] },
  { id: 'street-east-garden-quarter', name: '东园土窑子', nameEn: 'East Garden brothel quarter', type: 'street', typeZh: '街巷坊里', searchTokens: ['土窑子'] },
  { id: 'street-fangli', name: '坊里', nameEn: 'The quarter', type: 'street', typeZh: '街巷坊里', searchTokens: ['坊里'] },

  { id: 'venue-tianxianglou', name: '天香楼', nameEn: 'Tianxiang Tower', type: 'venue', typeZh: '场馆', searchTokens: ['天香楼'] },
  { id: 'venue-chunyang', name: '春阳馆', nameEn: 'Chunyang House', type: 'venue', typeZh: '场馆', searchTokens: ['春阳馆'] },
  { id: 'venue-gusu', name: '姑苏会馆', nameEn: 'Gusu Guild Hall', type: 'venue', typeZh: '场馆', searchTokens: ['姑苏会馆'] },
  { id: 'venue-hanlin', name: '翰林院', nameEn: 'Hanlin Academy', type: 'venue', typeZh: '场馆', searchTokens: ['翰林院'] },
  { id: 'venue-liubu', name: '礼部', nameEn: 'Ministry of Rites', type: 'venue', typeZh: '场馆', searchTokens: ['礼部'] },
  { id: 'venue-fuyin', name: '府尹', nameEn: 'Prefectural Office', type: 'venue', typeZh: '场馆', searchTokens: ['府尹'] },
];


export const locationColors: Record<LocationType, string> = {
  region: "#1f77b4",
  province: "#ff7f0e",
  city: "#2ca02c",
  county: "#d62728",
  residence: "#9467bd",
  garden: "#8c564b",
  gardenFeature: "#e377c2",
  temple: "#7f7f7f",
  scenicSite: "#bcbd22",
  waterway: "#17becf",
  mountain: "#393b79",
  street: "#8c6d31",
  venue: "#843c39"
};
