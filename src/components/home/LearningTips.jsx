export default function LearningTips() {
  const learningTips = [
    {
      category: "Study Techniques",
      icon: "🧠",
      badgeColor: "bg-purple-100 text-purple-700",
      tips: [
        {
          title: "Active Recall",
          description: "Close the book after reading and try to recall the concepts yourself instead of just passively rereading.",
        },
        {
          title: "Feynman Technique",
          description: "Try to explain what you've learned in very simple terms to someone else (or even just to yourself).",
        },
        {
          title: "Spaced Repetition",
          description: "Review older materials at strategic intervals rather than cramming everything all at once.",
        },
      ],
    },
    {
      category: "Time Management",
      icon: "⏳",
      badgeColor: "bg-emerald-100 text-emerald-700",
      tips: [
        {
          title: "Pomodoro Technique",
          description: "Study with full focus for 25 minutes, then take a short 5-minute break to refresh your mind.",
        },
        {
          title: "Time Blocking",
          description: "Divide your day into distinct blocks and allocate specific time slots for specific subjects or tasks.",
        },
        {
          title: "Prioritize Tasks",
          description: "Tackle the most important and difficult tasks at the beginning of your day when your energy is highest.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            📌 Learning Tips & Strategies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Use these proven techniques to accelerate your learning and manage your time effectively.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {learningTips.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className={`text-2xl p-3 rounded-xl ${section.badgeColor}`}>
                  {section.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {section.category}
                </h3>
              </div>

              {/* Tips List */}
              <div className="space-y-6">
                {section.tips.map((tip, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    {/* Check/Bullet Icon */}
                    <div className="mt-1 bg-blue-50 text-blue-600 rounded-full p-1 border border-blue-100 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    {/* Tip Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}