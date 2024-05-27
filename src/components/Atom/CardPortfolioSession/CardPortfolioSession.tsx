import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Portfolio } from '@/@types/project'
import { readBase64ToFile } from '@/utils/base64-converter'

interface CardPortfolioSessionProps {
  project: Portfolio.PortfolioProjectSchema
}

const CardPortfolioSession = ({ project }: CardPortfolioSessionProps) => {
  const [imagePreview, setImagePreview] = useState<string>('')

  const handlePreviewImg = async () => {
    const imageConverted = await readBase64ToFile(project.image)
    const previewURL = URL.createObjectURL(imageConverted)
    if (previewURL) setImagePreview(previewURL)
  }

  const exampleText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis labore corrupti quae incidunt obcaecati fuga sit, vitae impeditoptio ratione natus recusandae? Nesciunt aut neque veniam! Accusamus,et harum.'

  useEffect(() => {
    handlePreviewImg()
  }, [project.image])

  return (
    <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-secondary p-4 shadow-card duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 sm:min-w-[45rem] sm-cardPortfolio-0:flex-row-reverse sm-cardPortfolio-0:items-start sm-cardPortfolio-0:pl-6 sm-cardPortfolio-0:pr-0">
      <div className="mb-4 sm:mb-0 sm:mr-6">
        {imagePreview ? (
          <Image
            alt={project.name}
            aria-label={project.name}
            width={500}
            height={500}
            src={imagePreview}
            className="h-52 w-52 object-contain"
          />
        ) : null}
      </div>
      <p className="text-xl font-medium sm-cardPortfolio-0:leading-[5rem]">
        {project.name}
        <span className="hidden max-w-[30rem] px-4 text-left text-sm font-normal leading-normal sm-cardPortfolio-0:block">
          {project.description.length > 200
            ? project.description.substring(0, 200) + '...'
            : project.description}
        </span>
      </p>
    </div>
  )
}

export default CardPortfolioSession
