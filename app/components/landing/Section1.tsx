"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft, Maximize2, Volume2, VolumeX, X } from "lucide-react";
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  const videos = [
    {
      src: "/landing/videos/hapag.mp4",
      alt: "Hospitality training"
    },
    {
      src: "/landing/videos/ryan.mp4",
      alt: "Hospitality speaker"
    },
    {
      src: "/landing/videos/isabel.mp4",
      alt: "Hospitality service"
    },
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

  // Duplicate videos for infinite loop effect
  const extendedVideos = [...videos, ...videos, ...videos];

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
    // Stop any playing video when changing slides
    if (playingVideoIndex !== null) {
      const video = videoRefs.current[playingVideoIndex];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPlayingVideoIndex(null);
    }
  };

  const prevSlide = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startTimeRef.current = null;
    setCurrentIndex((prevIndex) => Math.floor(prevIndex) - 1);
    // Stop any playing video when changing slides
    if (playingVideoIndex !== null) {
      const video = videoRefs.current[playingVideoIndex];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPlayingVideoIndex(null);
    }
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= videos.length * 2) {
      // Jump back to the middle set without animation
      setCurrentIndex(videos.length);
    } else if (currentIndex < 0) {
      // Jump to the last set without animation
      setCurrentIndex(videos.length * 2 - 1);
    }
  }, [currentIndex, videos.length]);

  // Start continuous animation
  useEffect(() => {
    if (!mounted) return;
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Pause all videos on unmount
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
        }
      });
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
    if (!animationRef.current && playingVideoIndex === null) {
      startTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  // Handle video click to play in fullscreen
  const playVideoFullscreen = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    // Pause carousel animation
    pauseAutoplay();
    
    try {
      // Set video attributes for better fullscreen handling
      video.style.objectFit = "contain"; // This ensures original aspect ratio is preserved
      
      // Request fullscreen on the video element
      await video.requestFullscreen();
      
      // Play the video with audio
      await video.play();
      setPlayingVideoIndex(index);
      
      // Add event listener for when fullscreen exits
      const onFullscreenChange = () => {
        if (!document.fullscreenElement) {
          video.pause();
          video.currentTime = 0;
          video.style.objectFit = "cover"; // Reset to cover for carousel
          setPlayingVideoIndex(null);
          // Resume carousel autoplay
          resumeAutoplay();
          // Remove event listener
          document.removeEventListener('fullscreenchange', onFullscreenChange);
        }
      };
      
      document.addEventListener('fullscreenchange', onFullscreenChange);
      
    } catch (error) {
      console.log("Fullscreen playback failed:", error);
      // If fullscreen fails, reset object fit
      video.style.objectFit = "cover";
    }
  };

  // Handle fullscreen toggle for already playing video
  const toggleFullscreen = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.style.objectFit = "contain";
      video.requestFullscreen();
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
                We support the{" "}
                <span className="font-playfair italic">
                  People{" "}
                </span>
                who{" "}
                <span className="font-playfair italic">
                  Power{" "}
                </span>
                Hospitality
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-black mt-3 sm:mt-4 mb-4 sm:mb-6"></div>
              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-jost leading-relaxed max-w-3xl">
              Guest complaints are often people-related. Employees face weekly emotional exhaustion, and recognition is rare.
              </p>

              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-jost leading-relaxed max-w-3xl">
                The hospitality industry is feeling the pressure—and this is where we come in. CCA Connect bridges businesses 
                with trusted food, beverage, and hospitality experts who help address operational challenges, strengthen teams, 
                and elevate guest experiences.
              </p>
              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-jost leading-relaxed max-w-3xl">
                Beyond consultancy, we create opportunities for growth and exposure through industry events, summits, bootcamps, 
                and team training and development programs—bringing professionals together to learn, collaborate, and move the 
                hospitality industry forward.<br className="hidden sm:block" />
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

              {/* Video Controls Hint */}
              <div className="absolute top-3 right-3 z-30 opacity-70 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm hidden sm:block">
                Click video to play fullscreen
              </div>

              {/* Slide indicators for mobile */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2 lg:hidden">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      pauseAutoplay();
                      setCurrentIndex(index + videos.length);
                      setTimeout(resumeAutoplay, 5000);
                    }}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      Math.floor(currentIndex) % videos.length === index 
                        ? 'bg-[#225475] w-4 sm:w-6' 
                        : 'bg-gray-400/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel track - responsive gap and video dimensions */}
              <div 
                className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 transition-none"
                style={{
                  transform: mounted ? `translateX(-${currentIndex * slideWidth}px)` : 'none',
                }}
              >
                {extendedVideos.map((video, index) => (
                  <div
                    key={`${video.src}-${index}`}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 group shadow-md sm:shadow-lg lg:shadow-xl"
                    style={{
                      minWidth: mounted ? `${slideWidth - (mounted && window.innerWidth < 480 ? 12 : mounted && window.innerWidth < 640 ? 16 : mounted && window.innerWidth < 768 ? 20 : mounted && window.innerWidth < 1024 ? 22 : 24)}px` : '390px',
                      height: mounted ? `${slideHeight}px` : '600px',
                    }}
                  >
                    <video
                      ref={el => {
                        videoRefs.current[index] = el;
                      }}
                      src={video.src}
                      className="w-full h-full object-cover cursor-pointer"
                      loop
                      playsInline
                      preload="metadata"
                      onClick={() => playVideoFullscreen(index)}
                    />
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                      {/* Top controls - only show fullscreen button when video is playing in carousel */}
                      {playingVideoIndex === index && !document.fullscreenElement && (
                        <div className="absolute top-2 right-2 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFullscreen(index);
                            }}
                            className="bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 sm:p-2 backdrop-blur-sm"
                            aria-label="Fullscreen"
                          >
                            <Maximize2 size={mounted ? (window.innerWidth < 480 ? 14 : 16) : 16} />
                          </button>
                        </div>
                      )}

                      {/* Center play button with fullscreen icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playVideoFullscreen(index);
                          }}
                          className="bg-white/90 hover:bg-white text-[#225475] rounded-full p-3 sm:p-4 md:p-5 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                          aria-label="Play fullscreen"
                        >
                          <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>

                      {/* Fullscreen indicator */}
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={12} />
                        <span>Click for fullscreen</span>
                      </div>
                    </div>
                    
                    {/* Optional caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-end p-4 pointer-events-none">
                      <span className="text-white text-sm font-medium">{video.alt}</span>
                    </div>
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