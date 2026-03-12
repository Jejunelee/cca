'use client'

import { useEffect, useState, useRef } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0
  })
  
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        // Check if more than 75% of the section is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75 && !hasAnimated) {
          setHasAnimated(true)
          startCounting()
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // Track multiple thresholds
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
    }
  }, [hasAnimated])

  const startCounting = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    const targets = {
      stat1: 60,
      stat2: 70,
      stat3: 33.33 // for 1 in 3
    }

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      
      setCounts({
        stat1: Math.min(Math.round((targets.stat1 / steps) * currentStep), targets.stat1),
        stat2: Math.min(Math.round((targets.stat2 / steps) * currentStep), targets.stat2),
        stat3: Math.min(parseFloat(((targets.stat3 / steps) * currentStep).toFixed(2)), targets.stat3)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }

  // Helper function to format stat3 display
  const formatStat3 = (value: number): string => {
    if (value === 0) return '0%'
    if (value < 33.33) {
      // Calculate how many steps we've taken toward 33.33
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
      className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden"
    >
      
      {/* Top scrim - continues the fade from Hero */}
      <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"></div>
      
      {/* Background with subtle parallax */}
      <div className="absolute inset-0 bg-black/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 animate-subtle-zoom z-0"
        style={{ backgroundImage: "url('/landing/stats.png')" }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-0" />

      {/* Content - HIGHEST Z-INDEX */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-24 xl:gap-32 text-center text-white font-poppins">

          {/* Stat 1 */}
          <div className="group space-y-4 md:space-y-6 animate-fade-up [animation-delay:200ms]">
            <div className="relative">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                {counts.stat1}%
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-base md:text-lg lg:text-lg text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              of guest complaints are <span className="font-semibold text-white">people-related</span>, not product-related.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group space-y-4 md:space-y-6 animate-fade-up [animation-delay:400ms]">
            <div className="relative">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent">
                {counts.stat2}%
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-base md:text-lg lg:text-lg text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              of employees in hospitality report <span className="font-semibold text-white">emotional exhaustion</span> at least once a week.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group space-y-4 md:space-y-6 animate-fade-up [animation-delay:600ms]">
            <div className="relative">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-b from-[#AFCFE4] to-[#8fb3c9] bg-clip-text text-transparent whitespace-nowrap">
                {counts.stat3 === 0 ? '0%' : formatStat3(counts.stat3)}
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#AFCFE4]/30 group-hover:w-20 transition-all duration-500" />
            </div>
            <p className="text-base md:text-lg lg:text-lg text-white/80 leading-relaxed tracking-wide max-w-sm mx-auto">
              frontliners feel <span className="font-semibold text-white">recognized for great service</span>.
            </p>
          </div>

        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: scale(1.08);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-subtle-zoom {
          animation: subtleZoom 20s ease-in-out infinite;
        }
      `}</style>

    </section>
  )
}