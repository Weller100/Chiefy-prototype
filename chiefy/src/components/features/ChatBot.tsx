"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X as XIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative animate-bounce"
        >
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <div className="relative">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 text-white group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-[#0A0A0A] rounded-2xl w-[380px] shadow-2xl border border-purple-500/20 backdrop-blur-lg transform transition-all duration-300">
          <div className="p-4 border-b border-purple-500/20 flex items-center justify-between bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <i className="ri-message-3-line text-xl text-white"></i>
              </div>
              <div>
                <h3 className="font-bold text-white">Chiefy Chat</h3>
                <p className="text-xs text-white/70">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="mb-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-xl border border-purple-500/20">
                  <p className="text-white/90">G'day! 👋 Chiefy's here ready to give you a hand... what can I sort out for you today?</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2 font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 min-h-[120px] transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                  >
                    Send Message
                    <i className="ri-send-plane-line"></i>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Thanks for reaching out!</h4>
                <p className="text-white/70">Our team will get in touch with you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}