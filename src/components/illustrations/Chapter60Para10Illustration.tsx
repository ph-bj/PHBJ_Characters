import React from "react";

/**
 * Visualizes Chapter 60 Paragraph 10:
 * 琴仙看东楹嵌的第一方画，上云下水，云水中间，隐着一龙，露出一爪，托着一面镜子，上题曰：《品花宝鉴》。
 * 刻着次贤的赞语是：上不在天，下不在田。云生九霄，水出重渊。神奇变化，气象万千。
 * 灵珠之圆，明镜之悬。烛微照幽，隐奸显贤。如月之临，如水之鲜。亦曰媸其媸媸，而妍其妍。
 *
 * In the style of `MainInkLandscape.tsx` (Traditional Chinese Water-Ink Landscape / 水墨画):
 * - Rice-paper ink bleed filters (#mlBleed, #mlBleedFar) & hand-painted brush wobble (#inkTexture)
 * - Harmonious ink wash palette (#2c2420 strokes and washes, #f5efe0 mist, #8b2500 red seals, #b4494e plum tints)
 * - East Pillar (东楹) architectural frame with stone relief inset displaying the Cloud-Dragon Spirit Mirror painting
 * - Scholar & Opera Actor Du Qinyan (琴仙) with defined chest and 6-pack abs admiring the painting on the East Pillar
 * - Taihu garden rocks, plum blossom branch, flying birds, and calligraphic vertical inscriptions
 */
export const Chapter60Para10Illustration: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "320px" }}
      >
        {/* ===== DEFS: Ink wash gradients & filters for 水墨画 style ===== */}
        <defs>
          {/* Ink wash gradient for mountains & dragon wash */}
          <linearGradient id="c60p10-inkMountain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>

          {/* Radial wash for moon & mirror halo */}
          <radialGradient id="c60p10-moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="#2c2420" stopOpacity="0" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.06" />
          </radialGradient>

          {/* Mist gradient */}
          <linearGradient id="c60p10-mistFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f5efe0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0.8" />
          </linearGradient>

          {/* Water wash */}
          <linearGradient id="c60p10-waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
          </linearGradient>

          {/* Brush wobble - makes strokes waver like a hand-held brush */}
          <filter id="c60p10-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - soft feathered edges like wet ink on rice paper (洇墨) */}
          <filter id="c60p10-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavier bleed for distant atmosphere */}
          <filter id="c60p10-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>

          {/* Pale plum-blossom tint (淡彩) */}
          <radialGradient id="c60p10-mlPlumTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (墨分五色) ===== */}
        {/* Far background mountain & cloud wash */}
        <g filter="url(#c60p10-mlBleedFar)">
          <path d="M12 172 Q50 102, 100 157 Q130 122, 175 152 Q210 102, 270 147 Q310 92, 370 142 Q410 107, 460 137 Q480 122, 515 167 L515 185 L12 185 Z" fill="#2c2420" opacity="0.14" />
        </g>
        {/* Mid-range washes */}
        <g filter="url(#c60p10-mlBleed)">
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="#2c2420" opacity="0.16" />
          {/* Dragon cloud shadow mass inside pillar painting */}
          <ellipse cx="325" cy="120" rx="90" ry="45" fill="#2c2420" opacity="0.1" />
          {/* Water shadow along lower terrace */}
          <path d="M12 342 Q150 334, 300 340 Q420 344, 508 338 L508 354 L12 354 Z" fill="#2c2420" opacity="0.12" />
        </g>

        {/* All linework passes through the brush-wobble filter for a hand-painted feel */}
        <g filter="url(#c60p10-inkTexture)">

          {/* ===== MOON WITH HALO ===== */}
          <circle cx="420" cy="55" r="35" fill="url(#c60p10-moonHalo)" />
          <circle cx="420" cy="55" r="22" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <circle cx="417" cy="52" r="18" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* ===== DISTANT MOUNTAINS & MIST ===== */}
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="url(#c60p10-inkMountain)" stroke="none" opacity="0.25" />
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Mountain texture strokes (皴法) */}
          <path d="M80 140 Q85 145, 82 152" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M150 135 Q155 142, 152 148" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />

          {/* Mist Layer */}
          <rect x="10" y="165" width="500" height="18" fill="url(#c60p10-mistFade)" />

          {/* Cloud wisps */}
          <path d="M120 50 Q135 40, 155 45 Q168 35, 185 45 Q198 38, 212 48" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.5" />
          <path d="M290 45 Q305 35, 322 42 Q332 35, 348 45" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />

          {/* ===== PLUM BLOSSOM BRANCH (梅花 - top left) ===== */}
          <path d="M12 25 Q40 42, 75 48 Q105 50, 130 45" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M55 48 Q62 32, 78 28" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Blossoms - pale plum tint */}
          <circle cx="72" cy="46" r="5" fill="url(#c60p10-mlPlumTint)" stroke="none" />
          <circle cx="92" cy="48" r="4.5" fill="url(#c60p10-mlPlumTint)" stroke="none" />
          <circle cx="78" cy="28" r="4" fill="url(#c60p10-mlPlumTint)" stroke="none" />
          <circle cx="112" cy="44" r="4" fill="url(#c60p10-mlPlumTint)" stroke="none" />
          <circle cx="72" cy="46" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="72" cy="46" r="1.5" fill="#2c2420" />
          <circle cx="92" cy="48" r="3.8" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="92" cy="48" r="1.2" fill="#2c2420" />
          <circle cx="78" cy="28" r="3.2" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <circle cx="78" cy="28" r="1" fill="#2c2420" />


          {/* ===== ARCHITECTURE: EAST PILLAR & CARVED INSET PAINTING (九香楼东楹第一方画) ===== */}
          {/* Main East Pillar Outer Frame */}
          <rect x="180" y="22" width="285" height="348" fill="none" stroke="#2c2420" strokeWidth="2.2" rx="2" />
          <rect x="184" y="26" width="277" height="340" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,2" />

          {/* Roof Eaves & Decorative Tiles atop Pillar */}
          <path d="M168 22 L477 22 L477 28 L168 28 Z" fill="#2c2420" opacity="0.2" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M162 16 Q322 8, 483 16 L477 22 L168 22 Z" fill="#2c2420" opacity="0.35" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M162 16 Q156 12, 150 10" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          <path d="M483 16 Q489 12, 495 10" fill="none" stroke="#2c2420" strokeWidth="1.4" />

          {/* Inset Stone Relief Panel ("东楹嵌的第一方画") */}
          <rect x="192" y="34" width="261" height="324" fill="#2c2420" opacity="0.04" />
          <rect x="192" y="34" width="261" height="324" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <rect x="195" y="37" width="255" height="318" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="5,2" />

          {/* Corner Cloud Motif Engravings (角花云纹) */}
          <path d="M195 52 Q208 40, 222 52 M195 52 Q182 66, 195 80" stroke="#2c2420" strokeWidth="0.9" fill="none" opacity="0.6" />
          <path d="M450 52 Q437 40, 423 52 M450 52 Q463 66, 450 80" stroke="#2c2420" strokeWidth="0.9" fill="none" opacity="0.6" />
          <path d="M195 340 Q208 352, 222 340 M195 340 Q182 326, 195 312" stroke="#2c2420" strokeWidth="0.9" fill="none" opacity="0.6" />
          <path d="M450 340 Q437 352, 423 340 M450 340 Q463 326, 450 312" stroke="#2c2420" strokeWidth="0.9" fill="none" opacity="0.6" />

          {/* 1. Header Title Scroll Slab atop Painting: 《品花宝鉴》 */}
          <g transform="translate(322.5, 55)">
            <rect x="-65" y="-11" width="130" height="22" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.2" rx="2" />
            <rect x="-62" y="-8" width="124" height="16" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" />
            <circle cx="-69" cy="0" r="3" fill="#2c2420" />
            <circle cx="69" cy="0" r="3" fill="#2c2420" />
            <text x="0" y="4" textAnchor="middle" fill="#2c2420" fontSize="12" fontWeight="bold" fontFamily="serif" letterSpacing="3">
              《品花宝鉴》
            </text>
            {/* Small red seal beside title */}
            <rect x="52" y="-8" width="8" height="16" fill="none" stroke="#8b2500" strokeWidth="0.8" />
            <text x="56" y="3" textAnchor="middle" fill="#8b2500" fontSize="5" fontFamily="serif">宝</text>
          </g>

          {/* 2. Upper Celestial Clouds ("上云" / "云生九霄") */}
          <g stroke="#2c2420" fill="none">
            <path d="M200 80 Q235 65, 275 82 Q315 68, 355 84 Q395 68, 445 80" strokeWidth="1.2" opacity="0.8" />
            <path d="M205 96 Q248 84, 290 100 Q335 84, 380 98 Q420 86, 445 96" strokeWidth="0.8" opacity="0.6" />
            <path d="M210 112 Q255 100, 305 116 Q355 102, 440 112" strokeWidth="0.5" strokeDasharray="4,2" opacity="0.5" />
          </g>

          {/* 3. Lower Deep Waters ("下水" / "水出重渊") */}
          <g stroke="#2c2420" fill="none">
            <path d="M198 335 Q240 310, 285 330 Q330 305, 375 332 Q415 312, 448 335" strokeWidth="1.4" />
            <path d="M198 320 Q235 298, 275 316 Q315 295, 355 318 Q395 298, 448 320" strokeWidth="1" opacity="0.8" />
            <path d="M198 304 Q240 285, 285 302 Q330 282, 375 304 Q415 285, 448 304" strokeWidth="0.7" strokeDasharray="5,2" opacity="0.6" />
            {/* Wave Spray Droplets */}
            <circle cx="250" cy="295" r="1.5" fill="#2c2420" opacity="0.6" />
            <circle cx="340" cy="292" r="1.5" fill="#2c2420" opacity="0.6" />
            <circle cx="410" cy="288" r="1.2" fill="#2c2420" opacity="0.5" />
          </g>

          {/* 4. Ethereal Hidden Ink Dragon ("云水中间，隐着一龙") */}
          <g>
            {/* Dragon S-curve Body Shadow Wash */}
            <path
              d="M215 210 Q245 160, 285 185 Q325 210, 365 175 Q405 150, 435 185 Q450 220, 425 255 Q390 288, 335 265 Q280 242, 235 270"
              fill="none"
              stroke="#2c2420"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.22"
            />
            {/* Dragon Body Outlines */}
            <path
              d="M215 210 Q245 160, 285 185 Q325 210, 365 175 Q405 150, 435 185 Q450 220, 425 255 Q390 288, 335 265 Q280 242, 235 270"
              fill="none"
              stroke="#2c2420"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M215 210 Q245 160, 285 185 Q325 210, 365 175 Q405 150, 435 185 Q450 220, 425 255 Q390 288, 335 265 Q280 242, 235 270"
              fill="none"
              stroke="#f5efe0"
              strokeWidth="1"
              strokeDasharray="6,4"
              opacity="0.7"
            />

            {/* Dragon Dorsal Spine Fins (龙脊鳍) */}
            <path
              d="M255 172 L260 162 L266 174 M275 178 L281 167 L287 180 M375 162 L381 151 L387 165 M395 158 L401 147 L407 162"
              stroke="#2c2420"
              strokeWidth="1.2"
              fill="#2c2420"
              opacity="0.8"
            />

            {/* Dragon Head Emerging Mystically from Mist (x: 235, y: 145) */}
            <g transform="translate(235, 145)">
              <path d="M0 0 Q14 -18, 30 -10 Q42 2, 35 18 Q18 26, -5 18 Q-14 10, 0 0 Z" fill="#2c2420" opacity="0.85" stroke="#2c2420" strokeWidth="1.4" />
              {/* Snout & Mouth */}
              <path d="M30 -10 Q46 -8, 52 4 Q50 18, 35 18" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              <path d="M38 2 L36 7 M44 8 L42 12" stroke="#2c2420" strokeWidth="1.1" /> {/* Sharp Fangs */}
              {/* Eye */}
              <circle cx="20" cy="-4" r="4" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.2" />
              <circle cx="21" cy="-4" r="1.8" fill="#2c2420" />
              {/* Antlers */}
              <path d="M8 -12 Q5 -28, -4 -38 M0 -24 Q-7 -28, -11 -24" stroke="#2c2420" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M18 -14 Q18 -30, 10 -40 M15 -27 Q8 -30, 4 -27" stroke="#2c2420" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              {/* Whiskers */}
              <path d="M44 2 Q65 -10, 88 -5" stroke="#2c2420" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              <path d="M42 10 Q60 24, 82 18" stroke="#2c2420" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            </g>

            {/* Dragon Tail Splashing in Waters */}
            <g transform="translate(235, 270)">
              <path d="M0 0 Q-22 14, -32 35 Q-14 40, -4 22 Z" stroke="#2c2420" strokeWidth="1.4" fill="#2c2420" opacity="0.75" />
            </g>
          </g>

          {/* 5. Dragon Claw Holding the Spirit Mirror ("露出一爪，托着一面镜子") */}
          <g transform="translate(325, 155)">
            {/* Dragon Arm extending from mist */}
            <path d="M-25 45 Q-12 24, 0 6" stroke="#2c2420" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M-25 45 Q-12 24, 0 6" stroke="#f5efe0" strokeWidth="1.2" strokeDasharray="3,2" fill="none" opacity="0.7" />

            {/* Claws grasping mirror base */}
            <g stroke="#2c2420" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M-8 2 Q-14 -8, -4 -16 L-1 -13" />
              <path d="M0 -3 Q0 -18, 8 -20 L8 -15" />
              <path d="M8 0 Q18 -13, 21 -16 L18 -12" />
              <path d="M-10 8 Q-21 5, -19 -4 L-15 -2" />
            </g>

            {/* THE SPIRIT MIRROR ("一面镜子" / "明镜之悬 / 灵珠之圆") */}
            <g transform="translate(0, -32)">
              <circle cx="0" cy="0" r="25" fill="#f5efe0" stroke="#2c2420" strokeWidth="2.2" />
              <circle cx="0" cy="0" r="22" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,2" />
              <circle cx="0" cy="0" r="19" fill="url(#c60p10-mlPlumTint)" stroke="#2c2420" strokeWidth="1" />

              {/* Pearl motif at center ("灵珠之圆") */}
              <circle cx="0" cy="0" r="5.5" fill="#f5efe0" stroke="#2c2420" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#2c2420" opacity="0.85" />
              <circle cx="-0.8" cy="-0.8" r="0.9" fill="#fff" />

              {/* Radiating rays of sacred light ("烛微照幽，隐奸显贤") */}
              <g stroke="#2c2420" strokeWidth="0.6" strokeDasharray="3,2" opacity="0.65">
                <line x1="0" y1="-25" x2="0" y2="-40" />
                <line x1="18" y1="-18" x2="30" y2="-30" />
                <line x1="25" y1="0" x2="40" y2="0" />
                <line x1="18" y1="18" x2="30" y2="30" />
                <line x1="0" y1="25" x2="0" y2="40" />
                <line x1="-18" y1="18" x2="-30" y2="30" />
                <line x1="-25" y1="0" x2="-40" y2="0" />
                <line x1="-18" y1="-18" x2="-30" y2="-30" />
              </g>
            </g>
          </g>

          {/* 6. Engraved Eulogy Verses ("次贤赞语") along the left side of stone inset */}
          <g transform="translate(204, 130)">
            <text x="0" y="0" fill="#2c2420" fontSize="7.5" fontFamily="serif" writingMode="vertical-rl" opacity="0.75" letterSpacing="1">
              云生九霄 水出重渊
            </text>
            <text x="12" y="0" fill="#2c2420" fontSize="7.5" fontFamily="serif" writingMode="vertical-rl" opacity="0.75" letterSpacing="1">
              烛微照幽 隐奸显贤
            </text>
          </g>


          {/* ===== FIGURE: SCHOLAR & OPERA ACTOR DU QINXIAN (琴仙看东楹嵌的第一方画) WITH DEFINED ABS ===== */}
          <g transform="translate(105, 205)">
            {/* Head */}
            <circle cx="0" cy="0" r="6.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Traditional Hair Bun (髻) & Ribbon Tie */}
            <path d="M-4 -6 Q0 -10, 4 -6" fill="none" stroke="#2c2420" strokeWidth="1" />
            <line x1="0" y1="-9" x2="0" y2="-6" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M3 -8 Q8 -11, 11 -7" stroke="#2c2420" strokeWidth="0.7" fill="none" /> {/* Hair ribbon */}

            {/* Neck */}
            <line x1="0" y1="6.5" x2="0" y2="9.5" stroke="#2c2420" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M-15 14 Q-7 10, 0 11 Q7 10, 15 14" fill="none" stroke="#2c2420" strokeWidth="1.4" />

            {/* Scholar Robe Open at Chest showing Pectoral & ABS Definition (腹肌) */}
            <line x1="-15" y1="14" x2="-10" y2="44" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="15" y1="14" x2="10" y2="44" stroke="#2c2420" strokeWidth="1.2" />

            {/* Robe Lapel Draping */}
            <path d="M-15 14 L-4 44 M15 14 L4 44" stroke="#2c2420" strokeWidth="0.9" fill="none" />

            {/* Chest Pectorals (胸肌) */}
            <path d="M-9 18 Q-4 21, 0 19 Q4 21, 9 18" fill="none" stroke="#2c2420" strokeWidth="0.75" />

            {/* 6-Pack Abs Definition (腹肌格块) */}
            <line x1="0" y1="21" x2="0" y2="42" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M-6 25 Q0 26.5, 6 25" fill="none" stroke="#2c2420" strokeWidth="0.45" />
            <path d="M-6 30 Q0 31.5, 6 30" fill="none" stroke="#2c2420" strokeWidth="0.45" />
            <path d="M-5 35 Q0 36.5, 5 35" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M-4 40 Q0 41, 4 40" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Waist Belt */}
            <path d="M-10 44 Q0 46, 10 44" fill="none" stroke="#2c2420" strokeWidth="0.9" />

            {/* Left Arm gesturing towards the pillar painting */}
            <path d="M-15 14 Q-24 22, -28 32" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M-28 32 Q-22 38, -12 44" fill="none" stroke="#2c2420" strokeWidth="1" />
            {/* Left Bicep Muscle */}
            <path d="M-19 18 Q-24 24, -23 29" fill="none" stroke="#2c2420" strokeWidth="0.5" />

            {/* Right Arm raised, holding a traditional folding fan (折扇) */}
            <path d="M15 14 Q28 8, 38 12" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M38 12 Q45 15, 48 22" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            {/* Folding Fan */}
            <path d="M48 22 L62 10 Q66 18, 58 26 Z" fill="#f5efe0" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="48" y1="22" x2="60" y2="17" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="48" y1="22" x2="55" y2="22" stroke="#2c2420" strokeWidth="0.5" />

            {/* Robe Skirt & Legs in elegant stance */}
            <path d="M-10 44 L-16 110 M10 44 L16 110" stroke="#2c2420" strokeWidth="1.3" fill="none" />
            <path d="M-16 110 Q0 114, 16 110" stroke="#2c2420" strokeWidth="1.1" fill="none" />

            {/* Leg & Thigh Contour under thin silk robe */}
            <path d="M-6 46 Q-9 65, -8 85" stroke="#2c2420" strokeWidth="0.4" fill="none" opacity="0.6" />
            <path d="M6 46 Q9 65, 8 85" stroke="#2c2420" strokeWidth="0.4" fill="none" opacity="0.6" />
          </g>


          {/* ===== GARDEN TERRACE & TAIHU ROCKS (太湖石与庭院) ===== */}
          {/* Terrace Ground Line */}
          <path d="M12 315 Q100 310, 180 315 L508 315" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M12 342 Q150 334, 300 340 Q420 344, 508 338" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Taihu Garden Rock (太湖石 - near Qin Xian) */}
          <g transform="translate(35, 230)">
            <path d="M0 85 Q-10 60, 5 45 Q12 30, 28 40 Q40 25, 52 42 Q62 50, 55 72 Q42 90, 22 94 Q2 92, 0 85" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            {/* Rock holes (通透) */}
            <ellipse cx="20" cy="55" rx="6" ry="7" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <ellipse cx="38" cy="62" rx="5" ry="5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
            <ellipse cx="25" cy="76" rx="4" ry="4.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            {/* Texture strokes (皴法) */}
            <path d="M12 65 Q16 62, 18 67" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M44 48 Q48 52, 46 58" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          </g>


          {/* ===== FLYING BIRDS (飞鸟) ===== */}
          <path d="M150 90 Q155 83, 160 87 Q165 81, 170 87" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M170 83 Q174 77, 178 81 Q182 75, 186 81" fill="none" stroke="#2c2420" strokeWidth="0.4" />


          {/* ===== RED SEAL STAMPS (印章) ===== */}
          {/* Top Seal ("品花") */}
          <rect x="475" y="330" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
          <text x="486" y="345" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">品</text>

          {/* Secondary Oval Seal ("东楹") */}
          <rect x="475" y="356" width="22" height="15" fill="none" stroke="#8b2500" strokeWidth="1.2" rx="1" />
          <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">东楹</text>


          {/* ===== CALLIGRAPHY TITLE (题字 - Vertical) ===== */}
          <text x="488" y="165" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">品花宝鉴</text>
          <text x="502" y="165" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">九香东楹图</text>

        </g>
      </svg>
    </div>
  );
};

