export default function DarkPageLayout({
  children,
  title,
  subtitle
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <section className="relative h-[500px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-90" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            {subtitle && (
              <p className="text-2xl text-gray-300 mb-8">{subtitle}</p>
            )}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
} 