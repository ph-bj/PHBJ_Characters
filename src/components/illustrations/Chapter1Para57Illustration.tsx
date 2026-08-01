import React from 'react';

/**
 * Visualizes Chapter 1 Paragraph 57:
 * 一个已似海棠花，娇艳无比，眉目天然。
 * 一个真是天上神仙，人间绝色，以玉为骨，以月为魂，以花为情，以珠光宝气为精神。
 * 子玉惊得呆了，不知不觉把帘子掀开，凝神而望。
 * 那两个妙童，也四目澄澄的看他；那个绝色的更觉凝眸伫望，对着子玉出神。
 * 子玉觉得心摇目眩。那个绝色的脸上，似有一层光彩照过来，散作满鼻的异香。
 *
 * Style: MainInkLandscape.tsx (Traditional Chinese Water-Ink Landscape / 水墨山水画)
 * - Palette & Ink Wash: #2c2420 ink, #f5efe0 mist/parchment, #b4494e begonia tint, #8b2500 vermilion seal, divine gold/pearl aura.
 * - Male scholar Ziyu & Opera actor boys (Qinyan & companion) with defined 6-pack abs.
 * - Minimal text (single small red seal stamp: 月魂玉骨).
 */
export const Chapter1Para57Illustration: React.FC = () => {
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
          {/* Ink mountain wash */}
          <linearGradient id="c1p57-inkMountain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-ink)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.08" />
          </linearGradient>

          {/* Moon halo */}
          <radialGradient id="c1p57-moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="var(--art-ink)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.06" />
          </radialGradient>

          {/* Mist gradient */}
          <linearGradient id="c1p57-mistFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--art-paper)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--art-paper)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--art-paper)" stopOpacity="0.85" />
          </linearGradient>

          {/* Water / Ground wash */}
          <linearGradient id="c1p57-waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-ink)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0.14" />
          </linearGradient>

          {/* Celestial divine light aura for Qinyan (以玉为骨，以月为魂) */}
          <radialGradient id="c1p57-celestialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--art-paper)" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#e8dec5" stopOpacity="0.6" />
            <stop offset="80%" stopColor="var(--art-bloom)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </radialGradient>

          {/* Begonia blossom soft pink wash (海棠花) */}
          <radialGradient id="c1p57-begoniaTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--art-bloom)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--art-bloom)" stopOpacity="0.08" />
          </radialGradient>

          {/* Pearl & jewel brilliance glow (珠光宝气) */}
          <radialGradient id="c1p57-jewelGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--paper-border)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </radialGradient>

          {/* Fragrance shimmer rays (散作满鼻的异香) */}
          <linearGradient id="c1p57-scentRay" x1="0" y1="0" x2="1" y2="0.5">
            <stop offset="0%" stopColor="var(--art-paper)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--art-bloom)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--art-ink)" stopOpacity="0" />
          </linearGradient>

          {/* Hand brush wobble filter */}
          <filter id="c1p57-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Soft ink bleed (洇墨) */}
          <filter id="c1p57-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Far mountain heavy ink bleed */}
          <filter id="c1p57-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
        </defs>

        {/* ===== OUTER SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (墨分五色) ===== */}
        {/* Farthest mountains - palest bled wash */}
        <g filter="url(#c1p57-mlBleedFar)">
          <path d="M12 165 Q60 95, 110 150 Q145 115, 190 148 Q230 98, 290 142 Q330 88, 390 138 Q430 102, 480 132 Q500 118, 515 160 L515 185 L12 185 Z" fill="var(--art-ink)" opacity="0.14" />
        </g>
        {/* Mid mountains */}
        <g filter="url(#c1p57-mlBleed)">
          <path d="M12 163 Q60 93, 110 148 Q145 113, 190 146 Q230 96, 290 140 Q330 86, 390 136 Q430 100, 480 130 Q500 116, 515 158" fill="var(--art-ink)" opacity="0.16" />
          <path d="M12 175 Q95 135, 170 170 Q235 140, 295 168 Q355 145, 415 162 Q455 150, 515 172" fill="var(--art-ink)" opacity="0.09" />
          {/* Ground shadow along carriage street */}
          <path d="M12 328 Q160 320, 310 326 Q430 330, 508 324 L508 340 L12 340 Z" fill="var(--art-ink)" opacity="0.12" />
        </g>

        {/* ===== ALL LINEWORK WITH BRUSH TEXTURE ===== */}
        <g filter="url(#c1p57-inkTexture)">

          {/* ===== MOON WITH HALO (以月为魂) ===== */}
          <circle cx="430" cy="62" r="38" fill="url(#c1p57-moonHalo)" />
          <circle cx="430" cy="62" r="24" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
          <circle cx="426" cy="59" r="19" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* ===== DISTANT MOUNTAIN RIDGES (皴法) ===== */}
          <path d="M12 163 Q60 93, 110 148 Q145 113, 190 146 Q230 96, 290 140 Q330 86, 390 136 Q430 100, 480 130 Q500 116, 515 158" fill="url(#c1p57-inkMountain)" opacity="0.3" />
          <path d="M12 163 Q60 93, 110 148 Q145 113, 190 146 Q230 96, 290 140 Q330 86, 390 136 Q430 100, 480 130 Q500 116, 515 158" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
          <path d="M12 175 Q95 135, 170 170 Q235 140, 295 168 Q355 145, 415 162 Q455 150, 515 172" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" strokeDasharray="4,3" />

          {/* Cun fa mountain texture strokes */}
          <path d="M90 135 Q95 142, 92 148" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />
          <path d="M260 118 Q265 125, 262 132" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />
          <path d="M370 112 Q374 119, 371 126" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" opacity="0.5" />

          {/* ===== MIST & SWIRLING CLOUDS (祥云) ===== */}
          <rect x="10" y="160" width="500" height="22" fill="url(#c1p57-mistFade)" />
          <path d="M110 52 Q125 40, 145 46 Q158 36, 175 46 Q188 38, 202 48 Q212 40, 225 50" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" opacity="0.5" />
          <path d="M280 48 Q295 38, 312 44 Q322 36, 338 46" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" opacity="0.45" />

          {/* ===== OVERHANGING BEGONIA BRANCHES (海棠花 - top & right) ===== */}
          <path d="M12 28 Q45 46, 80 50 Q115 52, 140 46 T170 38" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" />
          <path d="M60 48 Q70 32, 88 28" fill="none" stroke="var(--art-ink)" strokeWidth="1" />
          <path d="M110 50 Q120 40, 132 36" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
          {/* Begonia blossoms & buds with pale rouge wash */}
          <circle cx="78" cy="48" r="6" fill="url(#c1p57-begoniaTint)" stroke="none" />
          <circle cx="98" cy="50" r="5.5" fill="url(#c1p57-begoniaTint)" stroke="none" />
          <circle cx="122" cy="46" r="5" fill="url(#c1p57-begoniaTint)" stroke="none" />
          <circle cx="88" cy="28" r="4.5" fill="url(#c1p57-begoniaTint)" stroke="none" />
          <circle cx="140" cy="44" r="4.5" fill="url(#c1p57-begoniaTint)" stroke="none" />
          {/* Begonia linework */}
          <circle cx="78" cy="48" r="5" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />
          <circle cx="78" cy="48" r="1.8" fill="var(--art-ink)" />
          <circle cx="98" cy="50" r="4.5" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />
          <circle cx="98" cy="50" r="1.5" fill="var(--art-ink)" />
          <circle cx="122" cy="46" r="4" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
          <circle cx="122" cy="46" r="1.3" fill="var(--art-ink)" />

          {/* ===== CELESTIAL RADIANCE / FRAGRANCE RAYS (脸上一层光彩，散作满鼻异香) ===== */}
          {/* Radiance aura centered around Qinyan at X: 375, Y: 215 */}
          <circle cx="375" cy="215" r="95" fill="url(#c1p57-celestialGlow)" stroke="none" />
          <circle cx="375" cy="215" r="55" fill="url(#c1p57-jewelGlow)" stroke="none" />

          {/* Ethereal light stream between Qinyan and Ziyu */}
          <polygon points="360,205 160,195 160,225 360,230" fill="url(#c1p57-scentRay)" />

          {/* Floating fragrance blossom petals drifting across the beam */}
          <g opacity="0.75">
            <path d="M220 205 Q224 200, 228 205 Q224 210, 220 205 Z" fill="var(--art-bloom)" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M260 215 Q264 210, 268 215 Q264 220, 260 215 Z" fill="var(--art-bloom)" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M295 198 Q299 193, 303 198 Q299 203, 295 198 Z" fill="var(--art-bloom)" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M185 210 Q189 205, 193 210 Q189 215, 185 210 Z" fill="var(--art-bloom)" stroke="var(--art-ink)" strokeWidth="0.4" />
          </g>

          {/* ===== CARRIAGE 1 (LEFT): ZIYU'S CARRIAGE & MALE SCHOLAR ZIYU (子玉乘车) ===== */}
          {/* Carriage roof & frame */}
          <g id="ziyu-carriage">
            {/* Carriage roof canopy */}
            <path d="M40 145 Q95 130, 180 145 L175 160 L45 160 Z" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.4" />
            <path d="M35 145 Q95 125, 185 145" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" />
            {/* Roof tassels */}
            <path d="M45 160 Q43 170, 41 180" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />
            <path d="M175 160 Q177 170, 179 180" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />

            {/* Main carriage box structure */}
            <rect x="50" y="160" width="120" height="135" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.5" rx="2" />
            <rect x="56" y="166" width="108" height="123" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" strokeDasharray="3,3" />

            {/* Window opening (玻璃窗) */}
            <rect x="70" y="178" width="85" height="95" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Silk curtain lifted back by Ziyu's hand (掀开帘子) */}
            <path d="M70 178 Q95 195, 76 273 L70 273 Z" fill="var(--paper-border)" stroke="var(--art-ink)" strokeWidth="1" opacity="0.85" />
            <path d="M74 182 Q92 200, 78 265" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />

            {/* Carriage wheel below */}
            <circle cx="110" cy="320" r="32" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" />
            <circle cx="110" cy="320" r="28" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" />
            <circle cx="110" cy="320" r="5" fill="var(--art-ink)" />
            {/* Wheel spokes */}
            <line x1="110" y1="288" x2="110" y2="352" stroke="var(--art-ink)" strokeWidth="0.8" />
            <line x1="78" y1="320" x2="142" y2="320" stroke="var(--art-ink)" strokeWidth="0.8" />
            <line x1="87" y1="297" x2="133" y2="343" stroke="var(--art-ink)" strokeWidth="0.7" />
            <line x1="87" y1="343" x2="133" y2="297" stroke="var(--art-ink)" strokeWidth="0.7" />
          </g>

          {/* FIGURE: MALE SCHOLAR ZIYU (梅子玉 - Inside carriage window) */}
          <g id="figure-ziyu">
            {/* Head & Scholar Cap (网巾 / 巾幘) */}
            <circle cx="120" cy="202" r="9" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.4" />
            {/* Handsome features: refined eyes, brow gazing in awe (凝神而望) */}
            <path d="M123 200 Q126 199, 128 201" fill="none" stroke="var(--art-ink)" strokeWidth="1" /> {/* Eye looking right */}
            <circle cx="126" cy="201" r="1" fill="var(--art-ink)" /> {/* Pupil */}
            <path d="M122 196 Q126 195, 128 196" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" /> {/* Brow */}
            <path d="M128 203 Q126 205, 127 207" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" /> {/* Nose profile */}
            {/* Scholar hair bun / cap top */}
            <path d="M115 194 Q120 188, 125 194 Z" fill="var(--art-ink)" stroke="var(--art-ink)" strokeWidth="0.8" />

            {/* Neck */}
            <line x1="120" y1="211" x2="120" y2="216" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Broad Shoulders & Open Scholar Robe */}
            <path d="M104 220 Q112 215, 120 216 Q128 215, 136 220" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />

            {/* Robe lapels pulled open */}
            <path d="M104 220 Q110 235, 108 265" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M136 220 Q130 235, 132 265" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Skin tone parchment fill for exposed torso */}
            <path d="M108 220 Q120 216, 132 220 L130 262 Q120 265, 110 262 Z" fill="var(--art-paper)" opacity="0.6" />

            {/* CHEST MUSCLES (胸肌 - Ziyu scholar abs & chest definition) */}
            <path d="M110 226 Q115 231, 120 228 Q125 231, 130 226" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - Ziyu scholar abs) */}
            <line x1="120" y1="230" x2="120" y2="258" stroke="var(--art-ink)" strokeWidth="0.6" />
            <path d="M113 234 Q120 235, 127 234" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M113 240 Q120 241, 127 240" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M114 246 Q120 247, 126 246" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M115 252 Q120 253, 125 252" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Arm lifting the curtain (把帘子掀开) */}
            <path d="M104 220 Q88 228, 80 235" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />
            <path d="M106 224 Q92 231, 84 238" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" />
            {/* Hand reaching out holding silk curtain edge */}
            <circle cx="79" cy="236" r="3" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.9" />
          </g>


          {/* ===== CARRIAGE 2 (RIGHT): EXQUISITE BOYS' CARRIAGE (海棠与天上神仙) ===== */}
          <g id="boys-carriage">
            {/* Carriage roof canopy with pearl ornament */}
            <path d="M305 140 Q380 122, 475 140 L470 156 L310 156 Z" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.4" />
            <path d="M300 140 Q380 118, 480 140" fill="none" stroke="var(--art-ink)" strokeWidth="1.8" />
            {/* Pearl roof crest (珠光宝气) */}
            <circle cx="390" cy="120" r="5" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1" />
            <circle cx="390" cy="120" r="2" fill="url(#c1p57-jewelGlow)" stroke="none" />

            {/* Main carriage box structure */}
            <rect x="315" y="156" width="150" height="140" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.5" rx="2" />
            <rect x="321" y="162" width="138" height="128" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" strokeDasharray="3,3" />

            {/* Front open seating bench (外面坐了两个妙童) */}
            <rect x="325" y="172" width="130" height="105" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Decorative silk drapes on carriage sides */}
            <path d="M315 156 Q320 200, 318 280" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />
            <path d="M465 156 Q460 200, 462 280" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" />

            {/* Carriage wheel below */}
            <circle cx="390" cy="322" r="32" fill="none" stroke="var(--art-ink)" strokeWidth="1.6" />
            <circle cx="390" cy="322" r="28" fill="none" stroke="var(--art-ink)" strokeWidth="0.6" />
            <circle cx="390" cy="322" r="5" fill="var(--art-ink)" />
            {/* Wheel spokes */}
            <line x1="390" y1="290" x2="390" y2="354" stroke="var(--art-ink)" strokeWidth="0.8" />
            <line x1="358" y1="322" x2="422" y2="322" stroke="var(--art-ink)" strokeWidth="0.8" />
            <line x1="367" y1="299" x2="413" y2="345" stroke="var(--art-ink)" strokeWidth="0.7" />
            <line x1="367" y1="345" x2="413" y2="299" stroke="var(--art-ink)" strokeWidth="0.7" />
          </g>


          {/* FIGURE: OPERA ACTOR BOY 1 - BEGONIA BEAUTY (海棠妙童 - Left on front carriage bench) */}
          {/* "一个已似海棠花，娇艳无比，眉目天然" */}
          <g id="figure-begonia-boy">
            {/* Head & Opera Hair Topknot with Begonia Flower Hairpin */}
            <circle cx="352" cy="198" r="8" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.3" />
            <path d="M348 190 Q352 184, 356 190 Z" fill="var(--art-ink)" stroke="var(--art-ink)" strokeWidth="0.8" />
            {/* Begonia Hairpin ornament */}
            <circle cx="347" cy="189" r="3" fill="url(#c1p57-begoniaTint)" stroke="var(--art-ink)" strokeWidth="0.5" />

            {/* Delicate, bright eyes looking toward Ziyu (四目澄澄) */}
            <path d="M347 197 Q349 196, 351 197" fill="none" stroke="var(--art-ink)" strokeWidth="0.9" /> {/* Left-facing eye */}
            <circle cx="349" cy="197" r="0.9" fill="var(--art-ink)" />
            <path d="M346 193 Q349 193, 351 194" fill="none" stroke="var(--art-ink)" strokeWidth="0.7" opacity="0.8" /> {/* Eyebrow */}
            <path d="M346 200 Q348 202, 350 201" fill="none" stroke="var(--art-bloom)" strokeWidth="0.8" /> {/* Rosy lip */}

            {/* Neck */}
            <line x1="352" y1="206" x2="352" y2="210" stroke="var(--art-ink)" strokeWidth="1" />

            {/* Broad shoulders & Draped Silk Opera Robe */}
            <path d="M338 214 Q345 210, 352 211 Q359 210, 366 214" fill="none" stroke="var(--art-ink)" strokeWidth="1.3" />

            {/* Robe unbuttoned/open displaying defined chest & 6-pack abs */}
            <path d="M338 214 Q344 230, 342 260" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />
            <path d="M366 214 Q360 230, 362 260" fill="none" stroke="var(--art-ink)" strokeWidth="1.1" />

            {/* Skin tone parchment fill for torso */}
            <path d="M340 214 Q352 211, 364 214 L360 258 Q352 260, 344 258 Z" fill="var(--art-paper)" opacity="0.5" />

            {/* CHEST MUSCLES (胸肌 - Begonia boy opera actor abs) */}
            <path d="M344 219 Q348 223, 352 220 Q356 223, 360 219" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - Begonia boy opera actor abs) */}
            <line x1="352" y1="222" x2="352" y2="252" stroke="var(--art-ink)" strokeWidth="0.5" />
            <path d="M347 226 Q352 227, 357 226" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M347 232 Q352 233, 357 232" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M348 238 Q352 239, 356 238" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />
            <path d="M348 244 Q352 245, 356 244" fill="none" stroke="var(--art-ink)" strokeWidth="0.4" />

            {/* Lower robe & sash */}
            <path d="M342 255 Q352 258, 362 255" stroke="var(--art-ink)" strokeWidth="0.8" fill="none" />
          </g>


          {/* FIGURE: OPERA ACTOR BOY 2 - QINYAN / CELESTIAL IMMORTAL (琴仙 / 绝色 - Right on front carriage bench) */}
          {/* "天上神仙，人间绝色，以玉为骨，以月为魂，以花为情，以珠光宝气为精神" */}
          <g id="figure-qinyan">
            {/* Celestial Aura Ring around Qinyan's Head */}
            <circle cx="410" cy="194" r="16" fill="none" stroke="var(--paper-border)" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.8" />

            {/* Head & Exquisite Opera Headpiece with Pearl Tassels */}
            <circle cx="410" cy="194" r="8.5" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="1.4" />

            {/* Hair Bun & Pearl Crown (珠光宝气) */}
            <path d="M405 186 Q410 178, 415 186 Z" fill="var(--art-ink)" stroke="var(--art-ink)" strokeWidth="0.9" />
            <circle cx="410" cy="180" r="2.5" fill="#ffffff" stroke="var(--art-ink)" strokeWidth="0.6" />
            {/* Pearl side tassels */}
            <path d="M403 186 Q401 192, 400 198" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" strokeDasharray="1,2" />
            <path d="M417 186 Q419 192, 420 198" fill="none" stroke="var(--art-ink)" strokeWidth="0.5" strokeDasharray="1,2" />

            {/* Ethereal gaze focused on Ziyu (凝眸伫望，对着子玉出神) */}
            <path d="M404 193 Q407 192, 409 193" fill="none" stroke="var(--art-ink)" strokeWidth="1" /> {/* Eye gazing left */}
            <circle cx="406" cy="193" r="1" fill="var(--art-ink)" />
            <path d="M403 189 Q407 188, 410 189" fill="none" stroke="var(--art-ink)" strokeWidth="0.8" /> {/* Slender eyebrow */}
            <path d="M404 197 Q407 199, 409 198" fill="none" stroke="var(--art-bloom)" strokeWidth="0.9" /> {/* Crimson lip */}

            {/* Neck */}
            <line x1="410" y1="2025" x2="410" y2="207" stroke="var(--art-ink)" strokeWidth="1" />

            {/* Broad Shoulders & Flowing Opera Robe */}
            <path d="M394 210 Q402 206, 410 207 Q418 206, 426 210" fill="none" stroke="var(--art-ink)" strokeWidth="1.4" />

            {/* Open Silk Costume Robe displaying defined chest & 6-pack abs */}
            <path d="M394 210 Q400 228, 398 262" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />
            <path d="M426 210 Q420 228, 422 262" fill="none" stroke="var(--art-ink)" strokeWidth="1.2" />

            {/* Skin tone parchment fill for torso */}
            <path d="M396 210 Q410 207, 424 210 L420 260 Q410 262, 400 260 Z" fill="var(--art-paper)" opacity="0.55" />

            {/* CHEST MUSCLES (胸肌 - Qinyan celestial opera actor abs) */}
            <path d="M400 215 Q405 219, 410 216 Q415 219, 420 215" fill="none" stroke="var(--art-ink)" strokeWidth="0.85" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - Qinyan celestial opera actor abs) */}
            <line x1="410" y1="218" x2="410" y2="254" stroke="var(--art-ink)" strokeWidth="0.55" />
            <path d="M404 223 Q410 224, 416 223" fill="none" stroke="var(--art-ink)" strokeWidth="0.45" />
            <path d="M404 229 Q410 230, 416 229" fill="none" stroke="var(--art-ink)" strokeWidth="0.45" />
            <path d="M405 235 Q410 236, 415 235" fill="none" stroke="var(--art-ink)" strokeWidth="0.45" />
            <path d="M405 241 Q410 242, 415 241" fill="none" stroke="var(--art-ink)" strokeWidth="0.45" />

            {/* Waist Sash with Jade Ornament (以玉为骨) */}
            <path d="M398 255 Q410 258, 422 255" fill="var(--art-paper)" stroke="var(--art-ink)" strokeWidth="0.9" />
            <circle cx="410" cy="256" r="3" fill="#e2eee2" stroke="var(--art-ink)" strokeWidth="0.6" />
          </g>

          {/* ===== MINIMAL TRADITIONAL RED SEAL STAMP (Avoid excessive text) ===== */}
          {/* Top-right corner traditional vermilion seal stamp: 月魂玉骨 */}
          <g id="vermilion-seal">
            <rect x="472" y="24" width="22" height="42" fill="var(--art-seal)" rx="1.5" opacity="0.88" />
            <rect x="473" y="25" width="20" height="40" fill="none" stroke="var(--art-paper)" strokeWidth="0.6" opacity="0.9" />
            {/* 4 Seal characters rendered in traditional red-seal aesthetic */}
            <text
              x="483"
              y="35"
              fill="var(--art-paper)"
              fontSize="8"
              fontFamily="serif"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              月
            </text>
            <text
              x="483"
              y="44"
              fill="var(--art-paper)"
              fontSize="8"
              fontFamily="serif"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              魂
            </text>
            <text
              x="483"
              y="53"
              fill="var(--art-paper)"
              fontSize="8"
              fontFamily="serif"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              玉
            </text>
            <text
              x="483"
              y="62"
              fill="var(--art-paper)"
              fontSize="8"
              fontFamily="serif"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              骨
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};
