import React from 'react';

export function SnowShadowSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-shadow-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        {/* Dim water reflecting empty whiteness */}
        <path d="M 50 180 Q 150 190 250 170 Q 300 180 350 175" stroke="#1f2329" fill="none" opacity="0.1" strokeWidth="1" />
        <path d="M 70 200 Q 170 210 270 190 Q 320 200 370 195" stroke="#1f2329" fill="none" opacity="0.1" strokeWidth="1" />
        
        <g filter="url(#snow-shadow-wobble)" stroke="#1f2329" fill="none">
          {/* Jade balustrade trace */}
          <path d="M 280 20 L 280 120 M 340 20 L 340 120" opacity="0.2" strokeWidth="2" />
          <path d="M 260 80 L 360 80" opacity="0.2" strokeWidth="2" />
          
          {/* Faint shadows of plum branches and flying snowflakes */}
          <path d="M 50 150 Q 100 100 150 120 Q 200 140 250 80" strokeWidth="1.5" opacity="0.25" />
          <path d="M 100 125 Q 120 80 160 90" strokeWidth="1" opacity="0.2" />
          <path d="M 150 120 Q 180 90 220 110" strokeWidth="1" opacity="0.2" />
          
          {/* Six-petalled snow shadows */}
          <path d="M 180 50 L 186 56 M 186 50 L 180 56 M 183 48 L 183 58" opacity="0.15" />
          <path d="M 100 70 L 106 76 M 106 70 L 100 76 M 103 68 L 103 78" opacity="0.15" />
          <path d="M 220 140 L 226 146 M 226 140 L 220 146 M 223 138 L 223 148" opacity="0.15" />
          
          {/* Faint red dust / soft redness */}
          <circle cx="160" cy="90" r="3" fill="#a03030" stroke="none" opacity="0.15" />
          <circle cx="220" cy="110" r="3" fill="#a03030" stroke="none" opacity="0.15" />
          <circle cx="250" cy="80" r="3" fill="#a03030" stroke="none" opacity="0.15" />
        </g>
      </svg>
    </div>
  );
}
