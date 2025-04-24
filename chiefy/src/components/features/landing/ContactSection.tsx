interface ContactSectionProps {
  setShowMentality: (show: boolean) => void;
  setRegistrationType: (type: 'company' | 'individual' | null) => void;
}

export const ContactSection = ({ setShowMentality, setRegistrationType }: ContactSectionProps) => (
  <div id="contact-us" className="max-w-6xl mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <h2 className="text-6xl font-bold mb-4">
        Contact <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Us</span>
      </h2>
      <p className="text-xl text-white/70 mb-8">
        Get in touch with our team to learn more about how we can help you succeed.
      </p>
      <button 
        onClick={() => {
          setShowMentality(true);
          setRegistrationType(null);
        }}
        className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700"
      >
        Get in touch
      </button>
    </div>
    
    <div className="text-center">
      <p className="text-xl text-white/70 italic">
        Exciting new developments to come - stay tuned
      </p>
    </div>
  </div>
); 