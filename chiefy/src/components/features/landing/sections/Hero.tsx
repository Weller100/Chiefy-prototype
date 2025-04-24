export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    {/* SVG Background instead of image */}
    <div className="absolute inset-0 overflow-hidden">
    /* SVG Cityscape Background */
<svg 
  viewBox="0 0 1200 800" 
  preserveAspectRatio="xMidYMid slice"
  className="w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Background gradient */}
  <defs>
    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0f021a" />
      <stop offset="50%" stopColor="#2d0a4e" />
      <stop offset="100%" stopColor="#5b1263" />
    </linearGradient>
    <linearGradient id="buildingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2a0845" />
      <stop offset="100%" stopColor="#6b0979" />
    </linearGradient>
    <linearGradient id="buildingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#380c5a" />
      <stop offset="100%" stopColor="#8215a8" />
    </linearGradient>
    <linearGradient id="windowGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#ff9cf7" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#b249f8" stopOpacity="0.4" />
    </linearGradient>
  </defs>

  {/* Sky background */}
  <rect width="1200" height="800" fill="url(#skyGradient)" />
  
  {/* Stars */}
  <g id="stars">
    <circle cx="120" cy="45" r="1" fill="white" opacity="0.8" />
    <circle cx="340" cy="85" r="1.2" fill="white" opacity="0.7" />
    <circle cx="550" cy="35" r="1" fill="white" opacity="0.9" />
    <circle cx="780" cy="120" r="1.5" fill="white" opacity="0.6" />
    <circle cx="950" cy="80" r="1" fill="white" opacity="0.8" />
    <circle cx="1050" cy="40" r="1.2" fill="white" opacity="0.7" />
    <circle cx="200" cy="130" r="1" fill="white" opacity="0.6" />
    <circle cx="400" cy="180" r="1" fill="white" opacity="0.7" />
    <circle cx="600" cy="150" r="1.3" fill="white" opacity="0.8" />
    <circle cx="850" cy="190" r="1" fill="white" opacity="0.9" />
    <circle cx="1100" cy="160" r="1.2" fill="white" opacity="0.7" />
    <circle cx="150" cy="220" r="1" fill="white" opacity="0.8" />
    <circle cx="300" cy="250" r="1" fill="white" opacity="0.7" />
    <circle cx="550" cy="210" r="1.5" fill="white" opacity="0.8" />
    <circle cx="750" cy="240" r="1" fill="white" opacity="0.6" />
    <circle cx="980" cy="230" r="1.2" fill="white" opacity="0.9" />
  </g>

  {/* Distant buildings in background */}
  <g id="distant-buildings" opacity="0.7">
    <rect x="50" y="400" width="80" height="400" fill="#200b36" />
    <rect x="140" y="450" width="60" height="350" fill="#2d0a4e" />
    <rect x="210" y="470" width="70" height="330" fill="#200b36" />
    <rect x="290" y="420" width="90" height="380" fill="#2d0a4e" />
    <rect x="390" y="460" width="50" height="340" fill="#200b36" />
    <rect x="450" y="380" width="100" height="420" fill="#2d0a4e" />
    <rect x="560" y="430" width="70" height="370" fill="#200b36" />
    <rect x="640" y="410" width="80" height="390" fill="#2d0a4e" />
    <rect x="730" y="440" width="60" height="360" fill="#200b36" />
    <rect x="800" y="400" width="90" height="400" fill="#2d0a4e" />
    <rect x="900" y="460" width="70" height="340" fill="#200b36" />
    <rect x="980" y="420" width="60" height="380" fill="#2d0a4e" />
    <rect x="1050" y="450" width="100" height="350" fill="#200b36" />
  </g>

  {/* Main buildings in foreground */}
  <g id="main-buildings">
    {/* Empire State Building style */}
    <g id="empire-building">
      <rect x="300" y="300" width="120" height="500" fill="url(#buildingGradient1)" />
      <rect x="320" y="200" width="80" height="100" fill="url(#buildingGradient1)" />
      <rect x="340" y="150" width="40" height="50" fill="url(#buildingGradient1)" />
      <rect x="350" y="100" width="20" height="50" fill="url(#buildingGradient1)" />
      
      {/* Windows */}
      <g fill="#5b1aff" opacity="0.6">
        <rect x="320" y="330" width="10" height="15" />
        <rect x="340" y="330" width="10" height="15" />
        <rect x="360" y="330" width="10" height="15" />
        <rect x="380" y="330" width="10" height="15" />
        <rect x="320" y="355" width="10" height="15" />
        <rect x="340" y="355" width="10" height="15" />
        <rect x="360" y="355" width="10" height="15" />
        <rect x="380" y="355" width="10" height="15" />
        <rect x="320" y="380" width="10" height="15" />
        <rect x="340" y="380" width="10" height="15" />
        <rect x="360" y="380" width="10" height="15" />
        <rect x="380" y="380" width="10" height="15" />
        <rect x="320" y="405" width="10" height="15" />
        <rect x="340" y="405" width="10" height="15" />
        <rect x="360" y="405" width="10" height="15" />
        <rect x="380" y="405" width="10" height="15" />
      </g>
    </g>

    {/* Modern skyscraper */}
    <g id="modern-skyscraper">
      <rect x="500" y="250" width="100" height="550" fill="url(#buildingGradient2)" />
      <rect x="520" y="220" width="60" height="30" fill="url(#buildingGradient2)" />
      
      {/* Windows */}
      <g fill="#00e5ff" opacity="0.7">
        <rect x="520" y="270" width="15" height="20" />
        <rect x="545" y="270" width="15" height="20" />
        <rect x="570" y="270" width="15" height="20" />
        <rect x="520" y="300" width="15" height="20" />
        <rect x="545" y="300" width="15" height="20" />
        <rect x="570" y="300" width="15" height="20" />
        <rect x="520" y="330" width="15" height="20" />
        <rect x="545" y="330" width="15" height="20" />
        <rect x="570" y="330" width="15" height="20" />
        <rect x="520" y="360" width="15" height="20" />
        <rect x="545" y="360" width="15" height="20" />
        <rect x="570" y="360" width="15" height="20" />
      </g>
    </g>

    {/* Futuristic tower */}
    <g id="futuristic-tower">
      <rect x="700" y="200" width="120" height="600" fill="#2a0845" />
      <polygon points="700,200 760,150 820,200" fill="#2a0845" />
      <rect x="740" y="100" width="40" height="50" fill="#2a0845" />
      
      {/* Glowing windows */}
      <g fill="url(#windowGlow)">
        <rect x="720" y="230" width="20" height="30" />
        <rect x="750" y="230" width="20" height="30" />
        <rect x="780" y="230" width="20" height="30" />
        <rect x="720" y="270" width="20" height="30" />
        <rect x="750" y="270" width="20" height="30" />
        <rect x="780" y="270" width="20" height="30" />
        <rect x="720" y="310" width="20" height="30" />
        <rect x="750" y="310" width="20" height="30" />
        <rect x="780" y="310" width="20" height="30" />
        <rect x="720" y="350" width="20" height="30" />
        <rect x="750" y="350" width="20" height="30" />
        <rect x="780" y="350" width="20" height="30" />
      </g>
    </g>

    {/* Modern curved building */}
    <g id="curved-building">
      <path d="M900,320 Q950,300 1000,320 L1000,800 L900,800 Z" fill="#380c5a" />
      
      {/* Windows */}
      <g fill="#5b1aff" opacity="0.6">
        <rect x="915" y="350" width="15" height="20" />
        <rect x="940" y="345" width="15" height="20" />
        <rect x="965" y="345" width="15" height="20" />
        <rect x="915" y="380" width="15" height="20" />
        <rect x="940" y="375" width="15" height="20" />
        <rect x="965" y="375" width="15" height="20" />
        <rect x="915" y="410" width="15" height="20" />
        <rect x="940" y="405" width="15" height="20" />
        <rect x="965" y="405" width="15" height="20" />
        <rect x="915" y="440" width="15" height="20" />
        <rect x="940" y="435" width="15" height="20" />
        <rect x="965" y="435" width="15" height="20" />
      </g>
    </g>

    {/* Foreground building */}
    <g id="front-building">
      <rect x="100" y="350" width="150" height="450" fill="#380c5a" />
      
      {/* Windows */}
      <g fill="#ff7c7c" opacity="0.5">
        <rect x="120" y="380" width="20" height="25" />
        <rect x="150" y="380" width="20" height="25" />
        <rect x="180" y="380" width="20" height="25" />
        <rect x="210" y="380" width="20" height="25" />
        <rect x="120" y="415" width="20" height="25" />
        <rect x="150" y="415" width="20" height="25" />
        <rect x="180" y="415" width="20" height="25" />
        <rect x="210" y="415" width="20" height="25" />
        <rect x="120" y="450" width="20" height="25" />
        <rect x="150" y="450" width="20" height="25" />
        <rect x="180" y="450" width="20" height="25" />
        <rect x="210" y="450" width="20" height="25" />
      </g>
    </g>
  </g>

  {/* Flying drone/vehicle */}
  <g id="drone" transform="translate(600, 280) rotate(-15)">
    <ellipse cx="0" cy="0" rx="15" ry="5" fill="#5b1aff" opacity="0.8" />
    <circle cx="0" cy="0" r="3" fill="#00e5ff" opacity="0.9" />
    <line x1="-18" y1="0" x2="-12" y2="0" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
    <line x1="12" y1="0" x2="18" y2="0" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
  </g>

  {/* Light beams from buildings */}
  <g id="light-beams" opacity="0.3">
    <polygon points="360,100 350,50 370,50" fill="#ff00ff" />
    <polygon points="550,220 540,170 560,170" fill="#00ffff" />
    <polygon points="760,150 750,100 770,100" fill="#ff00ff" />
  </g>

  {/* Grid lines on ground/horizon */}
  <g id="grid-lines" stroke="#5b1aff" strokeWidth="1" opacity="0.3">
    <line x1="0" y1="800" x2="1200" y2="800" />
    <line x1="100" y1="800" x2="300" y2="700" />
    <line x1="300" y1="800" x2="500" y2="700" />
    <line x1="500" y1="800" x2="700" y2="700" />
    <line x1="700" y1="800" x2="900" y2="700" />
    <line x1="900" y1="800" x2="1100" y2="700" />
  </g>
</svg>
    </div>
    
    {/* Purple gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/40 to-indigo-900/40" />
    
    {/* Content */}
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
          AI-powered mentoring that transforms industry novices into
          development experts through immersive, gamified learning
          experiences.
        </p>
      </div>
    </div>
  </section>
);