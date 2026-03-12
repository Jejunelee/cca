"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function Header() {
  return (
    <section className="w-full bg-gradient-to-b from-[#AFCFE4]/80 to-white py-16 px-6 flex items-center justify-center">
      <div className="max-w-lg text-center mt-24">
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-light text-black font-poppins">
          Our{" "}
          <span className="font-playfair italic font-semibold">
            Goal
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          To bridge between ideas and industry: connecting hospitality
          businesses with expert consultants, bootcamps, and training
          programs to elevate standards.
        </p>

      </div>
    </section>
  );
}