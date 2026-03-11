"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startIndexRef = useRef(0);
  const targetIndexRef = useRef(0);

  const images = [
    {
      src: "/landing/section1x1.png",
      alt: "Hospitality training"
    },
    {
      src: "/landing/section1x2.png",
      alt: "Hospitality speaker"
    },
    {
      src: "/landing/section1x1.png",
      alt: "Hospitality service"
    },
    {
      src: "/landing/section1x2.png",
      alt: "Hotel staff"
    }
  ];

  // Duplicate images for infinite loop effect
  const extendedImages = [...images, ...images, ...images];
  const slideWidth = 390 + 24; // image width + gap

  // Smooth continuous animation function
  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
      startIndexRef.current = currentIndex;
      targetIndexRef.current = currentIndex + 1;
    }

    const elapsed = timestamp - startTimeRef.current;
    const duration = 5000; // 5 seconds per slide transition
    const progress = Math.min(elapsed / duration, 1);

    // Calculate the current index based on progress
    const indexDiff = targetIndexRef.current - startIndexRef.current;
    const currentPosition = startIndexRef.current + (indexDiff * progress);
    
    setCurrentIndex(currentPosition);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Reset animation for next slide
      startTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const nextSlide = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startTimeRef.current = null;
    setCurrentIndex((prevIndex) => Math.floor(prevIndex) + 1);
  };

  const prevSlide = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startTimeRef.current = null;
    setCurrentIndex((prevIndex) => Math.floor(prevIndex) - 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= images.length * 2) {
      // Jump back to the middle set without animation
      setCurrentIndex(images.length);
    } else if (currentIndex < 0) {
      // Jump to the last set without animation
      setCurrentIndex(images.length * 2 - 1);
    }
  }, [currentIndex, images.length]);

  // Start continuous animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pause animation on hover
  const pauseAutoplay = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    if (!animationRef.current) {
      startTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <section className="w-full bg-[#f3f3f3] py-6 flex items-center">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT TEXT - Now vertically centered */}
          <div className="flex items-center justify-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl leading-tight font-poppins text-black">
                The{" "}
                <span className="font-playfair italic">
                  Hidden Strain
                </span>{" "}
                Behind Hospitality Service
              </h2>

              <p className="mt-6 text-lg text-gray-700 font-jost leading-relaxed">
                Guest complaints are often people-related, employees face weekly
                emotional exhaustion, and recognition is rare.
              </p>

              <p className="mt-6 text-lg text-gray-700 font-jost leading-relaxed">
                The industry is feeling the pressure—and this is where we come in.
              </p>
            </div>
          </div>

          {/* RIGHT MEDIA - CAROUSEL */}
          <div 
            className="relative w-full"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            {/* Carousel container with gradient overlays */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Left gradient overlay - makes image disappear on left side */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent"></div>
              
              {/* Right gradient overlay - makes image disappear on right side */}
              <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-l from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent"></div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-[#225475] bg-white backdrop-blur-sm rounded-lg p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-[#225475] bg-white backdrop-blur-sm rounded-lg p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>

              {/* Carousel track - smooth continuous animation */}
              <div 
                className="flex gap-6 transition-none"
                style={{
                  transform: `translateX(-${currentIndex * slideWidth}px)`,
                }}
              >
                {extendedImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative min-w-[390px] h-[630px] rounded-xl overflow-hidden flex-shrink-0 group shadow-xl"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 390px"
                      priority={index < 6}
                    />
                    
                    {/* Optional overlay with caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}