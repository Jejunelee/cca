"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter signup logic here
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#9CB3C2] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
      <div className="max-w-8xl w-[95%] sm:w-[93%] md:w-[93%] mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        
        {/* Left Section - responsive spacing */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-md w-full">
          
          {/* Newsletter Section */}
          <div className="w-full">
            <h3 className="text-black text-base sm:text-lg font-medium mb-2 sm:mb-3">
              Join our Growing Community!
            </h3>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center border-b border-black pb-1 sm:pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-transparent outline-none text-xs sm:text-sm placeholder:text-black/60 flex-1 py-1"
                  aria-label="Email address for newsletter"
                  required
                />
                <button 
                  type="submit"
                  className="text-black text-lg sm:text-xl ml-2 hover:translate-x-1 transition-transform duration-200 active:translate-x-2"
                  aria-label="Subscribe to newsletter"
                >
                  →
                </button>
              </div>
            </form>
            
            {/* Success message */}
            {subscribed && (
              <p className="text-green-800 text-xs mt-2 animate-pulse">
                Thanks for subscribing!
              </p>
            )}
            
            <p className="text-[10px] sm:text-xs text-black/60 mt-1 sm:mt-2">
              Subscribe to receive updates and news
            </p>
          </div>

          {/* Logo - responsive sizing */}
          <div className="mt-2 sm:mt-3 md:mt-4">
            <Image
              src="/logo.png"
              alt="CCA Connect – Connecting communities through expertise"
              width={120}
              height={80}
              className="object-contain w-[100px] sm:w-[110px] md:w-[120px] h-auto"
              priority={false}
            />
          </div>

          {/* Mobile copyright - visible only on mobile */}
          <p className="text-xs text-black/60 mt-4 md:hidden">
            © {currentYear} CCA Connect. All rights reserved.
          </p>
        </div>

        {/* Right Section - responsive layout */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Divider - hidden on mobile, shown on desktop */}
          <div className="hidden md:block w-px bg-black/30 h-24 lg:h-28 xl:h-32" aria-hidden="true" />

          {/* Contact Links */}
          <div className="flex flex-col gap-1.5 sm:gap-2 text-black">
            <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Connect With Us</h4>
            
            <a 
              href="mailto:hello@ccaconnect.com" 
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1"
            >
              Email Us
            </a>
            
            <a 
              href="#" 
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1"
            >
              Schedule a Call
            </a>
            
            <a 
              href="#" 
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1"
            >
              Become an Expert
            </a>

            {/* Desktop copyright - hidden on mobile */}
            <p className="hidden md:block text-xs sm:text-sm text-black/60 mt-4 sm:mt-5 md:mt-6">
              © {currentYear} CCA Connect. All rights reserved.
            </p>
          </div>

          {/* Optional social links (can be added later) */}
          <div className="flex flex-col gap-2 sm:hidden">
            {/* Placeholder for mobile social icons if needed */}
          </div>
        </div>
      </div>

      {/* Mobile-specific improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          input, button {
            -webkit-appearance: none;
            border-radius: 0;
          }
          button:active {
            transform: translateX(4px);
          }
        }
      `}</style>
    </footer>
  );
}