interface StatItemProps {
  icon: string;
  count: string;
  label: string;
}

const StatItem = ({ icon, count, label }: StatItemProps) => (
  <div className="flex items-center gap-4">
    <div className="bg-purple-900/20 w-12 h-12 rounded-full flex items-center justify-center">
      <i className={`${icon} text-2xl text-purple-500`}></i>
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-bold">{count}</h3>
      <p className="text-white/70">{label}</p>
    </div>
  </div>
);

export const StatsSection = () => {
  const stats = [
    { icon: "ri-user-line", count: "15,000+", label: "Active Users" },
    { icon: "ri-building-line", count: "200+", label: "Partner Companies" },
    { icon: "ri-graduation-cap-line", count: "50+", label: "University Partners" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}; 