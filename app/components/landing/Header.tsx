"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// STEP 1: Define Types
// ====================
type NavigationLink = {
  href: string;
  label: string;
  external?: boolean;
};

// STEP 2: Configure Navigation Data
// =================================
const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/experts", label: "Our Experts" },
  { href: "https://events.ccaconnect.co", label: "Bootcamps", external: true },
  { href: "/training", label: "Training Programs" },
];

// STEP 3: Main Header Component
// ==============================
export default function Header() {
  // State Management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Utility Functions
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full flex justify-center fixed top-13 left-1/2 -translate-x-1/2 z-50 px-4">
      <div className="w-[90%] max-w-7xl bg-[#0a0a0a] rounded-3xl px-4 sm:px-6 py-2 flex items-center justify-between shadow-lg">
        
        {/* STEP 4: Logo Section */}
        <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="CCA Connect">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="CCA" width={614} height={361} className="h-8 w-auto object-contain" priority />
          </div>
        </Link>

        {/* STEP 5: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4" aria-label="Main navigation">
          <ul className="flex items-center gap-1 lg:gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" 
                     className="text-white text-sm lg:text-base hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1 cursor-pointer">
                    {link.label}
                  </a>
                ) : link.href.startsWith('#') ? (
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href.substring(1))}
                     className="text-white text-sm lg:text-base hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1 cursor-pointer">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="text-white text-sm lg:text-base hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Desktop CTA Button */}
          <Link href="/JoinUs" className="bg-[#AFCFE4] text-black px-10 py-2 rounded-2xl text-sm lg:text-base font-medium hover:bg-[#b8d4ef] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A7C8E5] focus:ring-offset-2 focus:ring-offset-black">
            Join Us
          </Link>
        </nav>

        {/* STEP 6: Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* STEP 7: Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-black rounded-2xl shadow-xl border border-white/10 p-4 md:hidden">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {NAVIGATION_LINKS.map((link) => (
                link.external ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" 
                     className="text-white px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" onClick={toggleMobileMenu}>
                    {link.label}
                  </a>
                ) : link.href.startsWith('#') ? (
                  <a key={link.href} href={link.href} onClick={(e) => { handleScroll(e, link.href.substring(1)); toggleMobileMenu(); }}
                     className="text-white px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="text-white px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" onClick={toggleMobileMenu}>
                    {link.label}
                  </Link>
                )
              ))}
              
              {/* Mobile CTA Button */}
              <Link href="/login" className="bg-[#A7C8E5] text-black px-4 py-2 rounded-lg font-medium text-center hover:bg-[#b8d4ef] transition-colors mt-2" onClick={toggleMobileMenu}>
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}