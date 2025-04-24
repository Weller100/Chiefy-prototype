import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Contact } from '../sections/Contact';
import { Stats } from '../sections/Stats';
import { Footer } from '../components/Footer';
import { MentalityOverlay } from '../components/MentalityOverlay';
import ChatBot from '../../ChatBot';
import LoginModal from '../../LoginModal';

interface MainScreenProps {
  setCurrentScreen: (screen: string) => void;
}

export const MainScreen = ({ setCurrentScreen }: MainScreenProps) => {
  const [showMentality, setShowMentality] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [registrationType, setRegistrationType] = useState<'company' | 'individual' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', companyName: '', email: '', phone: '' });
    setShowMentality(false);
    setRegistrationType(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        setShowMentality={setShowMentality}
        setShowLoginModal={setShowLoginModal}
        setCurrentScreen={setCurrentScreen}
      />
      <Hero />
      <Features />
      <Stats />
      <Contact 
        setShowMentality={setShowMentality}
        setRegistrationType={setRegistrationType}
      />
      <Footer />

      {showMentality && (
        <MentalityOverlay 
          onClose={() => setShowMentality(false)}
          registrationType={registrationType}
          setRegistrationType={setRegistrationType}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <ChatBot />
    </div>
  );
}; 