import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'eWhip',
  description: 'Discover the car that is right for you'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
