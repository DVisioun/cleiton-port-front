'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import Carousel from '@/components/Molecule/Carousel/Carousel'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div className="text-primary">
      <Header lang={params.lang} bgColor="bg-opacity" />
      <main>
        <Carousel />
        {/* <div className="flex min-h-screen flex-col items-center justify-center"> */}
        <ConfigContent />
        {/* </div> */}
      </main>
      <Footer position="absolute" />
    </div>
  )
}
