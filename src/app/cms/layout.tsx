import { Poppins, Qwigley } from 'next/font/google'
import '@/app/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { SideBarCMS } from '@/components/Molecule/SideBarCMS/SideBarCMS'

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
    <html lang="pt">
      <body className={`${poppins.variable} ${qwigley.variable} font-sans`}>
        <div className="flex">
          <SideBarCMS />
          <div className="pl-60 pt-5 w-full">{children}</div>
        </div>
      </body>
    </html>
  )
}
