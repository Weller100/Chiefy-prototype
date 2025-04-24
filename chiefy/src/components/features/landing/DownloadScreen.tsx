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
    
    <div className="text-center px-6 max-w-3xl mx-auto">
      {/* Download screen content */}
    </div>
  </div>
); 