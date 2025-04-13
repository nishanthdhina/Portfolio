import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// AOS is now handled in AnimationProvider component

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Nishanth Dhina | 17-Year-Old CEO & Founder of ProVocis",
  description: "Nishanth Dhina is a driven and innovative developer passionate about creating impactful digital solutions. CEO & Founder of ProVocis at just 17 years old.",
  keywords: "Nishanth Dhina, ProVocis, CEO, Founder, 17-year-old, developer, programmer, web developer, software engineer, portfolio",
  creator: "Nishanth Dhina",
  authors: [{ name: "Nishanth Dhina", url: "https://nishanthdhina.com" }],
  metadataBase: new URL('https://nishanthdhina.com'),
  openGraph: {
    title: "Nishanth Dhina | 17-Year-Old CEO & Founder of ProVocis",
    description: "Nishanth Dhina is a driven and innovative developer passionate about creating impactful digital solutions. CEO & Founder of ProVocis at just 17 years old.",
    url: "https://nishanthdhina.com",
    siteName: "Nishanth Dhina Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nishanth Dhina - CEO & Founder of ProVocis",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishanth Dhina | 17-Year-Old CEO & Founder of ProVocis",
    description: "Nishanth Dhina is a driven and innovative developer passionate about creating impactful digital solutions. CEO & Founder of ProVocis at just 17 years old.",
    images: ["/og-image.jpg"],
    creator: "@nishanthdhin4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://nishanthdhina.com",
  },
  icons: {
    icon: [
      { url: '/assets/favicons/favicon.ico' },
      { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: {
      url: '/assets/favicons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/assets/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/assets/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/assets/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* Favicon links for maximum compatibility */}
        <link rel="icon" href="/assets/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
