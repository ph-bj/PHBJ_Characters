import React from 'react';

export function SnowFeelingSVG() {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center my-6 opacity-90 transition-opacity hover:opacity-100 max-w-md mx-auto">
      <svg viewBox="0 0 400 240" className="w-full" style={{ maxHeight: '320px' }}>
        <defs>
          <filter id="snow-feeling-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="snow-feeling-blur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-feeling-wobble)">
          {/* Heavy brooding clouds before snow (Snow Feeling) */}
          <path d="M -50 80 Q 50 120 150 90 Q 250 140 350 70 L 450 100 L 450 -50 L -50 -50 Z" fill="#2c2420" opacity="0.15" filter="url(#snow-feeling-blur)" />
          <path d="M 0 50 Q 100 80 200 40 Q 300 100 400 30 L 400 -50 L 0 -50 Z" fill="#2c2420" opacity="0.1" filter="url(#snow-feeling-blur)" />
          
          {/* "Jade flowers brewing" abstract shapes */}
          <path d="M 100 100 Q 150 150 200 110" stroke="#2c2420" fill="none" opacity="0.4" strokeWidth="1.5" />
          <path d="M 180 80 Q 230 120 280 70" stroke="#2c2420" fill="none" opacity="0.3" strokeWidth="1" />
          <path d="M 150 120 Q 200 180 250 130" stroke="#2c2420" fill="none" opacity="0.2" strokeWidth="0.5" />
          
          {/* Swirling winds cutting water into shapes */}
          <path d="M 50 160 Q 120 200 180 150" stroke="#2c2420" fill="none" opacity="0.2" strokeWidth="1" strokeDasharray="3,6" />
          <path d="M 220 180 Q 280 140 350 190" stroke="#2c2420" fill="none" opacity="0.2" strokeWidth="1" strokeDasharray="2,8" />
          
          {/* One or two faint white spots - the first hint of snow */}
          <circle cx="200" cy="100" r="1.5" fill="#f8f9fa" />
          <circle cx="160" cy="140" r="1" fill="#f8f9fa" />
          <circle cx="250" cy="120" r="1" fill="#f8f9fa" />
        </g>
      
      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="365" y="205" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="376" y="220" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">意</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="382" y="30" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">雪意</text>
    </svg>
    </div>
  );
}
