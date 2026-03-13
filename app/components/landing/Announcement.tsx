"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface AnnouncementProps {
  message?: string;
  linkText?: string;
  linkUrl?: string;
  onClose?: () => void;
  variant?: 'info' | 'success' | 'warning' | 'promo';
  dismissible?: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const Announcement: React.FC<AnnouncementProps> = ({ 
  message = "🎟️ Summit Tickets are on Sale! Get the early bird discount now.",
  linkText = "Get Tickets",
  linkUrl = "https://www.events.ccaconnect.co",
  onClose,
  variant = 'promo',
  dismissible = true,
  autoClose = false,
  autoCloseDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldMarquee, setShouldMarquee] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, isVisible, autoCloseDelay]);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current && containerRef.current) {
        // Only check for overflow on mobile screens
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
          const contentWidth = contentRef.current.scrollWidth;
          const containerWidth = containerRef.current.offsetWidth;
          setShouldMarquee(contentWidth > containerWidth);
        } else {
          setShouldMarquee(false);
        }
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [message, linkText]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const variants = {
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      link: 'text-blue-600 hover:text-blue-800',
      border: 'border-blue-100'
    },
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      link: 'text-green-600 hover:text-green-800',
      border: 'border-green-100'
    },
    warning: {
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      link: 'text-amber-600 hover:text-amber-800',
      border: 'border-amber-100'
    },
    promo: {
      bg: 'bg-gradient-to-r from-[#1A1934] to-[#2D2A4A]',
      text: 'text-white',
      link: 'text-white hover:text-indigo-200',
      border: 'border-[#2D2A4A]'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div 
      className={`
        relative w-full py-2 sm:py-1.5 px-3 sm:px-4
        ${currentVariant.bg}
        ${currentVariant.text}
        border-b ${currentVariant.border}
        animate-slideDown
      `}
      role="banner"
      aria-label="Announcement"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Main content container - centered on desktop, marquee on mobile */}
          <div className="flex-1 flex justify-center min-w-0">
            <div 
              ref={containerRef}
              className="overflow-hidden max-w-full"
            >
              <div 
                ref={contentRef}
                className={`
                  inline-flex items-center gap-1 sm:gap-2
                  text-xs sm:text-sm md:text-base lg:text-lg
                  ${shouldMarquee ? 'animate-marquee hover:pause-animation' : ''}
                `}
                style={{
                  whiteSpace: shouldMarquee ? 'nowrap' : 'normal',
                  ...(shouldMarquee ? { willChange: 'transform' } : {})
                }}
              >
                {/* Desktop layout (centered) */}
                {!shouldMarquee && (
                  <div className="flex flex-col xs:flex-row items-center justify-center gap-1 sm:gap-2 text-center xs:text-left">
                    {/* Message with responsive animations */}
                    <span className="font-poppins relative overflow-hidden">
                      <span className={`
                        inline-block
                        animate-bounce-subtle
                        ${isHovered ? 'animate-bounce-intense' : ''}
                        px-1
                      `}>
                        {message}
                      </span>
                    </span>
                    
                    {/* Link with responsive styling */}
                    {linkText && linkUrl && (
                      <a 
                        href={linkUrl} 
                        className={`
                          inline-flex items-center justify-center xs:justify-start 
                          gap-1 sm:gap-1.5
                          font-semibold 
                          transition-all duration-200
                          hover:gap-2 sm:hover:gap-2
                          group
                          ${currentVariant.link}
                          animate-pulse-subtle
                          hover:animate-none
                          text-xs sm:text-sm md:text-base
                          mt-1 xs:mt-0
                        `}
                        onClick={(e) => {
                          if (autoClose) handleClose();
                        }}
                      >
                        <span className="relative whitespace-nowrap">
                          {linkText}
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left hidden sm:block" />
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110 animate-slideRight" />
                      </a>
                    )}
                  </div>
                )}

                {/* Mobile marquee layout (single line) */}
                {shouldMarquee && (
                  <>
                    {/* Message with responsive animations */}
                    <span className="font-poppins relative overflow-hidden">
                      <span className={`
                        inline-block
                        animate-bounce-subtle
                        ${isHovered ? 'animate-bounce-intense' : ''}
                        px-1
                      `}>
                        {message}
                      </span>
                    </span>
                    
                    {/* Separator dot for marquee mode */}
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 mx-2" />
                    
                    {/* Link */}
                    {linkText && linkUrl && (
                      <a 
                        href={linkUrl} 
                        className={`
                          inline-flex items-center justify-center 
                          gap-1 sm:gap-1.5
                          font-semibold 
                          transition-all duration-200
                          hover:gap-2 sm:hover:gap-2
                          group
                          ${currentVariant.link}
                          animate-pulse-subtle
                          hover:animate-none
                          text-xs sm:text-sm md:text-base
                          flex-shrink-0
                        `}
                        onClick={(e) => {
                          if (autoClose) handleClose();
                        }}
                      >
                        <span className="relative whitespace-nowrap">
                          {linkText}
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left hidden sm:block" />
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110 animate-slideRight" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button 
              onClick={handleClose}
              className={`
                flex-shrink-0 p-1 sm:p-1.5 rounded-lg
                ${currentVariant.text} 
                hover:bg-black/5
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                hover:rotate-90
                active:scale-95
                z-10
              `}
              aria-label="Close announcement"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Auto-close progress bar */}
      {autoClose && isVisible && (
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-black/10"
          style={{
            animation: `shrink ${autoCloseDelay}ms linear forwards`
          }}
        />
      )}

      {/* Responsive animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1.5px);
          }
        }

        @keyframes bounceIntense {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-3px);
          }
          75% {
            transform: translateY(-1px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .animate-slideRight {
          animation: slideRight 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }

        .animate-bounce-intense {
          animation: bounceIntense 0.5s ease-in-out;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        /* Hover pause for accessibility */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\:flex-row {
            flex-direction: row;
          }
          .xs\:text-left {
            text-align: left;
          }
          .xs\:justify-start {
            justify-content: flex-start;
          }
          .xs\:mt-0 {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const AnnouncementExamples = () => {
  return (
    <div className="space-y-2 sm:space-y-4 w-full">
      <Announcement 
        variant="info"
        message="📢 System maintenance scheduled for Sunday 2 AM EST"
        linkText="Learn More"
        linkUrl="/maintenance"
      />
      
      <Announcement 
        variant="success"
        message="✨ New feature: Dark mode is now available!"
        linkText="Try it now"
        linkUrl="/settings"
      />
      
      <Announcement 
        variant="warning"
        message="⚠️ Holiday shipping deadlines approaching"
        linkText="View deadlines"
        linkUrl="/shipping"
      />
      
      <Announcement 
        variant="promo"
        message="🎉 Flash sale: 30% off all plans. Limited time only!"
        linkText="Shop now"
        linkUrl="/pricing"
        autoClose={true}
        autoCloseDelay={8000}
      />
    </div>
  );
};

export default Announcement;