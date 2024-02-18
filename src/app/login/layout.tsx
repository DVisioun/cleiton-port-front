import { Poppins, Qwigley } from 'next/font/google'
import '@/app/globals.css'
import { ToastContainer, toast } from 'react-toastify'
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
  return (
    <html lang="pt">
      <body className={`${poppins.variable} ${qwigley.variable} font-sans`}>
        <ToastContainer
          autoClose={1500}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
        <div className="flex h-screen items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
