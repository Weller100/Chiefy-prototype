export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/city-skyline.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/40 to-indigo-900/40" />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Accelerate Your{" "}
          <div className="mt-2">
            <span className="text-purple-500">Property</span>
          </div>
          <div className="mt-2">
            <span className="text-pink-500">Development</span>
          </div>
          <div className="mt-2">
            <span className="text-white">Career</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl">
          AI-powered mentoring that transforms industry novices into development experts through immersive, gamified learning experiences.
        </p>
      </div>
    </div>
  </section>
); 