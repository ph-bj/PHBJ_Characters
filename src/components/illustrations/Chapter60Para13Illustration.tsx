import React from 'react';

/**
 * Visualizes Chapter 60 Paragraph 13:
 * 公气为云，公神为水；在天在地，靡尽靡止。
 * 司文曰郎，司花曰主。列宿之精，群芳之祖。
 * 左英琼瑶，右青珊瑚。一气二气，同归殊途。
 * 五色炫彩，九华流香。心花意蕊，文运之祥。
 *
 * 100% Consistent with MainInkLandscape.tsx Style:
 * - Pure traditional Chinese ink landscape (水墨山水) palette & technique: #2c2420 ink, #b4494e pale plum tint, #f5efe0 mist.
 * - Exact filter & gradient defs (inkTexture, mlBleed, mlBleedFar, inkMountain, moonHalo, mistFade, waterWash).
 * - Distant mountain ranges with cun fa (皴法) texture strokes, moon with halo, mist fade layer, plum blossom branch.
 * - Central Master scholar figure (三闾道君/司花曰主/司文曰郎) flanked by male scholar & opera actor attendants.
 * - All male scholars/actors feature sculpted, defined 6-pack abdominal muscles (abs) in signature ink linework.
 * - Sacred treasures: White jade (左英琼瑶) & ink coral branch (右青珊瑚).
 * - Taihu garden rocks (太湖石), water waves ("公神为水"), clouds ("公气为云"), vertical calligraphy & red seal stamp (#8b2500).
 */
export const Chapter60Para13Illustration: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '320px' }}
      >
        {/* ===== DEFS: Exact Ink Wash Gradients & Filters from MainInkLandscape.tsx ===== */}
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

        {/* ===== BACKGROUND FRAME (Identical to MainInkLandscape.tsx) ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (墨分五色) ===== */}
        {/* Farthest range - palest wash, heavily bled */}
        <g filter="url(#mlBleedFar)">
          <path d="M12 172 Q50 102, 100 157 Q130 122, 175 152 Q210 102, 270 147 Q310 92, 370 142 Q410 107, 460 137 Q480 122, 515 167 L515 185 L12 185 Z" fill="#2c2420" opacity="0.14" />
        </g>

        {/* Mid range - bled washes hugging the ridge lines & figure aura */}
        <g filter="url(#mlBleed)">
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="#2c2420" opacity="0.16" />
          <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="#2c2420" opacity="0.09" />
          {/* Central aura wash behind Daojun */}
          <ellipse cx="260" cy="220" rx="60" ry="80" fill="#2c2420" opacity="0.08" />
          {/* Garden rock mass wash */}
          <ellipse cx="110" cy="275" rx="35" ry="25" fill="#2c2420" opacity="0.1" />
          {/* Bank shadow along pond edge */}
          <path d="M12 322 Q150 314, 300 320 Q420 324, 508 318 L508 334 L12 334 Z" fill="#2c2420" opacity="0.12" />
        </g>

        {/* ALL LINEWORK PASSES THROUGH BRUSH WOBBLE FILTER (#inkTexture) */}
        <g filter="url(#inkTexture)">

          {/* ===== MOON WITH HALO (明月) ===== */}
          <circle cx="430" cy="60" r="38" fill="url(#moonHalo)" />
          <circle cx="430" cy="60" r="24" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <circle cx="426" cy="57" r="19" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* ===== DISTANT MOUNTAINS WITH INK WASH ===== */}
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="url(#inkMountain)" stroke="none" opacity="0.3" />
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="url(#inkMountain)" stroke="none" opacity="0.15" />
          <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,3" />

          {/* Mountain Texture Strokes (皴法 - cun fa) */}
          <path d="M80 140 Q85 145, 82 152" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M250 120 Q255 128, 252 135" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M350 115 Q354 122, 351 130" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M450 130 Q453 136, 451 142" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />

          {/* ===== MIST LAYER (云雾) ===== */}
          <rect x="10" y="165" width="500" height="20" fill="url(#mistFade)" />

          {/* ===== CLOUD WISPS (公气为云 / 祥云) ===== */}
          <path d="M120 55 Q135 42, 155 48 Q168 38, 185 48 Q198 40, 212 50 Q222 42, 235 52" fill="none" stroke="#2c2420" strokeWidth="0.7" opacity="0.5" />
          <path d="M125 60 Q138 50, 152 55 Q162 48, 175 55" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
          <path d="M290 50 Q305 40, 322 46 Q332 38, 348 48" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />
          <path d="M55 80 Q68 72, 82 78 Q92 70, 105 78" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

          {/* ===== PLUM BLOSSOM BRANCH (梅花 - top left) ===== */}
          <path d="M12 25 Q40 42, 75 48 Q105 50, 130 45 Q145 42, 155 38" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M55 48 Q62 32, 78 28" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M100 47 Q108 38, 118 35" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Blossoms - 5 petal style with pale rouge wash (淡彩) */}
          <circle cx="72" cy="46" r="6" fill="url(#mlPlumTint)" stroke="none" />
          <circle cx="92" cy="48" r="5.5" fill="url(#mlPlumTint)" stroke="none" />
          <circle cx="112" cy="44" r="5" fill="url(#mlPlumTint)" stroke="none" />
          <circle cx="78" cy="28" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
          <circle cx="130" cy="43" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
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

          {/* ===== TAIHU GARDEN ROCKS (太湖石 - left & right background) ===== */}
          {/* Left Rock */}
          <path d="M85 300 Q78 278, 92 268 Q98 256, 112 264 Q122 254, 132 268 Q142 274, 136 292 Q126 308, 108 312 Q90 310, 85 300" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          <ellipse cx="100" cy="278" rx="5" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <ellipse cx="118" cy="284" rx="4" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <path d="M90 288 Q94 285, 96 290" fill="none" stroke="#2c2420" strokeWidth="0.5" />

          {/* Right Rock */}
          <path d="M380 310 Q377 295, 386 288 Q394 292, 400 304 Q394 316, 383 312 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <ellipse cx="388" cy="298" rx="3" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />


          {/* ===== SACRED TREASURES: WHITE JADE DISK (左英琼瑶) & CORAL BRANCH (右青珊瑚) ===== */}
          {/* Left White Jade Disk (左英琼瑶) floating gently */}
          <g transform="translate(165, 175)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <circle cx="-6" cy="-3" r="0.8" fill="#2c2420" opacity="0.6" />
            <circle cx="6" cy="3" r="0.8" fill="#2c2420" opacity="0.6" />
            <line x1="-18" y1="0" x2="-24" y2="0" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6" />
            <line x1="18" y1="0" x2="24" y2="0" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6" />
          </g>

          {/* Right Coral Branch (右青珊瑚) held / floating */}
          <g transform="translate(350, 170)">
            <path d="M0 20 Q2 5, 5 -10 Q10 -20, 8 -30" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <path d="M5 -10 Q14 -15, 20 -22" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <path d="M2 -18 Q-8 -24, -12 -30" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M0 5 Q10 0, 16 5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <circle cx="8" cy="-30" r="1.5" fill="#2c2420" />
            <circle cx="20" cy="-22" r="1.3" fill="#2c2420" />
            <circle cx="-12" cy="-30" r="1.3" fill="#2c2420" />
          </g>


          {/* ===== FIGURE 1: CENTRAL MASTER SCHOLAR (三闾道君 / 司花曰主 / 司文曰郎) ===== */}
          {/* Standing in center at X: 260, Y: 215 */}
          <g id="figure-master-daojun">
            {/* Head */}
            <circle cx="260" cy="180" r="7" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Scholar's silk headcloth (纶巾) */}
            <path d="M252 174 Q260 166, 268 174 Q271 167, 266 161 Q260 156, 254 161 Q249 167, 252 174 Z" fill="#2c2420" opacity="0.85" stroke="#2c2420" strokeWidth="1" />
            {/* Headcloth ribbons hanging down */}
            <path d="M253 170 Q244 185, 240 205" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <path d="M267 170 Q276 185, 280 205" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            {/* Face detail */}
            <path d="M258 179 Q260 180, 262 179" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Neck */}
            <line x1="260" y1="187" x2="260" y2="190" stroke="#2c2420" strokeWidth="1.1" />

            {/* Broad Shoulders */}
            <path d="M245 194 Q252 189, 260 190 Q268 189, 275 194" fill="none" stroke="#2c2420" strokeWidth="1.4" />

            {/* Open Taoist Robe Lapels (道服) */}
            <path d="M245 194 Q238 220, 230 260 L225 295" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M275 194 Q282 220, 290 260 L295 295" fill="none" stroke="#2c2420" strokeWidth="1.4" />

            {/* EXPOSED CHEST MUSCLES (胸肌 - MainInkLandscape style) */}
            <path d="M250 198 Q255 202, 260 199 Q265 202, 270 198" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* DEFINED SIX-PACK ABDOMINAL MUSCLES (腹肌 - MainInkLandscape style) */}
            <line x1="260" y1="202" x2="260" y2="225" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M254 206 Q260 207, 266 206" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M254 210 Q260 211, 266 210" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M255 214 Q260 215, 265 214" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M255 218 Q260 219, 265 218" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Waist Sash & Knot (腰带) */}
            <path d="M248 225 Q260 228, 272 225" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <path d="M258 225 Q256 250, 254 275" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M262 225 Q264 250, 266 275" fill="none" stroke="#2c2420" strokeWidth="1" />

            {/* Arms - Left gesturing to Jade, Right to Coral */}
            <path d="M245 194 Q210 185, 182 178" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M242 198 Q210 190, 185 183" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M275 194 Q310 185, 338 175" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M278 198 Q310 190, 335 180" fill="none" stroke="#2c2420" strokeWidth="0.5" />

            {/* Lower Robes & Stance */}
            <path d="M242 260 Q260 270, 278 260" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <line x1="248" y1="225" x2="242" y2="295" stroke="#2c2420" strokeWidth="1.1" />
            <line x1="272" y1="225" x2="278" y2="295" stroke="#2c2420" strokeWidth="1.1" />
            <line x1="260" y1="228" x2="260" y2="295" stroke="#2c2420" strokeWidth="0.7" />
          </g>


          {/* ===== FIGURE 2: LEFT MALE SCHOLAR / ACTOR ATTENDANT (花史 / 侍仙) ===== */}
          {/* Standing on left near Taihu Rock at X: 175, Y: 235 */}
          <g id="figure-left-scholar">
            {/* Head */}
            <circle cx="175" cy="225" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Opera / Scholar hair bun */}
            <path d="M172 219 Q175 215, 178 219" fill="none" stroke="#2c2420" strokeWidth="1" />
            <line x1="175" y1="216" x2="175" y2="219" stroke="#2c2420" strokeWidth="0.8" />

            {/* Neck */}
            <line x1="175" y1="231" x2="175" y2="234" stroke="#2c2420" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M163 237 Q169 233, 175 234 Q181 233, 187 237" fill="none" stroke="#2c2420" strokeWidth="1.3" />

            {/* Torso V-Taper */}
            <line x1="163" y1="237" x2="167" y2="262" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="187" y1="237" x2="183" y2="262" stroke="#2c2420" strokeWidth="1.2" />

            {/* Chest Muscles (胸肌) */}
            <path d="M167 241 Q171 245, 175 242 Q179 245, 183 241" fill="none" stroke="#2c2420" strokeWidth="0.7" />

            {/* ABS Definition (腹肌 - 6 pack lines in MainInkLandscape style) */}
            <line x1="175" y1="245" x2="175" y2="260" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M170 248 Q175 249, 180 248" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M170 252 Q175 253, 180 252" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M171 256 Q175 257, 179 256" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Waist */}
            <path d="M167 262 Q175 264, 183 262" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* Arms - Holding flower branch (群芳之祖) */}
            <path d="M163 237 Q155 244, 150 252" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <path d="M187 237 Q192 245, 195 252" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            {/* Flower branch in hands */}
            <path d="M148 250 Q160 246, 172 242" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <circle cx="146" cy="249" r="3" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="146" cy="249" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />

            {/* Legs Stance */}
            <line x1="170" y1="262" x2="167" y2="288" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="180" y1="262" x2="183" y2="288" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M171 265 Q169 271, 168 278" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M179 265 Q181 271, 182 278" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          </g>


          {/* ===== FIGURE 3: RIGHT MALE SCHOLAR / OPERA ACTOR ATTENDANT (杜仙 / 侍仙) ===== */}
          {/* Standing on right at X: 335, Y: 235 */}
          <g id="figure-right-scholar">
            {/* Head */}
            <circle cx="335" cy="225" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Scholar cap / hair bun */}
            <path d="M332 219 Q335 215, 338 219" fill="none" stroke="#2c2420" strokeWidth="1" />
            <line x1="335" y1="216" x2="335" y2="219" stroke="#2c2420" strokeWidth="0.8" />

            {/* Neck */}
            <line x1="335" y1="231" x2="335" y2="234" stroke="#2c2420" strokeWidth="1" />

            {/* Broad Shoulders */}
            <path d="M323 237 Q329 233, 335 234 Q341 233, 347 237" fill="none" stroke="#2c2420" strokeWidth="1.3" />

            {/* Torso V-Taper */}
            <line x1="323" y1="237" x2="327" y2="262" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="347" y1="237" x2="343" y2="262" stroke="#2c2420" strokeWidth="1.2" />

            {/* Chest Muscles (胸肌) */}
            <path d="M327 241 Q331 245, 335 242 Q339 245, 343 241" fill="none" stroke="#2c2420" strokeWidth="0.7" />

            {/* ABS Definition (腹肌 - 6 pack lines in MainInkLandscape style) */}
            <line x1="335" y1="245" x2="335" y2="260" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M330 248 Q335 249, 340 248" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M330 252 Q335 253, 340 252" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M331 256 Q335 257, 339 256" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Waist */}
            <path d="M327 262 Q335 264, 343 262" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* Arms - Holding literary scroll (文运之祥) */}
            <path d="M323 237 Q316 244, 312 252" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <path d="M347 237 Q352 245, 355 252" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            {/* Scroll roll */}
            <rect x="306" y="246" width="10" height="18" rx="1.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* Legs Stance */}
            <line x1="330" y1="262" x2="327" y2="288" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="340" y1="262" x2="343" y2="288" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M331 265 Q329 271, 328 278" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M339 265 Q341 271, 342 278" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          </g>


          {/* ===== WATER / POND (公神为水 / 池塘) ===== */}
          <rect x="12" y="325" width="496" height="60" fill="url(#waterWash)" />
          <path d="M12 325 Q60 319, 120 325 Q180 331, 240 325 Q300 319, 360 325 Q420 331, 508 325" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M30 333 Q80 329, 140 333 Q200 337, 260 333 Q320 329, 380 333 Q430 337, 490 333" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M50 341 Q100 338, 160 341 Q220 344, 280 341 Q340 338, 400 341 Q450 344, 500 341" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.6" />

          {/* Water Ripples */}
          <path d="M180 348 Q190 346, 200 348 Q210 350, 220 348" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
          <path d="M310 352 Q320 350, 330 352 Q340 354, 350 352" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />

          {/* Lotus leaves in water */}
          <ellipse cx="140" cy="340" rx="10" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="140" y1="336" x2="140" y2="344" stroke="#2c2420" strokeWidth="0.3" />
          <ellipse cx="370" cy="343" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <line x1="370" y1="340" x2="370" y2="346" stroke="#2c2420" strokeWidth="0.3" />

          {/* Lotus bud - tipped with plum rouge */}
          <line x1="165" y1="335" x2="165" y2="325" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M162 325 Q165 319, 168 325 Q165 327, 162 325 Z" fill="url(#mlPlumTint)" stroke="none" />
          <path d="M162 325 Q165 319, 168 325" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* ===== FLYING BIRDS (飞鸟) ===== */}
          <path d="M190 85 Q195 78, 200 82 Q205 76, 210 82" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M210 78 Q214 72, 218 76 Q222 70, 226 76" fill="none" stroke="#2c2420" strokeWidth="0.4" />

          {/* ===== GROUND / EARTH LINE ===== */}
          <path d="M12 315 Q100 310, 155 313 Q200 317, 285 313 Q370 309, 440 315 Q480 318, 508 313" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          {/* Grass tufts */}
          <path d="M35 295 Q38 289, 40 295" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M470 310 Q473 305, 475 310" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        </g>

        {/* ===== RED SEAL STAMP (印章 - Exact style from MainInkLandscape.tsx) ===== */}
        <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
        <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">花</text>

        {/* ===== CALLIGRAPHY TITLE (题字 - Exact vertical-rl style from MainInkLandscape.tsx) ===== */}
        <text x="488" y="160" textAnchor="middle" fill="#2c2420" fontSize="13" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">司文司花</text>
        <text x="502" y="160" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">九香花史</text>
      </svg>
    </div>
  );
};
