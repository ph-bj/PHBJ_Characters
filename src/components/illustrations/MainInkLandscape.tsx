import React from 'react';

export const MainInkLandscape: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '320px' }}
      >
      {/* ===== DEFS: Ink wash gradients & filters for 水墨画 style ===== */}
      <defs>
        {/* Ink wash gradient for mountains */}
        <linearGradient id="inkMountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
        </linearGradient>
        {/* Radial wash for moon halo */}
        <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#2c2420" stopOpacity="0" />
          <stop offset="100%" stopColor="#2c2420" stopOpacity="0.06" />
        </radialGradient>
        {/* Mist gradient */}
        <linearGradient id="mistFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#f5efe0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f5efe0" stopOpacity="0.8" />
        </linearGradient>
        {/* Water wash */}
        <linearGradient id="waterWash" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
        </linearGradient>
        {/* Brush wobble - makes strokes waver like a hand-held brush */}
        <filter id="inkTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
        {/* Ink bleed - soft feathered edges like wet ink on rice paper (洇墨) */}
        <filter id="mlBleed" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
          <feDisplacementMap in="blur" in2="noise" scale="9" />
        </filter>
        {/* Heavier bleed for the farthest mountain wash */}
        <filter id="mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
          <feDisplacementMap in="blur" in2="noise" scale="12" />
        </filter>
        {/* Pale plum-blossom tint (淡彩) */}
        <radialGradient id="mlPlumTint" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b4494e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {/* ===== BACKGROUND ===== */}
      {/* Outer frame - double border like traditional scroll */}
      <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
      <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

      {/* ===== LAYERED INK WASHES (墨分五色) - bled tonal masses behind the linework ===== */}
      {/* Farthest range - palest wash, heavily bled */}
      <g filter="url(#mlBleedFar)">
        <path d="M12 172 Q50 102, 100 157 Q130 122, 175 152 Q210 102, 270 147 Q310 92, 370 142 Q410 107, 460 137 Q480 122, 515 167 L515 185 L12 185 Z" fill="#2c2420" opacity="0.14" />
      </g>
      {/* Mid range - bled washes hugging the actual ridge lines */}
      <g filter="url(#mlBleed)">
        <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="#2c2420" opacity="0.16" />
        <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="#2c2420" opacity="0.09" />
        {/* Pine canopy wash */}
        <ellipse cx="45" cy="62" rx="24" ry="12" fill="#2c2420" opacity="0.1" />
        {/* Bamboo grove wash */}
        <ellipse cx="404" cy="205" rx="34" ry="22" fill="#2c2420" opacity="0.08" />
        {/* Bank shadow along the pond edge */}
        <path d="M12 322 Q150 314, 300 320 Q420 324, 508 318 L508 334 L12 334 Z" fill="#2c2420" opacity="0.12" />
      </g>

      {/* All linework passes through the brush-wobble filter for a hand-painted feel */}
      <g filter="url(#inkTexture)">

      {/* ===== MOON with halo ===== */}
      <circle cx="420" cy="65" r="40" fill="url(#moonHalo)" />
      <circle cx="420" cy="65" r="26" fill="none" stroke="#2c2420" strokeWidth="1.5" />
      <circle cx="416" cy="62" r="21" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,4" />

      {/* ===== DISTANT MOUNTAINS with ink wash ===== */}
      {/* Far mountains - lighter wash */}
      <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="url(#inkMountain)" stroke="none" opacity="0.3" />
      <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      {/* Near mountain ridge */}
      <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="url(#inkMountain)" stroke="none" opacity="0.15" />
      <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,3" />
      {/* Mountain texture strokes (皴法 - cun fa) */}
      <path d="M80 140 Q85 145, 82 152" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
      <path d="M250 120 Q255 128, 252 135" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
      <path d="M350 115 Q354 122, 351 130" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
      <path d="M450 130 Q453 136, 451 142" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />

      {/* ===== MIST LAYER (云雾) ===== */}
      <rect x="10" y="165" width="500" height="20" fill="url(#mistFade)" />

      {/* ===== CLOUD WISPS (祥云) ===== */}
      <path d="M120 55 Q135 42, 155 48 Q168 38, 185 48 Q198 40, 212 50 Q222 42, 235 52" fill="none" stroke="#2c2420" strokeWidth="0.7" opacity="0.5" />
      <path d="M125 60 Q138 50, 152 55 Q162 48, 175 55" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
      <path d="M290 50 Q305 40, 322 46 Q332 38, 348 48" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />
      <path d="M55 80 Q68 72, 82 78 Q92 70, 105 78" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

      {/* ===== PLUM BLOSSOM BRANCH (梅花 - top left) ===== */}
      <path d="M12 25 Q40 42, 75 48 Q105 50, 130 45 Q145 42, 155 38" fill="none" stroke="#2c2420" strokeWidth="1.5" />
      <path d="M55 48 Q62 32, 78 28" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M100 47 Q108 38, 118 35" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Blossoms - 5 petal style, with a pale rouge wash (淡彩) */}
      <circle cx="72" cy="46" r="6" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="92" cy="48" r="5.5" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="112" cy="44" r="5" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="78" cy="28" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="130" cy="43" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="150" cy="38" r="4" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="118" cy="35" r="4" fill="url(#mlPlumTint)" stroke="none" />
      <circle cx="72" cy="46" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
      <circle cx="72" cy="46" r="2" fill="#2c2420" />
      <circle cx="92" cy="48" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
      <circle cx="92" cy="48" r="1.8" fill="#2c2420" />
      <circle cx="112" cy="44" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <circle cx="112" cy="44" r="1.5" fill="#2c2420" />
      <circle cx="78" cy="28" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <circle cx="78" cy="28" r="1.2" fill="#2c2420" />
      <circle cx="130" cy="43" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <circle cx="130" cy="43" r="1.2" fill="#2c2420" />
      <circle cx="150" cy="38" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <circle cx="150" cy="38" r="1" fill="#2c2420" />
      <circle cx="118" cy="35" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <circle cx="118" cy="35" r="1" fill="#2c2420" />

      {/* ===== WILLOW BRANCHES (柳枝 - top right) ===== */}
      <path d="M500 15 Q475 45, 465 95 Q460 125, 465 155" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M493 20 Q472 55, 468 105 Q465 135, 470 165" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <path d="M508 25 Q485 60, 478 100 Q475 120, 478 140" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <path d="M495 40 Q480 50, 472 70" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Willow leaves */}
      <path d="M475 60 Q468 56, 462 62" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M470 80 Q463 76, 458 82" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M468 100 Q460 96, 456 102" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M467 120 Q460 117, 455 122" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M472 140 Q465 137, 460 142" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M480 75 Q474 72, 468 76" fill="none" stroke="#2c2420" strokeWidth="0.3" />

      {/* ===== CHINESE PAVILION (亭) ===== */}
      {/* Roof ink mass - graded wash between the two roof lines */}
      <path d="M30 210 L80 178 L130 210 L124 210 L80 183 L36 210 Z" fill="#2c2420" opacity="0.45" />
      {/* Main roof */}
      <path d="M30 210 L80 178 L130 210" fill="none" stroke="#2c2420" strokeWidth="2" />
      <path d="M36 210 L80 183 L124 210" fill="none" stroke="#2c2420" strokeWidth="0.9" />
      {/* Roof upturned corners (飞檐) */}
      <path d="M28 211 Q23 206, 18 203" fill="none" stroke="#2c2420" strokeWidth="1.5" />
      <path d="M132 211 Q137 206, 142 203" fill="none" stroke="#2c2420" strokeWidth="1.5" />
      {/* Roof ridge ornament */}
      <circle cx="80" cy="177" r="2" fill="#2c2420" />
      {/* Pillars */}
      <line x1="50" y1="210" x2="50" y2="255" stroke="#2c2420" strokeWidth="1.5" />
      <line x1="110" y1="210" x2="110" y2="255" stroke="#2c2420" strokeWidth="1.5" />
      {/* Base platform */}
      <path d="M38 255 L122 255 L128 260 L32 260 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      {/* Railing */}
      <line x1="50" y1="238" x2="110" y2="238" stroke="#2c2420" strokeWidth="0.9" />
      <line x1="65" y1="238" x2="65" y2="255" stroke="#2c2420" strokeWidth="0.6" />
      <line x1="80" y1="238" x2="80" y2="255" stroke="#2c2420" strokeWidth="0.6" />
      <line x1="95" y1="238" x2="95" y2="255" stroke="#2c2420" strokeWidth="0.6" />

      {/* ===== FIGURE 1: Man practicing martial arts by pavilion (练武) ===== */}
      {/* Head */}
      <circle cx="68" cy="215" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Hair bun */}
      <path d="M65 210 Q68 206, 71 210" fill="none" stroke="#2c2420" strokeWidth="1" />
      <line x1="68" y1="207" x2="68" y2="210" stroke="#2c2420" strokeWidth="0.8" />
      {/* Neck */}
      <line x1="68" y1="220.5" x2="68" y2="223" stroke="#2c2420" strokeWidth="1" />
      {/* Broad shoulders */}
      <path d="M56 226 Q61 222, 68 223 Q75 222, 80 226" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Torso V-taper */}
      <line x1="56" y1="226" x2="60" y2="248" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="80" y1="226" x2="76" y2="248" stroke="#2c2420" strokeWidth="1.2" />
      {/* Chest */}
      <path d="M60 229 Q65 232, 68 230 Q71 232, 76 229" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      {/* Abs */}
      <line x1="68" y1="232" x2="68" y2="246" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M63 235 Q68 236, 73 235" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M63 239 Q68 240, 73 239" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M64 243 Q68 244, 72 243" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Waist */}
      <path d="M60 248 Q68 250, 76 248" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Left arm raised in martial pose */}
      <path d="M56 226 Q48 218, 42 212" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M42 212 Q38 208, 35 205" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      {/* Left arm muscle */}
      <path d="M52 220 Q48 216, 46 213" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Right arm extended forward */}
      <path d="M80 226 Q88 228, 95 225" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M95 225 Q100 223, 104 222" fill="none" stroke="#2c2420" strokeWidth="1" />
      {/* Right arm muscle */}
      <path d="M84 226 Q89 225, 93 224" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Legs in wide stance */}
      <line x1="63" y1="248" x2="55" y2="268" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="73" y1="248" x2="82" y2="268" stroke="#2c2420" strokeWidth="1.2" />
      {/* Thigh muscles */}
      <path d="M60 250 Q57 256, 56 262" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M76 250 Q79 256, 80 262" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Calf definition */}
      <path d="M57 260 Q55 264, 55 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M80 260 Q82 264, 82 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />

      {/* ===== MOON GATE (圆门) ===== */}
      {/* Wall wash - light ink tone on the masonry */}
      <path d="M158 217 L272 217 L272 298 L253 298 L253 255 A38 38 0 0 0 177 255 L177 298 L158 298 Z" fill="#2c2420" opacity="0.08" />
      <circle cx="215" cy="255" r="38" fill="none" stroke="#2c2420" strokeWidth="2" />
      {/* Gate walls */}
      <line x1="177" y1="217" x2="177" y2="298" stroke="#2c2420" strokeWidth="2" />
      <line x1="253" y1="217" x2="253" y2="298" stroke="#2c2420" strokeWidth="2" />
      <line x1="158" y1="217" x2="177" y2="217" stroke="#2c2420" strokeWidth="2" />
      <line x1="253" y1="217" x2="272" y2="217" stroke="#2c2420" strokeWidth="2" />
      <line x1="158" y1="217" x2="158" y2="298" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="272" y1="217" x2="272" y2="298" stroke="#2c2420" strokeWidth="1.2" />
      {/* Wall texture - brick lines */}
      <line x1="161" y1="232" x2="175" y2="232" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="161" y1="248" x2="175" y2="248" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="161" y1="264" x2="175" y2="264" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="161" y1="280" x2="175" y2="280" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="255" y1="232" x2="270" y2="232" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="255" y1="248" x2="270" y2="248" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="255" y1="264" x2="270" y2="264" stroke="#2c2420" strokeWidth="0.4" />
      <line x1="255" y1="280" x2="270" y2="280" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== FIGURE 2: Man standing inside moon gate (original, enlarged) ===== */}
      {/* Head */}
      <circle cx="215" cy="230" r="7" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Hair bun (traditional 髻) */}
      <path d="M211 223 Q215 218, 219 223" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      <line x1="215" y1="219" x2="215" y2="223" stroke="#2c2420" strokeWidth="0.9" />
      {/* Face detail - slight */}
      <path d="M213 229 Q215 230, 217 229" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      {/* Neck */}
      <line x1="215" y1="237" x2="215" y2="240" stroke="#2c2420" strokeWidth="1.1" />
      {/* Broad shoulders */}
      <path d="M200 244 Q207 239, 215 240 Q223 239, 230 244" fill="none" stroke="#2c2420" strokeWidth="1.4" />
      {/* Torso - V-taper muscular */}
      <line x1="200" y1="244" x2="205" y2="272" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="230" y1="244" x2="225" y2="272" stroke="#2c2420" strokeWidth="1.2" />
      {/* Chest muscles (胸肌) */}
      <path d="M205 248 Q210 252, 215 249 Q220 252, 225 248" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Abs definition (腹肌) */}
      <line x1="215" y1="252" x2="215" y2="270" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M209 256 Q215 257, 221 256" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M209 260 Q215 261, 221 260" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M210 264 Q215 265, 220 264" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M210 268 Q215 269, 220 268" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Waist / hip */}
      <path d="M205 272 Q215 275, 225 272" fill="none" stroke="#2c2420" strokeWidth="0.9" />
      {/* Left arm - relaxed at side */}
      <path d="M200 244 Q194 252, 191 262" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M191 262 Q190 267, 192 272" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      {/* Left bicep bulge */}
      <path d="M198 248 Q194 254, 194 260" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Right arm - relaxed */}
      <path d="M230 244 Q236 252, 239 262" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M239 262 Q240 267, 238 272" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      {/* Right bicep bulge */}
      <path d="M232 248 Q236 254, 236 260" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Legs */}
      <line x1="209" y1="272" x2="206" y2="293" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="221" y1="272" x2="224" y2="293" stroke="#2c2420" strokeWidth="1.2" />
      {/* Thigh muscle */}
      <path d="M210 275 Q208 281, 207 288" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M220 275 Q222 281, 223 288" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== GARDEN ROCKS (太湖石) ===== */}
      {/* Large rock formation */}
      <path d="M285 300 Q278 278, 292 268 Q298 256, 312 264 Q322 254, 332 268 Q342 274, 336 292 Q326 308, 308 312 Q290 310, 285 300" fill="none" stroke="#2c2420" strokeWidth="1.5" />
      {/* Rock holes (通透) */}
      <ellipse cx="300" cy="278" rx="5" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <ellipse cx="318" cy="284" rx="4" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <ellipse cx="305" cy="296" rx="3" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      {/* Rock texture (皴法) */}
      <path d="M290 288 Q294 285, 296 290" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M324 272 Q328 276, 326 282" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M295 270 Q299 268, 302 273" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M330 280 Q333 284, 331 289" fill="none" stroke="#2c2420" strokeWidth="0.3" />

      {/* Small rocks */}
      <path d="M340 310 Q337 298, 346 292 Q354 296, 358 306 Q352 315, 343 312 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M275 315 Q273 308, 280 305 Q286 308, 287 314 Q282 318, 276 316 Z" fill="none" stroke="#2c2420" strokeWidth="0.7" />

      {/* ===== FIGURE 3: Man leaning on garden rock, contemplating (倚石沉思) ===== */}
      {/* Head */}
      <circle cx="350" cy="260" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Hair bun */}
      <path d="M347 254 Q350 250, 353 254" fill="none" stroke="#2c2420" strokeWidth="1" />
      <line x1="350" y1="251" x2="350" y2="254" stroke="#2c2420" strokeWidth="0.8" />
      {/* Neck */}
      <line x1="350" y1="266" x2="350" y2="269" stroke="#2c2420" strokeWidth="1" />
      {/* Shoulders */}
      <path d="M338 272 Q343 268, 350 269 Q357 268, 362 272" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Torso leaning slightly */}
      <line x1="338" y1="272" x2="341" y2="296" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="362" y1="272" x2="358" y2="296" stroke="#2c2420" strokeWidth="1.2" />
      {/* Chest */}
      <path d="M342 276 Q347 279, 350 277 Q353 279, 358 276" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      {/* Abs */}
      <line x1="350" y1="279" x2="350" y2="294" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M345 282 Q350 283, 355 282" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M345 286 Q350 287, 355 286" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M346 290 Q350 291, 354 290" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Waist */}
      <path d="M341 296 Q350 298, 358 296" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Left arm resting on rock */}
      <path d="M338 272 Q332 278, 328 285" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M328 285 Q325 290, 322 292" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M335 276 Q331 282, 330 286" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Right arm - hand on hip */}
      <path d="M362 272 Q366 280, 364 288" fill="none" stroke="#2c2420" strokeWidth="1.2" />
      <path d="M364 288 Q362 293, 358 296" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M363 276 Q366 282, 365 288" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Legs - crossed casual stance */}
      <line x1="345" y1="296" x2="342" y2="320" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="355" y1="296" x2="352" y2="320" stroke="#2c2420" strokeWidth="1.2" />
      {/* Leg muscles */}
      <path d="M344 300 Q342 306, 342 312" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M354 300 Q352 306, 352 312" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== BAMBOO CLUSTER (竹林 - right side) ===== */}
      {/* Stalks */}
      <line x1="400" y1="180" x2="400" y2="320" stroke="#2c2420" strokeWidth="1.5" />
      <line x1="412" y1="185" x2="412" y2="320" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="393" y1="190" x2="393" y2="320" stroke="#2c2420" strokeWidth="1" />
      <line x1="420" y1="195" x2="420" y2="320" stroke="#2c2420" strokeWidth="0.8" />
      {/* Nodes */}
      <line x1="398" y1="210" x2="402" y2="210" stroke="#2c2420" strokeWidth="1.8" />
      <line x1="398" y1="240" x2="402" y2="240" stroke="#2c2420" strokeWidth="1.8" />
      <line x1="398" y1="270" x2="402" y2="270" stroke="#2c2420" strokeWidth="1.8" />
      <line x1="398" y1="300" x2="402" y2="300" stroke="#2c2420" strokeWidth="1.8" />
      <line x1="410" y1="220" x2="414" y2="220" stroke="#2c2420" strokeWidth="1.4" />
      <line x1="410" y1="250" x2="414" y2="250" stroke="#2c2420" strokeWidth="1.4" />
      <line x1="410" y1="280" x2="414" y2="280" stroke="#2c2420" strokeWidth="1.4" />
      <line x1="391" y1="225" x2="395" y2="225" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="391" y1="260" x2="395" y2="260" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="391" y1="295" x2="395" y2="295" stroke="#2c2420" strokeWidth="1.2" />
      {/* Bamboo leaves (竹叶) - each leaf a single pressed brush stroke: filled, tapered, varied ink tone */}
      <path d="M400 180 Q384 172, 370 180 Q384 176.5, 400 182 Z" fill="#2c2420" opacity="0.85" />
      <path d="M400 180 Q388 166, 372 165 Q386 171, 400 182 Z" fill="#2c2420" opacity="0.7" />
      <path d="M400 180 Q412 168, 425 174 Q412 173, 400 182 Z" fill="#2c2420" opacity="0.8" />
      <path d="M412 185 Q426 175, 438 180 Q425 180, 412 187 Z" fill="#2c2420" opacity="0.65" />
      <path d="M412 185 Q423 176, 432 168 Q421 180, 413 187 Z" fill="#2c2420" opacity="0.75" />
      <path d="M393 190 Q378 182, 365 188 Q379 186.5, 393 192 Z" fill="#2c2420" opacity="0.7" />
      <path d="M393 190 Q381 178, 368 176 Q380 184, 393 192 Z" fill="#2c2420" opacity="0.55" />
      <path d="M420 195 Q432 186, 442 192 Q431 191, 420 197 Z" fill="#2c2420" opacity="0.6" />
      {/* Mid-level leaves - lighter ink, receding */}
      <path d="M400 210 Q387 202, 374 208 Q387 206.5, 400 212 Z" fill="#2c2420" opacity="0.5" />
      <path d="M400 210 Q413 202, 426 208 Q413 206.5, 400 212 Z" fill="#2c2420" opacity="0.55" />
      <path d="M412 220 Q425 212, 438 218 Q425 216.5, 412 222 Z" fill="#2c2420" opacity="0.45" />
      <path d="M393 225 Q381 218, 368 224 Q381 222.5, 393 227 Z" fill="#2c2420" opacity="0.4" />
      {/* Lower leaves - palest, dissolving into mist */}
      <path d="M400 240 Q389 233, 376 238 Q389 237, 400 242 Z" fill="#2c2420" opacity="0.32" />
      <path d="M412 250 Q423 243, 434 248 Q423 247, 412 252 Z" fill="#2c2420" opacity="0.28" />

      {/* ===== FIGURE 4: Man meditating by bamboo (竹林打坐) ===== */}
      {/* Head */}
      <circle cx="440" cy="268" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Hair bun */}
      <path d="M437 262 Q440 258, 443 262" fill="none" stroke="#2c2420" strokeWidth="1" />
      <line x1="440" y1="259" x2="440" y2="262" stroke="#2c2420" strokeWidth="0.8" />
      {/* Neck */}
      <line x1="440" y1="274" x2="440" y2="276" stroke="#2c2420" strokeWidth="1" />
      {/* Shoulders */}
      <path d="M428 279 Q433 276, 440 277 Q447 276, 452 279" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Torso - upright seated */}
      <line x1="428" y1="279" x2="432" y2="302" stroke="#2c2420" strokeWidth="1.2" />
      <line x1="452" y1="279" x2="448" y2="302" stroke="#2c2420" strokeWidth="1.2" />
      {/* Chest */}
      <path d="M432 283 Q436 286, 440 284 Q444 286, 448 283" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      {/* Abs */}
      <line x1="440" y1="286" x2="440" y2="300" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M435 289 Q440 290, 445 289" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M435 293 Q440 294, 445 293" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M436 297 Q440 298, 444 297" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Waist */}
      <path d="M432 302 Q440 304, 448 302" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Arms in meditation mudra (hands on knees) */}
      {/* Left arm */}
      <path d="M428 279 Q424 286, 422 294" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      <path d="M422 294 Q420 298, 424 302" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M426 283 Q423 289, 423 294" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Right arm */}
      <path d="M452 279 Q456 286, 458 294" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      <path d="M458 294 Q460 298, 456 302" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M454 283 Q457 289, 457 294" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Crossed legs (盘腿) */}
      <path d="M435 302 Q428 308, 425 312 Q422 316, 430 318" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      <path d="M445 302 Q452 308, 455 312 Q458 316, 450 318" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      {/* Leg overlap */}
      <path d="M430 318 Q438 315, 440 310 Q442 315, 450 318" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Thigh muscles */}
      <path d="M433 304 Q430 309, 428 314" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M447 304 Q450 309, 452 314" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== WATER / POND (池塘) ===== */}
      <rect x="12" y="330" width="496" height="55" fill="url(#waterWash)" />
      <path d="M12 330 Q60 324, 120 330 Q180 336, 240 330 Q300 324, 360 330 Q420 336, 508 330" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <path d="M30 338 Q80 334, 140 338 Q200 342, 260 338 Q320 334, 380 338 Q430 342, 490 338" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M50 346 Q100 343, 160 346 Q220 349, 280 346 Q340 343, 400 346 Q450 349, 500 346" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.6" />
      {/* Water ripples */}
      <path d="M180 350 Q190 348, 200 350 Q210 352, 220 350" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
      <path d="M350 355 Q360 353, 370 355 Q380 357, 390 355" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
      {/* Lotus leaves in water */}
      <ellipse cx="120" cy="345" rx="10" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      <line x1="120" y1="341" x2="120" y2="349" stroke="#2c2420" strokeWidth="0.3" />
      <ellipse cx="380" cy="348" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <line x1="380" y1="345" x2="380" y2="351" stroke="#2c2420" strokeWidth="0.3" />
      {/* Lotus bud - tipped with plum rouge */}
      <line x1="150" y1="340" x2="150" y2="330" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M147 330 Q150 324, 153 330 Q150 332, 147 330 Z" fill="url(#mlPlumTint)" stroke="none" />
      <path d="M147 330 Q150 324, 153 330" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      <path d="M148 331 Q150 326, 152 331" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      {/* Moon reflection (水中月) - broken shimmer below the moon */}
      <path d="M408 352 Q420 349, 432 352" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
      <path d="M412 358 Q420 355.5, 428 358" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.32" />
      <path d="M415 364 Q420 362.5, 425 364" fill="none" stroke="#2c2420" strokeWidth="0.35" opacity="0.25" />
      <path d="M410 370 Q420 368, 430 370" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.18" />

      {/* ===== FIGURE 5: Man bathing in pond (沐浴) ===== */}
      {/* Head and upper body above water */}
      <circle cx="320" cy="322" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Hair bun - wet/loose */}
      <path d="M317 316 Q320 312, 323 316" fill="none" stroke="#2c2420" strokeWidth="1" />
      <line x1="320" y1="313" x2="320" y2="316" stroke="#2c2420" strokeWidth="0.8" />
      {/* Hair flowing down */}
      <path d="M314 322 Q312 326, 311 330" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Neck */}
      <line x1="320" y1="328" x2="320" y2="330" stroke="#2c2420" strokeWidth="1" />
      {/* Shoulders emerging from water */}
      <path d="M308 333 Q313 330, 320 331 Q327 330, 332 333" fill="none" stroke="#2c2420" strokeWidth="1.3" />
      {/* Upper chest visible */}
      <path d="M310 335 Q315 338, 320 336 Q325 338, 330 335" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      {/* Arms resting on water surface */}
      <path d="M308 333 Q302 336, 298 338" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      <path d="M332 333 Q338 336, 342 338" fill="none" stroke="#2c2420" strokeWidth="1.1" />
      {/* Shoulder/deltoid definition */}
      <path d="M310 332 Q308 334, 306 336" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M330 332 Q332 334, 334 336" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Water splashes around body */}
      <path d="M305 340 Q310 338, 315 340" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M325 340 Q330 338, 335 340" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M295 342 Q300 340, 305 342" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M335 342 Q340 340, 345 342" fill="none" stroke="#2c2420" strokeWidth="0.3" />

      {/* ===== STEPPING STONES (踏石) ===== */}
      <ellipse cx="155" cy="300" rx="10" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <ellipse cx="175" cy="310" rx="9" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      <ellipse cx="195" cy="318" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />

      {/* ===== PINE TREE (松树 - left side) ===== */}
      <path d="M18 155 Q22 140, 20 120 Q18 100, 25 85 Q30 72, 28 60" fill="none" stroke="#2c2420" strokeWidth="2" />
      {/* Pine branches */}
      <path d="M25 85 Q40 78, 55 82" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M22 100 Q10 94, 15 85" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <path d="M28 60 Q38 52, 48 56" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Pine needle clusters */}
      <path d="M48 56 Q55 50, 52 44" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M48 56 Q56 54, 58 48" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M48 56 Q54 58, 58 54" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M55 82 Q62 76, 60 70" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M55 82 Q63 80, 66 74" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M55 82 Q60 85, 65 80" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M15 85 Q8 80, 10 74" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M15 85 Q10 82, 6 76" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      {/* Bark texture */}
      <path d="M22 130 Q24 128, 22 125" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M24 110 Q26 108, 24 105" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== CRANE (仙鹤 - auspicious bird) ===== */}
      <path d="M470 290 Q475 285, 478 280" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      <circle cx="478" cy="278" r="3" fill="none" stroke="#2c2420" strokeWidth="0.8" />
      {/* Beak */}
      <path d="M481 278 L486 276" fill="none" stroke="#2c2420" strokeWidth="0.7" />
      {/* Body */}
      <path d="M470 290 Q465 295, 462 300 Q458 306, 465 310" fill="none" stroke="#2c2420" strokeWidth="1" />
      <path d="M470 290 Q476 296, 478 302 Q480 308, 475 312" fill="none" stroke="#2c2420" strokeWidth="1" />
      {/* Tail feathers */}
      <path d="M465 310 Q460 314, 455 312" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      <path d="M465 310 Q462 316, 458 315" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      {/* Legs */}
      <line x1="468" y1="310" x2="466" y2="325" stroke="#2c2420" strokeWidth="0.6" />
      <line x1="473" y1="310" x2="475" y2="325" stroke="#2c2420" strokeWidth="0.6" />
      {/* Wing detail */}
      <path d="M468 295 Q472 292, 476 296" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      {/* ===== GROUND / EARTH TEXTURE ===== */}
      <path d="M12 320 Q100 315, 155 318 Q200 322, 285 318 Q370 314, 440 320 Q480 323, 508 318" fill="none" stroke="#2c2420" strokeWidth="0.6" />
      {/* Grass tufts */}
      <path d="M35 268 Q38 262, 40 268" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M38 268 Q42 263, 44 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M140 305 Q143 299, 145 305" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M460 325 Q463 320, 465 325" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M490 322 Q493 317, 495 322" fill="none" stroke="#2c2420" strokeWidth="0.3" />
      <path d="M370 318 Q372 313, 375 318" fill="none" stroke="#2c2420" strokeWidth="0.3" />

      {/* ===== FLYING BIRDS (飞鸟) ===== */}
      <path d="M180 95 Q185 88, 190 92 Q195 86, 200 92" fill="none" stroke="#2c2420" strokeWidth="0.5" />
      <path d="M200 88 Q204 82, 208 86 Q212 80, 216 86" fill="none" stroke="#2c2420" strokeWidth="0.4" />
      <path d="M160 100 Q164 94, 168 98 Q172 93, 176 98" fill="none" stroke="#2c2420" strokeWidth="0.4" />

      </g>

      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">品</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="488" y="200" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">品花宝鉴</text>
      <text x="502" y="200" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">陈森</text>
      </svg>
    </div>
  );
};
