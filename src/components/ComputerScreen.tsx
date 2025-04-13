'use client';

import { useEffect, useState } from 'react';
import Terminal from './Terminal';

export default function ComputerScreen() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render the terminal on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Show placeholder of same dimensions during SSR to prevent layout shift
  if (!isMounted) {
    return (
      <div className="w-[500px] h-[350px] bg-gray-900/30 rounded-lg border border-gray-800/30 flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      {/* Terminal Container */}
      <div 
        className={`w-[500px] h-[350px] bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 transition-all duration-300 ${
          isHovered ? 'shadow-blue-500/20 border-blue-500/30 transform scale-[1.02]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Terminal App */}
        <Terminal />
      </div>
      
      {/* Terminal Glow Effect */}
      <div 
        className={`absolute inset-0 bg-blue-500/5 blur-xl rounded-lg transition-opacity duration-300 -z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      {/* Hint */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 -top-10 bg-black/80 text-white text-sm px-3 py-1 rounded-md transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Type <span className="text-yellow-400">help</span> to see available commands
      </div>
    </div>
  );
} 