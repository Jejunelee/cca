"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  // 1-8: CCA CONNECT BOOTCAMP at BRITTANY HOTEL
  {
    src: "/landing/pevents/1.png",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/2.jpeg",
    caption: "FAMILY SUCCESSION\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/3.jpeg",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/5.jpg",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/6.jpg",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/7.jpg",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  {
    src: "/landing/pevents/8.jpg",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  
  // 9: Summit
  {
    src: "/landing/pevents/9.jpg",
    caption: "SUMMIT\nBRITTANY HOTEL", // Replace LOCATION with actual venue
  },
  
  // 10-13: TIKIM
  {
    src: "/landing/pevents/10.jpg",
    caption: "TIKIM\nBRITTANY HOTEL", // Replace LOCATION with actual venue
  },
  {
    src: "/landing/pevents/11.jpg",
    caption: "TIKIM\nBRITTANY HOTEL", // Replace LOCATION with actual venue
  },
  {
    src: "/landing/pevents/12.jpg",
    caption: "TIKIM\nBRITTANY HOTEL", // Replace LOCATION with actual venue
  },
  {
    src: "/landing/pevents/13.jpg",
    caption: "TIKIM\nBRITTANY HOTEL", // Replace LOCATION with actual venue
  },
];

export default function PreviousEvents() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Optional: Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#f4f4f4] py-8 sm:py-10 md:py-12 flex justify-center">
      <div className="w-[95%] sm:w-[92%] md:w-[90%] lg:w-[87%] max-w-8xl mx-auto">

        {/* Image Container with responsive height and touch optimization */}
        <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[720px] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl">
          
          <Image
            src={images[index].src}
            alt="Previous Event"
            fill
            className="object-cover transition-opacity duration-500"
            priority
            sizes="(max-width: 480px) 100vw, (max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 87vw"
          />

          {/* Left Arrow - responsive sizing and positioning */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 text-[#225475] bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-md sm:shadow-lg hover:scale-105 active:scale-95 transition-all hover:bg-white touch-manipulation z-10"
            aria-label="Previous event"
          >
            <ChevronLeft size={mounted ? (window.innerWidth < 480 ? 16 : window.innerWidth < 640 ? 18 : window.innerWidth < 768 ? 20 : 24) : 20} />
          </button>

          {/* Right Arrow - responsive sizing and positioning */}
          <button
            onClick={next}
            className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 text-[#225475] bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-md sm:shadow-lg hover:scale-105 active:scale-95 transition-all hover:bg-white touch-manipulation z-10"
            aria-label="Next event"
          >
            <ChevronRight size={mounted ? (window.innerWidth < 480 ? 16 : window.innerWidth < 640 ? 18 : window.innerWidth < 768 ? 20 : 24) : 20} />
          </button>

          {/* Caption - responsive positioning and sizing */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-2 sm:right-3 md:right-4 lg:right-6 text-white text-right whitespace-pre-line bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg z-10 max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-poppins tracking-wide leading-tight">
              {images[index].caption}
            </p>
          </div>

          {/* Image Counter - responsive positioning and sizing */}
          <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 left-2 sm:left-3 md:left-4 lg:left-6 bg-black/60 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base backdrop-blur-sm z-10">
            <span className="font-medium">{index + 1}</span> / {images.length}
          </div>

          {/* Touch swipe indicators for mobile (optional) */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/10 to-transparent pointer-events-none opacity-0 sm:opacity-100 transition-opacity" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/10 to-transparent pointer-events-none opacity-0 sm:opacity-100 transition-opacity" />
        </div>

        {/* Bottom Title Bar with responsive padding and typography */}
        <div className="bg-black py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-3 sm:px-4 md:px-6 lg:px-8 mt-3 sm:mt-4 md:mt-5 lg:mt-6 rounded-lg sm:rounded-xl">
          <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#AFCFE4] font-light text-center leading-tight">
            Our previous{" "}
            <span className="text-[#AFCFE4] italic font-playfair block sm:inline mt-1 sm:mt-0">
              Events
            </span>
          </h2>
          
          {/* Optional subtitle for more context - responsive sizing */}
          <p className="text-gray-400 text-center mt-2 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            Relive our memorable moments and successful gatherings
          </p>
        </div>

        {/* Dot indicators for mobile (optional enhancement) */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'bg-[#225475] w-4' : 'bg-gray-400'
              }`}
              aria-label={`Go to event ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add touch swipe functionality (optional) */}
      <style jsx>{`
        @media (max-width: 640px) {
          .touch-manipulation {
            touch-action: manipulation;
          }
        }
      `}</style>
    </section>
  );
}