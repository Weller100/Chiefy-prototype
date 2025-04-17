"use client";
import { useState } from 'react';

interface BookDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemo({ isOpen, onClose }: BookDemoProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'residential',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl m-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book a Free Demo</h2>
            <p className="text-gray-600 mt-1">Experience how Chiefy can transform your property development journey</p>
          </div>
          <button 
            onClick={onClose}
            type="button" 
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">What You'll Get</h3>
            <ul className="space-y-3">
              {[
                '30-minute personalized demo',
                'AI construction assistant walkthrough',
                'Project management templates overview',
                'Live Q&A with our experts',
                'Custom solution recommendations',
                'Special early-access pricing'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-purple-700">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                id="demo-name"
                type="text"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="demo-email"
                type="email"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="demo-company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                id="demo-company"
                type="text"
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
              <select
                id="projectType"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="residential">Residential Development</option>
                <option value="commercial">Commercial Development</option>
                <option value="mixed">Mixed-Use Development</option>
                <option value="renovation">Renovation Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about your project
                <span className="text-gray-500 text-xs ml-1">(optional)</span>
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[120px] resize-y"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share details about your project, specific challenges you're facing, or what you'd like to learn during the demo..."
              />
              <p className="text-xs text-gray-500 mt-1">
                This helps us prepare a more personalized demo for you
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              Book Your Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 