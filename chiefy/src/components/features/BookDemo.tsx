"use client";

import React from 'react';

interface BookDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="your@email.com"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input 
            type="tel" 
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Preferred Date</label>
          <input 
            type="date" 
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Book Now
          </button>
          <button 
            onClick={onClose}
            className="text-gray-500 mt-2 hover:text-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;