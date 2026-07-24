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
 * Traditional Chinese Ink Landscape (水墨画) Aesthetic in style of `MainInkLandscape.tsx`:
 * - East Pillar Stone Carving Shrine & Pavilion Frame (九香楼东楹第二方石刻)
 * - Master Xu Ziyun / Lord Flower Master ("总持九香花主、三闾道君") in scholar turban (纶巾) & Daoist robe (道服)
 * - Flanked by Du Xian (杜仙女) & Qin Xian (琴仙) as literary & flower attendants ("左右侍仙")
 * - Left Jade Gem Tree ("左英琼瑶") & Right Blue Coral ("右青珊瑚")
 * - Swirling Celestial Cloud Qi ("公气为云 / 一气二气") and Deep Torrential Waters ("公神为水")
 * - Celestial Constellations ("列宿之精") & Ancestral Flower Garden Altar ("群芳之祖")
 * - Floating Literary Writing Brush ("司文曰郎") & Five-Color Aura ("五色炫彩，九华流香")
 * - Male scholars and opera actors feature detailed, defined abdominal muscles (6-pack abs)
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
        {/* ===== DEFS: Filters & Gradients ===== */}
        <defs>
          {/* Celestial Cloud Sky Wash (公气为云) */}
          <linearGradient id="c60p13-cloudSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#2c2420" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#4a3e35" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Mysterious Deep Torrent Waters Wash (公神为水) */}
          <linearGradient id="c60p13-waterAbyss" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#14100e" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#57493e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Yin-Yang Dual Qi Flows (一气二气，同归殊途) */}
          <linearGradient id="c60p13-goldQi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe082" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffb74d" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4c5a9" stopOpacity="0" />
          </linearGradient>

          {/* Five-Color Radiant Rainbow Rays (五色炫彩) */}
          <linearGradient id="c60p13-fiveColors" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e57373" stopOpacity="0.35" />
            <stop offset="25%" stopColor="#ffb74d" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#fff176" stopOpacity="0.35" />
            <stop offset="75%" stopColor="#81c784" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#64b5f6" stopOpacity="0.35" />
          </linearGradient>

          {/* Left White Jade Tree Glow (左英琼瑶) */}
          <radialGradient id="c60p13-jadeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0f2f1" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#b2dfdb" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Right Blue Coral Tree Glow (右青珊瑚) */}
          <radialGradient id="c60p13-coralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4dd0e1" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#00acc1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Master Halo Divine Glow (群芳之祖) */}
          <radialGradient id="c60p13-masterHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#fff9c4" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#ffe082" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Red Ink Seal Fill */}
          <linearGradient id="c60p13-sealGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b71c1c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#880e4f" stopOpacity="0.9" />
          </linearGradient>

          {/* Brush wobble filter - hand-painted ink stroke effect */}
          <filter id="c60p13-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="6013" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
          </filter>

          {/* Ink bleed filter - wet rice paper matted edge (洇墨) */}
          <filter id="c60p13-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="1360" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="8" />
          </filter>

          {/* Heavy bleed filter for far background mist & clouds */}
          <filter id="c60p13-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="3" seed="3160" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>
        </defs>

        {/* ===== SCROLL DOUBLE BORDER ===== */}
        <rect x="3" y="3" width="534" height="424" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="524" height="414" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES & CELESTIAL ATMOSPHERE ===== */}
        {/* Sky Clouds Wash (公气为云) & Water Wash (公神为水) */}
        <g filter="url(#c60p13-mlBleedFar)">
          {/* Celestial Cloud Sky */}
          <path d="M12 12 L528 12 L528 160 Q400 100, 270 140 Q140 100, 12 165 Z" fill="url(#c60p13-cloudSky)" opacity="0.35" />
          {/* Deep Water Base */}
          <path d="M12 300 Q180 270, 360 290 Q450 280, 528 310 L528 422 L12 422 Z" fill="url(#c60p13-waterAbyss)" />
        </g>

        {/* Midground Bled Halo & Five-Color Rays (五色炫彩) */}
        <g filter="url(#c60p13-mlBleed)">
          {/* Central Halo Behind Master */}
          <circle cx="270" cy="190" r="100" fill="url(#c60p13-masterHalo)" opacity="0.85" />
          {/* Left Jade Tree Aura */}
          <circle cx="95" cy="220" r="60" fill="url(#c60p13-jadeGlow)" opacity="0.6" />
          {/* Right Blue Coral Aura */}
          <circle cx="445" cy="220" r="60" fill="url(#c60p13-coralGlow)" opacity="0.6" />
        </g>

        {/* Five-Color Light Fan/Rays (五色炫彩) */}
        <g opacity="0.45" filter="url(#c60p13-mlBleed)">
          <path d="M270 190 L180 40 L210 35 Z" fill="#e57373" />
          <path d="M270 190 L225 35 L260 30 Z" fill="#ffb74d" />
          <path d="M270 190 L270 28 L305 32 Z" fill="#fff176" />
          <path d="M270 190 L315 35 L345 42 Z" fill="#81c784" />
          <path d="M270 190 L355 48 L380 60 Z" fill="#64b5f6" />
        </g>

        {/* ===== CONSTELLATIONS & CELESTIAL STARS (列宿之精) ===== */}
        <g opacity="0.8">
          {/* Seven Starlight Dots & Lines (列宿) */}
          <polyline points="70,40 100,32 135,45 170,38 200,55 240,48 270,60" fill="none" stroke="#ffe082" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.7" />
          <circle cx="70" cy="40" r="2.5" fill="#ffffff" />
          <circle cx="100" cy="32" r="2" fill="#fffde7" />
          <circle cx="135" cy="45" r="3" fill="#ffe082" />
          <circle cx="170" cy="38" r="2" fill="#fffde7" />
          <circle cx="200" cy="55" r="2.5" fill="#ffffff" />
          <circle cx="240" cy="48" r="2" fill="#fffde7" />
          <circle cx="270" cy="60" r="3.5" fill="#fff59d" />
        </g>

        {/* ===== MAIN LINEWORK & FIGURES WITH INK TEXTURE FILTER ===== */}
        <g filter="url(#c60p13-inkTexture)">

          {/* ===== 1. WATER TORRENTS & BILLOWING CLOUD SWIRLS (公气为云，公神为水) ===== */}
          {/* Water Torrents at base */}
          <g fill="none" stroke="#2c2420">
            <path d="M12 360 Q70 340, 130 355 T250 350 T370 360 T528 350" strokeWidth="1.2" opacity="0.6" />
            <path d="M12 385 Q90 370, 170 380 T330 375 T490 385" strokeWidth="0.9" opacity="0.5" />
            <path d="M20 405 Q120 395, 230 405 T430 400 T528 410" strokeWidth="0.7" opacity="0.4" />
            {/* Water Spray Foams */}
            <path d="M60 350 C65 342, 80 342, 85 350" strokeWidth="0.8" fill="none" />
            <path d="M180 345 C185 337, 200 337, 205 345" strokeWidth="0.8" fill="none" />
            <path d="M390 355 C395 347, 410 347, 415 355" strokeWidth="0.8" fill="none" />
          </g>

          {/* Dual Qi Swirling Mist Threads (一气二气，同归殊途) */}
          {/* Dark Ink Qi Stream */}
          <path d="M40 140 Q110 80, 200 130 T360 110 T480 150" fill="none" stroke="#2c2420" strokeWidth="2" strokeDasharray="8,4" opacity="0.5" />
          {/* Golden Light Qi Stream */}
          <path d="M60 160 Q150 100, 250 160 T420 120 T500 170" fill="none" stroke="url(#c60p13-goldQi)" strokeWidth="2.5" opacity="0.85" />

          {/* Cloud Swirl Motifs (公气为云) */}
          <g stroke="#2c2420" strokeWidth="0.9" fill="none" opacity="0.6">
            <path d="M35 80 C20 70, 20 50, 40 50 C60 50, 60 70, 45 75 Z M45 75 C35 78, 30 90, 40 95" />
            <path d="M490 85 C510 75, 510 55, 490 55 C470 55, 470 75, 485 80 Z M485 80 C495 83, 500 95, 490 100" />
          </g>

          {/* ===== 2. LEFT JADE GEM TREE (左英琼瑶) & RIGHT BLUE CORAL (右青珊瑚) ===== */}
          {/* Left: White Jade Gem Tree (左英琼瑶) */}
          <g transform="translate(45, 150)">
            {/* Trunk */}
            <path d="M35 180 Q20 130, 30 80 Q15 40, 25 10" fill="none" stroke="#2c2420" strokeWidth="2.2" />
            <path d="M30 80 Q50 60, 55 30" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M25 110 Q5 90, -5 60" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Jade Leaves & Jewels */}
            <g fill="#e0f2f1" stroke="#2c2420" strokeWidth="0.8">
              <ellipse cx="25" cy="10" rx="8" ry="14" />
              <ellipse cx="55" cy="30" rx="10" ry="6" />
              <ellipse cx="-5" cy="60" rx="12" ry="7" />
              <circle cx="15" cy="35" r="5" fill="#ffffff" />
              <circle cx="40" cy="70" r="4.5" fill="#ffffff" />
              <circle cx="10" cy="95" r="5.5" fill="#ffffff" />
            </g>
          </g>

          {/* Right: Blue Coral Branch Tree (右青珊瑚) */}
          <g transform="translate(430, 150)">
            {/* Trunk & Branching Arms */}
            <path d="M15 180 Q30 130, 20 80 Q35 40, 25 10" fill="none" stroke="#2c2420" strokeWidth="2.2" />
            <path d="M20 80 Q-5 60, -10 30" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M25 110 Q45 90, 55 60" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Coral Nodes & Azure Buds */}
            <g fill="#4dd0e1" stroke="#2c2420" strokeWidth="0.8">
              <circle cx="25" cy="10" r="6" />
              <circle cx="-10" cy="30" r="7" />
              <circle cx="55" cy="60" r="6" />
              <circle cx="10" cy="45" r="4" fill="#00acc1" />
              <circle cx="35" cy="75" r="5" fill="#00acc1" />
              <circle cx="5" cy="100" r="4.5" fill="#00acc1" />
            </g>
          </g>

          {/* ===== 3. FLOWER ALTAR & FLORAL PEDESTAL (群芳之祖) ===== */}
          {/* Lotus Altar Stone Base */}
          <g transform="translate(170, 280)">
            {/* Pedestal Structure */}
            <path d="M10 50 L190 50 L180 70 L20 70 Z" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            <path d="M20 70 L180 70 L170 85 L30 85 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Lotus Petals along Pedestal */}
            <path d="M20 50 Q30 35, 40 50 Q50 35, 60 50 Q70 35, 80 50 Q90 35, 100 50 Q110 35, 120 50 Q130 35, 140 50 Q150 35, 160 50 Q170 35, 180 50" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          </g>

          {/* Cluster of A Hundred Flowers at Altar Base (群芳之祖) */}
          <g transform="translate(130, 315)">
            {/* Peony / Lotus Flowers */}
            <g stroke="#2c2420" strokeWidth="0.8">
              {/* Flower 1 */}
              <circle cx="30" cy="15" r="10" fill="#ffcdd2" />
              <circle cx="30" cy="15" r="5" fill="#e57373" />
              {/* Flower 2 */}
              <circle cx="70" cy="20" r="12" fill="#e1bee7" />
              <circle cx="70" cy="20" r="6" fill="#ba68c8" />
              {/* Flower 3 */}
              <circle cx="140" cy="18" r="11" fill="#fff9c4" />
              <circle cx="140" cy="18" r="5" fill="#fbc02d" />
              {/* Flower 4 */}
              <circle cx="220" cy="15" r="10" fill="#b2dfdb" />
              <circle cx="220" cy="15" r="5" fill="#4db6ac" />
              {/* Flower 5 */}
              <circle cx="260" cy="22" r="12" fill="#ffe0b2" />
              <circle cx="260" cy="22" r="6" fill="#ffb74d" />
            </g>
          </g>

          {/* ===== 4. THREE MALE SCHOLARS & OPERA ACTORS WITH DEFINED ABS ===== */}

          {/* --- CENTRAL MASTER (徐子云/三闾道君 - 总持九香花主) --- */}
          {/* Seated in Lotus posture, robes parted down chest showing 6-pack abs */}
          <g transform="translate(270, 140)">
            {/* Scholar Turban (纶巾) */}
            <path d="M-15 -60 C-15 -75, 15 -75, 15 -60 L18 -45 C18 -40, -18 -40, -18 -45 Z" fill="#2c2420" stroke="#2c2420" strokeWidth="1" />
            <rect x="-6" y="-72" width="12" height="15" fill="#ffe082" stroke="#2c2420" strokeWidth="0.8" rx="1" />
            <path d="M-18 -45 Q0 -48, 18 -45 L20 -38 Q0 -40, -20 -38 Z" fill="#4a3e35" />

            {/* Head & Facial Expression */}
            <ellipse cx="0" cy="-35" rx="14" ry="17" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            {/* Topknot & Hair Ribbon */}
            <path d="M-12 -45 Q-20 -20, -16 0 M12 -45 Q20 -20, 16 0" stroke="#2c2420" strokeWidth="1" fill="none" />
            {/* Brows, Eyes & Noble Expression */}
            <path d="M-9 -39 Q-5 -42, -2 -39 M2 -39 Q5 -42, 9 -39" stroke="#2c2420" strokeWidth="1.2" />
            <circle cx="-5" cy="-36" r="1.3" fill="#2c2420" />
            <circle cx="5" cy="-36" r="1.3" fill="#2c2420" />
            <path d="M0 -34 L0 -28 L3 -28" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            <path d="M-5 -24 Q0 -21, 5 -24" stroke="#2c2420" strokeWidth="1" fill="none" />

            {/* Daoist Robe Sleeves (道服大袖) */}
            <path d="M-22 -20 Q-65 -5, -75 40 Q-45 50, -28 30 Q-20 0, -14 -10 Z" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <path d="M22 -20 Q65 -5, 75 40 Q45 50, 28 30 Q20 0, 14 -10 Z" fill="none" stroke="#2c2420" strokeWidth="1.6" />

            {/* OPEN CHEST & CHISELED ABS (六块腹肌) */}
            {/* Neck & Clavicles */}
            <path d="M-8 -20 L-8 -12 Q0 -8, 8 -12 L8 -20" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-12 -12 Q0 -7, 12 -12" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            {/* Pectoral Muscles (胸肌) */}
            <path d="M-15 -10 Q-8 5, 0 4 Q8 5, 15 -10" stroke="#2c2420" strokeWidth="1.3" fill="none" />
            <line x1="0" y1="-8" x2="0" y2="4" stroke="#2c2420" strokeWidth="1.1" />

            {/* Linea Alba & Rectus Abdominis 6-Pack Abs (腹肌六块) */}
            <line x1="0" y1="4" x2="0" y2="40" stroke="#2c2420" strokeWidth="1.3" />
            {/* Upper Abs Pack */}
            <path d="M-13 12 Q0 15, 13 12" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M-11 7 Q-6 12, 0 10 Q6 12, 11 7" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            {/* Middle Abs Pack */}
            <path d="M-13 24 Q0 27, 13 24" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M-11 19 Q-6 24, 0 22 Q6 24, 11 19" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            {/* Lower Abs Pack & Serratus Anterior */}
            <path d="M-12 36 Q0 39, 12 36" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M-10 31 Q-5 36, 0 34 Q5 36, 10 31" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            {/* Serratus / Ribs contour */}
            <path d="M-16 14 Q-19 22, -14 30 M16 14 Q19 22, 14 30" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            <path d="M-14 38 Q0 48, 14 38" stroke="#2c2420" strokeWidth="1.3" fill="none" />

            {/* Open Robe Drapery Edges Framed Around Muscular Abs */}
            <path d="M-14 -18 Q-22 10, -25 45 Q-20 90, -50 110" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            <path d="M14 -18 Q22 10, 25 45 Q20 90, 50 110" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            {/* Lower Cross Legs in Lotus posture */}
            <path d="M-55 110 Q0 135, 55 110 Q40 80, 25 45 M-55 110 Q-40 80, -25 45" fill="none" stroke="#2c2420" strokeWidth="1.6" />

            {/* Hands & Floating Flower Lotus (司花曰主) */}
            <circle cx="0" cy="15" r="7" fill="#fff59d" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M-5 15 Q0 5, 5 15 Q0 20, -5 15 Z" fill="#ffe082" />
          </g>


          {/* --- LEFT ATTENDANT (杜仙女 / 杜琴言 - 司文曰郎) --- */}
          {/* Standing on Left near Jade Tree, open scholar robe showing 6-pack abs */}
          <g transform="translate(150, 160)">
            {/* Opera Actor / Scholar Hair Band & Pin */}
            <ellipse cx="0" cy="-35" rx="12" ry="15" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M-10 -42 Q0 -48, 10 -42" stroke="#2c2420" strokeWidth="1" />
            <line x1="-15" y1="-42" x2="15" y2="-42" stroke="#2c2420" strokeWidth="1.2" />
            <circle cx="15" cy="-42" r="2.5" fill="#ffe082" />

            {/* Eyes & Facial Expression */}
            <path d="M-7 -38 Q-4 -41, -1 -38 M2 -38 Q5 -41, 8 -38" stroke="#2c2420" strokeWidth="1.1" />
            <circle cx="-4" cy="-35" r="1.2" fill="#2c2420" />
            <circle cx="5" cy="-35" r="1.2" fill="#2c2420" />
            <path d="M0 -34 L0 -29 L2 -29" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            <path d="M-4 -24 Q0 -22, 4 -24" stroke="#2c2420" strokeWidth="0.9" fill="none" />

            {/* OPEN SCHOLAR ROBE & DEFINED ABS (腹肌) */}
            {/* Clavicles */}
            <path d="M-10 -20 Q0 -16, 10 -20" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            {/* Chest Pectorals */}
            <path d="M-12 -18 Q-6 -6, 0 -8 Q6 -6, 12 -18" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <line x1="0" y1="-18" x2="0" y2="-8" stroke="#2c2420" strokeWidth="1" />

            {/* 6-Pack Rectus Abdominis & Linea Alba */}
            <line x1="0" y1="-8" x2="0" y2="32" stroke="#2c2420" strokeWidth="1.2" />
            {/* Pack 1 */}
            <path d="M-10 2 Q0 5, 10 2" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-9 -3 Q-5 1, 0 0 Q5 1, 9 -3" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* Pack 2 */}
            <path d="M-10 14 Q0 17, 10 14" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-9 9 Q-5 13, 0 12 Q5 13, 9 9" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* Pack 3 */}
            <path d="M-9 26 Q0 29, 9 26" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-8 21 Q-4 25, 0 24 Q4 25, 8 21" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* V-cut Waist Inguinal Crease */}
            <path d="M-12 28 L-4 38 M12 28 L4 38" stroke="#2c2420" strokeWidth="1" fill="none" />

            {/* Flowing Translucent Robe Lines Surrounding Abs */}
            <path d="M-12 -20 Q-20 10, -18 50 Q-25 90, -35 120" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <path d="M12 -20 Q18 10, 16 50 Q22 90, 30 120" fill="none" stroke="#2c2420" strokeWidth="1.5" />

            {/* Right Arm Holding Floating Calligraphy Writing Brush (司文曰郎) */}
            <path d="M14 -15 Q30 -10, 35 15" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            {/* Writing Brush (文昌笔) */}
            <line x1="35" y1="-25" x2="35" y2="25" stroke="#2c2420" strokeWidth="1.8" />
            <path d="M35 25 L32 38 Q35 44, 38 38 Z" fill="#ffe082" stroke="#2c2420" strokeWidth="0.9" />
            <circle cx="35" cy="42" r="3" fill="#ffb74d" opacity="0.8" />
          </g>


          {/* --- RIGHT ATTENDANT (屈琴仙 - 心花意蕊) --- */}
          {/* Standing on Right near Blue Coral, open opera robe showing 6-pack abs */}
          <g transform="translate(390, 160)">
            {/* Opera Cap & Ribbon */}
            <ellipse cx="0" cy="-35" rx="12" ry="15" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M-12 -44 Q0 -50, 12 -44 L10 -36 Q0 -40, -10 -36 Z" fill="#2c2420" />
            <path d="M-10 -40 Q-22 -35, -25 -20 M10 -40 Q22 -35, 25 -20" stroke="#2c2420" strokeWidth="0.9" fill="none" />

            {/* Eyes & Handsome Facial Features */}
            <path d="M-7 -38 Q-4 -41, -1 -38 M2 -38 Q5 -41, 8 -38" stroke="#2c2420" strokeWidth="1.1" />
            <circle cx="-4" cy="-35" r="1.2" fill="#2c2420" />
            <circle cx="5" cy="-35" r="1.2" fill="#2c2420" />
            <path d="M0 -34 L0 -29 L-2 -29" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            <path d="M-4 -24 Q0 -22, 4 -24" stroke="#2c2420" strokeWidth="0.9" fill="none" />

            {/* OPEN OPERA ROBE & CHISELED ABS (腹肌) */}
            {/* Clavicles & Chest */}
            <path d="M-10 -20 Q0 -16, 10 -20" stroke="#2c2420" strokeWidth="0.9" fill="none" />
            <path d="M-12 -18 Q-6 -6, 0 -8 Q6 -6, 12 -18" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <line x1="0" y1="-18" x2="0" y2="-8" stroke="#2c2420" strokeWidth="1" />

            {/* 6-Pack Rectus Abdominis & Linea Alba */}
            <line x1="0" y1="-8" x2="0" y2="32" stroke="#2c2420" strokeWidth="1.2" />
            {/* Upper Abs */}
            <path d="M-10 2 Q0 5, 10 2" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-9 -3 Q-5 1, 0 0 Q5 1, 9 -3" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* Middle Abs */}
            <path d="M-10 14 Q0 17, 10 14" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-9 9 Q-5 13, 0 12 Q5 13, 9 9" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* Lower Abs */}
            <path d="M-9 26 Q0 29, 9 26" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M-8 21 Q-4 25, 0 24 Q4 25, 8 21" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            {/* V-cut Waist */}
            <path d="M-12 28 L-4 38 M12 28 L4 38" stroke="#2c2420" strokeWidth="1" fill="none" />

            {/* Open Robe Drapery */}
            <path d="M-12 -20 Q-18 10, -16 50 Q-22 90, -30 120" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <path d="M12 -20 Q20 10, 18 50 Q25 90, 35 120" fill="none" stroke="#2c2420" strokeWidth="1.5" />

            {/* Left Arm Holding Poetry Scroll & Floral Branch (心花意蕊) */}
            <path d="M-14 -15 Q-30 -10, -35 15" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            {/* Scroll */}
            <rect x="-42" y="10" width="12" height="28" fill="#fffde7" stroke="#2c2420" strokeWidth="1" rx="1" />
            <line x1="-36" y1="14" x2="-36" y2="34" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* ===== 5. STONE TABLET TITLE & CALLIGRAPHY VERSE INSET (九香楼东楹石刻赞语) ===== */}

          {/* Top Inscribed Title Box (总持九香花主、三闾道君及左右花史杜仙之像) */}
          <g transform="translate(140, 20)">
            <rect x="0" y="0" width="260" height="24" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.2" rx="2" opacity="0.9" />
            <text x="130" y="16" fontSize="10.5" fontFamily="serif" fontWeight="bold" fill="#2c2420" textAnchor="middle" letterSpacing="1">
              总持九香花主三闾道君及左右花史像
            </text>
          </g>

          {/* Right Calligraphy Verse Slab (公气为云...文运之祥) */}
          <g transform="translate(450, 48)">
            <rect x="0" y="0" width="75" height="200" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.2" rx="2" opacity="0.9" />
            <rect x="3" y="3" width="69" height="194" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" />

            {/* Vertical Calligraphy Lines */}
            {/* Column 1 */}
            <text x="58" y="20" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              公气为云 公神为水
            </text>
            <text x="58" y="110" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              在天在地 靡尽靡止
            </text>

            {/* Column 2 */}
            <text x="44" y="20" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              司文曰郎 司花曰主
            </text>
            <text x="44" y="110" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              列宿之精 群芳之祖
            </text>

            {/* Column 3 */}
            <text x="30" y="20" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              左英琼瑶 右青珊瑚
            </text>
            <text x="30" y="110" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              一气二气 同归殊途
            </text>

            {/* Column 4 */}
            <text x="16" y="20" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              五色炫彩 九华流香
            </text>
            <text x="16" y="110" fontSize="7.5" fontFamily="serif" fill="#1a1412" writingMode="vertical-rl">
              心花意蕊 文运之祥
            </text>
          </g>

          {/* ===== 6. VERMILION SEAL STAMPS (朱砂印章) ===== */}
          {/* Top Right Seal: 九香楼 */}
          <g transform="translate(485, 260)">
            <rect x="0" y="0" width="22" height="22" fill="url(#c60p13-sealGrad)" rx="1" />
            <text x="11" y="15" fontSize="9" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle">
              九香
            </text>
          </g>
          {/* Bottom Left Seal: 花主文星 */}
          <g transform="translate(18, 320)">
            <rect x="0" y="0" width="24" height="24" fill="url(#c60p13-sealGrad)" rx="1" />
            <text x="12" y="16" fontSize="9.5" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle">
              花主
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};

export default Chapter60Para13Illustration;
