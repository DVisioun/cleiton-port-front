import React from 'react'
import ThemeProvider from '@/hooks/ThemeContext'
import CardPortfolioSession from '@/components/Atom/CardPortfolioSession/CardPortfolioSession'

const Portfolio = () => {
  return (
    <main className="w-full bg-[var(--white)] py-14">
      <ThemeProvider initialTheme="light">
        <section className="flex w-full items-center justify-between gap-6 px-4">
          <div className="h-[.05rem] w-1/3 bg-black"></div>
          <h2 className="font-alt text-5xl font-normal">Portfólio</h2>
          <div className="h-[.05rem] w-1/3 bg-black"></div>
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-6 p-4 sm-cardPortfolio-0:flex-row sm-cardPortfolio-0:flex-wrap">
          <CardPortfolioSession />
          <CardPortfolioSession />
        </section>
      </ThemeProvider>
    </main>
  )
}

export default Portfolio
