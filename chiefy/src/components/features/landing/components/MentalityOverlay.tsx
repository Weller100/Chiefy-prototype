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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Could you benefit from some{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Guidance
          </span>{" "}
          within your career?
        </h2>
        
        {!registrationType ? (
          <>
            <p className="text-white/70 mb-4 text-lg">
              Have you had a Mentor but haven't spent enough time with them to answer all your questions?
            </p>
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
          </>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            {registrationType === 'company' ? (
              <div>
                <label className="block text-white/70 mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-white/70 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                  required
                />
              </div>
            )}
            
            <div>
              <label className="block text-white/70 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/70 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-purple-500 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all mt-8"
            >
              Register Now
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
); 