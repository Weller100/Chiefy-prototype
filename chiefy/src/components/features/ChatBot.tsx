"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Here you would implement the logic to save to Google Docs
    // For now, just show success message
    setHasSubmitted(true);
    setMessage('');
    setEmail('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all group animate-bounce"
        >
          <div className="relative">
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            
            {/* Chat icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 group-hover:scale-110 transition-transform" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.5 0 2.95-.34 4.28-.94l3.86 1.07-1.07-3.86c.6-1.33.94-2.78.94-4.28C20 6.48 15.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M8 13h8v2H8zm0-4h8v2H8z"/>
            </svg>

            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-[#0A0A0A] rounded-2xl w-[380px] shadow-xl border border-white/10">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/chiefy-logo.png"
                alt="Chiefy"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h3 className="font-semibold text-white">Chiefy Chat</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/5 rounded-full text-white/70 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-6">
            {!hasSubmitted ? (
              <>
                <div className="mb-6">
                  <p className="text-lg mb-2 text-white">G'day! Chiefy's here ready to give you a hand...</p>
                  <p className="text-white/70">what can I sort out for you today?</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/70 mb-2 text-sm">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2 text-sm">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all text-sm min-h-[100px]"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700"
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Thanks for reaching out!</h4>
                <p className="text-white/70 mb-6">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setHasSubmitted(false)}
                  className="text-purple-500 hover:text-purple-400"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}