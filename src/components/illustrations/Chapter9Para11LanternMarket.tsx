import React from "react";

/**
 * A MainInkLandscape-style ink wash painting.
 * Visualizes chapter 9 paragraph 11: at the lantern festival, Wenze, Wang Xun,
 * Zhongqing, and Yuzi stroll through the lantern market, chatting and laughing
 * under rows of glowing lanterns after their encounter with the carriage woman.
 */
export const Chapter9Para11LanternMarket: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center mt-4 mb-6">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: "320px" }}
      >
        <defs>
          {/* Ink wash gradient for mountains */}
          <linearGradient id="c9-ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>
          {/* Radial wash for moon halo */}
          <radialGradient id="c9-moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="#2c2420" stopOpacity="0" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.06" />
          </radialGradient>
          {/* Mist gradient */}
          <linearGradient id="c9-mist" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f5efe0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f5efe0" stopOpacity="0.8" />
          </linearGradient>
          {/* Water wash */}
          <linearGradient id="c9-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
          </linearGradient>
          {/* Brush wobble */}
          <filter id="c9-inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          {/* Ink bleed */}
          <filter id="c9-bleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="9" />
          </filter>
          {/* Far bleed */}
          <filter id="c9-bleedFar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="12" />
          </filter>
          {/* Plum rouge tint */}
          <radialGradient id="c9-plum" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
          </radialGradient>
          {/* Warm lantern glow */}
          <radialGradient id="c9-lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4a373" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#d4a373" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ===== FRAME ===== */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== DISTANT BACKGROUND WASH ===== */}
        <g filter="url(#c9-bleedFar)">
          {/* Farthest mountain range */}
          <path d="M12 172 Q50 102, 100 157 Q130 122, 175 152 Q210 102, 270 147 Q310 92, 370 142 Q410 107, 460 137 Q480 122, 515 167 L515 185 L12 185 Z" fill="#2c2420" opacity="0.12" />
        </g>

        {/* ===== MOON ===== */}
        <circle cx="420" cy="65" r="40" fill="url(#c9-moonHalo)" />
        <circle cx="420" cy="65" r="26" fill="none" stroke="#2c2420" strokeWidth="1.5" />
        <circle cx="416" cy="62" r="21" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,4" />

        {/* ===== CLOUD WISPS ===== */}
        <path d="M120 55 Q135 42, 155 48 Q168 38, 185 48 Q198 40, 212 50 Q222 42, 235 52" fill="none" stroke="#2c2420" strokeWidth="0.7" opacity="0.5" />
        <path d="M290 50 Q305 40, 322 46 Q332 38, 348 48" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />
        <path d="M55 80 Q68 72, 82 78 Q92 70, 105 78" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

        {/* Mist band */}
        <rect x="10" y="162" width="500" height="22" fill="url(#c9-mist)" />

        {/* ===== MOUNTAINS WITH INK WASH ===== */}
        <g filter="url(#c9-bleed)">
          <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="#2c2420" opacity="0.14" />
          <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="#2c2420" opacity="0.09" />
          {/* Mountain texture (皴法) */}
          <path d="M80 140 Q85 145, 82 152" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M250 120 Q255 128, 252 135" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M350 115 Q354 122, 351 130" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
          <path d="M450 130 Q453 136, 451 142" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
        </g>

        {/* ===== STREETSIDE BUILDING SILHOUETTES (lantern market stalls) ===== */}
        <g filter="url(#c9-bleed)">
          {/* Left stall */}
          <path d="M15 195 Q35 182, 60 190 L60 220 L15 220 Z" fill="#2c2420" opacity="0.08" />
          <path d="M12 195 L38 180 L64 195" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Center stall */}
          <path d="M170 190 Q190 178, 215 186 L215 215 L170 215 Z" fill="#2c2420" opacity="0.07" />
          <path d="M167 190 L193 176 L219 190" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Right stall */}
          <path d="M340 188 Q360 176, 385 184 L385 218 L340 218 Z" fill="#2c2420" opacity="0.09" />
          <path d="M337 188 L363 174 L389 188" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        </g>

        {/* All linework with brush wobble */}
        <g filter="url(#c9-inkTexture)">

          {/* ===== GROUND / STREET ===== */}
          <path d="M12 310 Q100 305, 160 312 Q220 306, 300 315 Q380 308, 508 312" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M12 320 Q100 316, 160 322 Q220 316, 300 325 Q380 318, 508 320" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.6" />
          {/* Stepping stones */}
          <ellipse cx="120" cy="308" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <ellipse cx="170" cy="314" rx="7" ry="2.5" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <ellipse cx="220" cy="310" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.5" />

          {/* ===== LANTERN STRINGS (hanging across the street) ===== */}
          {/* Main overhead wire */}
          <path d="M80 110 Q260 95, 440 110" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
          {/* Left pair */}
          <g filter="url(#c9-lanternGlow)">
            <line x1="100" y1="105" x2="100" y2="120" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="100" cy="128" rx="6" ry="8" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="97" y1="120" x2="103" y2="120" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="97" y1="136" x2="103" y2="136" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          <g filter="url(#c9-lanternGlow)">
            <line x1="135" y1="107" x2="135" y2="122" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="135" cy="130" rx="6" ry="8" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="132" y1="122" x2="138" y2="122" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="132" y1="138" x2="138" y2="138" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          {/* Center-left pair */}
          <g filter="url(#c9-lanternGlow)">
            <line x1="170" y1="103" x2="170" y2="118" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="170" cy="126" rx="5.5" ry="7.5" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="167" y1="118" x2="173" y2="118" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="167" y1="134" x2="173" y2="134" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          <g filter="url(#c9-lanternGlow)">
            <line x1="205" y1="101" x2="205" y2="116" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="205" cy="124" rx="5.5" ry="7.5" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="202" y1="116" x2="208" y2="116" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="202" y1="132" x2="208" y2="132" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          {/* Center-right pair */}
          <g filter="url(#c9-lanternGlow)">
            <line x1="270" y1="99" x2="270" y2="114" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="270" cy="122" rx="6" ry="8" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="267" y1="114" x2="273" y2="114" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="267" y1="130" x2="273" y2="130" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          <g filter="url(#c9-lanternGlow)">
            <line x1="310" y1="100" x2="310" y2="115" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="310" cy="123" rx="5.5" ry="7.5" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="307" y1="115" x2="313" y2="115" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="307" y1="131" x2="313" y2="131" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          {/* Right pair */}
          <g filter="url(#c9-lanternGlow)">
            <line x1="370" y1="104" x2="370" y2="119" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="370" cy="127" rx="6" ry="8" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="367" y1="119" x2="373" y2="119" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="367" y1="135" x2="373" y2="135" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          <g filter="url(#c9-lanternGlow)">
            <line x1="410" y1="107" x2="410" y2="122" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="410" cy="130" rx="5.5" ry="7.5" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="407" y1="122" x2="413" y2="122" stroke="#2c2420" strokeWidth="0.5" />
            <line x1="407" y1="138" x2="413" y2="138" stroke="#2c2420" strokeWidth="0.5" />
          </g>
          {/* Far right pair */}
          <g filter="url(#c9-lanternGlow)">
            <line x1="450" y1="110" x2="450" y2="125" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
            <ellipse cx="450" cy="133" rx="5" ry="7" fill="#2c2420" opacity="0.08" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* ===== FIGURES: Four friends strolling and chatting (center of composition) ===== */}

          {/* --- FIGURE 1: WENZE (center, laughing and gesturing) --- */}
          {/* Head */}
          <circle cx="220" cy="258" r="6.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M217 252 Q220 248, 223 252" fill="none" stroke="#2c2420" strokeWidth="1" />
          <line x1="220" y1="249" x2="220" y2="252" stroke="#2c2420" strokeWidth="0.8" />
          {/* Laughing mouth */}
          <path d="M218 259 Q220 261, 222 259" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          {/* Neck */}
          <line x1="220" y1="264.5" x2="220" y2="268" stroke="#2c2420" strokeWidth="1.1" />
          {/* Shoulders */}
          <path d="M208 272 Q214 267, 220 269 Q226 267, 232 272" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          {/* Torso */}
          <line x1="208" y1="272" x2="213" y2="296" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="232" y1="272" x2="227" y2="296" stroke="#2c2420" strokeWidth="1.2" />
          {/* Chest */}
          <path d="M213 276 Q217 279, 220 277 Q223 279, 227 276" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          {/* Waist */}
          <path d="M213 296 Q220 299, 227 296" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Left arm extended outward, gesturing */}
          <path d="M208 272 Q196 268, 185 266 Q178 265, 172 264" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M172 264 Q168 265, 165 266" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Left arm muscle */}
          <path d="M202 270 Q198 268, 194 266" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          {/* Right arm relaxed at side */}
          <path d="M232 272 Q238 278, 242 286" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M242 286 Q243 291, 240 295" fill="none" stroke="#2c2420" strokeWidth="1" />
          {/* Legs */}
          <line x1="215" y1="296" x2="210" y2="318" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="225" y1="296" x2="228" y2="318" stroke="#2c2420" strokeWidth="1.2" />

          {/* --- FIGURE 2: WANG XUN (left of Wenze, listening with smile) --- */}
          <circle cx="175" cy="262" r="6" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M172 256 Q175 252, 178 256" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <line x1="175" y1="253" x2="175" y2="256" stroke="#2c2420" strokeWidth="0.7" />
          {/* Subtle smile */}
          <path d="M173 262 Q175 263.5, 177 262" fill="none" stroke="#2c2420" strokeWidth="0.3" />
          <line x1="175" y1="268" x2="175" y2="271" stroke="#2c2420" strokeWidth="1" />
          <path d="M164 275 Q169 271, 175 272 Q181 271, 186 275" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="164" y1="275" x2="168" y2="297" stroke="#2c2420" strokeWidth="1.1" />
          <line x1="186" y1="275" x2="182" y2="297" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M168 279 Q172 282, 175 280 Q178 282, 182 279" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M168 297 Q175 300, 182 297" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          {/* Left arm relaxed */}
          <path d="M164 275 Q158 282, 156 290" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M156 290 Q155 294, 157 298" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          {/* Right arm toward Wenze */}
          <path d="M186 275 Q192 278, 196 282" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M196 282 Q198 286, 195 290" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <line x1="171" y1="297" x2="168" y2="320" stroke="#2c2420" strokeWidth="1.1" />
          <line x1="179" y1="297" x2="181" y2="320" stroke="#2c2420" strokeWidth="1.1" />

          {/* --- FIGURE 3: ZHONGQING (behind Wenze, teasing) --- */}
          <circle cx="238" cy="250" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M235 245 Q238 241, 241 245" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <line x1="238" y1="242" x2="238" y2="245" stroke="#2c2420" strokeWidth="0.7" />
          {/* Amused expression */}
          <path d="M236 250.5 Q238 251.5, 240 250.5" fill="none" stroke="#2c2420" strokeWidth="0.3" />
          <line x1="238" y1="255.5" x2="238" y2="258" stroke="#2c2420" strokeWidth="0.9" />
          <path d="M229 262 Q233 258, 238 260 Q243 258, 247 262" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <line x1="229" y1="262" x2="232" y2="284" stroke="#2c2420" strokeWidth="1" />
          <line x1="247" y1="262" x2="244" y2="284" stroke="#2c2420" strokeWidth="1" />
          <path d="M232 266 Q236 269, 238 267 Q240 269, 244 266" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          <path d="M232 284 Q238 286, 244 284" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          {/* Left arm pointing toward Wang Xun */}
          <path d="M229 262 Q218 266, 210 270" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <path d="M210 270 Q206 272, 203 275" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Right arm */}
          <path d="M247 262 Q252 270, 254 278" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <path d="M254 278 Q255 282, 252 286" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Legs (partially behind Wenze) */}
          <line x1="235" y1="284" x2="232" y2="316" stroke="#2c2420" strokeWidth="0.9" strokeDasharray="3,3" />
          <line x1="242" y1="284" x2="244" y2="316" stroke="#2c2420" strokeWidth="0.9" strokeDasharray="3,3" />

          {/* --- FIGURE 4: YUZI (right, looking up at lanterns, content) --- */}
          <circle cx="280" cy="255" r="6.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <path d="M277 249 Q280 245, 283 249" fill="none" stroke="#2c2420" strokeWidth="1" />
          <line x1="280" y1="246" x2="280" y2="249" stroke="#2c2420" strokeWidth="0.8" />
          {/* Looking up */}
          <path d="M278 254 Q280 255, 282 254" fill="none" stroke="#2c2420" strokeWidth="0.3" />
          <line x1="280" y1="261.5" x2="280" y2="265" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M268 269 Q274 264, 280 266 Q286 264, 292 269" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          <line x1="268" y1="269" x2="272" y2="293" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="292" y1="269" x2="288" y2="293" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M272 273 Q276 276, 280 274 Q284 276, 288 273" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <path d="M272 293 Q280 296, 288 293" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          {/* Left arm raised toward lantern */}
          <path d="M268 269 Q258 262, 248 256 Q242 252, 238 248" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M238 248 Q235 244, 233 240" fill="none" stroke="#2c2420" strokeWidth="1" />
          <path d="M264 270 Q260 266, 256 262" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          {/* Right arm relaxed */}
          <path d="M292 269 Q300 274, 304 282" fill="none" stroke="#2c2420" strokeWidth="1.1" />
          <path d="M304 282 Q305 286, 302 290" fill="none" stroke="#2c2420" strokeWidth="1" />
          <line x1="275" y1="293" x2="272" y2="318" stroke="#2c2420" strokeWidth="1.2" />
          <line x1="285" y1="293" x2="287" y2="318" stroke="#2c2420" strokeWidth="1.2" />

          {/* ===== FIGURE 5: PASSERBY (left edge, walking past) ===== */}
          <g opacity="0.3" filter="url(#c9-bleed)">
            <circle cx="55" cy="268" r="5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M48 275 Q52 271, 58 272 Q62 271, 66 275" fill="none" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="56" y1="275" x2="54" y2="295" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="62" y1="275" x2="63" y2="295" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* ===== BACKGROUND: FURTHER STALLS / BUILDINGS ===== */}
          <g opacity="0.2" filter="url(#c9-bleed)">
            {/* Stall on far left */}
            <rect x="8" y="225" width="40" height="25" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M5 225 L28 212 L52 225" fill="none" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="20" y1="225" x2="20" y2="250" stroke="#2c2420" strokeWidth="0.4" />
            {/* Stall on far right */}
            <rect x="450" y="222" width="45" height="28" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M447 222 L472 208 L498 222" fill="none" stroke="#2c2420" strokeWidth="0.7" />
            <line x1="472" y1="222" x2="472" y2="250" stroke="#2c2420" strokeWidth="0.4" />
          </g>

          {/* ===== WILLOW BRANCHES (right side) ===== */}
          <path d="M505 10 Q480 35, 470 80 Q465 110, 470 145" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M498 15 Q478 45, 474 85 Q471 115, 476 140" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          {/* Willow leaves */}
          <path d="M478 55 Q470 51, 464 57" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M473 75 Q466 71, 461 77" fill="none" stroke="#2c2420" strokeWidth="0.4" />
          <path d="M470 95 Q463 91, 459 97" fill="none" stroke="#2c2420" strokeWidth="0.3" />
          <path d="M472 115 Q465 111, 461 117" fill="none" stroke="#2c2420" strokeWidth="0.3" />

          {/* ===== GROUND DETAILS ===== */}
          <path d="M35 270 Q38 264, 40 270" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.5" />
          <path d="M490 310 Q493 305, 495 310" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />

          {/* ===== BIRDS IN SKY ===== */}
          <path d="M150 85 Q154 78, 158 82 Q162 76, 166 82" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
          <path d="M380 90 Q384 84, 388 88 Q392 82, 396 88" fill="none" stroke="#2c2420" strokeWidth="0.35" opacity="0.3" />

        </g>

        {/* ===== RED SEAL STAMP ===== */}
        <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
        <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">品</text>

        {/* ===== CALLIGRAPHY TITLE ===== */}
        <text x="488" y="200" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">品花宝鉴</text>
        <text x="502" y="200" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">陈森</text>
      </svg>
    </div>
  );
};
