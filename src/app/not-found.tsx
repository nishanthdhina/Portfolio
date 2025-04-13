'use client';

import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import '../styles/not-found.css';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-black to-blue-950 animate-gradient bg-[length:200%_200%]">
      <div className="text-center px-6 max-w-2xl mx-auto">
        <div className="relative">
          <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl font-bold text-white mb-4 glitch-text" data-text="404">404</h1>
          </div>
        </div>
        
        <h2 className="text-3xl font-medium text-white/90 mb-6">Page Not Found</h2>
        <p className="text-white/70 mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="relative inline-block group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Link 
            href="/" 
            className="relative flex items-center justify-center gap-2 bg-black px-8 py-4 rounded-lg leading-none text-white font-medium transition-all duration-300"
          >
            <FaHome className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 