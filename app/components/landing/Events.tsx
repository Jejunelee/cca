"use client";

import Image from "next/image";
import { useState } from "react";

export default function Events() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const events = [
    {
      title: "HOSPITALITY SUMMIT",
      date: "June 2026",
      description: "Connect with industry leaders and explore the future of hospitality",
      image: "/landing/events/1.png",
    },
    {
      title: "TIKIM FOOD MARKET",
      date: "June 2026", 
      description: "Experience the finest local cuisine and artisanal flavors",
      image: "/landing/events/2.png",
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] py-16 md:py-24">
      <div className="w-[87%] max-w-8xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-black/50 font-medium">
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-7xl text-black font-serif mt-3 leading-tight">
            Don't miss the<br />next one...
          </h2>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container with Overlay */}
              <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Date Badge */}
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                  <span className="text-sm font-medium text-black/80">{event.date}</span>
                </div>
              </div>

              {/* Info Bar - Elevated Design */}
              <div className="relative bg-white px-8 py-7 md:px-10 md:py-8">
                {/* Decorative Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-wide leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-black/60 text-base mt-2 max-w-md">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-lg font-medium border-b-2 border-black/20 pb-1 hover:border-black transition-all duration-300 group/link"
                  >
                    <span>Learn More</span>
                    <span className="text-xl transform transition-transform duration-300 group-hover/link:translate-x-2">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-16 md:mt-20">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-black/70 hover:text-black text-lg tracking-wide transition-all duration-300 group"
          >
            <span className="w-12 h-px bg-black/30 group-hover:w-20 transition-all duration-300" />
            <span>View All Events</span>
            <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}