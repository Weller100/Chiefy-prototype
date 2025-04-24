import { FeatureCard } from '../components/FeatureCard';

interface FeaturesSectionProps {
  onLearnMore: () => void;
}

export const Features = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-us');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: "⭕",
      title: "AI Development Coach",
      description: "Personalized AI mentor that adapts to your learning style and provides real-time feedback on your delivery strategies.",
      color: "purple" as const
    },
    {
      icon: "🎮",
      title: "Development Simulator",
      description: "Practice with realistic property development scenarios that simulate market conditions, zoning challenges, and financial constraints.",
      color: "pink" as const
    },
    {
      icon: "💎",
      title: "Achievement System",
      description: "Earn badges, certifications, and industry recognition as you complete projects and master development skills.",
      color: "purple" as const
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              onClick={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 