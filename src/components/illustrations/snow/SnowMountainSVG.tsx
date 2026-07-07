import React from 'react';

export function SnowMountainSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-mountain-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="snow-mountain-bleed" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComponentTransfer in="blur" result="glow">
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="snow-mountain-wash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c303a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2c303a" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <path d="M 0 0 L 400 0 L 400 150 Q 200 120 0 150 Z" fill="url(#snow-mountain-wash)" filter="url(#snow-mountain-bleed)" />
        
        <g filter="url(#snow-mountain-wobble)">
          <path d="M 50 240 L 120 100 L 160 140 L 220 50 L 280 160 L 360 120 L 400 240 Z" fill="#f8f9fa" stroke="#1f2329" strokeWidth="2" />
          <path d="M 120 100 L 140 160 L 100 240 M 220 50 L 230 130 L 270 240 M 280 160 L 290 200 M 160 140 L 170 240" stroke="#1f2329" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M 120 100 L 160 140 L 140 160 Z M 220 50 L 280 160 L 230 130 Z" fill="#2c303a" opacity="0.4" filter="url(#snow-mountain-bleed)" />
          <path d="M -20 240 L 40 160 L 80 240 M 320 240 L 370 170 L 420 240" fill="#e8eaed" stroke="#1f2329" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
