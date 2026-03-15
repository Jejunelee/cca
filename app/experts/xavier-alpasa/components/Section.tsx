"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertProfile() {
  // Responsive icon sizes using CSS
  const iconSize = "clamp(14px, 4vw, 18px)";
  
  return (
    <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
        {/* Left Column - Image */}
        <div className="relative flex justify-center lg:justify-end order-1">
          <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[4/5] sm:h-[840px]">
              <Image
                src="/experts/team/alpasa.png"
                alt="Xavier Alpasa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                priority
              />
            </div>

            {/* Social Icons */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} color="white" className="sm:hidden" />
                <Facebook size={28} color="white" className="hidden sm:block" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} color="white" className="sm:hidden" />
                <Instagram size={28} color="white" className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="max-w-2xl mx-auto lg:mx-0 order-2">
          <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-4 text-center lg:text-left">
            Xavier Alpasa
          </h2>

          <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
            XAVIER ASSOCIATES
          </p>

          <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
            <p>
              Xavier & Associates (XAA) is an innovation-driven business
              consulting firm led by serial entrepreneur, formator, and TED
              Fellow Xavier Alpasa (Professor X). As one of our expert partners,
              XAA helps organizations create real, lasting transformation by
              guiding leaders in designing smarter processes and more strategic
              decisions.
            </p>

            <p>
              They specialize in three core areas: Discovering Purpose
              (strategy), Developing People (talent development), and Driving
              Profit (financial planning and management).
            </p>

            <p>
              Through their signature consulting method, Process X, XAA empowers
              clients to deeply understand their challenges and co-create
              transformative, customized solutions—never generic, off-the-shelf
              fixes. Their work spans across industries and organization sizes,
              from multinational corporations and homegrown businesses to
              nonprofits and social enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}