"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Homepage', icon: '🏠', href: '/' }, // Added Homepage button
    { label: 'Mentality Overlay (Mentoring)', icon: '🧠', href: '/mentoring' },
    { label: 'Chiefy Predictive (Voice AI)', icon: '🤖', href: '/voice-ai' },
    { label: 'Dream Team', icon: '🌟', href: '/dream-team' },
    { label: 'Templates', icon: '📑', href: '/templates' },
    { label: 'Chat', icon: '💬', href: '/chat' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/chiefy-logo.png"
                  alt="Chiefy Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                  priority
                  unoptimized
                />
              </div>
              <span className="text-2xl font-black text-[#FFE600] tracking-wider" style={{ WebkitTextStroke: '2px black' }}>Chiefy</span>
            </div>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-[#F8F8F8] rounded-lg hover:text-[#6B4EFF] transition-colors ${
                      pathname === item.href ? 'bg-[#F8F8F8] text-[#6B4EFF]' : ''
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
