import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
// AOS is now handled in AnimationProvider component

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ]
};

export const metadata: Metadata = {
  title: "Nishanth Dhina | CEO & Founder of ProVocis | 17-Year-Old Entrepreneur & Developer",
  description: "Nishanth Dhina is the CEO & Founder of ProVocis, a 17-year-old tech entrepreneur, developer, and innovator creating cutting-edge digital solutions and web applications. Expert in Next.js, React, TypeScript, and cloud technologies.",
  keywords: [
    "Nishanth Dhina", 
    "Nishanth Dhinakar", 
    "ProVocis", 
    "ProVocis app", 
    "ProVocis founder", 
    "17-year-old CEO", 
    "17-year-old entrepreneur", 
    "young CEO", 
    "tech entrepreneur", 
    "developer portfolio", 
    "software engineer", 
    "web developer", 
    "mobile app developer",
    "Next.js developer",
    "React developer",
    "TypeScript expert",
    "cloud computing",
    "AI integration",
    "digital solutions"
  ].join(", "),
  creator: "Nishanth Dhina",
  authors: [{ name: "Nishanth Dhina", url: "https://nishanthdhina.dev" }],
  metadataBase: new URL('https://nishanthdhina.dev'),
  openGraph: {
    title: "Nishanth Dhina | CEO & Founder of ProVocis | 17-Year-Old Entrepreneur",
    description: "Nishanth Dhina is the CEO & Founder of ProVocis, a 17-year-old tech entrepreneur, developer, and innovator creating cutting-edge digital solutions and web applications. Expert in Next.js, React, TypeScript, and cloud technologies.",
    url: "https://nishanthdhina.dev",
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
    countryName: "United States",
    emails: ["nishanthdhinacontact@gmail.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishanth Dhina | CEO & Founder of ProVocis | 17-Year-Old Entrepreneur",
    description: "Nishanth Dhina is the CEO & Founder of ProVocis, a 17-year-old tech entrepreneur, developer, and innovator creating cutting-edge digital solutions and web applications.",
    images: ["/og-image.jpg"],
    creator: "@nishanthdhin4",
    site: "@nishanthdhin4",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    yandex: "verification_token",
    yahoo: "verification_token",
    other: {
      me: ["nishanthdhinacontact@gmail.com", "https://linkedin.com/in/nishanth-dhina-4a0a1525a", "https://twitter.com/nishanthdhin4", "https://github.com/nishanthdhina"],
    },
  },
  alternates: {
    canonical: "https://nishanthdhina.dev",
    languages: {
      'en-US': 'https://nishanthdhina.dev',
    },
  },
  category: 'technology',
  applicationName: 'Nishanth Dhina Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
  appleWebApp: {
    title: 'Nishanth Dhina',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

// Structured data for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nishanthdhina.dev/#person",
  "name": "Nishanth Dhina",
  "givenName": "Nishanth",
  "familyName": "Dhina",
  "alternateName": "Nishanth Dhinakar",
  "description": "CEO & Founder of ProVocis, 17-year-old tech entrepreneur and developer",
  "image": "https://nishanthdhina.dev/og-image.jpg",
  "sameAs": [
    "https://linkedin.com/in/nishanth-dhina-4a0a1525a",
    "https://github.com/nishanthdhina",
    "https://twitter.com/nishanthdhin4"
  ],
  "jobTitle": "CEO & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "ProVocis",
    "url": "https://provocis.com"
  },
  "knowsAbout": [
    "Web Development",
    "Mobile App Development",
    "Next.js",
    "React",
    "TypeScript",
    "Cloud Computing",
    "AI Integration",
    "UI/UX Design"
  ],
  "nationality": "American",
  "email": "nishanthdhinacontact@gmail.com"
};

// Structured data for WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nishanthdhina.dev/#website",
  "url": "https://nishanthdhina.dev",
  "name": "Nishanth Dhina Portfolio",
  "description": "Official portfolio website of Nishanth Dhina, CEO & Founder of ProVocis",
  "publisher": {
    "@id": "https://nishanthdhina.dev/#person"
  },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nishanthdhina.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Structured data for BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nishanthdhina.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://nishanthdhina.dev/#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Projects",
      "item": "https://nishanthdhina.dev/#projects"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://nishanthdhina.dev/#contact"
    }
  ]
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
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Nishanth Dhina" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} Nishanth Dhina`} />
        
        {/* .dev domain specific trust signals */}
        <meta name="google-site-verification" content="verification_token" />
        <meta name="trustworthy-site" content="true" />
        <meta name="secure-site" content="true" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        
        {/* Structured data for SEO */}
        <Script id="person-schema" type="application/ld+json">
          {JSON.stringify(personSchema)}
        </Script>
        
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
        
        <Script id="breadcrumb-schema" type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      </body>
    </html>
  );
}
