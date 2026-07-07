import React from 'react';

export function SnowScreenSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-screen-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-screen-wobble)" stroke="#1f2329" strokeWidth="1.5" fill="none">
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
      </svg>
    </div>
  );
}
