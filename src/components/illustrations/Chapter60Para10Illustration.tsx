import React from "react";

/**
 * Visualizes Chapter 60 Paragraph 10:
 * 琴仙看东楹嵌的第一方画，上云下水，云水中间，隐着一龙，露出一爪，托着一面镜子，上题曰：《品花宝鉴》。
 * 刻着次贤的赞语是：上不在天，下不在田。云生九霄，水出重渊。神奇变化，气象万千。
 * 灵珠之圆，明镜之悬。烛微照幽，隐奸显贤。如月之临，如水之鲜。亦曰媸其媸媸，而妍其妍。
 *
 * Traditional Chinese Ink Landscape (水墨画) Aesthetic in style of `MainInkLandscape.tsx`:
 * - Double border rice-paper scroll layout with authentic ink bleed filters & brush wobble
 * - East Pillar (东楹) framed stone carving inset in Nine Fragrance Garden (九香楼)
 * - Upper celestial clouds ("云生九霄") & churning deep waters ("水出重渊")
 * - Swirling ethereal Ink Dragon hidden amidst mist & waves ("隐着一龙")
 * - Mirror inscribed with 《品花宝鉴》 with gold/silver light illuminating good & revealing evil ("烛微照幽，隐奸显贤")
 */
export const Chapter60Para10Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 430 380"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        {/* ===== DEFS: Filters & Gradients in MainInkLandscape style ===== */}
        <defs>
          {/* Spirit Mirror Radiant Glow */}
          <radialGradient id="c60p10-mirrorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffde7" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#fff59d" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#ffe082" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#d4c5a9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Celestial Cloud Sky Ink Wash */}
          <linearGradient id="c60p10-cloudSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#2c2420" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#f5efe0" stopOpacity="0.15" />
          </linearGradient>

          {/* Churning Deep Waters Wash */}
          <linearGradient id="c60p10-waterAbyss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14100e" stopOpacity="0.9" />
          </linearGradient>

          {/* Dragon Metallic Ink Gradient */}
          <linearGradient id="c60p10-dragonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d322c" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#1a1412" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#57493e" stopOpacity="0.85" />
          </linearGradient>

          {/* East Pillar Stone Inset Framing Gradient */}
          <linearGradient id="c60p10-pillarGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3e342d" stopOpacity="0.9" />
            <stop offset="15%" stopColor="#8c7a6b" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#4a3e35" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#241e1a" stopOpacity="0.95" />
          </linearGradient>

          {/* Brush wobble filter - hand-painted ink stroke effect */}
          <filter id="c60p10-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="6010" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Soft ink bleed filter for wet rice paper effect (洇墨) */}
          <filter id="c60p10-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="1060" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="8" />
          </filter>

          {/* Heavy bleed filter for celestial mist & mountain background */}
          <filter id="c60p10-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3060" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>
        </defs>

        {/* ===== SCROLL DOUBLE BORDER ===== */}
        <rect x="3" y="3" width="424" height="374" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="414" height="364" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES (远景云雾与墨韵) ===== */}
        <g filter="url(#c60p10-mlBleedFar)">
          {/* Swirling celestial sky ink wash */}
          <path d="M12 12 L418 12 L418 160 Q270 110, 215 145 Q120 110, 12 155 Z" fill="url(#c60p10-cloudSky)" opacity="0.3" />
          {/* Deep water abyss wash at bottom */}
          <path d="M12 280 Q180 260, 300 275 Q380 265, 418 290 L418 368 L12 368 Z" fill="url(#c60p10-waterAbyss)" opacity="0.25" />
          {/* Distant pavilion roof & garden trees silhouette */}
          <path d="M12 170 Q70 140, 130 160 Q200 135, 270 155 L270 240 L12 240 Z" fill="#2c2420" opacity="0.08" />
        </g>

        {/* Spirit Mirror Ambient Light Aura (Bled behind linework) */}
        <g filter="url(#c60p10-mlBleed)">
          <circle cx="215" cy="125" r="55" fill="url(#c60p10-mirrorGlow)" opacity="0.85" />
          <circle cx="215" cy="125" r="85" fill="url(#c60p10-mirrorGlow)" opacity="0.35" />
        </g>

        {/* Main Linework with Brush Texture Filter */}
        <g filter="url(#c60p10-inkTexture)">

          {/* ===== ARCHITECTURE: NINE FRAGRANCE PAVILION & EAST PILLAR (九香楼东楹) ===== */}
          {/* Corridor Floor / Terrace */}
          <path d="M12 360 L418 360" stroke="#2c2420" strokeWidth="1.5" fill="none" />
          <path d="M12 375 L418 375" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="6,4" fill="none" />

          {/* East Pillar (东楹) Frame on Left-Center (x: 40 to 385, y: 20 to 360) */}
          {/* Pillar Wooden Column */}
          <rect x="40" y="20" width="345" height="340" fill="none" stroke="#2c2420" strokeWidth="2" rx="2" />
          <rect x="44" y="24" width="337" height="332" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="3,3" />

          {/* Pillar Bracket Structure & Ornamental Roof Eaves (楹联柱头) */}
          <path d="M30 20 L395 20 L395 28 L30 28 Z" fill="#2c2420" opacity="0.12" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M25 15 Q210 8, 400 15 L395 20 L30 20 Z" fill="#2c2420" opacity="0.25" stroke="#2c2420" strokeWidth="1.4" />
          {/* Eave Tiles Texture */}
          <path d="M40 16 L50 20 M90 16 L100 20 M140 16 L150 20 M190 16 L200 20 M240 16 L250 20 M290 16 L300 20 M340 16 L350 20" stroke="#2c2420" strokeWidth="0.7" />

          {/* Pillar Inset Stone Relief Border ("东楹嵌的第一方画") */}
          <rect x="52" y="32" width="321" height="316" fill="url(#c60p10-pillarGrad)" opacity="0.08" />
          <rect x="55" y="35" width="315" height="310" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <rect x="58" y="38" width="309" height="304" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" />

          {/* Title Header on Stone Slab: 《品花宝鉴》 */}
          <g transform="translate(215, 52)">
            <rect x="-65" y="-12" width="130" height="22" fill="#f5efe0" stroke="#2c2420" strokeWidth="1" rx="2" />
            <text x="0" y="3" textAnchor="middle" fill="#2c2420" fontSize="12" fontWeight="bold" fontFamily="serif" letterSpacing="3">
              《品花宝鉴》
            </text>
            {/* Red Title Seal Stamp */}
            <rect x="52" y="-10" width="16" height="18" fill="#b4494e" opacity="0.85" rx="1" />
            <text x="60" y="3" textAnchor="middle" fill="#f5efe0" fontSize="8" fontWeight="bold" fontFamily="serif">
              宝
            </text>
          </g>

          {/* ===== THE EMBEDDED PAINTING CONTENT ("上云下水，云水中间，隐着一龙，露出一爪，托着一面镜子") ===== */}

          {/* 1. UPPER CLOUDS ("上云" / "云生九霄") */}
          <g stroke="#2c2420" strokeWidth="1.2" fill="none" opacity="0.85">
            {/* Billowing cloud swirls */}
            <path d="M60 65 Q90 50, 130 65 Q160 55, 200 68 Q240 50, 290 62 Q330 50, 360 65" />
            <path d="M65 80 Q100 68, 140 82 Q180 70, 230 85 Q280 72, 330 82" strokeWidth="0.8" opacity="0.6" />
            <path d="M70 95 Q115 85, 160 98 Q210 88, 270 96 Q320 85, 355 95" strokeWidth="0.5" strokeDasharray="4,2" opacity="0.5" />
            
            {/* Deep celestial clouds framing the dragon head */}
            <path d="M60 115 Q95 102, 125 118 Q155 105, 185 120" />
            <path d="M260 115 Q295 100, 330 118 Q350 108, 362 116" />
          </g>

          {/* 2. LOWER WATERS ("下水" / "水出重渊") */}
          <g stroke="#2c2420" strokeWidth="1.2" fill="none">
            {/* Churning waves & water spray */}
            <path d="M60 335 Q100 310, 140 330 Q180 305, 220 332 Q260 310, 300 330 Q340 312, 362 335" />
            <path d="M60 320 Q85 305, 115 320 Q145 300, 175 318 Q205 302, 235 318 Q270 300, 305 322 Q335 305, 362 320" strokeWidth="0.9" opacity="0.75" />
            <path d="M60 305 Q95 292, 130 308 Q165 290, 200 305 Q240 292, 280 308 Q320 295, 362 308" strokeWidth="0.7" strokeDasharray="5,3" opacity="0.6" />
            
            {/* Water spray drops (水珠飞溅) */}
            <circle cx="110" cy="300" r="1.5" fill="#2c2420" opacity="0.6" />
            <circle cx="175" cy="295" r="1.2" fill="#2c2420" opacity="0.5" />
            <circle cx="245" cy="298" r="1.5" fill="#2c2420" opacity="0.6" />
            <circle cx="315" cy="290" r="1" fill="#2c2420" opacity="0.5" />
          </g>

          {/* 3. ETHEREAL INK DRAGON ("云水中间，隐着一龙") */}
          <g>
            {/* Dragon Body Swirls in Clouds & Waves (S-curve dragon body) */}
            {/* Main Spine & Body Path */}
            <path
              d="M75 220 Q105 170, 150 190 Q195 210, 240 180 Q280 150, 320 180 Q350 210, 330 260 Q300 290, 250 270 Q200 250, 150 275 Q110 295, 80 270"
              fill="none"
              stroke="url(#c60p10-dragonGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Inner Ink Dragon Outline & Scales */}
            <path
              d="M75 220 Q105 170, 150 190 Q195 210, 240 180 Q280 150, 320 180 Q350 210, 330 260 Q300 290, 250 270 Q200 250, 150 275 Q110 295, 80 270"
              fill="none"
              stroke="#2c2420"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Dragon Scales Texture (龙鳞纹) */}
            <path d="M125 185 Q130 180, 135 185 M140 188 Q145 183, 150 188 M155 192 Q160 187, 165 192" stroke="#f5efe0" strokeWidth="0.8" opacity="0.7" fill="none" />
            <path d="M215 188 Q220 182, 225 188 M230 183 Q235 178, 240 183 M245 178 Q250 173, 255 178" stroke="#f5efe0" strokeWidth="0.8" opacity="0.7" fill="none" />
            <path d="M290 170 Q295 165, 300 170 M305 178 Q310 173, 315 178 M320 190 Q325 185, 330 190" stroke="#f5efe0" strokeWidth="0.8" opacity="0.7" fill="none" />
            <path d="M260 268 Q255 262, 250 268 M240 262 Q235 256, 230 262 M220 258 Q215 252, 210 258" stroke="#f5efe0" strokeWidth="0.8" opacity="0.7" fill="none" />

            {/* Dragon Back Dorsal Fins (龙脊鳍) */}
            <path d="M120 178 L123 170 L128 180 M135 180 L139 172 L143 182 M150 185 L155 177 L160 188 M225 178 L230 170 L234 180 M240 172 L245 163 L250 174 M300 162 L306 153 L310 165" stroke="#2c2420" strokeWidth="1.2" fill="#2c2420" opacity="0.8" />

            {/* Dragon Head emerging from clouds (x: 135, y: 140) */}
            <g transform="translate(135, 140)">
              {/* Head Base */}
              <path d="M0 0 Q15 -18, 32 -10 Q45 0, 38 18 Q20 28, -5 20 Q-15 10, 0 0 Z" fill="#2c2420" opacity="0.9" stroke="#2c2420" strokeWidth="1.5" />
              {/* Dragon Snout & Mouth Open with Fire/Mist */}
              <path d="M32 -10 Q50 -8, 55 5 Q52 18, 38 18" fill="none" stroke="#2c2420" strokeWidth="1.6" />
              <path d="M40 2 M44 8 M42 12" stroke="#2c2420" strokeWidth="1.2" /> {/* Fangs */}
              
              {/* Glowing Dragon Eyes */}
              <circle cx="22" cy="-4" r="4.5" fill="#fffde7" stroke="#2c2420" strokeWidth="1.2" />
              <circle cx="23" cy="-4" r="2" fill="#2c2420" />

              {/* Dragon Horns (鹿角) */}
              <path d="M8 -12 Q5 -30, -5 -40 M0 -25 Q-8 -30, -12 -25" stroke="#2c2420" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M18 -14 Q18 -32, 10 -42 M15 -28 Q8 -32, 4 -28" stroke="#2c2420" strokeWidth="1.8" fill="none" strokeLinecap="round" />

              {/* Dragon Whiskers (龙须) */}
              <path d="M48 2 Q70 -10, 95 -5" stroke="#2c2420" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M45 10 Q65 25, 88 18" stroke="#2c2420" strokeWidth="1.2" fill="none" strokeLinecap="round" />

              {/* Dragon Mane / Beard (龙须鬃毛) */}
              <path d="M-8 8 Q-25 15, -15 30 Q-5 25, -2 18" stroke="#2c2420" strokeWidth="1.3" fill="#2c2420" opacity="0.75" />
              <path d="M5 22 Q-10 38, 5 45 Q12 35, 15 25" stroke="#2c2420" strokeWidth="1.2" fill="#2c2420" opacity="0.7" />
            </g>

            {/* Dragon Tail Splashing in Waters (x: 80, y: 270) */}
            <path d="M80 270 Q55 285, 45 310 Q65 315, 75 295 Z" stroke="#2c2420" strokeWidth="1.5" fill="#2c2420" opacity="0.8" />
          </g>

          {/* 4. DRAGON CLAW HOLDING THE SPIRIT MIRROR ("露出一爪，托着一面镜子") */}
          <g transform="translate(215, 140)">
            {/* Dragon Arm extending forward out of mist */}
            <path d="M-25 45 Q-10 25, 0 5" stroke="#2c2420" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M-25 45 Q-10 25, 0 5" stroke="#f5efe0" strokeWidth="1" strokeDasharray="3,3" fill="none" opacity="0.6" />

            {/* Four Sharp Dragon Claws wrapping around mirror handle/base */}
            {/* Claw 1 */}
            <path d="M-8 0 Q-15 -10, -5 -18 L-2 -15" stroke="#2c2420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Claw 2 */}
            <path d="M0 -5 Q0 -20, 8 -22 L8 -17" stroke="#2c2420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Claw 3 */}
            <path d="M8 -2 Q18 -15, 22 -18 L18 -14" stroke="#2c2420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Claw 4 (Thumb) */}
            <path d="M-10 8 Q-22 5, -20 -5 L-16 -3" stroke="#2c2420" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Muscle tendons in dragon claw */}
            <circle cx="-2" cy="0" r="4.5" fill="#2c2420" />

            {/* THE SPIRIT MIRROR ("一面镜子" / "明镜之悬") */}
            <g transform="translate(0, -32)">
              {/* Outer Mirror Bronze/Gold Rim */}
              <circle cx="0" cy="0" r="28" fill="#f5efe0" stroke="#2c2420" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="24.5" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,2" />
              <circle cx="0" cy="0" r="22" fill="#fffde7" stroke="#2c2420" strokeWidth="1.2" opacity="0.9" />

              {/* Mirror Reflection / Light Beam Effect ("烛微照幽，隐奸显贤") */}
              <path d="M-14 -14 Q0 18, 18 -10 Z" fill="#fff" opacity="0.6" />
              <line x1="-12" y1="-8" x2="12" y2="8" stroke="#ffe082" strokeWidth="1.5" opacity="0.8" />

              {/* Mirror Inscription Symbol / Pearl Motif ("灵珠之圆") */}
              <circle cx="0" cy="0" r="6" fill="none" stroke="#2c2420" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#b4494e" opacity="0.85" />

              {/* Rays of Sacred Light radiating from Mirror (烛照九霄) */}
              <g stroke="#ffe082" strokeWidth="1" opacity="0.65">
                <line x1="0" y1="-28" x2="0" y2="-45" strokeDasharray="3,2" />
                <line x1="20" y1="-20" x2="35" y2="-33" strokeDasharray="3,2" />
                <line x1="28" y1="0" x2="45" y2="0" strokeDasharray="3,2" />
                <line x1="20" y1="20" x2="33" y2="33" strokeDasharray="3,2" />
                <line x1="-20" y1="-20" x2="-35" y2="-33" strokeDasharray="3,2" />
                <line x1="-28" y1="0" x2="-45" y2="0" strokeDasharray="3,2" />
              </g>
            </g>
          </g>

          {/* Traditional Red Seals (朱砂印章) on Painting Margins */}
          <g transform="translate(25, 40)">
            <rect x="0" y="0" width="18" height="24" fill="#b4494e" opacity="0.85" rx="1" />
            <text x="9" y="10" textAnchor="middle" fill="#f5efe0" fontSize="7" fontWeight="bold" fontFamily="serif">
              九香
            </text>
            <text x="9" y="19" textAnchor="middle" fill="#f5efe0" fontSize="7" fontWeight="bold" fontFamily="serif">
              雅集
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};
