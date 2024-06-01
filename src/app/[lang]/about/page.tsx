'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import About from '@/components/Molecule/About/About'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useLanguage } from '@/hooks/LanguageContext'

function Page() {
  const { language, setLanguage, refreshLanguage } = useLanguage()

  return (
    <div className="h-full overflow-y-auto bg-primary text-primary">
      <Header lang={language} bgColor="bg-primary" />
      <ConfigContent />
      <About language={language} />
      <Footer position="" />
    </div>
  )
}

export default Page
