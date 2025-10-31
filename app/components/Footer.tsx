// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-white">
                <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
              <span className="font-handwritten text-2xl font-bold text-black">
                CryptoAI Predict
              </span>
            </div>
            <p className="font-handwritten text-gray-700 text-lg">
              Predict cryptocurrency future with artificial intelligence
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-handwritten font-bold text-2xl mb-4 text-black">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Home</Link></li>
              <li><Link href="/services" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Services</Link></li>
              <li><Link href="/pricing" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-handwritten font-bold text-2xl mb-4 text-black">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Help Center</Link></li>
              <li><Link href="/contact" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Contact Us</Link></li>
              <li><Link href="/docs" className="font-handwritten text-gray-700 hover:text-black transition-colors text-lg">Documentation</Link></li>
            </ul>
          </div>

          {/* Telegram Bot */}
          <div>
            <h3 className="font-handwritten font-bold text-2xl mb-4 text-black">Telegram Bot</h3>
            <p className="font-handwritten text-gray-700 text-lg mb-4">
              Subscribe now and get AI predictions directly on Telegram
            </p>
            <a 
              href="https://t.me/your_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="font-handwritten inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg hand-drawn-button"
            >
              Join Telegram Bot
            </a>
          </div>
        </div>

        <div className="border-t-2 border-black mt-8 pt-8 text-center">
          <p className="font-handwritten text-gray-700 text-lg">
            © 2024 CryptoAI Predict. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}