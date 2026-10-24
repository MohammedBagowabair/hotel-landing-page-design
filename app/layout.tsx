import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE = 'https://mohammedbagowabair.github.io/hotel-landing-page-design/'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const title = 'Selayang House | Rainforest Retreat in Genting Highlands, Malaysia'
const description =
  'Selayang House is a slow-living rainforest retreat in Genting Highlands, Malaysia. Garden terraces, suites and a pool villa. Enquire on WhatsApp +60 11-5119 8497.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  applicationName: 'Selayang House',
  alternates: { canonical: SITE },
  icons: {
    icon: [
      { url: `${BASE}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${BASE}/favicon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE}/favicon-16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE}/favicon.ico`, sizes: 'any' },
    ],
    apple: { url: `${BASE}/apple-touch-icon.png`, sizes: '180x180' },
  },
  manifest: `${BASE}/site.webmanifest`,
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'Selayang House',
    title,
    description,
    locale: 'en_MY',
    images: [{ url: `${SITE}og-image.jpg`, width: 1200, height: 630, alt: 'Selayang House rainforest retreat' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${SITE}og-image.jpg`] },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#314d3c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href={`${BASE}/img/hero-1600.webp`} media="(max-width: 760px)" />
        <link rel="preload" as="image" href={`${BASE}/img/hero.webp`} media="(min-width: 761px)" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
