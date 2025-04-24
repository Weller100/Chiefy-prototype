import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  setShowMentality: (show: boolean) => void;
  setShowLoginModal: (show: boolean) => void;
  setCurrentScreen: (screen: string) => void;
}

export const Header = ({ setShowMentality, setShowLoginModal, setCurrentScreen }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/chiefy-logo.png" alt="Chiefy" width={32} height={32} />
          <span className="font-bold text-xl">Chiefy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setShowMentality(true)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Mentality
          </button>
          <Link href="/dream-team" className="text-white/70 hover:text-white transition-colors">
            Dream Team
          </Link>
          <Link href="/chat" className="text-white/70 hover:text-white transition-colors">
            Chat
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Login
          </button>
          <button 
            onClick={() => setCurrentScreen("download")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  </header>
); 