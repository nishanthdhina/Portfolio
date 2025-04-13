'use client';

import { useState, useEffect, useRef } from 'react';

type CommandResult = {
  command: string;
  output: React.ReactNode;
  isError?: boolean;
};

export default function Terminal() {
  const [input, setInput] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<CommandResult[]>([
    {
      command: '',
      output: (
        <>
          <span className="text-blue-400 font-bold">Welcome to Nishanth&apos;s Terminal v1.0</span>
          <br />
          <span className="text-gray-400">Type <span className="text-yellow-400">help</span> to see available commands</span>
          <br />
        </>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Available commands and their responses
  const commands: Record<string, (args: string[]) => React.ReactNode> = {
    help: () => (
      <>
        <div className="grid grid-cols-1 gap-1">
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">about</span>
            <span className="text-gray-400 col-span-4">Learn about Nishanth</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">skills</span>
            <span className="text-gray-400 col-span-4">View my technical skills</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">education</span>
            <span className="text-gray-400 col-span-4">See my educational background</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">projects</span>
            <span className="text-gray-400 col-span-4">List my notable projects</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">contact</span>
            <span className="text-gray-400 col-span-4">How to get in touch with me</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">social</span>
            <span className="text-gray-400 col-span-4">Links to my social profiles</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">clear</span>
            <span className="text-gray-400 col-span-4">Clear the terminal</span>
          </div>
          <div className="grid grid-cols-5">
            <span className="text-yellow-400 col-span-1">sound</span>
            <span className="text-gray-400 col-span-4">Toggle typing sound effects</span>
          </div>
        </div>
      </>
    ),
    about: () => (
      <>
        <div className="mt-4 animate-fadeIn">
          <p className="text-green-400 font-bold">About Nishanth Dhina:</p>
          <p className="mt-1">I&apos;m a 17-year-old entrepreneur and developer based in Germany. At ProVocis, I focus on building a platform that makes career growth smarter and more effective. My goal is to bridge the gap between AI and real-world communication, helping professionals improve their skills effortlessly.</p>
          <p className="mt-1">My journey in technology began at an early age when I discovered my passion for coding. I&apos;ve been building websites for clients since I was 14, expanding my skills in web development, UI/UX design, and entrepreneurship.</p>
          <p className="mt-1">When I&apos;m not coding or brainstorming new business ideas, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring young developers.</p>
        </div>
      </>
    ),
    skills: () => (
      <>
        <span className="text-blue-400 font-bold">My Technical Skills</span>
        <br />
        <div className="mt-1 grid grid-cols-2 gap-2">
          <div>
            <span className="text-green-400 font-semibold">Frontend:</span>
            <ul className="list-disc list-inside">
              <li>HTML/CSS</li>
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <span className="text-green-400 font-semibold">Backend:</span>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <span className="text-green-400 font-semibold">Tools:</span>
            <ul className="list-disc list-inside">
              <li>Git/GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <span className="text-green-400 font-semibold">Soft Skills:</span>
            <ul className="list-disc list-inside">
              <li>Problem Solving</li>
              <li>Leadership</li>
              <li>Communication</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>
      </>
    ),
    education: () => (
      <>
        <span className="text-blue-400 font-bold">My Education Journey</span>
        <br />
        <div className="mt-2 space-y-2">
          <div>
            <span className="text-yellow-400">Ebor Gardens Primary School (2012-2016)</span>
            <br />
            <span className="text-gray-400">United Kingdom</span>
          </div>
          <div>
            <span className="text-yellow-400">APL Global School (2016-2021)</span>
            <br />
            <span className="text-gray-400">India</span>
          </div>
          <div>
            <span className="text-yellow-400">Freie Waldorfschule (2021-2025)</span>
            <br />
            <span className="text-gray-400">Germany</span>
          </div>
          <div>
            <span className="text-yellow-400">Mercedes-Benz Apprenticeship (2025-2028)</span>
            <br />
            <span className="text-gray-400">Germany (Planned)</span>
          </div>
        </div>
      </>
    ),
    projects: () => (
      <>
        <span className="text-blue-400 font-bold">My Projects</span>
        <br />
        <div className="mt-2 space-y-3">
          <div>
            <span className="text-yellow-400 font-semibold">ProVocis</span>
            <p>A revolutionary voice AI platform that helps users create content with personalized voice clones.</p>
            <span className="text-gray-400">Technologies: Next.js, React, TensorFlow, AWS</span>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold">E-Commerce Platform</span>
            <p>A fully-functional e-commerce solution with integrated payment processing and inventory management.</p>
            <span className="text-gray-400">Technologies: React, Node.js, MongoDB, Stripe</span>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold">Smart Home Dashboard</span>
            <p>An IoT dashboard that allows users to control and monitor their smart home devices from anywhere.</p>
            <span className="text-gray-400">Technologies: Vue.js, Firebase, IoT, MQTT</span>
          </div>
        </div>
      </>
    ),
    contact: () => (
      <>
        <span className="text-blue-400 font-bold">Contact Information</span>
        <br />
        <div className="mt-2 space-y-1">
          <div>Email: <a href="mailto:contact@nishanthdhina.com" className="text-blue-400 underline">contact@nishanthdhina.com</a></div>
          <div>Location: Germany</div>
          <div>Availability: Monday-Friday, 9AM-6PM CET</div>
        </div>
        <p className="mt-2">Feel free to reach out for collaborations, questions, or just to say hello!</p>
      </>
    ),
    social: () => (
      <>
        <span className="text-blue-400 font-bold">My Social Profiles</span>
        <br />
        <div className="mt-2 space-y-1">
          <div>
            <span className="text-yellow-400">LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              linkedin.com/in/nishanthdhina
            </a>
          </div>
          <div>
            <span className="text-yellow-400">GitHub:</span>{' '}
            <a href="https://github.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              github.com/nishanthdhina
            </a>
          </div>
          <div>
            <span className="text-yellow-400">Instagram:</span>{' '}
            <a href="https://instagram.com/nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              instagram.com/nishanthdhina
            </a>
          </div>
          <div>
            <span className="text-yellow-400">Twitter:</span>{' '}
            <a href="https://twitter.com/nishanthdhin4" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              twitter.com/nishanthdhin4
            </a>
          </div>
          <div>
            <span className="text-yellow-400">TikTok:</span>{' '}
            <a href="https://tiktok.com/@nishanthdhina" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              tiktok.com/@nishanthdhina
            </a>
          </div>
        </div>
      </>
    ),
    clear: () => {
      setTimeout(() => {
        setCommandHistory([]);
      }, 0);
      return null;
    },
    sound: () => {
      setSoundEnabled(prev => !prev);
      return (
        <>
          <span>Sound effects {!soundEnabled ? 'enabled' : 'disabled'}</span>
        </>
      );
    }
  };
  
  // Function to execute commands
  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;
    
    const [cmdName, ...args] = trimmedCommand.split(' ');
    const lowerCmdName = cmdName.toLowerCase();
    
    let result: CommandResult;
    
    if (lowerCmdName in commands) {
      result = {
        command: trimmedCommand,
        output: commands[lowerCmdName](args),
      };
    } else {
      result = {
        command: trimmedCommand,
        output: (
          <span className="text-red-400">
            Command not found: {cmdName}. Type <span className="text-yellow-400">help</span> to see available commands.
          </span>
        ),
        isError: true,
      };
    }
    
    setCommandHistory((prev) => [...prev, result]);
    setInput('');
    setInputHistory((prev) => [...prev, trimmedCommand]);
    setHistoryIndex(-1);
    return result;
  };
  
  // Handle key presses
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Play typing sound for most keypresses
    if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      playTypingSound();
    }
    
    if (e.key === 'Enter') {
      const result = executeCommand(input);
      setInput('');
      // Only update command history if result exists
      if (result) {
        setCommandHistory([...commandHistory, result]);
      }
      playEnterSound();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (inputHistory.length > 0) {
        const newIndex = historyIndex < inputHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(inputHistory[inputHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(inputHistory[inputHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple command autocompletion
      const possibleCommands = Object.keys(commands).filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (possibleCommands.length === 1) {
        setInput(possibleCommands[0]);
        playTypingSound();
      }
    }
  };
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    playTypingSound();
  };
  
  // Focus input on terminal click
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  // Auto-scroll to bottom on command entry
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);
  
  // Focus input on initial render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  // Function to play a sound using the downloaded MP3 files
  const playSound = (type: 'keypress' | 'enter' | 'error') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    
    try {
      const audio = new Audio();
      
      // Use the correct path to the sound files
      switch (type) {
        case 'keypress':
          audio.src = '/sounds/key-press.mp3';
          break;
        case 'enter':
          audio.src = '/sounds/key-enter.mp3';
          break;
        case 'error':
          audio.src = '/sounds/key-error.mp3';
          break;
      }
      
      audio.volume = 0.3; // Lower volume for better experience
      
      // Preload the audio
      audio.load();
      
      // Play sound with error handling
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error('Error playing sound:', err);
          // Fall back to Audio API if Web Audio API fails
          const fallbackAudio = document.createElement('audio');
          fallbackAudio.src = audio.src;
          fallbackAudio.volume = 0.3;
          fallbackAudio.play().catch(e => console.error('Fallback audio failed:', e));
        });
      }
    } catch (err) {
      console.error('Sound playback error:', err);
    }
  };
  
  // Function to play typing sound
  const playTypingSound = () => {
    playSound('keypress');
  };
  
  // Function to play enter sound
  const playEnterSound = () => {
    playSound('enter');
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Terminal Header */}
      <div className="bg-gray-800 flex items-center justify-between p-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-300">
          <span className="text-blue-400 font-bold">Welcome to Nishanth&apos;s Terminal v1.0</span>
        </div>
        <div className="w-6"></div> {/* Empty div for flex alignment */}
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="flex-1 bg-gray-900 p-4 text-white font-mono text-sm overflow-y-auto"
        onClick={focusInput}
      >
        {commandHistory.map((item, index) => (
          <div key={index} className="mb-3">
            {item.command && (
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="ml-4 mt-1">{item.output}</div>
          </div>
        ))}
        
        {/* Command Input */}
        <div className="flex items-start">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none caret-white flex-1 w-full"
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
      </div>
    </div>
  );
} 