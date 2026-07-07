import React from 'react';

export const SnowPoemsIllustration: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center" style={{ backgroundColor: '#fdfdfb' }}>
      <svg
        viewBox="0 0 520 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: '320px' }}
      >
        <defs>
          {/* Subtle sky wash to make the snow pop out (leaving white space for snow) */}
          <linearGradient id="skyWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.0" />
          </linearGradient>

          {/* Ink wash for shaded parts of the snow mountains */}
          <linearGradient id="mountainShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.02" />
          </linearGradient>

          {/* Warm lantern glow */}
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>

          {/* Pale plum-blossom tint */}
          <radialGradient id="mlPlumTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.1" />
          </radialGradient>

          {/* Brush wobble - makes strokes waver like a hand-held brush */}
          <filter id="inkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
          </filter>

          {/* Ink bleed - soft feathered edges */}
          <filter id="mlBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="4" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="7" />
          </filter>
        </defs>

        {/* ===== BACKGROUND ===== */}
        {/* Sky wash to contrast with snow */}
        <rect x="3" y="3" width="514" height="200" fill="url(#skyWash)" />
        
        {/* Outer frame */}
        <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
        <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

        {/* ===== LAYERED INK WASHES ===== */}
        <g filter="url(#mlBleed)">
          {/* Distant mountain shadow base */}
          <path d="M12 180 Q80 120, 150 160 Q220 120, 300 170 Q380 130, 460 160 Q490 145, 515 170 L515 220 L12 220 Z" fill="#2c2420" opacity="0.06" />
          
          {/* Mid-ground snow bank shadows */}
          <path d="M12 250 Q100 230, 200 260 Q350 240, 515 270 L515 320 L12 320 Z" fill="#2c2420" opacity="0.08" />

          {/* Pagoda foundation shadow */}
          <ellipse cx="400" cy="220" rx="45" ry="15" fill="#2c2420" opacity="0.1" />
          
          {/* Plum tree base shadow */}
          <ellipse cx="80" cy="350" rx="50" ry="20" fill="#2c2420" opacity="0.12" />
        </g>

        {/* All linework passes through the brush-wobble filter */}
        <g filter="url(#inkTexture)">

          {/* ===== SNOW MOUNTAIN (雪山) ===== */}
          {/* Distant mountain outlines (left uncolored inside to represent snow) */}
          <path d="M12 180 Q80 120, 150 160 Q220 120, 300 170 Q380 130, 460 160 Q490 145, 515 170" fill="none" stroke="#2c2420" strokeWidth="1" strokeDasharray="5,3" />
          <path d="M50 145 Q80 130, 110 150" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.6" />
          <path d="M230 140 Q260 135, 280 155" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.6" />
          <path d="M390 145 Q420 140, 440 155" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.6" />
          
          {/* Mountain shading (皴法 - cun fa) focused on lower crevices */}
          <path d="M130 155 Q140 170, 135 180" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.5" />
          <path d="M280 160 Q290 170, 285 185" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.5" />
          <path d="M440 155 Q445 165, 440 175" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.5" />

          {/* ===== SNOW PAGODA (雪塔) ===== */}
          <g transform="translate(370, 60)">
            {/* Top spire */}
            <line x1="30" y1="20" x2="30" y2="40" stroke="#2c2420" strokeWidth="1.5" />
            <circle cx="30" cy="20" r="2" fill="#2c2420" />
            <circle cx="30" cy="26" r="2.5" fill="#2c2420" />
            <circle cx="30" cy="32" r="3" fill="#2c2420" />
            
            {/* Tier 5 */}
            <path d="M12 45 L48 45 L30 35 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" /> {/* Snow roof */}
            <rect x="22" y="45" width="16" height="12" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="30" y1="45" x2="30" y2="57" stroke="#2c2420" strokeWidth="0.8" />
            
            {/* Tier 4 */}
            <path d="M6 62 L54 62 L30 52 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            <rect x="20" y="62" width="20" height="14" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="30" y1="62" x2="30" y2="76" stroke="#2c2420" strokeWidth="0.8" />

            {/* Tier 3 */}
            <path d="M0 82 L60 82 L30 70 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            <rect x="16" y="82" width="28" height="18" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="30" y1="82" x2="30" y2="100" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="22" y1="82" x2="22" y2="100" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="38" y1="82" x2="38" y2="100" stroke="#2c2420" strokeWidth="0.6" />

            {/* Tier 2 */}
            <path d="M-6 108 L66 108 L30 94 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            <rect x="12" y="108" width="36" height="22" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="30" y1="108" x2="30" y2="130" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="20" y1="108" x2="20" y2="130" stroke="#2c2420" strokeWidth="0.6" />
            <line x1="40" y1="108" x2="40" y2="130" stroke="#2c2420" strokeWidth="0.6" />

            {/* Tier 1 (Base) */}
            <path d="M-12 140 L72 140 L30 124 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            <rect x="8" y="140" width="44" height="28" fill="none" stroke="#2c2420" strokeWidth="1.5" />
            {/* Doorway */}
            <path d="M22 168 L22 152 A8 8 0 0 1 38 152 L38 168" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="16" y1="140" x2="16" y2="168" stroke="#2c2420" strokeWidth="0.8" />
            <line x1="44" y1="140" x2="44" y2="168" stroke="#2c2420" strokeWidth="0.8" />
            
            {/* Foundation */}
            <rect x="-4" y="168" width="68" height="6" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          </g>

          {/* ===== SNOW LANTERN (雪灯) ===== */}
          <g transform="translate(320, 180)">
            {/* Glow */}
            <circle cx="10" cy="18" r="25" fill="url(#lanternGlow)" />
            {/* Lantern frame */}
            <line x1="10" y1="0" x2="10" y2="8" stroke="#2c2420" strokeWidth="1" />
            <path d="M2 8 L18 8 L14 12 L6 12 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
            <rect x="4" y="12" width="12" height="14" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            <line x1="10" y1="12" x2="10" y2="26" stroke="#2c2420" strokeWidth="0.5" />
            <path d="M4 26 L16 26 L12 29 L8 29 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
            {/* Tassel */}
            <line x1="10" y1="29" x2="10" y2="38" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M8 38 L12 38 L14 45 L6 45 Z" fill="none" stroke="#2c2420" strokeWidth="0.5" />
          </g>

          {/* Branch holding the lantern */}
          <path d="M450 160 Q380 150, 330 180" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          {/* Snow on branch */}
          <path d="M445 158 Q380 148, 335 178" fill="none" stroke="#2c2420" strokeWidth="0.6" strokeDasharray="2,3" />

          {/* ===== SNOW CAT (雪猫) ===== */}
          <g transform="translate(250, 260)">
            {/* Rock base */}
            <path d="M-20 20 Q10 10, 40 25 Q30 35, 0 35 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <path d="M0 25 Q15 20, 25 28" fill="none" stroke="#2c2420" strokeWidth="0.5" />
            
            {/* Cat body (curled up, mostly white/empty space, just outline) */}
            <path d="M0 15 C -5 5, 10 -5, 20 0 C 30 5, 32 15, 25 20 C 15 25, 5 22, 0 15 Z" fill="#fdfdfb" stroke="#2c2420" strokeWidth="1" />
            {/* Cat ears */}
            <path d="M2 3 L5 -2 L8 2" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            <path d="M12 1 L16 -3 L18 2" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            {/* Cat tail curled around */}
            <path d="M23 18 C 30 18, 35 10, 25 6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            {/* Cat closed eyes (sleeping) */}
            <path d="M6 7 Q8 9, 10 7" fill="none" stroke="#2c2420" strokeWidth="0.6" />
            <path d="M14 8 Q16 10, 18 8" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* ===== SNOW PLUM (寒梅/雪屏) ===== */}
          {/* Gnarled plum trunk */}
          <path d="M20 380 Q40 330, 80 270 Q110 220, 170 170" fill="none" stroke="#2c2420" strokeWidth="3" />
          <path d="M15 380 Q35 330, 75 270 Q105 220, 165 170" fill="none" stroke="#2c2420" strokeWidth="1" />
          
          {/* Main branches */}
          <path d="M80 270 Q130 250, 190 260" fill="none" stroke="#2c2420" strokeWidth="2" />
          <path d="M110 220 Q150 180, 220 185" fill="none" stroke="#2c2420" strokeWidth="1.5" />
          <path d="M170 170 Q210 140, 260 150" fill="none" stroke="#2c2420" strokeWidth="1.2" />
          <path d="M140 200 Q120 160, 90 140" fill="none" stroke="#2c2420" strokeWidth="1" />

          {/* Twigs */}
          <path d="M190 260 Q210 270, 230 265" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M220 185 Q240 180, 255 195" fill="none" stroke="#2c2420" strokeWidth="0.8" />
          <path d="M260 150 Q280 145, 290 160" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          <path d="M90 140 Q80 120, 95 110" fill="none" stroke="#2c2420" strokeWidth="0.6" />

          {/* Snow resting on branches (broken white paths slightly above the branches) */}
          <path d="M80 267 Q130 247, 190 257" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,4" />
          <path d="M110 217 Q150 177, 220 182" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="3,4" />
          <path d="M170 167 Q210 137, 260 147" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,3" />

          {/* Plum Blossoms */}
          {/* Helper function not possible in SVG directly, so manually placing some blossoms */}
          <g>
            <circle cx="190" cy="260" r="5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="190" cy="260" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
            
            <circle cx="205" cy="256" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="205" cy="256" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            <circle cx="220" cy="185" r="5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="220" cy="185" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            <circle cx="240" cy="182" r="4" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="240" cy="182" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />

            <circle cx="260" cy="150" r="4.5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="260" cy="150" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />

            <circle cx="275" cy="148" r="3.5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="275" cy="148" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />

            <circle cx="90" cy="140" r="5" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="90" cy="140" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />

            <circle cx="105" cy="130" r="4" fill="url(#mlPlumTint)" stroke="none" />
            <circle cx="105" cy="130" r="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
          </g>

          {/* Falling snow dots */}
          <circle cx="50" cy="50" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="120" cy="30" r="2" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="200" cy="80" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="280" cy="40" r="2" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="350" cy="100" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="450" cy="60" r="2" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="150" cy="120" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="250" cy="180" r="2" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="100" cy="200" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="320" cy="140" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="480" cy="120" r="2" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />
          <circle cx="380" cy="260" r="1.5" fill="#fdfdfb" stroke="#2c2420" strokeWidth="0.3" />

          {/* ===== CALLIGRAPHY (题字) ===== */}
          {/* Title: 雪窗八咏 (Eight Verses on the Snow Window) & 咏雪四题 (Four Snow Topics) */}
          <text x="488" y="40" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.85">雪窗八咏</text>
          
          {/* Snippet from Snow Pagoda (雪塔) */}
          <text x="465" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">花女近梵宫</text>
          <text x="453" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">宝积半天工</text>

          {/* Snippet from Snow Cat (雪猫) */}
          <text x="441" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">手谈枕两奁</text>
          <text x="429" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">玉奴伏雕檐</text>

          {/* Snippet from Ziyu's Snow Feeling (雪情) */}
          <text x="35" y="40" textAnchor="middle" fill="#2c2420" fontSize="12" fontFamily="serif" writingMode="vertical-rl" opacity="0.85">雪情</text>
          <text x="20" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">未花先剪水</text>
          <text x="8" y="40" textAnchor="middle" fill="#2c2420" fontSize="8" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">已絮欲添风</text>

        </g>

        {/* ===== RED SEAL STAMP (印章) ===== */}
        <rect x="475" y="110" width="16" height="16" fill="none" stroke="#8b2500" strokeWidth="1.2" rx="1" />
        <text x="483" y="121" textAnchor="middle" fill="#8b2500" fontSize="9" fontFamily="serif" fontWeight="bold">梅</text>

      </svg>
    </div>
  );
};
