"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const steps = [
  {
    title: "Share us your vision",
    description:
      "Tell us about your project goals, unique challenges, and specific requirements. The more we know, the better we can serve you.",
  },
  {
    title: "Meet your perfect match",
    description:
      "We carefully pair you with a vetted Food, Beverage, or Hospitality expert whose experience aligns perfectly with your needs.",
  },
  {
    title: "Collaborate & create",
    description:
      "Partner directly with your expert to craft a customized project plan and proposal that brings your vision to life.",
  },
  {
    title: "We'll handle the rest",
    description:
      "From screening and contracts to payments and project management—we take care of everything behind the scenes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto text-center w-full">
        {/* Title with refined typography - responsive sizing */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-tight">
          How does it{" "}
          <span className={`${playfair.className} italic text-gray-800 sm:inline mt-1 sm:mt-0`}>
            work?
          </span>
        </h2>

        {/* Decorative divider - responsive sizing */}
        <div className="relative flex justify-center items-center my-4 sm:my-5 md:my-6">
          <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-[2px] bg-gray-300"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full mx-1.5 sm:mx-2"></div>
          <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-[2px] bg-gray-300"></div>
        </div>

        {/* Subtitle - responsive sizing */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 leading-relaxed px-2 sm:px-4">
          Your gateway to Philippines' top Food, Beverage, and
          Hospitality experts—streamlined for success.
        </p>

        {/* Steps grid - responsive gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group flex flex-col h-full text-center relative px-2 sm:px-3 md:px-4"
            >
              {/* Step card with subtle border on hover - responsive negative margin */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gray-200 rounded-lg transition-colors duration-300 -m-2 sm:-m-3 md:-m-4" />
              
              {/* Step number - responsive sizing */}
              <div className="mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm font-mono text-gray-400 tracking-wider">
                STEP {i + 1}
              </div>

              {/* Title - responsive sizing */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3 md:mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Description - responsive sizing */}
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base px-1 sm:px-2">
                {step.description}
              </p>

              {/* Timeline indicator - responsive sizing */}
              <div className="mt-auto w-full flex flex-col items-center">
                <div className="w-full h-2 sm:h-2.5 md:h-3 bg-[#AFCFE4] rounded-full relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[4px] sm:-top-[5px] md:-top-[6px] w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#AFCFE4] border border-black sm:border-2 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600" />
                </div>
              </div>

              {/* Connecting line between steps - only on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 xl:-right-5 top-[30%] w-6 h-[2px] bg-gradient-to-r from-[#AFCFE4]/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Optional bottom accent */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#AFCFE4]/10 rounded-full">
            <p className="text-xs sm:text-sm text-gray-600">
              Ready to start? <a href="/contact" className="font-semibold text-[#225475] hover:underline">Get in touch →</a>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-specific touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:active .group-hover\\:scale-110 {
            transform: scale(1.05);
          }
          .group:active .group-hover\\:border-gray-200 {
            border-color: rgba(229, 231, 235, 0.5);
          }
        }
      `}</style>
    </section>
  );
}