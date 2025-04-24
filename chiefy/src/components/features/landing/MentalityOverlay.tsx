import { BackButton } from '@/components/shared/BackButton';

interface MentalityOverlayProps {
  onClose: () => void;
  registrationType: 'company' | 'individual' | null;
  setRegistrationType: (type: 'company' | 'individual' | null) => void;
  formData: {
    name: string;
    companyName: string;
    email: string;
    phone: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const MentalityOverlay = ({
  onClose,
  registrationType,
  setRegistrationType,
  formData,
  setFormData,
  handleSubmit
}: MentalityOverlayProps) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <BackButton onClick={onClose} />
    <div className="bg-[#0A0A0A] rounded-2xl p-12 max-w-3xl w-full relative">
      {/* Content */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Could you benefit from some{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Guidance
          </span>{" "}
          within your career?
        </h2>
        
        {!registrationType ? (
          <RegistrationIntro setRegistrationType={setRegistrationType} />
        ) : (
          <RegistrationForm 
            registrationType={registrationType}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  </div>
);

// Separate components for cleaner code
const RegistrationIntro = ({ setRegistrationType }: { setRegistrationType: (type: 'company' | 'individual' | null) => void }) => (
  <>
    <IntroText />
    <RegistrationButtons setRegistrationType={setRegistrationType} />
  </>
);

const IntroText = () => (
  <>
    <p className="text-white/70 mb-4 text-lg">
      Have you had a Mentor but haven't spent enough time with them to answer all your questions?
    </p>
    {/* ... other intro text ... */}
  </>
);

const RegistrationButtons = ({ setRegistrationType }: { setRegistrationType: (type: 'company' | 'individual' | null) => void }) => (
  <div className="flex gap-6 justify-center">
    <button
      onClick={() => setRegistrationType('company')}
      className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all"
    >
      Register as Company
    </button>
    <button
      onClick={() => setRegistrationType('individual')}
      className="bg-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all"
    >
      Register as Individual
    </button>
  </div>
); 