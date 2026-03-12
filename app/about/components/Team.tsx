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
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {team.map((member, i) => (
            <div key={i} className="bg-[#F5F5F5] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              
              <div className="relative w-full h-[220px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-black text-lg font-medium">{member.name}</h3>
                <p className="text-xs tracking-widest text-gray-600 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="font-poppins text-center max-w-3xl mx-auto text-black">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            We are more than{" "}
            <span className={playfair.className}>
              five faces.
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
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