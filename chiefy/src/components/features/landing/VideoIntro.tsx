import { useRef } from 'react';

interface VideoIntroProps {
  setCurrentScreen: (screen: string) => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export const VideoIntro = ({ setCurrentScreen, videoRef }: VideoIntroProps) => (
  <div className="relative w-full h-screen flex items-center justify-center bg-black">
    <video 
      ref={videoRef}
      className="w-full h-full object-cover"
      autoPlay
      muted
      playsInline
      preload="auto"
      loop
    >
      <source src="/images/intro-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute bottom-4 right-0">
      <button 
        onClick={() => setCurrentScreen("download")}
        className="bg-primary text-white px-8 py-3 font-semibold shadow-lg text-base"
      >
        Skip Intro
      </button>
    </div>
  </div>
); 