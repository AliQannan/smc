// components/Navbar.tsx
'use client';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b-2 border-black bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-white group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
            <span className="font-handwritten text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
              CryptoAI Predict
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-all duration-300 hover:scale-105 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/pricing" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-all duration-300 hover:scale-105 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="font-handwritten px-6 py-2 text-lg border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 hand-drawn-button">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="font-handwritten px-6 py-2 text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 hand-drawn-button shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard" 
                  className="font-handwritten text-lg text-black hover:text-gray-700 transition-colors"
                >
                  Dashboard
                </Link>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border-2 border-black",
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-6 pb-4 border-t border-gray-200 pt-4">
            <Link 
              href="/services" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <SignedOut>
              <div className="flex flex-col space-y-3 pt-4">
                <SignInButton mode="modal">
                  <button 
                    className="font-handwritten px-6 py-3 text-lg border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button 
                    className="font-handwritten px-6 py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            
            <SignedIn>
              <div className="flex flex-col space-y-3 pt-4">
                <Link 
                  href="/dashboard" 
                  className="font-handwritten text-lg text-black hover:text-gray-700 transition-colors text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="flex justify-center">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 border-2 border-black",
                      }
                    }}
                  />
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}