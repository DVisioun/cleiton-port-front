'use client'

import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { Footer } from '@/components/Molecule/Footer/Footer'
import BodyPortfolioPost from '@/components/Molecule/BodyPortfolioPost/BodyPortfolioPost'
import { useParams } from 'next/navigation'

const page = ({ params }: { params: { lang: string } }) => {
  const { id } = useParams()

  return (
    <div className="flex w-full flex-col items-center justify-center bg-primary px-12 pt-24 sm-0:px-2 md-3:px-32 md-3.5:px-72">
      <Header bgColor="bg-primary" />
      <ConfigContent />
      <BodyPortfolioPost id={id.toString()} />
      <Footer position="" />
    </div>
  )
}

export default page
