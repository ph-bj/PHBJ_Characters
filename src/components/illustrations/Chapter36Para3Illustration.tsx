import React from "react";

/**
 * A highly detailed SVG inspired by `MainInkLandscape`.
 * Visualizes paragraph 3 of Chapter 36: Qinyan's residence (留青精舍) behind the wing
 * of the cottage, showing the three-room suite, a small servant waiting, Taihu rocks,
 * two green-calyx plum trees, and one red plum tree in full, brilliant bloom.
 */
export const Chapter36Para3Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '360px' }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="c36-ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
          </linearGradient>
          {/* Radial gradients for flower colors */}
          <radialGradient id="greenCalyxTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7ba385" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7ba385" stopOpacity="0.08" />
          </radialGradient>
          <radialGradient id="redPlumTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
          </radialGradient>

          {/* Filters for ink bleed & hand-painted wobble */}
          <filter id="inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>
        </defs>

        {/* Outer Frame */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (Bleed Tones) ===== */}
        <g filter="url(#mlBleed)">
          {/* Cottage roof and wall washes */}
          <path d="M12 110 L160 90 L160 290 L12 290 Z" fill="#2c2420" opacity="0.08" />
          <path d="M15 130 Q80 100, 165 120" fill="none" stroke="#2c2420" strokeWidth="15" opacity="0.1" />

          {/* Taihu rocks wash */}
          <ellipse cx="260" cy="270" rx="30" ry="40" fill="#2c2420" opacity="0.12" />
          <ellipse cx="305" cy="290" rx="20" ry="25" fill="#2c2420" opacity="0.08" />

          {/* Plum tree canopies (wash behind branches) */}
          <ellipse cx="140" cy="90" rx="35" ry="25" fill="#7ba385" opacity="0.08" />
          <ellipse cx="280" cy="110" rx="40" ry="30" fill="#7ba385" opacity="0.06" />
          <ellipse cx="400" cy="150" rx="45" ry="35" fill="#b4494e" opacity="0.1" />
          <ellipse cx="330" cy="190" rx="25" ry="20" fill="#b4494e" opacity="0.08" />

          {/* Ground shadow wash */}
          <path d="M12 300 Q150 295, 300 300 Q420 305, 508 298 L508 320 L12 320 Z" fill="#2c2420" opacity="0.08" />
        </g>

        {/* ===== LINEWORK AND DETAILS (with brush wobble filter) ===== */}
        <g filter="url(#inkTexture)">

          {/* 1. Ground & Courtyard Pathway */}
          <path d="M12 300 Q150 295, 300 300 Q420 305, 508 298" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M12 308 Q130 304, 250 308 Q370 312, 508 305" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.6" />
          
          {/* Small stepping stones in courtyard */}
          <ellipse cx="185" cy="304" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <ellipse cx="215" cy="310" rx="9" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <ellipse cx="245" cy="314" rx="7" ry="2.8" fill="none" stroke="#2c2420" strokeWidth="0.5" />

          {/* Grass tufts */}
          <path d="M45 298 Q47 293, 49 298" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M48 298 Q51 294, 53 298" fill="none" stroke="#2c2420" strokeWidth="0.3" />
          <path d="M225 304 Q228 299, 230 304" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M460 302 Q462 297, 465 302" fill="none" stroke="#2c2420" strokeWidth="0.4" />

          {/* 2. Cottage (留青精舍 - Side Wing and Suite) */}
          {/* Roof outlines */}
          <path d="M10 135 Q85 105, 170 125" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          <path d="M16 135 Q85 110, 164 128" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          {/* Upturned Eaves (飞檐) */}
          <path d="M10 135 Q2 128, -5 125" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <path d="M170 125 Q178 118, 185 112" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          {/* Roof Ridge Ornament */}
          <circle cx="90" cy="113" r="2.5" fill="#2c2420" />

          {/* Pillars and walls */}
          <line x1="25" y1="133" x2="25" y2="299" stroke="#2c2420" strokeWidth="1.8" />
          <line x1="100" y1="120" x2="100" y2="297" stroke="#2c2420" strokeWidth="1.5" />
          <line x1="160" y1="126" x2="160" y2="299" stroke="#2c2420" strokeWidth="1.8" />
          
          {/* Masonry base step */}
          <path d="M20 299 L165 299 L170 304 L15 304 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />

          {/* Doorway */}
          <rect x="35" y="165" width="50" height="134" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Door slightly ajar */}
          <line x1="75" y1="165" x2="75" y2="299" stroke="#2c2420" strokeWidth="0.8" />
          {/* Door handle */}
          <line x1="75" y1="230" x2="85" y2="230" stroke="#2c2420" strokeWidth="1" />

          {/* Lattice Window */}
          <rect x="112" y="165" width="38" height="90" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Window grids */}
          <line x1="131" y1="165" x2="131" y2="255" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="112" y1="195" x2="150" y2="195" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="112" y1="225" x2="150" y2="225" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="112" y1="165" x2="131" y2="195" stroke="#2c2420" strokeWidth="0.4" opacity="0.7" />
          <line x1="131" y1="165" x2="112" y2="195" stroke="#2c2420" strokeWidth="0.4" opacity="0.7" />
          <line x1="131" y1="165" x2="150" y2="195" stroke="#2c2420" strokeWidth="0.4" opacity="0.7" />
          <line x1="150" y1="165" x2="131" y2="195" stroke="#2c2420" strokeWidth="0.4" opacity="0.7" />

          {/* Wall brick texture details */}
          <line x1="110" y1="275" x2="130" y2="275" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <line x1="140" y1="285" x2="158" y2="285" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          
          {/* 3. Servant (小使) standing near doorway */}
          <circle cx="48" cy="210" r="4.5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M46 205 Q48 202, 50 205" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M43 216 Q48 214, 53 216 L51 255 L45 255 Z" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M43 218 Q48 223, 53 218" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          
          {/* 4. Taihu Rocks (太湖石 - Center Right) */}
          <path d="M235 299 Q225 250, 245 230 Q260 215, 280 230 Q295 210, 310 235 Q325 255, 315 285 Q305 303, 285 299 Q260 295, 250 299 Z" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          {/* Holes */}
          <ellipse cx="255" cy="248" rx="6" ry="9" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <ellipse cx="280" cy="240" rx="5" ry="7" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <ellipse cx="295" cy="265" rx="7" ry="9" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <ellipse cx="270" cy="275" rx="4" ry="5.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          {/* Textures */}
          <path d="M242 265 Q248 261, 246 270" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M288 282 Q292 286, 290 292" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M305 250 Q309 253, 307 259" fill="none" stroke="#2c2420" strokeWidth="0.4" />

          {/* Small Rock */}
          <path d="M312 299 Q308 275, 320 268 Q332 272, 335 285 Q330 299, 322 299 Z" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <ellipse cx="320" cy="280" rx="2.5" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.5" />

          {/* 5. Two Green-Calyx Plum Trees (绿萼梅) */}
          {/* Tree 1: Left/Back, reaching over the cottage roof */}
          <path d="M90 297 Q85 240, 75 190 Q65 140, 85 95" fill="none" stroke="#2c2420" strokeWidth="2" />
          {/* Branches */}
          <path d="M80 165 Q60 148, 55 130" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M78 150 Q105 135, 125 115 Q145 100, 165 92" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M125 115 Q120 90, 110 75" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M82 110 Q98 95, 102 82" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M140 108 Q150 95, 155 85" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          {/* Blossoms */}
          <circle cx="53" cy="128" r="5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="108" cy="73" r="5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="100" cy="81" r="5.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="153" cy="84" r="4.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="163" cy="90" r="5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="123" cy="113" r="5.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="53" cy="128" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="53" cy="128" r="1.2" fill="#7ba385" />
          <circle cx="108" cy="73" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="108" cy="73" r="1" fill="#7ba385" />
          <circle cx="100" cy="81" r="5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="100" cy="81" r="1.2" fill="#7ba385" />
          <circle cx="123" cy="113" r="5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="123" cy="113" r="1.2" fill="#7ba385" />
          <circle cx="153" cy="84" r="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <circle cx="153" cy="84" r="1" fill="#7ba385" />
          <circle cx="163" cy="90" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="163" cy="90" r="1.2" fill="#7ba385" />

          {/* Tree 2: Mid-Right, behind Taihu rocks */}
          <path d="M280 299 Q290 230, 275 180 Q260 130, 280 85" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          {/* Branches */}
          <path d="M280 205 Q260 178, 252 155" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M276 165 Q305 140, 315 110" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M266 142 Q250 120, 245 105" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M280 85 Q295 72, 305 65" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M276 100 Q260 85, 255 78" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          {/* Blossoms */}
          <circle cx="250" cy="153" r="5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="313" cy="108" r="5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="243" cy="103" r="4.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="303" cy="63" r="5.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="253" cy="76" r="4.5" fill="url(#greenCalyxTint)" stroke="none" />
          <circle cx="250" cy="153" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="250" cy="153" r="1.2" fill="#7ba385" />
          <circle cx="313" cy="108" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="313" cy="108" r="1.2" fill="#7ba385" />
          <circle cx="243" cy="103" r="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <circle cx="243" cy="103" r="1" fill="#7ba385" />
          <circle cx="303" cy="63" r="5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="303" cy="63" r="1.2" fill="#7ba385" />
          <circle cx="253" cy="76" r="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <circle cx="253" cy="76" r="1" fill="#7ba385" />

          {/* 6. One Red Plum Tree (红梅 - Foreground/Right) */}
          <path d="M395 299 Q420 220, 390 150 Q370 100, 395 50" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          {/* Bark cracks */}
          <path d="M403 260 Q409 250, 405 240" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.6" />
          <path d="M392 210 Q398 200, 394 190" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.6" />
          {/* Branches */}
          <path d="M405 200 Q365 185, 340 178 L310 182" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          <path d="M340 178 Q328 155, 312 145" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <path d="M390 150 Q430 135, 450 110" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M430 120 Q442 100, 445 88" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M392 110 Q368 95, 355 80" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          {/* Blossoms */}
          <circle cx="308" cy="180" r="5.5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="310" cy="144" r="5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="340" cy="176" r="6" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="325" cy="160" r="5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="353" cy="78" r="5.5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="448" cy="86" r="4.5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="452" cy="108" r="5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="432" cy="118" r="5.5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="395" cy="48" r="5" fill="url(#redPlumTint)" stroke="none" />
          <circle cx="308" cy="180" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <circle cx="308" cy="180" r="1.5" fill="#b4494e" />
          <circle cx="310" cy="144" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="310" cy="144" r="1.2" fill="#b4494e" />
          <circle cx="340" cy="176" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <circle cx="340" cy="176" r="1.6" fill="#b4494e" />
          <circle cx="325" cy="160" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="325" cy="160" r="1.2" fill="#b4494e" />
          <circle cx="353" cy="78" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <circle cx="353" cy="78" r="1.5" fill="#b4494e" />
          <circle cx="448" cy="86" r="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <circle cx="448" cy="86" r="1.2" fill="#b4494e" />
          <circle cx="452" cy="108" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="452" cy="108" r="1.2" fill="#b4494e" />
          <circle cx="432" cy="118" r="5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="432" cy="118" r="1.5" fill="#b4494e" />
          <circle cx="395" cy="48" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="395" cy="48" r="1.2" fill="#b4494e" />

          {/* Falling Plum Petals */}
          <path d="M295 198 C292 202, 290 206, 294 208 C298 206, 297 202, 295 198 Z" fill="url(#redPlumTint)" opacity="0.7" />
          <path d="M322 210 Q325 215, 321 218 C318 216, 319 212, 322 210 Z" fill="url(#redPlumTint)" opacity="0.6" />
          <path d="M370 230 C367 234, 365 238, 369 240 C373 238, 372 234, 370 230 Z" fill="url(#redPlumTint)" opacity="0.8" />
          <path d="M220 180 C218 184, 216 188, 220 190 C224 188, 223 184, 220 180 Z" fill="url(#greenCalyxTint)" opacity="0.6" />

          {/* 7. Qinyan (琴言) sitting under the plum tree, looking wistful */}
          <g transform="translate(345, 255)">
            {/* Head (tilted upward looking at blossoms) */}
            <circle cx="5" cy="0" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Hair bun */}
            <path d="M2 -5 Q5 -9, 8 -5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <line x1="5" y1="-8" x2="5" y2="-5" stroke="#2c2420" strokeWidth="0.8" />
            {/* Neck */}
            <line x1="5" y1="5.5" x2="5" y2="8" stroke="#2c2420" strokeWidth="1.1" />
            {/* Shoulders */}
            <path d="M-6 12 Q0 7, 5 8 Q10 7, 16 12" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Torso/Robe (sitting position) */}
            <path d="M-6 12 L-10 42 Q3 46, 12 42 L16 12 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Arms: hands resting on lap */}
            <path d="M-6 12 Q-10 22, -4 30 Q3 33, 10 30 Q14 22, 16 12" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            {/* Sitting stone stool */}
            <ellipse cx="3" cy="44" rx="14" ry="5" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M-11 44 L-11 51 Q3 54, 17 51 L17 44" fill="none" stroke="#2c2420" strokeWidth="1" />
          </g>

          {/* 8. Auspicious Clouds in Sky (祥云) */}
          <path d="M300 40 Q315 30, 332 36 Q342 28, 358 38 Q368 30, 380 40" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />
          <path d="M305 45 Q318 35, 332 40" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.3" />
          <path d="M70 48 Q85 38, 102 44 Q112 36, 128 46" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

        </g>

        {/* ===== RED SEAL STAMP (印章) ===== */}
        <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
        <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">琴</text>

        {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
        <text x="488" y="150" textAnchor="middle" fill="#2c2420" fontSize="13" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">留青精舍</text>
        <text x="502" y="150" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">玉侬</text>

      </svg>
    </div>
  );
};

export default Chapter36Para3Illustration;
