"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom effect - adjusted for mobile */}
      <div 
        className="absolute inset-0 z-0 scale-105 opacity-5 sm:opacity-10 transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: `url('/landing/Hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      
      {/* Sophisticated gradient overlay - enhanced for mobile readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />
      
      {/* Content with responsive typography and refined spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 text-center">
        
        {/* Main headline with enhanced responsive sizing */}
        <h1 className="opacity-0 animate-fade-in-up text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin font-poppins text-black mb-4 sm:mb-6 tracking-tight" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col">
            <span>Connecting the{' '}</span>
            <span className="relative mt-2 xs:mt-0">
              <span className="relative z-10 font-playfair italic font-semibold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                Best
              </span>
            </span>
          </div>

          <div className="flex flex-col mt-2 xs:mt-0">
            <span className="relative">
              <span className="relative z-10 font-playfair italic font-semibold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                Minds
              </span>
            </span>{' '}
            <span>in the Industry</span>
          </div>
        </h1>
        
        {/* Supporting text with responsive sizing and optimized line heights */}
        <p className="opacity-0 animate-fade-in-up text-base sm:text-lg md:text-xl lg:text-2xl text-black/90 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed font-normal font-poppins tracking-wide px-4 sm:px-0"
           style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Building meaningful partnerships through{' '}
          <span className="text-black font-semibold">training, collaboration,</span> and{' '}
          <span className="text-black font-semibold">expert guidance</span>.
        </p>
      </div>

      {/* Responsive animation keyframes with performance optimizations */}
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
        
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Responsive breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\:block {
            display: block;
          }
          .xs\:mt-0 {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;