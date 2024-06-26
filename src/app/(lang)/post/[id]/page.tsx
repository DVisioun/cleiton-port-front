'use client'

import BlogPost from '@/components/Molecule/BlogPost/BlogPost'
import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import { useParams } from 'next/navigation'

function Page() {
  const { id } = useParams()

  return (
    <div className="bg-primary text-primary">
      <Header bgColor="bg-primary" />
      <ConfigContent />
      <BlogPost id={id.toString()} />
      <Footer position="" />
    </div>
  )
}

export default Page
