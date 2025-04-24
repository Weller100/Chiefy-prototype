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
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-[#9333EA] via-[#FF49DB] to-white bg-clip-text text-transparent inline-block">
            DOWNLOAD CHIEFY
          </span>
          <span className="text-white ml-4">DOWNLOAD CHIEFY</span>
        </h1>
      </div>
      
      <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto">
        Get the full Chiefy experience on your device for the best property development training
      </p>

      <div className="flex flex-col items-center gap-8 mb-16">
        <div className="flex gap-6">
          <button 
            className="bg-[#9333EA] hover:bg-[#7928CA] text-white px-16 py-5 rounded-xl transition-all flex items-center gap-3 text-xl font-semibold"
            onClick={() => window.location.href = '/download/app-store'}
          >
            <i className="ri-apple-fill text-3xl"></i>
            App Store
          </button>
          
          <button 
            className="bg-white/10 hover:bg-white/20 text-white px-16 py-5 rounded-xl transition-all flex items-center gap-3 text-xl font-semibold"
            onClick={() => window.location.href = '/download/google-play'}
          >
            <i className="ri-google-play-fill text-3xl"></i>
            Google Play
          </button>
        </div>

        <button 
          className="border border-white/20 hover:border-white/40 text-white px-16 py-5 rounded-xl transition-all flex items-center gap-3 text-xl font-semibold"
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

      <button 
        className="text-white/50 hover:text-white text-lg transition-all flex items-center gap-2 mx-auto border border-white/10 px-8 py-3 rounded-xl hover:bg-white/5"
        onClick={() => setCurrentScreen("main")}
      >
        Skip for now
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  </div>
); 