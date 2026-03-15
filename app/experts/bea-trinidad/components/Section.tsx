// app/experts/page.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertsPage() {
  return (
    <main className="w-full">
      {/* Bea Trinidad - Left aligned (image left, text right) */}
      <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-end order-1">
            <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[840px]">
                <Image
                  src="/experts/team/trinidad.png"
                  alt="Bea Trinidad"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                  priority
                />
              </div>

              {/* Social Icons */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex gap-4">
                <a 
                  href="https://web.facebook.com/anabeatricetrinidad" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} color="white" className="sm:hidden" />
                  <Facebook size={28} color="white" className="hidden sm:block" />
                </a>
                <a 
                  href="https://www.instagram.com/beatrinidad_/" 
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
              Bea Trinidad
            </h2>

            <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
              PR & MARKETING MANAGER AT CCA MANILA
            </p>

            <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
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
      <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
        <div className="max-w-8xl w-[80%] mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Content (appears first on desktop) */}
          <div className="max-w-3xl mx-auto lg:mx-0 order-2 lg:order-1">
            <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-4 text-center lg:text-left">
              Works Fine Studios
            </h2>

            <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
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
            <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[840px]">
                <Image
                  src="/experts/team/worksfine-tt.png"
                  alt="Works Fine Studios"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
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
        </div>
      </section>
    </main>
  );
}