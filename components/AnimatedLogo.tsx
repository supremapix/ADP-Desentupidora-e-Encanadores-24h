
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative group cursor-pointer select-none">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl filter"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#e11d48', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9f1239', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="innerShadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.3" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Outer Ring Animation */}
        <circle 
          cx="100" cy="100" r="92" 
          fill="none" 
          stroke="#39847a" 
          strokeWidth="3" 
          strokeDasharray="10 5" 
          className="animate-[spin_20s_linear_infinite]" 
        />

        {/* Base Shield */}
        <circle cx="100" cy="100" r="85" fill="url(#logoGrad)" filter="url(#innerShadow)" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />

        {/* Icon: Modern Minimalist Truck/Hose */}
        <g transform="translate(45, 65) scale(0.7)" fill="white">
          <path d="M10 40h110v50H10z" opacity="0.9" />
          <path d="M120 40h30l15 25v25h-45z" />
          <rect x="20" y="25" width="90" height="10" rx="5" />
          <circle cx="45" cy="95" r="12" fill="white" stroke="#9f1239" strokeWidth="4" />
          <circle cx="130" cy="95" r="12" fill="white" stroke="#9f1239" strokeWidth="4" />
        </g>

        {/* Center Text */}
        <text 
          x="100" y="85" 
          fill="white" 
          fontSize="36" 
          fontWeight="900" 
          fontFamily="Arial Black, sans-serif" 
          textAnchor="middle" 
          className="tracking-tighter"
        >
          ADP
        </text>
        <text 
          x="100" y="105" 
          fill="rgba(255,255,255,0.8)" 
          fontSize="10" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif" 
          textAnchor="middle" 
          className="uppercase tracking-[0.2em]"
        >
          Saneamento 24h
        </text>

        {/* Bottom Contact Label */}
        <rect x="40" y="145" width="120" height="25" rx="12.5" fill="white" />
        <text 
          x="100" y="163" 
          fill="#9f1239" 
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
