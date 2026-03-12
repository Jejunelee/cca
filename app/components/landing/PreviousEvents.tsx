"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  {
    src: "/landing/pevents/1.png",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
    
  },
    {
    src: "/landing/pevents/2.png",
    caption: "CCA CONNECT BOOTCAMP\nBRITTANY HOTEL",
  },
  
];

export default function PreviousEvents() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#f4f4f4] py-12 flex justify-center">
      <div className="w-[87%] max-w-8xl">

        {/* Image Container */}
        <div className="relative w-full h-[720px] overflow-hidden">

          <Image
            src={images[index].src}
            alt="Previous Event"
            fill
            className="object-cover"
            priority
          />

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#225475] bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#225475] bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-105 transition-all hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 right-6 text-white text-right text-sm tracking-wide whitespace-pre-line">
            {images[index].caption}
          </div>
        </div>

        {/* Bottom Title Bar */}
        <div className="bg-black py-6 text-center">
          <h2 className="text-6xl text-[#b9cfe0] font-light">
            Our previous{" "}
            <span className="italic font-serif text-white">
              Events
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}