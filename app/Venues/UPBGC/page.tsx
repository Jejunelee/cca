"use client";

import { Navigation, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

// Venue data with local images
const venues = [
  {
    id: "kitchen-lab",
    name: "Kitchen Lab",
    description:
      "A dynamic and innovative culinary space designed for hands-on cooking experiences, team-building activities, and intimate chef's table events. Features state-of-the-art equipment and professional-grade kitchen facilities.",
    images: [
      "/venues/KitchenLab/1.jpg",
      "/venues/KitchenLab/2.jpg",
      "/venues/KitchenLab/3.jpg",
    ],
  },
  {
    id: "kitchen-studios",
    name: "Kitchen Studios",
    description:
      "Versatile studio spaces perfect for cooking classes, food photography, content creation, and private dining experiences. Combines functionality with elegant design for memorable gatherings.",
    images: [
      "/venues/KitchenStudio/1.jpg",
    ],
  },
];

export default function UPBGCPage() {
  const [selectedVenue, setSelectedVenue] = useState<(typeof venues)[0] | null>(
    null
  );
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (venue: (typeof venues)[0], index: number = 0) => {
    // Only open gallery if there is more than one image
    if (venue.images.length > 1) {
      setSelectedVenue(venue);
      setGalleryIndex(index);
    }
  };

  const closeGallery = () => {
    setSelectedVenue(null);
    setGalleryIndex(0);
  };

  const nextImage = () => {
    if (selectedVenue) {
      setGalleryIndex((prev) => (prev + 1) % selectedVenue.images.length);
    }
  };

  const prevImage = () => {
    if (selectedVenue) {
      setGalleryIndex(
        (prev) => (prev - 1 + selectedVenue.images.length) % selectedVenue.images.length
      );
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col" style={{ background: "linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 40%, #FFFFFF 85%, #FFFFFF 100%)" }}>
      {/* Hero Section with Map */}
      <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-5 md:px-8 lg:px-20 py-12 lg:py-16">
          <div className="max-w-xl">
            {/* Mobile Location Badge */}
            <div className="lg:hidden inline-block bg-[#AFCFE4] text-black text-xs px-3 py-1 rounded-full mb-3 font-jost">
              UP BGC Branch
            </div>

            {/* Title */}
            <h1 className="font-brisa text-4xl md:text-5xl lg:text-[78px] text-[#AFCFE4] mb-2 leading-tight">
              UP BGC
            </h1>

            {/* Address */}
            <p className="font-jost text-base md:text-lg lg:text-[22px] text-black leading-snug">
              Bonifacio Global City,
              <br />
              Taguig,
              <br />
              1630 Metro Manila
            </p>

            {/* Divider */}
            <div className="w-20 md:w-24 lg:w-32 h-[3px] md:h-[4px] lg:h-[5px] bg-[#AFCFE4] mt-5 md:mt-6 lg:mt-7 mb-6 md:mb-8 lg:mb-12"></div>

            {/* Description */}
            <p className="font-jost text-base md:text-lg lg:text-[22px] leading-relaxed text-black mb-6 lg:mb-0">
              UP BGC in Bonifacio Global City offers exceptional culinary venues 
              designed for immersive cooking experiences, private dining, and creative 
              events. Whether you're looking for a professional kitchen lab or a 
              versatile studio space, our facilities provide the perfect backdrop 
              for unforgettable gatherings.
            </p>

            {/* Mobile Get Directions Button */}
            <div className="lg:hidden mt-6">
              <a
                href="https://maps.google.com/?q=UP%20BGC%20Bonifacio%20Global%20City"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#AFCFE4] text-black px-6 py-3 rounded-lg font-jost text-base hover:bg-[#9bbfd4] transition shadow-md"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Map */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto relative">
          <iframe
            src="https://maps.google.com/maps?q=UP+BGC+Bonifacio+Global+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="UP BGC Location"
          />

          {/* Mobile Map Overlay Button */}
          <div className="lg:hidden absolute bottom-4 left-4 right-4">
            <a
              href="https://maps.google.com/?q=UP+BGC+Bonifacio+Global+City"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/95 backdrop-blur-sm text-gray-800 text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg font-jost font-medium"
            >
              <Navigation size={16} className="text-[#AFCFE4]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* VENUES SECTION */}
      <section className="w-full py-16 md:py-24 px-5 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-brisa text-3xl md:text-4xl lg:text-5xl text-[black] mb-3">
              Our Venues at UP BGC
            </h2>
            <div className="w-16 h-[2px] bg-[#AFCFE4] mx-auto mb-5"></div>
            <p className="font-jost text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Distinct culinary venues crafted for memorable moments — from hands-on cooking experiences to private dining celebrations.
            </p>
          </div>

          {/* Venues Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className={`group ${venue.images.length > 1 ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => openGallery(venue)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                  <img
                    src={venue.images[0]}
                    alt={venue.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {/* Light Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                </div>
                {/* Venue Name */}
                <h3 className="font-brisa text-xl md:text-2xl text-gray-800 mb-2">
                  {venue.name}
                </h3>
                {/* Description */}
                <p className="font-jost text-gray-500 text-sm md:text-base leading-relaxed">
                  {venue.description}
                </p>
                {/* Conditional View Photos Link */}
                {venue.images.length > 1 ? (
                  <div className="mt-3 text-[#AFCFE4] font-jost text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>View photos</span>
                    <span className="text-lg leading-none">→</span>
                  </div>
                ) : (
                  <div className="mt-3 text-gray-400 font-jost text-sm flex items-center gap-1 opacity-70">
                    <span>1 photo</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN GALLERY MODAL */}
      {selectedVenue && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition p-2"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {/* Venue Title (minimal, top-left) */}
          <div className="absolute top-5 left-5 z-10 text-white/70 font-jost text-sm tracking-wide hidden md:block">
            {selectedVenue.name}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 font-jost text-xs">
            {galleryIndex + 1} / {selectedVenue.images.length}
          </div>

          {/* Main Image */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedVenue.images[galleryIndex]}
              alt={`${selectedVenue.name} view ${galleryIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Arrows */}
            {selectedVenue.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip (minimal) */}
          {selectedVenue.images.length > 1 && (
            <div
              className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVenue.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 transition-all ${
                    idx === galleryIndex
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Desktop Get Directions Button - Hidden on mobile */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-10">
        <a
          href="https://maps.google.com/?q=UP+BGC+Bonifacio+Global+City"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#AFCFE4] text-black px-6 py-3 rounded-lg font-jost text-lg hover:bg-[#9bbfd4] transition shadow-lg hover:shadow-xl"
        >
          <Navigation size={20} />
          <span>Get Directions</span>
        </a>
      </div>
    </main>
  );
}