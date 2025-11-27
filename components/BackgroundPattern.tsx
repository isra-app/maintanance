import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Right Blob */}
      <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-teal-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      
      {/* Bottom Left Blob */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-gray-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Center Blob */}
      <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-teal-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      {/* Subtle Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#158C6E" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};