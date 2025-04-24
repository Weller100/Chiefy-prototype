"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Analytics from '@/services/analytics';

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const navItems = [
    { label: 'Homepage', icon: '🏠', href: '/' },
    { label: 'Mentality Overlay (Mentoring)', icon: '🧠', href: '/mentoring' },
    { label: 'Chiefy Predictive (Voice AI)', icon: '🤖', href: '/voice-ai' },
    { label: 'Dream Team', icon: '🌟', href: '/dream-team' },
    { label: 'Chat', icon: '💬', href: '/chat' },
    {
      label: 'Players and Umpires',
      icon: '👥',
      href: '/players-and-umpires',
      dropdowns: [
        {
          title: 'Followers',
          items: [
            'Development Managers',
            'Architects',
            'Project Managers',
            'Builders'
          ]
        },
        {
          title: 'Players',
          items: [
            'Consultants: Engineers',
            'Contractors: Electricians',
            'Contractors: Plumbers'
          ]
        },
        {
          title: 'Umpires',
          items: [
            'Etc'
          ]
        }
      ]
    }
  ];

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleNavClick = (item: any) => {
    Analytics.trackEvent('navigation_click', {
      item: item.label,
      path: pathname,
      timestamp: new Date().toISOString(),
    });
    
    if (!item.dropdowns) {
      onClose();
    } else {
      toggleSection(item.label);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-900/95 backdrop-blur-xl text-white">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <div>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center justify-between px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 ${
                      pathname === item.href ? 'bg-white/20 text-white' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.dropdowns && (
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedSection === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.dropdowns && expandedSection === item.label && (
                    <div className="mt-2 ml-6 space-y-4">
                      {item.dropdowns.map((dropdown, dropdownIndex) => (
                        <div key={dropdownIndex} className="bg-white/5 rounded-lg p-3">
                          <h3 className="font-medium text-white/90 mb-2">{dropdown.title}</h3>
                          <ul className="space-y-1">
                            {dropdown.items.map((subItem, subItemIndex) => (
                              <li
                                key={subItemIndex}
                                className="text-sm text-white/70 hover:text-white cursor-pointer pl-3 transition-colors"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
