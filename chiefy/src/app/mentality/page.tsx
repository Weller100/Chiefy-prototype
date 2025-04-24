"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
}

export default function MentalityPage() {
  const router = useRouter();
  const [registrationType, setRegistrationType] = useState<'company' | 'individual' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Registration successful!');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white py-20 px-4">
      <BackButton onClick={() => router.push('/')} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Could you benefit from some{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Guidance
            </span>{" "}
            within your career?
          </h1>

          <div className="space-y-6 text-lg text-white/70 max-w-3xl mx-auto">
            <p>
              Have you had a Mentor but haven't spent enough time with them to answer all your questions?
            </p>
            <p>
              Or have you undertaken a renovation but weren't sure what questions to ask your builder or trades?
            </p>
            <p className="text-xl text-white font-semibold">
              Chiefy has you covered!
            </p>
            <p>
              Chief's Mentality Overlay doesn't just assess your knowledge but provides realtime feedback and insights tailored to your individual needs.
            </p>
            <p className="italic">
              At Chiefy we believe that time is more valuable than money. You can get more money, but you cannot get more time... and we are in the business of saving time - Because in the end Time is Money!
            </p>
          </div>
        </div>

        {!registrationType ? (
          <div className="text-center">
            <p className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sign up for our Meetup today...
            </p>
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => setRegistrationType('company')}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all"
              >
                Register as Company
              </button>
              <button
                onClick={() => setRegistrationType('individual')}
                className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all"
              >
                Register as Individual
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setRegistrationType(null)}
              className="mb-8 text-white/70 hover:text-white flex items-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              Back to Options
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              {registrationType === 'company' ? (
                <div>
                  <label className="block text-white/70 mb-2">Company Name*</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-white/70 mb-2">Full Name*</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                    required
                  />
                </div>
              )}
              
              <div>
                <label className="block text-white/70 mb-2">Email Address*</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white/70 mb-2">Phone Number*</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all mt-8"
              >
                Register Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 