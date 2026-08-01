import React from "react";

/**
 * Visualizes Chapter 60 Paragraph 4:
 * 文泽道：「做两块好，就镶嵌在东西两楹。」
 * 王恂道：「若画杜仙女，就画他在采莲船上的样子。」
 * 吉甫道：「玉侬梦见那面镜子，必非无因。我画条龙执着这面镜子，就做头幅，好不好？」
 * 大家说道：「好。」
 * 子玉道：「这云龙人必猜有个寓意在里头呢。」
 *
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic:
 * - Rice-paper ink bleed filters & brush wobble
 * - Twin stone pillars framing the scene ("东西两楹")
 * - Ethereal Cloud Dragon in dark swirling ink clouds holding the bright spirit mirror ("云龙执镜")
 * - Fairy Du in fluttering robes on a lotus-picking boat ("杜仙女在采莲船上")
 * - Scholars Jifu, Ziyu, Wenze, Wang Xun, and male opera actor Qinxian (Yunong) gathered at garden terrace table
 * - Male scholars and opera actors featuring defined pectoral and 6-pack abdominal muscles (abs)
 */
export const Chapter60Para4Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[var(--paper-border)] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        {/* ===== DEFS: Ink wash gradients, glows & filters ===== */}
        <defs>
          {/* Spirit Mirror Golden/Silver Radial Glow */}
          <radialGradient id="c60p4-mirrorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ffe082" stopOpacity="0.7" />
            <stop offset="70%" stopColor="var(--paper-border)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </radialGradient>

          {/* Dragon Ink Sky Gradient */}
          <linearGradient id="c60p4-skyInk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--art-ink-deep)" stopOpacity="0.85" />
            <stop offset="50%" stopColor="var(--art-ink)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--art-paper)" stopOpacity="0.1" />
          </linearGradient>

          {/* Lotus Pond Water Wash */}
          <linearGradient id="c60p4-waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-ink)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.22" />
          </linearGradient>

          {/* Lotus Leaf Pale Green Wash */}
          <radialGradient id="c60p4-lotusTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4a7c59" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.1" />
          </radialGradient>

          {/* Brush wobble filter - hand-painted ink stroke effect */}
          <filter id="c60p4-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="60" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed filter - wet rice paper matted edge (洇墨) */}
          <filter id="c60p4-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="16" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed filter for far background mountains & cloud mist */}
          <filter id="c60p4-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="36" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>
        </defs>

        {/* ===== SCROLL DOUBLE BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES (墨分五色 - 远山与云水) ===== */}
        <g filter="url(#c60p4-mlBleedFar)">
          {/* Distant mountain silhouette */}
          <path d="M12 140 Q80 80, 160 110 Q240 60, 320 95 Q400 50, 515 120 L515 190 L12 190 Z" fill="var(--art-ink)" opacity="0.15" />
          {/* Swirling ink sky for Cloud Dragon */}
          <path d="M12 12 L508 12 L508 150 Q380 90, 260 130 Q140 100, 12 145 Z" fill="url(#c60p4-skyInk)" opacity="0.25" />
          {/* Water wash for lower lotus pond */}
          <path d="M12 280 Q200 270, 515 285 L515 390 L12 390 Z" fill="url(#c60p4-waterWash)" />
        </g>

        {/* Mid-ground bled glows */}
        <g filter="url(#c60p4-mlBleed)">
          {/* Spirit Mirror Radiance */}
          <circle cx="280" cy="85" r="45" fill="url(#c60p4-mirrorGlow)" opacity="0.85" />
          {/* Lotus pond mist */}
          <path d="M12 310 Q120 290, 240 315 Q360 295, 515 320" fill="none" stroke="var(--art-paper)" strokeWidth="25" opacity="0.8" />
        </g>

        {/* Main Linework with Ink Texture Filter */}
        <g filter="url(#c60p4-inkTexture)">

          {/* ===== 1. TWIN STONE PILLARS / EAST & WEST PILLARS (东西两楹 / 镶嵌石碑) ===== */}
          {/* Left Pillar (东楹) */}
          <g transform="translate(18, 50)">
            <rect x="0" y="0" width="22" height="310" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" rx="1" />
            <rect x="3" y="10" width="16" height="290" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" strokeDasharray="4,2" />
            <path d="M-4 0 L26 0 M-4 310 L26 310" stroke="var(--art-ink)" strokeWidth="1.4" />
            {/* Seal / Inscription on Left Pillar */}
            <rect x="5" y="25" width="12" height="40" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.8" />
            <text x="11" y="42" fontSize="7" fontFamily="serif" fill="var(--art-ink)" textAnchor="middle" writingMode="tb">东楹石质</text>
          </g>

          {/* Right Pillar (西楹) */}
          <g transform="translate(480, 50)">
            <rect x="0" y="0" width="22" height="310" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" rx="1" />
            <rect x="3" y="10" width="16" height="290" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" strokeDasharray="4,2" />
            <path d="M-4 0 L26 0 M-4 310 L26 310" stroke="var(--art-ink)" strokeWidth="1.4" />
            {/* Seal / Inscription on Right Pillar */}
            <rect x="5" y="25" width="12" height="40" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.8" />
            <text x="11" y="42" fontSize="7" fontFamily="serif" fill="var(--art-ink)" textAnchor="middle" writingMode="tb">西楹石质</text>
          </g>


          {/* ===== 2. TOP CENTER: CLOUD DRAGON HOLDING SPIRIT MIRROR (云龙执着这面镜子 / 头幅《品花宝鉴》) ===== */}
          <g transform="translate(180, 20)">
            {/* Swirling Ink Clouds around Dragon (云气/祥云) */}
            <path d="M10 50 Q30 25, 60 40 Q90 20, 120 45 Q150 25, 180 50 Q210 30, 230 65" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" opacity="0.6" />
            <path d="M25 60 Q50 40, 85 55 Q115 35, 150 55 Q180 40, 210 65" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" opacity="0.4" />

            {/* Dragon Body (云龙蜿蜒) */}
            {/* Main Dragon S-Curve Body */}
            <path
              d="M30 75 Q60 25, 110 50 Q160 75, 200 45 Q240 20, 220 70 Q195 105, 150 85 Q110 70, 70 95"
              fill="none"
              stroke="var(--art-ink)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M30 75 Q60 25, 110 50 Q160 75, 200 45 Q240 20, 220 70 Q195 105, 150 85 Q110 70, 70 95"
              fill="none"
              stroke="var(--art-paper)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Dragon Scales & Dorsal Fins (龙鳞与龙背鳍) */}
            <path d="M50 42 Q53 38, 56 42 M70 36 Q73 32, 76 36 M90 40 Q93 36, 96 40 M170 54 Q173 50, 176 54 M190 42 Q193 38, 196 42" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />

            {/* Dragon Head (龙首威严) */}
            <g transform="translate(205, 55)">
              {/* Snout & Jaw */}
              <path d="M0 0 Q-15 -10, -30 -5 Q-35 5, -20 12 Q-10 14, 0 0 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
              {/* Open Mouth with teeth/fangs */}
              <path d="M-25 -2 L-20 4 L-15 0" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />
              {/* Dragon Whiskers (龙须) */}
              <path d="M-28 -5 Q-45 -15, -55 -5" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
              <path d="M-22 8 Q-38 20, -50 18" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
              {/* Dragon Horns (龙角) */}
              <path d="M-5 -8 Q0 -22, 10 -28 M2 -5 Q12 -18, 18 -20" stroke="var(--art-ink)" strokeWidth="1.3" fill="none" />
              {/* Eye & Mane */}
              <circle cx="-12" cy="-4" r="2.5" fill="var(--art-ink)" />
              <path d="M-2 -12 Q12 -14, 20 -5" stroke="var(--art-ink)" strokeWidth="1" fill="none" />
            </g>

            {/* Dragon Claw Holding the Spirit Mirror (一爪托着一面镜子) */}
            <g transform="translate(110, 68)">
              {/* Arm & Sharp Claws */}
              <path d="M0 -5 Q-15 15, -10 28" stroke="var(--art-ink)" strokeWidth="2.5" fill="none" />
              {/* 4 Claws clutching the mirror handle/edge */}
              <path d="M-15 22 L-22 30 M-10 25 L-12 36 M-4 24 L2 34 M-18 18 L-25 24" stroke="var(--art-ink)" strokeWidth="1.3" fill="none" />

              {/* The Spirit Mirror (照妖镜/品花宝鉴镜) */}
              <g transform="translate(-10, 38)">
                <circle cx="0" cy="0" r="19" fill="#ffe082" opacity="0.6" stroke="var(--art-ink)" strokeWidth="1.8" />
                <circle cx="0" cy="0" r="16" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" strokeDasharray="3,2" />
                {/* Ancient Mirror Pattern / Character "鉴" */}
                <text x="0" y="4" fontSize="9" fontFamily="serif" fill="var(--art-ink)" textAnchor="middle" fontWeight="bold">鑑</text>
                {/* Mirror Handle / Ribbon tassel */}
                <path d="M0 19 L-4 35 M0 19 L4 35" stroke="var(--art-bloom)" strokeWidth="1.2" />
                <circle cx="0" cy="35" r="2" fill="var(--art-bloom)" />
              </g>
            </g>
          </g>


          {/* ===== 3. LOWER LEFT: FAIRY DU ON LOTUS-PICKING BOAT (杜仙女在采莲船上的样子) ===== */}
          <g transform="translate(50, 270)">
            {/* Lotus Leaves & Ripples (荷叶与水波) */}
            <path d="M0 65 Q30 55, 70 62 Q110 50, 150 60" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M-10 80 Q40 70, 90 78 Q130 68, 170 75" stroke="var(--art-ink)" strokeWidth="0.5" fill="none" strokeDasharray="5,3" opacity="0.5" />

            {/* Lotus Leaves (荷叶) */}
            <g transform="translate(10, 50)">
              <ellipse cx="0" cy="0" rx="18" ry="7" fill="url(#c60p4-lotusTint)" stroke="var(--art-ink)" strokeWidth="1" />
              <line x1="0" y1="0" x2="-10" y2="-4" stroke="var(--art-ink)" strokeWidth="0.4" />
              <line x1="0" y1="0" x2="12" y2="-2" stroke="var(--art-ink)" strokeWidth="0.4" />
              <line x1="0" y1="0" x2="2" y2="5" stroke="var(--art-ink)" strokeWidth="0.4" />
            </g>
            <g transform="translate(145, 45)">
              <ellipse cx="0" cy="0" rx="15" ry="6" fill="url(#c60p4-lotusTint)" stroke="var(--art-ink)" strokeWidth="0.9" />
            </g>
            {/* Pink Lotus Blossom (荷花) */}
            <g transform="translate(130, 32)">
              <path d="M0 10 Q-5 0, 0 -8 Q5 0, 0 10 Z" fill="var(--art-bloom)" opacity="0.7" stroke="var(--art-ink)" strokeWidth="0.6" />
              <path d="M-4 8 Q-9 2, -4 -4 Q1 2, -4 8 Z" fill="var(--art-bloom)" opacity="0.6" stroke="var(--art-ink)" strokeWidth="0.5" />
              <line x1="0" y1="10" x2="2" y2="25" stroke="var(--art-ink)" strokeWidth="0.8" />
            </g>

            {/* The Lotus-Picking Boat (采莲船) */}
            <path d="M25 45 Q70 60, 125 45 L135 35 Q70 50, 15 35 Z" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.5" />
            <line x1="30" y1="44" x2="120" y2="44" stroke="var(--art-ink)" strokeWidth="0.6" />

            {/* Fairy Du (杜仙女 - 云鬟雾縠，清艳绝伦) */}
            <g transform="translate(70, 0)">
              {/* Hair Bun & Fairy Ornaments (云鬟) */}
              <circle cx="0" cy="0" r="6" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
              <ellipse cx="0" cy="-6" rx="4" ry="5" fill="var(--art-ink)" /> {/* High hair bun */}
              <path d="M2 -8 Q8 -12, 12 -8" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" /> {/* Hairpin tassel */}

              {/* Graceful Face Profile */}
              <path d="M-2 2 Q-4 4, -2 6" stroke="var(--art-ink)" strokeWidth="0.6" fill="none" />

              {/* Fairy Robes (雾縠 / 飘带) */}
              <path d="M-7 8 L-14 42 L14 42 L7 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              {/* Fluttering Celestial Ribbon (飞天仙带) */}
              <path d="M-10 12 Q-25 15, -30 2 Q-22 -8, -12 2" stroke="var(--art-ink)" strokeWidth="0.9" fill="none" opacity="0.85" />
              <path d="M10 12 Q25 18, 32 8 Q28 -2, 14 4" stroke="var(--art-ink)" strokeWidth="0.9" fill="none" opacity="0.85" />

              {/* Slender Arms holding a lotus stalk (手采莲花) */}
              <path d="M-6 12 Q-14 22, -8 28" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />
              <path d="M6 12 Q14 20, 8 26" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />
              <line x1="-8" y1="28" x2="-18" y2="12" stroke="var(--art-ink)" strokeWidth="0.8" />
              <ellipse cx="-18" cy="10" rx="3" ry="5" fill="var(--art-bloom)" opacity="0.7" stroke="var(--art-ink)" strokeWidth="0.5" />
            </g>
          </g>


          {/* ===== 4. LOWER RIGHT: GATHERING OF SCHOLARS & OPERA ACTOR WITH DEFINED ABS (名士与旦角画案论画) ===== */}
          <g transform="translate(195, 185)">
            {/* Garden Terrace / Stone Pavilion Base */}
            <polygon points="0,150 270,150 260,135 10,135" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Large Ink Painting Table (画案 / 石桌) */}
            <rect x="35" y="100" width="180" height="35" fill="none" stroke="var(--art-ink)" strokeWidth="1.5" />
            <line x1="35" y1="108" x2="215" y2="108" stroke="var(--art-ink)" strokeWidth="0.6" />
            {/* Table Legs */}
            <line x1="45" y1="135" x2="45" y2="150" stroke="var(--art-ink)" strokeWidth="1.4" />
            <line x1="205" y1="135" x2="205" y2="150" stroke="var(--art-ink)" strokeWidth="1.4" />

            {/* Items on Painting Table: Scroll with Dragon Sketch, Inkstone, Brushes, Tea Cups */}
            {/* Paper Handscroll depicting Dragon Draft */}
            <polygon points="60,102 145,102 140,107 55,107" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.8" />
            <path d="M80 104 Q95 102, 110 105" stroke="var(--art-ink)" strokeWidth="0.5" fill="none" /> {/* Tiny dragon sketch on paper */}
            {/* Inkstone & Inkstick (砚台墨块) */}
            <rect x="155" y="102" width="12" height="5" fill="var(--art-ink)" rx="1" />
            {/* Brush Stand & Brushes (笔架) */}
            <path d="M175 106 L180 101 L185 106" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />
            <line x1="178" y1="106" x2="173" y2="98" stroke="var(--art-ink)" strokeWidth="0.7" />
            {/* Tea Cups (茶杯) */}
            <ellipse cx="195" cy="104" rx="2.5" ry="1.5" stroke="var(--art-ink)" strokeWidth="0.7" fill="none" />


            {/* --- SCHOLAR 1 (Right): JIN JIFU (金吉甫 - 主画者) WITH DEFINED ABS --- */}
            <g transform="translate(180, 50)">
              {/* Head & Scholar Cap (巾帼) */}
              <circle cx="0" cy="0" r="7" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <path d="M-6 -3 L0 -10 L6 -3 Z" fill="var(--art-ink)" /> {/* Scholar cap */}

              {/* Scholar Tunic Open at Chest showing Defined Pectorals & ABS (腹肌格块) */}
              <path d="M-8 8 L-14 52 L14 52 L8 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
              <path d="M-8 8 L-3 42 M8 8 L3 42" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />

              {/* Defined Pectoral Chest Lines */}
              <path d="M-6 14 Q0 17, 6 14" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" />
              {/* 6-Pack Abs Lines */}
              <line x1="0" y1="16" x2="0" y2="40" stroke="var(--art-ink)" strokeWidth="0.6" />
              <path d="M-5 21 Q0 23.5, 5 21" fill="none" stroke="var(--art-ink)" strokeWidth="0.55" />
              <path d="M-5 27 Q0 29.5, 5 27" fill="none" stroke="var(--art-ink)" strokeWidth="0.55" />
              <path d="M-4 33 Q0 35, 4 33" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-3 38 Q0 39.5, 3 38" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

              {/* Holding Brush in Right Hand, gesturing toward dragon drawing */}
              <path d="M-8 14 Q-22 24, -18 36" stroke="var(--art-ink)" strokeWidth="1.3" fill="none" />
              <line x1="-18" y1="36" x2="-28" y2="30" stroke="var(--art-ink)" strokeWidth="1.2" /> {/* Brush */}
            </g>


            {/* --- SCHOLAR 2 (Middle Right): MEI ZIYU (梅子玉) WITH DEFINED ABS --- */}
            <g transform="translate(135, 42)">
              {/* Head & Scholar Hair Knot */}
              <circle cx="0" cy="0" r="6.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <circle cx="0" cy="-7" r="3" fill="var(--art-ink)" />

              {/* Open Robe Collar showing ABS */}
              <path d="M-7 8 L-12 58 L12 58 L7 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <path d="M-7 8 L-2 44 M7 8 L2 44" stroke="var(--art-ink)" strokeWidth="1" fill="none" />

              {/* Abs Lines */}
              <line x1="0" y1="15" x2="0" y2="40" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 20 Q0 22, 4 20" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 26 Q0 28, 4 26" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-3 32 Q0 34, 3 32" fill="none" stroke="var(--art-ink)" strokeWidth="0.45" />

              {/* Hands leaning thoughtfully on table */}
              <path d="M-7 14 Q-12 30, -5 45" stroke="var(--art-ink)" strokeWidth="1.2" fill="none" />
            </g>


            {/* --- SCHOLAR 3 (Middle): LIU WENZE (刘文泽 - 提议做两块嵌东西楹) WITH DEFINED ABS --- */}
            <g transform="translate(90, 48)">
              {/* Head */}
              <circle cx="0" cy="0" r="6.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <path d="M-4 -4 Q0 -8, 4 -4" stroke="var(--art-ink)" strokeWidth="1" fill="none" />

              {/* Tunic open showing Abs */}
              <path d="M-7 8 L-13 52 L13 52 L7 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <path d="M-7 8 L-2 40 M7 8 L2 40" stroke="var(--art-ink)" strokeWidth="1" fill="none" />

              {/* Abs Lines */}
              <line x1="0" y1="16" x2="0" y2="38" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 20 Q0 22, 4 20" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 26 Q0 28, 4 26" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-3 31 Q0 32.5, 3 31" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

              {/* Arm pointing to the left towards East Pillar (东西两楹) */}
              <path d="M-7 12 Q-30 0, -55 5" stroke="var(--art-ink)" strokeWidth="1.3" fill="none" />
            </g>


            {/* --- SCHOLAR 4 (Middle Left): WANG XUN (王恂 - 提议画采莲船杜仙女) WITH DEFINED ABS --- */}
            <g transform="translate(45, 52)">
              {/* Head */}
              <circle cx="0" cy="0" r="6.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <circle cx="0" cy="-6" r="2.8" fill="var(--art-ink)" />

              {/* Tunic open showing Abs */}
              <path d="M-7 8 L-12 48 L12 48 L7 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
              <path d="M-7 8 L-2 36 M7 8 L2 36" stroke="var(--art-ink)" strokeWidth="1" fill="none" />

              {/* Abs Lines */}
              <line x1="0" y1="15" x2="0" y2="34" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 19 Q0 21, 4 19" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-4 25 Q0 27, 4 25" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />

              {/* Arm pointing down left towards Lotus Boat */}
              <path d="M-7 12 Q-22 25, -35 35" stroke="var(--art-ink)" strokeWidth="1.2" fill="none" />
            </g>


            {/* --- OPERA ACTOR / SCHOLAR (Far Left): QU QINXIAN / YUNONG (屈琴仙/玉侬) WITH DEFINED ABS --- */}
            <g transform="translate(0, 40)">
              {/* Refined Handsome Head & Hair Tie of Opera Actor */}
              <circle cx="0" cy="0" r="7" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
              <path d="M-5 -4 Q0 -9, 5 -4" fill="var(--art-ink)" /> {/* Dan/Scholar hair band */}

              {/* Elegant Tunic open at chest showing Defined Actor ABS */}
              <path d="M-8 8 L-14 60 L14 60 L8 8 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
              <path d="M-8 8 L-3 44 M8 8 L3 44" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />

              {/* Pectorals & Defined 6-pack Abs for Opera Actor */}
              <path d="M-5 13 Q0 16, 5 13" fill="none" stroke="var(--art-ink)" strokeWidth="0.75" />
              <line x1="0" y1="15" x2="0" y2="40" stroke="var(--art-ink)" strokeWidth="0.6" />
              <path d="M-4 19 Q0 21.5, 4 19" fill="none" stroke="var(--art-ink)" strokeWidth="0.55" />
              <path d="M-4 25 Q0 27.5, 4 25" fill="none" stroke="var(--art-ink)" strokeWidth="0.55" />
              <path d="M-3 31 Q0 33, 3 31" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
              <path d="M-3 36 Q0 37.5, 3 36" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

              {/* Standing gracefully with hands folded in sleeves */}
              <path d="M-8 14 Q-14 28, -2 40 M8 14 Q14 28, 2 40" stroke="var(--art-ink)" strokeWidth="1.3" fill="none" />
            </g>
          </g>

          {/* ===== 5. TRADITIONAL CHINESE RED SEALS (印章) ===== */}
          {/* Top Right Seal ("云龙执镜") */}
          <g transform="translate(445, 20)">
            <rect x="0" y="0" width="18" height="26" fill="none" stroke="var(--art-bloom)" strokeWidth="1.5" rx="1" />
            <rect x="2" y="2" width="14" height="22" fill="var(--art-bloom)" opacity="0.15" />
            <text x="9" y="11" fontSize="5.5" fontFamily="serif" fill="var(--art-bloom)" textAnchor="middle" fontWeight="bold">云龙</text>
            <text x="9" y="20" fontSize="5.5" fontFamily="serif" fill="var(--art-bloom)" textAnchor="middle" fontWeight="bold">执镜</text>
          </g>

          {/* Bottom Left Seal ("品花宝鉴") */}
          <g transform="translate(48, 355)">
            <rect x="0" y="0" width="28" height="15" fill="none" stroke="var(--art-bloom)" strokeWidth="1.4" rx="1" />
            <rect x="2" y="2" width="24" height="11" fill="var(--art-bloom)" opacity="0.15" />
            <text x="14" y="10" fontSize="6" fontFamily="serif" fill="var(--art-bloom)" textAnchor="middle" fontWeight="bold">品花宝鉴</text>
          </g>

        </g>
      </svg>
    </div>
  );
};
