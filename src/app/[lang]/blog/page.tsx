import Blog from '@/components/Molecule/Blog/Blog'
import React from 'react'
import ThemeProvider from '@/hooks/ThemeContext'
import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'

function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-full bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header lang={params.lang} bgColor="bg-primary" />
        <ConfigContent />
        <Blog />
        <Footer position="" />
      </ThemeProvider>
    </div>
  )
}

export default page
