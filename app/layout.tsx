// app/layout.tsx
import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Caveat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
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
        <body className={`${caveat.variable} antialiased`}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}