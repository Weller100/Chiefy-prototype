"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/shared/PageTemplate';
import { useSearchParams } from 'next/navigation';

export default function MentoringPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
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

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-fuchsia-950 to-violet-950 text-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950 to-violet-950 opacity-90" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chiefy Mentality Overlay</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Could you benefit from some Guidance within your career?
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Main Questions */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/10 via-purple-900/20 to-indigo-900/30 backdrop-blur-sm rounded-xl p-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-200">
                Have you had a Mentor but haven't spent enough time with them to answer all your questions?
              </p>
              <p className="text-xl text-gray-200">
                Or have you undertaken a renovation but weren't sure what questions to ask your builder or trades?
              </p>
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-white">Chiefy has you covered!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Time is Money Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-purple-900/50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <p className="text-xl mb-6">
                Chief's Mentality Overlay doesn't just assess your knowledge but provides realtime feedback and insights tailored to your individual needs.
              </p>
              <p className="text-xl mb-6">
                At Chiefy we believe that time is more valuable than money. You can get more money, but you cannot get more time... and we are in the business of saving time
              </p>
              <p className="text-2xl font-bold text-yellow-300">
                Because in the end Time is Money!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Without Mentoring</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">✕</span>
                    <span>Years of costly trial and error</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">✕</span>
                    <span>Missed opportunities and connections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">✕</span>
                    <span>Expensive mistakes and setbacks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">✕</span>
                    <span>Limited industry network</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">With Chiefy Mentoring</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Fast-track your learning curve</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Access to industry experts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Proven strategies and insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Valuable industry connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials with Star Ratings */}
        <section className="mb-16 bg-gradient-to-b from-transparent via-purple-900/10 to-purple-900/20 pb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Mentees Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 text-xl font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meetup Sign-up Section */}
        <section id="webinar-signup" className="py-16 bg-purple-900 bg-opacity-80">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Sign Up For Our Next Online Webinar
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Join our next Property Development Networking Session
                <br />
                <span className="text-yellow-300 font-semibold">
                  Next Meetup: Every Thursday at 7 PM AEST
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
    </div>
  );
}