'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import Carousel from '@/components/Molecule/Carousel/Carousel'
import ThemeProvider from '@/hooks/ThemeContext'

export default function Home() {
  return (
    <div className=" text-primary">
      <ThemeProvider initialTheme="light">
        <Header bgColor="bg-opacity" />
        <main>
          <Carousel />
          <div className="flex min-h-screen flex-col items-center justify-center">
            <ConfigContent />
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}
