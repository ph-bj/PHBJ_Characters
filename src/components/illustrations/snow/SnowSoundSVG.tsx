import React from 'react';

export function SnowSoundSVG() {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center my-6 opacity-90 transition-opacity hover:opacity-100 max-w-md mx-auto">
      <svg viewBox="0 0 400 240" className="w-full" style={{ maxHeight: '320px' }}>
        <defs>
          <filter id="snow-sound-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-sound-wobble)" stroke="#2c2420" fill="none">
          {/* Window Frame */}
          <path d="M 300 20 L 300 180" strokeWidth="2" opacity="0.5" />
          <path d="M 300 100 L 400 100" strokeWidth="2" opacity="0.3" />
          
          {/* Bamboo leaves outside window */}
          <path d="M 150 150 Q 200 140 220 100" strokeWidth="1.5" opacity="0.8" />
          <path d="M 180 135 Q 220 120 240 80" strokeWidth="1" opacity="0.6" />
          
          {/* Leaves */}
          <path d="M 220 100 Q 240 105 250 120 Q 230 115 220 100 Z" fill="#2c2420" opacity="0.7" />
          <path d="M 220 100 Q 235 90 240 70 Q 225 80 220 100 Z" fill="#2c2420" opacity="0.7" />
          <path d="M 240 80 Q 260 85 270 100 Q 250 95 240 80 Z" fill="#2c2420" opacity="0.5" />
          
          {/* Snow pellets bouncing / ricocheting off bamboo */}
          <circle cx="230" cy="90" r="1.5" fill="#f8f9fa" />
          <circle cx="240" cy="110" r="1.5" fill="#f8f9fa" />
          <circle cx="250" cy="95" r="1.5" fill="#f8f9fa" />
          <path d="M 230 90 L 225 85" strokeWidth="0.5" opacity="0.5" />
          <path d="M 240 110 L 235 115" strokeWidth="0.5" opacity="0.5" />
          <path d="M 250 95 L 255 90" strokeWidth="0.5" opacity="0.5" />
          
          {/* Gusting wind carrying snow */}
          <path d="M 50 120 Q 150 100 200 140" strokeWidth="0.5" strokeDasharray="3,5" opacity="0.4" />
          <path d="M 80 80 Q 180 60 250 120" strokeWidth="0.5" strokeDasharray="4,6" opacity="0.3" />
          
          {/* Lots of tiny snow granules */}
          <circle cx="100" cy="70" r="1" fill="#2c2420" opacity="0.6" />
          <circle cx="120" cy="90" r="1" fill="#2c2420" opacity="0.6" />
          <circle cx="180" cy="110" r="1" fill="#2c2420" opacity="0.6" />
          <circle cx="210" cy="60" r="1" fill="#2c2420" opacity="0.6" />
          <circle cx="150" cy="50" r="1" fill="#2c2420" opacity="0.6" />
          <circle cx="80" cy="130" r="1" fill="#2c2420" opacity="0.6" />
        </g>
      
      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="365" y="205" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="376" y="220" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">声</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="382" y="30" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">雪声</text>
    </svg>
    </div>
  );
}
