// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black font-handwritten">
              CryptoAI Predict
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-handwritten">
            Predict cryptocurrency future with advanced AI algorithms
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-300 p-8 rounded-xl bg-white hover:shadow-sm transition-all duration-300 font-handwritten hover:border-green-500 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BrainIcon className="w-12 h-12 text-gray-800 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Advanced AI</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Smart algorithms analyze market trends and predict currency movements
              </p>
            </div>

            <div className="border border-gray-300 p-8 rounded-xl bg-white hover:shadow-sm transition-all duration-300 font-handwritten hover:border-blue-500 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BotIcon className="w-12 h-12 text-gray-800 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Telegram Bot</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Receive predictions directly on your phone through our Telegram bot
              </p>
            </div>

            <div className="border border-gray-300 p-8 rounded-xl bg-white hover:shadow-sm transition-all duration-300 font-handwritten hover:border-purple-500 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <LightningIcon className="w-12 h-12 text-gray-800 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Instant Updates</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Real-time alerts when profitable trading opportunities emerge
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/pricing"
              className="font-handwritten px-8 py-4 text-xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors border border-green-600 hover:shadow-sm"
            >
              Get Started
            </Link>
            <a 
              href="https://t.me/your_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="font-handwritten px-8 py-4 text-xl border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors hover:shadow-sm"
            >
              Join Telegram Bot
            </a>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-handwritten text-5xl text-center mb-16 font-bold text-black">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Subscribe", desc: "Choose the right plan for your needs", color: "green" },
              { step: "2", title: "Connect Bot", desc: "Get your personalized Telegram bot link", color: "blue" },
              { step: "3", title: "Receive", desc: "Get AI predictions automatically", color: "purple" },
              { step: "4", title: "Trade", desc: "Use predictions in your trading strategy", color: "orange" }
            ].map((item) => (
              <div key={item.step} className="text-center font-handwritten group">
                <div className={`w-20 h-20 border-2 border-${item.color}-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold bg-white group-hover:bg-${item.color}-50 transition-colors`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-lg text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-handwritten text-5xl text-center mb-16 font-bold text-black">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John D.", text: "The predictions have been incredibly accurate. My portfolio is up 35%!", color: "green" },
              { name: "Sarah M.", text: "Love getting alerts directly on Telegram. So convenient!", color: "blue" },
              { name: "Mike R.", text: "The AI analysis is much better than my own research.", color: "purple" }
            ].map((testimonial, index) => (
              <div key={index} className={`border-l-4 border-${testimonial.color}-500 p-6 rounded-r-lg bg-gray-50 font-handwritten hover:shadow-sm transition-all`}>
                <div className="text-4xl mb-4 text-gray-400">"</div>
                <p className="text-lg text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="text-black font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Hand-drawn SVG Icons
function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}