"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PageTemplate from '@/components/shared/PageTemplate';

export default function VoiceAiPage() {
  const [activeTab, setActiveTab] = useState('concept');
  const [isRecording, setIsRecording] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerLoading, setAnswerLoading] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sample questions for different project stages
  const sampleQuestions = {
    concept: [
      "How do I evaluate if a site is suitable for development?",
      "What are the key financial metrics for property development?",
      "How do I create a concept design brief?"
    ],
    planning: [
      "What permits do I need for a residential development?",
      "How long does the planning process typically take?",
      "What documentation is required for council approval?"
    ],
    construction: [
      "How do I select the right builder for my project?",
      "What's a reasonable contingency budget?",
      "How do I handle construction delays?"
    ],
    completion: [
      "What certificates do I need before occupancy?",
      "How do I prepare for the final inspection?",
      "What are the common defects to look for?"
    ]
  };

  const developmentStages = [
    { 
      id: 'concept', 
      title: 'Concept', 
      icon: '💡',
      description: 'Initial project ideas, feasibility analysis, and market research.'
    },
    { 
      id: 'planning', 
      title: 'Planning', 
      icon: '📋',
      description: 'Design development, permits, approvals, and budget planning.'
    },
    { 
      id: 'construction', 
      title: 'Construction', 
      icon: '🏗️',
      description: 'Building process, contractor management, and quality control.'
    },
    { 
      id: 'completion', 
      title: 'Completion', 
      icon: '🎯',
      description: 'Final inspections, certifications, handover, and project evaluation.'
    }
  ];

  const handleRecordClick = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      
      // Play audio feedback
      if (audioRef.current) {
        audioRef.current.play();
      }
      
      // Simulate processing
      setAnswerLoading(true);
      setTimeout(() => {
        setAnswerLoading(false);
        if (question) {
          // Generate answer based on question
          const answers = [
            "Based on my analysis, I recommend starting with a detailed site analysis, focusing on zoning regulations, soil conditions, and access to utilities. These factors will significantly impact your development potential.",
            "The best approach is to create a comprehensive timeline that accounts for planning approvals, which typically take 3-6 months depending on your local council. I'd also suggest adding a 20% contingency to your initial budget estimates.",
            "For your specific project type, you should focus on securing structural certification first, followed by electrical and plumbing compliance certificates. Most jurisdictions require these before issuing an occupancy certificate.",
            "To avoid common pitfalls, ensure your contract includes detailed specifications, milestone payments tied to completion stages, and a clear defect liability period. This structure protects both you and the contractor."
          ];
          setAnswer(answers[Math.floor(Math.random() * answers.length)]);
        }
      }, 2000);
    } else {
      // Start recording
      setIsRecording(true);
      setAnswer('');
    }
  };

  const handleQuestionClick = (q: string) => {
    setQuestion(q);
    setIsRecording(false);
    
    // Simulate processing
    setAnswerLoading(true);
    setTimeout(() => {
      setAnswerLoading(false);
      // Generate answer based on question
      if (q.includes("site")) {
        setAnswer("When evaluating a site for development, focus on these key factors: zoning regulations, soil quality, access to utilities, flood zone status, and neighborhood characteristics. I recommend obtaining a preliminary planning assessment from your local council before committing to a purchase.");
      } else if (q.includes("financial")) {
        setAnswer("Key financial metrics for property development include: Return on Investment (ROI), Internal Rate of Return (IRR), Gross Development Value (GDV), and development margin. For most developers, a minimum 20% profit on cost is considered the benchmark for a viable project.");
      } else if (q.includes("permits")) {
        setAnswer("For a typical residential development, you'll need: planning permission/development approval, building permits, sometimes separate permits for demolition, and potentially permits for driveway crossovers if modifying access. Environmental permits may be required depending on site characteristics and local regulations.");
      } else {
        setAnswer("I'd be happy to provide guidance on this area. Based on industry best practices, I recommend first consulting with local professionals familiar with your specific region, as regulations and processes can vary significantly by location. Would you like me to provide more specific information about your area?");
      }
    }, 1500);
  };

  // Success stories/testimonials
  const successStories = [
    {
      quote: "Chiefy's predictive AI saved me from a costly planning mistake. The guidance it provided on setback requirements helped me avoid a major redesign.",
      author: "David L.",
      project: "Duplex Development"
    },
    {
      quote: "I was skeptical at first, but the Voice AI helped me navigate the council approval process like a seasoned professional, even though this was my first development.",
      author: "Rebecca M.",
      project: "Small Apartment Building"
    }
  ];

  useEffect(() => {
    // Load audio element
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/chime.mp3'); // You'd need to add this audio file
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-indigo-900 to-blue-900 text-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-blue-900 opacity-90" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chiefy Predictive Voice AI</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Your intelligent construction assistant
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Introduction Section */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <p className="text-xl mb-8">
              Let Chiefy guide you from your first Concept all the way to Completion, including everything in between.
            </p>
            <div className="bg-purple-600/20 rounded-xl p-6 mb-8">
              <p className="text-lg italic">
                "Ever heard there's no shortcut to experience... well at Chiefy we disagree. We provide you with all the tools you need to accelerate your skills in Property & Construction."
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Want to get the best "Outcomes" for your project?</h3>
                <p className="text-gray-300">Just ask Chiefy! Our AI-powered assistant is here to help.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Get Expert Guidance</h3>
                <p className="text-gray-300">Get the answers and the guidance you need, without the heartache or embarrassment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Stages */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {developmentStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                className={`p-6 rounded-xl transition-all ${
                  activeTab === stage.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <div className="text-3xl mb-2">{stage.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                <p className="text-sm opacity-80">{stage.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Voice Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Ask Your Question</h2>
              <p className="text-gray-300">
                Click the microphone to start recording or select a sample question below
              </p>
            </div>

            {/* Recording Interface */}
            <div className="flex flex-col items-center mb-8">
              <button
                onClick={handleRecordClick}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isRecording 
                    ? 'bg-red-500 animate-pulse' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>
              {isRecording && (
                <p className="text-red-400 mt-2 animate-pulse">Recording...</p>
              )}
            </div>

            {/* Sample Questions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">Sample Questions for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Stage:</h3>
              {sampleQuestions[activeTab as keyof typeof sampleQuestions].map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(q)}
                  className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Answer Display */}
            {(answerLoading || answer) && (
              <div className="mt-8 p-6 rounded-lg bg-white/5">
                {answerLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold mb-2">Answer:</h4>
                    <p className="text-gray-300">{answer}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16 bg-gradient-to-b from-transparent via-purple-900/10 to-purple-900/20 pb-24">
          <h2 className="text-2xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-gray-300 italic mb-4">"{story.quote}"</p>
                <div>
                  <p className="font-semibold">{story.author}</p>
                  <p className="text-sm text-gray-400">{story.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}