import { Poppins, Qwigley } from 'next/font/google'
import '@/app/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { SideBarCMS } from '@/components/Molecule/SideBarCMS/SideBarCMS'
import fetchAndSaveLabels from '@/api/Labels/write-labels-in-files'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  fetchAndSaveLabels()
  return (
    <html lang="pt">
      <body className={`${poppins.variable} ${qwigley.variable} font-sans`}>
        <div className="flex">
          <ToastContainer
            autoClose={1500}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
          <SideBarCMS />
          <div className="w-full pl-60 pt-5">{children}</div>
        </div>
      </body>
    </html>
  )
}
