'use client'

import { useEffect, useState, useRef } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0
  })
  
  const hasAnimatedRef = useRef<boolean>(false) // Type with initial value false
  const sectionRef = useRef<HTMLElement>(null) // Type with initial value null
  const animationRef = useRef<NodeJS.Timeout | undefined>(undefined) // Type with initial value undefined

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        // Check if element is visible and animation hasn't run yet
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true // Set ref to true immediately
          startCounting()
        }
      },
      {
        threshold: [0, 0.25, 0.3, 0.5, 0.75, 1],
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, []) // Empty dependency array - only runs once

  const startCounting = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = {
      stat1: 60,
      stat2: 70,
      stat3: 33.33
    }

    let currentStep = 0

    animationRef.current = setInterval(() => {
      currentStep++
      
      setCounts({
        stat1: Math.min(Math.round((targets.stat1 / steps) * currentStep), targets.stat1),
        stat2: Math.min(Math.round((targets.stat2 / steps) * currentStep), targets.stat2),
        stat3: Math.min(parseFloat(((targets.stat3 / steps) * currentStep).toFixed(2)), targets.stat3)
      })

      if (currentStep >= steps) {
        if (animationRef.current) {
          clearInterval(animationRef.current)
        }
      }
    }, interval)
  }

  const formatStat3 = (value: number): string => {
    if (value === 0) return '0%'
    if (value < 33.33) {
      const percentage = (value / 33.33) * 100
      
      if (percentage < 25) return '1 in 0'
      if (percentage < 50) return '1 in 1'
      if (percentage < 75) return '1 in 2'
      return '1 in 3'
    }
    return '1 in 3'
  }

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[120px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] flex items-center justify-center overflow-hidden"
    >
      
      {/* Top scrim - responsive height */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-24 md:h-32 lg:h-48 pointer-events-none z-10 bg-gradient-to-b from-black/20 to-transparent" />
      
      {/* Background with subtle parallax - optimized for mobile */}
      <div className="absolute inset-0 bg-black/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-50 scale-105 animate-subtle-zoom z-0"
        style={{ backgroundImage: "url('/landing/stats.png')" }}
      />
      
      {/* Gradient overlay for depth - enhanced for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 sm:from-transparent sm:via-black/50 sm:to-black/80 z-0" />

      {/* Content - HIGHEST Z-INDEX */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-24">
        {/* Flex row for horizontal layout on all devices */}
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 text-center text-white font-poppins">
          
          {/* Stat 1 - UPDATED DESCRIPTION */}
          <div className="group flex-1 min-w-[110px] max-w-[150px] sm:max-w-none space-y-1 sm:space-y-3 md:space-y-4 lg:space-y-6 animate-fade-up [animation-delay:200ms]">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                {counts.stat1}%
              </h2>
              <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/80 leading-tight sm:leading-relaxed tracking-wide">
              of guest complaints are <span className="font-semibold text-white">people-related, not product-related</span>
            </p>
          </div>

          {/* Stat 2 - UPDATED DESCRIPTION */}
          <div className="group flex-1 min-w-[110px] max-w-[150px] sm:max-w-none space-y-1 sm:space-y-3 md:space-y-4 lg:space-y-6 animate-fade-up [animation-delay:400ms]">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                {counts.stat2}%
              </h2>
              <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/80 leading-tight sm:leading-relaxed tracking-wide">
              of employees in hospitality report <span className="font-semibold text-white">emotional exhaustion at least once a week</span>
            </p>
          </div>

          {/* Stat 3 - UPDATED DESCRIPTION */}
          <div className="group flex-1 min-w-[110px] max-w-[150px] sm:max-w-none space-y-1 sm:space-y-3 md:space-y-4 lg:space-y-6 animate-fade-up [animation-delay:600ms]">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                {counts.stat3 === 0 ? '0%' : formatStat3(counts.stat3)}
              </h2>
              <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/80 leading-tight sm:leading-relaxed tracking-wide">
              of frontliners feel <span className="font-semibold text-white">recognized for great service</span>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom scrim for smoother transition - added for mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:hidden pointer-events-none z-10 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Animation styles with performance optimizations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes subtleZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.02);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-subtle-zoom {
          animation: subtleZoom 20s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-subtle-zoom {
            animation: subtleZoom 30s ease-in-out infinite;
          }
        }
      `}</style>

    </section>
  )
}