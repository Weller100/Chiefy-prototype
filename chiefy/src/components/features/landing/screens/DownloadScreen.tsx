import { X } from "lucide-react";

interface DownloadScreenProps {
  setCurrentScreen: (screen: string) => void;
}

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => (
  <button 
    onClick={onClick}
    className="absolute top-6 left-6 text-white/70 hover:text-white flex items-center gap-2 z-50 group"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    <span>Back</span>
  </button>
);

export const DownloadScreen = ({ setCurrentScreen }: DownloadScreenProps) => (
  <div className="relative w-full h-screen flex items-center justify-center bg-black">
    <BackButton onClick={() => setCurrentScreen("video")} />

    <button
      onClick={() => setCurrentScreen("main")}
      className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
      aria-label="Close"
    >
      <X className="h-6 w-6" aria-hidden="true" />
    </button>
    
    <div className="text-center px-6">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        DOWNLOAD APP
      </h1>
      <p className="text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
        Get the full Chiefy experience on your device for the best property development training
      </p>

      <div className="flex flex-col items-center gap-8 mb-12">
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold px-12 py-4 rounded-xl transition-all"
          onClick={() => window.location.href = '/download/chiefy-webapp.zip'}
        >
          App Store
        </button>
        <button 
          className="bg-white/10 hover:bg-white/20 text-white text-xl font-semibold px-12 py-4 rounded-xl transition-all"
          onClick={() => window.location.href = '/download/chiefy-webapp.zip'}
        >
          Google Play
        </button>
      </div>

      <button 
        className="text-white/50 hover:text-white text-lg transition-all"
        onClick={() => setCurrentScreen("main")}
      >
        Skip for now →
      </button>
    </div>
  </div>
); 