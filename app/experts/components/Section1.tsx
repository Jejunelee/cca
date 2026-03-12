"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const services = [
  {
    title: "FOOD AND BAR MENU DEVELOPMENT",
    image: "/experts/section1/1.png",
  },
  {
    title: "KITCHEN AND BAKERY TRAINING",
    image: "/experts/section1/2.png",
  },
  {
    title: "CULINARY, HOSPITALITY, AND MANAGEMENT TRAINING DEVELOPMENT",
    image: "/experts/section1/3.png",
  },
  {
    title: "SERVICE DESIGN",
    image: "/experts/section1/4.png",
  },
  {
    title: "PR & MARKETING",
    image: "/experts/section1/5.png",
  },
  {
    title: "TALENT ACQUISITION",
    image: "/experts/section1/6.png",
  },
  {
    title: "LEGAL/ACCOUNTING",
    image: "/experts/section1/7.png",
  },
  {
    title: "PACKAGING & DISTRIBUTION",
    image: "/experts/section1/8.png",
  },
];

export default function Section1() {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          Here’s where we{" "}
          <span className={playfair.className}>
            come in
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="text-center">

              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm tracking-wide font-medium text-gray-800">
                {service.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}