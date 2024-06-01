import { API } from '@/@types/api'
import { fetchPortfolioProjects } from '@/api/PortfolioProject/fetch-portfolio-project'
import { fetchSoftwares } from '@/api/Software/fetch-softwares'
import AboutCard from '@/components/Atom/AboutCard/AboutCard'
import { softwareAtom } from '@/states/softwareAtom'
import { useAtom } from 'jotai'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import { readBase64ToFile } from '@/utils/base64-converter'
import Link from 'next/link'
import { useLanguage } from '@/hooks/LanguageContext'

interface PortfolioPostProps {
  id: string
}

const BodyPortfolioPost = ({ id }: PortfolioPostProps) => {
  const [portfolioPost, setPortfolioPost] =
    useState<API.PortfolioPostSchema[]>()
  const [portfolioOtherPosts, setPortfolioOtherPosts] =
    useState<API.PortfolioPostSchema[]>()
  const [softwares, setSoftwares] = useAtom(softwareAtom)

  const { language, setLanguage, refreshLanguage } = useLanguage()

  const handlePortfolioPostsFetch = async () => {
    const response = await fetchPortfolioProjects()
    if (response) {
      handleFilteredPosts(response.data)
    }
  }

  const handleFilteredPosts = (data: any) => {
    const filteredOtherPosts = data?.filter((post) => post.id !== id)
    setPortfolioOtherPosts(filteredOtherPosts.slice(0, 2))

    const filteredPosts = data?.filter((post) => post.id === id)
    setPortfolioPost(filteredPosts)
  }

  const handleSoftwareFetch = async () => {
    const response = await fetchSoftwares()

    if (response) {
      setSoftwares(response.data)
    }
  }

  useEffect(() => {
    handlePortfolioPostsFetch()
    handleSoftwareFetch()
  }, [])

  return (
    <div className="flex w-full items-start justify-around md-1.5:flex-col md-1.5:items-center md-1.5:justify-center md-1.5:gap-12">
      <section className="flex w-2/3 flex-col items-start justify-start gap-4 md-1.5:!w-full md-1.5:items-center md-2:w-1/2">
        {portfolioPost && (
          <div
            dangerouslySetInnerHTML={{ __html: portfolioPost[0].content }}
            className="mt-10"
          />
        )}
      </section>
      <div className="flex w-[30%] flex-col items-start justify-center gap-6 sm-2.1:!flex-col sm-2.1:items-center md-1.5:!w-[82%] md-1.5:flex-row md-2:w-[35%]">
        <div className="flex w-full flex-col items-center justify-start bg-secondary px-8 py-4 shadow-card sm-0:px-2">
          <AboutCard />
          {portfolioPost && (
            <h2 className="w-full text-left text-primary">
              {portfolioPost[0].name}
            </h2>
          )}
          {portfolioPost && (
            <p className="w-full text-left text-primary">
              {portfolioPost[0].description}
            </p>
          )}
          <section className="m-10 flex w-full flex-col items-center justify-center">
            <h3 className="w-full text-left text-primary">Softwares</h3>
            <div className="flex w-full flex-wrap items-center justify-start gap-4">
              {portfolioPost &&
                portfolioPost[0].softwares.map((softwarePost) => {
                  return softwares.map(async (software) => {
                    if (software.id === softwarePost.software_id) {
                      const imageCoverAux = await readBase64ToFile(
                        software.image,
                      )
                      const previewURL = URL.createObjectURL(imageCoverAux)
                      return (
                        <div
                          key={software.id}
                          className="flex cursor-default items-center justify-center gap-2 rounded bg-content px-3 py-1 shadow-software"
                        >
                          <Image
                            className="h-8 w-8"
                            src={previewURL}
                            alt={software.name}
                            aria-label={`${software.name} Icon`}
                            width={40}
                            height={40}
                          />
                          <p className="text-white">{software.name}</p>
                        </div>
                      )
                    }
                  })
                })}
            </div>
          </section>
        </div>
        {portfolioOtherPosts && (
          <div className="flex w-full flex-col items-center justify-start gap-8 bg-secondary px-12 py-10 shadow-card sm-0:px-4 sm-2:!w-full sm-2.1:w-1/2">
            <h3 className="m-0 w-full text-left text-3xl text-primary">
              {language === 'pt' ? 'Outros Projetos' : 'Other Projects'}
            </h3>
            {portfolioOtherPosts.map(async (post) => {
              const imageCoverAux = await readBase64ToFile(post.image)
              const previewURL = URL.createObjectURL(imageCoverAux)

              return (
                <Link
                  key={post.id}
                  href={`/portfolio/posts/${post.id}`}
                  className="w-full text-primary no-underline"
                >
                  <div className="relative w-full px-4">
                    <Image
                      src={previewURL}
                      alt="Another post"
                      width={300}
                      height={300}
                      aria-label="Another post"
                      className="max-h-44 w-full object-contain"
                    />
                    <div className="absolute bottom-0 flex w-full items-center justify-start gap-3 bg-opacity p-4">
                      <Image
                        className="rounded-full"
                        alt="Cleiton Avatar"
                        aria-label="Cleiton Avatar"
                        src="/images/avatar.jpg"
                        width={56}
                        height={56}
                      ></Image>
                      <div className="flex flex-col items-start justify-center">
                        <h2 className="m-0 text-xl text-primary">
                          {post.name}
                        </h2>
                        <h6 className="text-secondary">Cleiton Moreira</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default BodyPortfolioPost
