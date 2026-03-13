"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const events = [
  {
    title: "HOSPITALITY SUMMIT",
    date: "June 4, 2026",
    image: "/landing/events/1.png",
  },
  {
    title: "SHARED TABLE",
    date: "March 28, 2026",
    image: "/landing/events/3.jpg",
  },
];

export default function Events() {
  return (
    <section className="w-full bg-[#f5f5f5] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title with subtle underline accent - responsive sizing */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-center sm:text-left">
          <h2 className={`${playfair.className} text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light tracking-tight leading-tight`}>
            Don't miss the next one...
          </h2>
          <div className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 lg:w-24 bg-[#8fb3c9] mt-2 sm:mt-3 md:mt-4 mx-auto md:mx-0 rounded-full" />zz
        </div>

        {/* Events grid - responsive gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="shadow-lg group bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-xl rounded-lg overflow-hidden"
            >
              {/* Image with subtle border - responsive height */}
              <div className="relative w-full h-[200px] xs:h-[220px] sm:h-[250px] md:h-[280px] lg:h-[320px] xl:h-[340px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 md:group-hover:scale-110"
                  sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 50vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                
                {/* Optional overlay on hover - hidden on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info Bar with refined styling - responsive padding */}
              <div className="bg-[#E7F5F5] px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-4 sm:py-5 md:py-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className={`${playfair.className} text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-black mb-0.5 sm:mb-1 leading-tight`}>
                      {event.title}
                    </h3>
                    <p className="text-base italic sm:text-lg md:text-lg lg:text-xl text-gray-700">
                      {event.date}
                    </p>
                  </div>

                  <a
                    href="https://www.events.ccaconnect.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-700 transition-colors duration-300 group/link self-start sm:self-center"
                  >
                    <span className="text-sm sm:text-base md:text-base lg:text-lg border-b border-transparent group-hover/link:border-black transition-all duration-300">
                      Learn More
                    </span>
                    <svg 
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle view all link - responsive spacing */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="https://www.events.ccaconnect.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 group"
          >
            <span className="text-sm sm:text-base md:text-lg border-b border-transparent group-hover:border-black transition-all duration-300">
              View all events
            </span>
            <span className="ml-2 text-sm sm:text-base md:text-lg group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Mobile-specific touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:active {
            transform: translateY(-2px);
          }
          .group:active .group-hover\\:scale-105 {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
}