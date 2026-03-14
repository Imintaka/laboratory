import { siteDescription, siteName } from '@/data/home'

const defaultSiteUrl = 'http://localhost:3000'

export const siteConfig = {
  name: siteName,
  description: siteDescription,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  ogImage: '/images/rosario.webp',
}
