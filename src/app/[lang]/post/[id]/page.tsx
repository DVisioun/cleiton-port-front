'use client'

import BlogPost from '@/components/Molecule/BlogPost/BlogPost'
import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Locale } from '@/config/i18n.config'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useParams } from 'next/navigation'

function Page({ params }: { params: { lang: Locale; id: string } }) {
  const { id } = useParams()

  return (
    <div className="bg-primary text-primary">
      <Header lang={params.lang} bgColor="bg-primary" />
      <ConfigContent />
      <BlogPost id={id.toString()} />
      <Footer position="" />
    </div>
  )
}

export default Page
