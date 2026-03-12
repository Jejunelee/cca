"use client";

import Image from "next/image";

export default function PoweredBy() {
  return (
    <section className="w-full bg-white py-2 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <p className="text-sm tracking-widest text-gray-600 mb-4">
          POWERED BY
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          
          <Image
            src="/about/poweredby/1.png"
            alt="Xavier & Associates"
            width={1229}
            height={188}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}