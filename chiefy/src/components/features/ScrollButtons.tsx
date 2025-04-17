"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ScrollButtons() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {/* Up Button - Positioned higher */}
      <button
        onClick={scrollUp}
        className="fixed left-6 top-[40%] transform -translate-y-1/2 transition-all duration-300 bg-gradient-to-br from-gray-900/0 via-purple-900/0 to-indigo-900/0 p-2 rounded-xl"
        aria-label="Scroll to top"
      >
        <div className="relative w-16 h-32 hover:scale-105 transition-transform">
          <Image
            src="/images/up-arrow-purple.png"
            alt="Scroll Up"
            fill
            className="object-contain opacity-80 hover:opacity-100"
          />
        </div>
      </button>

      {/* Down Button - Positioned lower */}
      <button
        onClick={scrollDown}
        className="fixed right-6 top-[60%] transform -translate-y-1/2 transition-all duration-300 bg-gradient-to-br from-gray-900/0 via-purple-900/0 to-indigo-900/0 p-2 rounded-xl"
        aria-label="Scroll to bottom"
      >
        <div className="relative w-16 h-32 hover:scale-105 transition-transform">
          <Image
            src="/images/down-arrow-dark.png"
            alt="Scroll Down"
            fill
            className="object-contain opacity-80 hover:opacity-100"
          />
        </div>
      </button>
    </>
  );
} 