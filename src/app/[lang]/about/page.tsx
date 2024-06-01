'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import About from '@/components/Molecule/About/About'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useEffect } from 'react'
import { generateFiles } from '@/utils/generate-files'

function page({ params }: { params: { lang: Locale } }) {
  useEffect(() => {
    const executeGenerateFiles = async () => {
      await generateFiles()
    }
    executeGenerateFiles()
  }, [])
  return (
    <div className="h-full overflow-y-auto bg-primary text-primary">
      <Header lang={params.lang} bgColor="bg-primary" />
      <ConfigContent />
      <About params={params} />
      <Footer position="" />
    </div>
  )
}

export default page
