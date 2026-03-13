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
      <div className="w-full max-w-4xl text-center mt-24 sm:mt-32">
        
        {/* Title - Responsive text sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-black font-poppins leading-[1] sm:leading-[1]">
          Service and{" "}
          <span className="font-playfair italic font-semibold sm:inline">
            Space
          </span>
          {" "}Design
        </h1>

      </div>
    </section>
  );
}