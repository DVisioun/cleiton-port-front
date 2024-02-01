import type { Metadata } from 'next'
import { Poppins, Qwigley } from 'next/font/google'
import './globals.css'
import 'semantic-ui-css/semantic.min.css'

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

export const metadata: Metadata = {
  title: 'Kleytow Moreira | Portfolio',
  description: 'Artista 3D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} ${qwigley.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
