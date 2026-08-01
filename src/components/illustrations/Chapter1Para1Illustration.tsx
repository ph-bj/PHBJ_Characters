import React from 'react';

/**
 * Visualizes Chapter 1 Paragraph 1:
 * 京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭；人在大千队里，时时醉月评花。
 * 真乃说不尽的繁华，描不尽的情态...
 * 而游戏之中最难得者，几个用情守礼之君子，与几个洁身自好的优伶，真合着《国风》好色不淫一句。
 *
 * Style: MainInkLandscape.tsx (Traditional Chinese Water-Ink Landscape / 水墨山水画)
 * - Palette & Ink Wash: #2c2420 ink, #f5efe0 parchment, #b4494e rouge lantern/plum tint, #8b2500 vermilion seal, gold ambient highlights.
 * - Architecture: Grand imperial capital city silhouettes (地当尺五天边) & eaved opera stage (歌台舞榭).
 * - Male Scholars (缙绅子弟 / 用情守礼之君子) & Opera Actors (洁身自好的优伶) with defined chest muscles & 6-pack abs.
 * - Minimal text: Single traditional red seal stamp (歌台舞榭).
 */
export const Chapter1Para1Illustration: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[var(--paper-border)] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '320px' }}
      >
        {/* ===== DEFS: Ink Wash Gradients & Filters ===== */}
        <defs>
          {/* Ink mountain & city gate wash gradient */}
          <linearGradient id="c1p1-inkMountain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-ink)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.08" />
          </linearGradient>

          {/* Moon halo gradient (醉月) */}
          <radialGradient id="c1p1-moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="35%" stopColor="var(--art-paper)" stopOpacity="0.9" />
            <stop offset="70%" stopColor="var(--art-ink)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </radialGradient>

          {/* Mist fade gradient (云雾) */}
          <linearGradient id="c1p1-mistFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--art-paper)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--art-paper)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--art-paper)" stopOpacity="0.85" />
          </linearGradient>

          {/* Ground / Water wash gradient */}
          <linearGradient id="c1p1-waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-ink)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.15" />
          </linearGradient>

          {/* Soft lantern light glow gradient */}
          <radialGradient id="c1p1-lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--art-bloom)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#e6b800" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </radialGradient>

          {/* Brush wobble - makes linework feel like hand-painted ink (笔触) */}
          <filter id="c1p1-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="9" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - feathered wet rice paper edges (洇墨) */}
          <filter id="c1p1-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="8" />
          </filter>

          {/* Heavy bleed for distant background city silhouettes & mountains */}
          <filter id="c1p1-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="12" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>

          {/* Pale rouge tint for blossoms & stage lanterns (淡彩) */}
          <radialGradient id="c1p1-mlPlumTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--art-bloom)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--art-bloom)" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        {/* ===== BACKGROUND FRAME & PARCHMENT CANVAS ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (墨分五色) ===== */}
        {/* Farthest imperial capital city gates & high sky mountains ("地当尺五天边") */}
        <g filter="url(#c1p1-mlBleedFar)">
          {/* Imperial city skyline silhouettes */}
          <path d="M12 160 L45 160 L45 110 L65 95 L85 110 L85 160 L140 160 L140 120 L160 105 L180 120 L180 160 L240 160 Q300 110, 360 155 Q420 100, 480 145 L515 145 L515 185 L12 185 Z" fill="var(--art-ink)" opacity="0.16" />
        </g>

        {/* Mid-ground ink washes hugging mountain & stage contours */}
        <g filter="url(#c1p1-mlBleed)">
          <path d="M12 175 Q70 125, 130 160 Q190 120, 250 155 Q320 110, 390 150 Q450 125, 515 170 L515 190 L12 190 Z" fill="var(--art-ink)" opacity="0.18" />
          {/* Willow & pine tree canopy washes */}
          <ellipse cx="60" cy="90" rx="30" ry="16" fill="var(--art-ink)" opacity="0.12" />
          <ellipse cx="460" cy="180" rx="36" ry="20" fill="var(--art-ink)" opacity="0.1" />
          {/* Ground bank wash */}
          <path d="M12 320 Q160 310, 310 318 Q420 322, 508 316 L508 338 L12 338 Z" fill="var(--art-ink)" opacity="0.14" />
        </g>

        {/* All linework passes through the ink texture filter */}
        <g filter="url(#c1p1-inkTexture)">

          {/* ===== MOON & CLOUD WISPS ("醉月") ===== */}
          <circle cx="410" cy="60" r="42" fill="url(#c1p1-moonHalo)" />
          <circle cx="410" cy="60" r="25" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
          <circle cx="406" cy="57" r="20" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* Swirling celestial clouds ("天边祥云") */}
          <path d="M110 50 Q125 38, 145 44 Q158 34, 175 44 Q188 36, 202 46 Q212 38, 225 48" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" opacity="0.5" />
          <path d="M280 45 Q295 35, 312 41 Q322 33, 338 43" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" opacity="0.45" />
          <path d="M45 75 Q58 67, 72 73 Q82 65, 95 73" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" opacity="0.4" />

          {/* ===== IMPERIAL CITY PALACE SILHOUETTE (地当尺五天边) ===== */}
          {/* Distant imperial watchtowers & rooftops */}
          <path d="M40 165 L40 115 L60 100 L80 115 L80 165" fill="url(#c1p1-inkMountain)" stroke="var(--art-ink)" strokeWidth="1" opacity="0.5" />
          <path d="M135 165 L135 125 L155 110 L175 125 L175 165" fill="url(#c1p1-inkMountain)" stroke="var(--art-ink)" strokeWidth="1" opacity="0.5" />
          <path d="M35 115 L85 115" stroke="var(--art-ink)" strokeWidth="1.2" />
          <path d="M130 125 L180 125" stroke="var(--art-ink)" strokeWidth="1.2" />

          {/* Mountain Ridge Lines */}
          <path d="M12 175 Q70 125, 130 160 Q190 120, 250 155 Q320 110, 390 150 Q450 125, 515 170" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
          {/* Mountain Cun-fa textures (皴法) */}
          <path d="M75 145 Q80 150, 77 158" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />
          <path d="M230 135 Q235 142, 232 150" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />
          <path d="M340 130 Q344 137, 341 145" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />

          {/* Mist cloud band (云雾) */}
          <rect x="10" y="165" width="500" height="22" fill="url(#c1p1-mistFade)" />

          {/* ===== PINE & WILLOW BRANCHES ===== */}
          {/* Left Pine branch over stage */}
          <path d="M12 110 Q45 105, 80 115 Q110 125, 130 140" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" />
          <path d="M45 108 Q60 95, 75 92" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
          {/* Pine needle clusters */}
          <path d="M70 90 L80 85 M72 92 L82 90 M73 95 L83 96" stroke="var(--art-ink)" strokeWidth="0.6" />
          <path d="M115 130 L125 125 M117 132 L127 130 M118 135 L128 136" stroke="var(--art-ink)" strokeWidth="0.6" />

          {/* Right Willow branches framing moon */}
          <path d="M500 20 Q475 55, 465 110 Q460 145, 465 180" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />
          <path d="M492 25 Q470 65, 466 120 Q463 155, 468 190" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
          {/* Willow leaves */}
          <path d="M475 70 Q468 66, 462 72" stroke="var(--art-ink)" strokeWidth="0.5" fill="none" />
          <path d="M470 95 Q463 91, 458 97" stroke="var(--art-ink)" strokeWidth="0.4" fill="none" />
          <path d="M468 120 Q460 116, 456 122" stroke="var(--art-ink)" strokeWidth="0.4" fill="none" />

          {/* ===== GRAND OPERA STAGE & PAVILION ("歌台舞榭") ===== */}
          {/* Stage Platform Base (歌台基座) */}
          <path d="M160 270 L360 270 L370 295 L150 295 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" />
          {/* Platform Stone Steps */}
          <line x1="220" y1="270" x2="220" y2="295" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="300" y1="270" x2="300" y2="295" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="160" y1="282" x2="360" y2="282" stroke="var(--art-ink)" strokeWidth="0.6" />

          {/* Ornate Pavilion Roof - Double Tiered Sweeping Eaves (飞檐歌台) */}
          {/* Roof ink fill between ridge lines */}
          <path d="M140 195 L260 160 L380 195 L372 195 L260 166 L148 195 Z" fill="var(--art-ink)" opacity="0.4" />
          {/* Main Roof Outline */}
          <path d="M140 195 L260 160 L380 195" fill="none" stroke="var(--art-ink)" strokeWidth="2.2" />
          <path d="M148 195 L260 166 L372 195" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
          {/* Upturned Roof Corners (飞檐) */}
          <path d="M138 196 Q130 190, 122 185" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" />
          <path d="M382 196 Q390 190, 398 185" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" />
          {/* Top Pearl Ornament */}
          <circle cx="260" cy="158" r="3" fill="var(--art-ink)" />

          {/* Stage Pillars (歌台柱) */}
          <line x1="175" y1="195" x2="175" y2="270" stroke="var(--art-ink)" strokeWidth="1.8" />
          <line x1="345" y1="195" x2="345" y2="270" stroke="var(--art-ink)" strokeWidth="1.8" />
          <line x1="210" y1="195" x2="210" y2="270" stroke="var(--art-ink)" strokeWidth="1.2" strokeDasharray="6,3" />
          <line x1="310" y1="195" x2="310" y2="270" stroke="var(--art-ink)" strokeWidth="1.2" strokeDasharray="6,3" />

          {/* Stage Silk Curtains (舞榭罗帷) */}
          <path d="M175 195 Q200 220, 185 245" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
          <path d="M345 195 Q320 220, 335 245" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

          {/* Red Ink Stage Lanterns (歌台红灯) */}
          <circle cx="190" cy="205" r="9" fill="url(#c1p1-lanternGlow)" />
          <circle cx="190" cy="205" r="7" fill="url(#c1p1-mlPlumTint)" stroke="var(--art-ink)" strokeWidth="0.9" />
          <line x1="190" y1="195" x2="190" y2="198" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="190" y1="212" x2="190" y2="216" stroke="var(--art-ink)" strokeWidth="0.8" />

          <circle cx="330" cy="205" r="9" fill="url(#c1p1-lanternGlow)" />
          <circle cx="330" cy="205" r="7" fill="url(#c1p1-mlPlumTint)" stroke="var(--art-ink)" strokeWidth="0.9" />
          <line x1="330" y1="195" x2="330" y2="198" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="330" y1="212" x2="330" y2="216" stroke="var(--art-ink)" strokeWidth="0.8" />

          {/* Carved Balustrades (雕栏) */}
          <line x1="175" y1="250" x2="345" y2="250" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="175" y1="265" x2="345" y2="265" stroke="var(--art-ink)" strokeWidth="1" />
          <line x1="200" y1="250" x2="200" y2="265" stroke="var(--art-ink)" strokeWidth="0.6" />
          <line x1="320" y1="250" x2="320" y2="265" stroke="var(--art-ink)" strokeWidth="0.6" />

          {/* ===== CHARACTERS WITH DEFINED ABS (用情守礼之君子与洁身自好之优伶) ===== */}

          {/* ===== FIGURE 1: LEAD OPERA ACTOR (洁身自好的优伶 - Dan/Sheng Performer on Stage Center) ===== */}
          <g id="figure-lead-actor">
            {/* Head & Opera Headpiece (花冠/凤冠) */}
            <circle cx="260" cy="200" r="5.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
            <path d="M255 194 Q260 188, 265 194" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />
            {/* Opera Feather / Hairpin (雉鸡尾/流苏) */}
            <path d="M260 190 Q270 178, 282 175" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
            <line x1="260" y1="205.5" x2="260" y2="208" stroke="var(--art-ink)" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M248 211 Q254 207, 260 208 Q266 207, 272 211" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Open Silk Opera Robe Lapels revealing chest & abs */}
            <path d="M252 211 Q247 225, 242 245" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M268 211 Q273 225, 278 245" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Skin Tone Parchment Fill for Exposed Chest & ABS */}
            <path d="M252 211 Q260 208, 268 211 L264 235 Q260 237, 256 235 Z" fill="var(--art-paper)" opacity="0.6" />

            {/* Torso V-taper */}
            <line x1="248" y1="211" x2="252" y2="235" stroke="var(--art-ink)" strokeWidth="1.1" />
            <line x1="272" y1="211" x2="268" y2="235" stroke="var(--art-ink)" strokeWidth="1.1" />

            {/* EXPOSED CHEST MUSCLES (胸肌) */}
            <path d="M252 215 Q256 218, 260 216 Q264 218, 268 215" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - 6 pack lines) */}
            <line x1="260" y1="218" x2="260" y2="234" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M255 221 Q260 222, 265 221" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M255 225 Q260 226, 265 225" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M256 229 Q260 230, 264 229" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Waist Sash & Knot (丝带) */}
            <path d="M252 235 Q260 237, 268 235" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* Long Floating Opera Sleeves (水袖善舞) */}
            <path d="M248 211 Q232 200, 218 208 Q208 214, 222 225" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M272 211 Q288 200, 302 208 Q312 214, 298 225" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Lower Robe & Graceful Dance Stance */}
            <path d="M252 235 L245 270 M268 235 L275 270" stroke="var(--art-ink)" strokeWidth="1.2" fill="none" />
            <path d="M245 270 Q260 274, 275 270" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />
          </g>

          {/* ===== FIGURE 2: OPERA MUSICIAN / ACTOR (优伶 - Flute Player on Stage Right) ===== */}
          <g id="figure-actor-flutist">
            {/* Head */}
            <circle cx="315" cy="212" r="5" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            {/* Hair bun */}
            <path d="M312 207 Q315 204, 318 207" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />
            <line x1="315" y1="217" x2="315" y2="219" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* Shoulders */}
            <path d="M305 222 Q310 219, 315 220 Q320 219, 325 222" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Open Robe with exposed chest & abs */}
            <path d="M305 222 Q315 220, 325 222 L322 242 Q315 244, 308 242 Z" fill="var(--art-paper)" opacity="0.6" />
            <line x1="305" y1="222" x2="308" y2="242" stroke="var(--art-ink)" strokeWidth="1.1" />
            <line x1="325" y1="222" x2="322" y2="242" stroke="var(--art-ink)" strokeWidth="1.1" />

            {/* CHEST MUSCLES (胸肌) */}
            <path d="M308 226 Q311 229, 315 227 Q319 229, 322 226" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" />

            {/* DEFINED SIX-PACK ABS (腹肌) */}
            <line x1="315" y1="228" x2="315" y2="241" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M310 231 Q315 232, 320 231" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M310 235 Q315 236, 320 235" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M311 239 Q315 240, 319 239" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Hands holding bamboo flute (吹笛) */}
            <line x1="300" y1="216" x2="328" y2="214" stroke="var(--art-ink)" strokeWidth="1.3" />
            {/* Flute tassel */}
            <path d="M300 216 Q297 222, 298 228" stroke="var(--art-ink)" strokeWidth="0.6" fill="none" />

            {/* Seated Lower Body */}
            <path d="M308 242 L302 268 M322 242 L328 268" stroke="var(--art-ink)" strokeWidth="1.1" fill="none" />
          </g>

          {/* ===== COURTYARD VIBE: TAIHU ROCK & WINE BANQUET TABLE FOR SCHOLARS ===== */}
          {/* Taihu Rock (太湖石) on Left Foreground */}
          <path d="M70 330 Q60 300, 75 275 Q90 260, 105 280 Q120 295, 110 330 Z" fill="url(#c1p1-inkMountain)" stroke="var(--art-ink)" strokeWidth="1.3" opacity="0.75" />
          {/* Rock erosion hollows (透漏瘦) */}
          <ellipse cx="82" cy="285" rx="4" ry="7" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.8" />
          <ellipse cx="96" cy="305" rx="5" ry="8" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.8" />

          {/* Scholar Wine Banquet Table (醉月评花宴案) */}
          <path d="M370 310 L480 310 L485 320 L365 320 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
          <line x1="385" y1="320" x2="385" y2="355" stroke="var(--art-ink)" strokeWidth="1.4" />
          <line x1="465" y1="320" x2="465" y2="355" stroke="var(--art-ink)" strokeWidth="1.4" />

          {/* Table Items: Wine Pot, Jade Cups, Flower Vase (醉月评花) */}
          {/* Wine pot (酒壶) */}
          <path d="M420 310 L420 300 Q425 296, 430 300 L430 310 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
          <path d="M417 302 Q412 305, 417 308" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" />
          {/* Wine Cup (酒杯) */}
          <ellipse cx="440" cy="307" rx="3" ry="1.8" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />
          {/* Plum flower vase (评花) */}
          <path d="M455 310 L452 298 Q455 294, 458 298 L455 310 Z" stroke="var(--art-ink)" strokeWidth="0.9" fill="none" />
          <path d="M455 294 Q460 282, 468 276" stroke="var(--art-ink)" strokeWidth="0.7" fill="none" />
          <circle cx="468" cy="276" r="2.5" fill="url(#c1p1-mlPlumTint)" stroke="var(--art-ink)" strokeWidth="0.5" />

          {/* ===== FIGURE 3: GENTLEMAN SCHOLAR 1 (缙绅子弟 / 用情守礼之君子 - Seated drinking wine under moon) ===== */}
          <g id="figure-scholar-seated">
            {/* Head & Scholar Cap (网巾/方巾) */}
            <circle cx="395" cy="275" r="5.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
            <path d="M390 270 L400 270 L398 266 L392 266 Z" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />
            <line x1="395" y1="280.5" x2="395" y2="283" stroke="var(--art-ink)" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M383 286 Q389 282, 395 283 Q401 282, 407 286" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Open Scholar Robe (道袍) revealing chest & 6-pack abs */}
            <path d="M387 286 Q382 300, 378 320" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M403 286 Q408 300, 412 320" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Skin Tone Parchment Fill for Exposed Chest & ABS */}
            <path d="M387 286 Q395 283, 403 286 L399 310 Q395 312, 391 310 Z" fill="var(--art-paper)" opacity="0.6" />

            {/* Torso V-taper */}
            <line x1="383" y1="286" x2="387" y2="310" stroke="var(--art-ink)" strokeWidth="1.1" />
            <line x1="407" y1="286" x2="403" y2="310" stroke="var(--art-ink)" strokeWidth="1.1" />

            {/* EXPOSED CHEST MUSCLES (胸肌) */}
            <path d="M387 290 Q391 293, 395 291 Q399 293, 403 290" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - 6 pack lines) */}
            <line x1="395" y1="293" x2="395" y2="309" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M390 296 Q395 297, 400 296" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M390 300 Q395 301, 400 300" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M391 304 Q395 305, 399 304" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Waist Sash (腰带) */}
            <path d="M387 310 Q395 312, 403 310" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* Arm Raising Wine Cup to Moon/Stage (醉月举杯) */}
            <path d="M383 286 Q372 280, 368 272" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <circle cx="367" cy="270" r="2" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />

            {/* Seated Scholar Robes */}
            <path d="M387 310 L380 345 M403 310 L410 345" stroke="var(--art-ink)" strokeWidth="1.2" fill="none" />
          </g>

          {/* ===== FIGURE 4: GENTLEMAN SCHOLAR 2 (用情守礼之君子 - Standing with fan admiring performance) ===== */}
          <g id="figure-scholar-standing">
            {/* Head & Scholar Bun */}
            <circle cx="125" cy="285" r="5.5" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />
            <path d="M122 280 Q125 276, 128 280" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
            <line x1="125" y1="290.5" x2="125" y2="293" stroke="var(--art-ink)" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M113 296 Q119 292, 125 293 Q131 292, 137 296" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Open Robe showing chest & 6-pack abs */}
            <path d="M117 296 Q112 310, 108 330" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M133 296 Q138 310, 142 330" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Skin Tone Parchment Fill for Exposed Chest & ABS */}
            <path d="M117 296 Q125 293, 133 296 L129 320 Q125 322, 121 320 Z" fill="var(--art-paper)" opacity="0.6" />

            {/* Torso V-taper */}
            <line x1="113" y1="296" x2="117" y2="320" stroke="var(--art-ink)" strokeWidth="1.1" />
            <line x1="137" y1="296" x2="133" y2="320" stroke="var(--art-ink)" strokeWidth="1.1" />

            {/* EXPOSED CHEST MUSCLES (胸肌) */}
            <path d="M117 300 Q121 303, 125 301 Q129 303, 133 300" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - 6 pack lines) */}
            <line x1="125" y1="303" x2="125" y2="319" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M120 306 Q125 307, 130 306" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M120 310 Q125 311, 130 310" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M121 314 Q125 315, 129 314" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Waist Sash (腰带) */}
            <path d="M117 320 Q125 322, 133 320" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* Holding folding fan (折扇) */}
            <path d="M137 296 Q146 292, 152 288" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />
            <path d="M152 288 L160 282 L155 280 Z" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />

            {/* Lower Body Stance */}
            <path d="M117 320 L112 355 M133 320 L138 355" stroke="var(--art-ink)" strokeWidth="1.2" fill="none" />
          </g>

          {/* ===== TRADITIONAL RED SEAL STAMP (朱红方印 - "歌台舞榭" / Avoid excessive text) ===== */}
          <g id="red-seal" transform="translate(30, 30)">
            <rect x="0" y="0" width="28" height="28" fill="var(--art-seal)" opacity="0.85" rx="1" />
            <rect x="2" y="2" width="24" height="24" fill="none" stroke="var(--art-paper)" strokeWidth="0.8" opacity="0.9" />
            {/* Seal Script Text: 歌台舞榭 (4 Chinese Seal Characters) */}
            <text
              x="14"
              y="11"
              fontFamily="STKaiti, KaiTi, serif"
              fontSize="7.5"
              fontWeight="bold"
              fill="var(--art-paper)"
              textAnchor="middle"
              letterSpacing="1"
            >
              歌台
            </text>
            <text
              x="14"
              y="21"
              fontFamily="STKaiti, KaiTi, serif"
              fontSize="7.5"
              fontWeight="bold"
              fill="var(--art-paper)"
              textAnchor="middle"
              letterSpacing="1"
            >
              舞榭
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};
