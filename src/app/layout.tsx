import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Laba',
  description: 'Кофе, десерты, уют.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
