import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 19:
 * "入殓之后，停放中堂，琴仙穿了麻衣，在灵帏伴宿，刘喜也开铺在一边。
 *  此时正是中元时候，是个兰盆鬼节。南京风俗，处处给鬼施食，烧纸念经，并用油纸札了灯彩，点了放在河中，要照见九泉之意。
 *  一日之内，断风零雨，白日乌云，一刻一变。古寺中已见落叶满阶，萧萧瑟瑟。
 *  夜间月映纸窗，秋虫乱叫，就是欢乐人到此，也要感慨，况多愁善哭如琴仙，再当此茕茕顾影，前路茫茫，岂不寸心如割！"
 *
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic,
 * layered rice-paper bleed filters, Zhongyuan Ghost Festival floating lanterns on the dark river (照见九泉),
 * autumn fallen leaves on temple steps (落叶满阶), mourning hall with coffin & white curtains (灵帏伴宿),
 * moonlit paper window (月映纸窗), red traditional seals, and male characters (Qin Xian scholar/opera actor & Liu Xi)
 * featuring defined abdominal muscles (abs).
 */
export const Chapter56Para19Illustration: React.FC = () => {
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
          {/* Candle / Altar warm amber glow */}
          <radialGradient id="c56p19-candleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb74d" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#ff7043" stopOpacity="0.35" />
            <stop offset="85%" stopColor="#2c2420" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Floating river lantern glow (油纸灯彩照见九泉) */}
          <radialGradient id="c56p19-lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd54f" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#ff8f00" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#e65100" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Moonlit window pale glow (月映纸窗) */}
          <radialGradient id="c56p19-moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#d4c5a9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Ghostly mist / River night wash (阴风鬼影与雨雾) */}
          <linearGradient id="c56p19-riverWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1412" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0d0a09" stopOpacity="0.5" />
          </linearGradient>

          {/* Incense smoke gradient (焚香念经袅袅青烟) */}
          <linearGradient id="c56p19-smokeFade" x1="0" y1="1" x2="0.3" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#2c2420" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Brush wobble - makes strokes waver like hand-held brush */}
          <filter id="c56p19-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="19" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - soft feathered edges like wet ink on rice paper (洇墨) */}
          <filter id="c56p19-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="9" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed for background night sky, ghostly shadows & river mist */}
          <filter id="c56p19-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="21" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="14" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== BACKGROUND INK WASHES (墨分五色 - 鬼节阴云与悲风) ===== */}
        {/* Dark night sky & rain clouds bleed */}
        <g filter="url(#c56p19-mlBleedFar)">
          {/* Swirling storm clouds over ancient temple */}
          <path d="M12 12 L508 12 L508 180 Q350 140, 200 170 Q80 120, 12 160 Z" fill="#2c2420" opacity="0.22" />
          {/* Ghostly mist rising from river outside */}
          <path d="M300 180 Q380 120, 508 160 L508 388 L320 388 Z" fill="url(#c56p19-riverWash)" opacity="0.3" />
          {/* Floor & temple interior shadow wash */}
          <path d="M12 260 L320 260 L320 388 L12 388 Z" fill="#2c2420" opacity="0.14" />
        </g>

        {/* Mid-ground ink washes */}
        <g filter="url(#c56p19-mlBleed)">
          {/* Candlelight warm wash at altar */}
          <circle cx="165" cy="225" r="55" fill="url(#c56p19-candleGlow)" />
          {/* Floating lanterns glow on river water */}
          <ellipse cx="430" cy="315" rx="35" ry="18" fill="url(#c56p19-lanternGlow)" opacity="0.85" />
          <ellipse cx="370" cy="345" rx="28" ry="14" fill="url(#c56p19-lanternGlow)" opacity="0.75" />
          <ellipse cx="475" cy="285" rx="22" ry="12" fill="url(#c56p19-lanternGlow)" opacity="0.65" />
          <ellipse cx="410" cy="265" rx="18" ry="10" fill="url(#c56p19-lanternGlow)" opacity="0.55" />
          {/* Incense smoke rising from altar */}
          <path d="M165 210 Q145 150, 175 100 Q195 50, 160 20" fill="none" stroke="url(#c56p19-smokeFade)" strokeWidth="12" opacity="0.45" />
          {/* Ethereal ghost silhouettes drifting above river (给鬼施食 / 照见九泉) */}
          <path d="M440 190 Q470 170, 450 140 Q430 110, 460 80" fill="none" stroke="#2c2420" strokeWidth="6" opacity="0.12" />
          <circle cx="450" cy="135" r="10" fill="#2c2420" opacity="0.1" />
        </g>

        {/* Main Linework with Brush Wobble Filter */}
        <g filter="url(#c56p19-inkTexture)">

          {/* ===== MOON & PAPER WINDOW (月映纸窗 / 断风零雨) ===== */}
          {/* Left Wall Paper Window */}
          <g transform="translate(25, 45)">
            {/* Window Glow */}
            <rect x="0" y="0" width="75" height="115" fill="url(#c56p19-moonGlow)" />
            {/* Lattice Frame */}
            <rect x="0" y="0" width="75" height="115" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <line x1="25" y1="0" x2="25" y2="115" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="50" y1="0" x2="50" y2="115" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="0" y1="38" x2="75" y2="38" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="0" y1="76" x2="75" y2="76" stroke="#2c2420" strokeWidth="0.8" />
            {/* Crescent / Dim Autumn Moon Silhouette outside paper window */}
            <path d="M50 25 A18 18 0 0 1 32 45 A16 16 0 0 0 50 25 Z" fill="#2c2420" opacity="0.25" />
            {/* Wind-blown rain diagonal streaks outside (断风零雨) */}
            <line x1="-5" y1="10" x2="15" y2="40" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
            <line x1="30" y1="5" x2="50" y2="35" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
            <line x1="10" y1="60" x2="30" y2="90" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
            <line x1="45" y1="50" x2="65" y2="80" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
          </g>

          {/* ===== TEMPLE ARCHITECTURE & STEPPED ENTRANCE ===== */}
          {/* Rear wall divider between hall and outer river view */}
          <line x1="12" y1="260" x2="320" y2="260" stroke="#2c2420" strokeWidth="1.4" opacity="0.7" />
          {/* Main Temple Pillar */}
          <line x1="320" y1="12" x2="320" y2="388" stroke="#2c2420" strokeWidth="2.4" />
          {/* Wooden rafters across ceiling */}
          <line x1="12" y1="35" x2="320" y2="35" stroke="#2c2420" strokeWidth="1.2" opacity="0.5" />
          <line x1="12" y1="15" x2="320" y2="15" stroke="#2c2420" strokeWidth="0.8" opacity="0.4" />

          {/* Stone floor tiles inside hall */}
          <line x1="90" y1="260" x2="70" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.3" />
          <line x1="180" y1="260" x2="165" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.3" />
          <line x1="260" y1="260" x2="250" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.3" />

          {/* Fallen Autumn Leaves on Steps & Floor (古寺落叶满阶，萧萧瑟瑟) */}
          <g opacity="0.65">
            {/* Scattered leaf outlines */}
            <path d="M45 285 Q50 280, 52 288 Q46 290, 45 285 Z" fill="#2c2420" />
            <path d="M85 310 Q92 305, 90 314 Q83 315, 85 310 Z" fill="#2c2420" />
            <path d="M125 350 Q130 342, 134 352 Q127 355, 125 350 Z" fill="#2c2420" />
            <path d="M210 295 Q218 290, 215 300 Q208 301, 210 295 Z" fill="#2c2420" />
            <path d="M290 330 Q296 322, 298 332 Q291 336, 290 330 Z" fill="#2c2420" />
            <path d="M335 275 Q340 268, 342 278 Q335 280, 335 275 Z" fill="#2c2420" />
            <path d="M360 305 Q368 300, 365 310 Q358 312, 360 305 Z" fill="#2c2420" />
            <path d="M30 360 Q38 355, 34 365 Q28 366, 30 360 Z" fill="#2c2420" />
          </g>

          {/* ===== COFFIN (灵柩/停放中堂) & MOURNING CANOPY (灵帏) ===== */}
          <g transform="translate(100, 110)">
            {/* White Mourning Canopy / Draped Curtains (灵帏) */}
            <path d="M-10 -15 L145 -15 L145 95 M-10 -15 L-10 95" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            {/* Draped curtain swags */}
            <path d="M-10 -15 Q30 10, 65 -10 Q100 10, 145 -15" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M-10 -15 Q20 30, -5 90" stroke="#2c2420" strokeWidth="0.9" strokeDasharray="4,2" fill="none" />
            <path d="M145 -15 Q125 30, 140 90" stroke="#2c2420" strokeWidth="0.9" strokeDasharray="4,2" fill="none" />

            {/* The Coffin (灵柩 / 梓宫) */}
            {/* Main Coffin Box */}
            <polygon points="15,45 115,45 130,85 0,85" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            {/* Coffin Lid Ridge */}
            <polygon points="18,32 112,32 115,45 15,45" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <line x1="65" y1="32" x2="65" y2="85" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="2,2" />
            {/* Decorative lacquer headers on coffin ends */}
            <circle cx="35" cy="65" r="8" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <circle cx="95" cy="65" r="8" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* Funeral Altar Table in front of Coffin (灵前香案) */}
            <rect x="10" y="85" width="115" height="32" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <line x1="10" y1="95" x2="125" y2="95" stroke="#2c2420" strokeWidth="0.7" />
            {/* Altar Legs */}
            <line x1="15" y1="117" x2="15" y2="135" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="120" y1="117" x2="120" y2="135" stroke="#2c2420" strokeWidth="1.4" />

            {/* Spirit Tablet (神主牌 / 灵位) */}
            <rect x="58" y="62" width="18" height="23" rx="1" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <text x="67" y="77" fontSize="6" fontFamily="serif" fill="#2c2420" textAnchor="middle">道翁之灵</text>

            {/* Incense Burner (香炉) with Rising Smoke */}
            <ellipse cx="67" cy="83" rx="8" ry="4" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="61" y1="87" x2="60" y2="91" stroke="#2c2420" strokeWidth="1" />
            <line x1="73" y1="87" x2="74" y2="91" stroke="#2c2420" strokeWidth="1" />
            {/* Three incense sticks */}
            <line x1="65" y1="82" x2="63" y2="70" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="67" y1="82" x2="67" y2="68" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="69" y1="82" x2="71" y2="70" stroke="#2c2420" strokeWidth="0.7" />
            {/* Glowing incense tips */}
            <circle cx="63" cy="70" r="0.8" fill="#ff7043" />
            <circle cx="67" cy="68" r="0.8" fill="#ff7043" />
            <circle cx="71" cy="70" r="0.8" fill="#ff7043" />

            {/* Pair of Funeral Candles (香烛) with flames */}
            {/* Left Candle */}
            <rect x="25" y="70" width="4" height="15" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M27 70 Q25 64, 27 60 Q29 64, 27 70 Z" fill="#ff7043" />
            <circle cx="27" cy="64" r="1.2" fill="#ffd54f" />
            {/* Right Candle */}
            <rect x="105" y="70" width="4" height="15" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M107 70 Q105 64, 107 60 Q109 64, 107 70 Z" fill="#ff7043" />
            <circle cx="107" cy="64" r="1.2" fill="#ffd54f" />

            {/* Joss Paper Burning Basin & Embers (烧纸钱 / 施食) */}
            <ellipse cx="67" cy="128" rx="20" ry="7" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M55 127 Q67 118, 79 127 Z" fill="#2c2420" opacity="0.5" />
            {/* Floating paper ashes */}
            <circle cx="58" cy="118" r="1" fill="#ff7043" />
            <circle cx="72" cy="114" r="1" fill="#ffd54f" />
            <circle cx="78" cy="120" r="0.8" fill="#ff7043" />
          </g>

          {/* ===== QIN XIAN (琴仙) - MALE SCHOLAR & OPERA ACTOR WITH ABS (灵帏伴宿/茕茕顾影) ===== */}
          {/* Qin Xian is sitting by the mourning curtain in coarse hemp robes, grieving */}
          <g transform="translate(45, 175)">
            {/* Sitting Mat */}
            <ellipse cx="45" cy="125" rx="38" ry="12" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <ellipse cx="45" cy="125" rx="34" ry="9" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" fill="none" />

            {/* Head & Elegant Hair Tie of Male Opera Actor / Scholar */}
            <circle cx="45" cy="22" r="12" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            {/* Top knot bun & mourning hair band (麻衣带) */}
            <circle cx="45" cy="9" r="4" fill="#2c2420" />
            <path d="M42 9 L35 2 M48 9 L55 2" stroke="#2c2420" strokeWidth="1.2" /> {/* White mourning headband ribbons */}
            <path d="M37 16 Q45 10, 53 16 Q53 23, 45 27 Q37 23, 37 16 Z" fill="#2c2420" opacity="0.85" /> {/* Black hair cap */}

            {/* Sorrowful Face Profile & Tear Line (多愁善哭/寸心如割) */}
            <path d="M45 28 L47 31" stroke="#2c2420" strokeWidth="0.8" /> {/* Nose */}
            <path d="M44 34 Q47 35, 49 34" stroke="#2c2420" strokeWidth="0.7" fill="none" /> {/* Lip */}
            <path d="M48 27 Q47 32, 46 36" stroke="#2c2420" strokeWidth="0.5" fill="none" /> {/* Single tear running down cheek */}

            {/* HEMP MOURNING ROBE OPEN AT CHEST (麻衣 / SHOWING ABS) */}
            {/* Coarse hemp robe collar draped open */}
            <path d="M26 40 L38 34 L52 34 L64 40" stroke="#2c2420" strokeWidth="1.5" fill="none" />
            <path d="M38 34 L31 70 M52 34 L59 70" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            {/* Coarse hemp fabric texture lines */}
            <line x1="28" y1="46" x2="33" y2="68" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="62" y1="46" x2="57" y2="68" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" />

            {/* PECTORAL CHEST MUSCLES (胸肌 - Male Scholar/Actor) */}
            <path d="M37 44 Q45 48, 53 44" fill="none" stroke="#2c2420" strokeWidth="0.85" />

            {/* DEFINED 6-PACK ABDOMINAL MUSCLES (腹肌格块) */}
            <line x1="45" y1="46" x2="45" y2="72" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M38 51 Q45 53.5, 52 51" fill="none" stroke="#2c2420" strokeWidth="0.55" />
            <path d="M38 58 Q45 60.5, 52 58" fill="none" stroke="#2c2420" strokeWidth="0.55" />
            <path d="M39 65 Q45 67.5, 51 65" fill="none" stroke="#2c2420" strokeWidth="0.55" />
            <path d="M40 71 Q45 73, 50 71" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Mourning Rope Waist Sash (麻绳束腰) */}
            <path d="M28 73 Q45 77, 62 73" stroke="#2c2420" strokeWidth="1.6" fill="none" />
            <path d="M54 75 L58 98 M58 75 L64 95" stroke="#2c2420" strokeWidth="1" /> {/* Hanging hemp rope ends */}

            {/* Arms Resting on Knees / Wiping Tears */}
            {/* Left Arm holding mourning sleeve */}
            <path d="M26 42 Q15 58, 28 72" stroke="#2c2420" strokeWidth="1.5" fill="none" />
            {/* Right Arm raised to chest in mournful sorrow */}
            <path d="M64 42 Q72 55, 58 68" stroke="#2c2420" strokeWidth="1.5" fill="none" />

            {/* Lower Robe & Kneeling/Sitting Stance */}
            <path d="M28 73 Q18 105, 20 125 L70 125 Q72 105, 62 73 Z" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <path d="M40 76 Q36 102, 33 125" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" fill="none" />
            <path d="M50 76 Q54 102, 57 125" stroke="#2c2420" strokeWidth="0.6" opacity="0.6" fill="none" />
          </g>

          {/* ===== LIU XI (刘喜) - SERVANT ON FLOOR BED WITH ABS (刘喜也开铺在一边) ===== */}
          <g transform="translate(235, 270)">
            {/* Floor Bed Mattress / Pallet (开铺在一边) */}
            <polygon points="0,50 85,35 110,75 25,90" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <line x1="5" y1="52" x2="28" y2="88" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" />
            {/* Rolled Pillow */}
            <ellipse cx="16" cy="56" rx="10" ry="14" fill="none" stroke="#2c2420" strokeWidth="1.2" transform="rotate(20, 16, 56)" />

            {/* Sleeping Figure of Liu Xi */}
            {/* Head on pillow */}
            <circle cx="20" cy="52" r="8" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <circle cx="16" cy="46" r="3" fill="#2c2420" /> {/* Servant hair knot */}
            <path d="M19 54 Q21 56, 23 54" stroke="#2c2420" strokeWidth="0.5" fill="none" /> {/* Sleeping eye closed */}

            {/* Torso & Defined Servant Abs (Open tunic while sleeping) */}
            <path d="M28 54 L34 50 L48 50 L54 54" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M34 50 L30 72 M48 50 L52 72" stroke="#2c2420" strokeWidth="0.9" fill="none" />

            {/* Abs Contour for Young Male Servant */}
            <path d="M35 56 Q41 58, 47 56" fill="none" stroke="#2c2420" strokeWidth="0.55" />
            <line x1="41" y1="57" x2="41" y2="71" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M36 61 Q41 63, 46 61" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M36 66 Q41 68, 46 66" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M37 70 Q41 71.5, 45 70" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Quilt covering legs */}
            <path d="M48 65 Q70 58, 95 62 L85 82 L35 86 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <path d="M52 68 Q72 74, 90 70" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,2" fill="none" />
          </g>

          {/* ===== RIGHT SIDE: ZHONGYUAN GHOST FESTIVAL FLOATING LANTERNS ON RIVER (中元鬼节 / 油纸灯彩 / 照见九泉) ===== */}
          <g transform="translate(325, 230)">
            {/* River Bank & Water Line */}
            <path d="M0 40 Q45 25, 90 35 Q140 20, 185 30" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            <path d="M0 65 Q60 50, 120 60 Q150 45, 185 55" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="6,3" fill="none" opacity="0.5" />
            <path d="M10 95 Q80 80, 140 92 Q170 85, 185 90" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="4,4" fill="none" opacity="0.4" />

            {/* FLOATING OIL-PAPER LANTERNS (油纸札了灯彩，点了放在河中，要照见九泉之意) */}

            {/* Lantern 1 - Foreground Large Lotus/Hexagonal Paper Lantern */}
            <g transform="translate(105, 80)">
              {/* Floating Base */}
              <ellipse cx="0" cy="10" rx="18" ry="6" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Octagonal/Lotus Paper Shade */}
              <path d="M-14 8 L-10 -12 L10 -12 L14 8 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              <line x1="-5" y1="8" x2="-3" y2="-12" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="5" y1="8" x2="3" y2="-12" stroke="#2c2420" strokeWidth="0.7" />
              {/* Flame inside */}
              <circle cx="0" cy="-2" r="3.5" fill="#ffd54f" />
              <circle cx="0" cy="-2" r="1.5" fill="#ff7043" />
              {/* Lotus Petal Base (兰盆鬼节 / 莲花灯底) */}
              <path d="M-18 10 Q-10 4, -4 10 Q0 4, 4 10 Q10 4, 18 10" stroke="#2c2420" strokeWidth="1" fill="none" />
              {/* Water Reflection Ripples */}
              <ellipse cx="0" cy="15" rx="22" ry="3" stroke="#ff8f00" strokeWidth="0.6" fill="none" opacity="0.7" />
            </g>

            {/* Lantern 2 - Midground Lantern */}
            <g transform="translate(45, 110)">
              <ellipse cx="0" cy="8" rx="14" ry="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M-11 6 L-8 -9 L8 -9 L11 6 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <circle cx="0" cy="-1" r="3" fill="#ffd54f" />
              <circle cx="0" cy="-1" r="1.2" fill="#ff7043" />
              <path d="M-14 8 Q-8 3, 0 8 Q8 3, 14 8" stroke="#2c2420" strokeWidth="0.8" fill="none" />
              <ellipse cx="0" cy="12" rx="18" ry="2.5" stroke="#ff8f00" strokeWidth="0.5" fill="none" opacity="0.6" />
            </g>

            {/* Lantern 3 - Background Lantern (drifting towards nine springs / 照见九泉) */}
            <g transform="translate(145, 50)">
              <ellipse cx="0" cy="6" rx="11" ry="4" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M-8 5 L-6 -7 L6 -7 L8 5 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
              <circle cx="0" cy="-1" r="2.5" fill="#ffd54f" />
              <ellipse cx="0" cy="9" rx="13" ry="2" stroke="#ff8f00" strokeWidth="0.4" fill="none" opacity="0.5" />
            </g>

            {/* Lantern 4 - Distant Small Lantern */}
            <g transform="translate(85, 30)">
              <ellipse cx="0" cy="4" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M-6 3 L-4 -5 L4 -5 L6 3 Z" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <circle cx="0" cy="-1" r="1.8" fill="#ffd54f" />
            </g>

            {/* Lantern 5 - Tiny Distant Spark on Water */}
            <circle cx="168" cy="22" r="1.5" fill="#ffd54f" />
            <circle cx="35" cy="45" r="1.2" fill="#ffd54f" />
          </g>

          {/* ===== TRADITIONAL CHINESE SEALS (印章 - Bottom Right) ===== */}
          <g transform="translate(465, 332)">
            {/* Seal 1: 中元 (Zhong Yuan) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">中元</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">鬼节</text>
            </g>
            {/* Seal 2: 照见九泉 / 琴仙 (Right lower corner) */}
            <g transform="translate(0, 30)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">琴仙</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">九泉</text>
            </g>
          </g>

        </g>
      </svg>
    </div>
  );
};
