import React from 'react';

export function SnowBeautySVG() {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center my-6 opacity-90 transition-opacity hover:opacity-100 max-w-md mx-auto">
      <svg viewBox="0 0 400 240" className="w-full" style={{ maxHeight: '320px' }}>
        <defs>
          <filter id="snow-beauty-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-beauty-wobble)" stroke="#2c2420" fill="none">
          {/* Ground */}
          <path d="M 100 210 L 300 210" opacity="0.4" strokeDasharray="3,3" />
          
          {/* Bamboo leaning in background */}
          <path d="M 230 210 Q 240 100 280 40" strokeWidth="2" opacity="0.6" />
          <path d="M 245 210 Q 255 100 295 45" strokeWidth="1.5" opacity="0.5" />
          {/* Bamboo leaves with snow */}
          <path d="M 260 100 Q 280 110 270 120 Z" fill="#f8f9fa" />
          <path d="M 270 80 Q 290 85 285 95 Z" fill="#f8f9fa" />
          <path d="M 240 150 Q 260 160 250 170 Z" fill="#f8f9fa" />
          
          {/* The Snow Beauty (elegant snow sculpture of a woman) */}
          <path d="M 180 210 Q 150 170 160 120 Q 170 80 190 80 Q 200 80 200 100 Q 210 150 200 210 Z" fill="#f8f9fa" strokeWidth="1.5" />
          <path d="M 160 120 Q 170 140 190 140" opacity="0.4" />
          <path d="M 175 100 Q 185 110 195 105" opacity="0.3" />
          
          {/* Slanting sun rays / dusk */}
          <path d="M 50 60 L 140 90" strokeDasharray="5,5" opacity="0.2" />
          <path d="M 50 80 L 150 110" strokeDasharray="5,5" opacity="0.2" />
          <path d="M 50 100 L 140 130" strokeDasharray="5,5" opacity="0.2" />
          
          {/* Drifting petals/snow (floss clinging to mud) */}
          <circle cx="140" cy="180" r="1.5" fill="#f8f9fa" stroke="none" />
          <circle cx="160" cy="205" r="1.5" fill="#f8f9fa" stroke="none" />
          <circle cx="210" cy="190" r="1.5" fill="#f8f9fa" stroke="none" />
          <path d="M 120 200 Q 130 190 140 200" opacity="0.3" />
        </g>
      
      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="365" y="205" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="376" y="220" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">美</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="382" y="30" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">雪美人</text>
    </svg>
    </div>
  );
}
