import type { Metadata } from 'next'
import { Poppins, Qwigley } from 'next/font/google'
import '@/app/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { i18n } from '@/config/i18n.config'

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

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

export const metadata: Metadata = {
  title: 'Kleytow Moreira | Portfolio',
  description: 'Artista 3D',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body
        lang={params.lang}
        className={`${poppins.variable} ${qwigley.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
