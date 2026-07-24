import React from "react";

/**
 * Visualizes Chapter 60 Paragraph 10:
 * 琴仙看东楹嵌的第一方画，上云下水，云水中间，隐着一龙，露出一爪，托着一面镜子，上题曰：《品花宝鉴》。
 * 刻着次贤的赞语是：上不在天，下不在田。云生九霄，水出重渊。神奇变化，气象万千。
 * 灵珠之圆，明镜之悬。烛微照幽，隐奸显贤。如月之临，如水之鲜。亦曰媸其媸媸，而妍其妍。
 *
 * Traditional Chinese Ink Landscape & Stone Carving Relief (水墨浮雕) Aesthetic:
 * - East Pillar (东楹) architectural frame with double stone relief border & ornamental eaves
 * - Upper celestial cloudscape ("上云" / "云生九霄") with layered ink washes & billowing swirls
 * - Lower abyss waters ("下水" / "水出重渊") with tempestuous waves & foam spray
 * - Ethereal Ink Dragon weaving mysteriously through clouds and water ("云水中间，隐着一龙")
 * - Dynamic 5-clawed dragon arm extending from mist ("露出一爪") supporting the Spirit Mirror ("托着一面镜子")
 * - Radiant Spirit Mirror ("明镜之悬 / 灵珠之圆") casting divine light beams ("烛微照幽，隐奸显贤")
 * - Engraved title header slab atop stone inset: 《品花宝鉴》 with vermilion seal stamps
 */
export const Chapter60Para10Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 500 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "390px" }}
      >
        {/* ===== DEFS: Filters & Gradients ===== */}
        <defs>
          {/* Radiant Spirit Mirror Core Glow */}
          <radialGradient id="c60p10-mirrorCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="20%" stopColor="#fffde7" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#ffe082" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#d4c5a9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Divine Light Beams Cone Gradient */}
          <linearGradient id="c60p10-lightBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#ffe082" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Celestial Cloud Ink Sky Wash (云生九霄) */}
          <linearGradient id="c60p10-cloudSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14100e" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#2c2420" stopOpacity="0.65" />
            <stop offset="75%" stopColor="#4a3e35" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Churning Deep Waters Abyss Wash (水出重渊) */}
          <linearGradient id="c60p10-waterAbyss" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#120e0c" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#241e1a" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#4a3e35" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Dragon Metallic & Ink Wash Gradient */}
          <linearGradient id="c60p10-dragonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#1a1412" stopOpacity="0.98" />
            <stop offset="70%" stopColor="#57493e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#241e1a" stopOpacity="0.95" />
          </linearGradient>

          {/* Stone Inset Relief Framing Gradient */}
          <linearGradient id="c60p10-stoneGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3e342d" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8c7a6b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#241e1a" stopOpacity="0.2" />
          </linearGradient>

          {/* Hand-painted brush wobble filter */}
          <filter id="c60p10-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="6010" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
          </filter>

          {/* Wet rice paper ink bleed filter (洇墨) */}
          <filter id="c60p10-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="1060" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="8" />
          </filter>

          {/* Heavy bleed for mist & background atmosphere */}
          <filter id="c60p10-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="3060" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="15" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="494" height="414" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="484" height="404" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASH ATMOSPHERE ===== */}
        <g filter="url(#c60p10-mlBleedFar)">
          {/* Celestial Cloud Sky Wash (上云) */}
          <path d="M12 12 L488 12 L488 180 Q320 120, 250 160 Q180 120, 12 175 Z" fill="url(#c60p10-cloudSky)" opacity="0.4" />
          {/* Churning Abyss Water Wash (下水) */}
          <path d="M12 250 Q180 230, 250 245 Q350 230, 488 260 L488 408 L12 408 Z" fill="url(#c60p10-waterAbyss)" opacity="0.35" />
          {/* Distant Pavilion Roof & Garden Pines Silhouette */}
          <path d="M12 190 Q90 150, 180 175 Q280 145, 380 170 L488 190 L488 230 L12 230 Z" fill="#2c2420" opacity="0.07" />
        </g>

        {/* Spirit Mirror Ambient Radiance Halo */}
        <g filter="url(#c60p10-mlBleed)">
          <circle cx="250" cy="135" r="70" fill="url(#c60p10-mirrorCore)" opacity="0.9" />
          <circle cx="250" cy="135" r="105" fill="url(#c60p10-mirrorCore)" opacity="0.4" />
          {/* Broad Divine Light Beams shining downwards ("烛微照幽") */}
          <polygon points="250,135 150,400 350,400" fill="url(#c60p10-lightBeam)" opacity="0.5" />
        </g>

        {/* Main Artwork Linework with Brush Texture */}
        <g filter="url(#c60p10-inkTexture)">

          {/* ===== ARCHITECTURE: NINE FRAGRANCE PAVILION & EAST PILLAR (九香楼东楹石雕) ===== */}
          {/* Terrace Floor Boundary */}
          <path d="M12 390 L488 390" stroke="#2c2420" strokeWidth="1.6" fill="none" />
          <path d="M12 402 L488 402" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="6,4" fill="none" />

          {/* East Pillar (东楹) Frame */}
          <rect x="35" y="20" width="430" height="365" fill="none" stroke="#2c2420" strokeWidth="2.2" rx="2" />
          <rect x="39" y="24" width="422" height="357" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,3" />

          {/* Ornamental Roof Eaves & Eave Tiles (楹联柱头与檐角) */}
          <path d="M22 20 L478 20 L478 28 L22 28 Z" fill="#2c2420" opacity="0.15" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M15 14 Q250 5, 485 14 L478 20 L22 20 Z" fill="#2c2420" opacity="0.3" stroke="#2c2420" strokeWidth="1.5" />
          {/* Eave Tile Details */}
          <path d="M35 15 L45 20 M85 15 L95 20 M135 15 L145 20 M185 15 L195 20 M235 15 L245 20 M285 15 L295 20 M335 15 L345 20 M385 15 L395 20 M435 15 L445 20" stroke="#2c2420" strokeWidth="0.7" />

          {/* Inset Stone Relief Panel Border ("东楹嵌的第一方画") */}
          <rect x="48" y="32" width="404" height="341" fill="url(#c60p10-stoneGrad)" />
          <rect x="52" y="36" width="396" height="333" fill="none" stroke="#2c2420" strokeWidth="1.8" />
          <rect x="55" y="39" width="390" height="327" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="5,2" />

          {/* Corner Ornamentation Motifs (云纹角花) */}
          <path d="M55 55 Q70 42, 85 55 M55 55 Q42 70, 55 85" stroke="#2c2420" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M445 55 Q430 42, 415 55 M445 55 Q458 70, 445 85" stroke="#2c2420" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M55 350 Q70 363, 85 350 M55 350 Q42 335, 55 320" stroke="#2c2420" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M445 350 Q430 363, 415 350 M445 350 Q458 335, 445 320" stroke="#2c2420" strokeWidth="1" fill="none" opacity="0.6" />


          {/* ===== 1. TITLE HEADER SLAB ATOP STONE RELIEF: 《品花宝鉴》 ===== */}
          <g transform="translate(250, 56)">
            {/* Scroll Header Slab */}
            <rect x="-75" y="-12" width="150" height="24" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.2" rx="3" />
            <rect x="-72" y="-9" width="144" height="18" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" />
            
            {/* Scroll Handles */}
            <circle cx="-79" cy="0" r="3.5" fill="#2c2420" />
            <circle cx="79" cy="0" r="3.5" fill="#2c2420" />

            {/* Inscribed Calligraphy: 《品花宝鉴》 */}
            <text x="0" y="4" textAnchor="middle" fill="#2c2420" fontSize="13" fontWeight="bold" fontFamily="serif" letterSpacing="4">
              《品花宝鉴》
            </text>

            {/* Red Title Seal Stamp ("宝") */}
            <g transform="translate(60, -9)">
              <rect x="0" y="0" width="16" height="18" fill="#b4494e" opacity="0.9" rx="1" />
              <text x="8" y="12" textAnchor="middle" fill="#f5efe0" fontSize="8.5" fontWeight="bold" fontFamily="serif">宝</text>
            </g>
          </g>


          {/* ===== 2. UPPER CELESTIAL CLOUDS ("上云" / "云生九霄") ===== */}
          <g stroke="#2c2420" strokeWidth="1.3" fill="none">
            {/* Billowing cloud swirls cascading from top margins */}
            <path d="M58 75 Q100 58, 150 78 Q200 62, 250 82 Q300 62, 350 78 Q400 58, 442 75" opacity="0.9" />
            <path d="M62 95 Q115 80, 170 98 Q230 82, 290 100 Q350 82, 410 95 Q435 88, 442 98" strokeWidth="0.9" opacity="0.75" />
            <path d="M68 115 Q130 100, 190 118 Q260 102, 330 118 Q395 102, 438 116" strokeWidth="0.6" strokeDasharray="4,2" opacity="0.6" />

            {/* Clouds curling dynamically around the dragon and mirror */}
            <path d="M58 135 Q110 120, 160 138 Q200 125, 230 142" opacity="0.8" />
            <path d="M270 142 Q300 125, 340 138 Q390 120, 442 135" opacity="0.8" />
            
            {/* Ethereal mist tendrils */}
            <path d="M70 155 Q130 140, 180 158" strokeWidth="0.7" opacity="0.5" />
            <path d="M320 158 Q370 140, 430 155" strokeWidth="0.7" opacity="0.5" />
          </g>


          {/* ===== 3. LOWER DEEP WATERS ("下水" / "水出重渊") ===== */}
          <g stroke="#2c2420" fill="none">
            {/* Tempestuous ocean/river waves at bottom */}
            <path d="M55 365 Q110 335, 165 358 Q220 330, 275 360 Q330 335, 385 358 Q420 338, 445 365" strokeWidth="1.6" />
            <path d="M55 348 Q100 325, 145 344 Q190 320, 235 345 Q285 322, 335 345 Q380 324, 445 348" strokeWidth="1.2" opacity="0.85" />
            <path d="M55 330 Q105 310, 155 328 Q205 305, 255 328 Q310 308, 365 330 Q410 310, 445 330" strokeWidth="0.9" strokeDasharray="6,3" opacity="0.7" />
            <path d="M58 312 Q115 296, 175 312 Q235 292, 295 312 Q355 295, 442 312" strokeWidth="0.7" strokeDasharray="4,2" opacity="0.5" />

            {/* Crashing Wave Crests (怒涛浪头) */}
            <path d="M120 340 C115 325, 135 320, 140 332" strokeWidth="1.2" fill="#2c2420" opacity="0.25" />
            <path d="M240 342 C235 327, 255 322, 260 334" strokeWidth="1.2" fill="#2c2420" opacity="0.25" />
            <path d="M360 340 C355 325, 375 320, 380 332" strokeWidth="1.2" fill="#2c2420" opacity="0.25" />

            {/* Flying Water Spray Droplets (水珠飞溅) */}
            <circle cx="115" cy="325" r="1.8" fill="#2c2420" opacity="0.6" />
            <circle cx="142" cy="318" r="1.3" fill="#2c2420" opacity="0.5" />
            <circle cx="232" cy="322" r="1.8" fill="#2c2420" opacity="0.6" />
            <circle cx="265" cy="315" r="1.4" fill="#2c2420" opacity="0.5" />
            <circle cx="355" cy="322" r="1.6" fill="#2c2420" opacity="0.6" />
            <circle cx="385" cy="315" r="1.2" fill="#2c2420" opacity="0.5" />
          </g>


          {/* ===== 4. ETHEREAL HIDDEN INK DRAGON ("云水中间，隐着一龙") ===== */}
          <g>
            {/* Dynamic S-Curve Dragon Body weaving through mist and waves */}
            {/* Main Spine Shadow Wash */}
            <path
              d="M75 240 Q110 180, 160 205 Q210 230, 260 195 Q310 160, 370 195 Q420 230, 400 285 Q360 325, 290 300 Q220 275, 160 305 Q120 325, 85 295"
              fill="none"
              stroke="url(#c60p10-dragonGradient)"
              strokeWidth="20"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Dragon Body Inner Outline & Scaled Core */}
            <path
              d="M75 240 Q110 180, 160 205 Q210 230, 260 195 Q310 160, 370 195 Q420 230, 400 285 Q360 325, 290 300 Q220 275, 160 305 Q120 325, 85 295"
              fill="none"
              stroke="#2c2420"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M75 240 Q110 180, 160 205 Q210 230, 260 195 Q310 160, 370 195 Q420 230, 400 285 Q360 325, 290 300 Q220 275, 160 305 Q120 325, 85 295"
              fill="none"
              stroke="#f5efe0"
              strokeWidth="1.2"
              strokeDasharray="8,5"
              opacity="0.6"
            />

            {/* Dragon Scales Texture (龙鳞纹 - Layered Inks) */}
            <g opacity="0.7" stroke="#f5efe0" strokeWidth="0.9" fill="none">
              <path d="M130 198 Q136 192, 142 198 M148 202 Q154 196, 160 202 M166 206 Q172 200, 178 206" />
              <path d="M230 204 Q236 198, 242 204 M248 198 Q254 192, 260 198 M266 192 Q272 186, 278 192" />
              <path d="M330 182 Q336 176, 342 182 M348 190 Q354 184, 360 190 M366 204 Q372 198, 378 204" />
              <path d="M310 300 Q304 294, 298 300 M288 294 Q282 288, 276 294 M266 288 Q260 282, 254 288" />
            </g>

            {/* Dragon Dorsal Spine Fins (龙脊鳍) */}
            <path
              d="M125 190 L129 180 L135 192 M145 195 L150 184 L156 197 M165 200 L171 189 L177 203 M245 192 L251 180 L257 194 M265 186 L272 173 L278 188 M345 174 L352 163 L358 177 M368 184 L375 172 L381 188"
              stroke="#2c2420"
              strokeWidth="1.4"
              fill="#2c2420"
              opacity="0.85"
            />

            {/* Dragon Head Emerging Mystically from Mist & Clouds (x: 145, y: 155) */}
            <g transform="translate(145, 155)">
              {/* Head Base Silhouette */}
              <path d="M0 0 Q18 -22, 38 -12 Q52 2, 45 22 Q24 34, -6 24 Q-18 12, 0 0 Z" fill="#2c2420" opacity="0.92" stroke="#2c2420" strokeWidth="1.6" />
              
              {/* Dragon Snout & Mouth Open in Mighty Roar */}
              <path d="M38 -12 Q58 -10, 65 6 Q62 22, 45 22" fill="none" stroke="#2c2420" strokeWidth="1.8" />
              <path d="M48 2 L45 8 M54 9 L51 15 M50 16 L48 20" stroke="#2c2420" strokeWidth="1.3" /> {/* Sharp Fangs */}
              
              {/* Glowing Dragon Iris & Eye (威严双目) */}
              <circle cx="26" cy="-5" r="5" fill="#fffde7" stroke="#2c2420" strokeWidth="1.3" />
              <circle cx="27" cy="-5" r="2.2" fill="#2c2420" />
              <circle cx="28" cy="-6" r="0.8" fill="#fff" />

              {/* Majestic Antler Horns (鹿角) */}
              <path d="M10 -15 Q6 -36, -6 -48 M-1 -30 Q-10 -36, -15 -30" stroke="#2c2420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              <path d="M22 -17 Q22 -38, 12 -50 M18 -34 Q10 -38, 5 -34" stroke="#2c2420" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Dynamic Whiskers Floating in Mist (龙须) */}
              <path d="M55 2 Q82 -14, 110 -8" stroke="#2c2420" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M52 12 Q75 30, 102 22" stroke="#2c2420" strokeWidth="1.4" fill="none" strokeLinecap="round" />

              {/* Flowing Mane & Beard Hair (鬃毛) */}
              <path d="M-10 10 Q-30 18, -18 35 Q-6 30, -3 22" stroke="#2c2420" strokeWidth="1.4" fill="#2c2420" opacity="0.8" />
              <path d="M6 26 Q-12 44, 6 52 Q15 40, 18 28" stroke="#2c2420" strokeWidth="1.3" fill="#2c2420" opacity="0.75" />
            </g>

            {/* Dragon Tail Splashing in Waters (x: 85, y: 295) */}
            <g transform="translate(85, 295)">
              <path d="M0 0 Q-30 18, -42 45 Q-18 52, -5 28 Z" stroke="#2c2420" strokeWidth="1.6" fill="#2c2420" opacity="0.85" />
              {/* Tail fin frills */}
              <path d="M-42 45 Q-55 35, -48 25 M-42 45 Q-50 55, -35 55" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            </g>
          </g>


          {/* ===== 5. DRAGON CLAW HOLDING THE SPIRIT MIRROR ("露出一爪，托着一面镜子") ===== */}
          <g transform="translate(250, 160)">
            {/* Dragon Arm / Foreleg extending out from the clouds */}
            <path d="M-32 55 Q-15 30, 0 8" stroke="#2c2420" strokeWidth="7.5" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M-32 55 Q-15 30, 0 8" stroke="#f5efe0" strokeWidth="1.4" strokeDasharray="4,3" fill="none" opacity="0.7" />

            {/* Four Sharp Powerful Dragon Claws (神龙五爪 / 露出一爪) wrapping around mirror base */}
            <g stroke="#2c2420" strokeWidth="2.5" fill="none" strokeLinecap="round">
              {/* Claw 1 */}
              <path d="M-10 2 Q-18 -10, -6 -20 L-2 -16" />
              {/* Claw 2 */}
              <path d="M0 -4 Q0 -22, 10 -25 L10 -19" />
              {/* Claw 3 */}
              <path d="M10 0 Q22 -16, 26 -20 L22 -15" />
              {/* Thumb Claw */}
              <path d="M-12 10 Q-26 6, -24 -6 L-19 -3" />
            </g>

            {/* Claw Muscle Tendon Base Joint */}
            <circle cx="-2" cy="2" r="5" fill="#2c2420" />

            {/* THE SPIRIT MIRROR ("一面镜子" / "明镜之悬 / 灵珠之圆") */}
            <g transform="translate(0, -38)">
              {/* Outer Ornate Mirror Frame (Bronze/Gold Rim with Cloud Patterns) */}
              <circle cx="0" cy="0" r="32" fill="#f5efe0" stroke="#2c2420" strokeWidth="2.8" />
              <circle cx="0" cy="0" r="28" fill="none" stroke="#2c2420" strokeWidth="1" strokeDasharray="5,2" />
              <circle cx="0" cy="0" r="25" fill="#fffde7" stroke="#2c2420" strokeWidth="1.4" opacity="0.95" />

              {/* Ancient Mirror Inner Engraving Pattern (云雷双凤纹 / 鉴纹) */}
              <path d="M-18 -18 Q0 24, 24 -12 Z" fill="#ffffff" opacity="0.7" />
              <line x1="-16" y1="-10" x2="16" y2="10" stroke="#ffe082" strokeWidth="1.8" opacity="0.85" />
              <line x1="-10" y1="16" x2="10" y2="-16" stroke="#ffe082" strokeWidth="1.2" opacity="0.6" />

              {/* Pearl Motif at Mirror Center ("灵珠之圆") */}
              <circle cx="0" cy="0" r="7" fill="#fffde7" stroke="#2c2420" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="4" fill="#b4494e" opacity="0.9" />
              <circle cx="-1" cy="-1" r="1.2" fill="#fff" />

              {/* Radiating Rays of Sacred Light ("烛微照幽，隐奸显贤") */}
              <g stroke="#ffe082" strokeWidth="1.4" opacity="0.8">
                <line x1="0" y1="-32" x2="0" y2="-52" strokeDasharray="4,2" />
                <line x1="22" y1="-22" x2="40" y2="-40" strokeDasharray="4,2" />
                <line x1="32" y1="0" x2="52" y2="0" strokeDasharray="4,2" />
                <line x1="22" y1="22" x2="40" y2="40" strokeDasharray="4,2" />
                <line x1="0" y1="32" x2="0" y2="52" strokeDasharray="4,2" />
                <line x1="-22" y1="22" x2="-40" y2="40" strokeDasharray="4,2" />
                <line x1="-32" y1="0" x2="-52" y2="0" strokeDasharray="4,2" />
                <line x1="-22" y1="-22" x2="-40" y2="-40" strokeDasharray="4,2" />
              </g>
            </g>
          </g>


          {/* ===== 6. TRADITIONAL CHINESE RED SEALS (印章) ===== */}
          {/* Top Left Margin Seal ("九香雅集") */}
          <g transform="translate(68, 50)">
            <rect x="0" y="0" width="18" height="24" fill="#b4494e" opacity="0.85" rx="1" />
            <text x="9" y="10" textAnchor="middle" fill="#f5efe0" fontSize="7" fontWeight="bold" fontFamily="serif">九香</text>
            <text x="9" y="19" textAnchor="middle" fill="#f5efe0" fontSize="7" fontWeight="bold" fontFamily="serif">雅集</text>
          </g>

          {/* Bottom Right Margin Seal ("神品") */}
          <g transform="translate(415, 335)">
            <rect x="0" y="0" width="16" height="20" fill="none" stroke="#b4494e" strokeWidth="1.2" rx="1" />
            <rect x="1.5" y="1.5" width="13" height="17" fill="#b4494e" opacity="0.15" />
            <text x="8" y="9" textAnchor="middle" fill="#b4494e" fontSize="6" fontWeight="bold" fontFamily="serif">神</text>
            <text x="8" y="16" textAnchor="middle" fill="#b4494e" fontSize="6" fontWeight="bold" fontFamily="serif">品</text>
          </g>

        </g>
      </svg>
    </div>
  );
};

