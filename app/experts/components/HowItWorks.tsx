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
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - completely unchanged */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-light text-black leading-tight">
            How does it{" "}
            <span className={`${playfair.className} italic text-gray-800`}>
              work?
            </span>
          </h2>

          <p className="font-poppins max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2 sm:px-4">
            Your gateway to Philippines' top Food, Beverage, and
            Hospitality experts—streamlined for success.
          </p>
        </div>

        {/* Simple, human-friendly step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step number - soft and friendly */}
              <div className="mb-5">
                <span className="text-5xl font-light text-[#AFCFE4]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-gray-600 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gentle closing note */}
        <div className="text-center mt-16 pt-8">
          <p className="font-poppins text-gray-500 text-sm italic">
            Simple, transparent, and human-first.
          </p>
        </div>
      </div>
    </section>
  );
}