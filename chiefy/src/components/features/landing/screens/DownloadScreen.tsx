import { X as CloseIcon } from "lucide-react";
import { BackButton } from '@/components/shared/BackButton';

interface DownloadScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export const DownloadScreen = ({ setCurrentScreen }: DownloadScreenProps) => (
  <div className="relative w-full h-screen flex items-center justify-center bg-[#0B1120]">
    <BackButton onClick={() => setCurrentScreen("video")} />

    <button
      onClick={() => setCurrentScreen("main")}
      className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
      aria-label="Close"
    >
      <CloseIcon className="h-6 w-6" aria-hidden="true" />
    </button>
    
    <div className="text-center px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-kernel-bold tracking-tight">
        DOWNLOAD <span className="gradient-text">CHIEFY</span>
        </h1>
      </div>
      
      <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto">
        Get the full Chiefy experience on your device for the best property development training
      </p>

      <button 
        className="bg-purple-600 hover:bg-purple-700 text-white px-16 py-5 rounded-xl transition-all flex items-center gap-3 text-xl font-semibold mx-auto"
        onClick={() => {
          if ('beforeinstallprompt' in window) {
            // @ts-ignore
            window.deferredPrompt?.prompt();
          } else {
            alert('Please use your browser menu to add to home screen');
          }
        }}
      >
        <i className="ri-add-circle-line text-3xl"></i>
        Add to Home Screen
      </button>
    </div>
  </div>
); 