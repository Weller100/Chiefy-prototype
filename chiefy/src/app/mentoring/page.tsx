"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';

export default function MentoringPage() {
  const [activeTab, setActiveTab] = useState('guidance');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash === '#webinar-signup') {
      document.getElementById('webinar-signup')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // In a real app, you would submit this to your backend
    setIsSubmitted(true);
    setError('');
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const benefits = [
    { 
      title: "Real-time Industry Feedback", 
      description: "Receive instant insights from construction professionals as you grow your career",
      icon: "💬"
    },
    { 
      title: "Personalized Guidance", 
      description: "Get answers tailored to your specific situation and projects",
      icon: "🧭"
    },
    { 
      title: "Ask the Right Questions", 
      description: "Learn what to ask builders and trades for your renovation projects",
      icon: "❓"
    },
    { 
      title: "Time-Saving Expertise", 
      description: "Skip costly mistakes with guidance from seasoned mentors",
      icon: "⏱️"
    },
  ];

  const testimonials = [
    {
      quote: "The mentoring program helped me avoid costly mistakes in my first major renovation project. The advice was practical and saved me thousands.",
      author: "Michael Johnson",
      role: "Property Developer",
      company: "MJ Properties",
      rating: 5,
      image: "/avatars/michael.jpg"
    },
    {
      quote: "As someone new to construction, the mentality overlay gave me insights I wouldn't have gained for years otherwise. Absolutely worth it.",
      author: "Sarah Thompson",
      role: "Construction Manager",
      company: "BuildRight Co.",
      rating: 5,
      image: "/avatars/sarah.jpg"
    },
    {
      quote: "The networking opportunities alone made this invaluable. I've connected with industry leaders who continue to guide my career.",
      author: "David Chen",
      role: "Project Manager",
      company: "Urban Developments",
      rating: 4,
      image: "/avatars/david.jpg"
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center">
          {/* Three Lines Menu Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo and Title - with proper spacing */}
          <div className="ml-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="https://static.readdy.ai/image/604526b099075072f9fc122e55328024/b41ffca8773352ad86add0ffd6c25b78.png" alt="Chiefy Logo" width={40} height={40} />
              <span className="hero-title text-xl font-bold">Chiefy</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={toggleSidebar} />
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-[500px] mb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-indigo-900/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentality <span className="gradient-text">Overlay</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Transform your property development journey with expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12 gap-4">
            {['guidance', 'mentors', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-white/80'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70 mb-4">{benefit.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <span>Learn more</span>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-black to-black/95">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-white/70 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-white/50">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="webinar-signup" className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Join Our Next Online Webinar
            </h2>
            <p className="text-lg text-white/80 mb-8 text-center">
              Property Development Networking Session
              <br />
              <span className="text-primary font-semibold">
                Every Thursday at 7 PM AEST
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email to join the meetup"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Reserve Your Spot</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <p className="text-sm text-gray-400">
                  Limited spots available. Join us for an evening of networking and learning!
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}