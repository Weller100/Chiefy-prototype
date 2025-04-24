interface RegistrationFormProps {
  registrationType: 'company' | 'individual';
  formData: {
    name: string;
    companyName: string;
    email: string;
    phone: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const RegistrationForm = ({
  registrationType,
  formData,
  setFormData,
  handleSubmit
}: RegistrationFormProps) => (
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
    
    {/* Email and Phone inputs */}
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
); 