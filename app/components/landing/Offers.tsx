"use client";

import Image from "next/image";
import Link from "next/link";

export default function Offers() {
  const offers = [
    {
      title: "Consultancy Services",
      image: "/landing/offers1x.jpg",
      description: "Strategic guidance for your business growth",
      href: "/experts"  // Internal link
    },
    {
      title: "Bootcamps & Summits",
      image: "/landing/offers2x.jpg",
      description: "Intensive learning experiences and networking",
      href: "https://www.events.ccaconnect.co/",  // External link
      external: true
    },
    {
      title: "Training Programs",
      image: "/landing/offers3x.jpg",
      description: "Comprehensive skill development courses",
      href: "/training"  // Internal link
    },
  ];

  const handleClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // For internal links, Next.js Link component handles navigation
      // This function is just for the card click if needed
    }
  };

  return (
    <section className="w-full bg-[#E7F5F5] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative overflow-hidden">
      {/* Gradient at the top - responsive height */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 bg-gradient-to-b from-[#f3f3f3] to-transparent pointer-events-none z-0" />
      
      {/* Gradient at the bottom - responsive height */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 bg-gradient-to-t from-[#f3f3f3] to-transparent pointer-events-none z-0" />
      
      {/* Decorative Elements - optimized for mobile (reduced on small screens) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-32 sm:w-48 md:w-64 lg:w-96 xl:w-124 h-32 sm:h-48 md:h-64 lg:h-96 xl:h-124 bg-[#f3f3f3]/40 sm:bg-[#f3f3f3]/60 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-50 sm:opacity-100" />
        <div className="absolute bottom-20 right-0 w-32 sm:w-48 md:w-64 lg:w-96 xl:w-124 h-32 sm:h-48 md:h-64 lg:h-96 xl:h-124 bg-[#f3f3f3]/40 sm:bg-[#f3f3f3]/60 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-50 sm:opacity-100" />
      </div>

      <div className="max-w-8xl w-full mx-auto relative z-10">
        
        {/* Heading with responsive sizing and mobile centering */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-center md:text-left">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-tight leading-tight">
            What we <span className="italic font-playfair text-black">Offer</span>
          </h2>
        </div>

        {/* Cards with responsive grid and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 relative">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-center md:items-start group relative">
              
              {/* Vertical separator - hidden on mobile, responsive positioning on desktop */}
              {index < offers.length - 1 && (
                <div className="absolute -right-4 lg:-right-5 xl:-right-6 2xl:-right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#8fb3c9]/40 to-transparent hidden lg:block" />
              )}
              
              {/* Image container with responsive height - now clickable */}
              {offer.external ? (
                <a 
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] rounded-lg overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl shadow-[#8fb3c9]/10 lg:shadow-[#8fb3c9]/20 cursor-pointer block"
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-all duration-500 md:duration-700 group-hover:scale-105 md:group-hover:scale-110"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Enhanced overlay gradient - simplified on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8fb3c9]/80 via-[#8fb3c9]/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:duration-500" />
                  
                  {/* Description that appears on hover - responsive padding, always visible on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/60 to-transparent md:bg-none md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 md:duration-500">
                    <p className="text-white text-xs sm:text-sm md:text-base font-light leading-relaxed md:text-white md:opacity-100">
                      {offer.description}
                    </p>
                  </div>

                  {/* Decorative corner accents - hidden on mobile for cleaner look */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-t-2 border-r-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500 hidden md:block" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-b-2 border-l-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500 hidden md:block" />
                </a>
              ) : (
                <Link 
                  href={offer.href}
                  className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] rounded-lg overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl shadow-[#8fb3c9]/10 lg:shadow-[#8fb3c9]/20 cursor-pointer block"
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-all duration-500 md:duration-700 group-hover:scale-105 md:group-hover:scale-110"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Enhanced overlay gradient - simplified on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8fb3c9]/80 via-[#8fb3c9]/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:duration-500" />
                  
                  {/* Description that appears on hover - responsive padding, always visible on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/60 to-transparent md:bg-none md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 md:duration-500">
                    <p className="text-white text-xs sm:text-sm md:text-base font-light leading-relaxed md:text-white md:opacity-100">
                      {offer.description}
                    </p>
                  </div>

                  {/* Decorative corner accents - hidden on mobile for cleaner look */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-t-2 border-r-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500 hidden md:block" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-b-2 border-l-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500 hidden md:block" />
                </Link>
              )}

              {/* Title with responsive sizing - now clickable */}
              {offer.external ? (
                <a
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-2 sm:gap-3 w-full justify-center md:justify-start group/title cursor-pointer"
                >
                  <span className="w-4 sm:w-6 md:w-8 h-px bg-[#8fb3c9]/0 md:group-hover/title:w-8 lg:group-hover/title:w-10 xl:group-hover/title:w-12 group-hover/title:bg-[#8fb3c9] transition-all duration-300 hidden md:block" />
                  <p className="text-black text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-playfair tracking-wide text-center md:text-left group-hover/title:translate-x-0 md:group-hover/title:translate-x-2 transition-transform duration-300">
                    {offer.title}
                  </p>
                </a>
              ) : (
                <Link
                  href={offer.href}
                  className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-2 sm:gap-3 w-full justify-center md:justify-start group/title cursor-pointer"
                >
                  <span className="w-4 sm:w-6 md:w-8 h-px bg-[#8fb3c9]/0 md:group-hover/title:w-8 lg:group-hover/title:w-10 xl:group-hover/title:w-12 group-hover/title:bg-[#8fb3c9] transition-all duration-300 hidden md:block" />
                  <p className="text-black text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-playfair tracking-wide text-center md:text-left group-hover/title:translate-x-0 md:group-hover/title:translate-x-2 transition-transform duration-300">
                    {offer.title}
                  </p>
                </Link>
              )}

              {/* Subtle index indicator - responsive positioning */}
              <span className="mt-1 text-[10px] sm:text-xs md:text-sm text-[#8fb3c9] font-light tracking-widest text-center md:text-left md:ml-8 lg:ml-10 xl:ml-11">
                0{index + 1}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* Mobile-specific styles for better touch experience */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:active .group-hover\\:scale-105 {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
}