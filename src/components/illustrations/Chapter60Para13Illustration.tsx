import React from "react";

/**
 * Visualizes Chapter 60 Paragraph 13:
 * 第二方画的人纶巾道服，左右侍仙子女各一，题曰：
 * 总持九香花主、三闾道君及左右花史杜仙之像。下有赞语，是子玉手笔：
 * 
 * 公气为云，公神为水；在天在地，靡尽靡止。
 * 司文曰郎，司花曰主。列宿之精，群芳之祖。
 * 左英琼瑶，右青珊瑚。一气二气，同归殊途。
 * 五色炫彩，九华流香。心花意蕊，文运之祥。
 *
 * Classical Chinese Painting Style (绢本水墨浅绛/青绿山水):
 * - ALL text elements are strictly contained within authentic Vermilion Seals (朱砂印章)
 * - Misty ink mountains (远山如黛), swirling celestial cloud qi (公气为云), water torrents (公神为水)
 * - Left Jade Gem Tree (左英琼瑶), Right Blue Coral Tree (右青珊瑚)
 * - Floral Lotus Altar (群芳之祖) with mineral color washes (浅绛/淡彩)
 * - Three male figures (Master Xu Ziyun / Lord Flower Master flanked by Du Xian & Qin Xian)
 *   in scholar turban (纶巾) & Daoist robes (道服), with defined 6-pack abs visible through open robes
 */
export const Chapter60Para13Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 540 430"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "400px" }}
      >
        {/* ===== DEFS: Classical Ink Wash Filters & Mineral Color Gradients ===== */}
        <defs>
          {/* Silk & Rice Paper Warm Tone Background Gradient */}
          <linearGradient id="c60p13-silkBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3eae0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#eadecc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e2d4c0" stopOpacity="0.8" />
          </linearGradient>

          {/* Distant Mountain Ink Wash (墨分五色 - 淡墨) */}
          <linearGradient id="c60p13-inkMountainFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a221c" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#3d3229" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#eadecc" stopOpacity="0" />
          </linearGradient>

          {/* Near Mountain & Rocks Ink Wash (浓墨) */}
          <linearGradient id="c60p13-inkMountainNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1814" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#362c24" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#eadecc" stopOpacity="0" />
          </linearGradient>

          {/* Celestial Cloud Sky Wash (公气为云) */}
          <linearGradient id="c60p13-cloudSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#261e19" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#473a30" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#eadecc" stopOpacity="0" />
          </linearGradient>

          {/* Torrential Water Wash (公神为水) */}
          <linearGradient id="c60p13-waterAbyss" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#1c1612" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b3027" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#eadecc" stopOpacity="0" />
          </linearGradient>

          {/* Yin-Yang Gold Qi Ribbon (一气二气) */}
          <linearGradient id="c60p13-goldQi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </linearGradient>

          {/* Mineral Green Wash (石绿 / 赭石) for Jade Tree */}
          <radialGradient id="c60p13-jadeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#34d399" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </radialGradient>

          {/* Mineral Azure Blue Wash (石青) for Coral Tree */}
          <radialGradient id="c60p13-coralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.65" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>

          {/* Master Celestial Halo (花主神光) */}
          <radialGradient id="c60p13-masterHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#fde047" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#ca8a04" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#eadecc" stopOpacity="0" />
          </radialGradient>

          {/* Vermilion Seal Ink Fill (朱砂阴文/白文) */}
          <linearGradient id="c60p13-sealGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0.95" />
          </linearGradient>

          {/* Brush wobble filter - authentic hand-painted Chinese ink strokes */}
          <filter id="c60p13-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="3" seed="6013" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
          </filter>

          {/* Ink bleed filter - wet rice paper matted edge (洇墨) */}
          <filter id="c60p13-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.0" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="1360" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="7" />
          </filter>

          {/* Heavy bleed filter for far background clouds & distant misty mountains */}
          <filter id="c60p13-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="3160" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="13" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER & SILK TEXTURE BASE ===== */}
        <rect x="3" y="3" width="534" height="424" fill="url(#c60p13-silkBg)" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="524" height="414" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />
        <rect x="12" y="12" width="516" height="406" fill="none" stroke="#3d3229" strokeWidth="0.6" strokeDasharray="6,3" />

        {/* ===== BACKGROUND: DISTANT INK MOUNTAINS & MIST (远山云海) ===== */}
        <g filter="url(#c60p13-mlBleedFar)">
          {/* Far Misty Peaks (远山如黛) */}
          <path d="M12 165 Q70 100, 140 145 Q190 110, 270 140 Q350 95, 430 135 Q480 105, 528 150 L528 220 L12 220 Z" fill="url(#c60p13-inkMountainFar)" />
          {/* Mid Ridge Peaks */}
          <path d="M12 190 Q110 135, 200 170 Q280 130, 370 165 Q450 140, 528 180 L528 250 L12 250 Z" fill="url(#c60p13-inkMountainNear)" opacity="0.6" />
          {/* Celestial Cloud Sky Wash (公气为云) */}
          <path d="M12 12 L528 12 L528 150 Q380 90, 270 130 Q150 90, 12 155 Z" fill="url(#c60p13-cloudSky)" opacity="0.5" />
          {/* Deep Water Base (公神为水) */}
          <path d="M12 290 Q180 260, 360 280 Q450 270, 528 300 L528 422 L12 422 Z" fill="url(#c60p13-waterAbyss)" opacity="0.85" />
        </g>

        {/* ===== MIDGROUND: AURA HALOS & SOFT COLOR WASHES (浅绛/青绿) ===== */}
        <g filter="url(#c60p13-mlBleed)">
          {/* Central Halo Behind Master */}
          <circle cx="270" cy="180" r="95" fill="url(#c60p13-masterHalo)" opacity="0.8" />
          {/* Left Jade Tree Mineral Green Wash */}
          <ellipse cx="90" cy="210" rx="65" ry="75" fill="url(#c60p13-jadeGlow)" opacity="0.65" />
          {/* Right Blue Coral Mineral Azure Wash */}
          <ellipse cx="445" cy="210" rx="65" ry="75" fill="url(#c60p13-coralGlow)" opacity="0.65" />
        </g>

        {/* ===== CONSTELLATIONS & CELESTIAL STARS (列宿之精) ===== */}
        <g opacity="0.75" filter="url(#c60p13-inkTexture)">
          <polyline points="65,38 95,30 130,42 165,35 195,50 235,42 270,55" fill="none" stroke="#d97706" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.7" />
          <circle cx="65" cy="38" r="2.2" fill="#2c2420" />
          <circle cx="95" cy="30" r="1.8" fill="#2c2420" />
          <circle cx="130" cy="42" r="2.8" fill="#d97706" />
          <circle cx="165" cy="35" r="1.8" fill="#2c2420" />
          <circle cx="195" cy="50" r="2.2" fill="#2c2420" />
          <circle cx="235" cy="42" r="1.8" fill="#2c2420" />
          <circle cx="270" cy="55" r="3" fill="#d97706" />
        </g>

        {/* ===== MAIN LINEWORK (CLASSICAL BRUSH STROKES - 铁线描/写意) ===== */}
        <g filter="url(#c60p13-inkTexture)">

          {/* ===== 1. SWIRLING CLOUDS & WATER TORRENTS (公气为云，公神为水) ===== */}
          {/* Traditional Water Ripple Waves (水波纹 / 浪花) */}
          <g fill="none" stroke="#2a221c">
            <path d="M12 350 Q65 330, 125 345 T245 340 T365 350 T528 340" strokeWidth="1.2" opacity="0.75" />
            <path d="M12 375 Q85 360, 165 370 T325 365 T485 375" strokeWidth="0.9" opacity="0.6" />
            <path d="M20 395 Q115 385, 225 395 T425 390 T528 400" strokeWidth="0.7" opacity="0.5" />
            {/* Water Spray Foams & Swirls */}
            <path d="M55 342 Q65 332, 75 342 M70 338 Q80 328, 90 338" strokeWidth="0.7" fill="none" opacity="0.7" />
            <path d="M175 338 Q185 328, 195 338 M190 334 Q200 324, 210 334" strokeWidth="0.7" fill="none" opacity="0.7" />
            <path d="M385 345 Q395 335, 405 345 M400 340 Q410 330, 420 340" strokeWidth="0.7" fill="none" opacity="0.7" />
          </g>

          {/* Swirling Classical Ink Clouds (祥云 / 仙气) */}
          <g stroke="#2a221c" strokeWidth="0.9" fill="none" opacity="0.65">
            <path d="M30 75 C15 65, 15 45, 35 45 C55 45, 55 65, 40 70 Z M40 70 C30 73, 25 85, 35 90" />
            <path d="M495 80 C515 70, 515 50, 495 50 C475 50, 475 70, 490 75 Z M490 75 C500 78, 505 90, 495 95" />
          </g>

          {/* Yin-Yang Gold Qi Ribbon Stream (一气二气，同归殊途) */}
          <path d="M50 145 Q130 85, 220 135 T380 115 T500 155" fill="none" stroke="url(#c60p13-goldQi)" strokeWidth="2.5" opacity="0.85" />
          <path d="M35 125 Q110 65, 200 115 T360 95 T480 135" fill="none" stroke="#2a221c" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45" />

          {/* ===== 2. LEFT JADE TREE (左英琼瑶) & RIGHT BLUE CORAL (右青珊瑚) ===== */}
          {/* Left: White & Mineral Green Jade Tree (左英琼瑶) */}
          <g transform="translate(45, 140)">
            {/* Trunk drawn with dry brush texture strokes (皴法) */}
            <path d="M35 190 Q20 135, 30 85 Q15 45, 25 12" fill="none" stroke="#2a221c" strokeWidth="2.4" />
            <path d="M30 85 Q50 65, 55 35" fill="none" stroke="#2a221c" strokeWidth="1.5" />
            <path d="M25 115 Q5 95, -5 65" fill="none" stroke="#2a221c" strokeWidth="1.3" />
            {/* Bark Texture Lines (皴纹) */}
            <path d="M32 170 Q24 140, 29 110" stroke="#2a221c" strokeWidth="0.6" opacity="0.6" fill="none" />
            <path d="M28 100 Q18 70, 24 45" stroke="#2a221c" strokeWidth="0.5" opacity="0.5" fill="none" />
            {/* Jade Gem Cluster Leaves */}
            <g fill="#a7f3d0" stroke="#2a221c" strokeWidth="0.9" opacity="0.85">
              <ellipse cx="25" cy="12" rx="9" ry="15" />
              <ellipse cx="55" cy="35" rx="11" ry="7" />
              <ellipse cx="-5" cy="65" rx="13" ry="8" />
              <circle cx="15" cy="38" r="5.5" fill="#f0fdf4" />
              <circle cx="40" cy="73" r="5" fill="#f0fdf4" />
              <circle cx="10" cy="98" r="6" fill="#f0fdf4" />
            </g>
          </g>

          {/* Right: Blue Coral Branch Tree (右青珊瑚) */}
          <g transform="translate(430, 140)">
            {/* Branching Trunk */}
            <path d="M15 190 Q30 135, 20 85 Q35 45, 25 12" fill="none" stroke="#2a221c" strokeWidth="2.4" />
            <path d="M20 85 Q-5 65, -10 35" fill="none" stroke="#2a221c" strokeWidth="1.5" />
            <path d="M25 115 Q45 95, 55 65" fill="none" stroke="#2a221c" strokeWidth="1.3" />
            {/* Trunk Texture */}
            <path d="M18 170 Q26 140, 21 110" stroke="#2a221c" strokeWidth="0.6" opacity="0.6" fill="none" />
            {/* Coral Azure Nodes */}
            <g fill="#38bdf8" stroke="#2a221c" strokeWidth="0.9" opacity="0.85">
              <circle cx="25" cy="12" r="6.5" />
              <circle cx="-10" cy="35" r="7.5" />
              <circle cx="55" cy="65" r="6.5" />
              <circle cx="10" cy="48" r="4.5" fill="#0284c7" />
              <circle cx="35" cy="78" r="5.5" fill="#0284c7" />
              <circle cx="5" cy="103" r="5" fill="#0284c7" />
            </g>
          </g>

          {/* ===== 3. FLORAL ALTAR & HUNDRED FLOWERS PEDESTAL (群芳之祖) ===== */}
          {/* Lotus Altar Base */}
          <g transform="translate(170, 275)">
            <path d="M10 50 L190 50 L180 70 L20 70 Z" fill="#eadecc" stroke="#2a221c" strokeWidth="1.8" />
            <path d="M20 70 L180 70 L170 85 L30 85 Z" fill="#d8cbb7" stroke="#2a221c" strokeWidth="1.2" />
            {/* Lotus Petal Engravings */}
            <path d="M20 50 Q30 35, 40 50 Q50 35, 60 50 Q70 35, 80 50 Q90 35, 100 50 Q110 35, 120 50 Q130 35, 140 50 Q150 35, 160 50 Q170 35, 180 50" fill="none" stroke="#2a221c" strokeWidth="1.3" />
          </g>

          {/* Hundred Flowers Cluster at Altar Base (心花意蕊 / 群芳之祖) */}
          <g transform="translate(130, 310)">
            <g stroke="#2a221c" strokeWidth="0.8">
              <circle cx="30" cy="15" r="10" fill="#fecdd3" />
              <circle cx="30" cy="15" r="5" fill="#f43f5e" />
              <circle cx="70" cy="20" r="12" fill="#f5d0fe" />
              <circle cx="70" cy="20" r="6" fill="#c084fc" />
              <circle cx="140" cy="18" r="11" fill="#fef08a" />
              <circle cx="140" cy="18" r="5" fill="#eab308" />
              <circle cx="220" cy="15" r="10" fill="#99f6e4" />
              <circle cx="220" cy="15" r="5" fill="#14b8a6" />
              <circle cx="260" cy="22" r="12" fill="#fed7aa" />
              <circle cx="260" cy="22" r="6" fill="#f97316" />
            </g>
          </g>

          {/* ===== 4. THREE MALE SCHOLARS WITH DEFINED ABS (工笔描法/纶巾道服) ===== */}

          {/* --- CENTRAL MASTER (徐子云/三闾道君 - 总持九香花主) --- */}
          <g transform="translate(270, 135)">
            {/* Scholar Turban (纶巾) */}
            <path d="M-15 -60 C-15 -75, 15 -75, 15 -60 L18 -45 C18 -40, -18 -40, -18 -45 Z" fill="#2a221c" stroke="#2a221c" strokeWidth="1" />
            <rect x="-6" y="-72" width="12" height="15" fill="#fde047" stroke="#2a221c" strokeWidth="0.8" rx="1" />
            <path d="M-18 -45 Q0 -48, 18 -45 L20 -38 Q0 -40, -20 -38 Z" fill="#473a30" />

            {/* Head & Face */}
            <ellipse cx="0" cy="-35" rx="14" ry="17" fill="#fcf8f2" stroke="#2a221c" strokeWidth="1.4" />
            <path d="M-12 -45 Q-20 -20, -16 0 M12 -45 Q20 -20, 16 0" stroke="#2a221c" strokeWidth="1" fill="none" />
            {/* Eyes & Brows */}
            <path d="M-9 -39 Q-5 -42, -2 -39 M2 -39 Q5 -42, 9 -39" stroke="#2a221c" strokeWidth="1.2" />
            <circle cx="-5" cy="-36" r="1.3" fill="#2a221c" />
            <circle cx="5" cy="-36" r="1.3" fill="#2a221c" />
            <path d="M0 -34 L0 -28 L3 -28" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-5 -24 Q0 -21, 5 -24" stroke="#2a221c" strokeWidth="1" fill="none" />

            {/* Daoist Robe Sleeves (道服大袖) */}
            <path d="M-22 -20 Q-65 -5, -75 40 Q-45 50, -28 30 Q-20 0, -14 -10 Z" fill="#fcf8f2" stroke="#2a221c" strokeWidth="1.6" />
            <path d="M22 -20 Q65 -5, 75 40 Q45 50, 28 30 Q20 0, 14 -10 Z" fill="#fcf8f2" stroke="#2a221c" strokeWidth="1.6" />

            {/* OPEN CHEST & CHISELED ABS (六块腹肌) */}
            <path d="M-8 -20 L-8 -12 Q0 -8, 8 -12 L8 -20" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-12 -12 Q0 -7, 12 -12" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            {/* Pectorals */}
            <path d="M-15 -10 Q-8 5, 0 4 Q8 5, 15 -10" stroke="#2a221c" strokeWidth="1.3" fill="none" />
            <line x1="0" y1="-8" x2="0" y2="4" stroke="#2a221c" strokeWidth="1.1" />

            {/* 6-Pack Abs & Linea Alba */}
            <line x1="0" y1="4" x2="0" y2="40" stroke="#2a221c" strokeWidth="1.3" />
            <path d="M-13 12 Q0 15, 13 12" stroke="#2a221c" strokeWidth="1.2" fill="none" />
            <path d="M-11 7 Q-6 12, 0 10 Q6 12, 11 7" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-13 24 Q0 27, 13 24" stroke="#2a221c" strokeWidth="1.2" fill="none" />
            <path d="M-11 19 Q-6 24, 0 22 Q6 24, 11 19" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-12 36 Q0 39, 12 36" stroke="#2a221c" strokeWidth="1.2" fill="none" />
            <path d="M-10 31 Q-5 36, 0 34 Q5 36, 10 31" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-16 14 Q-19 22, -14 30 M16 14 Q19 22, 14 30" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-14 38 Q0 48, 14 38" stroke="#2a221c" strokeWidth="1.3" fill="none" />

            {/* Open Robe Drapery Edges */}
            <path d="M-14 -18 Q-22 10, -25 45 Q-20 90, -50 110" fill="none" stroke="#2a221c" strokeWidth="1.8" />
            <path d="M14 -18 Q22 10, 25 45 Q20 90, 50 110" fill="none" stroke="#2a221c" strokeWidth="1.8" />
            <path d="M-55 110 Q0 135, 55 110 Q40 80, 25 45 M-55 110 Q-40 80, -25 45" fill="#f5efe6" stroke="#2a221c" strokeWidth="1.6" />

            {/* Floating Flower Lotus (司花) */}
            <circle cx="0" cy="15" r="7" fill="#fef08a" stroke="#2a221c" strokeWidth="0.8" />
            <path d="M-5 15 Q0 5, 5 15 Q0 20, -5 15 Z" fill="#fde047" />
          </g>

          {/* --- LEFT ATTENDANT (杜仙女 / 杜琴言 - 司文曰郎) --- */}
          <g transform="translate(150, 155)">
            <ellipse cx="0" cy="-35" rx="12" ry="15" fill="#fcf8f2" stroke="#2a221c" strokeWidth="1.3" />
            <path d="M-10 -42 Q0 -48, 10 -42" stroke="#2a221c" strokeWidth="1" />
            <line x1="-15" y1="-42" x2="15" y2="-42" stroke="#2a221c" strokeWidth="1.2" />
            <circle cx="15" cy="-42" r="2.5" fill="#fde047" />

            <path d="M-7 -38 Q-4 -41, -1 -38 M2 -38 Q5 -41, 8 -38" stroke="#2a221c" strokeWidth="1.1" />
            <circle cx="-4" cy="-35" r="1.2" fill="#2a221c" />
            <circle cx="5" cy="-35" r="1.2" fill="#2a221c" />
            <path d="M0 -34 L0 -29 L2 -29" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-4 -24 Q0 -22, 4 -24" stroke="#2a221c" strokeWidth="0.9" fill="none" />

            {/* OPEN SCHOLAR ROBE & DEFINED ABS */}
            <path d="M-10 -20 Q0 -16, 10 -20" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-12 -18 Q-6 -6, 0 -8 Q6 -6, 12 -18" stroke="#2a221c" strokeWidth="1.2" fill="none" />
            <line x1="0" y1="-18" x2="0" y2="-8" stroke="#2a221c" strokeWidth="1" />

            <line x1="0" y1="-8" x2="0" y2="32" stroke="#2a221c" strokeWidth="1.2" />
            <path d="M-10 2 Q0 5, 10 2" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-9 -3 Q-5 1, 0 0 Q5 1, 9 -3" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-10 14 Q0 17, 10 14" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-9 9 Q-5 13, 0 12 Q5 13, 9 9" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-9 26 Q0 29, 9 26" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-8 21 Q-4 25, 0 24 Q4 25, 8 21" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-12 28 L-4 38 M12 28 L4 38" stroke="#2a221c" strokeWidth="1" fill="none" />

            <path d="M-12 -20 Q-20 10, -18 50 Q-25 90, -35 120" fill="none" stroke="#2a221c" strokeWidth="1.5" />
            <path d="M12 -20 Q18 10, 16 50 Q22 90, 30 120" fill="none" stroke="#2a221c" strokeWidth="1.5" />

            {/* Holding Calligraphy Writing Brush (司文曰郎) */}
            <path d="M14 -15 Q30 -10, 35 15" stroke="#2a221c" strokeWidth="1.4" fill="none" />
            <line x1="35" y1="-25" x2="35" y2="25" stroke="#2a221c" strokeWidth="1.8" />
            <path d="M35 25 L32 38 Q35 44, 38 38 Z" fill="#fde047" stroke="#2a221c" strokeWidth="0.9" />
          </g>

          {/* --- RIGHT ATTENDANT (屈琴仙 - 心花意蕊) --- */}
          <g transform="translate(390, 155)">
            <ellipse cx="0" cy="-35" rx="12" ry="15" fill="#fcf8f2" stroke="#2a221c" strokeWidth="1.3" />
            <path d="M-12 -44 Q0 -50, 12 -44 L10 -36 Q0 -40, -10 -36 Z" fill="#2a221c" />
            <path d="M-10 -40 Q-22 -35, -25 -20 M10 -40 Q22 -35, 25 -20" stroke="#2a221c" strokeWidth="0.9" fill="none" />

            <path d="M-7 -38 Q-4 -41, -1 -38 M2 -38 Q5 -41, 8 -38" stroke="#2a221c" strokeWidth="1.1" />
            <circle cx="-4" cy="-35" r="1.2" fill="#2a221c" />
            <circle cx="5" cy="-35" r="1.2" fill="#2a221c" />
            <path d="M0 -34 L0 -29 L-2 -29" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-4 -24 Q0 -22, 4 -24" stroke="#2a221c" strokeWidth="0.9" fill="none" />

            {/* OPEN ROBE & DEFINED ABS */}
            <path d="M-10 -20 Q0 -16, 10 -20" stroke="#2a221c" strokeWidth="0.9" fill="none" />
            <path d="M-12 -18 Q-6 -6, 0 -8 Q6 -6, 12 -18" stroke="#2a221c" strokeWidth="1.2" fill="none" />
            <line x1="0" y1="-18" x2="0" y2="-8" stroke="#2a221c" strokeWidth="1" />

            <line x1="0" y1="-8" x2="0" y2="32" stroke="#2a221c" strokeWidth="1.2" />
            <path d="M-10 2 Q0 5, 10 2" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-9 -3 Q-5 1, 0 0 Q5 1, 9 -3" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-10 14 Q0 17, 10 14" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-9 9 Q-5 13, 0 12 Q5 13, 9 9" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-9 26 Q0 29, 9 26" stroke="#2a221c" strokeWidth="1.1" fill="none" />
            <path d="M-8 21 Q-4 25, 0 24 Q4 25, 8 21" stroke="#2a221c" strokeWidth="0.8" fill="none" />
            <path d="M-12 28 L-4 38 M12 28 L4 38" stroke="#2a221c" strokeWidth="1" fill="none" />

            <path d="M-12 -20 Q-18 10, -16 50 Q-22 90, -30 120" fill="none" stroke="#2a221c" strokeWidth="1.5" />
            <path d="M12 -20 Q20 10, 18 50 Q25 90, 35 120" fill="none" stroke="#2a221c" strokeWidth="1.5" />

            <path d="M-14 -15 Q-30 -10, -35 15" stroke="#2a221c" strokeWidth="1.4" fill="none" />
            <rect x="-42" y="10" width="12" height="28" fill="#fef9c3" stroke="#2a221c" strokeWidth="1" rx="1" />
            <line x1="-36" y1="14" x2="-36" y2="34" stroke="#2a221c" strokeWidth="0.6" />
          </g>

        </g>

        {/* ===== 5. ALL TEXTS ARE STRICTLY IN SEAL STAMPS (朱砂印章) ===== */}
        {/* ALL text in the painting exists ONLY inside red vermilion seals/stamps! */}

        {/* --- Top-Right Seal 1 (引首葫芦印 / Gourd Seal): 九香 --- */}
        <g transform="translate(480, 22)">
          <path d="M12 0 C18 0, 20 6, 17 11 C22 15, 22 25, 12 28 C2 25, 2 15, 7 11 C4 6, 6 0, 12 0 Z" fill="url(#c60p13-sealGrad)" stroke="#b91c1c" strokeWidth="0.5" />
          <text x="12" y="18" fontSize="8.5" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            九香
          </text>
        </g>

        {/* --- Top-Right Seal 2 (长方白文印 / Square Red Seal): 九香花主 --- */}
        <g transform="translate(470, 56)">
          <rect x="0" y="0" width="22" height="42" fill="url(#c60p13-sealGrad)" rx="1.5" />
          <rect x="2" y="2" width="18" height="38" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          <text x="11" y="15" fontSize="8.5" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" writingMode="vertical-rl">
            九香花主
          </text>
        </g>

        {/* --- Upper-Left Seal 1 (朱文名号印 / Outline Red Seal): 三闾道君 --- */}
        <g transform="translate(24, 25)">
          <rect x="0" y="0" width="26" height="48" fill="#f3eae0" stroke="#b91c1c" strokeWidth="1.6" rx="1.5" />
          <rect x="2" y="2" width="22" height="44" fill="none" stroke="#b91c1c" strokeWidth="0.5" />
          <text x="13" y="16" fontSize="9" fontFamily="serif" fontWeight="bold" fill="#b91c1c" textAnchor="middle" writingMode="vertical-rl">
            三闾道君
          </text>
        </g>

        {/* --- Upper-Left Seal 2 (闲章 / Verse Oval Seal): 公气为云 --- */}
        <g transform="translate(56, 25)">
          <ellipse cx="11" cy="24" rx="11" ry="22" fill="url(#c60p13-sealGrad)" />
          <text x="11" y="14" fontSize="8" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" writingMode="vertical-rl">
            公气为云
          </text>
        </g>

        {/* --- Mid-Right Seal 1 (赞语闲章 / Verse Rect Seal): 公神为水 --- */}
        <g transform="translate(470, 106)">
          <rect x="0" y="0" width="22" height="42" fill="url(#c60p13-sealGrad)" rx="1.5" />
          <text x="11" y="14" fontSize="8" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" writingMode="vertical-rl">
            公神为水
          </text>
        </g>

        {/* --- Mid-Right Seal 2 (子玉款印 / Square Author Seal): 子玉 --- */}
        <g transform="translate(470, 155)">
          <rect x="0" y="0" width="22" height="22" fill="url(#c60p13-sealGrad)" rx="1" opacity="0.95" />
          <text x="11" y="15" fontSize="9" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            子玉
          </text>
        </g>

        {/* --- Central Base Seal (花主方印): 花主 --- */}
        <g transform="translate(258, 252)">
          <rect x="0" y="0" width="24" height="24" fill="url(#c60p13-sealGrad)" rx="1" />
          <text x="12" y="16" fontSize="9.5" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            花主
          </text>
        </g>

        {/* --- Lower-Left Seal 1 (压角朱文章): 杜仙 --- */}
        <g transform="translate(20, 310)">
          <rect x="0" y="0" width="24" height="24" fill="#f3eae0" stroke="#b91c1c" strokeWidth="1.5" rx="1" />
          <text x="12" y="16" fontSize="9.5" fontFamily="serif" fontWeight="bold" fill="#b91c1c" textAnchor="middle">
            杜仙
          </text>
        </g>

        {/* --- Lower-Left Seal 2 (压角白文章): 文运之祥 --- */}
        <g transform="translate(20, 340)">
          <rect x="0" y="0" width="24" height="42" fill="url(#c60p13-sealGrad)" rx="1.5" />
          <text x="12" y="14" fontSize="8" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" writingMode="vertical-rl">
            文运之祥
          </text>
        </g>

        {/* --- Lower-Right Seal 1 (压角章): 琴仙 --- */}
        <g transform="translate(492, 310)">
          <rect x="0" y="0" width="24" height="24" fill="#f3eae0" stroke="#b91c1c" strokeWidth="1.5" rx="1" />
          <text x="12" y="16" fontSize="9.5" fontFamily="serif" fontWeight="bold" fill="#b91c1c" textAnchor="middle">
            琴仙
          </text>
        </g>

        {/* --- Lower-Right Seal 2 (闲章): 心花意蕊 --- */}
        <g transform="translate(492, 340)">
          <rect x="0" y="0" width="24" height="42" fill="url(#c60p13-sealGrad)" rx="1.5" />
          <text x="12" y="14" fontSize="8" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" writingMode="vertical-rl">
            心花意蕊
          </text>
        </g>

      </svg>
    </div>
  );
};

export default Chapter60Para13Illustration;
