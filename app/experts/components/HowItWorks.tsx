"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const steps = [
  {
    title: "Share us your vision",
    description:
      "Tell us about your project goals, unique challenges, and specific requirements. The more we know, the better we can serve you.",
  },
  {
    title: "Meet your perfect match",
    description:
      "We carefully pair you with a vetted Food, Beverage, or Hospitality expert whose experience aligns perfectly with your needs.",
  },
  {
    title: "Collaborate & create",
    description:
      "Partner directly with your expert to craft a customized project plan and proposal that brings your vision to life.",
  },
  {
    title: "We'll handle the rest",
    description:
      "From screening and contracts to payments and project management—we take care of everything behind the scenes.",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calculate progress percentage based on state
  const getProgressWidth = (index: number) => {
    if (activeIndex === index) return "100%";
    if (hoveredIndex === index) return "66%";
    return "33%";
  };

  // Calculate dot position based on state - FIXED: now matches progress bar exactly
  const getDotPosition = (index: number) => {
    if (activeIndex === index) return "calc(100% - 12px)"; // Dot at the very end
    if (hoveredIndex === index) return "66%";
    return "33%";
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with floating animation - text unchanged */}
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-64 h-64 bg-[#AFCFE4]/10 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-thin text-black leading-tight relative">
            How does it{" "}
            <span className={`${playfair.className} italic text-gray-800 sm:inline mt-1 sm:mt-0`}>
              work?
            </span>
          </h2>

          <p className="font-poppins max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2 sm:px-4 relative">
            Your gateway to Philippines' top Food, Beverage, and
            Hospitality experts—streamlined for success.
          </p>

          {/* Decorative wave */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#AFCFE4] to-transparent rounded-full" />
        </div>

        {/* Interactive Experience Grid - 2x2 creative layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Decorative connecting lines */}
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            <svg className="w-full h-full" style={{ opacity: 0.15 }}>
              <path
                d="M 25% 30% Q 45% 45%, 75% 70%"
                stroke="#AFCFE4"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6,6"
              />
              <path
                d="M 25% 70% Q 45% 55%, 75% 30%"
                stroke="#AFCFE4"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6,6"
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            // Different animation delays
            const delays = ["delay-0", "delay-150", "delay-300", "delay-500"];
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main interactive card */}
                <div
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`
                    relative cursor-pointer overflow-hidden
                    bg-white rounded-3xl p-6 sm:p-7 md:p-8
                    transition-all duration-700 ease-out
                    ${activeIndex === index 
                      ? 'shadow-2xl scale-[1.02] md:scale-105 z-10' 
                      : 'shadow-md hover:shadow-xl hover:scale-[1.02]'
                    }
                  `}
                >
                  {/* Animated background patterns */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-[#AFCFE4]/0 via-[#AFCFE4]/0 to-[#4f7b9c]/0
                    transition-all duration-700
                    ${hoveredIndex === index ? 'from-[#AFCFE4]/10 via-[#AFCFE4]/5 to-[#4f7b9c]/5' : ''}
                    ${activeIndex === index ? 'from-[#AFCFE4]/20 via-[#AFCFE4]/10 to-[#4f7b9c]/10' : ''}
                  `} />

                  {/* Floating orbs */}
                  <div className={`
                    absolute -top-20 -right-20 w-40 h-40 bg-[#AFCFE4]/20 rounded-full blur-3xl
                    transition-all duration-1000
                    ${hoveredIndex === index ? 'scale-150 opacity-60' : 'opacity-0'}
                  `} />
                  
                  <div className={`
                    absolute -bottom-20 -left-20 w-40 h-40 bg-[#4f7b9c]/20 rounded-full blur-3xl
                    transition-all duration-1000
                    ${activeIndex === index ? 'scale-150 opacity-60' : 'opacity-0'}
                  `} />

                  {/* Step indicator - increased by 20% while keeping original design */}
                  <div className="relative mb-3 flex items-center gap-2">
                    <div className={`
                      w-10 h-10 rounded-full bg-[#AFCFE4]/20 flex items-center justify-center
                      transition-all duration-500
                      ${hoveredIndex === index ? 'bg-[#AFCFE4]/40 scale-110' : ''}
                      ${activeIndex === index ? 'bg-[#AFCFE4]/60' : ''}
                    `}>
                      <span className="text-[#4f7b9c] font-mono text-sm">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Animated connecting line */}
                    <div className={`
                      flex-1 h-px bg-gradient-to-r from-[#AFCFE4] to-transparent
                      transition-all duration-700
                      ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'}
                    `} />
                  </div>

                  {/* Title - exactly as provided */}
                  <h3 className={`
                    font-poppins text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3 md:mb-4 leading-tight relative
                    transition-all duration-500
                    ${hoveredIndex === index ? 'translate-x-1' : ''}
                  `}>
                    {step.title}
                  </h3>

                  {/* Description - NOW HIDDEN BY DEFAULT, SHOWS ONLY WHEN CLICKED */}
                  <div className={`
                    overflow-hidden transition-all duration-700 ease-in-out
                    ${activeIndex === index ? 'max-h-40 opacity-100 mb-4 sm:mb-5 md:mb-6 lg:mb-8' : 'max-h-0 opacity-0'}
                  `}>
                    <p className="font-poppins text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base relative">
                      {step.description}
                    </p>
                  </div>

                  {/* Interactive timeline element - FIXED: dot now goes to the end when clicked */}
                  <div className="relative mt-auto w-full">
                    {/* Main timeline bar */}
                    <div className="w-full h-2 sm:h-2.5 md:h-3 bg-[#AFCFE4]/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#AFCFE4] to-[#4f7b9c] rounded-full transition-all duration-700 ease-out"
                        style={{ width: getProgressWidth(index) }}
                      />
                    </div>

                    {/* Interactive handle that now goes ALL THE WAY to the end when clicked */}
                    <div 
                      className={`
                        absolute -top-[6px] sm:-top-[7px] md:-top-[8px] 
                        w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 
                        bg-[#AFCFE4] border-2 border-white rounded-full 
                        shadow-lg transition-all duration-700 ease-out cursor-pointer
                        hover:scale-125 hover:bg-[#4f7b9c] z-10
                      `}
                      style={{ left: getDotPosition(index) }}
                    >
                      {/* Ping animation only shows on active/hover */}
                      {(hoveredIndex === index || activeIndex === index) && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-[#AFCFE4]/40" />
                      )}
                    </div>
                  </div>

                  {/* Expandable insights section - appears on click */}
                  <div className={`
                    overflow-hidden transition-all duration-700 ease-in-out mt-4
                    ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="pt-4 border-t border-[#AFCFE4]/20">
                      {/* Micro-interactions */}
                      <div className="flex gap-2 mt-3">
                        {[0, 1, 2].map((dot) => (
                          <div
                            key={dot}
                            className="w-1.5 h-1.5 bg-[#AFCFE4] rounded-full animate-pulse"
                            style={{ animationDelay: `${dot * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive hint - updated text */}
                  <div className={`
                    absolute bottom-3 right-3 text-[10px] text-[#4f7b9c]/40 
                    transition-all duration-300 font-mono
                    ${activeIndex === index ? 'opacity-0' : 'opacity-40 group-hover:opacity-100'}
                  `}>
                    {activeIndex === index ? '' : 'click to read more →'}
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#AFCFE4]/30 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#AFCFE4]/30 rounded-bl-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}