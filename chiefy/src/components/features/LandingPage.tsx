"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../layout/Sidebar";

const LandingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-[60] p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sliding Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#" className="flex items-center gap-2">
            <Image src="https://static.readdy.ai/image/604526b099075072f9fc122e55328024/b41ffca8773352ad86add0ffd6c25b78.png" alt="Chiefy Logo" width={40} height={40} />
            <span className="hero-title text-xl font-bold">Chiefy</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
            <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors">Success Stories</Link>
            <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/80 hover:text-white transition-colors hidden md:block">Log In</Link>
            <Link href="#" className="neon-button bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-button whitespace-nowrap">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" 
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Futuristic%20cityscape%20with%20neon-outlined%20skyscrapers%20and%20buildings%20in%20purple%2C%20pink%2C%20and%20orange%20gradients.%20Modern%20architecture%20with%20glowing%20windows%20and%20holographic%20elements.%20Perspective%20grid%20integrated%20into%20city%20streets.%20Starry%20sky%20backdrop%20transitioning%20from%20deep%20purple%20to%20pink%20and%20orange%20horizon.%20Digital%20particle%20effects%20suggesting%20AI%20analysis.%20Subtle%20construction%20drones%20and%20holographic%20scaffolding%20visible%20between%20buildings.&width=1920&height=1080&seq=hero1&orientation=landscape')", 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70"></div>
        <div className="absolute inset-0 bg-black/50"></div> {/* Additional dark layer */}
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Accelerate Your <span className="gradient-text">Property Development</span> Career
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              AI-powered mentoring that transforms industry novices into development experts through immersive, gamified learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#" className="neon-button bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-button text-center font-bold whitespace-nowrap">
                Start Your Journey
              </Link>
              <Link href="#how-it-works" className="border border-white/30 hover:border-white/50 bg-black/30 backdrop-blur-sm px-8 py-4 rounded-button text-center font-bold whitespace-nowrap flex items-center justify-center gap-2">
                <i className="ri-play-circle-line ri-lg"></i> Watch Demo
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-3xl font-bold gradient-text">90%</h3>
                <p className="text-white/70 text-sm">Employment Rate</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-3xl font-bold gradient-text">15K+</h3>
                <p className="text-white/70 text-sm">Active Learners</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-3xl font-bold gradient-text">200+</h3>
                <p className="text-white/70 text-sm">Industry Partners</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-3xl font-bold gradient-text">4.9/5</h3>
                <p className="text-white/70 text-sm">User Rating</p>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-black to-black/95">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-white/70 mb-10 text-lg">TRUSTED BY LEADING UNIVERSITIES & COMPANIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-building-4-line ri-2x"></i>
              <span className="font-semibold">RMIT University</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-building-2-line ri-2x"></i>
              <span className="font-semibold">Melbourne University</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-government-line ri-2x"></i>
              <span className="font-semibold">Deakin University</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-home-gear-line ri-2x"></i>
              <span className="font-semibold">Stadiums Tasmania</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-building-line ri-2x"></i>
              <span className="font-semibold">Oliver Hume</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
              <i className="ri-community-line ri-2x"></i>
              <span className="font-semibold">Bryant Alsop Architects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="hero-title text-4xl font-bold mb-4">Game-Changing <span className="gradient-text">Features</span></h2>
            <p className="text-white/70 text-lg">Our Platform comines cutting edge AI with gamefied learning to create an immersive and practical property development experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-ai-generate-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Development Coach</h3>
              <p className="text-white/70 mb-4">Personalized AI mentor that adapts to your learning style and provides real-time feedback on your delivery strategies.</p>
              <div className="flex items-center gap-2 text-primary">
                <span>Learn more</span>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
            
            {/* Additional features would be here - removed for brevity */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Link href="#" className="flex items-center gap-2 mb-4">
                <Image src="https://static.readdy.ai/image/604526b099075072f9fc122e55328024/b41ffca8773352ad86add0ffd6c25b78.png" alt="Chiefy Logo" width={40} height={40} />
                <span className="hero-title text-xl font-bold">Chiefy</span>
              </Link>
              <p className="text-white/70 mb-6">AI-powered property development mentoring platform that makes learning fun and practical for industry entrants.</p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="ri-twitter-x-fill"></i>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="ri-instagram-fill"></i>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="ri-youtube-fill"></i>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Learning Paths</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Simulations</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Certifications</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="text-white/70 hover:text-white transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">©️ 2025 BuilderVerse. All rights reserved.</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-white/50">
                <i className="ri-visa-line ri-lg"></i>
                <i className="ri-mastercard-line ri-lg"></i>
                <i className="ri-paypal-line ri-lg"></i>
                <i className="ri-apple-fill ri-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;