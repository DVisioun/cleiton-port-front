import Blog from '@/components/Molecule/Blog/Blog'
import React from 'react'
import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'

function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-full bg-primary text-primary">
      <Header lang={params.lang} bgColor="bg-primary" />
      <ConfigContent />
      <Blog lang={params.lang} />
      <Footer position="" />
    </div>
  )
}

export default page
