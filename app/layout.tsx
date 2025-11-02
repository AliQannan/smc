// app/layout.tsx
import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CryptoAI Predict - Cryptocurrency Prediction with AI',
  description: 'Predict cryptocurrency future with advanced AI algorithms via Telegram bot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster richColors position="top-right" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}