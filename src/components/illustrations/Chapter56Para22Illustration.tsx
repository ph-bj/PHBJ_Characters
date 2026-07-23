import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 22 (25 in full text):
 * "琴仙也只得睡下，恍恍惚惚的，一会觉自己走出寺来，见对面有个书铺，招牌写着华正昌三字，有个老年掌柜的照应了他。
 *  琴仙即进铺内，忽听锣声锽锽，又接着作乐之声。回头看时，见一对对的旌旗幡盖，仪从纷纭，还有那金盔金甲，执刀列道，
 *  香烟成字，宝盖蟠云，玉女金童，华妆妙像，过了有半个时辰。末后见一座七香宝辇，坐着一位女神，正大华容，珠璎蔽面。
 *  看这些仪仗并那尊神都进寺里去了，琴仙也跟了进去，却不是那个寺，宝殿巍峨，是个极大所在。只见那些仪从人唱名参见后，
 *  两班排立，弓衣刀鞘，俨似军中，威严要畏。琴仙躲在一棵树后偷望，见那尊神后站着许多侍女，宫妆艳服，手中有捧如意的，
 *  有捧巾栉的，有捧书册的，有执扇的。只见那尊神说了几句话，却听不明白。见人丛里走出一个童子来，约十二三岁。
 *  虽然见他清眉秀目，却已头角峥嵘，英姿爽飒，走上阶去，长揖不拜。又见那尊神似有怒容，连连的拍案，骂那童子，
 *  见那童子口里也像分辨。两人觉说了好一会话，然后见那尊神颜色稍和，那童子也就俯首而立。又见那尊神向右手站的一个侍女说了一句什么，
 *  那侍女便入后殿。少倾，捧着一个古锦囊出来，走近童子身边。那童子欲接不接似的，双手将衣衿拽起，侍女把锦囊一抖，
 *  见大大小小的，新新旧旧，五颜六色，共有百十来枝笔，一齐倒入那童子衣兜里。见那童子谢一声，站了一会，尊神又与他讲了好些话，
 *  那童子方徐行退下。"
 *
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic:
 * - Rice-paper ink bleed filters & brush wobble
 * - Hua Zhengchang bookstore ("华正昌") sign
 * - Grand temple palace (宝殿巍峨) with divine banners (旌旗幡盖) & golden armored guards
 * - Goddess with pearl veil (正大华容，珠璎蔽面) on the 7-fragrance chariot/throne
 * - Palace maidens holding ruyi, books, combs & fans
 * - Heroic 12-13 year old boy scholar (童子) holding robe lapels as brushes rain into his lap from an ancient brocade pouch (古锦囊)
 * - Qin Xian hiding peeking behind a pine tree (躲在一棵树后偷望)
 * - Male scholars, opera actors & warriors with defined abdominal muscles (abs)
 */
export const Chapter56Para22Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        {/* ===== DEFS: Ink wash gradients, glows & filters ===== */}
        <defs>
          {/* Divine Hall Golden Aura / Cloud Glow */}
          <radialGradient id="c56p22-divineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe082" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ffb74d" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#2c2420" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Dreamy Cloud / Incense Smoke Gradient (香烟成字/宝盖蟠云) */}
          <linearGradient id="c56p22-dreamMist" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#d4c5a9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.15" />
          </linearGradient>

          {/* Palace Roof Graded Ink Wash */}
          <linearGradient id="c56p22-roofWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.2" />
          </linearGradient>

          {/* Multicolored Brushes Wash (五颜六色百十来枝笔) */}
          <linearGradient id="c56p22-brushRainbow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#d4a359" stopOpacity="0.8" />
            <stop offset="66%" stopColor="#4a7c59" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4a6fa5" stopOpacity="0.8" />
          </linearGradient>

          {/* Brush wobble filter - hand-painted ink stroke effect */}
          <filter id="c56p22-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="22" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed filter - wet rice paper matted edge (洇墨) */}
          <filter id="c56p22-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="12" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed filter for far background mountains & cloud mist */}
          <filter id="c56p22-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="33" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>
        </defs>

        {/* ===== SCROLL DOUBLE BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES (墨分五色 - 梦境神殿与祥云) ===== */}
        <g filter="url(#c56p22-mlBleedFar)">
          {/* Swirling divine sky mist */}
          <path d="M12 12 L508 12 L508 170 Q360 110, 240 150 Q100 120, 12 165 Z" fill="#2c2420" opacity="0.18" />
          {/* Celestial throne hall background cloud shadow */}
          <path d="M140 40 Q300 20, 480 50 L508 260 L200 260 Z" fill="#2c2420" opacity="0.12" />
        </g>

        {/* Mid-ground bled glows */}
        <g filter="url(#c56p22-mlBleed)">
          {/* Goddess throne golden radiance (正大华容 / 七香宝辇) */}
          <circle cx="340" cy="115" r="70" fill="url(#c56p22-divineGlow)" opacity="0.9" />
          {/* Dream mist swirling from bookstore to grand hall */}
          <path d="M12 210 Q90 170, 180 220 Q270 180, 360 210" fill="none" stroke="url(#c56p22-dreamMist)" strokeWidth="35" />
          {/* Incense character clouds (香烟成字 / 宝盖蟠云) */}
          <path d="M220 70 Q240 40, 270 55 Q300 35, 330 60 Q360 40, 390 65" fill="none" stroke="#2c2420" strokeWidth="12" opacity="0.15" />
        </g>

        {/* Main Linework with Ink Texture Filter */}
        <g filter="url(#c56p22-inkTexture)">

          {/* ===== 1. LEFT SIDE: HUA ZHENGCHANG BOOKSTORE ("华正昌"书铺与老年掌柜) ===== */}
          <g transform="translate(15, 140)">
            {/* Bookstore Roof */}
            <path d="M0 45 L45 20 L90 45" fill="url(#c56p22-roofWash)" stroke="#2c2420" strokeWidth="1.6" />
            <path d="M-2 46 Q-6 40, -10 38" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M92 46 Q96 40, 100 38" fill="none" stroke="#2c2420" strokeWidth="1.2" />

            {/* Bookstore Signboard ("华正昌"招牌) */}
            <rect x="22" y="45" width="46" height="18" fill="none" stroke="#2c2420" strokeWidth="1.3" rx="1" />
            <rect x="24" y="47" width="42" height="14" fill="#f5efe0" stroke="#2c2420" strokeWidth="0.5" />
            <text x="45" y="58" fontSize="8" fontFamily="serif" fill="#2c2420" textAnchor="middle" fontWeight="bold">华正昌</text>

            {/* Shop Counter & Shelves (书铺柜台与书架) */}
            <rect x="10" y="70" width="70" height="75" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="10" y1="95" x2="80" y2="95" stroke="#2c2420" strokeWidth="1.2" />
            {/* Stacked books on shelves */}
            <rect x="18" y="75" width="18" height="16" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="18" y1="80" x2="36" y2="80" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="18" y1="85" x2="36" y2="85" stroke="#2c2420" strokeWidth="0.5" />
            <rect x="42" y="74" width="24" height="17" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="42" y1="80" x2="66" y2="80" stroke="#2c2420" strokeWidth="0.5" />

            {/* Elderly Shopkeeper (老年掌柜的) */}
            <g transform="translate(48, 96)">
              <circle cx="0" cy="0" r="7" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Beard & Scullcap */}
              <path d="M-5 -3 Q0 -7, 5 -3" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M-3 4 Q0 12, 3 4" fill="none" stroke="#2c2420" strokeWidth="0.8" /> {/* White beard */}
              {/* Body in shopkeeper tunic */}
              <path d="M-8 8 L-14 42 L14 42 L8 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Cupped hands in greeting gesture */}
              <circle cx="0" cy="18" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            </g>
          </g>

          {/* ===== 2. GRAND MAJESTIC TEMPLE / PALACE ARCHITECTURE (宝殿巍峨，极大所在) ===== */}
          <g transform="translate(140, 20)">
            {/* Grand Palace Double Roof */}
            {/* Upper Roof */}
            <path d="M70 40 L180 10 L290 40" fill="url(#c56p22-roofWash)" stroke="#2c2420" strokeWidth="2.2" />
            <path d="M65 41 Q55 35, 48 32" stroke="#2c2420" strokeWidth="1.6" fill="none" />
            <path d="M295 41 Q305 35, 312 32" stroke="#2c2420" strokeWidth="1.6" fill="none" />
            <circle cx="180" cy="9" r="3" fill="#2c2420" /> {/* Ridge ornament */}

            {/* Lower Roof */}
            <path d="M40 75 L180 48 L320 75" fill="url(#c56p22-roofWash)" stroke="#2c2420" strokeWidth="1.8" />
            <path d="M35 76 Q25 70, 18 68" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            <path d="M325 76 Q335 70, 342 68" stroke="#2c2420" strokeWidth="1.4" fill="none" />

            {/* Palace Pillars */}
            <line x1="60" y1="75" x2="60" y2="230" stroke="#2c2420" strokeWidth="2" />
            <line x1="120" y1="75" x2="120" y2="230" stroke="#2c2420" strokeWidth="1.6" />
            <line x1="240" y1="75" x2="240" y2="230" stroke="#2c2420" strokeWidth="1.6" />
            <line x1="300" y1="75" x2="300" y2="230" stroke="#2c2420" strokeWidth="2" />

            {/* Grand Stairs & Platform (走上阶去) */}
            <polygon points="30,230 330,230 350,280 10,280" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            <line x1="25" y1="242" x2="335" y2="242" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="20" y1="255" x2="340" y2="255" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="15" y1="268" x2="345" y2="268" stroke="#2c2420" strokeWidth="0.8" />
          </g>

          {/* ===== 3. GOLDEN ARMORED GUARDS WITH ABS & CEREMONIAL BANNERS (金盔金甲，执刀列道，两班排立) ===== */}
          {/* Left Guard (Warrior with helmet, knife, open armor showing defined abs) */}
          <g transform="translate(155, 140)">
            {/* Banner Flag (旌旗幡盖) */}
            <line x1="-12" y1="-50" x2="-12" y2="85" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M-12 -45 Q5 -35, -12 -25 Q5 -15, -12 -5" fill="#2c2420" opacity="0.2" stroke="#2c2420" strokeWidth="0.9" />

            {/* Golden Helmet (金盔) */}
            <path d="M-8 -5 L0 -15 L8 -5 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <circle cx="0" cy="-16" r="1.5" fill="#2c2420" />
            {/* Head */}
            <circle cx="0" cy="0" r="7" fill="none" stroke="#2c2420" strokeWidth="1.2" />

            {/* Armor draped open over chest & ABS (胸肌与腹肌) */}
            <path d="M-10 8 L-14 38 L14 38 L10 8" stroke="#2c2420" strokeWidth="1.3" fill="none" />
            <path d="M-10 8 L-4 35 M10 8 L4 35" stroke="#2c2420" strokeWidth="1" fill="none" />
            {/* Pectoral chest & 6-pack abs */}
            <path d="M-6 14 Q0 17, 6 14" fill="none" stroke="#2c2420" strokeWidth="0.75" />
            <line x1="0" y1="15" x2="0" y2="34" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-5 20 Q0 22, 5 20" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-5 25 Q0 27, 5 25" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-4 30 Q0 31.5, 4 30" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Saber/Knife (执刀列道，弓衣刀鞘) */}
            <line x1="8" y1="18" x2="22" y2="42" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M22 42 Q26 44, 28 40" stroke="#2c2420" strokeWidth="1.2" fill="none" />
          </g>

          {/* Right Guard (Warrior standing guard in military rank) */}
          <g transform="translate(425, 140)">
            {/* Banner Flag */}
            <line x1="12" y1="-50" x2="12" y2="85" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M12 -45 Q-5 -35, 12 -25 Q-5 -15, 12 -5" fill="#2c2420" opacity="0.2" stroke="#2c2420" strokeWidth="0.9" />

            {/* Helmet */}
            <path d="M-8 -5 L0 -15 L8 -5 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <circle cx="0" cy="-16" r="1.5" fill="#2c2420" />
            {/* Head */}
            <circle cx="0" cy="0" r="7" fill="none" stroke="#2c2420" strokeWidth="1.2" />

            {/* Muscular Torso & ABS */}
            <path d="M-10 8 L-14 38 L14 38 L10 8" stroke="#2c2420" strokeWidth="1.3" fill="none" />
            <path d="M-10 8 L-4 35 M10 8 L4 35" stroke="#2c2420" strokeWidth="1" fill="none" />
            <path d="M-6 14 Q0 17, 6 14" fill="none" stroke="#2c2420" strokeWidth="0.75" />
            <line x1="0" y1="15" x2="0" y2="34" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-5 20 Q0 22, 5 20" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-5 25 Q0 27, 5 25" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-4 30 Q0 31.5, 4 30" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Knife */}
            <line x1="-8" y1="18" x2="-22" y2="42" stroke="#2c2420" strokeWidth="1.4" />
          </g>

          {/* ===== 4. SEVEN-FRAGRANCE CHARIOT / THRONE & MAJESTIC GODDESS WITH PEARL VEIL (七香宝辇与殿娥女神) ===== */}
          <g transform="translate(325, 60)">
            {/* Seven-Fragrance Chariot Canopy (七香宝辇/宝盖) */}
            <path d="M-35 0 Q0 -22, 35 0 L30 14 L-30 14 Z" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            {/* Hanging pearl tassels (珠璎蔽面) */}
            <line x1="-25" y1="14" x2="-25" y2="28" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
            <line x1="-15" y1="14" x2="-15" y2="30" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
            <line x1="-5" y1="14" x2="-5" y2="32" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
            <line x1="5" y1="14" x2="5" y2="32" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
            <line x1="15" y1="14" x2="15" y2="30" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
            <line x1="25" y1="14" x2="25" y2="28" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />

            {/* Goddess (坐着一位女神，正大华容，珠璎蔽面) */}
            <g transform="translate(0, 30)">
              {/* Crown & Head */}
              <circle cx="0" cy="0" r="8.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              <path d="M-6 -8 L0 -16 L6 -8 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" /> {/* Phoenix Crown */}
              {/* Pearl Veil over Face (珠璎蔽面) */}
              <path d="M-6 2 Q0 7, 6 2" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="1,1" />

              {/* Goddess Robes */}
              <path d="M-12 10 L-22 55 L22 55 L12 10 Z" fill="none" stroke="#2c2420" strokeWidth="1.4" />
              {/* Arm beating the altar table in anger (拍案) */}
              <path d="M-10 16 Q-25 24, -30 35" stroke="#2c2420" strokeWidth="1.4" fill="none" />

              {/* Divine Altar Table (神案) */}
              <rect x="-42" y="34" width="38" height="22" fill="none" stroke="#2c2420" strokeWidth="1.4" />
              <line x1="-42" y1="40" x2="-4" y2="40" stroke="#2c2420" strokeWidth="0.6" />
            </g>

            {/* Palace Maidens Behind Goddess (宫妆艳服: 捧如意, 巾栉, 书册, 执扇) */}
            {/* Maid 1 (Right): Holding Fan (执扇) */}
            <g transform="translate(38, 22)">
              <circle cx="0" cy="0" r="6" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M-7 8 L-11 42 L11 42 L7 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Ceremonial Fan */}
              <line x1="-5" y1="15" x2="-15" y2="-20" stroke="#2c2420" strokeWidth="1" />
              <ellipse cx="-15" cy="-20" rx="10" ry="14" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            </g>

            {/* Maid 2 (Left): Holding Book (捧书册) */}
            <g transform="translate(-36, 22)">
              <circle cx="0" cy="0" r="6" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M-7 8 L-11 42 L11 42 L7 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Book */}
              <rect x="2" y="12" width="12" height="15" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            </g>
          </g>

          {/* ===== 5. THE 12-13 YEAR OLD BOY SCHOLAR & THE RAIN OF 100 BRUSHES FROM BROCADE POUCH (童子与古锦囊倒入百十枝笔) ===== */}
          <g transform="translate(250, 200)">
            {/* Palace Maid (捧着一个古锦囊出来的侍女) */}
            <g transform="translate(45, -15)">
              <circle cx="0" cy="0" r="6.5" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M-8 8 L-14 48 L14 48 L8 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Ancient Brocade Pouch (古锦囊) tilted, shaking out brushes */}
              <path d="M-18 16 Q-28 20, -22 34 Q-12 36, -8 24 Z" fill="none" stroke="#b4494e" strokeWidth="1.4" />
              <circle cx="-16" cy="25" r="2" fill="#b4494e" /> {/* Pouch ornament */}
            </g>

            {/* RAIN OF 100 BRUSHES OF ALL SIZES & COLORS (大大小小、新新旧旧、五颜六色共有百十来枝笔一齐倒入童子衣兜里) */}
            <g transform="translate(-10, 15)">
              {/* Stream of writing brushes falling */}
              <line x1="30" y1="-5" x2="5" y2="35" stroke="#b4494e" strokeWidth="1.8" />
              <line x1="35" y1="0" x2="12" y2="38" stroke="#d4a359" strokeWidth="1.4" />
              <line x1="25" y1="-8" x2="-2" y2="32" stroke="#4a7c59" strokeWidth="1.6" />
              <line x1="40" y1="5" x2="18" y2="42" stroke="#4a6fa5" strokeWidth="1.2" />
              <line x1="28" y1="8" x2="2" y2="40" stroke="#2c2420" strokeWidth="1.5" />

              <line x1="22" y1="-2" x2="-6" y2="30" stroke="#b4494e" strokeWidth="1.2" />
              <line x1="32" y1="12" x2="8" y2="44" stroke="#d4a359" strokeWidth="1.6" />
              <line x1="18" y1="4" x2="-10" y2="34" stroke="#4a7c59" strokeWidth="1.1" />

              {/* Brush Tips & Handles (笔头与笔杆) */}
              <polygon points="5,35 2,42 8,39" fill="#2c2420" />
              <polygon points="12,38 9,45 15,42" fill="#2c2420" />
              <polygon points="-2,32 -5,39 1,36" fill="#2c2420" />
              <polygon points="18,42 15,49 21,46" fill="#2c2420" />
              <polygon points="2,40 -1,47 5,44" fill="#2c2420" />
              <polygon points="-6,30 -9,37 -3,34" fill="#2c2420" />
              <polygon points="8,44 5,51 11,48" fill="#2c2420" />
            </g>

            {/* 12-13 Year Old Boy Scholar (童子，约十二三岁，清眉秀目，头角峥嵘，英姿爽飒，双手将衣衿拽起) */}
            <g transform="translate(-25, 20)">
              {/* Head & Young Scholar Bun */}
              <circle cx="0" cy="0" r="7.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              <path d="M-4 -7 Q0 -13, 4 -7" fill="none" stroke="#2c2420" strokeWidth="1.1" /> {/* Young hair tufts (头角峥嵘) */}
              {/* Heroic facial features */}
              <path d="M2 -1 Q4 0, 6 -1" stroke="#2c2420" strokeWidth="0.7" /> {/* Clear eyebrow */}

              {/* Scholar Tunic Open at Chest showing Defined Young ABS (腹肌与胸肌) */}
              <path d="M-8 8 L-14 48 L14 48 L8 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.4" />
              <path d="M-8 8 L-3 38 M8 8 L3 38" stroke="#2c2420" strokeWidth="1" fill="none" />

              {/* Defined Abs for Boy Scholar */}
              <path d="M-5 14 Q0 17, 5 14" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="0" y1="15" x2="0" y2="35" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M-4 20 Q0 22, 4 20" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M-4 25 Q0 27, 4 25" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M-3 30 Q0 31.5, 3 30" fill="none" stroke="#2c2420" strokeWidth="0.45" />

              {/* Hands Holding Robe Lapels Up to catch brushes (双手将衣衿拽起，衣兜) */}
              <path d="M-10 14 Q-18 22, -12 32" stroke="#2c2420" strokeWidth="1.4" fill="none" />
              <path d="M10 14 Q18 22, 12 32" stroke="#2c2420" strokeWidth="1.4" fill="none" />
              {/* Pocket / Apron formed by pulled lapels (衣兜) */}
              <path d="M-14 30 Q0 44, 14 30" stroke="#2c2420" strokeWidth="1.5" fill="none" />
            </g>
          </g>

          {/* ===== 6. QIN XIAN HIDING BEHIND A PINE TREE PEEKING (琴仙躲在一棵树后偷望) ===== */}
          <g transform="translate(80, 190)">
            {/* Trunk of Ancient Pine Tree (一棵大树) */}
            <path d="M10 0 Q-5 50, 8 120 L28 120 Q18 50, 30 0 Z" fill="none" stroke="#2c2420" strokeWidth="2" />
            {/* Bark Texture */}
            <path d="M12 25 Q18 20, 14 35" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M15 55 Q20 50, 16 65" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M10 85 Q16 80, 12 95" fill="none" stroke="#2c2420" strokeWidth="0.6" />

            {/* Pine Needles Canopy */}
            <path d="M-20 15 Q15 -25, 45 10 Q10 -5, -20 15 Z" fill="#2c2420" opacity="0.25" stroke="#2c2420" strokeWidth="1" />
            <path d="M-30 40 Q5 5, 35 35 Q5 20, -30 40 Z" fill="#2c2420" opacity="0.2" stroke="#2c2420" strokeWidth="1" />

            {/* Qin Xian (Male Scholar / Opera Actor Peeking behind the tree with ABS) */}
            <g transform="translate(22, 35)">
              {/* Head peeking out (偷望) */}
              <circle cx="10" cy="0" r="7.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              <circle cx="8" cy="-8" r="3" fill="#2c2420" /> {/* Opera actor hair bun */}
              <path d="M12 0 Q15 1, 17 0" stroke="#2c2420" strokeWidth="0.6" /> {/* Curious eye looking right */}

              {/* Scholar Robe Open at Chest displaying ABS (腹肌与胸肌) */}
              <path d="M8 8 L18 55 L2 55 Z" stroke="#2c2420" strokeWidth="1.3" fill="none" />
              <path d="M8 8 L13 40" stroke="#2c2420" strokeWidth="1" fill="none" />

              {/* Defined Abs on Qin Xian */}
              <path d="M8 15 Q13 18, 17 15" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="12" y1="16" x2="12" y2="36" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M9 21 Q13 23, 16 21" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M9 26 Q13 28, 16 26" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M10 31 Q13 32.5, 15 31" fill="none" stroke="#2c2420" strokeWidth="0.45" />

              {/* Hand gripping tree trunk */}
              <path d="M2 20 Q-2 22, -4 18" stroke="#2c2420" strokeWidth="1" fill="none" />
            </g>
          </g>

          {/* ===== 7. TRADITIONAL RED SEALS (印章 - Bottom Right) ===== */}
          <g transform="translate(460, 325)">
            {/* Seal 1: 华正昌 / 梦笔 */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">华正</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">昌印</text>
            </g>
            {/* Seal 2: 殿娥 / 梦赐百笔 */}
            <g transform="translate(0, 30)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">殿娥</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">赐笔</text>
            </g>
          </g>

          {/* Calligraphy Vertical Text */}
          <text x="495" y="170" textAnchor="middle" fill="#2c2420" fontSize="13" fontFamily="serif" writingMode="vertical-rl" opacity="0.75">华正昌书铺</text>
          <text x="508" y="170" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">梦赐百笔</text>

        </g>
      </svg>
    </div>
  );
};
