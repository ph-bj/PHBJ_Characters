import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 10 (line 13 of chapterChinese56.ts):
 * "忽见自己肩上有三寸来长的一条蝎虎，爬到胸前来。琴仙魂不附体，不敢用手去撵他，
 *  将半臂一抖，蝎虎又倒走了回去，那尾还在他颈上一捎，琴仙骨节酥麻，不知怎样，
 *  只得将半臂脱了，扔在地下。那蝎虎又从颈上爬在头上，琴仙唬得哭叫起来。"
 * 
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic,
 * layered ink bleed filters, chamber interior, discarded garment on floor, panicked Qin'guyan
 * with defined male abs, 3-inch gecko crawling on neck/head, and red traditional seal.
 */
export const Chapter56Para13Illustration: React.FC = () => {
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
          {/* Candle light radial glow */}
          <radialGradient id="c56p13-candleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb74d" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#f5a623" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#e67e22" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Window moon glow */}
          <radialGradient id="c56p13-moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="20%" stopColor="#f5efe0" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#2c2420" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Incense smoke gradient */}
          <linearGradient id="c56p13-smokeFade" x1="0" y1="1" x2="0.3" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0.05" />
          </linearGradient>

          {/* Discarded garment wash */}
          <linearGradient id="c56p13-vestWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.1" />
          </linearGradient>

          {/* Brush wobble - hand-drawn ink stroke texture */}
          <filter id="c56p13-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - wet rice paper (洇墨) */}
          <filter id="c56p13-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="4" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed for room shadows */}
          <filter id="c56p13-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="14" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (室内部署) ===== */}
        <g filter="url(#c56p13-mlBleedFar)">
          {/* Room shadow wash */}
          <path d="M9 9 L220 9 L220 391 L9 391 Z" fill="#2c2420" opacity="0.18" />
          <path d="M9 320 Q260 310, 511 320 L511 391 L9 391 Z" fill="#2c2420" opacity="0.15" />
        </g>

        {/* Mid-ground ink bleed */}
        <g filter="url(#c56p13-mlBleed)">
          {/* Discarded garment wash blob on floor */}
          <ellipse cx="260" cy="335" rx="38" ry="18" fill="url(#c56p13-vestWash)" opacity="0.8" />
          {/* Incense burner stand shadow */}
          <ellipse cx="85" cy="300" rx="25" ry="12" fill="#2c2420" opacity="0.2" />
        </g>

        {/* Main Linework & Detailed Layer with Brush Wobble Filter */}
        <g filter="url(#c56p13-inkTexture)">

          {/* ===== CHAMBER ARCHITECTURE & BACKGROUND (房中中堂) ===== */}
          {/* Rear wall boundary line */}
          <line x1="9" y1="280" x2="511" y2="280" stroke="#2c2420" strokeWidth="1.2" opacity="0.6" />
          {/* Wooden floorboard perspective lines */}
          <line x1="120" y1="280" x2="80" y2="391" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
          <line x1="240" y1="280" x2="220" y2="391" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
          <line x1="360" y1="280" x2="380" y2="391" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

          {/* Latticed Window on Right (窗外新月) */}
          <rect x="380" y="45" width="95" height="150" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          {/* Moon glow behind window lattice */}
          <circle cx="425" cy="100" r="40" fill="url(#c56p13-moonGlow)" />
          {/* Crescent moon shape in window */}
          <path d="M415 85 A 18 18 0 0 1 435 115 A 20 20 0 0 0 415 85 Z" fill="#f5efe0" opacity="0.85" />
          {/* Window lattice grid */}
          <line x1="427" y1="45" x2="427" y2="195" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="380" y1="95" x2="475" y2="95" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="380" y1="145" x2="475" y2="145" stroke="#2c2420" strokeWidth="0.8" />

          {/* Screen / Calligraphy hanging on left wall */}
          <rect x="35" y="55" width="60" height="110" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M45 75 Q65 65, 85 75 M45 95 Q65 88, 85 98 M45 115 Q65 110, 85 118" stroke="#2c2420" strokeWidth="0.5" fill="none" opacity="0.5" />

          {/* ===== SIDE TABLE & INCENSE BURNER (桌案与香炉) ===== */}
          <line x1="45" y1="210" x2="135" y2="210" stroke="#2c2420" strokeWidth="1.6" />
          <line x1="55" y1="210" x2="55" y2="280" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="125" y1="210" x2="125" y2="280" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="50" y1="230" x2="130" y2="230" stroke="#2c2420" strokeWidth="0.7" />

          {/* Incense Burner (香炉) */}
          <path d="M80 210 L78 198 Q90 193, 102 198 L100 210 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
          <ellipse cx="90" cy="198" rx="12" ry="3" fill="#2c2420" opacity="0.3" />
          {/* Wisps of incense smoke rising (袅袅香烟) */}
          <path d="M90 195 Q85 175, 93 155 Q100 135, 90 115 Q82 95, 88 75" fill="none" stroke="#2c2420" strokeWidth="0.7" opacity="0.6" />
          <path d="M92 192 Q98 172, 90 152 Q84 132, 94 112" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.4" />

          {/* Candle Stand on Table (烛台与微光) */}
          <line x1="115" y1="210" x2="115" y2="182" stroke="#2c2420" strokeWidth="1" />
          <ellipse cx="115" cy="182" rx="4" ry="1.5" fill="#2c2420" />
          <line x1="115" y1="182" x2="115" y2="170" stroke="#2c2420" strokeWidth="0.8" />
          {/* Candle flame glow */}
          <ellipse cx="115" cy="166" rx="20" ry="25" fill="url(#c56p13-candleGlow)" />
          <ellipse cx="115" cy="168" rx="1.8" ry="3" fill="#ffb74d" stroke="#2c2420" strokeWidth="0.4" />
          <circle cx="115" cy="168" r="0.8" fill="#ffffff" />

          {/* ===== DISCARDED HALF-SLEEVED VEST ON FLOOR (将半臂脱了，扔在地下) ===== */}
          <g id="discarded-vest">
            <path d="M225 330 Q240 318, 260 322 Q285 315, 298 332 Q305 348, 280 352 Q255 355, 232 346 Q220 340, 225 330 Z" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <path d="M238 326 Q255 332, 275 328 M242 338 Q262 344, 288 338" stroke="#2c2420" strokeWidth="0.7" fill="none" opacity="0.7" />
            {/* Sleeves folded on floor */}
            <path d="M225 330 Q212 338, 218 348 Q230 350, 232 346" stroke="#2c2420" strokeWidth="1.1" fill="none" />
            <path d="M298 332 Q312 338, 306 348 Q290 352, 280 352" stroke="#2c2420" strokeWidth="1.1" fill="none" />
          </g>

          {/* ===== PANICKED QIN'GUYAN (琴仙 - Male Main Character with Abs) ===== */}
          <g id="qinyan-panicked">
            {/* Head */}
            <circle cx="270" cy="148" r="7" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            {/* Disheveled hair bun & pin */}
            <path d="M265 141 Q270 135, 275 141" fill="none" stroke="#2c2420" strokeWidth="1.1" />
            <line x1="270" y1="133" x2="270" y2="138" stroke="#2c2420" strokeWidth="0.9" />

            {/* Facial details: open mouth weeping ("唬得哭叫起来") */}
            <circle cx="267" cy="147" r="0.8" fill="#2c2420" />
            <circle cx="273" cy="147" r="0.8" fill="#2c2420" />
            <ellipse cx="270" cy="151.5" rx="1.5" ry="2" fill="#2c2420" />

            {/* Neck */}
            <line x1="270" y1="155" x2="270" y2="159" stroke="#2c2420" strokeWidth="1.2" />

            {/* Broad Athletic Shoulders */}
            <path d="M252 165 Q261 158, 270 159 Q279 158, 288 165" fill="none" stroke="#2c2420" strokeWidth="1.5" />

            {/* Open Inner Robe exposing Torso & ABS */}
            <line x1="252" y1="165" x2="258" y2="198" stroke="#2c2420" strokeWidth="1.3" />
            <line x1="288" y1="165" x2="282" y2="198" stroke="#2c2420" strokeWidth="1.3" />

            {/* Pectoral Chest Definition (胸肌) */}
            <path d="M258 170 Q264 174, 270 171 Q276 174, 282 170" fill="none" stroke="#2c2420" strokeWidth="0.85" />

            {/* DEFINED ABS (6-Pack 腹肌) */}
            <line x1="270" y1="173" x2="270" y2="196" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M263 177 Q270 178.5, 277 177" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M263 182 Q270 183.5, 277 182" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M264 187 Q270 188.5, 276 187" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M264 192 Q270 193.5, 276 192" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Waist / Robe Sash */}
            <path d="M257 198 Q270 201, 283 198" fill="none" stroke="#2c2420" strokeWidth="1.2" />

            {/* Shuddering Raised Arms */}
            <path d="M252 165 Q240 152, 235 142" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M235 142 Q230 136, 227 132" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M248 160 Q240 150, 238 144" stroke="#2c2420" strokeWidth="0.5" fill="none" />
            <path d="M288 165 Q300 152, 305 142" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M305 142 Q310 136, 313 132" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M292 160 Q300 150, 302 144" stroke="#2c2420" strokeWidth="0.5" fill="none" />

            {/* Lower Robe & Shaking Legs */}
            <path d="M257 198 L248 285 L292 285 L283 198 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M263 200 Q258 240, 254 284" stroke="#2c2420" strokeWidth="0.6" fill="none" />
            <path d="M277 200 Q282 240, 286 284" stroke="#2c2420" strokeWidth="0.6" fill="none" />

            {/* Feet */}
            <path d="M250 285 L244 289 L254 289 Z" fill="#2c2420" />
            <path d="M284 285 L290 289 L280 289 Z" fill="#2c2420" />

            {/* Shivering motion lines */}
            <path d="M222 138 Q220 144, 222 150" stroke="#2c2420" strokeWidth="0.5" fill="none" opacity="0.5" />
            <path d="M318 138 Q320 144, 318 150" stroke="#2c2420" strokeWidth="0.5" fill="none" opacity="0.5" />
          </g>

          {/* ===== THE 3-INCH GECKO (三寸蝎虎 - 爬在头上，尾在颈上一捎) ===== */}
          <g id="gecko-lizard" transform="translate(273, 138) rotate(-25)">
            <path d="M0 0 Q2 -8, 1 -16 Q0 -24, 2 -32" fill="none" stroke="#1a1412" strokeWidth="2.4" strokeLinecap="round" />
            <ellipse cx="2" cy="-33" rx="2.5" ry="3.5" fill="#1a1412" />
            <circle cx="0.8" cy="-34.5" r="0.6" fill="#ffb74d" />
            <circle cx="3.2" cy="-34.5" r="0.6" fill="#ffb74d" />
            <path d="M0 -8 L-4 -12 M-4 -12 L-6 -10 M-4 -12 L-5 -14" stroke="#1a1412" strokeWidth="0.9" fill="none" />
            <path d="M2 -8 L6 -12 M6 -12 L8 -10 M6 -12 L7 -14" stroke="#1a1412" strokeWidth="0.9" fill="none" />
            <path d="M1 -22 L-3 -26 M-3 -26 L-5 -24 M-3 -26 L-4 -28" stroke="#1a1412" strokeWidth="0.9" fill="none" />
            <path d="M1 -22 L5 -26 M5 -26 L7 -24 M5 -26 L6 -28" stroke="#1a1412" strokeWidth="0.9" fill="none" />
            <path d="M0 0 Q-3 8, -6 12 Q-8 15, -4 18" stroke="#1a1412" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </g>

          {/* Fear lines */}
          <path d="M260 130 L254 124 M270 124 L270 116 M280 128 L287 121" stroke="#2c2420" strokeWidth="0.8" />

          {/* ===== TRADITIONAL CHINESE SEAL (印章 - Bottom Right) ===== */}
          <g transform="translate(465, 340)">
            <rect x="0" y="0" width="34" height="34" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
            <rect x="2" y="2" width="30" height="30" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
            <text x="17" y="15" fill="#b4494e" fontSize="10" fontFamily="serif" textAnchor="middle" fontWeight="bold">蝎虎</text>
            <text x="17" y="27" fill="#b4494e" fontSize="10" fontFamily="serif" textAnchor="middle" fontWeight="bold">惊魂</text>
          </g>

        </g>
      </svg>
    </div>
  );
};
