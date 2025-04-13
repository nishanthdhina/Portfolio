'use client';

import React from 'react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ProVocis',
      description: 'A language learning app tailored for professionals, offering industry-specific vocabulary to help users improve communication and advance in their careers.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'OpenAI', 'Flutter'],
      link: 'https://provocis.com',
      imageAlt: 'ProVocis Mobile App',
      note: 'Mobile App'
    },
    {
      id: 2,
      title: 'RecEzy',
      description: 'An AI-powered recruitment solution that streamlines hiring processes with intelligent automation, advanced candidate sourcing, and seamless workflow management.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://www.recezy.ai',
      imageAlt: 'RecEzy Platform Screenshot',
      subtitle: 'AI Recruitment System'
    },
    {
      id: 3,
      title: 'AdevTech',
      description: 'A comprehensive SaaS platform offering cutting-edge HR solutions including AI-powered recruitment, performance management, and employee evaluation tools to transform HR operations.',
      technologies: ['HTML', 'CSS', 'GSAP'],
      link: 'https://www.adevtechcorp.com',
      imageAlt: 'AdevTech Platform Screenshot',
      subtitle: 'HR SaaS Solutions'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute h-96 w-96 bg-blue-500/5 rounded-full blur-3xl -top-20 -right-20"></div>
        <div className="absolute h-64 w-64 bg-indigo-500/5 rounded-full blur-2xl bottom-40 left-1/4"></div>
        <div className="absolute h-80 w-80 bg-purple-500/5 rounded-full blur-3xl bottom-20 -right-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto">
            These projects showcase my technical expertise and entrepreneurial vision in developing innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-900/20 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 relative overflow-hidden group-hover:from-blue-800/40 group-hover:to-purple-800/40 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center z-10">
                    <span className="text-xl font-medium">{project.title}</span>
                    {project.note && (
                      <div className="mt-2 inline-block px-3 py-1 bg-blue-600/60 text-white text-sm rounded-full">
                        {project.note}
                      </div>
                    )}
                    {project.subtitle && (
                      <div className="mt-2 inline-block px-3 py-1 bg-indigo-600/60 text-white text-sm rounded-full">
                        {project.subtitle}
                      </div>
                    )}
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-blue-400/20 to-transparent rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial from-purple-400/20 to-transparent rounded-full -ml-6 -mb-6"></div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-3 text-white/70 flex-grow">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full"
                      data-aos="zoom-in"
                      data-aos-delay={(index * 50) + (techIndex * 30)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <div className="mt-6">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    <span className="border-b border-blue-400/30 group-hover/link:border-blue-300 pb-0.5">Visit Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-24 mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Client Testimonial</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6" data-aos="fade-right" data-aos-delay="100">
              <p className="text-white/80 italic">
                &quot;I had the privilege of working with Nishanth on the development of our corporate website, and I am thoroughly impressed by his skills, professionalism, and maturity—especially considering he was just 16 years old! His ability to understand complex business requirements and translate them into elegant technical solutions was remarkable.&quot;
              </p>
              {/* ... client info ... */}
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6" data-aos="fade-left" data-aos-delay="200">
              <p className="text-white/80 italic">
                &quot;From start to finish, Nishanth demonstrated exceptional attention to detail, ensuring every aspect of our website was polished and aligned with our brand vision. He consistently asked the right questions, provided valuable insights, and delivered a final product that exceeded our expectations. It&apos;s rare to find such a combination of technical expertise and thoughtful communication in someone so young.&quot;
              </p>
              {/* ... client info ... */}
            </div>
          </div>
        </div>
        
        {/* GitHub Projects Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            href="https://github.com/nishanthdhina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30"
          >
            View GitHub Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 