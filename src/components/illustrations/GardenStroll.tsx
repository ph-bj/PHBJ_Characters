import React from 'react';

interface IllustrationProps {
  lang: 'zh' | 'en';
}

export const GardenStroll: React.FC<IllustrationProps> = ({ lang }) => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
        <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
        <rect x="6" y="6" width="268" height="138" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
        <path d="M60 105 Q100 70, 140 105" fill="none" stroke="#2c2420" strokeWidth="1.5" />
        <path d="M65 105 Q100 75, 135 105" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="75" y1="95" x2="75" y2="90" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="90" y1="86" x2="90" y2="81" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="100" y1="83" x2="100" y2="78" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="110" y1="86" x2="110" y2="81" stroke="#2c2420" strokeWidth="0.5" />
        <line x1="125" y1="95" x2="125" y2="90" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M75 90 Q90 78, 100 78 Q110 78, 125 90" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="88" cy="72" r="4" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M86 68 Q88 65, 90 68" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <line x1="88" y1="76" x2="88" y2="77.5" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M82 80 Q85 77.5, 88 78 Q91 77.5, 94 80" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="82" y1="80" x2="83" y2="88" stroke="#2c2420" strokeWidth="0.9" />
        <line x1="94" y1="80" x2="93" y2="88" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M84 82 Q86 84, 88 83 Q90 84, 92 82" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M82 80 Q76 76, 72 72" fill="none" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M94 80 Q98 82, 100 84" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <circle cx="112" cy="74" r="4" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M110 70 Q112 67, 114 70" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <line x1="112" y1="78" x2="112" y2="79.5" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M106 82 Q109 79.5, 112 80 Q115 79.5, 118 82" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="106" y1="82" x2="107" y2="90" stroke="#2c2420" strokeWidth="0.9" />
        <line x1="118" y1="82" x2="117" y2="90" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M108 84 Q110 86, 112 85 Q114 86, 116 84" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M106 82 Q102 84, 100 87" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M118 82 Q122 84, 124 87" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M25 10 Q28 30, 26 55 Q24 70, 28 90" fill="none" stroke="#2c2420" strokeWidth="1.2" />
        <path d="M26 35 Q18 45, 15 60" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M27 45 Q20 55, 18 68" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M26 30 Q34 40, 36 55" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M27 40 Q35 50, 38 62" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M20 50 Q16 48, 13 52" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M18 60 Q14 58, 12 62" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M34 45 Q38 43, 40 47" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M40 115 Q70 110, 100 115 Q130 120, 160 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <ellipse cx="75" cy="118" rx="6" ry="2.5" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <ellipse cx="120" cy="116" rx="5" ry="2" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="95" y1="115" x2="95" y2="108" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M93 108 Q95 103, 97 108" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M200 85 Q195 70, 200 60 Q205 50, 210 55" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M200 60 Q210 55, 220 60" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <circle cx="210" cy="52" r="6" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <circle cx="210" cy="52" r="3" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <circle cx="210" cy="52" r="1" fill="#2c2420" />
        <circle cx="220" cy="58" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <circle cx="220" cy="58" r="2" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <circle cx="220" cy="58" r="0.8" fill="#2c2420" />
        <path d="M195 68 Q190 65, 188 70" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M205 65 Q210 62, 215 66" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="240" y1="35" x2="240" y2="75" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M232 45 L240 38 L248 45" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M234 55 L240 50 L246 55" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M235 65 L240 60 L245 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M231 45 Q229 43, 228 41" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M249 45 Q251 43, 252 41" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M170 25 Q173 20, 176 23 Q179 18, 182 23" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M185 20 Q187 16, 189 19 Q191 15, 193 19" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M10 130 Q70 125, 140 128 Q210 131, 270 127" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M180 100 Q182 95, 184 100" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M210 95 Q212 90, 214 95" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="250" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
        <text x="257" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">园</text>
      </svg>
      <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">
        {lang === 'zh' ? '第十五回 · 携手游园赏春光' : 'Ch. 15 · A Spring Outing, Arm in Arm Through the Garden'}
      </p>
    </div>
  );
};
