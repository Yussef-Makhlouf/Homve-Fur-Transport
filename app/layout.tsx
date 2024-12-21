import FloatingButtons from '@/components/FloatingButtons'
import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'شركة هوم موف للنقل | خدمات نقل احترافية في جدة',
  description: "شركة هوم موف للنقل تقدم خدمات نقل عفش منزلي وتجاري في جدة بأعلى معايير الجودة والأمان. نوفر خدمات التعبئة والتغليف، النقل الدولي، التخزين الآمن، وحلول نقل مخصصة لكافة احتياجاتكم. فريق محترف، أسعار تنافسية، وضمان سلامة ممتلكاتكم.",
  keywords: [
    "نقل عفش في جدة",
    "شركة نقل أثاث جدة",
    "نقل منازل جدة",
    "نقل مكاتب جدة",
    "تغليف أثاث جدة",
    "تخزين أثاث جدة",
    "نقل دولي من جدة",
    "أفضل شركة نقل في جدة",
    "نقل أثاث رخيص جدة",
    "شركة نقل موثوقة جدة",
    "خدمات نقل احترافية",
    "نقل عفش مع الضمان",
    "نقل عفش مع الفك والتركيب",
    "شركة نقل مرخصة جدة",
    "أرخص شركة نقل عفش"
  ],
  authors: [{ name: 'هوم موف للنقل' }],
  creator: 'هوم موف للنقل',
  publisher: 'هوم موف للنقل',
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
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://homemove.sa',
    title: 'شركة هوم موف للنقل | خدمات نقل احترافية في جدة',
    description: 'خدمات نقل عفش منزلي وتجاري احترافية في جدة مع الضمان',
    siteName: 'هوم موف للنقل',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'هوم موف للنقل',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة هوم موف للنقل | خدمات نقل احترافية في جدة',
    description: 'خدمات نقل عفش منزلي وتجاري احترافية في جدة مع الضمان',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://homemove.sa',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ff6b2b" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={tajawal.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
