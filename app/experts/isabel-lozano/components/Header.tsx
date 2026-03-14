"use client";

import { Playfair_Display } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function Header() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down more than 100px
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#AFCFE4]/80 to-white min-h-[72vh] sm:min-h-[84vh] lg:min-h-[96vh] py-12 sm:py-16 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      
      {/* Subtle background pattern or gradient animation */}
      <div 
        className="absolute inset-0 z-0 opacity-30 transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(175, 207, 228, 0.3) 0%, transparent 50%)`,
          backgroundSize: '100% 100%',
        }}
        aria-hidden="true"
      />
      
      {/* Content with staggered animations */}
      <div className="relative z-10 w-full max-w-4xl text-center mt-8 sm:mt-12">
        
        {/* Title - Fade in up with delay - Preserving tight line spacing */}
        <h1 
          className="opacity-0 animate-fade-in-up text-4xl sm:text-5xl md:text-7xl font-light text-black font-poppins leading-[1] sm:leading-[1]"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Service and{" "}
          <span className={`${playfair.className} font-semibold sm:inline`}>
            Space
          </span>
          {" "}Design
        </h1>

      </div>

      {/* Scroll down indicator - Fades in last, gently bounces, and fades out on scroll */}
      {showScrollIndicator && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-fade-in transition-opacity duration-500"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <span className="text-sm sm:text-base font-light tracking-wider">scroll down to see more</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  );
}