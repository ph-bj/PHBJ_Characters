import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 7:
 * "时日将暮，琴仙方寸已乱，不知怎样，只听柏树上那几个老鸦，呀呀呀的叫个不住。又有一枭鸟在破楼上，鼓吻弄舌，叫得琴仙毛发森竖。
 *  时已新秋，天气昼热夜凉，琴仙身上发冷，到自己房里去穿衣。走到中堂，一灯如豆，那盏小琉璃，也是昏昏欲灭。
 *  窗外新月模糊，见树边有个人影一闪，即不见了。"
 * 
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic,
 * layered ink bleed filters, dusk atmosphere, broken tower with owl, cypress trees with noisy crows,
 * flickering bean-sized glass lamp, fuzzy crescent moon, and male character abs definition.
 */
export const Chapter56Para7Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        {/* ===== DEFS: Ink wash gradients & filters ===== */}
        <defs>
          {/* Mountain & sky dusk ink gradient */}
          <linearGradient id="c56p7-duskSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#2c2420" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="c56p7-inkMountain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.1" />
          </linearGradient>

          {/* Lamp glow radial gradient (一灯如豆，暖黄微光) */}
          <radialGradient id="c56p7-lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb74d" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#f5a623" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#e67e22" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Moon halo gradient (新月模糊) */}
          <radialGradient id="c56p7-moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="20%" stopColor="#f5efe0" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#2c2420" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Shadow figure ink bleed wash */}
          <radialGradient id="c56p7-shadowBleed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#2c2420" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Ground wash */}
          <linearGradient id="c56p7-groundWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.22" />
          </linearGradient>

          {/* Brush wobble - hand-drawn linework feel */}
          <filter id="c56p7-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="9" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - wet rice paper (洇墨) */}
          <filter id="c56p7-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavier bleed for distant background mountains & tree silhouettes */}
          <filter id="c56p7-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="13" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== DUSK SKY BACKDROP (时日将暮) ===== */}
        <rect x="9" y="9" width="502" height="190" fill="url(#c56p7-duskSky)" rx="2" />

        {/* ===== LAYERED INK WASHES (墨分五色) ===== */}
        <g filter="url(#c56p7-mlBleedFar)">
          {/* Distant mountain silhouette */}
          <path d="M9 160 Q60 110, 130 145 Q190 105, 260 140 Q320 95, 390 135 Q450 110, 511 155 L511 190 L9 190 Z" fill="#2c2420" opacity="0.25" />
          {/* Ground tone wash */}
          <path d="M9 310 Q140 300, 270 305 Q400 300, 511 315 L511 391 L9 391 Z" fill="url(#c56p7-groundWash)" />
        </g>

        {/* Mid-ground bled ink washes */}
        <g filter="url(#c56p7-mlBleed)">
          {/* Broken tower roof bleed */}
          <path d="M22 175 L65 145 L108 175 Z" fill="#2c2420" opacity="0.3" />
          {/* Cypress foliage wash */}
          <ellipse cx="435" cy="140" rx="36" ry="48" fill="#2c2420" opacity="0.3" />
          <ellipse cx="400" cy="175" rx="28" ry="38" fill="#2c2420" opacity="0.25" />
          {/* Shadow figure bleed near tree */}
          <ellipse cx="370" cy="270" rx="16" ry="32" fill="url(#c56p7-shadowBleed)" />
        </g>

        {/* Linework & details layer with brush texture filter */}
        <g filter="url(#c56p7-inkTexture)">

          {/* ===== FUZZY CRESCENT MOON (窗外新月模糊) ===== */}
          <circle cx="440" cy="50" r="32" fill="url(#c56p7-moonHalo)" />
          {/* Crescent moon shape */}
          <path d="M432 36 A 16 16 0 0 1 448 64 A 18 18 0 0 0 432 36 Z" fill="#f5efe0" opacity="0.85" />
          <path d="M432 36 A 16 16 0 0 1 448 64" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.6" />

          {/* Autumn clouds / mist wisps (新秋风云) */}
          <path d="M120 40 Q150 28, 180 35 Q200 25, 230 38" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.4" />
          <path d="M270 55 Q300 42, 330 50 Q350 40, 380 52" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.35" />

          {/* ===== DISTANT MOUNTAIN RIDGE LINEWORK ===== */}
          <path d="M9 160 Q60 110, 130 145 Q190 105, 260 140 Q320 95, 390 135 Q450 110, 511 155" fill="none" stroke="#2c2420" strokeWidth="1.2" opacity="0.7" />
          {/* Texture Cun-fa strokes (皴法) */}
          <path d="M135 148 Q140 155, 138 162" stroke="#2c2420" strokeWidth="0.4" fill="none" opacity="0.5" />
          <path d="M265 142 Q270 150, 268 158" stroke="#2c2420" strokeWidth="0.4" fill="none" opacity="0.5" />
          <path d="M395 138 Q400 146, 398 154" stroke="#2c2420" strokeWidth="0.4" fill="none" opacity="0.5" />

          {/* ===== DILAPIDATED BROKEN TOWER (破楼 - Left Side) ===== */}
          {/* Base structure & weathered walls */}
          <path d="M30 175 L30 290 L100 290 L100 175 Z" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <line x1="30" y1="230" x2="100" y2="230" stroke="#2c2420" strokeWidth="1.2" />
          {/* Broken roof tiles & damaged eave */}
          <path d="M20 175 L65 142 L110 175" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          <path d="M25 175 L65 147 L105 175" fill="none" stroke="#2c2420" strokeWidth="1" strokeDasharray="6,3" />
          {/* Missing roof section (破损缝隙) */}
          <path d="M45 158 L55 150 L60 162" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          {/* Cracked wall texture lines */}
          <path d="M42 190 Q48 205, 45 220" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.7" />
          <path d="M75 238 Q72 255, 78 270" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.7" />
          {/* Dilapidated wooden window frames */}
          <rect x="40" y="190" width="22" height="30" fill="none" stroke="#2c2420" strokeWidth="1" />
          <line x1="51" y1="190" x2="51" y2="220" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" />
          <rect x="70" y="242" width="20" height="32" fill="none" stroke="#2c2420" strokeWidth="1" />

          {/* ===== EERIE OWL ON BROKEN TOWER (破楼枭鸟 - 鼓吻弄舌) ===== */}
          {/* Owl perched at top ridge of broken tower (x=65, y=134) */}
          {/* Head & tufted ears */}
          <ellipse cx="65" cy="132" rx="4.5" ry="4" fill="#2c2420" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M61 129 L63 126 L65 129" fill="#2c2420" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M65 129 L67 126 L69 129" fill="#2c2420" stroke="#2c2420" strokeWidth="0.5" />
          {/* Large round glowing owl eyes */}
          <circle cx="63.2" cy="131.5" r="1.2" fill="#ffb74d" stroke="#2c2420" strokeWidth="0.4" />
          <circle cx="66.8" cy="131.5" r="1.2" fill="#ffb74d" stroke="#2c2420" strokeWidth="0.4" />
          <circle cx="63.2" cy="131.5" r="0.5" fill="#1a1412" />
          <circle cx="66.8" cy="131.5" r="0.5" fill="#1a1412" />
          {/* Open beak (鼓吻弄舌) */}
          <path d="M64.5 133.2 L65.5 135 L66.5 133.2 Z" fill="#2c2420" />
          {/* Body & wings */}
          <ellipse cx="65" cy="140" rx="5.5" ry="7" fill="#2c2420" stroke="#2c2420" strokeWidth="0.8" />
          {/* Tail feathers */}
          <path d="M63 147 L65 151 L67 147" stroke="#2c2420" strokeWidth="0.8" fill="none" />
          {/* Sound waves from owl calling */}
          <path d="M72 130 Q75 128, 77 132" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.6" />
          <path d="M74 126 Q78 123, 81 128" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

          {/* ===== CENTRAL HALL & ROOM (中堂 - Center / Right Center) ===== */}
          {/* Main roof of hall */}
          <path d="M140 200 L260 160 L380 200" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          <path d="M145 200 L260 165 L375 200" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Upturned roof eaves (飞檐) */}
          <path d="M140 200 Q132 195, 125 192" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <path d="M380 200 Q388 195, 395 192" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          {/* Roof tiles pattern */}
          <line x1="180" y1="187" x2="180" y2="200" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="220" y1="174" x2="220" y2="200" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="300" y1="174" x2="300" y2="200" stroke="#2c2420" strokeWidth="0.6" />
          <line x1="340" y1="187" x2="340" y2="200" stroke="#2c2420" strokeWidth="0.6" />

          {/* Hall front wall & pillars */}
          <rect x="150" y="200" width="220" height="110" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <line x1="190" y1="200" x2="190" y2="310" stroke="#2c2420" strokeWidth="1.4" />
          <line x1="330" y1="200" x2="330" y2="310" stroke="#2c2420" strokeWidth="1.4" />

          {/* Latticed Window (窗外新月) */}
          <rect x="290" y="215" width="32" height="50" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="306" y1="215" x2="306" y2="265" stroke="#2c2420" strokeWidth="0.5" />
          <line x1="290" y1="240" x2="322" y2="240" stroke="#2c2420" strokeWidth="0.5" />

          {/* ===== BEAN-SIZED GLASS LAMP (一灯如豆，小琉璃昏昏欲灭) ===== */}
          {/* Radial light aura glowing from inside hall */}
          <ellipse cx="235" cy="235" rx="45" ry="35" fill="url(#c56p7-lampGlow)" />

          {/* Table & Glass Lamp (琉璃灯) */}
          {/* Small side table */}
          <line x1="225" y1="255" x2="245" y2="255" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="228" y1="255" x2="228" y2="275" stroke="#2c2420" strokeWidth="0.9" />
          <line x1="242" y1="255" x2="242" y2="275" stroke="#2c2420" strokeWidth="0.9" />
          {/* Glass lamp cup (小琉璃) */}
          <path d="M232 255 L231 247 Q235 244, 239 247 L238 255 Z" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Tiny bean flame (一灯如豆) */}
          <ellipse cx="235" cy="245" rx="1.5" ry="2.5" fill="#ffb74d" stroke="#2c2420" strokeWidth="0.4" />
          <circle cx="235" cy="245" r="0.6" fill="#ffffff" />
          {/* Dim wispy smoke from lamp */}
          <path d="M235 242 Q233 237, 236 232" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.6" />

          {/* ===== QIN'GUYAN (琴仙 - Male Main Character with Abs) ===== */}
          {/* Walking in hall (x=205, y=230 to 295), shivering from cold ("身上发冷，到自己房里去穿衣") */}
          <g id="qinyan-character">
            {/* Head */}
            <circle cx="205" cy="225" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            {/* Scholar hair bun & pin (髻与簪) */}
            <path d="M202 219 Q205 215, 208 219" fill="none" stroke="#2c2420" strokeWidth="1" />
            <line x1="205" y1="216" x2="205" y2="219" stroke="#2c2420" strokeWidth="0.8" />
            {/* Delicate facial profile & shivering expression */}
            <path d="M208 225 Q209 226, 208 227" fill="none" stroke="#2c2420" strokeWidth="0.5" />

            {/* Neck */}
            <line x1="205" y1="231" x2="205" y2="234" stroke="#2c2420" strokeWidth="1.1" />

            {/* Broad Athletic Shoulders */}
            <path d="M192 238 Q198 234, 205 235 Q212 234, 218 238" fill="none" stroke="#2c2420" strokeWidth="1.4" />

            {/* Open / Fitted Inner Robe revealing Torso & Defined ABS */}
            <line x1="192" y1="238" x2="197" y2="265" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="218" y1="238" x2="213" y2="265" stroke="#2c2420" strokeWidth="1.2" />

            {/* Pectoral Chest Muscles (胸肌) */}
            <path d="M197 242 Q201 245, 205 243 Q209 245, 213 242" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* DEFINED ABS (6-Pack 腹肌 - Prompt Explicit Requirement) */}
            <line x1="205" y1="245" x2="205" y2="263" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M200 248 Q205 249, 210 248" fill="none" stroke="#2c2420" strokeWidth="0.45" />
            <path d="M200 252 Q205 253, 210 252" fill="none" stroke="#2c2420" strokeWidth="0.45" />
            <path d="M201 256 Q205 257, 209 256" fill="none" stroke="#2c2420" strokeWidth="0.45" />
            <path d="M201 260 Q205 261, 209 260" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Waist Belt & Half-sleeve Wrap */}
            <path d="M196 265 Q205 267, 214 265" fill="none" stroke="#2c2420" strokeWidth="1.1" />

            {/* Shivering Arms (crossing chest / clutching arms against cold) */}
            <path d="M192 238 Q187 246, 196 252" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M218 238 Q223 246, 212 253" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Bicep definition */}
            <path d="M190 243 Q188 248, 192 250" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M220 243 Q222 248, 218 250" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.7" />

            {/* Flowing Lower Robe & Walking Stance */}
            <path d="M196 265 L190 295 L220 295 L214 265 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M200 266 Q197 280, 194 294" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M210 266 Q213 280, 216 294" fill="none" stroke="#2c2420" strokeWidth="0.6" />

            {/* Feet / Shoes */}
            <path d="M192 295 L188 298 L196 298 Z" fill="#2c2420" />
            <path d="M212 295 L216 298 L208 298 Z" fill="#2c2420" />
          </g>

          {/* ===== ANCIENT CYPRESS TREES & CROWS (柏树与老鸦 - Right Side) ===== */}
          {/* Main Cypress Trunk (柏树) */}
          <path d="M435 310 Q425 250, 435 190 Q430 140, 440 90" fill="none" stroke="#2c2420" strokeWidth="3.5" />
          <path d="M432 310 Q422 250, 432 190 Q427 140, 437 90" fill="none" stroke="#2c2420" strokeWidth="1.2" strokeDasharray="8,3" />
          {/* Secondary branch */}
          <path d="M430 200 Q405 180, 380 170" fill="none" stroke="#2c2420" strokeWidth="2" />
          <path d="M435 150 Q460 135, 480 125" fill="none" stroke="#2c2420" strokeWidth="1.6" />

          {/* Cypress needle foliage tufts (柏树叶纹) */}
          <path d="M440 90 Q425 80, 410 95 Q425 105, 440 90 Z" fill="#2c2420" opacity="0.6" />
          <path d="M435 120 Q410 110, 395 125 Q415 135, 435 120 Z" fill="#2c2420" opacity="0.65" />
          <path d="M480 125 Q495 115, 505 130 Q485 140, 480 125 Z" fill="#2c2420" opacity="0.55" />
          <path d="M380 170 Q365 160, 355 175 Q372 182, 380 170 Z" fill="#2c2420" opacity="0.6" />

          {/* NOISY CROWS ON CYPRESS (柏树老鸦 - 呀呀呀叫个不住) */}
          {/* Crow 1 - on main branch (x=415, y=172) - wings spread, open beak */}
          <ellipse cx="415" cy="172" rx="4" ry="2.8" fill="#1a1412" stroke="#2c2420" strokeWidth="0.6" />
          <circle cx="418" cy="170" r="1.8" fill="#1a1412" />
          {/* Open beak */}
          <path d="M419.5 170 L423 168.5 L420 171 Z" fill="#2c2420" />
          {/* Spread wing */}
          <path d="M413 172 Q408 164, 404 168 Q410 171, 413 172 Z" fill="#2c2420" />
          <path d="M413 174 L408 178 L412 175 Z" fill="#2c2420" />
          {/* Sound markings */}
          <path d="M424 166 Q427 163, 429 166" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />

          {/* Crow 2 - perched higher (x=438, y=112) */}
          <ellipse cx="438" cy="112" rx="3.5" ry="2.5" fill="#1a1412" />
          <circle cx="435" cy="110" r="1.6" fill="#1a1412" />
          <path d="M433.5 110 L430 109 L433 111 Z" fill="#2c2420" />
          <path d="M440 114 L444 117 L441 113 Z" fill="#2c2420" />

          {/* Crow 3 - flying near tree top (x=455, y=95) */}
          <path d="M450 95 Q455 88, 460 95 Q465 88, 470 95 Q460 97, 450 95 Z" fill="#1a1412" stroke="#2c2420" strokeWidth="0.5" />

          {/* ===== MYSTERIOUS FLITTING SHADOW (树边人影一闪，即不见了) ===== */}
          {/* Shadowy figure standing near cypress tree base (x=370, y=250-305) */}
          <g id="flitting-shadow-figure" opacity="0.65">
            {/* Shadow head */}
            <ellipse cx="370" cy="245" rx="5" ry="5.5" fill="#1a1412" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M366 240 Q370 236, 374 240" fill="#1a1412" />
            {/* Broad shoulders & V-taper shadow torso */}
            <path d="M358 255 Q364 250, 370 251 Q376 250, 382 255" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="358" y1="255" x2="363" y2="280" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="382" y1="255" x2="377" y2="280" stroke="#2c2420" strokeWidth="1.2" />

            {/* Shadow Chest & Abs outline */}
            <path d="M363 260 Q367 263, 370 261 Q373 263, 377 260" fill="none" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="370" y1="263" x2="370" y2="279" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M365 266 Q370 267, 375 266" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M365 270 Q370 271, 375 270" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            <path d="M366 274 Q370 275, 374 274" fill="none" stroke="#2c2420" strokeWidth="0.4" />

            {/* Arms in motion (flitting / vanishing) */}
            <path d="M358 255 Q350 263, 346 272" fill="none" stroke="#2c2420" strokeWidth="1.1" strokeDasharray="3,2" />
            <path d="M382 255 Q388 263, 392 272" fill="none" stroke="#2c2420" strokeWidth="1.1" strokeDasharray="3,2" />

            {/* Legs merging into ground mist */}
            <line x1="364" y1="280" x2="361" y2="305" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="376" y1="280" x2="379" y2="305" stroke="#2c2420" strokeWidth="1.2" />
          </g>

          {/* Speed / motion blur lines behind shadow (一闪即不见) */}
          <path d="M385 248 Q395 246, 405 248" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.4" strokeDasharray="4,3" />
          <path d="M388 262 Q398 260, 408 262" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.4" strokeDasharray="4,3" />
          <path d="M382 276 Q392 274, 402 276" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,3" />

          {/* ===== FOREGROUND GROUND & PLANT DETAILS ===== */}
          <path d="M9 310 Q140 300, 270 305 Q400 300, 511 315" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          {/* Ground grass tufts */}
          <path d="M120 308 L123 300 M124 308 L128 298 M127 308 L132 301" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M260 305 L263 297 M264 305 L268 295 M267 305 L272 298" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M460 312 L463 304 M464 312 L468 302 M467 312 L472 305" stroke="#2c2420" strokeWidth="0.8" />

          {/* ===== TRADITIONAL CHINESE SEAL (印章 - Bottom Right) ===== */}
          <g transform="translate(465, 340)">
            <rect x="0" y="0" width="34" height="34" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
            <rect x="2" y="2" width="30" height="30" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
            {/* Seal characters: "新秋夜冷" in seal script styling */}
            <text x="17" y="15" fill="#b4494e" fontSize="10" fontFamily="serif" textAnchor="middle" fontWeight="bold">新秋</text>
            <text x="17" y="27" fill="#b4494e" fontSize="10" fontFamily="serif" textAnchor="middle" fontWeight="bold">夜冷</text>
          </g>

        </g>
      </svg>
    </div>
  );
};
