'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS with the public key
  useEffect(() => {
    emailjs.init('ItDbSGS9fjRn4qS7q');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      to_name: "Nishanth",
      to_email: "nishanthdhinacontact@gmail.com",
      message: formData.message,
      subject: formData.subject || "Message from Portfolio Website",
      website: "Portfolio Website",
      sent_date: new Date().toLocaleDateString()
    };

    emailjs.send(
      'service_fqjr7d7', 
      'template_875uwdc',
      templateParams,
      {
        publicKey: 'ItDbSGS9fjRn4qS7q',
      }
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormStatus({
          message: 'Message sent successfully! I will get back to you soon.',
          isError: false
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus({
          message: 'Failed to send message. Please try again or contact me directly via email.',
          isError: true
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute h-64 w-64 bg-blue-500/10 rounded-full blur-3xl top-20 left-1/4"></div>
        <div className="absolute h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl -bottom-20 right-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
            {formStatus && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-aos="fade-right" data-aos-delay="200">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-black/30 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div data-aos="fade-left" data-aos-delay="200">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-black/30 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-black/30 transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message <span className="text-red-400">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-black/30 transition-all duration-300"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center ${isSubmitting ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Connect With Me</h3>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/nishanth-dhina-4a0a1525a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            
            <a 
              href="https://github.com/nishanthdhina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            
            <a 
              href="mailto:nishanthdhinacontact@gmail.com" 
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
            
            <a 
              href="https://twitter.com/nishanthdhina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center" data-aos="fade-up">
          <p className="text-white/60">
            © {new Date().getFullYear()} Nishanth Dhina. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
} 