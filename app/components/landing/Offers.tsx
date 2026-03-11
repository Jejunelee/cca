"use client";

import Image from "next/image";

export default function Offers() {
  const offers = [
    {
      title: "Consultancy Services",
      image: "/landing/offers1-1.png",
    },
    {
      title: "Bootcamps & Summits",
      image: "/landing/offers2.png",
    },
    {
      title: "Training Programs",
      image: "/landing/offers3.png",
    },
  ];

  return (
    <section className="w-full bg-[#E7F5F5]/50 py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-black text-4xl md:text-6xl font-light mb-16">
          What we <span className="italic font-playfair">Offer</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-start group">
              
              {/* Image container with increased width */}
              <div className="relative w-full h-[700px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Optional overlay like in Section1 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <p className="text-black mt-6 text-lg font-playfair">
                {offer.title}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}