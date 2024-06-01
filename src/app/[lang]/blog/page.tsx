import Blog from '@/components/Molecule/Blog/Blog'
import React from 'react'
import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useLanguage } from '@/hooks/LanguageContext'

function Page() {
  const { language, setLanguage, refreshLanguage } = useLanguage()

  return (
    <div className="h-full bg-primary text-primary">
      <Header lang={language} bgColor="bg-primary" />
      <ConfigContent />
      <Blog />
      <Footer position="" />
    </div>
  )
}

export default Page
