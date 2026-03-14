"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

// Expert data mapping based on the provided basis
const expertSlugs: Record<string, string> = {
  "Xavier Alpasa": "xavier-alpasa",
  "Isabel Lozano": "isabel-lozano",
  "RL Garcia": "rl-garcia",
  "Bea Trinidad": "bea-trinidad",
  "Marinela Trinidad": "", // No slug provided in the basis for Marinela
};

const team = [
  {
    name: "Xavier Alpasa",
    role: "XAVIER ASSOCIATES",
    image: "/about/team/xavier.png",
  },
  {
    name: "Isabel Lozano",
    role: "DECORUM BY MIL",
    image: "/about/team/isabel.png",
  },
  {
    name: "RL Garcia",
    role: "HR HEAD OF BRITTANY HOTELS",
    image: "/about/team/rl.png",
  },
  {
    name: "Bea Trinidad",
    role: "PR & MARKETING MANAGER",
    image: "/about/team/bea.png",
  },
  {
    name: "Marinela Trinidad",
    role: "CEO",
    image: "/about/team/marinela.png",
  },
];

export default function Team() {
  // Helper function to check if expert has a valid slug
  const hasValidSlug = (memberName: string): boolean => {
    const slug = expertSlugs[memberName];
    return !!(slug && slug.trim() !== "");
  };

  // Helper function to get expert link
  const getExpertLink = (memberName: string): string => {
    const slug = expertSlugs[memberName];
    return slug ? `/experts/${slug}` : "#";
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-20">
          {team.map((member, i) => {
            const validSlug = hasValidSlug(member.name);
            const expertLink = getExpertLink(member.name);
            
            const CardContent = (
              <div className="bg-[#F5F5F5] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative w-full aspect-[3/4] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  
                  {/* Subtle overlay on hover for all cards */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="font-poppins p-2 sm:p-3 md:p-4 text-center">
                  <h3 className="text-black text-sm sm:text-base md:text-lg font-medium leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-600 mt-0.5 sm:mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            );

            return validSlug ? (
              <Link 
                key={i} 
                href={expertLink}
                className="group block focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={i} className="group">
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="font-poppins text-center max-w-6xl mx-auto text-black px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-5 md:mb-6 leading-tight">
            We are more than{" "}
            <span className={playfair.className}>
              five faces.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            CCA Connect is more than a small core team. Behind every engagement
            is a wide network of trusted industry connections—professionals,
            mentors, and practitioners who collaborate to deliver well-rounded,
            relevant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}