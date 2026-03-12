"use client";

import Image from "next/image";
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
  },
  {
    title: "KITCHEN AND BAKERY TRAINING",
    image: "/experts/section1/2.jpg",
  },
  {
    title: "CULINARY, HOSPITALITY, AND MANAGEMENT TRAINING DEVELOPMENT",
    image: "/experts/section1/3.jpg",
  },
  {
    title: "SERVICE DESIGN",
    image: "/experts/section1/4.jpg",
  },
  {
    title: "PR & MARKETING",
    image: "/experts/section1/5.jpg",
  },
  {
    title: "TALENT ACQUISITION",
    image: "/experts/section1/6.jpg",
  },
  {
    title: "LEGAL/ACCOUNTING",
    image: "/experts/section1/7.jpg",
  },
  {
    title: "PACKAGING & DISTRIBUTION",
    image: "/experts/section1/8.jpg",
  },
];

export default function Section1() {
  // Helper function to determine if separator should be shown
  const shouldShowSeparator = (index: number, columns: number): boolean => {
    return (index + 1) % columns !== 0 && index < services.length - 1;
  };

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title with improved spacing and subtle animation - responsive sizing */}
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-black leading-tight text-center sm:text-left">
          Here's where we{" "}
          <span className={`${playfair.className} italic bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent sm:inline mt-1 sm:mt-0`}>
            come in
          </span>
        </h2>

        {/* Grid with enhanced hover effects - responsive gaps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 relative">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group text-center relative"
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
              <div className="relative w-full aspect-square mb-2 sm:mb-3 md:mb-4 lg:mb-5 overflow-hidden rounded-lg sm:rounded-xl">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 sm:duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                  sizes="(max-width: 480px) 45vw, (max-width: 640px) 45vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-300 rounded-lg sm:rounded-xl" />
              </div>

              {/* Improved typography with better readability - responsive sizing */}
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base tracking-wider font-medium text-gray-800 px-1 sm:px-2 transition-colors duration-300 group-hover:text-gray-600 leading-tight">
                {service.title}
              </p>
            </div>
          ))}
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