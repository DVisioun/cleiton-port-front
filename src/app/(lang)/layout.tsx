'use client'

import { Poppins, Qwigley } from 'next/font/google'
import '@/app/globals.css'
import 'semantic-ui-css/semantic.min.css'
import ThemeProvider from '@/hooks/ThemeContext'
import { LanguageProvider } from '@/hooks/LanguageContext'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const qwigley = Qwigley({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-qwigley',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${poppins.variable} ${qwigley.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
