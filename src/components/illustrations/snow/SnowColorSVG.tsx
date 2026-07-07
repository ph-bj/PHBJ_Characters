import React from 'react';

export function SnowColorSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-color-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="snow-color-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        {/* The dazzling silver sea / pale moon (mostly empty space) */}
        
        {/* Soft pale moon in the endless haze */}
        <circle cx="300" cy="80" r="40" fill="#f8f9fa" filter="url(#snow-color-glow)" />
        <circle cx="300" cy="80" r="30" fill="#f8f9fa" opacity="0.8" />
        
        <g filter="url(#snow-color-wobble)" stroke="#1f2329" fill="none">
          {/* Extremely faint outline of the Mountain of Assembled Jade */}
          <path d="M 0 200 L 100 150 L 200 180 L 300 120 L 400 220" strokeWidth="1" opacity="0.15" />
          <path d="M 50 240 L 150 180 L 250 220" strokeWidth="1" opacity="0.1" />
          
          {/* Subtle hint of pear-blossom cloud or plantain leaf */}
          <path d="M 50 150 Q 80 130 110 160 Q 70 180 50 150 Z" fill="#2c303a" opacity="0.05" />
          <path d="M 150 200 Q 180 190 200 210 Q 170 230 150 200 Z" fill="#2c303a" opacity="0.05" />
          
          {/* A few minimal dots representing ice-plum fragrance */}
          <circle cx="100" cy="180" r="1.5" fill="#1f2329" opacity="0.2" />
          <circle cx="110" cy="175" r="1" fill="#1f2329" opacity="0.2" />
          <circle cx="220" cy="150" r="1.5" fill="#1f2329" opacity="0.15" />
        </g>
      </svg>
    </div>
  );
}
