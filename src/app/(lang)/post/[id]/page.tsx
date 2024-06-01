'use client'

import BlogPost from '@/components/Molecule/BlogPost/BlogPost'
import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/hooks/LanguageContext'

function Page({ params }: { params: { id: string } }) {
  const { id } = useParams()
  const { language, setLanguage, refreshLanguage } = useLanguage()

  return (
    <div className="bg-primary text-primary">
      <Header lang={language} bgColor="bg-primary" />
      <ConfigContent />
      <BlogPost id={id.toString()} />
      <Footer position="" />
    </div>
  )
}

export default Page
