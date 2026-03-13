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
          PR and{" "}
          <span className="font-playfair italic font-semibold sm:inline">
            Marketing
          </span>
        </h1>

      </div>
    </section>
  );
}