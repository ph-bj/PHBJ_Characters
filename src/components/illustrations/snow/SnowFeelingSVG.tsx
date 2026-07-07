import React from 'react';

export function SnowFeelingSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
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
          <path d="M -50 80 Q 50 120 150 90 Q 250 140 350 70 L 450 100 L 450 -50 L -50 -50 Z" fill="#2c303a" opacity="0.15" filter="url(#snow-feeling-blur)" />
          <path d="M 0 50 Q 100 80 200 40 Q 300 100 400 30 L 400 -50 L 0 -50 Z" fill="#2c303a" opacity="0.1" filter="url(#snow-feeling-blur)" />
          
          {/* "Jade flowers brewing" abstract shapes */}
          <path d="M 100 100 Q 150 150 200 110" stroke="#1f2329" fill="none" opacity="0.4" strokeWidth="1.5" />
          <path d="M 180 80 Q 230 120 280 70" stroke="#1f2329" fill="none" opacity="0.3" strokeWidth="1" />
          <path d="M 150 120 Q 200 180 250 130" stroke="#1f2329" fill="none" opacity="0.2" strokeWidth="0.5" />
          
          {/* Swirling winds cutting water into shapes */}
          <path d="M 50 160 Q 120 200 180 150" stroke="#1f2329" fill="none" opacity="0.2" strokeWidth="1" strokeDasharray="3,6" />
          <path d="M 220 180 Q 280 140 350 190" stroke="#1f2329" fill="none" opacity="0.2" strokeWidth="1" strokeDasharray="2,8" />
          
          {/* One or two faint white spots - the first hint of snow */}
          <circle cx="200" cy="100" r="1.5" fill="#f8f9fa" />
          <circle cx="160" cy="140" r="1" fill="#f8f9fa" />
          <circle cx="250" cy="120" r="1" fill="#f8f9fa" />
        </g>
      </svg>
    </div>
  );
}
