"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#9CB3C2] py-12 px-6 md:px-16">
      <div className="max-w-8xl w-[93%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <h3 className="text-black text-lg font-medium mb-3">
              Join our Growing Community!
            </h3>

            <div className="flex items-center border-b border-black pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none text-sm placeholder:text-black/60 flex-1"
                aria-label="Email address for newsletter"
              />
              <button 
                className="text-black text-xl ml-2 hover:translate-x-1 transition-transform duration-200"
                aria-label="Subscribe to newsletter"
              >
                →
              </button>
            </div>
            <p className="text-xs text-black/60 mt-2">
              Subscribe to receive updates and news
            </p>
          </div>

          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="CCA Connect – Connecting communities through expertise"
              width={120}
              height={80}
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-10 md:gap-16 items-start">
          
          {/* Divider */}
          <div className="hidden md:block w-px bg-black/30 h-32" aria-hidden="true" />

          {/* Contact Links */}
          <div className="flex flex-col gap-2 text-black">
            <h4 className="font-semibold mb-2">Connect With Us</h4>
            <a 
              href="mailto:hello@ccaconnect.com" 
              className="hover:underline hover:text-black/80 transition-colors duration-200"
            >
              Email Us
            </a>
            <a 
              href="#" 
              className="hover:underline hover:text-black/80 transition-colors duration-200"
            >
              Schedule a Call
            </a>
            <a 
              href="#" 
              className="hover:underline hover:text-black/80 transition-colors duration-200"
            >
              Become an Expert
            </a>

            <p className="text-sm text-black/60 mt-6">
              © {currentYear} CCA Connect. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}