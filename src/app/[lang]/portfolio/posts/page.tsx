import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Locale } from '@/config/i18n.config'
import ThemeProvider from '@/hooks/ThemeContext'
import { Footer } from '@/components/Molecule/Footer/Footer'
import BodyPortfolioPost from '@/components/Molecule/BodyPortfolioPost/BodyPortfolioPost'

const page = ({ params }: { params: { lang: Locale } }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-primary px-12 pt-24">
      <ThemeProvider initialTheme="light">
        <Header lang={params.lang} bgColor="bg-primary" />
        <ConfigContent />
        <BodyPortfolioPost />
        <Footer position="" />
      </ThemeProvider>
    </div>
  )
}

export default page
