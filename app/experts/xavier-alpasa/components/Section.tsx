"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertProfile() {
  // Responsive icon sizes using CSS
  const iconSize = "clamp(14px, 4vw, 18px)";
  
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative flex justify-center lg:justify-end order-1">
          <div className="drop-shadow-xl relative w-full max-w-[400px] sm:max-w-[440px] rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[4/5] sm:h-[520px]">
              <Image
                src="/experts/team/alpasa.png"
                alt="Xavier Alpasa"
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
            Xavier Alpasa
          </h2>

          <p className="tracking-widest text-black mb-3 sm:mb-4 text-xs sm:text-sm text-center lg:text-left">
            XAVIER ASSOCIATES
          </p>

          <div className="w-20 sm:w-24 h-[3px] bg-[#9bb7c9] mb-5 sm:mb-6 mx-auto lg:mx-0"></div>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-black/80 leading-relaxed">
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