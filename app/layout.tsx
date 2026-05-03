import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mohammed Anzil M - Full Stack Developer',
  description: 'Full-Stack Developer with experience in Next.js, React.js, Prisma ORM, PostgreSQL, real-time dashboards, IoT integrations, and Vercel deployments.',
  generator: 'v0.app',
  authors: [{ name: 'Mohammed Anzil M' }],
  keywords: ['Mohammed Anzil M', 'Full Stack Developer', 'Next.js', 'React.js', 'Prisma ORM', 'PostgreSQL', 'IoT', 'Three.js'],
  openGraph: {
    title: 'Mohammed Anzil M - Full Stack Developer',
    description: 'Full-Stack Developer building production web applications with Next.js, React.js, Prisma ORM, PostgreSQL, IoT integrations, and real-time dashboards.',
    url: '/',
    siteName: 'Mohammed Anzil M Portfolio',
    images: [
      {
        url: '/IMG_1357.PNG',
        width: 1200,
        height: 1200,
        alt: 'Mohammed Anzil M',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Anzil M - Full Stack Developer',
    description: 'Full-Stack Developer building production web applications with Next.js, React.js, Prisma ORM, PostgreSQL, IoT integrations, and real-time dashboards.',
    images: ['/IMG_1357.PNG'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
