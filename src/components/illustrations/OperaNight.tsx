import React from 'react';

interface IllustrationProps {
  lang: 'zh' | 'en';
}

export const OperaNight: React.FC<IllustrationProps> = ({ lang }) => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
        <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
        <rect x="6" y="6" width="268" height="138" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
        <path d="M50 95 L230 95 L240 105 L40 105 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
        <line x1="50" y1="95" x2="50" y2="105" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="230" y1="95" x2="230" y2="105" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="90" y1="96" x2="85" y2="104" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="140" y1="96" x2="135" y2="104" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="190" y1="96" x2="185" y2="104" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M55 25 Q140 18, 225 25" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M55 25 L55 95" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M225 25 L225 95" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M55 25 Q60 35, 65 30 Q70 25, 75 32" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M225 25 Q220 35, 215 30 Q210 25, 205 32" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M55 25 Q140 15, 225 25" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" />
        <circle cx="140" cy="52" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
        <path d="M135 47 Q137 42, 140 44 Q143 42, 145 47" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M137 43 Q140 39, 143 43" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="140" y1="39" x2="140" y2="42" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="140" y1="57" x2="140" y2="59" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M130 62 Q135 59, 140 60 Q145 59, 150 62" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M130 62 Q128 75, 126 90" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M150 62 Q152 75, 154 90" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M133 70 Q140 73, 147 70" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M131 78 Q140 82, 149 78" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M130 62 Q120 58, 108 55 Q100 54, 95 58" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M95 58 Q90 62, 88 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M150 62 Q160 58, 172 55 Q180 54, 185 58" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M185 58 Q190 62, 192 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="72" cy="72" r="4" fill="none" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M70 68 Q72 66, 74 68" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="72" y1="76" x2="72" y2="77" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M66 79 Q69 77, 72 78 Q75 77, 78 79" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="66" y1="79" x2="67" y2="92" stroke="#2c2420" strokeWidth="0.7" />
        <line x1="78" y1="79" x2="77" y2="92" stroke="#2c2420" strokeWidth="0.7" />
        <ellipse cx="82" cy="82" rx="3" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.6" transform="rotate(-15 82 82)" />
        <line x1="82" y1="76" x2="82" y2="88" stroke="#2c2420" strokeWidth="0.3" />
        <circle cx="80" cy="118" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M78 115 Q80 113, 82 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M76 124 Q80 128, 84 124" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="110" cy="120" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M108 117 Q110 115, 112 117" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M106 126 Q110 130, 114 126" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="170" cy="120" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M168 117 Q170 115, 172 117" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M166 126 Q170 130, 174 126" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="200" cy="118" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M198 115 Q200 113, 202 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M196 124 Q200 128, 204 124" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="80" y1="10" x2="80" y2="22" stroke="#2c2420" strokeWidth="0.4" />
        <ellipse cx="80" cy="27" rx="4" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="200" y1="10" x2="200" y2="22" stroke="#2c2420" strokeWidth="0.4" />
        <ellipse cx="200" cy="27" rx="4" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <rect x="248" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
        <text x="255" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">戏</text>
      </svg>
      <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">
        {lang === 'zh' ? '第七回 · 梨园妙音惊满座' : 'Ch. 7 · A Dazzling Opera Stuns the Hall'}
      </p>
    </div>
  );
};
