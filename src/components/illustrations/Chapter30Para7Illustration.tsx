import React from "react";

/**
 * A highly detailed SVG inspired by `MainInkLandscape`.
 * Visualizes paragraph 7 of Chapter 30: winding pathways, Jade Belt River
 * with six bends and six bridges, long corridors, pavilions leaning against
 * yellow stone mountains, intricately hollowed Taihu stones, twisting pines,
 * tall bamboo, small boats moored at the shore, and lush vegetation.
 */
export const Chapter30Para7Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '360px' }}
      >
        <defs>
          <linearGradient id="c30-ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="waterWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
          </linearGradient>
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

        {/* ===== LAYERED INK WASHES ===== */}
        <g filter="url(#mlBleed)">
          {/* Tall yellow stone mountains wash */}
          <path d="M15 180 Q40 90, 90 60 Q140 30, 190 70 Q240 120, 160 240 L15 240 Z" fill="#2c2420" opacity="0.12" />
          <path d="M360 80 Q420 40, 480 90 Q510 130, 490 220 L360 220 Z" fill="#2c2420" opacity="0.1" />
          
          {/* Taihu stones wash */}
          <ellipse cx="380" cy="240" rx="45" ry="35" fill="#2c2420" opacity="0.15" />
          <ellipse cx="440" cy="260" rx="35" ry="25" fill="#2c2420" opacity="0.1" />

          {/* Jade belt river wash */}
          <path d="M12 280 Q80 250, 140 290 T270 270 T390 310 T508 290 L508 380 L12 380 Z" fill="url(#waterWash)" opacity="0.5" />
          
          {/* Trees / Bamboo wash */}
          <ellipse cx="80" cy="200" rx="35" ry="25" fill="#2c2420" opacity="0.1" />
          <ellipse cx="470" cy="180" rx="25" ry="45" fill="#2c2420" opacity="0.08" />
        </g>

        {/* ===== LINEWORK ===== */}
        <g filter="url(#inkTexture)">
          
          {/* Yellow Stone Mountains (tall, stacked) */}
          <path d="M12 170 Q40 100, 90 60 Q140 20, 190 70 Q230 110, 180 200" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M350 120 Q410 40, 480 80 Q510 110, 490 190" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M40 120 Q70 80, 100 90" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M140 70 Q160 90, 150 120" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          
          {/* Moss & vines on mountains */}
          <path d="M70 70 Q80 85, 75 95" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
          <path d="M150 50 Q160 70, 155 85" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />
          <path d="M450 70 Q460 90, 455 110" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="1,2" />

          {/* Taihu Stones (intricately hollowed, exquisite) */}
          <path d="M340 260 Q330 220, 360 200 Q390 180, 420 210 Q450 190, 470 210 Q480 240, 450 270 Q420 280, 390 270 Q360 280, 340 260" fill="none" stroke="#2c2420" strokeWidth="1.3" />
          {/* Holes in Taihu stones */}
          <ellipse cx="370" cy="220" rx="8" ry="12" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <ellipse cx="400" cy="230" rx="6" ry="10" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <ellipse cx="440" cy="235" rx="5" ry="8" fill="none" stroke="#2c2420" strokeWidth="0.7" />
          <ellipse cx="380" cy="250" rx="4" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Pavilion leaning against the large mountain */}
          <g transform="translate(140, 120)">
            {/* Roof */}
            <path d="M0 35 L25 15 L50 35 L45 35 L25 20 L5 35 Z" fill="#2c2420" opacity="0.45" />
            <path d="M0 35 L25 15 L50 35" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            <path d="M-3 36 Q2 32, 6 28" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M53 36 Q48 32, 44 28" fill="none" stroke="#2c2420" strokeWidth="1" />
            {/* Pillars */}
            <line x1="10" y1="35" x2="10" y2="60" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="40" y1="35" x2="40" y2="60" stroke="#2c2420" strokeWidth="1.2" />
            {/* Platform / railing */}
            <line x1="5" y1="60" x2="45" y2="60" stroke="#2c2420" strokeWidth="1.5" />
            <line x1="10" y1="52" x2="40" y2="52" stroke="#2c2420" strokeWidth="0.8" />
          </g>

          {/* Long Corridors & Winding Pavilions (shielding and complementing) */}
          <g transform="translate(40, 240)">
            <path d="M0 10 L80 0 L120 15 L180 5" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M0 15 L80 5 L120 20 L180 10" fill="none" stroke="#2c2420" strokeWidth="1" />
            {/* Pillars */}
            <line x1="10" y1="9" x2="10" y2="25" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="40" y1="5" x2="40" y2="21" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="80" y1="0" x2="80" y2="16" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="100" y1="8" x2="100" y2="24" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="120" y1="15" x2="120" y2="31" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="150" y1="10" x2="150" y2="26" stroke="#2c2420" strokeWidth="0.8" />
          </g>

          {/* Twisting Pines */}
          <g transform="translate(60, 180)">
            <path d="M25 60 Q30 30, 15 15 Q5 0, 25 -15" fill="none" stroke="#2c2420" strokeWidth="2" />
            <path d="M25 20 Q40 10, 50 25" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M50 25 Q58 18, 55 12" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M50 25 Q60 28, 55 35" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M25 -15 Q38 -20, 45 -5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M25 -15 Q10 -30, 18 -38" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M15 15 Q0 5, -5 20" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* Tall Bamboo */}
          <g transform="translate(460, 130)">
            <line x1="0" y1="-10" x2="10" y2="120" stroke="#2c2420" strokeWidth="1.5" />
            <line x1="-15" y1="10" x2="-5" y2="120" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="20" y1="-20" x2="25" y2="120" stroke="#2c2420" strokeWidth="1" />
            {/* Leaves */}
            <path d="M0 20 Q-15 15, -20 28" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M5 45 Q-10 40, -15 55" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M20 30 Q35 25, 40 38" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M22 60 Q38 55, 45 68" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M25 90 Q40 85, 45 98" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          </g>

          {/* Jade Belt River & Little Su Causeway (6 bends) */}
          <path d="M10 270 Q75 255, 140 280 T265 260 T390 290 T508 275" fill="none" stroke="#2c2420" strokeWidth="0.9" />
          <path d="M10 300 Q75 285, 140 310 T265 290 T390 320 T508 305" fill="none" stroke="#2c2420" strokeWidth="0.9" opacity="0.6" />
          
          {/* Water ripples */}
          <path d="M50 285 Q65 283, 80 285" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
          <path d="M180 295 Q195 293, 210 295" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
          <path d="M300 295 Q315 293, 330 295" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />
          <path d="M420 305 Q435 303, 450 305" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

          {/* Six Bridges across the bends */}
          {[
            { cx: 75, cy: 268 },
            { cx: 140, cy: 280 },
            { cx: 202, cy: 275 },
            { cx: 265, cy: 260 },
            { cx: 327, cy: 275 },
            { cx: 390, cy: 290 }
          ].map((pt, i) => (
            <g key={i}>
              <path d={`M${pt.cx - 20} ${pt.cy + 18} Q${pt.cx} ${pt.cy - 6}, ${pt.cx + 20} ${pt.cy + 18}`} fill="none" stroke="#2c2420" strokeWidth={1.5} />
              <rect x={pt.cx - 15} y={pt.cy + 15} width={30} height={4} rx={1} fill="#2c2420" opacity={0.15} />
              <line x1={pt.cx - 15} y1={pt.cy + 15} x2={pt.cx - 15} y2={pt.cy + 22} stroke="#2c2420" strokeWidth={0.8} />
              <line x1={pt.cx + 15} y1={pt.cy + 15} x2={pt.cx + 15} y2={pt.cy + 22} stroke="#2c2420" strokeWidth={0.8} />
            </g>
          ))}

          {/* Small Boats Moored (3-5 boats) */}
          <g transform="translate(100, 315)">
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="#2c2420" opacity="0.1" />
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M8 -2 L12 -10 L22 -10 L20 -2" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          </g>
          <g transform="translate(250, 320)">
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="#2c2420" opacity="0.1" />
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M8 -2 L12 -10 L22 -10 L20 -2" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          </g>
          <g transform="translate(380, 335)">
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="#2c2420" opacity="0.1" />
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
            <path d="M8 -2 L12 -10 L22 -10 L20 -2" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          </g>
          <g transform="translate(460, 310)">
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="#2c2420" opacity="0.1" />
            <path d="M0 0 Q12 -6, 28 0 Q35 6, 22 10 Q6 6, 0 0 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
          </g>

          {/* Winding pathways & ground texture */}
          <path d="M180 200 Q200 220, 190 240 Q170 260, 190 280" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="3,3" />
          <path d="M300 230 Q320 250, 310 270 Q290 285, 310 300" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="3,3" />
          <path d="M12 250 Q80 240, 150 255 Q200 265, 280 250 Q360 235, 440 260 Q480 270, 508 260" fill="none" stroke="#2c2420" strokeWidth="0.5" />

        </g>
        
        {/* Red Seal */}
        <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
        <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">景</text>
        
        {/* Calligraphy Title */}
        <text x="488" y="200" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">西园夜宴</text>
        <text x="502" y="200" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">西园</text>

      </svg>
    </div>
  );
};

export default Chapter30Para7Illustration;
