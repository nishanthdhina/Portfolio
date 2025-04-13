'use client';

import { useState } from 'react';
import { FiMonitor, FiDatabase, FiCode, FiLayers, FiBriefcase, FiTrendingUp, FiSearch, FiActivity } from 'react-icons/fi';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  // Technical skills categories
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <FiMonitor className="w-6 h-6" />,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 95 },
      ]
    },
    {
      category: "Backend & Data",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: [
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 75 },
        { name: "Python", level: 70 },
        { name: "Microsoft Power BI", level: 65 },
        { name: "Data Management", level: 75 },
      ]
    },
    {
      category: "Digital Marketing & SEO",
      icon: <FiSearch className="w-6 h-6" />,
      skills: [
        { name: "Search Engine Optimization", level: 95 },
        { name: "Keyword Research", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "Technical SEO", level: 85 },
        { name: "Analytics & Reporting", level: 80 },
      ]
    },
    {
      category: "Development Tools",
      icon: <FiCode className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 80 },
        { name: "Webpack", level: 70 },
        { name: "Docker", level: 60 },
      ]
    },
  ];

  // Soft skills
  const softSkills = [
    {
      category: "Professional",
      icon: <FiBriefcase className="w-6 h-6" />,
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Client Communication", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Problem Solving", level: 95 },
      ]
    },
    {
      category: "Creative",
      icon: <FiLayers className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Wireframing", level: 75 },
        { name: "Design Thinking", level: 85 },
        { name: "Visual Communication", level: 80 },
        { name: "Brand Development", level: 70 },
      ]
    },
    {
      category: "Business",
      icon: <FiTrendingUp className="w-6 h-6" />,
      skills: [
        { name: "Entrepreneurship", level: 90 },
        { name: "Strategic Planning", level: 85 },
        { name: "Market Research", level: 80 },
        { name: "Business Development", level: 85 },
        { name: "Pitching", level: 90 },
      ]
    },
    {
      category: "Growth & Analytics",
      icon: <FiActivity className="w-6 h-6" />,
      skills: [
        { name: "Growth Marketing", level: 85 },
        { name: "Performance Analysis", level: 80 },
        { name: "Conversion Optimization", level: 85 },
        { name: "User Research", level: 75 },
        { name: "A/B Testing", level: 70 },
      ]
    }
  ];

  // Focus areas with descriptions
  const focusAreas = [
    {
      name: "Language Learning Technology",
      description: "Building innovative tools to make language acquisition more accessible and effective",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Search Engine Optimization",
      description: "Implementing cutting-edge SEO strategies that help businesses gain visibility and drive organic traffic",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "AI Implementation",
      description: "Integrating artificial intelligence to solve real-world problems and enhance user experiences",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Web Development",
      description: "Creating responsive, engaging web applications with modern frameworks and technologies",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "User Interface Design",
      description: "Designing intuitive, beautiful interfaces that prioritize user experience and accessibility",
      color: "from-pink-500 to-red-600"
    },
    {
      name: "Data Visualization",
      description: "Transforming complex data into clear, actionable insights through effective visualization",
      color: "from-blue-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto">
            My toolkit of technical abilities and professional skills that I've developed through projects and experiences.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-white/5 p-1 rounded-lg flex flex-wrap justify-center">
            <button 
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'technical' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Technical Skills
            </button>
            <button 
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'soft' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Soft Skills
            </button>
            <button 
              onClick={() => setActiveTab('focus')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'focus' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Focus Areas
            </button>
          </div>
        </div>
        
        {/* Technical Skills Tab */}
        <div className={`${activeTab === 'technical' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {technicalSkills.map((category, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100} 
                className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-md text-blue-400 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                          data-aos="slide-right" 
                          data-aos-delay={100 + (skillIndex * 50)}
                          data-aos-duration="800"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft Skills Tab */}
        <div className={`${activeTab === 'soft' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {softSkills.map((category, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100} 
                className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-md text-blue-400 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                          data-aos="slide-right" 
                          data-aos-delay={100 + (skillIndex * 50)}
                          data-aos-duration="800"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Focus Areas Tab */}
        <div className={`${activeTab === 'focus' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                data-aos="zoom-in" 
                data-aos-delay={index * 100} 
                className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 overflow-hidden relative group"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}>
                  {area.name}
                </h3>
                
                <p className="text-white/70 relative z-10">
                  {area.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${area.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies I use grid */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Use</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", 
              "Firebase", "Node.js", "Python", "Git", "HTML5", "CSS3", "Flutter",
              "Google Analytics", "SEO Tools", "Ahrefs", "Semrush"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30"
                data-aos="flip-up"
                data-aos-delay={index * 50}
              >
                <span className="text-white/80">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 