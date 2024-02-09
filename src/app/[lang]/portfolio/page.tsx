import Header from '@/components/Molecule/Header/Header'
import Portfolio from '@/components/Molecule/Portfolio/Portfolio'
import { Locale } from '@/config/i18n.config'
import ThemeProvider from '@/hooks/ThemeContext'
import React from 'react'

function page({ params }: { params: { lang: Locale } }) {
  return (
    <ThemeProvider initialTheme="light">
      <Header lang={params.lang} bgColor="bg-primary" />
      <Portfolio />
    </ThemeProvider>
  )
}

export default page
