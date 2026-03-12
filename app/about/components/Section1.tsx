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
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-8xl w-[95%] sm:w-[92%] md:w-[90%] lg:w-[87%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-light text-black leading-tight">
            What we{" "}
            <span className={playfair.className}>
              actually do
            </span>
          </h2>

          <div className="w-20 sm:w-24 md:w-32 h-[2px] bg-black mt-3 sm:mt-4 mb-4 sm:mb-6"></div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
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
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
          <Image
            src="/about/section1/1.png"
            alt="CCA Connect discussion"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
            priority
          />
        </div>

      </div>
    </section>
  );
}