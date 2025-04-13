import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

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

      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        
        .glitch-text {
          position: relative;
          animation: glitch 1s infinite;
        }
        
        .glitch-text:before,
        .glitch-text:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text:before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        
        .glitch-text:after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim {
          0% {
            clip: rect(31px, 9999px, 94px, 0);
          }
          4.16666667% {
            clip: rect(91px, 9999px, 43px, 0);
          }
          8.33333333% {
            clip: rect(15px, 9999px, 13px, 0);
          }
          12.5% {
            clip: rect(69px, 9999px, 57px, 0);
          }
          16.66666667% {
            clip: rect(57px, 9999px, 98px, 0);
          }
          20.83333333% {
            clip: rect(46px, 9999px, 14px, 0);
          }
          25% {
            clip: rect(18px, 9999px, 23px, 0);
          }
          29.16666667% {
            clip: rect(71px, 9999px, 18px, 0);
          }
          33.33333333% {
            clip: rect(2px, 9999px, 11px, 0);
          }
          37.5% {
            clip: rect(14px, 9999px, 97px, 0);
          }
          41.66666667% {
            clip: rect(95px, 9999px, 36px, 0);
          }
          45.83333333% {
            clip: rect(23px, 9999px, 50px, 0);
          }
          50% {
            clip: rect(22px, 9999px, 71px, 0);
          }
          54.16666667% {
            clip: rect(37px, 9999px, 17px, 0);
          }
          58.33333333% {
            clip: rect(4px, 9999px, 51px, 0);
          }
          62.5% {
            clip: rect(89px, 9999px, 4px, 0);
          }
          66.66666667% {
            clip: rect(75px, 9999px, 25px, 0);
          }
          70.83333333% {
            clip: rect(42px, 9999px, 97px, 0);
          }
          75% {
            clip: rect(67px, 9999px, 97px, 0);
          }
          79.16666667% {
            clip: rect(10px, 9999px, 9px, 0);
          }
          83.33333333% {
            clip: rect(37px, 9999px, 59px, 0);
          }
          87.5% {
            clip: rect(24px, 9999px, 66px, 0);
          }
          91.66666667% {
            clip: rect(47px, 9999px, 3px, 0);
          }
          95.83333333% {
            clip: rect(36px, 9999px, 40px, 0);
          }
          100% {
            clip: rect(91px, 9999px, 70px, 0);
          }
        }
        
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 91px, 0);
          }
          4.16666667% {
            clip: rect(10px, 9999px, 88px, 0);
          }
          8.33333333% {
            clip: rect(19px, 9999px, 15px, 0);
          }
          12.5% {
            clip: rect(96px, 9999px, 35px, 0);
          }
          16.66666667% {
            clip: rect(91px, 9999px, 75px, 0);
          }
          20.83333333% {
            clip: rect(34px, 9999px, 30px, 0);
          }
          25% {
            clip: rect(95px, 9999px, 13px, 0);
          }
          29.16666667% {
            clip: rect(67px, 9999px, 41px, 0);
          }
          33.33333333% {
            clip: rect(84px, 9999px, 26px, 0);
          }
          37.5% {
            clip: rect(59px, 9999px, 98px, 0);
          }
          41.66666667% {
            clip: rect(98px, 9999px, 90px, 0);
          }
          45.83333333% {
            clip: rect(80px, 9999px, 37px, 0);
          }
          50% {
            clip: rect(75px, 9999px, 80px, 0);
          }
          54.16666667% {
            clip: rect(40px, 9999px, 88px, 0);
          }
          58.33333333% {
            clip: rect(82px, 9999px, 61px, 0);
          }
          62.5% {
            clip: rect(63px, 9999px, 59px, 0);
          }
          66.66666667% {
            clip: rect(35px, 9999px, 3px, 0);
          }
          70.83333333% {
            clip: rect(96px, 9999px, 44px, 0);
          }
          75% {
            clip: rect(12px, 9999px, 92px, 0);
          }
          79.16666667% {
            clip: rect(9px, 9999px, 48px, 0);
          }
          83.33333333% {
            clip: rect(48px, 9999px, 46px, 0);
          }
          87.5% {
            clip: rect(64px, 9999px, 45px, 0);
          }
          91.66666667% {
            clip: rect(98px, 9999px, 88px, 0);
          }
          95.83333333% {
            clip: rect(18px, 9999px, 92px, 0);
          }
          100% {
            clip: rect(34px, 9999px, 87px, 0);
          }
        }
      `}</style>
    </div>
  );
} 