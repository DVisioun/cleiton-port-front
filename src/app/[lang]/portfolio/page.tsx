import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import Portfolio from '@/components/Molecule/Portfolio/Portfolio'
import { useLanguage } from '@/hooks/LanguageContext'
import React from 'react'

function Page() {
  const { language, setLanguage, refreshLanguage } = useLanguage()

  return (
    <div className="h-full bg-primary text-primary">
      <Header lang={language} bgColor="bg-primary" />
      <ConfigContent />
      <Portfolio />
      <Footer position="" />
    </div>
  )
}

export default Page
