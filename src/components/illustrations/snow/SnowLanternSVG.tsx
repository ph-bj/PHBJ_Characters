import React from 'react';

export function SnowLanternSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-lantern-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <radialGradient id="lantern-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9b340" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d9b340" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        {/* Glow behind lantern */}
        <circle cx="200" cy="120" r="60" fill="url(#lantern-glow)" />
        
        <g filter="url(#snow-lantern-wobble)" stroke="#1f2329" fill="none">
          {/* Hanging rod */}
          <path d="M 200 0 L 200 50" strokeWidth="2" />
          
          {/* Lantern Canopy */}
          <path d="M 160 50 Q 200 30 240 50 L 250 60 L 150 60 Z" fill="#e8eaed" />
          {/* Snow on Canopy */}
          <path d="M 145 60 Q 155 50 170 55 Q 185 45 200 50 Q 215 45 230 55 Q 245 50 255 60 Z" fill="#f8f9fa" />
          
          {/* Lantern Body */}
          <path d="M 160 60 L 160 160 Q 200 170 240 160 L 240 60" fill="#faf6ee" />
          <path d="M 180 60 L 180 163 M 220 60 L 220 163" opacity="0.3" />
          <path d="M 160 110 L 240 110" opacity="0.3" />
          
          {/* Lantern Base */}
          <path d="M 170 163 L 230 163 L 220 175 L 180 175 Z" fill="#e8eaed" />
          <path d="M 200 175 L 200 210" strokeWidth="2" />
          
          {/* Tassels */}
          <path d="M 195 210 Q 190 230 185 240" />
          <path d="M 200 210 Q 200 230 200 240" />
          <path d="M 205 210 Q 210 230 215 240" />
          
          {/* Falling Snowflakes */}
          <circle cx="100" cy="80" r="1.5" fill="#1f2329" />
          <circle cx="120" cy="150" r="2" fill="#1f2329" />
          <circle cx="280" cy="90" r="1" fill="#1f2329" />
          <circle cx="300" cy="170" r="2" fill="#1f2329" />
          <circle cx="240" cy="40" r="1.5" fill="#1f2329" />
        </g>
      </svg>
    </div>
  );
}
