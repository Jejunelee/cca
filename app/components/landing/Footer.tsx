"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoykpR2xw0OG-Pa6yB1ypOZxY_1pbpDpXarb4JfDLAk1qJi-_R4prfuPaInl0TIUEJ/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");

    try {
      // Send to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString()
      });

      setStatus("success");
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);

    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus("error");
      
      // Reset error message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#AFCFE4] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 font-jost">
      <div className="max-w-8xl w-[95%] sm:w-[93%] md:w-[93%] mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        
        {/* Left Section - responsive spacing */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-md w-full">
          
          {/* Newsletter Section */}
          <div className="w-full">
            <h3 className="text-black text-base sm:text-lg font-medium mb-2 sm:mb-3 font-jost">
              Join our Growing Community!
            </h3>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center border-b border-black pb-1 sm:pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-transparent outline-none text-xs sm:text-sm placeholder:text-black/60 flex-1 py-1 font-jost"
                  aria-label="Email address for newsletter"
                  required
                  disabled={status === "loading"}
                />
                <button 
                  type="submit"
                  className="text-black text-lg sm:text-xl ml-2 hover:translate-x-1 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-jost"
                  aria-label="Subscribe to newsletter"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "..." : "→"}
                </button>
              </div>
            </form>
            
            {/* Success/Error messages */}
            {status === "success" && (
              <p className="text-green-800 text-xs mt-2 animate-pulse flex items-center font-jost">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thanks for subscribing!
              </p>
            )}
            
            {status === "error" && (
              <p className="text-red-800 text-xs mt-2 flex items-center font-jost">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Something went wrong. Try again.
              </p>
            )}
            
            <p className="text-[10px] sm:text-xs text-black/60 mt-1 sm:mt-2 font-jost">
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
          <p className="text-xs text-black/60 mt-4 md:hidden font-jost">
            © {currentYear} CCA Connect. All rights reserved.
          </p>
        </div>

        {/* Right Section - responsive layout */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Divider - hidden on mobile, shown on desktop */}
          <div className="hidden md:block w-px bg-black/30 h-24 lg:h-28 xl:h-32" aria-hidden="true" />

          {/* Contact Links */}
          <div className="flex flex-col gap-1.5 sm:gap-2 text-black">
            <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base font-jost">
              Connect With Us
            </h4>
            
            <a 
              href="mailto:piagtrinidad@cca-manila.edu.ph"
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1 cursor-pointer font-jost"
            >
              Email Us
            </a>
            
            <Link 
              href="/JoinUs" 
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1 font-jost"
            >
              Schedule a Call
            </Link>
            
            <Link 
              href="/JoinUs" 
              className="text-xs sm:text-sm hover:underline hover:text-black/80 transition-colors duration-200 py-1 font-jost"
            >
              Become an Expert
            </Link>

            {/* Desktop copyright - hidden on mobile */}
            <p className="hidden md:block text-xs sm:text-sm text-black/60 mt-4 sm:mt-5 md:mt-6 font-jost">
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
          button:disabled:active {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}