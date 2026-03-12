"use client";

import React, { useState, useEffect } from 'react';
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
  linkUrl = "/tickets",
  onClose,
  variant = 'promo',
  dismissible = true,
  autoClose = false,
  autoCloseDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, isVisible, autoCloseDelay]);

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
        relative w-full py-1.5 px-4
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
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <span className="font-poppins relative overflow-hidden">
                <span className={`
                  inline-block
                  animate-bounce-subtle
                  ${isHovered ? 'animate-bounce-intense' : ''}
                `}>
                  {message}
                </span>
              </span>
              
              {linkText && linkUrl && (
                <a 
                  href={linkUrl} 
                  className={`
                    inline-flex items-center gap-1.5
                    font-semibold 
                    transition-all duration-200
                    hover:gap-2
                    group
                    ${currentVariant.link}
                    animate-pulse-subtle
                    hover:animate-none
                  `}
                  onClick={(e) => {
                    if (autoClose) handleClose();
                  }}
                >
                  <span className="relative">
                    {linkText}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110 animate-slideRight" />
                </a>
              )}
            </div>
          </div>

          {dismissible && (
            <button 
              onClick={handleClose}
              className={`
                flex-shrink-0 p-1.5 rounded-lg
                ${currentVariant.text} 
                hover:bg-black/5
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                hover:rotate-90
                active:scale-95
              `}
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {autoClose && isVisible && (
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-black/10"
          style={{
            animation: `shrink ${autoCloseDelay}ms linear forwards`
          }}
        />
      )}

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
      `}</style>
    </div>
  );
};

export const AnnouncementExamples = () => {
  return (
    <div className="space-y-4">
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