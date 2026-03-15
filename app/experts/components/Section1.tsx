"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const services = [
  {
    title: "FOOD AND BAR MENU DEVELOPMENT",
    image: "/experts/section1/1.jpg",
    expertSlug: "fuentanilla-lorino-mendoza",
  },
  {
    title: "KITCHEN AND BAKERY TRAINING",
    image: "/experts/section1/2.jpg",
    expertSlug: null, // No expert assigned
  },
  {
    title: "CULINARY, HOSPITALITY, AND MANAGEMENT TRAINING DEVELOPMENT",
    image: "/experts/section1/3.jpg",
    expertSlug: "xavier-alpasa",
  },
  {
    title: "SERVICE DESIGN",
    image: "/experts/section1/4.jpg",
    expertSlug: "isabel-lozano",
  },
  {
    title: "PR & MARKETING",
    image: "/experts/section1/5.jpg",
    expertSlug: "bea-trinidad",
  },
  {
    title: "TALENT ACQUISITION",
    image: "/experts/section1/6.jpg",
    expertSlug: "rl-garcia",
  },
  {
    title: "LEGAL/ACCOUNTING",
    image: "/experts/section1/7.jpg",
    expertSlug: null, // No expert assigned
  },
  {
    title: "PACKAGING & DISTRIBUTION",
    image: "/experts/section1/8.jpg",
    expertSlug: null, // No expert assigned
  },
];

export default function Section1() {
  // Helper function to determine if separator should be shown
  const shouldShowSeparator = (index: number, columns: number): boolean => {
    return (index + 1) % columns !== 0 && index < services.length - 1;
  };

  // Helper function to get link href
  const getLinkHref = (service: typeof services[0]) => {
    if (!service.expertSlug) return "#";
    return `/experts/${service.expertSlug}`;
  };

  // Helper function to check if link is disabled
  const isDisabled = (service: typeof services[0]) => {
    return !service.expertSlug;
  };

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title with improved spacing and subtle animation - responsive sizing */}
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-12 sm:mb-12 md:mb-12 lg:mb-12 xl:mb-12 text-black leading-tight text-center sm:text-left">
          Here's where we{" "}
          <span className={`${playfair.className} italic bg-black bg-clip-text text-transparent sm:inline mt-1 sm:mt-0`}>
            come in
          </span>
        </h2>

        {/* Grid with enhanced hover effects - responsive gaps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 relative">
          {services.map((service, index) => {
            const linkHref = getLinkHref(service);
            const disabled = isDisabled(service);
            
            const CardContent = (
              <div 
                className={`group text-center relative transition-all duration-300 ${
                  disabled 
                    ? 'opacity-60 grayscale-[60%] hover:opacity-50 cursor-not-allowed' 
                    : 'cursor-pointer'
                }`}
              >
                {/* Improved vertical separators with smoother gradient - responsive positioning */}
                {shouldShowSeparator(index, 2) && (
                  <div className="block md:hidden absolute -right-2 sm:-right-2.5 md:-right-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                )}
                {shouldShowSeparator(index, 3) && (
                  <div className="hidden md:block lg:hidden absolute -right-3 md:-right-3.5 lg:-right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                )}
                {shouldShowSeparator(index, 4) && (
                  <div className="hidden lg:block absolute -right-4 xl:-right-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                )}

                {/* Image container with subtle overlay and zoom effect - responsive aspect ratio */}
                <div className={`relative w-full aspect-square mb-2 sm:mb-3 md:mb-4 lg:mb-5 overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 ${
                  disabled ? 'brightness-90' : ''
                }`}>
                  <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${
                    disabled 
                      ? 'bg-gray-50 opacity-10' 
                      : 'bg-black opacity-0 group-hover:opacity-10'
                  }`} />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-500 sm:duration-700 ${
                      disabled 
                        ? '' 
                        : 'group-hover:scale-105 sm:group-hover:scale-110'
                    }`}
                    sizes="(max-width: 480px) 45vw, (max-width: 640px) 45vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  
                  {/* Subtle border on hover - only for enabled services */}
                  {!disabled && (
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-300 rounded-lg sm:rounded-xl" />
                  )}
                </div>

                {/* Improved typography with better readability - responsive sizing */}
                <p className={`text-[10px] xs:text-xs sm:text-sm md:text-base tracking-wider font-medium px-1 sm:px-2 leading-tight transition-colors duration-300 ${
                  disabled 
                    ? 'text-gray-900' 
                    : 'text-gray-900 group-hover:text-gray-900'
                }`}>
                  {service.title}
                </p>
                
                {/* Show "Coming Soon" badge for disabled services */}
                {disabled && (
                  <span className="inline-block mt-1.5 text-[8px] xs:text-[9px] sm:text-[10px] font-semibold text-gray-800 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            );

            return disabled ? (
              <div key={index} className="cursor-default">
                {CardContent}
              </div>
            ) : (
              <Link 
                key={index} 
                href={linkHref}
                className="block transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* Optional subtle pattern background (only on desktop) */}
        <div className="hidden lg:block absolute left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none -mt-8 opacity-50" />
      </div>

      {/* Mobile-specific touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:active .group-hover\\:scale-105 {
            transform: scale(1.03);
          }
          .group:active .group-hover\\:opacity-10 {
            opacity: 0.05;
          }
        }
      `}</style>
    </section>
  );
}