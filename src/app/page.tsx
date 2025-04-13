'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ComputerScreen from '../components/ComputerScreen';
import AnimationProvider from '@/components/ui/AnimationProvider';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Wait for client-side hydration to complete
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close menu when user scrolls (better mobile experience)
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);
  
  // If not loaded yet, show a minimal placeholder to prevent layout shift
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }
  
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        
        {/* Navigation */}
        <nav className="bg-black/80 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Nishanth<span className="text-blue-500">.</span>
                </Link>
              </div>
              
              {/* Desktop Navigation - hidden below lg breakpoint (1024px) */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-8">
                  <Link href="#about" className="text-white hover:text-blue-500 transition-colors duration-300">
                    About
                  </Link>
                  <Link href="#projects" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Projects
                  </Link>
                  <Link href="#skills" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Skills
                  </Link>
                  <Link href="#contact" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Contact
                  </Link>
                </div>
              </div>
              
              {/* Hamburger button - visible below lg breakpoint (1024px) */}
              <div className="flex lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-1.5 rounded-md text-white hover:text-blue-400 border border-transparent hover:border-blue-500/30 hover:bg-blue-900/20 focus:outline-none transition-all duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <span className="sr-only">Open main menu</span>
                  {!mobileMenuOpen ? (
                    <div className="w-5 h-4 flex flex-col justify-between">
                      <span className="w-full h-0.5 bg-current rounded-lg transform transition-all duration-300"></span>
                      <span className="w-3/4 h-0.5 bg-current rounded-lg transform transition-all duration-300 ml-auto"></span>
                      <span className="w-full h-0.5 bg-current rounded-lg transform transition-all duration-300"></span>
                    </div>
                  ) : (
                    <div className="w-5 h-4 flex flex-col justify-between">
                      <span className="w-full h-0.5 bg-blue-400 rounded-lg transform transition-all duration-300 rotate-45 translate-y-1.5"></span>
                      <span className="w-full h-0.5 bg-blue-400 rounded-lg transform transition-all duration-300 opacity-0"></span>
                      <span className="w-full h-0.5 bg-blue-400 rounded-lg transform transition-all duration-300 -rotate-45 -translate-y-1.5"></span>
                    </div>
                  )}
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div ref={menuRef} className="lg:hidden border-t border-white/10 mt-2 py-4 animate-fadeIn bg-black/95 backdrop-blur-sm shadow-lg shadow-blue-900/10">
                <div className="flex flex-col space-y-3 px-4">
                  <Link 
                    href="#about" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-white/5 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-3 rounded-full"></span>
                    About
                  </Link>
                  <Link 
                    href="#projects" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-white/5 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-3 rounded-full"></span>
                    Projects
                  </Link>
                  <Link 
                    href="#skills" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-white/5 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-3 rounded-full"></span>
                    Skills
                  </Link>
                  <Link 
                    href="#contact" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-white/5 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-3 rounded-full"></span>
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-blue-900/20 to-black">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Text content */}
              <div data-aos="fade-right" data-aos-delay="200">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 rounded-full px-4 py-1.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>
                    <span className="text-blue-400 font-medium text-sm">Available for Work</span>
                  </div>
                  
                  <div>
                    <h3 className="text-blue-500 font-semibold tracking-wider text-xl mb-2">
                      Hello, I&apos;m
                    </h3>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                      Nishanth <span className="text-blue-400">Dhinakar</span>
                    </h1>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 my-6">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                      <span className="text-base sm:text-lg font-medium text-white/90">
                        CEO & Founder of <span className="text-blue-500">ProVocis</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                      <span className="text-base sm:text-lg text-white/80">17 years old</span>
                    </div>
                  </div>
                  
                  <div className="h-1 w-24 bg-blue-500"></div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 max-w-lg">
                    Creating digital experiences that make a difference
                  </h2>
                  
                  <p className="text-base sm:text-lg text-white/70 max-w-xl">
                    I am a driven and innovative developer passionate about crafting impactful digital solutions. Specializing in web development with a focus on cutting-edge AI integration, I transform ideas into elegant products that deliver meaningful user experiences.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link 
                      href="#projects" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30"
                    >
                      View My Work
                    </Link>
                    
                    <Link 
                      href="#contact" 
                      className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/30 font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-300"
                    >
                      Contact Me
                    </Link>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h3 className="text-sm uppercase text-white/50 tracking-wider mb-4">Connect with me</h3>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://instagram.com/nishanthdhina" target="_blank" rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      
                      <a href="https://tiktok.com/@nishanthdhina" target="_blank" rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.13 1.55.68 3.08 1.75 4.17A7.1 7.1 0 0 0 23 5.97v3.93c-1.4-.08-2.76-.4-4.03-.94a10 10 0 0 1-1.47-.84v8.37c0 4.1-3.14 7.5-7.26 7.5-1.47 0-2.85-.48-3.96-1.3a7.61 7.61 0 0 1-3.35-6.2c0-4.14 3.36-7.5 7.5-7.5.21 0 .42.01.63.03V9.4c-.21-.03-.42-.05-.63-.05A4.13 4.13 0 0 0 6.5 13.5c0 1.1.44 2.1 1.15 2.82A4.1 4.1 0 0 0 10.5 17.5c2.3 0 4.17-1.86 4.17-4.15V0h-2.14z" />
                        </svg>
                      </a>
                      
                      <a href="https://linkedin.com/in/nishanthdhina" target="_blank" rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      
                      <a href="https://github.com/nishanthdhina" target="_blank" rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      
                      <a href="https://twitter.com/nishanthdhin4" target="_blank" rel="noopener noreferrer" 
                        className="bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Interactive Terminal */}
              <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="400">
                {/* Terminal (visible only on large screens) */}
                <div className="hidden lg:flex justify-center items-center">
                  <ComputerScreen />
                </div>
                
                {/* Terminal visible on mobile as well (replaces profile image) */}
                <div className="lg:hidden">
                  <ComputerScreen />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add the component sections with AOS animations */}
        <div data-aos="fade-up">
          <About />
        </div>
        
        <div data-aos="fade-up">
          <Projects />
        </div>
        
        <div data-aos="fade-up">
          <Skills />
        </div>
        
        <div data-aos="fade-up">
          <Contact />
        </div>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0" data-aos="fade-right">
                <Link href="/" className="text-2xl font-bold text-white">
                  Nishanth<span className="text-blue-500">.</span>
                </Link>
                <p className="text-white/50 mt-2">Creating digital experiences that make a difference</p>
              </div>
              
              <div className="flex flex-col items-center md:items-end" data-aos="fade-left">
                <div className="flex space-x-6 mb-4">
                  <a href="https://linkedin.com/in/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-white/50 text-sm">© {new Date().getFullYear()} Nishanth Dhina. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AnimationProvider>
  );
}
