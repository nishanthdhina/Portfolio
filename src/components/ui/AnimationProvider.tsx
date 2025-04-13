'use client';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

interface AnimationProviderProps {
  children: React.ReactNode;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Small delay to ensure DOM is fully hydrated before initializing animations
    const timer = setTimeout(async () => {
      // Use dynamic import instead of require
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: 'mobile', // Disable on mobile for better performance
        offset: 50,
      });
      
      // Add refresh on window resize to handle any layout shifts
      window.addEventListener('resize', () => {
        AOS.refresh();
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
} 