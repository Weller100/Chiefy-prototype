import React from 'react';
import ChatBot from './ChatBot';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Chiefy</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your landing page content here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature 1</h2>
            <p>Description of feature 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature 2</h2>
            <p>Description of feature 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature 3</h2>
            <p>Description of feature 3</p>
          </div>
        </div>
      </main>
      <ChatBot />
    </div>
  );
};

export default LandingPage; 