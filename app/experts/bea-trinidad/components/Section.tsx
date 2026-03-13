// app/experts/page.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertsPage() {
  return (
    <main className="w-full">
      {/* Bea Trinidad - Left aligned (image left, text right) */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-end order-1">
            <div className="drop-shadow-xl relative w-full max-w-[400px] sm:max-w-[440px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[520px]">
                <Image
                  src="/experts/team/trinidad.jpg"
                  alt="Bea Trinidad"
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
              Bea Trinidad
            </h2>

            <p className="tracking-widest text-black mb-3 sm:mb-4 text-xs sm:text-sm text-center lg:text-left">
              PR & MARKETING MANAGER AT CCA MANILA
            </p>

            <div className="w-20 sm:w-24 h-[3px] bg-[#9bb7c9] mb-5 sm:mb-6 mx-auto lg:mx-0"></div>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-black/80 leading-relaxed">
              <p>
                She helps food & beverage founders grow with story, strategy, and soul. 
                With over 11 years in the food industry—from owning a tequila bar in Melbourne 
                to leading communications for the Philippines' first culinary school—she knows 
                how to turn ideas into brands people crave.
              </p>

              <p>
                As the founder of her studio, Type Harder, and PR Director for food brands, 
                she partners with entrepreneurs who have something special but struggle to 
                capture it in words.
              </p>

              <p>
                Bea crafts brand stories, campaigns, and content systems that cut through 
                the noise, build real connection, and remind audiences that food is culture, 
                not just commodity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Fine Studios - Right aligned (image right, text left) */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Content (appears first on desktop) */}
          <div className="max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-2 text-center lg:text-left">
              Works Fine Studios
            </h2>

            <div className="w-20 sm:w-24 h-[3px] bg-[#9bb7c9] mb-5 sm:mb-6 mx-auto lg:mx-0"></div>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-black/80 leading-relaxed">
              <p>
                Works Fine Studios is a strategy-first marketing partner for founders who 
                want more than a logo.
              </p>

              <p>
                We help brands grow with clear positioning, smart execution, and marketing 
                that drives results. Founded by Shopee PH's former Head of Brand Marketing 
                & Creative Director.
              </p>
            </div>
          </div>

          {/* Right Column - Image (appears second on desktop) */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="drop-shadow-xl relative w-full max-w-[400px] sm:max-w-[440px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[520px]">
                <Image
                  src="/experts/team/worksfine-t.png"
                  alt="Works Fine Studios"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
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
        </div>
      </section>
    </main>
  );
}