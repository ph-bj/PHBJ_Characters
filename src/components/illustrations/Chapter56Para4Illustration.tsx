import React from "react";

/**
 * A highly detailed SVG inspired by `MainInkLandscape`.
 * Visualizes paragraph 4 of Chapter 56:
 * Huguo Temple (护国寺) rented residence with four clean main rooms,
 * two massive gnarled locust trees (大槐树) shielding the courtyard from the sun ("不见天日"),
 * a deep rear courtyard overgrown with foot-deep wild grass ("草深一尺"),
 * an empty coffin placed under the eaves of the rear building ("楼下有口棺木放着，却是空的"),
 * 4-5 wing rooms on the flank (one used as a kitchen with smoke),
 * a high boundary wall with heavy double doors leading outside ("墙上有重门通着外面"),
 * and unpacked luggage chests stacked on the porch ("箱笼堆满一处").
 */
export const Chapter56Para4Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        <defs>
          {/* Main Ink Wash Gradients */}
          <linearGradient id="c56-ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="groundWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.15" />
          </linearGradient>

          {/* Dense tree canopy shade gradient (遮天蔽日) */}
          <radialGradient id="treeShadow" cx="50%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#2c2420" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.02" />
          </radialGradient>

          {/* Coffin ink wash gradient */}
          <linearGradient id="coffinWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.35" />
          </linearGradient>

          {/* Kitchen smoke gradient */}
          <linearGradient id="smokeFade" x1="0" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Brush wobble filter for hand-painted ink lines */}
          <filter id="inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Wet rice paper ink bleed filter (洇墨) */}
          <filter id="mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy background bleed filter */}
          <filter id="mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
        </defs>

        {/* ===== OUTER SCROLL FRAME ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK BLEED WASHES ===== */}
        <g filter="url(#mlBleedFar)">
          {/* Canopy shade ink wash blocking out upper sky */}
          <ellipse cx="230" cy="50" rx="210" ry="45" fill="url(#treeShadow)" />
          <ellipse cx="140" cy="70" rx="120" ry="50" fill="#2c2420" opacity="0.18" />
          <ellipse cx="320" cy="65" rx="140" ry="48" fill="#2c2420" opacity="0.16" />

          {/* Distant temple hall roof line background */}
          <path d="M12 110 Q140 85, 270 95 Q380 90, 508 115 L508 145 L12 145 Z" fill="#2c2420" opacity="0.1" />

          {/* Ground washes: front courtyard paving vs rear wild grass area */}
          <rect x="12" y="310" width="496" height="75" fill="url(#groundWash)" />
          <path d="M260 210 L508 210 L508 380 L260 380 Z" fill="#2c2420" opacity="0.09" />
        </g>

        <g filter="url(#mlBleed)">
          {/* Wing rooms ink wash */}
          <path d="M12 160 L120 160 L120 310 L12 310 Z" fill="#2c2420" opacity="0.11" />
          {/* Rear empty coffin shadow wash */}
          <ellipse cx="430" cy="272" rx="32" ry="12" fill="#2c2420" opacity="0.25" />
          {/* Stacked trunks ink wash */}
          <rect x="135" y="278" width="48" height="30" fill="#2c2420" opacity="0.18" />
        </g>

        {/* ===== MAIN HAND-DRAWN INK LINEWORK ===== */}
        <g filter="url(#inkTexture)">

          {/* ===== 1. REAR COURTYARD & REAR TWO-STORY BUILDING (后院与后楼 - Top Right / Far Right) ===== */}
          {/* Rear wall boundary */}
          <line x1="260" y1="120" x2="508" y2="120" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="260" y1="120" x2="260" y2="385" stroke="#2c2420" strokeWidth="1.4" strokeDasharray="6,2" />

          {/* Rear Building Upper Floor Roof */}
          <path d="M370 130 L500 130 L494 142 L376 142 Z" fill="#2c2420" opacity="0.35" />
          <path d="M365 130 L505 130" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <path d="M365 130 Q360 126, 355 124" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M505 130 Q510 126, 513 124" fill="none" stroke="#2c2420" strokeWidth="1.3" />

          {/* Rear Building Second Floor Structure */}
          <rect x="375" y="142" width="120" height="40" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="415" y1="142" x2="415" y2="182" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="455" y1="142" x2="455" y2="182" stroke="#2c2420" strokeWidth="0.8" />
          {/* Lattice windows on 2nd floor */}
          <rect x="382" y="150" width="24" height="22" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <rect x="422" y="150" width="24" height="22" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <rect x="462" y="150" width="24" height="22" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Middle Eaves / Balcony separator */}
          <path d="M360 182 L508 182" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <path d="M364 186 L504 186" fill="none" stroke="#2c2420" strokeWidth="0.8" />

          {/* Ground Floor Pillars & Porch (楼下) */}
          <line x1="375" y1="182" x2="375" y2="275" stroke="#2c2420" strokeWidth="1.5" />
          <line x1="415" y1="182" x2="415" y2="275" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="455" y1="182" x2="455" y2="275" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="495" y1="182" x2="495" y2="275" stroke="#2c2420" strokeWidth="1.5" />

          {/* ===== THE EMPTY COFFIN UNDER THE REAR BUILDING (楼下有口棺木放着，却是空的) ===== */}
          {/* Wooden blocks under coffin */}
          <rect x="402" y="270" width="8" height="5" fill="#2c2420" />
          <rect x="450" y="270" width="8" height="5" fill="#2c2420" />
          {/* Main Coffin Body (Traditional Chinese shape, wide head left, narrower foot right) */}
          <path
            d="M 395 252 
               L 465 254 
               L 468 270 
               L 392 268 Z"
            fill="url(#coffinWash)"
            stroke="#2c2420"
            strokeWidth="1.4"
          />
          {/* Coffin Lid (Slightly slid open to clearly reveal it is EMPTY / 却是空的) */}
          <path
            d="M 392 247 
               L 460 249 
               L 463 254 
               L 390 252 Z"
            fill="#2c2420"
            opacity="0.85"
            stroke="#2c2420"
            strokeWidth="1.2"
          />
          {/* Coffin interior shadow showing empty void */}
          <path d="M396 253 L425 253 L425 257 L396 256 Z" fill="#120d0b" opacity="0.9" />
          {/* Coffin wood grain detail */}
          <line x1="398" y1="260" x2="463" y2="262" stroke="#2c2420" strokeWidth="0.4" opacity="0.6" />
          <line x1="396" y1="264" x2="461" y2="266" stroke="#2c2420" strokeWidth="0.4" opacity="0.6" />
          {/* Label text hint in ink aesthetic near coffin */}
          <text x="430" y="285" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" opacity="0.6">空棺</text>

          {/* ===== HIGH WILD GRASS IN REAR COURTYARD (草深一尺) ===== */}
          {/* Dense grass tufts filling the rear yard area */}
          <g stroke="#2c2420" strokeWidth="0.7" fill="none">
            {/* Row 1 - near coffin */}
            <path d="M270 240 Q272 225, 268 215 M271 240 Q275 220, 278 215 M271 240 Q268 228, 264 220" />
            <path d="M290 255 Q293 235, 288 225 M291 255 Q296 230, 300 225 M291 255 Q286 240, 282 230" />
            <path d="M315 248 Q318 228, 314 218 M316 248 Q321 223, 325 218 M316 248 Q311 233, 308 223" />
            <path d="M340 260 Q343 240, 338 230 M341 260 Q346 235, 350 230 M341 260 Q336 245, 332 235" />

            {/* Row 2 - mid yard */}
            <path d="M280 295 Q283 270, 277 255 M281 295 Q287 265, 292 255 M281 295 Q275 275, 270 262" />
            <path d="M305 305 Q309 280, 303 265 M306 305 Q312 275, 318 265 M306 305 Q300 285, 294 272" />
            <path d="M335 298 Q339 273, 333 258 M336 298 Q342 268, 348 258 M336 298 Q330 278, 324 265" />
            <path d="M365 310 Q369 285, 363 270 M366 310 Q372 280, 378 270 M366 310 Q360 290, 354 278" />

            {/* Row 3 - foreground rear yard */}
            <path d="M290 345 Q294 315, 286 295 M291 345 Q298 305, 305 295 M291 345 Q283 320, 277 305" />
            <path d="M320 355 Q325 325, 316 305 M321 355 Q329 315, 336 305 M321 355 Q313 330, 306 315" />
            <path d="M350 348 Q355 318, 346 298 M351 348 Q359 308, 366 298 M351 348 Q343 323, 336 308" />
            <path d="M385 360 Q390 330, 381 310 M386 360 Q394 320, 401 310 M386 360 Q378 335, 371 320" />

            {/* Extra thick weeds along rear building base */}
            <path d="M470 300 Q474 280, 468 268 M471 300 Q477 275, 482 268 M471 300 Q465 285, 460 275" />
            <path d="M490 315 Q494 290, 488 278 M491 315 Q497 285, 502 278 M491 315 Q485 298, 480 286" />
          </g>

          {/* ===== 2. FOUR MAIN ROOMS SECTION (四间正房 - Center Structure) ===== */}
          {/* Main House Roof - Layered curved tile roof */}
          <path d="M115 150 L275 140 L268 152 L122 162 Z" fill="#2c2420" opacity="0.4" />
          <path d="M110 150 L280 140" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          {/* Roof Ridge details & Upturned corners (飞檐) */}
          <path d="M110 150 Q104 144, 98 140" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <path d="M280 140 Q286 135, 292 132" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <circle cx="195" cy="144" r="2.5" fill="#2c2420" />

          {/* Roof Tiles pattern lines */}
          <line x1="130" y1="149" x2="137" y2="161" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="150" y1="147" x2="157" y2="159" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="170" y1="146" x2="177" y2="158" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="190" y1="144" x2="197" y2="156" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="210" y1="143" x2="217" y2="155" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="230" y1="142" x2="237" y2="154" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />
          <line x1="250" y1="141" x2="257" y2="153" stroke="#2c2420" strokeWidth="0.5" opacity="0.7" />

          {/* Porch Eaves line */}
          <line x1="120" y1="162" x2="270" y2="152" stroke="#2c2420" strokeWidth="1.4" />

          {/* Main House Front Columns & 4 Rooms Layout (四间屋子) */}
          <line x1="125" y1="162" x2="125" y2="265" stroke="#2c2420" strokeWidth="1.6" />
          <line x1="160" y1="160" x2="160" y2="265" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="195" y1="157" x2="195" y2="265" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="230" y1="155" x2="230" y2="265" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="265" y1="152" x2="265" y2="265" stroke="#2c2420" strokeWidth="1.6" />

          {/* Room Doors & Windows lattice (干干净净的客房) */}
          {/* Room 1 (Qinxian's room - left) */}
          <rect x="130" y="180" width="25" height="55" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="142.5" y1="180" x2="142.5" y2="235" stroke="#2c2420" strokeWidth="0.5" />
          {/* Room 2 & 3 (Empty middle rooms - 中间空了两间) */}
          <rect x="165" y="185" width="25" height="50" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="3,2" />
          <rect x="200" y="185" width="25" height="50" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="3,2" />
          {/* Room 4 (Daoweng's room - right opposite) */}
          <rect x="235" y="178" width="25" height="55" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="247.5" y1="178" x2="247.5" y2="233" stroke="#2c2420" strokeWidth="0.5" />

          {/* Stone Plinth Base & Veranda Steps */}
          <path d="M118 265 L272 265 L276 272 L114 272 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <line x1="165" y1="272" x2="225" y2="272" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="170" y1="276" x2="220" y2="276" stroke="#2c2420" strokeWidth="0.8" />

          {/* ===== UNPACKED LUGGAGE & TRUNKS STACKED (箱笼堆满一处) ===== */}
          {/* Stacked travel trunks & wooden boxes on left porch edge */}
          <g stroke="#2c2420" fill="none">
            {/* Large bottom trunk 1 */}
            <rect x="128" y="278" width="30" height="16" strokeWidth="1.2" />
            <line x1="128" y1="284" x2="158" y2="284" strokeWidth="0.5" />
            <circle cx="143" cy="284" r="1.5" fill="#2c2420" />

            {/* Medium trunk stacked on top of trunk 1 */}
            <rect x="132" y="264" width="24" height="14" strokeWidth="1.1" />
            <line x1="132" y1="270" x2="156" y2="270" strokeWidth="0.5" />
            <circle cx="144" cy="270" r="1.2" fill="#2c2420" />

            {/* Small box on top */}
            <rect x="136" y="253" width="16" height="11" strokeWidth="0.9" />

            {/* Second stack of luggage nearby */}
            <rect x="160" y="280" width="22" height="14" strokeWidth="1" />
            <path d="M164 274 Q171 270, 178 274 L180 280 L162 280 Z" strokeWidth="0.8" />
          </g>

          {/* ===== 3. WING ROOMS & KITCHEN (四五间厢房，一间做了厨房 - Left Side) ===== */}
          {/* Wing rooms roof line */}
          <path d="M12 165 L115 175 L115 185 L12 175 Z" fill="#2c2420" opacity="0.3" />
          <line x1="12" y1="165" x2="115" y2="175" stroke="#2c2420" strokeWidth="1.8" />

          {/* Front wall of Wing Rooms */}
          <line x1="115" y1="175" x2="115" y2="310" stroke="#2c2420" strokeWidth="1.5" />
          <line x1="12" y1="235" x2="115" y2="245" stroke="#2c2420" strokeWidth="0.8" />

          {/* Kitchen section (first room on left) with small chimney & smoke wisp (一间做了厨房) */}
          <rect x="25" y="152" width="10" height="14" fill="#2c2420" stroke="#2c2420" strokeWidth="0.8" opacity="0.8" />
          {/* Kitchen smoke wisps rising */}
          <path d="M30 152 Q28 138, 35 125 Q40 115, 38 100" fill="none" stroke="url(#smokeFade)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 152 Q35 140, 31 128 Q26 118, 30 105" fill="none" stroke="url(#smokeFade)" strokeWidth="1" opacity="0.5" />

          {/* Wing room doors & windows for servants */}
          <rect x="25" y="190" width="16" height="35" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <rect x="55" y="195" width="16" height="35" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <rect x="85" y="200" width="16" height="35" fill="none" stroke="#2c2420" strokeWidth="0.7" />

          {/* ===== 4. BOUNDARY WALL & HEAVY DOUBLE GATE (一边是墙，墙上有重门通着外面 - Front Right) ===== */}
          {/* Courtyard Boundary Wall */}
          <path d="M265 265 L360 265 L360 385 L265 385 Z" fill="#2c2420" opacity="0.06" />
          <line x1="265" y1="265" x2="360" y2="265" stroke="#2c2420" strokeWidth="2" />
          <line x1="265" y1="269" x2="360" y2="269" stroke="#2c2420" strokeWidth="0.8" />
          {/* Wall tiles capping */}
          <path d="M262 265 Q310 262, 363 265" fill="none" stroke="#2c2420" strokeWidth="1.4" />

          {/* Brick masonry lines on wall */}
          <g stroke="#2c2420" strokeWidth="0.4" opacity="0.5">
            <line x1="270" y1="280" x2="355" y2="280" />
            <line x1="270" y1="295" x2="355" y2="295" />
            <line x1="270" y1="310" x2="355" y2="310" />
            <line x1="270" y1="325" x2="355" y2="325" />
          </g>

          {/* Heavy Double Gate (重门通着外面) */}
          {/* Gate Frame */}
          <rect x="290" y="280" width="55" height="75" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <path d="M286 280 L349 280 L345 285 L290 285 Z" fill="#2c2420" />

          {/* Left Leaf Gate (Slightly open) */}
          <path d="M292 285 L317 285 L317 353 L292 353 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          {/* Right Leaf Gate */}
          <path d="M319 285 L343 285 L343 353 L319 353 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />

          {/* Gate Studs & Metal Ring Knockers (铺首衔环) */}
          <circle cx="310" cy="318" r="2.5" fill="#2c2420" />
          <circle cx="310" cy="323" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <circle cx="325" cy="318" r="2.5" fill="#2c2420" />
          <circle cx="325" cy="323" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />

          {/* Outer road glimpse through half-open gate */}
          <path d="M316 320 Q314 340, 310 355" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" />

          {/* ===== 5. TWO MASSIVE LOCUST TREES OVERHEAD (院子时有两株大槐树遮住了，不见天日) ===== */}

          {/* LOCUST TREE 1 (Left Trunk & Branch Network) */}
          {/* Main Trunk 1 */}
          <path d="M80 320 Q70 240, 95 160 Q110 110, 100 50" fill="none" stroke="#2c2420" strokeWidth="4" />
          <path d="M86 320 Q76 240, 100 160 Q115 110, 105 50" fill="none" stroke="#2c2420" strokeWidth="2" />
          {/* Gnarled Bark texture (槐树皮纹理) */}
          <path d="M82 280 Q88 275, 84 270" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M78 240 Q85 235, 80 230" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M86 190 Q92 185, 88 180" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Sprawling Branches Tree 1 */}
          <path d="M95 160 Q130 130, 180 110 Q230 90, 290 85" fill="none" stroke="#2c2420" strokeWidth="2.2" />
          <path d="M140 125 Q170 80, 220 55" fill="none" stroke="#2c2420" strokeWidth="1.6" />
          <path d="M90 180 Q50 140, 25 100" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <path d="M105 100 Q150 70, 200 40" fill="none" stroke="#2c2420" strokeWidth="1.4" />

          {/* LOCUST TREE 2 (Right Trunk & Branch Network) */}
          {/* Main Trunk 2 */}
          <path d="M250 310 Q240 230, 255 150 Q265 90, 275 35" fill="none" stroke="#2c2420" strokeWidth="3.8" />
          <path d="M255 310 Q245 230, 260 150 Q270 90, 280 35" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          {/* Gnarled Bark Tree 2 */}
          <path d="M248 270 Q254 265, 250 260" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M244 210 Q252 205, 246 200" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Sprawling Branches Tree 2 */}
          <path d="M255 150 Q310 120, 380 95 Q440 80, 500 70" fill="none" stroke="#2c2420" strokeWidth="2.4" />
          <path d="M300 125 Q350 70, 420 45" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <path d="M260 110 Q220 75, 175 45" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M350 100 Q400 60, 460 30" fill="none" stroke="#2c2420" strokeWidth="1.4" />

          {/* DENSE DENSE LOCUST LEAF CANOPY CLUSTERS (槐树繁叶 - 遮天蔽日) */}
          {/* Leaf Clusters (Pinnate locust leaves rendered in classic ink wash leaf press style) */}
          <g stroke="none" fill="#2c2420">
            {/* Top Left Leaf Canopy */}
            <ellipse cx="60" cy="80" rx="35" ry="22" opacity="0.75" />
            <ellipse cx="100" cy="60" rx="42" ry="25" opacity="0.8" />
            <ellipse cx="145" cy="50" rx="45" ry="28" opacity="0.85" />

            {/* Center Upper Leaf Canopy (Darkest - Blocking Sky) */}
            <ellipse cx="195" cy="45" rx="55" ry="30" opacity="0.9" />
            <ellipse cx="250" cy="40" rx="60" ry="32" opacity="0.9" />
            <ellipse cx="310" cy="45" rx="55" ry="30" opacity="0.9" />

            {/* Top Right Leaf Canopy */}
            <ellipse cx="370" cy="55" rx="50" ry="28" opacity="0.85" />
            <ellipse cx="430" cy="65" rx="45" ry="25" opacity="0.8" />
            <ellipse cx="485" cy="75" rx="35" ry="20" opacity="0.75" />

            {/* Mid-level canopy overhangs shading courtyard */}
            <ellipse cx="130" cy="95" rx="38" ry="20" opacity="0.7" />
            <ellipse cx="220" cy="80" rx="42" ry="22" opacity="0.75" />
            <ellipse cx="300" cy="85" rx="40" ry="22" opacity="0.75" />
            <ellipse cx="390" cy="95" rx="38" ry="20" opacity="0.7" />
          </g>

          {/* Individual Locust Leaf Sprigs outline for rich texture */}
          <g stroke="#2c2420" strokeWidth="0.5" fill="none" opacity="0.6">
            <path d="M50 75 Q60 65, 75 70 M55 70 Q65 60, 80 65" />
            <path d="M120 50 Q135 40, 150 48 M125 45 Q140 35, 155 42" />
            <path d="M220 38 Q235 28, 250 35 M225 32 Q240 22, 255 30" />
            <path d="M330 40 Q345 30, 360 38 M335 35 Q350 25, 365 32" />
            <path d="M420 55 Q435 45, 450 52 M425 50 Q440 40, 455 48" />
          </g>

          {/* ===== 6. FIGURE QINXIAN IN THE COURTYARD (琴仙观看) ===== */}
          {/* Figure Qinxian standing in center-left courtyard looking around */}
          {/* Head & Hair Ribbon */}
          <circle cx="210" cy="275" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M206 270 Q210 265, 214 270" fill="none" stroke="#2c2420" strokeWidth="1" />
          <line x1="210" y1="264" x2="210" y2="269" stroke="#2c2420" strokeWidth="0.8" />
          {/* Scholar Ribbon fluttering behind */}
          <path d="M206 272 Q200 274, 196 270" fill="none" stroke="#2c2420" strokeWidth="0.8" />

          {/* Neck & Elegant Robes Collar */}
          <line x1="210" y1="280.5" x2="210" y2="284" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M200 287 L210 284 L220 287" fill="none" stroke="#2c2420" strokeWidth="1.2" />

          {/* Long Scholar Robe Body */}
          <path d="M200 287 Q196 315, 194 338" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M220 287 Q224 315, 226 338" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M194 338 Q210 342, 226 338" fill="none" stroke="#2c2420" strokeWidth="1" />

          {/* Wide Sleeves (Sleeve raised slightly in quiet contemplation) */}
          <path d="M200 287 Q188 298, 185 312 Q192 316, 197 304" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M220 287 Q232 298, 236 310 Q228 315, 222 304" fill="none" stroke="#2c2420" strokeWidth="1.1" />

          {/* Robe fold lines */}
          <line x1="210" y1="284" x2="210" y2="338" stroke="#2c2420" strokeWidth="0.6" opacity="0.7" />
          <path d="M203 300 Q210 305, 217 300" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.6" />

          {/* ===== 7. BIRDS & GROUND TEXTURE ===== */}
          {/* Crows / birds perched on locust tree branches */}
          <path d="M165 72 Q168 68, 171 70 Q174 67, 177 71" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M335 65 Q338 61, 341 63 Q344 60, 347 64" fill="none" stroke="#2c2420" strokeWidth="0.8" />

          {/* Courtyard Flagstones / Pavement texture under Qinxian */}
          <path d="M175 320 Q210 316, 255 320" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M165 332 Q210 328, 250 332" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />

        </g>

        {/* ===== RED SEAL STAMPS (印章) ===== */}
        {/* Main Red Square Seal */}
        <rect x="475" y="348" width="24" height="24" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
        <text x="487" y="364" textAnchor="middle" fill="#8b2500" fontSize="11" fontFamily="serif" fontWeight="bold">
          护国
        </text>

        {/* ===== CALLIGRAPHY TITLE (题字 - Vertical Chinese Text) ===== */}
        <text
          x="490"
          y="180"
          textAnchor="middle"
          fill="#2c2420"
          fontSize="13"
          fontFamily="serif"
          writingMode="vertical-rl"
          opacity="0.85"
          fontWeight="bold"
        >
          护国寺寓所
        </text>
        <text
          x="504"
          y="180"
          textAnchor="middle"
          fill="#2c2420"
          fontSize="8"
          fontFamily="serif"
          writingMode="vertical-rl"
          opacity="0.6"
        >
          第五十六回·槐阴草深
        </text>
      </svg>
    </div>
  );
};

export default Chapter56Para4Illustration;
