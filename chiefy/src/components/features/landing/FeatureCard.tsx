interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: 'purple' | 'pink';
  onClick: () => void;
}

export const FeatureCard = ({ icon, title, description, color, onClick }: FeatureCardProps) => (
  <div className={`bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-${color}-500/50 transition-all group`}>
    <div className={`bg-${color}-900/20 w-16 h-16 rounded-xl mb-6 flex items-center justify-center`}>
      <div className="text-3xl">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/70 mb-8">{description}</p>
    <button 
      onClick={onClick}
      className={`text-${color}-500 hover:text-${color}-400 flex items-center gap-2 group-hover:gap-3 transition-all`}
    >
      Learn more <i className="ri-arrow-right-line"></i>
    </button>
  </div>
); 