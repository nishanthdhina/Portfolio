'use client';

import Image from 'next/image';
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
            {/* Testimonial */}
            <div 
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
              data-aos="fade-up"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/5 rounded-full -mr-20 -mt-20 group-hover:bg-blue-500/10 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/5 rounded-full group-hover:bg-indigo-500/10 transition-all duration-500"></div>
              
              {/* Quote icon */}
              <div className="text-blue-500 mb-6">
                <svg className="w-12 h-12 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.248 5.992C9.348 6.36 7.575 7.248 6.672 9.096C6.312 9.768 6.144 10.536 6.144 11.328C6.144 12 6.264 12.672 6.6 13.248C6.96 13.896 7.56 14.352 8.256 14.592C8.832 14.784 9.408 14.952 9.984 15.096C10.656 15.264 11.304 15.384 11.88 15.648C12.36 15.84 12.816 16.152 13.128 16.608C13.416 17.016 13.44 17.568 13.344 18.072C13.248 18.6 13.032 19.104 12.72 19.536C12.36 20.04 11.904 20.448 11.352 20.76C10.224 21.36 8.904 21.36 7.776 21.072C7.056 20.88 6.336 20.592 5.736 20.184C4.344 19.224 3.384 17.664 3.048 16.032C2.88 15.336 2.784 14.616 2.784 13.896C2.784 13.248 2.856 12.6 3 11.976C3.336 10.44 4.032 9 4.968 7.752C6.096 6.216 7.512 5.04 9.192 4.224C9.336 4.152 9.504 4.248 9.528 4.392L11.08 5.824C11.104 5.872 11.2 5.968 11.248 5.992Z"/>
                </svg>
              </div>
              
              <p className="text-white/90 text-xl leading-relaxed relative z-10 mb-8 font-light italic">
                "I had the privilege of working with Nishanth on the development of our corporate website, and I am thoroughly impressed by his skills, professionalism, and maturity—especially considering he was just 16 years old! His ability to understand complex business requirements and translate them into elegant technical solutions was remarkable."
              </p>
              
              <p className="text-white/80 leading-relaxed relative z-10 mb-10">
                "From start to finish, Nishanth demonstrated exceptional attention to detail, ensuring every aspect of our website was polished and aligned with our brand vision. He consistently asked the right questions, provided valuable insights, and delivered a final product that exceeded our expectations. It's rare to find such a combination of technical expertise and thoughtful communication in someone so young."
              </p>
              
              <div className="flex items-center border-t border-white/10 pt-6 mt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full flex items-center justify-center border-2 border-blue-500/40 shadow-lg shadow-blue-900/10">
                  <span className="text-2xl font-bold text-blue-300">NV</span>
                </div>
                <div className="ml-5">
                  <h4 className="text-white font-semibold text-lg">Naveen Veda</h4>
                  <p className="text-blue-400">CTO / Co-Founder, LaserBeam Software</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
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