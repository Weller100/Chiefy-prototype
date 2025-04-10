"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const statistics = [
    {
      value: "50%",
      label: "Support Cost Reduction",
      description: "Reduce up to 50% of your customer support costs"
    },
    {
      value: "3x",
      label: "Faster Response",
      description: "Our AI Agent responds 3x faster than average"
    },
    {
      value: "100%",
      label: "Accuracy",
      description: "Our AI Agent has 100% accuracy in answering construction queries"
    },
    {
      value: "24/7",
      label: "Support Assistant",
      description: "Compared with standard support, available all hours"
    }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <main className="min-h-screen bg-[#581845] text-white">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-xl">C</div>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleSidebar} className="text-gray-300 hover:text-gray-400">
              <span className="block w-6 h-1 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-300"></span>
            </button>
          </div>
          <nav className={`md:block ${isSidebarOpen ? "block" : "hidden"} md:hidden`}>
            <ul className="flex flex-col items-center gap-6 bg-gray-800 py-4">
              {['Mentality', 'Predictive', 'Dreamteam', 'Templates', 'Chats'].map((item) => (
                <li key={item} className="text-gray-300 hover:text-gray-400">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[450px] md:h-[600px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Construction Background"
          layout="fill"
          className="object-cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40" />
      </div>

      {/* Main Heading & Call To Action */}
      <section className="bg-gray-900 py-16 section">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Property Development Mentor</h2>
          <p className="text-xl text-gray-400 mb-10">Empowering your journey in construction with AI support and expert mentorship</p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Book a Demo
            </a>
            <a href="#" className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
              Sign Up Today
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-12 section">
        <div className="max-w-md mx-auto px-6 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Standard (Most Popular)</h3>
          <ul className="space-y-4">
            {[
              "24/7 AI construction assistant",
              "Project management templates",
              "Chat with construction experts",
              "Unlimited project management"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="h-5 w-5 text-purple-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-purple-600 to-[#581845] py-16 section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat with Experts */}
      <section className="py-16 bg-gray-900 section">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Chat with Industry Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Matthew Miller", role: "Mentor - Project Manager", avatar: "/avatars/architect.png" },
              { name: "George Georgiadis", role: "Mentor - Construction Manager", avatar: "/avatars/construction.png" },
              { name: "Sarah Thompson", role: "Mentor - Architect", avatar: "/avatars/developer.png" }
            ].map((mentor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{mentor.name}</h4>
                    <p className="text-sm text-gray-400">{mentor.role}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700 mb-3">
                    "I can help you with all aspects of {index === 0 ? "project planning" : index === 1 ? "construction management" : "architectural design"} for your property development needs."
                  </p>
                  <button className="text-purple-600 font-medium flex items-center gap-1">
                    Chat Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bot Assistant Placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition">
          💬
        </button>
      </div>
    </main>
  );
}
