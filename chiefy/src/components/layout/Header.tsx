"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const searchResults = [
    { title: 'UI Design Fundamentals', type: 'Course' },
    { title: 'Advanced React Patterns', type: 'Course' },
    { title: 'User Research Methods', type: 'Course' },
    { title: 'Sarah Johnson', type: 'Mentor' },
    { title: 'Michael Chen', type: 'Mentor' },
  ];

  const notifications = [
    {
      title: 'New Course Available',
      message: 'UI Design Fundamentals is now available',
      time: '2 hours ago',
      read: false,
    },
    {
      title: 'Course Update',
      message: 'New lesson added to Advanced React Patterns',
      time: '5 hours ago',
      read: false,
    },
    {
      title: 'Mentor Response',
      message: 'Sarah Johnson replied to your question',
      time: '1 day ago',
      read: true,
    },
  ];

  const profileMenuItems = [
    { label: 'Profile Settings', icon: '⚙️' },
    { label: 'My Courses', icon: '📚' },
    { label: 'My Certificates', icon: '🎓' },
    { label: 'Help & Support', icon: '❓' },
    { label: 'Sign Out', icon: '🚪' },
  ];

  return (
    <header className="h-[60px] bg-white border-b border-gray-200 px-6 flex items-center justify-between">
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

      <div className="flex-1 max-w-xl mx-8 relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            placeholder="Search courses, lessons, or topics..."
            className="w-full px-4 py-2 rounded-lg bg-[#F8F8F8] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B4EFF] focus:border-transparent text-gray-800 placeholder:text-gray-600"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#6B4EFF]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Search Results Dropdown */}
        {showSearchResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 hover:bg-[#F8F8F8] rounded-lg flex items-center justify-between"
                  onClick={() => {
                    setSearchQuery(result.title);
                    setShowSearchResults(false);
                  }}
                >
                  <span className="font-medium">{result.title}</span>
                  <span className="text-sm text-gray-500">{result.type}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-gray-100 hover:bg-[#F8F8F8] cursor-pointer ${
                      !notification.read ? 'bg-[#E8F1FF]' : ''
                    }`}
                  >
                    <h4 className="font-medium text-[#1A1A1A]">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center">
                <button className="text-[#6B4EFF] text-sm font-medium hover:text-[#5A3FE0]">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <span className="text-sm font-medium text-[#1A1A1A]">John Doe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Profile Menu Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-[#F8F8F8] hover:text-[#6B4EFF] transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );} 