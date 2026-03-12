"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function Section1() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-8xl w-[87%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-black">
            What we{" "}
            <span className={playfair.className}>
              actually do
            </span>
          </h2>

          <div className="w-32 h-[2px] bg-black mt-4 mb-2"></div>

          <div className="space-y-6 text-gray-800 leading-relaxed text-2xl">
            <p>
              CCA Connect is the industry engagement arm of CCA Manila,
              created to strengthen the link between education, expertise,
              and real-world hospitality practice.
            </p>

            <p>
              We work closely with hospitality businesses through a holistic
              approach—looking beyond individual challenges to support the full
              ecosystem of operations, people, service, and guest experience.
              By translating industry knowledge & best practices into practical,
              real-world solutions, we help businesses build stronger, more
              sustainable foundations.
            </p>

            <p>
              More than a one-time engagement, CCA Connect is a long-term
              partner for progress. Through curated bootcamps, hands-on
              workshops, and purposeful industry connections, we support
              businesses as they adapt, and evolve.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[600px]">
          <Image
            src="/about/section1/1.png"
            alt="CCA Connect discussion"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}