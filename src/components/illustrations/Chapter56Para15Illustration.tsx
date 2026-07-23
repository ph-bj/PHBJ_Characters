import React from "react";

/**
 * Visualizes Chapter 56 Paragraph 15:
 * "忽听得道翁叫人，琴仙急忙过去，见他歪转过身，当他要解手，问了他，摇摇头，心上要坐起来。
 *  琴仙叫刘喜来帮着扶起，把两个大靠枕靠了背。道翁道：「你们去找我那些诗文集来。」
 *  琴仙忙去开了箱，一部一部的搬过来。道翁问了书名，又过了目，叫留下一本近作诗稿子，一本书画册，
 *  其余都叫烧了。琴仙哭道：「这些诗文着你，一生的心血在内，正可留以传世，为何要烧了呢？」
 *  道翁道：「你不知道，我没有这些东西，我也不至今日这个模样，总是他误了我。若留下他，将来是要害人的。
 *  教人学了我，也与我一样，偃蹇一生，为造物所忌。断断留不得，快拿去尽行烧了。」
 *  琴仙万种伤心，十分无奈，只得到外面烧了几种，又自藏了几种，道翁将方才留的诗文字画付与琴仙道：
 * 「这个给你作纪念。」琴仙见此光景，就要忍住哭，也忍不住了，只是掩面呜咽。"
 *
 * In the style of `MainInkLandscape.tsx` with traditional Chinese ink wash (水墨画) aesthetic,
 * layered rice-paper bleed filters, tragic burning of lifelong poetry manuscripts, sickbed chamber,
 * opened book trunks, burning brazier with rising ink smoke, red traditional seals, and male characters (scholars/opera actors)
 * featuring defined abdominal muscles (abs).
 */
export const Chapter56Para15Illustration: React.FC = () => {
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
          {/* Flame / Ember warm glow */}
          <radialGradient id="c56p15-flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7043" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ffb74d" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#e67e22" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Daylight window glow */}
          <radialGradient id="c56p15-windowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#2c2420" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>

          {/* Burning ink smoke gradient (焚稿墨烟) */}
          <linearGradient id="c56p15-smokeFade" x1="0" y1="1" x2="0.4" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0" />
          </linearGradient>

          {/* Pillow & Blanket wash */}
          <linearGradient id="c56p15-bedWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>

          {/* Brush wobble - hand-drawn linework feel */}
          <filter id="c56p15-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="15" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Ink bleed - wet rice paper (洇墨) */}
          <filter id="c56p15-mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>

          {/* Heavy bleed for room shadows & smoke clouds */}
          <filter id="c56p15-mlBleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="17" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
        </defs>

        {/* ===== SCROLL BORDER ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES (室内部署与火光) ===== */}
        <g filter="url(#c56p15-mlBleedFar)">
          {/* Bed canopy shadow wash */}
          <path d="M12 12 L260 12 L260 270 L12 270 Z" fill="#2c2420" opacity="0.14" />
          {/* Floor shadow wash */}
          <path d="M12 280 Q260 270, 508 280 L508 388 L12 388 Z" fill="#2c2420" opacity="0.16" />
          {/* Brazier smoke bleed (焚稿上升的浓烟) */}
          <path d="M380 290 Q400 200, 420 140 Q440 80, 410 20 L340 20 L380 290 Z" fill="url(#c56p15-smokeFade)" opacity="0.45" />
        </g>

        {/* Mid-ground ink bleed */}
        <g filter="url(#c56p15-mlBleed)">
          {/* Brazier fire glow area */}
          <ellipse cx="385" cy="305" rx="45" ry="24" fill="url(#c56p15-flameGlow)" />
          {/* Bed pillows ink wash */}
          <ellipse cx="65" cy="180" rx="32" ry="22" fill="url(#c56p15-bedWash)" />
          <ellipse cx="95" cy="185" rx="28" ry="20" fill="url(#c56p15-bedWash)" />
          {/* Opened book trunk shadow */}
          <rect x="230" y="295" width="55" height="30" fill="#2c2420" opacity="0.25" rx="2" />
        </g>

        {/* Linework & Detailed Layer with Brush Wobble Filter */}
        <g filter="url(#c56p15-inkTexture)">

          {/* ===== ROOM ARCHITECTURE & LATTICE WINDOW ===== */}
          {/* Rear wall boundary line */}
          <line x1="12" y1="270" x2="508" y2="270" stroke="#2c2420" strokeWidth="1.2" opacity="0.6" />

          {/* Floorboard perspective lines */}
          <line x1="110" y1="270" x2="80" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.35" />
          <line x1="220" y1="270" x2="200" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.35" />
          <line x1="330" y1="270" x2="330" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.35" />
          <line x1="440" y1="270" x2="460" y2="388" stroke="#2c2420" strokeWidth="0.5" opacity="0.35" />

          {/* Window on right wall with tree shadows outside (槐树遮日) */}
          <g transform="translate(420, 45)">
            <rect x="0" y="0" width="75" height="110" fill="none" stroke="#2c2420" strokeWidth="1.6" />
            <line x1="25" y1="0" x2="25" y2="110" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="50" y1="0" x2="50" y2="110" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="0" y1="36" x2="75" y2="36" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="0" y1="74" x2="75" y2="74" stroke="#2c2420" strokeWidth="0.8" />
            {/* Locust tree branch silhouette outside window */}
            <path d="M75 20 Q50 35, 30 15 Q15 25, 0 10" fill="none" stroke="#2c2420" strokeWidth="1.4" opacity="0.5" />
            <path d="M50 35 Q40 55, 10 45" fill="none" stroke="#2c2420" strokeWidth="1" opacity="0.4" />
            {/* Leaf details */}
            <circle cx="25" cy="18" r="4" fill="#2c2420" opacity="0.3" />
            <circle cx="12" cy="22" r="3" fill="#2c2420" opacity="0.3" />
            <circle cx="35" cy="48" r="4" fill="#2c2420" opacity="0.3" />
          </g>

          {/* Window Light Glow */}
          <circle cx="455" cy="100" r="45" fill="url(#c56p15-windowGlow)" />

          {/* ===== SICKBED (榻 / 靠床) & DAO WENG (屈道翁) ===== */}
          {/* Bed frame & canopy post */}
          <path d="M12 120 L185 120 L185 270 M12 145 L185 145" stroke="#2c2420" strokeWidth="1.6" fill="none" />
          <line x1="185" y1="120" x2="185" y2="280" stroke="#2c2420" strokeWidth="2.2" />
          {/* Bed mat / border */}
          <rect x="15" y="210" width="170" height="60" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          <line x1="15" y1="230" x2="185" y2="230" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="3,3" />

          {/* TWO LARGE PILLOWS (两个大靠枕靠了背) */}
          {/* Pillow 1 */}
          <rect x="35" y="165" width="40" height="50" rx="6" fill="none" stroke="#2c2420" strokeWidth="1.4" transform="rotate(-12, 55, 190)" />
          <path d="M38 170 Q55 178, 72 172" stroke="#2c2420" strokeWidth="0.6" fill="none" transform="rotate(-12, 55, 190)" />
          {/* Pillow 2 */}
          <rect x="65" y="168" width="42" height="52" rx="6" fill="none" stroke="#2c2420" strokeWidth="1.4" transform="rotate(-5, 86, 194)" />
          <path d="M68 173 Q86 182, 104 175" stroke="#2c2420" strokeWidth="0.6" fill="none" transform="rotate(-5, 86, 194)" />

          {/* DAO WENG (屈道翁) - Propped up on bed, feeble scholar */}
          {/* Head & Topknot */}
          <circle cx="118" cy="152" r="11" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M116 141 Q118 136, 120 141 Z" fill="#2c2420" /> {/* Hair bun */}
          <path d="M113 148 Q118 152, 123 148" fill="none" stroke="#2c2420" strokeWidth="0.5" /> {/* Eyes closed/weary */}
          <path d="M125 152 Q128 155, 126 158" stroke="#2c2420" strokeWidth="0.5" fill="none" /> {/* Nose profile */}
          <path d="M117 160 Q122 161, 124 160" stroke="#2c2420" strokeWidth="0.6" fill="none" /> {/* Mouth */}
          <path d="M118 162 Q120 169, 122 174" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="1,1" fill="none" /> {/* Thin elderly beard */}

          {/* Dao Weng Open Collar & Defined Chest/Abs (Sick scholar abs) */}
          <path d="M110 163 L95 185 L145 185 L126 163" fill="none" stroke="#2c2420" strokeWidth="1.2" /> {/* Outer robe neckline */}
          {/* Open inner collar exposing torso */}
          <path d="M114 165 L108 185 M122 165 L128 185" stroke="#2c2420" strokeWidth="0.8" fill="none" />
          {/* Pectoral chest & riblines */}
          <path d="M113 172 Q118 175, 123 172" fill="none" stroke="#2c2420" strokeWidth="0.65" />
          <line x1="118" y1="174" x2="118" y2="188" stroke="#2c2420" strokeWidth="0.5" />
          {/* Abs grid lines */}
          <path d="M114 177 Q118 178.5, 122 177" stroke="#2c2420" strokeWidth="0.5" fill="none" />
          <path d="M114 182 Q118 183.5, 122 182" stroke="#2c2420" strokeWidth="0.5" fill="none" />
          <path d="M115 186 Q118 187.5, 121 186" stroke="#2c2420" strokeWidth="0.45" fill="none" />

          {/* Dao Weng Arms & Hand pointing/holding manuscripts */}
          {/* Left arm resting on lap/blanket */}
          <path d="M102 175 Q90 190, 85 210" stroke="#2c2420" strokeWidth="1.3" fill="none" />
          {/* Right arm extended forward handing keepsake / ordering burn */}
          <path d="M128 175 Q145 178, 162 182" stroke="#2c2420" strokeWidth="1.4" fill="none" />
          <path d="M162 182 L168 181 M167 184 L173 182" stroke="#2c2420" strokeWidth="0.9" /> {/* Hand fingers */}

          {/* Bed Blanket covering legs */}
          <path d="M75 205 Q125 198, 175 210 L175 245 L65 245 Z" fill="none" stroke="#2c2420" strokeWidth="1.4" />
          <path d="M90 205 Q125 215, 160 210" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="4,2" fill="none" />

          {/* ===== OPENED BOOK TRUNK (开了箱，一部一部搬过来) ===== */}
          <g transform="translate(205, 260)">
            {/* Trunk Body */}
            <rect x="0" y="15" width="55" height="34" fill="none" stroke="#2c2420" strokeWidth="1.6" rx="1" />
            {/* Open Lid tilted back */}
            <path d="M0 15 L-12 -5 L43 -5 L55 15 Z" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            {/* Trunk Brass Lock & Corner Brackets */}
            <rect x="22" y="24" width="10" height="12" fill="none" stroke="#2c2420" strokeWidth="1" />
            <circle cx="27" cy="30" r="1.5" fill="#2c2420" />
            <path d="M0 15 L8 15 M47 15 L55 15 M0 49 L8 49 M47 49 L55 49" stroke="#2c2420" strokeWidth="1.8" />

            {/* Stacked manuscript rolls and thread-bound volumes inside/around trunk */}
            {/* Stack 1 inside trunk */}
            <rect x="6" y="20" width="20" height="6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <rect x="5" y="26" width="22" height="6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="10" y1="20" x2="10" y2="32" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="1,1" />

            {/* Stack of books on floor next to trunk */}
            <rect x="62" y="32" width="28" height="6" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <rect x="60" y="38" width="30" height="6" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <rect x="58" y="44" width="32" height="6" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            {/* Thread binding marks (线装书脊) */}
            <line x1="64" y1="32" x2="64" y2="50" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="68" y1="32" x2="68" y2="50" stroke="#2c2420" strokeWidth="0.4" />
          </g>

          {/* ===== QIN XIAN (琴仙 / 屈庆云) - MALE SCHOLAR & OPERA ACTOR WITH ABS ===== */}
          {/* Qin Xian is kneeling/leaning beside the bed, wiping tears in sorrow, holding selected manuscript */}
          <g transform="translate(165, 160)">
            {/* Head & Handsome Opera Actor Hairline */}
            <circle cx="42" cy="18" r="11" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M35 12 Q42 6, 49 12 Q49 18, 42 21 Q35 18, 35 12 Z" fill="#2c2420" opacity="0.85" /> {/* Elegant hair cap */}
            <path d="M42 6 L42 2 Q44 0, 46 2 L46 6 Z" fill="#2c2420" /> {/* Ribbon tie */}

            {/* Face details - Masked by sleeve (掩面呜咽) */}
            <path d="M33 22 Q37 26, 40 24" stroke="#2c2420" strokeWidth="0.6" fill="none" /> {/* Tear line */}

            {/* OPEN SCHOLAR ROBE SHOWING DEFINED ABS (Male scholar / opera actor abs requirement) */}
            {/* Broad shoulders & neckline */}
            <path d="M22 34 L32 28 L52 28 L62 34" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            {/* Open collar draped aside */}
            <path d="M32 28 L27 58 M52 28 L57 58" stroke="#2c2420" strokeWidth="1.1" fill="none" />

            {/* PECTORAL CHEST DEFINITION (胸肌) */}
            <path d="M34 36 Q42 40, 50 36" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            {/* DEFINED 6-PACK ABS (腹肌格块) */}
            <line x1="42" y1="38" x2="42" y2="60" stroke="#2c2420" strokeWidth="0.55" />
            <path d="M35 43 Q42 45, 49 43" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M35 49 Q42 51, 49 49" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M36 55 Q42 57, 48 55" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M37 60 Q42 61.5, 47 60" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Waist Sash / Belt */}
            <path d="M26 62 Q42 65, 58 62" fill="none" stroke="#2c2420" strokeWidth="1.3" />

            {/* Left Arm Raised Wiping Tears with Wide Sleeve (掩面呜咽) */}
            <path d="M25 32 Q15 24, 25 15" stroke="#2c2420" strokeWidth="1.5" fill="none" />
            <path d="M25 15 Q34 14, 38 18" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M16 28 Q10 40, 24 50" stroke="#2c2420" strokeWidth="1" fill="none" /> {/* Flowing sleeve fold */}

            {/* Right Arm Holding Saved Poetry Draft & Painting Album (手捧留存诗稿与画册) */}
            <path d="M58 34 Q70 42, 64 54" stroke="#2c2420" strokeWidth="1.4" fill="none" />
            {/* The Keepsake Book / Album (近作诗稿、书画册) */}
            <rect x="58" y="48" width="22" height="16" fill="none" stroke="#2c2420" strokeWidth="1.2" transform="rotate(-15, 69, 56)" />
            <line x1="62" y1="48" x2="62" y2="64" stroke="#2c2420" strokeWidth="0.6" transform="rotate(-15, 69, 56)" />
            {/* Text characters miniature on manuscript */}
            <text x="69" y="56" fontSize="5" fontFamily="serif" fill="#2c2420" textAnchor="middle" transform="rotate(-15, 69, 56)">诗稿</text>

            {/* Lower Robe & Kneeling Pose */}
            <path d="M26 62 Q18 95, 20 120 L64 120 Q66 95, 58 62 Z" fill="none" stroke="#2c2420" strokeWidth="1.4" />
            <path d="M38 64 Q35 90, 32 120" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="4,2" fill="none" />
            <path d="M46 64 Q48 90, 50 120" stroke="#2c2420" strokeWidth="0.6" opacity="0.6" fill="none" />
          </g>

          {/* ===== LIU XI (刘喜) - YOUNG SERVANT AT BURNING BRAZIER ===== */}
          <g transform="translate(325, 185)">
            {/* Head & Servant Hair Knots (双髻) */}
            <circle cx="28" cy="16" r="9.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
            <circle cx="20" cy="9" r="3.5" fill="#2c2420" />
            <circle cx="36" cy="9" r="3.5" fill="#2c2420" />
            <path d="M24 16 Q28 19, 32 16" stroke="#2c2420" strokeWidth="0.5" fill="none" /> {/* Sorrowful expression */}

            {/* Torso & Defined Male Abs / Muscular Servant Core */}
            <path d="M16 26 L22 23 L34 23 L40 26" stroke="#2c2420" strokeWidth="1.3" fill="none" />
            {/* Open vest / tunic */}
            <line x1="22" y1="23" x2="20" y2="48" stroke="#2c2420" strokeWidth="1" />
            <line x1="34" y1="23" x2="36" y2="48" stroke="#2c2420" strokeWidth="1" />

            {/* Pectoral & Abs contour for young male servant */}
            <path d="M23 30 Q28 32, 33 30" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="28" y1="31" x2="28" y2="47" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M24 35 Q28 36.5, 32 35" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M24 40 Q28 41.5, 32 40" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M25 45 Q28 46, 31 45" fill="none" stroke="#2c2420" strokeWidth="0.45" />

            {/* Belt */}
            <path d="M19 49 Q28 51, 37 49" stroke="#2c2420" strokeWidth="1.2" fill="none" />

            {/* Arms placing poetry collection into flames */}
            <path d="M16 28 Q8 38, 20 44" stroke="#2c2420" strokeWidth="1.2" fill="none" />
            <path d="M38 28 Q50 36, 42 46" stroke="#2c2420" strokeWidth="1.3" fill="none" />

            {/* Book volume being placed into brazier fire */}
            <rect x="34" y="42" width="18" height="12" fill="none" stroke="#2c2420" strokeWidth="1" transform="rotate(25, 43, 48)" />
            <line x1="37" y1="42" x2="37" y2="54" stroke="#2c2420" strokeWidth="0.5" transform="rotate(25, 43, 48)" />

            {/* Trousers & Stance */}
            <path d="M19 49 L14 95 L26 95 L28 65 L30 95 L42 95 L37 49 Z" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          </g>

          {/* ===== THE BURNING BRAZIER (铜炉火盆与焚稿烈焰) ===== */}
          <g transform="translate(355, 275)">
            {/* Bronze Brazier Stand & Legs (三足铜火盆) */}
            <ellipse cx="30" cy="32" rx="32" ry="10" fill="none" stroke="#2c2420" strokeWidth="1.8" />
            <ellipse cx="30" cy="28" rx="30" ry="8" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            {/* Three Legs */}
            <path d="M5 34 L1 48 L8 46" stroke="#2c2420" strokeWidth="1.6" fill="none" />
            <path d="M30 38 L30 52 L35 50" stroke="#2c2420" strokeWidth="1.6" fill="none" />
            <path d="M55 34 L59 48 L52 46" stroke="#2c2420" strokeWidth="1.6" fill="none" />

            {/* Flames & Burning Manuscripts inside Brazier */}
            <path d="M12 25 Q18 10, 22 18 Q28 2, 34 14 Q40 8, 44 20 Q48 12, 50 25 Z" fill="#2c2420" opacity="0.75" />
            <path d="M16 25 Q22 14, 25 20 Q30 8, 35 18 Q40 14, 42 25 Z" fill="#ff7043" opacity="0.85" />
            {/* Glowing inner core */}
            <path d="M22 26 Q27 16, 31 22 Q36 15, 38 26 Z" fill="#ffb74d" />

            {/* Burning Paper Fragments & Flying Ashes (飞灰与碎落火星) */}
            <path d="M18 12 Q14 2, 8 -8" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="2,3" fill="none" />
            <path d="M32 8 Q36 -12, 45 -25" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="3,3" fill="none" />
            <path d="M42 14 Q52 0, 58 -15" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />

            {/* Ember dots */}
            <circle cx="12" cy="-2" r="1" fill="#ff7043" />
            <circle cx="28" cy="-18" r="1.5" fill="#ffb74d" />
            <circle cx="42" cy="-10" r="1" fill="#ff7043" />
            <circle cx="50" cy="-22" r="1.2" fill="#ffb74d" />

            {/* Charred manuscript pages curling in fire */}
            <path d="M10 20 C14 15, 8 10, 16 8" fill="none" stroke="#2c2420" strokeWidth="0.9" />
            <path d="M44 22 C40 16, 48 12, 42 6" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          </g>

          {/* ===== SWIRLING SMOKE CLOUDS (洇墨黑烟 - 痛苦升腾) ===== */}
          <g filter="url(#c56p15-mlBleed)">
            <path d="M380 260 Q340 210, 370 160 Q390 120, 360 80 Q340 50, 370 20" fill="none" stroke="#2c2420" strokeWidth="4" opacity="0.35" />
            <path d="M400 240 Q440 180, 410 130 Q390 80, 420 30" fill="none" stroke="#2c2420" strokeWidth="3" opacity="0.25" />
            <path d="M370 200 Q390 150, 385 100" fill="none" stroke="#2c2420" strokeWidth="2" opacity="0.3" />
          </g>

          {/* ===== TRADITIONAL CHINESE SEALS (印章 - Bottom Right) ===== */}
          <g transform="translate(465, 335)">
            {/* Seal 1: 焚稿 (Fen Gao) */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">焚稿</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">断痴</text>
            </g>
            {/* Seal 2: 屈本立 / 琴仙 (Right lower corner) */}
            <g transform="translate(0, 30)">
              <rect x="0" y="0" width="34" height="25" fill="none" stroke="#b4494e" strokeWidth="1.5" rx="1" />
              <rect x="2" y="2" width="30" height="21" fill="#b4494e" fillOpacity="0.12" stroke="#b4494e" strokeWidth="0.5" />
              <text x="17" y="11" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">道翁</text>
              <text x="17" y="20" fill="#b4494e" fontSize="9" fontFamily="serif" textAnchor="middle" fontWeight="bold">琴仙</text>
            </g>
          </g>

        </g>
      </svg>
    </div>
  );
};
