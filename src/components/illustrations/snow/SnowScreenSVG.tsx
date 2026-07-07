import React from 'react';

export function SnowScreenSVG() {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center my-6 opacity-90 transition-opacity hover:opacity-100 max-w-md mx-auto">
      <svg viewBox="0 0 400 240" className="w-full" style={{ maxHeight: '320px' }}>
        <defs>
          <filter id="snow-screen-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-screen-wobble)" stroke="#2c2420" strokeWidth="1.5" fill="none">
          {/* Floor / Snow base */}
          <path d="M 50 200 L 350 200" opacity="0.3" strokeDasharray="5,5" />
          
          {/* Folding Screen Panels */}
          {/* Left panel */}
          <path d="M 80 180 L 140 190 L 140 50 L 80 40 Z" fill="#f8f9fa" />
          <path d="M 85 175 L 135 185 L 135 55 L 85 45 Z" />
          {/* Center panel */}
          <path d="M 140 190 L 260 190 L 260 50 L 140 50 Z" fill="#f8f9fa" />
          <path d="M 145 185 L 255 185 L 255 55 L 145 55 Z" />
          {/* Right panel */}
          <path d="M 260 190 L 320 180 L 320 40 L 260 50 Z" fill="#f8f9fa" />
          <path d="M 265 185 L 315 175 L 315 45 L 265 55 Z" />
          
          {/* Plum branch painted on the screen */}
          <path d="M 180 150 Q 200 120 230 100 Q 250 80 280 90" strokeWidth="2.5" />
          <path d="M 210 110 Q 200 90 190 80" strokeWidth="1.5" />
          
          {/* Snow accumulating on top of the screen */}
          <path d="M 75 40 Q 110 30 140 50 Q 200 45 260 50 Q 290 30 325 40 Q 330 50 320 55" fill="#f8f9fa" strokeWidth="1" />
        </g>
      
      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="365" y="205" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="376" y="220" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">屏</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="382" y="30" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">雪屏</text>
    </svg>
    </div>
  );
}
