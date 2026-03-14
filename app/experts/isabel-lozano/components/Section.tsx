// app/components/expert-profile-lozano.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertProfileLozano() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative flex justify-center lg:justify-end order-1">
          <div className="drop-shadow-xl relative w-full max-w-[400px] sm:max-w-[440px] rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[4/5] sm:h-[520px]">
              <Image
                src="/experts/team/lozano.jpg"
                alt="Isabel Lozano"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                priority
              />
            </div>

            {/* Social Icons */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} color="white" className="sm:hidden" />
                <Facebook size={18} color="white" className="hidden sm:block" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} color="white" className="sm:hidden" />
                <Instagram size={18} color="white" className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="max-w-xl mx-auto lg:mx-0 order-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-2 text-center lg:text-left">
            Isabel Lozano
          </h2>

          <p className="tracking-widest text-black mb-3 sm:mb-4 text-xs sm:text-sm text-center lg:text-left">
            DECORUM BY MIL
          </p>

          <div className="w-20 sm:w-24 h-[3px] bg-[#9bb7c9] mb-5 sm:mb-6 mx-auto lg:mx-0"></div>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-black/80 leading-relaxed">
            <p>
              Decorum by MIL is the Philippines' first Experience Management company, 
              specializing in sensorial design—curating immersive, multi-sensory experiences 
              that delight guests and empower staff.
            </p>

            <p>
              Led by Isabel Lozano, who brings over two decades of global expertise in 
              luxury hospitality, fine dining, real estate, and heritage conversions, 
              Decorum blends creativity, elegance, and human connection.
            </p>

            <p>
              After 24 years in San Francisco, Isabel returned to the Philippines, 
              now serving as Director of Hospitality for Antonio's Group of Restaurants 
              while consulting for leading names such as Hapag, The Wholesome Table, 
              W17 Home, Anya Resort, and Wildflour Hospitality Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}