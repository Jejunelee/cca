"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const experts = [
  { name: "BEA TRINIDAD", role: "PR AND MARKETING", image: "/experts/team/trinidad.jpg", slug: "bea-trinidad" },
  { name: "KERWIN FUENTANILLA", role: "MENU DEVELOPMENT", image: "/experts/team/fuentanilla.jpg", slug: "fuentanilla-lorino-mendoza" },
  { name: "ISABEL LOZANO", role: "SERVICE AND SPACE DESIGN", image: "/experts/team/lozano.jpg", slug: "isabel-lozano" },
  { name: "CEDRIC MENDOZA", role: "BEVERAGE", image: "/experts/team/mendoza.jpg", slug: "fuentanilla-lorino-mendoza" },
  { name: "MIGUEL LORINO", role: "MENU DEVELOPMENT", image: "/experts/team/lorino.jpg", slug: "fuentanilla-lorino-mendoza" },
  { name: "RL GARCIA", role: "TALENT ACQUISITION", image: "/experts/team/garcia.jpg", slug: "rl-garcia" },
  { name: "XAVIER ALPASA", role: "TRAINING & DEVELOPMENT", image: "/experts/team/alpasa.png", slug: "xavier-alpasa" },
  { name: "WORKS FINE STUDIOS", role: "PR AND MARKETING", image: "/experts/team/worksfine.png", slug: "#" },
];

export default function ExpertsTeam() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">

        {/* Title with responsive sizing and centering */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-black text-center sm:text-left leading-tight">
          The people who make it{" "}
          <span className={`${playfair.className} sm:inline mt-1 sm:mt-0`}>
            happen
          </span>
        </h2>

        {/* Grid with responsive gaps */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">

          {experts.map((expert, i) => (
            <Link
              key={i}
              href={`/experts/${expert.slug}`}
              className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer block"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 md:group-hover:scale-110"
                  sizes="(max-width: 480px) 45vw, (max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 23vw"
                  loading={i < 4 ? "eager" : "lazy"}
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Gradient Overlay - responsive height */}
              <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Overlay - responsive positioning and sizing */}
              <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 z-10 right-2 sm:right-3 md:right-4">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white leading-tight">
                  {expert.name}
                </h3>
                <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/90 leading-tight mt-0.5 sm:mt-1">
                  {expert.role}
                </p>
              </div>

              {/* Optional decorative element on hover */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/50 transition-all duration-300 hidden sm:block" />
            </Link>
          ))}

        </div>
      </div>

      {/* Mobile-specific touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:active .group-hover\\:scale-105 {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
}