import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: ' شركة هوم موف للنقل | خدمات نقل احترافية',
  description: 'شركة سماء الأزرق للنقل توفر خدمات نقل احترافية وموثوقة للعملاء. احصل على عرض سعر مجاني اليوم!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

