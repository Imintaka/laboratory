import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { siteConfig } from '@/lib/site'

import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-playfair-display',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} interior preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/images/laba_logo.png',
    apple: '/images/laba_logo2.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} min-h-dvh bg-[radial-gradient(circle_at_top,_#f6ebcf_0%,_#f8f2e4_28%,_#f4efe8_54%,_#f8f7f3_100%)] text-zinc-950 antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
