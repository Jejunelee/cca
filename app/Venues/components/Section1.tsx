"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Section1() {
  // Add carousel images array for each venue (now 2 venues)
  const venueImages = [
    [
      "/venues/Alder/1.png",
      "/venues/Acacia/1.png",
      "/venues/Bamboo/1.png",
      "/venues/Origine/1.jpg",
    ],
    [
      "/venues/KitchenStudio/1.jpg",
      "/venues/KitchenLab/1.jpg",
    ]
  ];

  // State for tracking hover of each venue
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // State for carousel indexes
  const [indexes, setIndexes] = useState<number[]>(new Array(2).fill(0));
  
  // Refs for interval cleanup
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>(new Array(2).fill(null));

  // Handle hover start
  const handleMouseEnter = (i: number) => {
    setHoveredIndex(i);
    
    // Clear any existing interval for this venue
    if (intervalRefs.current[i]) {
      clearInterval(intervalRefs.current[i] as NodeJS.Timeout);
    }
    
    // Start carousel for this specific venue
    intervalRefs.current[i] = setInterval(() => {
      setIndexes((prev: number[]) => {
        const newIndexes = [...prev];
        newIndexes[i] = newIndexes[i] === venueImages[i].length - 1 ? 0 : newIndexes[i] + 1;
        return newIndexes;
      });
    }, 1000);
  };

  // Handle hover end
  const handleMouseLeave = (i: number) => {
    setHoveredIndex(null);
    
    // Clear interval for this venue
    if (intervalRefs.current[i]) {
      clearInterval(intervalRefs.current[i] as NodeJS.Timeout);
      intervalRefs.current[i] = null;
    }
    
    // Reset to first image
    setIndexes((prev: number[]) => {
      const newIndexes = [...prev];
      newIndexes[i] = 0;
      return newIndexes;
    });
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      intervalRefs.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  interface Venue {
    name: string;
    location: string;
    image: string;
    link: string;
  }

  const venues: Venue[] = [
    {
      name: "BRITTANY HOTEL",
      location: "BGC",
      image: "/venues/Acacia/1.png",
      link: "Venues/BRITTANY",
    },
    {
      name: "UP BGC",
      location: "BGC",
      image: "/venues/up/1.jpg",
      link: "Venues/UPBGC",
    },
  ];

  return (
    <section className="w-full bg-[#F4F4F4] py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {venues.map((venue: Venue, i: number) => (
          <div 
            key={i} 
            className="bg-white shadow-md overflow-hidden group"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            {/* Image Container with Magnify Effect */}
            <div className="relative w-full h-[320px] overflow-hidden">
              {venueImages[i].map((src: string, idx: number) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === indexes[i] ? "opacity-100" : "opacity-0"
                  } ${hoveredIndex === i ? 'scale-110' : 'scale-100'}`}
                >
                  <Image
                    src={src}
                    alt={venue.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* Bar with main color #AFCFE4 - matching original styling */}
            <div className="bg-[#AFCFE4] text-white flex items-center justify-between px-6 py-5 font-jost">
              <div>
                <h3 className="text-[20px] text-black tracking-wide">
                  {venue.name}
                </h3>
                <p className="text-[15px] text-black opacity-90">
                  {venue.location}
                </p>
              </div>

              <Link
                href={venue.link}
                className="border border-black text-black px-4 py-2 text-[13px] tracking-widest hover:bg-black hover:text-[#AFCFE4] transition"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}