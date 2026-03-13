"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

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
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-20">
          {team.map((member, i) => (
            <div key={i} className="bg-[#F5F5F5] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              
              <div className="relative w-full aspect-[3/4] sm:h-[200px] md:h-[220px] lg:h-[240px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>

              <div className="font-poppins p-2 sm:p-3 md:p-4 text-center">
                <h3 className="text-black text-sm sm:text-base md:text-lg font-medium leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] md:text-xs tracking-widest text-gray-600 mt-0.5 sm:mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="font-poppins text-center max-w-3xl mx-auto text-black px-2 sm:px-4">
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