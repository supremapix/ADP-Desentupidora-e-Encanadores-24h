
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative group cursor-pointer select-none">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#39847a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2d6a62', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="1" k3="-1" result="glow" />
          </filter>
        </defs>

        {/* Dynamic Rotation Ring */}
        <circle 
          cx="100" cy="100" r="95" 
          fill="none" 
          stroke="#39847a" 
          strokeWidth="2" 
          strokeDasharray="15 10" 
          className="animate-[spin_30s_linear_infinite] opacity-30" 
        />

        {/* Main Shield Body */}
        <circle cx="100" cy="100" r="88" fill="url(#logoGrad)" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />

        {/* Central Graphic: Stylized Truck / Flow */}
        <g transform="translate(45, 75) scale(0.7)" fill="white">
          <path d="M10 20h110v50H10z" opacity="0.95" />
          <path d="M120 20h30l15 30v20h-45z" />
          <circle cx="45" cy="85" r="15" fill="#2d6a62" stroke="white" strokeWidth="4" />
          <circle cx="130" cy="85" r="15" fill="#2d6a62" stroke="white" strokeWidth="4" />
          <path d="M20 5h80v8H20z" opacity="0.6" />
        </g>

        {/* Typography */}
        <text 
          x="100" y="90" 
          fill="white" 
          fontSize="42" 
          fontWeight="900" 
          fontFamily="Arial Black, sans-serif" 
          textAnchor="middle" 
          className="tracking-tighter"
        >
          ADP
        </text>
        
        {/* Quality Seal Text */}
        <path id="curve" d="M 40,100 A 60,60 0 0,1 160,100" fill="transparent" />
        <text className="uppercase tracking-[0.4em] font-black fill-white/80" fontSize="8">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            QUALIDADE & CONFIANÇA
          </textPath>
        </text>

        {/* Bottom Contact Pill */}
        <rect x="35" y="145" width="130" height="28" rx="14" fill="white" />
        <text 
          x="100" y="164" 
          fill="#39847a" 
          fontSize="14" 
          fontWeight="900" 
          fontFamily="Arial, sans-serif" 
          textAnchor="middle"
        >
          (41) 3345-1194
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
