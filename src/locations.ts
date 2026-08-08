export type LocationType =
  | 'place'
  | 'garden'
  | 'site'
  | 'landscape'
  | 'allusion';

export interface NovelLocation {
  id: string;
  name: string;
  nameEn: string;
  type: LocationType;
  typeZh: string;
  searchTokens: string[];
  aliasesEn?: string[];
}

export const locationTypeOrder: LocationType[] = [
  'site',
  'garden',
  'place',
  'landscape',
  'allusion',
];

export const locationTypeLabels: Record<LocationType, { en: string; zh: string }> = {
  place: { en: 'Places & Origins', zh: '地方与籍贯' },
  garden: { en: 'Gardens & Garden Sites', zh: '园林' },
  site: { en: 'Houses, Streets & Venues', zh: '府邸街巷与场馆' },
  landscape: { en: 'Rivers, Mountains & Landmarks', zh: '山水名胜' },
  allusion: { en: 'Literary & Imagined Geography', zh: '典故与想象地理' },
};

export const novelLocations: NovelLocation[] = [
  // —— Places & origins (provinces, cities, counties, broad regions) ——
  { id: 'region-jiangnan', name: '江南', nameEn: 'Jiangnan', type: 'place', typeZh: '地方', searchTokens: ['江南'] },
  { id: 'region-capital', name: '京师', nameEn: 'Capital (Beijing)', type: 'place', typeZh: '地方', searchTokens: ['京城', '京师', '京中', '都中'], aliasesEn: ['Capital', 'Capital City'] },
  { id: 'region-south-city', name: '南城', nameEn: 'Southern City (Beijing)', type: 'place', typeZh: '地方', searchTokens: ['南城'], aliasesEn: ['Southern City'] },
  { id: 'province-zhejiang', name: '浙江', nameEn: 'Zhejiang', type: 'place', typeZh: '地方', searchTokens: ['浙江'] },
  { id: 'province-huguang', name: '湖广', nameEn: 'Huguang', type: 'place', typeZh: '地方', searchTokens: ['湖广'] },
  { id: 'province-guangdong', name: '广东', nameEn: 'Guangdong', type: 'place', typeZh: '地方', searchTokens: ['广东'] },
  { id: 'province-guangxi', name: '广西', nameEn: 'Guangxi', type: 'place', typeZh: '地方', searchTokens: ['广西'] },
  { id: 'province-jiangxi', name: '江西', nameEn: 'Jiangxi', type: 'place', typeZh: '地方', searchTokens: ['江西'] },
  { id: 'province-sichuan', name: '四川', nameEn: 'Sichuan', type: 'place', typeZh: '地方', searchTokens: ['四川'] },
  { id: 'province-henan', name: '河南', nameEn: 'Henan', type: 'place', typeZh: '地方', searchTokens: ['河南'] },
  { id: 'province-zhili', name: '直隶', nameEn: 'Zhili', type: 'place', typeZh: '地方', searchTokens: ['直隶'] },
  { id: 'province-guizhou', name: '贵州', nameEn: 'Guizhou', type: 'place', typeZh: '地方', searchTokens: ['贵州'] },
  { id: 'city-beijing', name: '北京', nameEn: 'Beijing', type: 'place', typeZh: '地方', searchTokens: ['京城', '京师', '京中', '都中', '北京'], aliasesEn: ['Beijing', 'Capital'] },
  { id: 'city-jinling', name: '金陵', nameEn: 'Jinling', type: 'place', typeZh: '地方', searchTokens: ['金陵', '南京', '江宁'] },
  { id: 'city-nanjing', name: '南京', nameEn: 'Nanjing', type: 'place', typeZh: '地方', searchTokens: ['南京', '金陵', '江宁'] },
  { id: 'city-jiangning', name: '江宁', nameEn: 'Jiangning', type: 'place', typeZh: '地方', searchTokens: ['江宁', '南京', '金陵'] },
  { id: 'city-yangzhou', name: '扬州', nameEn: 'Yangzhou', type: 'place', typeZh: '地方', searchTokens: ['扬州', '广陵', '维扬'], aliasesEn: ['Yangzhou', 'Guangling', 'Weiyang'] },
  { id: 'city-suzhou', name: '苏州', nameEn: 'Suzhou', type: 'place', typeZh: '地方', searchTokens: ['苏州', '姑苏', '吴郡'], aliasesEn: ['Suzhou', 'Gusu'] },
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
  { id: 'province-jiangsu', name: '江苏', nameEn: 'Jiangsu', type: 'place', typeZh: '地方', searchTokens: ['江苏'] },
  { id: 'province-anhui', name: '安徽', nameEn: 'Anhui', type: 'place', typeZh: '地方', searchTokens: ['安徽'] },
  { id: 'province-hubei', name: '湖北', nameEn: 'Hubei', type: 'place', typeZh: '地方', searchTokens: ['湖北'] },
  { id: 'province-hunan', name: '湖南', nameEn: 'Hunan', type: 'place', typeZh: '地方', searchTokens: ['湖南'] },
  { id: 'province-shanxi', name: '山西', nameEn: 'Shanxi', type: 'place', typeZh: '地方', searchTokens: ['山西'] },
  { id: 'province-yunnan', name: '云南', nameEn: 'Yunnan', type: 'place', typeZh: '地方', searchTokens: ['云南'] },
  { id: 'region-lingnan', name: '岭南', nameEn: 'Lingnan', type: 'place', typeZh: '地方', searchTokens: ['岭南'] },
  { id: 'region-northland', name: '北地', nameEn: 'The North', type: 'place', typeZh: '地方', searchTokens: ['北地'] },
  { id: 'city-wuchang', name: '武昌府', nameEn: 'Wuchang Prefecture', type: 'place', typeZh: '地方', searchTokens: ['武昌府', '武昌'] },
  { id: 'city-wuzhou', name: '梧州府', nameEn: 'Wuzhou Prefecture', type: 'place', typeZh: '地方', searchTokens: ['梧州府', '梧州'] },
  { id: 'city-huizhou', name: '徽州', nameEn: 'Huizhou', type: 'place', typeZh: '地方', searchTokens: ['徽州'] },
  { id: 'city-fengyang', name: '凤阳府', nameEn: 'Fengyang Prefecture', type: 'place', typeZh: '地方', searchTokens: ['凤阳府', '凤阳'] },
  { id: 'city-jian', name: '吉安府', nameEn: "Ji'an Prefecture", type: 'place', typeZh: '地方', searchTokens: ['吉安府', '吉安'] },
  { id: 'city-baoding', name: '保定府', nameEn: 'Baoding Prefecture', type: 'place', typeZh: '地方', searchTokens: ['保定府', '保定'] },
  { id: 'city-jining', name: '济宁州', nameEn: 'Jining Prefecture', type: 'place', typeZh: '地方', searchTokens: ['济宁州', '济宁'] },
  { id: 'city-zhenjiang', name: '镇江', nameEn: 'Zhenjiang', type: 'place', typeZh: '地方', searchTokens: ['镇江'] },
  { id: 'city-tongzhou', name: '通州', nameEn: 'Tongzhou', type: 'place', typeZh: '地方', searchTokens: ['通州'] },
  { id: 'city-jiaying', name: '嘉应州', nameEn: 'Jiaying Prefecture', type: 'place', typeZh: '地方', searchTokens: ['嘉应州'] },
  { id: 'city-quzhou', name: '夔州府', nameEn: 'Kuizhou Prefecture', type: 'place', typeZh: '地方', searchTokens: ['夔州府', '夔州'] },
  { id: 'county-jinkui', name: '金匮县', nameEn: 'Jinkui County', type: 'place', typeZh: '地方', searchTokens: ['金匮县', '金匮'] },
  { id: 'county-shangyuan', name: '上元县', nameEn: 'Shangyuan County', type: 'place', typeZh: '地方', searchTokens: ['上元县', '上元'] },
  { id: 'county-wuwei', name: '无为州', nameEn: 'Wuwei Prefecture', type: 'place', typeZh: '地方', searchTokens: ['无为州'] },

  // —— Gardens & spots within them (mostly Beijing) ——
  { id: 'garden-yiyuan', name: '怡园', nameEn: 'Yiyuan', type: 'garden', typeZh: '园林', searchTokens: ['怡园'] },
  { id: 'garden-jinchun', name: '锦春园', nameEn: 'Jinchun Garden', type: 'garden', typeZh: '园林', searchTokens: ['锦春园'] },
  { id: 'garden-west', name: '西园', nameEn: 'West Garden (Hua mansion)', type: 'garden', typeZh: '园林', searchTokens: ['西园'], aliasesEn: ['West Garden'] },
  { id: 'garden-east', name: '东园', nameEn: 'East Garden', type: 'garden', typeZh: '园林', searchTokens: ['东园'], aliasesEn: ['East Garden'] },
  { id: 'garden-duxiang', name: '度香园', nameEn: 'Duxiang Garden', type: 'garden', typeZh: '园林', searchTokens: ['度香园'] },
  { id: 'garden-liang', name: '梁园', nameEn: 'Liang Garden', type: 'garden', typeZh: '园林', searchTokens: ['梁园'] },
  { id: 'garden-sanle', name: '三乐园', nameEn: 'Three Joys Garden', type: 'garden', typeZh: '园林', searchTokens: ['三乐园'] },
  { id: 'garden-derelict', name: '废园', nameEn: 'Derelict Garden', type: 'garden', typeZh: '园林', searchTokens: ['废园'] },
  { id: 'garden-little-rainbow', name: '小虹园', nameEn: 'Little Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['小虹园'] },
  { id: 'garden-great-rainbow', name: '大虹园', nameEn: 'Great Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['大虹园'] },
  { id: 'garden-rainbow', name: '虹园', nameEn: 'Rainbow Garden', type: 'garden', typeZh: '园林', searchTokens: ['虹园'] },
  { id: 'garden-qifeng', name: '起凤园', nameEn: 'Qifeng Garden', type: 'garden', typeZh: '园林', searchTokens: ['起凤园'] },
  { id: 'site-shizilin', name: '狮子林', nameEn: 'Lion Grove Garden', type: 'garden', typeZh: '园林', searchTokens: ['狮子林'], aliasesEn: ['Lion Grove'] },
  { id: 'feature-meian', name: '梅崦', nameEn: 'Plum Ravine (Yiyuan)', type: 'garden', typeZh: '园林', searchTokens: ['梅崦'] },
  { id: 'feature-hanwanlou', name: '含万楼', nameEn: 'Tower of Ten Thousand', type: 'garden', typeZh: '园林', searchTokens: ['含万楼'] },
  { id: 'feature-cishulou', name: '赐书楼', nameEn: 'Tower of Gifted Books', type: 'garden', typeZh: '园林', searchTokens: ['赐书楼'] },
  { id: 'feature-liuxian', name: '留仙院', nameEn: 'Fairy-Detaining Courtyard', type: 'garden', typeZh: '园林', searchTokens: ['留仙院'] },
  { id: 'feature-haitang', name: '海棠春圃', nameEn: 'Crabapple Spring Garden', type: 'garden', typeZh: '园林', searchTokens: ['海棠春圃', '海棠圃'], aliasesEn: ['Crabapple Spring Garden', 'Crabapple Garden'] },
  { id: 'feature-hongcha', name: '红茶仙馆', nameEn: 'Red Camellia Immortal Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['红茶仙馆'] },
  { id: 'feature-ruizhu', name: '蕊珠仙府', nameEn: 'Palace of the Petal Immortal', type: 'garden', typeZh: '园林', searchTokens: ['蕊珠仙府'] },
  { id: 'feature-qingliang', name: '清凉诗境', nameEn: 'Cool Poetic Realm', type: 'garden', typeZh: '园林', searchTokens: ['清凉诗境'] },
  { id: 'feature-jicuixuan', name: '积翠轩', nameEn: 'Accumulated-Green Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['积翠轩'] },
  { id: 'feature-mudan', name: '牡丹香国', nameEn: 'Kingdom of Peony Fragrance', type: 'garden', typeZh: '园林', searchTokens: ['牡丹香国'] },
  { id: 'feature-mudantai', name: '牡丹台', nameEn: 'Peony Terrace', type: 'garden', typeZh: '园林', searchTokens: ['牡丹台'] },
  { id: 'feature-shaoyao', name: '芍药圃', nameEn: 'Peony Garden', type: 'garden', typeZh: '园林', searchTokens: ['芍药圃'] },
  { id: 'feature-lihuayuan', name: '梨花院', nameEn: 'Pear-Blossom Court', type: 'garden', typeZh: '园林', searchTokens: ['梨花院', '梨院'], aliasesEn: ['Pear Blossom Court', 'Pear Court'] },
  { id: 'feature-liuqing', name: '留青精舍', nameEn: 'Quiet-Green Lodge', type: 'garden', typeZh: '园林', searchTokens: ['留青精舍', '留青舍'], aliasesEn: ['Quiet Green Lodge', 'Green Lodge'] },
  { id: 'feature-xiaopingshan', name: '小平山', nameEn: 'Little Level Mountain (West Garden)', type: 'garden', typeZh: '园林', searchTokens: ['小平山'] },
  { id: 'feature-dongfeng', name: '东风昨夜楼', nameEn: 'Last-Night East Wind Tower', type: 'garden', typeZh: '园林', searchTokens: ['东风昨夜楼'] },
  { id: 'feature-jiuxianglou', name: '九香楼', nameEn: 'Nine-Fragrance Tower', type: 'garden', typeZh: '园林', searchTokens: ['九香楼'] },
  { id: 'feature-chunfeng', name: '春风沉醉轩', nameEn: 'Spring Breeze Lodge', type: 'garden', typeZh: '园林', searchTokens: ['春风沉醉轩'], aliasesEn: ['Spring Breeze Lodge'] },
  { id: 'feature-cinnamon', name: '桂花厅', nameEn: 'Cassia Hall', type: 'garden', typeZh: '园林', searchTokens: ['桂花厅'] },
  { id: 'water-jade-belt', name: '玉带河', nameEn: 'Jade Belt River (Yiyuan)', type: 'garden', typeZh: '园林', searchTokens: ['玉带河'] },
  { id: 'water-lake', name: '湖上', nameEn: 'Garden lake scenes', type: 'garden', typeZh: '园林', searchTokens: ['湖上', '湖中'] },
  { id: 'feature-chengyintang', name: '承荫堂', nameEn: 'Hall of Inherited Blessings', type: 'garden', typeZh: '园林', searchTokens: ['承荫堂'] },
  { id: 'feature-baoxiang', name: '宝香堂', nameEn: 'Hall of Precious Fragrance', type: 'garden', typeZh: '园林', searchTokens: ['宝香堂'] },
  { id: 'feature-huxiang', name: '护香廊', nameEn: 'Fragrance-Guarding Gallery', type: 'garden', typeZh: '园林', searchTokens: ['护香廊'] },
  { id: 'feature-lanjing', name: '兰径', nameEn: 'Orchid Path', type: 'garden', typeZh: '园林', searchTokens: ['兰径'] },
  { id: 'feature-fenglu', name: '风露清吟馆', nameEn: 'Wind-and-Dew Poetry Hall', type: 'garden', typeZh: '园林', searchTokens: ['风露清吟馆'] },
  { id: 'feature-juqi', name: '菊畦', nameEn: 'Chrysanthemum Plot', type: 'garden', typeZh: '园林', searchTokens: ['菊畦'] },
  { id: 'feature-huangxiang', name: '黄香东圃', nameEn: 'Eastern Garden of Yellow Fragrance', type: 'garden', typeZh: '园林', searchTokens: ['黄香东圃'] },
  { id: 'feature-songkan', name: '松龛', nameEn: 'Pine Niche', type: 'garden', typeZh: '园林', searchTokens: ['松龛'] },
  { id: 'feature-songhe', name: '松鹤丹房', nameEn: 'Pine-and-Crane Alchemical Lodge', type: 'garden', typeZh: '园林', searchTokens: ['松鹤丹房'] },
  { id: 'feature-guxiang', name: '古香林屋', nameEn: 'Ancient-Fragrance Forest House', type: 'garden', typeZh: '园林', searchTokens: ['古香林屋'] },
  { id: 'feature-woyun', name: '卧云香院', nameEn: 'Fragrant Court of Resting Clouds', type: 'garden', typeZh: '园林', searchTokens: ['卧云香院'] },
  { id: 'feature-yinqiu', name: '吟秋榭', nameEn: 'Autumn-Chanting Waterside Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['吟秋榭', '吟秋水榭'] },
  { id: 'feature-tingyun', name: '停云叙雨轩', nameEn: 'Studio of Lingering Clouds and Speaking Rain', type: 'garden', typeZh: '园林', searchTokens: ['停云叙雨轩'] },
  { id: 'feature-lianqiu', name: '练秋阁', nameEn: 'Autumn-Silk Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['练秋阁'], aliasesEn: ['Refining Autumn Loft'] },
  { id: 'feature-guiling', name: '桂岭', nameEn: 'Cassia Ridge', type: 'garden', typeZh: '园林', searchTokens: ['桂岭'] },
  { id: 'feature-conggui', name: '丛桂山房', nameEn: 'Cassia-Grove Mountain House', type: 'garden', typeZh: '园林', searchTokens: ['丛桂山房'] },
  { id: 'feature-piaomiao', name: '缥渺亭', nameEn: 'Mist-Veiled Pavilion', type: 'garden', typeZh: '园林', searchTokens: ['缥渺亭'] },
  { id: 'feature-taohuawu', name: '桃花坞', nameEn: 'Peach-Blossom Dell', type: 'garden', typeZh: '园林', searchTokens: ['桃花坞'] },
  { id: 'feature-xunyuan', name: '寻源仙墅', nameEn: 'Immortal Retreat of Seeking the Source', type: 'garden', typeZh: '园林', searchTokens: ['寻源仙墅'] },
  { id: 'feature-xiaochicheng', name: '小赤城', nameEn: 'Little Red Citadel', type: 'garden', typeZh: '园林', searchTokens: ['小赤城'] },
  { id: 'feature-daozhuang', name: '稻庄', nameEn: 'Rice-Farm Hamlet', type: 'garden', typeZh: '园林', searchTokens: ['稻庄'] },
  { id: 'feature-hongxue', name: '红雪西庄', nameEn: 'Western Hamlet of Red Snow', type: 'garden', typeZh: '园林', searchTokens: ['红雪西庄'] },
  { id: 'feature-shepu', name: '射圃', nameEn: 'Archery Ground', type: 'garden', typeZh: '园林', searchTokens: ['射圃'] },
  { id: 'feature-yuzhuang', name: '渔庄', nameEn: 'Fishing Hamlet', type: 'garden', typeZh: '园林', searchTokens: ['渔庄'] },
  { id: 'garden-jiuxiang', name: '九香园', nameEn: 'Nine-Fragrance Garden', type: 'garden', typeZh: '园林', searchTokens: ['九香园'] },
  { id: 'garden-taihe', name: '太和园', nameEn: 'Taihe Garden', type: 'garden', typeZh: '园林', searchTokens: ['太和园'] },
  { id: 'garden-chunxi', name: '春喜园', nameEn: 'Chunxi Garden', type: 'garden', typeZh: '园林', searchTokens: ['春喜园'] },

  // —— Beijing houses, streets, venues & temples ——
  { id: 'residence-mei', name: '梅宅', nameEn: 'Mei residence', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['梅宅', '梅府', '梅家'], aliasesEn: ['Mei house', 'Mei family'] },
  { id: 'residence-hua', name: '华府', nameEn: 'Hua mansion', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['华公子府', '华公府', '华府', '华宅'], aliasesEn: ['Hua family mansion', 'Young Master Hua residence', 'Hua household'] },
  { id: 'residence-xu', name: '徐府', nameEn: 'Xu residence', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['徐府', '徐宅'], aliasesEn: ['Xu house'] },
  { id: 'residence-wang', name: '王家', nameEn: 'Wang household', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['王家', '王宅'], aliasesEn: ['Wang family', 'Wang house'] },
  { id: 'residence-sun', name: '孙宅', nameEn: 'Sun household', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['孙宅', '孙家'], aliasesEn: ['Sun family', 'Sun house'] },
  { id: 'residence-tian', name: '田宅', nameEn: 'Tian residence', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['田宅', '田府'], aliasesEn: ['Tian house'] },
  { id: 'street-mingke', name: '鸣珂里', nameEn: 'Mingke Lane', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['鸣珂里'] },
  { id: 'street-nanxiao', name: '南小街', nameEn: 'South Small Street', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['南小街'] },
  { id: 'street-xiawazi', name: '下洼子', nameEn: 'Xiawazi', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['下洼子'] },
  { id: 'street-east-garden-quarter', name: '东园土窑子', nameEn: 'East Garden brothel quarter', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['东园土窑子', '东园土窑', '土窑子'], aliasesEn: ['The Quarter'] },
  { id: 'street-fangli', name: '坊里', nameEn: 'The quarter', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['坊里'] },
  { id: 'gate-qianmen', name: '前门', nameEn: 'Front Gate (Zhengyangmen)', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['正阳门', '前门'], aliasesEn: ['Zhengyang Gate', 'Qianmen'] },
  { id: 'venue-qiushui', name: '秋水堂', nameEn: 'Qiushui Hall', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['秋水堂'], aliasesEn: ['Autumn Water Hall'] },
  { id: 'venue-tianxianglou', name: '天香楼', nameEn: 'Tianxiang Tower', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['天香楼'] },
  { id: 'venue-feicui', name: '翡翠楼', nameEn: 'Feicui Tower', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['翡翠楼'], aliasesEn: ['Jade Tower'] },
  { id: 'venue-chunyang', name: '春阳馆', nameEn: 'Chunyang House', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['春阳馆'] },
  { id: 'venue-gusu', name: '姑苏会馆', nameEn: 'Gusu Guild Hall (Beijing)', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['姑苏会馆'] },
  { id: 'venue-hanlin', name: '翰林院', nameEn: 'Hanlin Academy', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['翰林院'] },
  { id: 'venue-liubu', name: '礼部', nameEn: 'Ministry of Rites', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['礼部'] },
  { id: 'venue-fuyin', name: '府尹', nameEn: 'Prefectural Office', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['府尹'] },
  { id: 'temple-qu', name: '屈公祠', nameEn: 'Qu Shrine', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['屈公祠堂', '屈公祠', '屈子祠', '屈祠'], aliasesEn: ['Qu Shrine', 'Shrine of Qu Daoweng', 'Shrine of Qu Daosheng'] },
  { id: 'temple-hongji', name: '宏济寺', nameEn: 'Hongji Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['宏济寺', '鸿济寺'] },
  { id: 'temple-huguo', name: '护国寺', nameEn: 'Huguo Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['护国寺'] },
  { id: 'temple-shoufo', name: '寿佛寺', nameEn: 'Shoufo Temple', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['寿佛寺'] },
  { id: 'temple-flower', name: '花神庙', nameEn: 'Flower-Deity Shrine', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['花神庙'] },
  { id: 'site-baonensi', name: '大报恩寺', nameEn: "Grand Bao'en Temple (Nanjing)", type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['大报恩寺', '报恩寺'], aliasesEn: ['Baoen Temple'] },
  { id: 'street-jinpailou', name: '金牌楼', nameEn: 'Golden Archway', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['金牌楼'] },
  { id: 'street-nanheng', name: '南横街', nameEn: 'South Cross Street', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['南横街'] },
  { id: 'street-yangliu', name: '杨柳巷', nameEn: 'Willow Lane', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['杨柳巷'] },
  { id: 'street-yingtao', name: '樱桃巷', nameEn: 'Cherry Lane', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['樱桃巷'] },
  { id: 'street-yanzhi', name: '胭脂巷', nameEn: 'Rouge Lane', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['胭脂巷'] },
  { id: 'venue-anji', name: '安吉堂', nameEn: 'Anji Hall', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['安吉堂'] },
  { id: 'venue-liuhe', name: '六合馆', nameEn: 'Liuhe House', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['六合馆'] },
  { id: 'venue-guxiu', name: '古秀斋', nameEn: 'Guxiu Studio', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['古秀斋'] },
  { id: 'venue-juxing', name: '聚星堂', nameEn: 'Hall of Gathered Stars', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['聚星堂'] },
  { id: 'office-bingmasi', name: '兵马司', nameEn: 'Beijing Ward Office', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['兵马司'] },
  { id: 'office-xingbu', name: '刑部', nameEn: 'Board of Punishments', type: 'site', typeZh: '府邸街巷与场馆', searchTokens: ['刑部'] },

  // —— Rivers, mountains & landmarks (travel scenes & natural sites) ——
  { id: 'site-mochou', name: '莫愁湖', nameEn: 'Mochou Lake (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['莫愁湖'] },
  { id: 'site-xuanwuhu', name: '玄武湖', nameEn: 'Lake Xuanwu (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['玄武湖'], aliasesEn: ['Xuanwu Lake'] },
  { id: 'site-pingshan', name: '平山堂', nameEn: 'Pingshan Hall (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['平山堂'] },
  { id: 'site-yanziji', name: '燕子矶', nameEn: 'Swallow Bluff (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['燕子矶'] },
  { id: 'site-rainbow-bridge', name: '虹桥', nameEn: 'Rainbow Bridge (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['虹桥'] },
  { id: 'site-lotus-bridge', name: '莲花桥', nameEn: 'Lotus Bridge (Yangzhou)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['莲花桥'] },
  { id: 'site-hanxi-gate', name: '旱西门', nameEn: 'Hanxi Gate (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['旱西门'] },
  { id: 'water-canal', name: '运河', nameEn: 'Grand Canal', type: 'landscape', typeZh: '山水名胜', searchTokens: ['运河'] },
  { id: 'water-yangtze', name: '长江', nameEn: 'Yangtze River', type: 'landscape', typeZh: '山水名胜', searchTokens: ['长江'] },
  { id: 'water-qinhuai', name: '秦淮河', nameEn: 'Qinhuai River', type: 'landscape', typeZh: '山水名胜', searchTokens: ['秦淮河', '秦淮'], aliasesEn: ['Qinhuai'] },
  { id: 'water-taihu', name: '太湖', nameEn: 'Lake Tai (Taihu)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['太湖'], aliasesEn: ['Tai Lake'] },
  { id: 'mountain-phoenix', name: '凤凰山', nameEn: 'Phoenix Mountain (Nanjing)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['凤凰山'] },
  { id: 'mountain-golden', name: '金山', nameEn: 'Jinshan', type: 'landscape', typeZh: '山水名胜', searchTokens: ['金山'] },
  { id: 'water-yellow-river', name: '黄河', nameEn: 'Yellow River', type: 'landscape', typeZh: '山水名胜', searchTokens: ['黄河'] },
  { id: 'water-qingjiangpu', name: '清江浦', nameEn: 'Qingjiangpu', type: 'landscape', typeZh: '山水名胜', searchTokens: ['清江浦'] },
  { id: 'water-guazhou', name: '瓜州', nameEn: 'Guazhou Crossing', type: 'landscape', typeZh: '山水名胜', searchTokens: ['瓜州'] },
  { id: 'water-zhangjiawan', name: '张家湾', nameEn: 'Zhangjiawan', type: 'landscape', typeZh: '山水名胜', searchTokens: ['张家湾'] },
  { id: 'water-wangjiaying', name: '王家营', nameEn: 'Wangjiaying Crossing', type: 'landscape', typeZh: '山水名胜', searchTokens: ['王家营', '王家营子'] },
  { id: 'gate-longjiang', name: '龙江关', nameEn: 'Longjiang Customs Station', type: 'landscape', typeZh: '山水名胜', searchTokens: ['龙江关'] },
  { id: 'gate-shuixi', name: '水西关', nameEn: 'Shuixi Gate', type: 'landscape', typeZh: '山水名胜', searchTokens: ['水西关', '水西门'] },
  { id: 'bridge-fuhu', name: '伏虎桥', nameEn: 'Fuhu Bridge', type: 'landscape', typeZh: '山水名胜', searchTokens: ['伏虎桥'] },
  { id: 'mountain-dongting', name: '洞庭山', nameEn: 'Dongting Mountain (Lake Tai)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['洞庭山'] },
  { id: 'mountain-heng', name: '衡岳', nameEn: 'Mount Heng', type: 'landscape', typeZh: '山水名胜', searchTokens: ['衡岳', '南衡'] },
  { id: 'water-dongting-lake', name: '洞庭湖', nameEn: 'Dongting Lake', type: 'landscape', typeZh: '山水名胜', searchTokens: ['洞庭湖'] },
  { id: 'water-pengli', name: '彭蠡', nameEn: 'Pengli (Poyang Lake)', type: 'landscape', typeZh: '山水名胜', searchTokens: ['彭蠡'] },

  // —— Places invoked through verse, drama, history, religion, or figurative speech ——
  // These belong to the novel's conceptual geography, not to the characters' plotted journeys.
  { id: 'allusion-penglai', name: '蓬莱', nameEn: 'Penglai, Isles of the Immortals', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['蓬莱', '蓬山'] },
  { id: 'allusion-yaotai', name: '瑶台', nameEn: 'Jade Terrace', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['瑶台'] },
  { id: 'allusion-yujing', name: '玉京', nameEn: 'Jade Capital of the Immortals', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['玉京'] },
  { id: 'allusion-moon-palace', name: '月宫', nameEn: 'Moon Palace', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['月宫', '月殿', '广寒'] },
  { id: 'allusion-luopu', name: '洛浦', nameEn: 'Luo River Banks', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['洛浦'] },
  { id: 'allusion-wushan', name: '巫山', nameEn: 'Mount Wu', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['巫山', '巫峰'] },
  { id: 'allusion-nanshan', name: '南山', nameEn: 'Southern Mountain', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['南山'] },
  { id: 'allusion-taishan', name: '泰山', nameEn: 'Mount Tai', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['泰山'] },
  { id: 'allusion-huayue', name: '华岳', nameEn: 'Mount Hua', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['华岳'] },
  { id: 'allusion-yueyang', name: '岳阳楼', nameEn: 'Yueyang Tower', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['岳阳楼'] },
  { id: 'allusion-three-mountains', name: '三山', nameEn: 'Three Isles of the Immortals', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['三山'] },
  { id: 'allusion-yantai', name: '燕台', nameEn: 'Yan Terrace', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['燕台'] },
  { id: 'allusion-jintai', name: '金台', nameEn: 'Golden Terrace', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['金台'] },
  { id: 'allusion-zhangtai', name: '章台', nameEn: 'Zhangtai', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['章台'] },
  { id: 'allusion-qinlou', name: '秦楼', nameEn: 'Qin Tower', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['秦楼'] },
  { id: 'allusion-chutai', name: '楚台', nameEn: 'Chu Terrace', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['楚台', '曲台'] },
  { id: 'allusion-jingu', name: '金谷', nameEn: 'Jingu Garden', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['金谷'] },
  { id: 'allusion-pingquan', name: '平泉庄', nameEn: 'Pingquan Villa', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['平泉庄', '平泉'] },
  { id: 'allusion-liangshan', name: '梁山泊', nameEn: 'Liangshan Marsh', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['梁山泊'] },
  { id: 'allusion-emei', name: '峨嵋山', nameEn: 'Mount Emei', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['峨嵋山'] },
  { id: 'allusion-xiangshan', name: '香山', nameEn: 'Fragrant Hills', type: 'allusion', typeZh: '典故与想象地理', searchTokens: ['香山'] },
];

export const locationColors: Record<LocationType, string> = {
  place: 'var(--legend-place)',
  garden: 'var(--legend-garden)',
  site: 'var(--legend-site)',
  landscape: 'var(--legend-landscape)',
  allusion: 'var(--legend-allusion)',
};

export function resolveColor(color: string): string {
  if (!color || typeof color !== 'string') return '#8b4513';
  if (color.startsWith('var(')) {
    const varName = color.slice(4, -1).trim();
    const computed = typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
      : '';
    if (computed) return computed;
    const fallbacks: Record<string, string> = {
      '--legend-place': '#2d4a68',
      '--legend-garden': '#2e6f40',
      '--legend-site': '#9e462a',
      '--legend-landscape': '#1f6f8a',
      '--legend-allusion': '#6b4a7d',
    };
    return fallbacks[varName] || '#8b4513';
  }
  return color;
}

export function hexToRgba(color: string, alpha: number): string {
  const hex = resolveColor(color);
  if (!hex || typeof hex !== 'string') return `rgba(0, 0, 0, ${alpha})`;
  if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
  const cleanHex = hex.replace('#', '');
  const fullHex = cleanHex.length === 3
    ? cleanHex.split('').map((c) => c + c).join('')
    : cleanHex;
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return `rgba(0, 0, 0, ${alpha})`;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
