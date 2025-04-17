"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! How can I help you?" },
    { type: 'bot', text: "How can we assist you today?" },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: inputText }]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = "Absolutely! I'd love to help you find the perfect solution. Do you have any specific requirements in mind?";
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl w-[500px] mb-4">
          {/* Header with stats */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Training Sources</h2>
            <p className="text-gray-500 text-sm mb-4">Here you can check the sources that your AI Chatbot is trained on:</p>
            
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-gray-700">Links</span>
                <div className="font-semibold">1/20</div>
              </div>
              <div>
                <span className="text-gray-700">Files</span>
                <div className="font-semibold">0/50</div>
              </div>
              <div>
                <span className="text-gray-700">Characters</span>
                <div className="font-semibold">6488/5mil</div>
              </div>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium">
                UPGRADE
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-[400px] overflow-y-auto px-6 py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Image
                  src="/images/chiefy-logo.png"
                  alt="Chiefy"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <span className="font-semibold">Chiefy Chat</span>
            </div>

            {messages.map((msg, index) => (
              <div key={index} className="mb-6">
                <div className={`max-w-[80%] ${msg.type === 'user' ? 'ml-auto bg-gray-900 text-white' : 'bg-gray-100'} rounded-2xl p-4`}>
                  {msg.text}
                </div>
                <div className={`text-xs text-gray-400 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  12/06/2024, 12:25 PM
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-xl focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ↑
              </button>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4">
              Powered by Chiefy Chat
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:from-purple-700 hover:to-indigo-700 transition"
      >
        💬
      </button>
    </div>
  );
} 