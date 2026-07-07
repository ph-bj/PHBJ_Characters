import React from 'react';

export function SnowBeautySVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-beauty-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-beauty-wobble)" stroke="#1f2329" fill="none">
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
      </svg>
    </div>
  );
}
