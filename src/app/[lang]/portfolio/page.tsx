import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Locale } from '@/config/i18n.config'
import ThemeProvider from '@/hooks/ThemeContext'
import { Footer } from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import Portfolio from '@/components/Molecule/Portfolio/Portfolio'
import React from 'react'

function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-full bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header lang={params.lang} bgColor="bg-primary" />
        <ConfigContent />
        <Portfolio lang={params.lang} />
        <Footer position="" />
      </ThemeProvider>
    </div>
  )
}

export default page
