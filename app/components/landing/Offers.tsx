"use client";

import Image from "next/image";

export default function Offers() {
  const offers = [
    {
      title: "Consultancy Services",
      image: "/landing/offers1-1.png",
      description: "Strategic guidance for your business growth"
    },
    {
      title: "Bootcamps & Summits",
      image: "/landing/offers2.png",
      description: "Intensive learning experiences and networking"
    },
    {
      title: "Training Programs",
      image: "/landing/offers3.png",
      description: "Comprehensive skill development courses"
    },
  ];

  return (
    <section className="w-full bg-[#E7F5F5] py-24 px-24 relative overflow-hidden">
      {/* Gradient at the top from transparent to white */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f3f3f3] to-transparent pointer-events-none z-0" />
      {/* Gradient at the bottom (inverse of the top) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f3f3] to-transparent pointer-events-none z-0" />
      {/* Decorative Elements with main color */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-124 h-124 bg-[#f3f3f3]/100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-124 h-124 bg-[#f3f3f3]/100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-8xl lg:px-8 w-full mx-auto px-6 relative z-10">
        
        {/* Heading with main color accent */}
        <div className="mb-16">
          <h2 className="text-black text-4xl md:text-7xl font-light tracking-tight">
            What we <span className="italic font-playfair text-[#8fb3c9]">Offer</span>
          </h2>
          <div className="h-1 w-24 bg-[#8fb3c9] mt-4 rounded-full" />
        </div>

        {/* Cards with vertical separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-start group relative">
              
{/* Vertical separator (except for the last card) */}
{index < offers.length - 1 && (
  <div className="absolute -right-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#8fb3c9]/80 to-transparent hidden md:block" />
)}
              {/* Image container with enhanced styling */}
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl shadow-[#8fb3c9]/20">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
                
                {/* Enhanced overlay gradient with main color influence */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8fb3c9]/90 via-[#8fb3c9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Description that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-base font-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Decorative corner accent with main color */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/0 group-hover:border-[#8fb3c9]/60 transition-all duration-500" />
              </div>

              {/* Title with main color accent */}
              <div className="mt-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#8fb3c9]/0 group-hover:w-12 group-hover:bg-[#8fb3c9] transition-all duration-300" />
                <p className="text-black text-lg md:text-3xl font-playfair tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  {offer.title}
                </p>
              </div>

              {/* Subtle index indicator with main color */}
              <span className="mt-2 text-sm text-[#8fb3c9] font-light tracking-widest ml-11">
                0{index + 1}
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}