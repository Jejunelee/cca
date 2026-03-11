"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom effect */}
      <div 
        className="absolute inset-0 z-0 scale-105 opacity-10 transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: `url('/landing/Hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      
      {/* Sophisticated gradient overlay for depth and readability */}
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0" />
      
      {/* Content with refined typography and animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        
        {/* Main headline with enhanced styling */}
        <h1 className="opacity-0 animate-fade-in-up text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin font-poppins text-black mb-6 tracking-tight" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
<div>Connecting the{' '}
  <span className="relative inline-block">
    <span className="relative z-10 font-playfair italic font-semibold bg-gradient-to-r from-black to-[#8ec4e8] bg-clip-text text-transparent">
      Best
    </span>
    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
  </span>
</div>

<div>
  <span className="relative inline-block">
    <span className="relative z-10 font-playfair italic font-semibold bg-gradient-to-r from-[#8ec4e8] to-black bg-clip-text text-transparent">
      Minds
    </span>
    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
  </span>{' '}
  in the Industry
</div>
        </h1>
        
        {/* Supporting text with better hierarchy */}
        <p className="opacity-0 animate-fade-in-up text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-normal font-poppins tracking-wide"
           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Building meaningful partnerships through{' '}
          <span className="text-black font-bold">training, collaboration,</span> and{' '}
          <span className="text-black font-bold">expert guidance</span>.
        </p>
        

      </div>

      {/* Add animation keyframes to your global CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;