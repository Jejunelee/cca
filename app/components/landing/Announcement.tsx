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
  speed?: 'slow' | 'normal' | 'fast';
}

const Announcement: React.FC<AnnouncementProps> = ({ 
  message = "🎟️ Summit Tickets are on Sale! Get the early bird discount now.",
  linkText = "Get Tickets",
  linkUrl = "https://www.events.ccaconnect.co",
  onClose,
  variant = 'promo',
  dismissible = true,
  autoClose = false,
  autoCloseDelay = 5000,
  speed = 'normal'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [duplicateCount, setDuplicateCount] = useState(2);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, isVisible, autoCloseDelay]);

  useEffect(() => {
    // Calculate how many duplicates we need based on screen width
    const calculateDuplicates = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth / duplicateCount;
        const containerWidth = window.innerWidth - 100; // Account for padding and close button
        const needed = Math.ceil(containerWidth / contentWidth) + 1;
        setDuplicateCount(Math.max(2, needed));
      }
    };

    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, [message, linkText, duplicateCount]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const variants = {
    info: {
      bg: 'bg-[#AFCFE4]',
      text: 'text-black',
      link: 'text-black hover:text-indigo-800',
      border: 'border-[#AFCFE4]'
    },
    success: {
      bg: 'bg-[#AFCFE4]',
      text: 'text-black',
      link: 'text-black hover:text-indigo-800',
      border: 'border-[#AFCFE4]'
    },
    warning: {
      bg: 'bg-[#AFCFE4]',
      text: 'text-black',
      link: 'text-black hover:text-indigo-800',
      border: 'border-[#AFCFE4]'
    },
    promo: {
      bg: 'bg-[#AFCFE4]',
      text: 'text-black',
      link: 'text-black hover:text-indigo-800',
      border: 'border-[#AFCFE4]'
    }
  };

  const currentVariant = variants[variant];

  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee-normal',
    fast: 'animate-marquee-fast'
  };

  const renderContent = (key: number) => (
    <div key={key} className="inline-flex items-center gap-1 sm:gap-2 px-2">
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
      
      {/* Separator dot */}
      <span className="w-1 h-1 rounded-full bg-current opacity-50 mx-2 flex-shrink-0" />
      
      {/* Link with responsive styling */}
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
    </div>
  );

  return (
    <div 
      className={`
        relative w-full py-2 sm:py-1.5 px-3 sm:px-4
        ${currentVariant.bg}
        ${currentVariant.text}
        border-b ${currentVariant.border}
        animate-slideDown
        overflow-hidden
      `}
      role="banner"
      aria-label="Announcement"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Main content container - infinite marquee */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div 
              ref={contentRef}
              className={`
                inline-flex
                ${speedClasses[speed]}
                hover:pause-animation
                whitespace-nowrap
              `}
            >
              {/* Render multiple copies for seamless infinite loop */}
              {Array.from({ length: duplicateCount }).map((_, i) => renderContent(i))}
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
                ml-auto
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

        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-normal {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused !important;
        }

        /* Pause on hover for better accessibility */
        .animate-marquee-slow:hover,
        .animate-marquee-normal:hover,
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }

        /* Responsive animation speeds */
        @media (max-width: 640px) {
          .animate-marquee-slow {
            animation-duration: 30s;
          }
          .animate-marquee-normal {
            animation-duration: 20s;
          }
          .animate-marquee-fast {
            animation-duration: 15s;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee-slow {
            animation-duration: 25s;
          }
          .animate-marquee-normal {
            animation-duration: 18s;
          }
          .animate-marquee-fast {
            animation-duration: 12s;
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
        speed="slow"
      />
      
      <Announcement 
        variant="success"
        message="✨ New feature: Dark mode is now available!"
        linkText="Try it now"
        linkUrl="/settings"
        speed="normal"
      />
      
      <Announcement 
        variant="warning"
        message="⚠️ Holiday shipping deadlines approaching"
        linkText="View deadlines"
        linkUrl="/shipping"
        speed="normal"
      />
      
      <Announcement 
        variant="promo"
        message="🎉 Flash sale: 30% off all plans. Limited time only!"
        linkText="Shop now"
        linkUrl="/pricing"
        autoClose={true}
        autoCloseDelay={8000}
        speed="fast"
      />
    </div>
  );
};

export default Announcement;