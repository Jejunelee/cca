"use client";

import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-14 md:py-16 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-8xl w-[95%] sm:w-[92%] md:w-[90%] lg:w-[87%] mx-auto">

        {/* Top Images - responsive grid and heights */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          
          {/* First Image - responsive height and column span */}
          <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] md:col-span-3 rounded-lg overflow-hidden">
            <Image
              src="/training/section1/1.png"
              alt="Workshop session"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 30vw, 25vw"
              priority
            />
          </div>

          {/* Second Image - responsive height and column span */}
          <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] md:col-span-7 rounded-lg overflow-hidden">
            <Image
              src="/training/section1/2.png"
              alt="Team workshop"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Bottom Content - responsive grid and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-start">

          {/* Text Section - responsive typography */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-5 md:mb-6 font-poppins leading-tight">
              Strengths Assessment{" "}
              <span className="font-playfair sm:inline mt-1 sm:mt-0">
                Workshop
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              Discover your team's natural talents with the Gallup
              CliftonStrengths® assessment. This workshop helps participants
              leverage their top strengths to improve collaboration,
              leadership, and performance. Ideal for leaders and growing
              teams, it builds more engaged, high-performing workplaces.
            </p>
          </div>

          {/* Powered By Section - responsive alignment */}
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4 sm:mb-5 md:mb-6">
              POWERED BY
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full flex flex-col items-center md:items-end">
              
              {/* Logo 1 - responsive sizing */}
              <div className="relative w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] bg-white p-1.5 sm:p-2 rounded-md shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/training/section1/p1.png"
                  alt="Xavier & Associates"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 480px) 180px, (max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
                />
              </div>

              {/* Logo 2 - responsive sizing */}
              <div className="relative w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] bg-white p-1.5 sm:p-2 rounded-md shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/training/section1/p2.png"
                  alt="Gallup"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 480px) 180px, (max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
                />
              </div>
            </div>

            {/* Optional partner description for mobile */}
            <p className="text-gray-500 text-xs mt-4 text-center md:text-right md:hidden">
              Certified partners in excellence
            </p>
          </div>

        </div>

      </div>

      {/* Mobile-specific touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .hover\\:scale-105:active {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
}