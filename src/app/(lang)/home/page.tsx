'use client'

import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import Carousel from '@/components/Molecule/Carousel/Carousel'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { fetchLabels } from '@/api/Labels/fetch-labels'
import { useEffect } from 'react'
import { useLanguage } from '@/hooks/LanguageContext'

export default function Home() {
  const handleFetchLabels = async () => {
    const { data } = await fetchLabels()
    localStorage.setItem('labels', JSON.stringify(data))
  }

  useEffect(() => {
    handleFetchLabels()
  }, [])

  return (
    <div className="text-primary">
      <Header bgColor="bg-opacity" />
      <main>
        <Carousel />
        <ConfigContent />
      </main>
      <Footer position="absolute" />
    </div>
  )
}
