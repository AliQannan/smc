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

export default function Navbar() {
  return (
    <nav className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-white">
              <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
            <span className="font-handwritten text-2xl font-bold text-black">
              CryptoAI Predict
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors hand-drawn-underline"
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors hand-drawn-underline"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="font-handwritten text-xl text-black hover:text-gray-700 transition-colors hand-drawn-underline"
            >
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="font-handwritten px-6 py-2 text-lg border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors hand-drawn-button">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="font-handwritten px-6 py-2 text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition-colors hand-drawn-button">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}