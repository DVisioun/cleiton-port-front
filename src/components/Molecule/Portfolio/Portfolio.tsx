'use client'

import React, { useEffect, useState } from 'react'
import CardPortfolioSession from '@/components/Atom/CardPortfolioSession/CardPortfolioSession'
import Title from '@/components/Atom/Title/Title'
import { fetchPortfolioProjects } from '@/api/PortfolioProject/fetch-portfolio-project'
import { useAtom } from 'jotai'
import { portfolioProjectAtom } from '@/states/portfolioProjectAtom'
import Link from 'next/link'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'
import { notifyFailure } from '@/utils/toastify'

const Portfolio = () => {
  const [portfolioProjects, setPortfolioProjects] =
    useAtom(portfolioProjectAtom)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleFetchProjects = async () => {
      try {
        if (portfolioProjects.length > 0) return
        const { data } = await fetchPortfolioProjects()
        setPortfolioProjects(data)
      } catch (error) {
        notifyFailure(error.message)
      } finally {
        setLoading(false)
      }
    }

    handleFetchProjects()
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      <main className="min-h-[calc(100%-90px)] w-full px-[80px] pt-40 sm-0:px-6 sm-1:pt-5">
        <Title title="Portfólio" />
        <section
          className={`flex flex-wrap ${portfolioProjects.length > 1 ? 'justify-center' : ''} items-start gap-4 py-4`}
        >
          {portfolioProjects
            ? portfolioProjects?.map((project) => {
                return (
                  <Link
                    key={project.id}
                    href={`/portfolio/posts/${project.id}`}
                    className="text-primary no-underline hover:text-primary"
                  >
                    <CardPortfolioSession key={project.id} project={project} />
                  </Link>
                )
              })
            : null}
        </section>
      </main>
    </>
  )
}

export default Portfolio
