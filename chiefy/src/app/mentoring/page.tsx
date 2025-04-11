"use client";
import { useState } from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/shared/PageTemplate';

export default function MentoringPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      quote: "Chiefy's mentoring program helped me avoid costly mistakes in my first major renovation project. The advice was practical and saved me thousands.",
      author: "Michael J., Homeowner",
      role: "First-time Renovator"
    },
    {
      quote: "As someone new to the construction industry, the mentality overlay gave me insights I wouldn't have gained for years otherwise. Absolutely worth it.",
      author: "Sarah T.",
      role: "Junior Construction Manager"
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#6B4EFF] to-[#9747FF] text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Chief's Mentality Overlay</h1>
          <p className="text-xl md:text-2xl mb-8">Could you benefit from some Guidance within your career?</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex-1 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">Knowledge Assessment</h3>
              <p>Our platform doesn't just assess your knowledge but provides realtime feedback tailored to your needs.</p>
            </div>
            <div className="flex-1 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">Time is Valuable</h3>
              <p>At Chiefy we believe that time is more valuable than money. You can get more money, but you cannot get more time.</p>
            </div>
          </div>
          <button className="bg-white text-[#6B4EFF] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Are You Experiencing These Challenges?</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#6B4EFF] mt-1">✓</span>
              <p className="text-lg">Have you had a Mentor but haven't spent enough time with them to answer all your questions?</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#6B4EFF] mt-1">✓</span>
              <p className="text-lg">Have you undertaken a renovation but weren't sure what questions to ask your builder or trades?</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#6B4EFF] mt-1">✓</span>
              <p className="text-lg">Do you need specific guidance for your current career stage or project?</p>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-[#F8F8F8] rounded-lg border-l-4 border-[#6B4EFF]">
            <p className="text-xl font-medium text-center">Chiefy has you covered!</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How Mentality Overlay Helps You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Time is Money Section */}
      <section className="max-w-4xl mx-auto mb-16 bg-[#F8F8F8] rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Because Time is Money!</h2>
          <p className="text-lg">
            We are in the business of saving time. Our mentors provide insights that would take years to learn through experience alone.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-center">Without Mentoring</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>Learning through costly mistakes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>Project delays and budget overruns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span>
                <span>Years of trial and error</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-center">With Chiefy Mentoring</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Accelerated learning curve</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Avoid common pitfalls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Targeted advice for your situation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">What Our Mentees Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-[#6B4EFF] text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="text-right">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Webinar Sign-up Section */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-[#6B4EFF] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Sign Up For Our Next Online Webinar</h2>
          <p className="mb-6">Join us to learn more about how Chiefy's Mentality Overlay can accelerate your growth and save you valuable time.</p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-white text-[#6B4EFF] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Register Now
                </button>
              </div>
              {error && <p className="text-red-300 mt-2">{error}</p>}
            </form>
          ) : (
            <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-xl font-medium mb-2">Thank you for registering!</p>
              <p>We'll send webinar details to your email shortly.</p>
            </div>
          )}
          
          <p className="text-sm mt-4 text-white/80">
            Our next webinar is scheduled for May 15, 2025 at 11:00 AM EST
          </p>
        </div>
      </section>
    </div>
  );
}