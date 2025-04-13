'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-blue-500">Hey there! I'm Nishanth</h3>
            
            <p className="text-lg text-white/80" data-aos="fade-up" data-aos-delay="100">
              I'm a 17-year-old entrepreneur and developer based in Germany. At ProVocis, I focus on building a platform that makes career growth smarter and more effective. My goal is to bridge the gap between AI and real-world communication, helping professionals improve their skills effortlessly.
            </p>
            
            <p className="text-lg text-white/80" data-aos="fade-up" data-aos-delay="200">
              My journey in technology began at an early age when I discovered my passion for coding. I've been building websites for clients since I was 14, expanding my skills in web development, UI/UX design, and entrepreneurship.
            </p>
            
            <p className="text-lg text-white/80" data-aos="fade-up" data-aos-delay="300">
              When I'm not coding or brainstorming new business ideas, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring young developers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4">
              <h4 className="font-semibold text-blue-500 mb-4" data-aos="fade-up">Experience</h4>
              
              <div className="bg-white/5 p-5 rounded-lg mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-md mr-4">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-lg">Co-Founder</h5>
                    <p className="text-blue-400">ProVocis · Full-time</p>
                    <p className="text-white/50 text-sm">Sep 2024 - Present · 8 mos</p>
                    <p className="text-white/50 text-sm mb-3">Munich, Bavaria, Germany · Hybrid</p>
                    <p className="text-white/70">
                      At ProVocis, I focus on building a platform that makes career growth smarter and more effective. My goal is to bridge the gap between AI and real-world communication, helping professionals improve their skills effortlessly.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full mr-2">
                        Start-up Leadership
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full">
                        Artificial Intelligence (AI)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-5 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-md mr-4">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-lg">Car Sales</h5>
                    <p className="text-blue-400">Mercedes-Benz Tech Innovation · Internship</p>
                    <p className="text-white/50 text-sm">Apr 2024 - May 2024 · 2 mos</p>
                    <p className="text-white/50 text-sm mb-3">Stuttgart, Baden-Württemberg, Germany · Hybrid</p>
                    <p className="text-white/70">
                      I was supervised by several staff members during my internship, I learned about different roles and positions and their responsibilities. I was involved in completing tasks related to data management and data programming.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full mr-2">
                        Microsoft Power BI
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full">
                        Python (Programming Language)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education Journey Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12" data-aos="fade-up">Education Journey</h3>
          
          <div className="relative">
            {/* Timeline Line - hidden on mobile, shown on md screens and up */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/50 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Ebor Gardens Primary School */}
              <div className="relative" data-aos="fade-up">
                {/* Timeline dot - hidden on mobile, centered on md screens */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-4 md:pl-0" data-aos="fade-right">
                    <h4 className="text-xl font-bold text-white">Ebor Gardens Primary School</h4>
                    <p className="text-blue-400 mt-1">2012 - 2016</p>
                    <p className="text-white/60 mt-2">United Kingdom</p>
                    <p className="text-white/70 mt-4">Started my educational journey at Ebor Gardens Primary School in the UK, where I developed foundational skills and discovered my early interests.</p>
                  </div>
                  <div className="md:pl-12 pl-4" data-aos="fade-left">
                    <div className="p-4 bg-white/5 rounded-lg h-full flex items-center">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-blue-500">Key Achievements</h5>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          <li>Early introduction to computers and technology</li>
                          <li>Participation in school science fairs</li>
                          <li>Development of creative thinking skills</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* APL Global School */}
              <div className="relative" data-aos="fade-up">
                {/* Timeline dot - hidden on mobile, centered on md screens */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-4 md:pl-0 md:order-1 order-1" data-aos="fade-right">
                    <div className="p-4 bg-white/5 rounded-lg h-full flex items-center">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-blue-500">Key Achievements</h5>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          <li>Started coding and building small web projects</li>
                          <li>Participated in regional tech competitions</li>
                          <li>Developed strong foundation in mathematics and sciences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-12 pl-4 md:order-2 order-2" data-aos="fade-left">
                    <h4 className="text-xl font-bold text-white">APL Global School</h4>
                    <p className="text-blue-400 mt-1">2016 - 2021</p>
                    <p className="text-white/60 mt-2">India</p>
                    <p className="text-white/70 mt-4">Continued my education at APL Global School in India, where I expanded my knowledge and developed a keen interest in technology and programming.</p>
                  </div>
                </div>
              </div>
              
              {/* Freie Waldorfschule */}
              <div className="relative" data-aos="fade-up">
                {/* Timeline dot - hidden on mobile, centered on md screens */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-4 md:pl-0" data-aos="fade-right">
                    <h4 className="text-xl font-bold text-white">Freie Waldorfschule</h4>
                    <p className="text-blue-400 mt-1">2021 - 2025</p>
                    <p className="text-white/60 mt-2">Germany</p>
                    <p className="text-white/70 mt-4">Currently attending Freie Waldorfschule in Germany, focusing on advanced studies while developing my entrepreneurial ventures.</p>
                  </div>
                  <div className="md:pl-12 pl-4" data-aos="fade-left">
                    <div className="p-4 bg-white/5 rounded-lg h-full flex items-center">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-blue-500">Key Achievements</h5>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          <li>Founded ProVocis while managing academic studies</li>
                          <li>Advanced programming skills in multiple languages</li>
                          <li>Participated in international tech conferences</li>
                          <li>Developed leadership skills through student initiatives</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mercedes-Benz Apprenticeship */}
              <div className="relative" data-aos="fade-up">
                {/* Timeline dot - hidden on mobile, centered on md screens */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 pl-4 md:pl-0 md:order-1 order-1" data-aos="fade-right">
                    <div className="p-4 bg-white/5 rounded-lg h-full flex items-center">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-blue-500">Expected Focus Areas</h5>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          <li>Automotive software development</li>
                          <li>Advanced engineering principles</li>
                          <li>Industry-standard project management</li>
                          <li>Innovation and R&D in transportation technology</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-12 pl-4 md:order-2 order-2" data-aos="fade-left">
                    <h4 className="text-xl font-bold text-white">Mercedes-Benz Apprenticeship</h4>
                    <p className="text-blue-400 mt-1">2025 - 2028</p>
                    <p className="text-white/60 mt-2">Germany</p>
                    <p className="text-white/70 mt-4">Planning to pursue a prestigious apprenticeship at Mercedes-Benz in Germany, where I'll combine my technical expertise with hands-on industry experience in automotive innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 