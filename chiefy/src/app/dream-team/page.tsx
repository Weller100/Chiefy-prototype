"use client";

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

interface DreamTeamPageProps {
  setCurrentScreen?: (screen: string) => void;
}

export default function DreamTeamPage({ setCurrentScreen }: DreamTeamPageProps) {
  const router = useRouter();

  const handleGetStarted = () => {
    if (setCurrentScreen) {
      setCurrentScreen("download");
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <BackButton onClick={() => router.push('/')} />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-[#9333EA] via-[#FF49DB] to-pink-500 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h1>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl text-white/70">
              Build out your contacts and field your team of experts.
            </p>
            <p className="text-xl text-white/70">
              "Import your contacts" and build your unique Property Development team.
              Exchange contacts with your mates.
            </p>
            <p className="text-xl text-white/70 italic">
              Ever heard there's no shortcut to experience... well here at Chiefy we disagree. 
              We provide you with all the tools you need to accelerate your skills in Property & Construction.
            </p>
          </div>

          {/* 3D Football Field Background */}
          <div className="relative w-full aspect-[16/9] mx-auto my-16 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a472a] to-[#2a573a]">
              {/* Field Lines */}
              <svg className="w-full h-full" viewBox="0 0 1000 562.5" style={{ transform: 'perspective(1000px) rotateX(20deg)' }}>
                {/* Outer boundary */}
                <rect x="50" y="50" width="900" height="462.5" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
                {/* Center circle */}
                <circle cx="500" cy="281.25" r="91.5" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
                {/* Center line */}
                <line x1="500" y1="50" x2="500" y2="512.5" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
                {/* 50m Arc */}
                <path d="M 350 281.25 A 150 150 0 0 1 650 281.25" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
                {/* Goal squares */}
                <rect x="400" y="100" width="200" height="100" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
                <rect x="400" y="362.5" width="200" height="100" stroke="white" strokeWidth="2" fill="none" strokeOpacity="0.3"/>
              </svg>
            </div>

            {/* Get Started Button positioned on the field */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-[#FFCB4A] hover:bg-[#FFD666] text-black px-12 py-5 rounded-xl font-bold text-xl transition-all inline-flex items-center gap-3 shadow-lg transform hover:scale-105"
              >
                Get Started
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}