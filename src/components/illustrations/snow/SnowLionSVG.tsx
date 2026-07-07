import React from 'react';

export function SnowLionSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-lion-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-lion-wobble)" stroke="#1f2329" fill="none">
          {/* Base */}
          <path d="M 120 200 L 280 200" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />
          <path d="M 130 190 L 270 190 L 260 170 L 140 170 Z" fill="#e8eaed" opacity="0.3" />
          
          {/* Lion Body (rounded, puffy snow shapes) */}
          <path d="M 150 170 Q 140 120 180 110 Q 210 100 240 120 Q 260 140 250 170 Z" fill="#f8f9fa" strokeWidth="2" />
          
          {/* Head & Mane */}
          <path d="M 160 110 Q 150 70 180 60 Q 210 50 230 70 Q 250 90 230 120 Q 210 140 180 130 Q 150 130 160 110" fill="#f8f9fa" strokeWidth="2" />
          <path d="M 160 110 Q 150 90 170 80 Q 190 70 210 90 Q 230 110 210 130" opacity="0.5" />
          
          {/* Eyes / Face features loosely drawn */}
          <circle cx="180" cy="95" r="3" fill="#1f2329" />
          <circle cx="205" cy="95" r="3" fill="#1f2329" />
          <path d="M 185 105 Q 192 110 200 105" />
          
          {/* Swirling tufts of snow-fur */}
          <path d="M 150 80 Q 130 70 140 90" />
          <path d="M 230 70 Q 250 60 240 80" />
          <path d="M 160 150 Q 140 155 155 165" />
          <path d="M 240 140 Q 260 140 245 155" />
          
          {/* Red trees/finery mentioned in poem (subtle dot accents) */}
          <circle cx="160" cy="180" r="4" fill="#a03030" opacity="0.7" />
          <circle cx="230" cy="175" r="3" fill="#a03030" opacity="0.7" />
          <circle cx="200" cy="160" r="5" fill="#a03030" opacity="0.7" />
          <path d="M 160 180 L 150 200 M 230 175 L 240 200 M 200 160 L 205 170" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
