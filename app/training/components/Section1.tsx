"use client";

import Image from "next/image";
import { useState } from "react";

export default function Section1() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="w-full bg-black text-white py-8 xs:py-10 sm:py-14 md:py-16 px-4 sm:px-5 md:px-6 lg:px-8">
      <div className="max-w-8xl w-full sm:w-[95%] md:w-[92%] lg:w-[90%] xl:w-[87%] mx-auto">
        
        {/* Top Images - optimized for mobile touch */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          
          {/* First Image - improved mobile height and loading */}
          <div className={`
            relative w-full 
            h-[180px] xs:h-[420px] sm:h-[480px] md:h-[520px] lg:h-[580px] xl:h-[620px] 
            md:col-span-3 rounded-xl overflow-hidden
            transition-all duration-300 ease-in-out
            ${loadedImages[1] ? 'opacity-100' : 'opacity-0'}
            active:scale-[0.99] md:active:scale-100
            shadow-lg hover:shadow-2xl
          `}>
            <Image
              src="/training/section1/1.png"
              alt="Workshop session - Collaborative team activity"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105 md:hover:scale-110"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 30vw, 25vw"
              priority
              onLoad={() => handleImageLoad(1)}
              loading="eager"
            />
            {/* Subtle overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Second Image - improved mobile sizing */}
          <div className={`
            relative w-full 
            h-[400px] xs:h-[440px] sm:h-[500px] md:h-[520px] lg:h-[580px] xl:h-[620px] 
            md:col-span-7 rounded-xl overflow-hidden
            transition-all duration-300 ease-in-out
            ${loadedImages[2] ? 'opacity-100' : 'opacity-0'}
            active:scale-[0.99] md:active:scale-100
            shadow-lg hover:shadow-2xl
          `}>
            <Image
              src="/training/section1/2x.jpg"
              alt="Team workshop - Collaborative learning session"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105 md:hover:scale-110"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
              priority
              onLoad={() => handleImageLoad(2)}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Bottom Content - Improved mobile stacking and spacing */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center md:items-start">
          
          {/* Text Section - Better mobile typography */}
          <div className="w-full md:flex-[6] text-center md:text-left">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-[25px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] font-light mb-4 sm:mb-5 md:mb-6 font-poppins leading-tight">
              Strengths Assessment{" "}
              <span className="font-playfair italic block sm:inline mt-1 sm:mt-0 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Workshop
              </span>
            </h2>

            <p className="text-sm xs:text-base sm:text-lg md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] text-gray-300 leading-relaxed max-w-6xl mx-auto md:mx-0 px-2 xs:px-0">
              Discover your team's natural talents with the Gallup
              CliftonStrengths® assessment. This workshop helps
              participants leverage their top strengths to improve collaboration,
              leadership, and performance. Ideal for leaders and growing
              teams, it builds more engaged, high-performing workplaces.
            </p>
            
            {/* Mobile "Read more" indicator */}
            <button className="sm:hidden text-gray-400 text-sm mt-2 underline underline-offset-4">
              Read more
            </button>
          </div>

          {/* Powered By Section - Improved mobile alignment */}
          <div className="w-full md:flex-1 flex flex-col items-center md:items-end mt-4 md:mt-0">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-gray-400 mb-4 sm:mb-5 md:mb-6 font-medium">
              POWERED BY
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 w-full flex flex-col items-center md:items-end">
              
              {/* Logo 1 - Improved touch target and responsive sizing */}
              <div className="relative w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[45px] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 md:active:scale-100 cursor-pointer overflow-hidden group">
                <Image
                  src="/training/section1/p1.png"
                  alt="Xavier & Associates - Leadership training partner"
                  fill
                  className="object-contain p-2 xs:p-2.5 sm:p-3 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 480px) 160px, (max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 260px"
                  loading="lazy"
                />
              </div>

              {/* Logo 2 - Improved touch target */}
              <div className="relative w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[45px] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 md:active:scale-100 cursor-pointer overflow-hidden group">
                <Image
                  src="/training/section1/p2.png"
                  alt="Gallup - CliftonStrengths assessment partner"
                  fill
                  className="object-contain p-2 xs:p-2.5 sm:p-3 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 480px) 160px, (max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 260px"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Enhanced partner description */}
            <p className="text-gray-500 text-xs sm:text-sm mt-4 text-center md:text-right hidden sm:block">
              Certified partners in leadership excellence
            </p>
          </div>
        </div>

        {/* Mobile swipe indicator for images */}
        <div className="flex justify-center mt-4 gap-1.5 md:hidden">
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Enhanced mobile interactions */}
      <style jsx>{`
        @media (max-width: 640px) {
          .hover\\:scale-105:active {
            transform: scale(1.02);
            transition: transform 0.2s ease;
          }
          
          /* Improved touch targets */
          button, [role="button"], .cursor-pointer {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better tap highlight */
          * {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
          }
          
          /* Smooth scrolling */
          .smooth-scroll {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Loading animation */
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .loading-shimmer {
          background: linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}