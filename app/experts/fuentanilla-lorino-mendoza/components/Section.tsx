// app/experts/page.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ExpertsPage() {
  return (
    <main className="w-full">
      {/* Kerwin Fuentanilla - Left aligned */}
      <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-end order-1">
            <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[840px]">
                <Image
                  src="/experts/team/fuentanilla.png"
                  alt="Kerwin Fuentanilla"
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
              Kerwin Fuentanilla
            </h2>

            <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
              CERTIFIED EXECUTIVE CHEF
            </p>

            <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
              <p>
                Chef Kerwin Fuentanilla is the Program Manager and chef-instructor at CCA Manila, 
                where he leads academic programs and mentors the next generation of culinary professionals.
              </p>

              <p>
                A Certified Executive Chef (CEC) under the American Culinary Federation, he has been 
                instrumental in CCA's pursuit of global accreditation and innovation in culinary education.
              </p>

              <p>
                He has proudly represented the Philippines in international competitions and spearheaded 
                programs like the Fundamentals in Filipino Cuisine course. Deeply passionate about regional 
                heritage, Chef Kerwin celebrates and elevates Filipino flavors—most notably from his hometown 
                of Zamboanga—bringing them to both local and global stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Miguel Lorino - Right aligned */}
      <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
        <div className="max-w-8xl w-[80%] mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="max-w-3xl mx-auto lg:mx-0 order-2 lg:order-1">
            <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-4 text-center lg:text-left">
              Miguel Lorino
            </h2>

            <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
              CERTIFIED EXECUTIVE CHEF
            </p>

            <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
              <p>
                Chef Miguel Lorino is a Chef Instructor at the Center for Culinary Arts (CCA Manila), 
                where he combines technical excellence with a passion for teaching. A Certified Executive 
                Chef (CEC) under the American Culinary Federation, he has helped raise the bar for Philippine 
                culinary education by modeling international standards of discipline, skill, and professionalism.
              </p>

              <p>
                Beyond the classroom, Chef Miguel has proudly represented CCA Manila in international competitions, 
                earning gold, silver, and bronze medals at prestigious events such as the HOFEX-Hong Kong International 
                Culinary Classic. With expertise in both classical and plant-based cooking, he champions innovation 
                while remaining deeply rooted in the values of culinary tradition.
              </p>

              <p>
                His commitment to mentorship and excellence continues to inspire the next generation of Filipino chefs.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[840px]">
                <Image
                  src="/experts/team/lorino.png"
                  alt="Miguel Lorino"
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

      {/* Cedric Mendoza - Left aligned */}
      <section className="w-full bg-white py-20 md:py-24 lg:py-40 px-8 sm:px-10">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-end order-1">
            <div className="drop-shadow-xl relative w-full max-w-[640px] sm:max-w-[700px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:h-[840px]">
                <Image
                  src="/experts/team/mendoza.png"
                  alt="Cedric Mendoza"
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

          {/* Right Column - Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 order-2">
            <h2 className="text-5xl sm:text-6xl font-semibold text-black mb-4 text-center lg:text-left">
              Cedric Mendoza
            </h2>

            <p className="tracking-widest text-black mb-5 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
              HEAD OF BEVERAGES
            </p>

            <div className="w-32 sm:w-40 h-1.5 bg-[#9bb7c9] mb-8 sm:mb-10 mx-auto lg:mx-0"></div>

            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-black/80 leading-relaxed">
              <p>
                Cedric Mendoza earned Manhattan Singapore the #1 in Asia and #3 in the World awards 
                on the 50 Best list for three years as its Head of Beverages.
              </p>

              <p>
                He created the beverage menu for OTW Coffee, Taqueria Franco, Bar Botanica, 
                Tight Rope Coffee, and Cheshire, and is presently the managing partner of 
                ReCraft and Bar.Flora.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}