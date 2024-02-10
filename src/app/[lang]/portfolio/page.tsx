import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import Portfolio from '@/components/Molecule/Portfolio/Portfolio'
import { Locale } from '@/config/i18n.config'
import ThemeProvider from '@/hooks/ThemeContext'
import React from 'react'

function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-full bg-primary text-primary overflow-y-auto">
      <ThemeProvider initialTheme="light">
        <Header lang={params.lang} bgColor="bg-primary" />
        <ConfigContent />
        <Portfolio />
        <Footer position='' />
      </ThemeProvider>
    </div>
  )
}

export default page
