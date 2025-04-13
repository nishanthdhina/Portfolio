'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AnimationProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useEffect(() => {
    // Dynamic import AOS to avoid SSR issues
    const AOS = require('aos');
    
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return <>{children}</>;
} 