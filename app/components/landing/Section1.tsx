"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startIndexRef = useRef<number>(0);
  const targetIndexRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

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

  // Responsive slide dimensions
  const getSlideWidth = () => {
    if (typeof window === 'undefined') return 390 + 24; // Default for SSR
    
    if (window.innerWidth < 480) return 240 + 12; // Small mobile
    if (window.innerWidth < 640) return 280 + 16; // Mobile
    if (window.innerWidth < 768) return 320 + 20; // Small tablet
    if (window.innerWidth < 1024) return 350 + 22; // Tablet
    return 390 + 24; // Desktop
  };

  const getSlideHeight = () => {
    if (typeof window === 'undefined') return 600;
    
    if (window.innerWidth < 480) return 320; // Small mobile
    if (window.innerWidth < 640) return 380; // Mobile
    if (window.innerWidth < 768) return 420; // Small tablet
    if (window.innerWidth < 1024) return 480; // Tablet
    if (window.innerWidth < 1280) return 550; // Small desktop
    return 600; // Desktop
  };

  const [slideWidth, setSlideWidth] = useState(390 + 24);
  const [slideHeight, setSlideHeight] = useState(600);

  // Update slide dimensions on resize
  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setSlideWidth(getSlideWidth());
      setSlideHeight(getSlideHeight());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate images for infinite loop effect
  const extendedImages = [...images, ...images, ...images];

  // Smooth continuous animation function
  const animate = (timestamp: number) => {
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
    if (!mounted) return;
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted]);

  // Pause animation on hover/touch
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
    <section className="w-full bg-[#f3f3f3] py-8 sm:py-10 md:py-12 lg:py-6 min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* LEFT TEXT - Responsive padding and sizing */}
          <div className="flex items-center justify-center h-full px-2 sm:px-4 md:px-6 lg:pl-8 xl:pl-16 2xl:pl-24 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="w-full lg:w-auto lg:min-w-[350px] xl:min-w-[450px] 2xl:min-w-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-poppins text-black">
                The{" "}
                <span className="font-playfair italic">
                  Hidden Strain
                </span>{" "}
                Behind Hospitality Service
              </h2>

              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-jost leading-relaxed max-w-3xl">
                Guest complaints are often people-related, employees face weekly
                emotional exhaustion, and recognition is rare.
              </p>

              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-jost leading-relaxed max-w-3xl">
                The industry is feeling the pressure <br className="hidden sm:block" /> - and this is where we come in.
              </p>
            </div>
          </div>

          {/* RIGHT MEDIA - CAROUSEL - Responsive container */}
          <div 
            className="relative w-full max-w-full lg:max-w-[800px] justify-self-center lg:justify-self-end px-0 sm:px-2 lg:px-0 order-1 lg:order-2"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={pauseAutoplay}
            onTouchEnd={resumeAutoplay}
          >
            {/* Carousel container with gradient overlays */}
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
              {/* Left gradient overlay - responsive width */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 z-20 pointer-events-none bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/95 to-transparent"></div>
              
              {/* Right gradient overlay - responsive width */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 z-20 pointer-events-none bg-gradient-to-l from-[#f3f3f3] via-[#f3f3f3]/95 to-transparent"></div>
              
              {/* Navigation Buttons - responsive positioning and sizing */}
              <button 
                onClick={prevSlide}
                className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 text-[#225475] bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100 active:scale-95 touch-manipulation"
                aria-label="Previous slide"
              >
                <ArrowLeft size={mounted ? (window.innerWidth < 480 ? 14 : window.innerWidth < 640 ? 16 : window.innerWidth < 768 ? 18 : 20) : 20} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 text-[#225475] bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100 active:scale-95 touch-manipulation"
                aria-label="Next slide"
              >
                <ArrowRight size={mounted ? (window.innerWidth < 480 ? 14 : window.innerWidth < 640 ? 16 : window.innerWidth < 768 ? 18 : 20) : 20} />
              </button>

              {/* Slide indicators for mobile */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2 lg:hidden">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      pauseAutoplay();
                      setCurrentIndex(index + images.length);
                      setTimeout(resumeAutoplay, 5000);
                    }}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      Math.floor(currentIndex) % images.length === index 
                        ? 'bg-[#225475] w-4 sm:w-6' 
                        : 'bg-gray-400/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel track - responsive gap and image dimensions */}
              <div 
                className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 transition-none"
                style={{
                  transform: mounted ? `translateX(-${currentIndex * slideWidth}px)` : 'none',
                }}
              >
                {extendedImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 group shadow-md sm:shadow-lg lg:shadow-xl"
                    style={{
                      minWidth: mounted ? `${slideWidth - (mounted && window.innerWidth < 480 ? 12 : mounted && window.innerWidth < 640 ? 16 : mounted && window.innerWidth < 768 ? 20 : mounted && window.innerWidth < 1024 ? 22 : 24)}px` : '390px',
                      height: mounted ? `${slideHeight}px` : '600px',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 sm:duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                      sizes="(max-width: 480px) 240px, (max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 390px"
                      priority={index < 6}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    
                    {/* Optional overlay with caption - hidden on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 hidden lg:block" />
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