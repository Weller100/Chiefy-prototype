'use client';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/shared/BackButton';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface DownloadScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export const DownloadScreen = ({ setCurrentScreen }: DownloadScreenProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // @ts-ignore
      window.deferredPrompt = e;  // So that your button onclick can also access it
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleAddToHomeScreen = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (deferredPrompt && userAgent.includes('android')) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      alert('To add to home screen:\n\n1. Tap the Share button (rectangle with arrow)\n2. Scroll down and tap "Add to Home Screen"\n3. Tap "Add" to confirm');
      window.open('https://chiefy-beta-app.adalo.com/online-education-app', '_blank');
    } else {
      toast("Click your browser menu and tap 'Add to Home Screen'");
      window.open('https://chiefy-beta-app.adalo.com/online-education-app', '_blank');
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0B1120]">
      <BackButton onClick={() => setCurrentScreen("video")} />

      {/* Close Button without using Lucide React */}
      <button
        onClick={() => setCurrentScreen("main")}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 text-2xl font-bold transition-all"
        aria-label="Close"
      >
        ×
      </button>
      
      <div className="text-center px-6 max-w-6xl mx-auto">
      <div className="text-center px-6 max-w-6xl mx-auto flex flex-col items-center">
          {/* Reduced font size for "DOWNLOAD" */}
          <h1 className="text-4xl md:text-5xl font-kernel-bold tracking-tight mb-8">
            DOWNLOAD
          </h1>
          <div className="relative h-36 w-72 md:h-48 md:w-[26rem]">
            <Image 
              src="/images/Chiefy upscale logo.png" 
              alt="Chiefy Logo" 
              fill
              sizes="(max-width: 768px) 18rem, 26rem"
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto">
          Get the full Chiefy experience on your device for the best property development training
        </p>

        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-16 py-5 rounded-xl transition-all flex items-center gap-3 text-xl font-semibold mx-auto"
          onClick={handleAddToHomeScreen}
        >
          <i className="ri-add-circle-line text-3xl"></i>
          Add to Home Screen
        </button>
      </div>
    </div>
  );
};
