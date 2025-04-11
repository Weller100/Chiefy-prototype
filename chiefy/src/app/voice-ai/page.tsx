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
    <div className="py-8 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#6B4EFF] to-[#9747FF] text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chiefy Predictive Voice AI</h1>
          <p className="text-xl md:text-2xl italic mb-6">"Ever heard there's no shortcut to experience... well at Chiefy we disagree. We provide you with all the tools you need to accelerate your skills in Property & Construction."</p>
          <p className="text-lg mb-8">Let Chiefy guide you from your first Concept all the way to Completion, including everything in between.</p>
          <div className="flex justify-center">
            <button className="bg-white text-[#6B4EFF] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Recipe for Success Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Your Recipe for Property Development Success</h2>
            <p className="text-lg">Ever wished that there was a recipe to do your own Property Development? Well, now there is!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#F0EEFF] p-3 rounded-full">
                <span className="text-[#6B4EFF] text-xl">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ask Anything</h3>
                <p className="text-gray-600">Get the answers and guidance you need, without heartache or embarrassment.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#F0EEFF] p-3 rounded-full">
                <span className="text-[#6B4EFF] text-xl">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Follow the Process</h3>
                <p className="text-gray-600">Our stage-by-stage approach ensures you never miss a critical step.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#F0EEFF] p-3 rounded-full">
                <span className="text-[#6B4EFF] text-xl">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Apply Industry Knowledge</h3>
                <p className="text-gray-600">Leverage data from thousands of successful projects.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#F0EEFF] p-3 rounded-full">
                <span className="text-[#6B4EFF] text-xl">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Achieve Optimal Outcomes</h3>
                <p className="text-gray-600">Want the best outcomes for your project? Just ask Chiefy!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice AI Demo Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience Chiefy Predictive Voice AI</h2>
        
        {/* Development Stages Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {developmentStages.map((stage) => (
            <button
              key={stage.id}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === stage.id
                  ? 'bg-[#6B4EFF] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(stage.id)}
            >
              <span>{stage.icon}</span>
              <span>{stage.title}</span>
            </button>
          ))}
        </div>
        
        {/* Stage Description */}
        <div className="bg-[#F8F8F8] p-4 rounded-lg mb-6">
          <p className="text-center">
            <span className="font-semibold">{developmentStages.find(s => s.id === activeTab)?.title} Stage: </span>
            {developmentStages.find(s => s.id === activeTab)?.description}
          </p>
        </div>
        
        {/* Voice AI Interaction Area */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
          {/* Question Area */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-semibold flex-1">Ask Your Question</h3>
              <button 
                onClick={() => setShowTips(!showTips)}
                className="text-[#6B4EFF] text-sm flex items-center gap-1"
              >
                {showTips ? 'Hide Tips' : 'Show Tips'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {showTips && (
              <div className="bg-[#F0EEFF] p-4 rounded-lg mb-4">
                <p className="text-sm text-[#6B4EFF] mb-2 font-medium">Tips for asking effective questions:</p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Be specific about your project type and stage</li>
                  <li>Mention your location for region-specific advice</li>
                  <li>Focus on one issue at a time for detailed answers</li>
                </ul>
              </div>
            )}
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question or click the microphone to speak..."
                className="flex-1 px-4 py-3 rounded-lg bg-[#F8F8F8] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B4EFF]"
              />
              <button
                onClick={handleRecordClick}
                className={`p-3 rounded-lg flex items-center justify-center ${
                  isRecording ? 'bg-red-500 text-white' : 'bg-[#6B4EFF] text-white'
                }`}
              >
                {isRecording ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-pulse">●</span>
                    <span>Recording...</span>
                  </span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )}
              </button>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Sample questions for this stage:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions[activeTab as keyof typeof sampleQuestions].map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(q)}
                    className="text-sm bg-[#F8F8F8] hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-full"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Answer Area */}
          <div className="p-6 bg-[#F8F8F8]">
            <h3 className="text-lg font-semibold mb-4">Chiefy's Answer</h3>
            
            {answerLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6B4EFF] mb-4"></div>
                <p className="text-gray-600">Analyzing your question...</p>
              </div>
            ) : answer ? (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">{answer}</p>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Your answer will appear here after you ask a question.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-[#6B4EFF] text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-4">{story.quote}</p>
              <div className="text-right">
                <p className="font-semibold">{story.author}</p>
                <p className="text-sm text-gray-600">{story.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-[#6B4EFF] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Property Development Journey?</h2>
          <p className="mb-6">Get the expert guidance you need, from concept to completion, without years of costly trial and error.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#6B4EFF] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Try Chiefy Voice AI Free
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}