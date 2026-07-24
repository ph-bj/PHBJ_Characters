import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 29:
 * "琴仙拾起镜子来一照，见自己变了那莫愁湖里采莲船上的红衣女子，心中大奇。
 *  忽又见许多人影，从镜子里过去，就是那一班名士与一班名旦。
 *  自己忽将镜子反过来，隐隐的有好些人映在里面，好像是魏聘才、奚十一等类。
 *  正看时，那镜子忽转旋起来，光明如月，成了一颗大珠，颇觉有趣。
 *  忽然船舱外伸进一只蓝手，满臂的鳞甲，伸开五个大爪，把这面镜子抢去了。"
 *
 * Traditional Chinese Ink Landscape (水墨画) Aesthetic in style of `MainInkLandscape.tsx`:
 * - Mochou Lake lotus boat (莫愁湖里采莲船) & lotus blossoms
 * - Qin Xian (male scholar/opera actor) in boat cabin gazing into the spinning, moon-like radiant mirror/pearl
 * - Mirror reflection showing Qin Xian transformed into the red-robed lotus woman (红衣女子)
 * - Shadows of famous scholars (名士) & opera actors (名旦), plus Wei Pincai & Xi Shiyi in mirror
 * - Male scholars and opera actors feature clearly defined abdominal muscles (abs)
 * - Monstrous blue scaled arm with 5 sharp claws (满臂鳞甲五大爪蓝手) reaching into cabin snatching the mirror
 * - Traditional red seals & ink wash filters
 */
export const Chapter56Para29Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center select-none">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "360px" }}
      >
        {/* ===== DEFS: Ink wash gradients, glows & filters ===== */}
        <defs>
          {/* Radiant Moon Mirror / Pearl Glow (光明如月，成了一颗大珠) */}
          <radialGradient id="c56p29-pearlGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#fff9c4" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#ffe082" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#d4c5a9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Lake Water Wash Gradient */}
          <linearGradient id="c56p29-lakeWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.18" />
          </linearGradient>

          {/* Blue Scaled Monster Arm Gradient (满臂鳞甲蓝手) */}
          <linearGradient id="c56p29-blueClawGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2b5278" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0f2038" stopOpacity="0.95" />
          </linearGradient>

          {/* Lotus Maiden Red Robe Wash (红衣女子) */}
          <radialGradient id="c56p29-redRobeWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8b2500" stopOpacity="0.3" />
          </radialGradient>

          {/* Boat Cabin Roof Wash */}
          <linearGradient id="c56p29-cabinRoofWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1a1412" stopOpacity="0.3" />
          </linearGradient>

          {/* Brush wobble filter - hand-painted ink stroke effect */}
          <filter id="c56p29-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="29" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed filter - wet rice paper matted edge (洇墨) */}
          <filter id="c56p29-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="14" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed filter for far background mountains & cloud mist */}
          <filter id="c56p29-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.038" numOctaves="3" seed="41" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="13" />
          </filter>
        </defs>

        {/* ===== SCROLL DOUBLE BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES (墨分五色 - 莫愁湖夜色与水墨远山) ===== */}
        <g filter="url(#c56p29-mlBleedFar)">
          {/* Mochou Lake distant mountain contours */}
          <path d="M12 140 Q80 80, 160 120 Q220 70, 310 115 Q380 75, 460 110 Q490 95, 515 130 L515 200 L12 200 Z" fill="#2c2420" opacity="0.15" />
          {/* Water mist shadow along Mochou lake */}
          <path d="M12 220 Q180 200, 360 215 Q440 205, 515 225 L515 390 L12 390 Z" fill="#2c2420" opacity="0.09" />
        </g>

        {/* Mid-ground bled glows */}
        <g filter="url(#c56p29-mlBleed)">
          {/* Mirror / Pearl halo radiance (光明如月) */}
          <circle cx="285" cy="180" r="75" fill="url(#c56p29-pearlGlow)" opacity="0.95" />
          {/* Lotus patch bank ink wash */}
          <ellipse cx="90" cy="340" rx="65" ry="25" fill="#2c2420" opacity="0.12" />
          <ellipse cx="440" cy="350" rx="55" ry="20" fill="#2c2420" opacity="0.1" />
        </g>

        {/* Main Linework with Ink Texture Filter */}
        <g filter="url(#c56p29-inkTexture)">

          {/* ===== 1. MOCHOU LAKE WATER & LOTUS BLOSSOMS (莫愁湖采莲景象) ===== */}
          <g>
            {/* Water surface & gentle ripples */}
            <rect x="12" y="240" width="496" height="150" fill="url(#c56p29-lakeWash)" />
            <path d="M12 280 Q70 274, 140 280 Q210 286, 280 280 Q350 274, 420 280 Q470 284, 515 278" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.6" />
            <path d="M30 310 Q100 305, 180 310 Q260 315, 340 310 Q410 305, 490 310" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
            <path d="M15 350 Q90 344, 160 350 Q240 356, 320 350 Q400 344, 480 350" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.3" />

            {/* Lotus Leaves (荷叶 - 莫愁湖) */}
            {/* Cluster 1: Bottom Left */}
            <g transform="translate(45, 335)">
              <ellipse cx="0" cy="0" rx="22" ry="9" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M-15 0 Q0 -3, 15 0 M0 -6 Q0 0, 0 6" stroke="#2c2420" strokeWidth="0.5" />
              {/* Lotus stem & flower */}
              <line x1="12" y1="0" x2="12" y2="-18" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M8 -18 Q12 -28, 16 -18 Q12 -14, 8 -18 Z" fill="url(#c56p29-redRobeWash)" stroke="#2c2420" strokeWidth="0.7" />
            </g>

            {/* Cluster 2: Bottom Right */}
            <g transform="translate(450, 345)">
              <ellipse cx="0" cy="0" rx="28" ry="11" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M-20 0 Q0 -4, 20 0 M0 -8 Q0 0, 0 8" stroke="#2c2420" strokeWidth="0.5" />
              {/* Lotus blossom */}
              <line x1="-10" y1="0" x2="-10" y2="-22" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M-15 -22 Q-10 -34, -5 -22 Q-10 -18, -15 -22 Z" fill="url(#c56p29-redRobeWash)" stroke="#2c2420" strokeWidth="0.7" />
            </g>
          </g>

          {/* ===== 2. LOTUS-PICKING BOAT & CABIN ARCHITECTURE (采莲船与船舱) ===== */}
          <g transform="translate(60, 110)">
            {/* Hull of the Lotus Boat (船身) */}
            <path d="M-20 180 Q100 230, 240 215 Q360 200, 420 170 L395 145 Q310 170, 200 175 Q90 175, 0 145 Z" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="5,3" />

            {/* Boat Cabin Roof (船舱蓬顶) */}
            <path d="M30 65 Q170 30, 310 65 Q315 130, 305 155 Q170 170, 35 155 Z" fill="none" stroke="#2c2420" strokeWidth="2" />
            <path d="M30 65 Q170 30, 310 65 L310 75 Q170 42, 30 75 Z" fill="url(#c56p29-cabinRoofWash)" stroke="#2c2420" strokeWidth="1.2" />
            {/* Bamboo weaving texture on cabin roof */}
            <path d="M80 52 Q170 28, 260 52" stroke="#2c2420" strokeWidth="0.5" fill="none" />
            <path d="M110 44 Q170 26, 230 44" stroke="#2c2420" strokeWidth="0.5" fill="none" />

            {/* Cabin Posts / Window Frame (船舱窗口) */}
            <line x1="45" y1="75" x2="45" y2="152" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="295" y1="75" x2="295" y2="152" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="45" y1="78" x2="295" y2="78" stroke="#2c2420" strokeWidth="1" />
            {/* Rolled curtain ties */}
            <path d="M45 78 Q55 90, 65 78" stroke="#2c2420" strokeWidth="0.8" fill="none" />
            <path d="M275 78 Q285 90, 295 78" stroke="#2c2420" strokeWidth="0.8" fill="none" />
          </g>

          {/* ===== 3. QIN XIAN (琴仙) INSIDE BOAT CABIN WITH DEFINED ABS ===== */}
          {/* Qin Xian (Male scholar & opera actor) sitting inside cabin, astonished by mirror */}
          <g transform="translate(145, 185)">
            {/* Head & Scholar/Opera Bun */}
            <circle cx="0" cy="0" r="8" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <circle cx="0" cy="-9" r="3.5" fill="#2c2420" /> {/* Opera actor hair bun */}
            {/* Astonished Expression (心中大奇) */}
            <circle cx="3" cy="-1" r="1.2" fill="#2c2420" /> {/* Eye wide open */}
            <path d="M3 4 Q5 6, 3 8" stroke="#2c2420" strokeWidth="0.8" fill="none" /> {/* Slightly open mouth */}

            {/* Scholar Robes Draped Open over Chest & ABS (男名士/名旦腹肌) */}
            <path d="M-10 10 L-18 62 L18 62 L10 10 Z" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <path d="M-10 10 L-4 50 M10 10 L4 50" stroke="#2c2420" strokeWidth="1.1" fill="none" />

            {/* CLEARLY DEFINED ABS ON QIN XIAN (琴仙六块腹肌) */}
            <path d="M-7 18 Q0 22, 7 18" fill="none" stroke="#2c2420" strokeWidth="0.85" />
            <line x1="0" y1="19" x2="0" y2="48" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M-6 26 Q0 29, 6 26" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M-6 33 Q0 36, 6 33" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M-5 40 Q0 42.5, 5 40" fill="none" stroke="#2c2420" strokeWidth="0.5" />

            {/* Left Arm holding mirror handle / reaching out in surprise */}
            <path d="M-10 14 Q-22 28, -26 40" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            <path d="M-26 40 Q-28 44, -22 46" stroke="#2c2420" strokeWidth="1.1" fill="none" />

            {/* Right Arm extended forward towards mirror */}
            <path d="M10 14 Q26 24, 38 32" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            <path d="M38 32 Q44 36, 48 34" stroke="#2c2420" strokeWidth="1.1" fill="none" />

            {/* Seated Leg Stance inside cabin */}
            <path d="M-18 62 Q-30 68, -25 74 Q-10 78, 0 74 Q10 78, 25 74 Q30 68, 18 62" stroke="#2c2420" strokeWidth="1.3" fill="none" />
          </g>

          {/* ===== 4. THE SPINNING MOON MIRROR / PEARL WITH REFLECTIONS (宝镜/大珠与镜中人影) ===== */}
          <g transform="translate(285, 180)">
            {/* Outer Pearl Orbit / Light Rays (光明如月，成了一颗大珠) */}
            <circle cx="0" cy="0" r="38" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="32" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="3,3" />

            {/* Spinning Motion Swirls (正看时，那镜子忽转旋起来) */}
            <path d="M-28 0 A28 28 0 0 1 28 0" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" />
            <path d="M0 -28 A28 28 0 0 1 0 28" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" />

            {/* Mirror Frame & Handle */}
            <circle cx="0" cy="0" r="26" fill="#f5efe0" stroke="#2c2420" strokeWidth="1.6" />

            {/* MIRROR REFLECTION 1: Qin Xian transformed into Lotus-picking Maiden in Red Robe (红衣女子) */}
            <g transform="translate(-8, -6)">
              {/* Red Robe Maiden (变了采莲船上的红衣女子) */}
              <circle cx="0" cy="-6" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M-3 -10 Q0 -13, 3 -10" stroke="#2c2420" strokeWidth="0.7" fill="none" /> {/* High hair bun with hairpin */}
              {/* Red Dress (红衣) */}
              <path d="M-5 0 L-10 20 L10 20 L5 0 Z" fill="url(#c56p29-redRobeWash)" stroke="#2c2420" strokeWidth="0.9" />
              {/* Lotus flower in maiden's hand */}
              <line x1="5" y1="4" x2="12" y2="-2" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="12" cy="-2" r="2" fill="#b4494e" />
            </g>

            {/* MIRROR REFLECTION 2: Famous Scholars (名士) & Opera Actors (名旦) with ABS */}
            {/* Shadow of Scholar 1 (名士 - with abs) */}
            <g transform="translate(10, -10)" opacity="0.65">
              <circle cx="0" cy="0" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M-3 4 L-5 16 L5 16 L3 4 Z" stroke="#2c2420" strokeWidth="0.6" fill="none" />
              {/* Abs lines */}
              <line x1="0" y1="6" x2="0" y2="14" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M-2 9 Q0 10.5, 2 9 M-2 12 Q0 13.5, 2 12" stroke="#2c2420" strokeWidth="0.3" fill="none" />
            </g>

            {/* Shadow of Opera Actor / Famous Scholar (名旦/魏聘才/奚十一 - with abs) */}
            <g transform="translate(10, 10)" opacity="0.65">
              <circle cx="0" cy="0" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M-3 4 L-5 16 L5 16 L3 4 Z" stroke="#2c2420" strokeWidth="0.6" fill="none" />
              {/* Abs lines */}
              <line x1="0" y1="6" x2="0" y2="14" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M-2 9 Q0 10.5, 2 9 M-2 12 Q0 13.5, 2 12" stroke="#2c2420" strokeWidth="0.3" fill="none" />
            </g>
          </g>

          {/* ===== 5. MONSTROUS BLUE SCALED ARM WITH 5 GIANT CLAWS (满臂鳞甲蓝手，五个大爪抢去镜子) ===== */}
          {/* Reaching into the cabin window from upper right outside */}
          <g transform="translate(330, 90)">
            {/* Thick Blue Monster Arm (船舱外伸进一只蓝手) */}
            <path d="M140 -40 Q70 15, 0 75 Q15 95, 80 50 Q130 15, 170 -15 Z" fill="url(#c56p29-blueClawGrad)" stroke="#2c2420" strokeWidth="2" />

            {/* Dragon/Monster Scales on Arm (满臂的鳞甲) */}
            <g stroke="#1a1412" strokeWidth="0.7" fill="none" opacity="0.75">
              <path d="M120 -15 Q125 -10, 130 -15 M105 -2 Q110 3, 115 -2 M90 12 Q95 17, 100 12" />
              <path d="M110 -25 Q115 -20, 120 -25 M95 -12 Q100 -7, 105 -12 M80 2 Q85 7, 90 2" />
              <path d="M70 18 Q75 23, 80 18 M55 32 Q60 37, 65 32 M40 46 Q45 51, 50 46" />
              <path d="M60 22 Q65 27, 70 22 M45 36 Q50 41, 55 36 M30 50 Q35 55, 40 50" />
            </g>

            {/* THE FIVE GIANT SHARP CLAWS SNATCHING THE MIRROR (伸开五个大爪，把这面镜子抢去了) */}
            {/* Claw 1 (Thumb) */}
            <path d="M5 65 Q-15 60, -35 70 Q-28 78, -5 75 Z" fill="#1e3a5f" stroke="#2c2420" strokeWidth="1.4" />
            <polygon points="-35,70 -44,65 -33,76" fill="#2c2420" /> {/* Sharp Talon 1 */}

            {/* Claw 2 (Index Finger) */}
            <path d="M-5 75 Q-30 80, -50 92 Q-42 100, -10 88 Z" fill="#1e3a5f" stroke="#2c2420" strokeWidth="1.4" />
            <polygon points="-50,92 -60,90 -45,100" fill="#2c2420" /> {/* Sharp Talon 2 */}

            {/* Claw 3 (Middle Finger) */}
            <path d="M10 85 Q-15 105, -42 120 Q-32 128, 5 95 Z" fill="#1e3a5f" stroke="#2c2420" strokeWidth="1.4" />
            <polygon points="-42,120 -52,124 -36,128" fill="#2c2420" /> {/* Sharp Talon 3 */}

            {/* Claw 4 (Ring Finger) */}
            <path d="M25 90 Q0 120, -22 138 Q-12 144, 20 102 Z" fill="#1e3a5f" stroke="#2c2420" strokeWidth="1.4" />
            <polygon points="-22,138 -30,146 -16,144" fill="#2c2420" /> {/* Sharp Talon 4 */}

            {/* Claw 5 (Little Finger) */}
            <path d="M40 92 Q20 125, -2 148 Q8 152, 35 102 Z" fill="#1e3a5f" stroke="#2c2420" strokeWidth="1.4" />
            <polygon points="-2,148 -8,158 5,152" fill="#2c2420" /> {/* Sharp Talon 5 */}
          </g>

          {/* ===== 6. TRADITIONAL RED SEALS & CALLIGRAPHY (印章与题字) ===== */}
          <g transform="translate(455, 315)">
            {/* Seal 1: 莫愁采莲 */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">莫愁</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">采莲</text>
            </g>
            {/* Seal 2: 宝镜化珠 */}
            <g transform="translate(0, 30)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">宝镜</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">化珠</text>
            </g>
          </g>

          {/* Vertical Calligraphy Text (右侧水墨题字) */}
          <text x="495" y="150" textAnchor="middle" fill="#2c2420" fontSize="13" fontFamily="serif" writingMode="vertical-rl" opacity="0.8">莫愁湖采莲宝镜图</text>
          <text x="508" y="150" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">第五十六回 琴仙梦镜</text>

        </g>
      </svg>
    </div>
  );
};
