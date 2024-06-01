'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import Carousel from '@/components/Molecule/Carousel/Carousel'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useEffect } from 'react'
import { generateFiles } from '@/utils/generate-files'

export default function Home({ params }: { params: { lang: Locale } }) {
  useEffect(() => {
    const executeGenerateFiles = async () => {
      await generateFiles()
    }
    executeGenerateFiles()
  }, [])
  return (
    <div className="text-primary">
      <Header lang={params.lang} bgColor="bg-opacity" />
      <main>
        <Carousel />
        <ConfigContent />
      </main>
      <Footer position="absolute" />
    </div>
  )
}
