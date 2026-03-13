"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function Header() {
  return (
    <section className="w-full bg-gradient-to-b from-[#AFCFE4]/80 to-white py-12 sm:py-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-4xl text-center mt-24 sm:mt-24">
        
        {/* Title - Responsive text sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-black font-poppins leading-tight sm:leading-normal">
          Join Our{" "}
          <span className="font-playfair italic font-semibold sm:inline">
            Community
          </span>
        </h1>

        {/* Description - Better mobile readability */}
        <p className="max-w-lg mx-auto mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
        Work alongside industry practitioners, consultants, 
        and leaders who believe in shared growth, practical learning, and long-term partnerships.
        </p>

      </div>
    </section>
  );
}