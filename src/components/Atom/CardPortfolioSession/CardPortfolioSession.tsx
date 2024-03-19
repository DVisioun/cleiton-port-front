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

  useEffect(() => {
    handlePreviewImg()
  }, [project.image])

  return (
    <div className="relative flex w-[90%] cursor-pointer flex-col items-center justify-center rounded-2xl bg-secondary p-4 shadow-card duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 sm-cardPortfolio-0:w-[39rem] sm-cardPortfolio-0:flex-row-reverse sm-cardPortfolio-0:items-start sm-cardPortfolio-0:pl-6 sm-cardPortfolio-0:pr-0">
      {imagePreview ? (
        <Image
          alt="Char One"
          aria-label="Char One"
          width={345}
          height={358}
          src={imagePreview}
          className="h-60 w-60 object-cover object-center"
        />
      ) : null}
      <p className="text-xl font-medium sm-cardPortfolio-0:leading-[5rem]">
        {project.name}
        <span className="hidden text-sm font-normal sm-cardPortfolio-0:block">
          {project.description}
        </span>
      </p>
    </div>
  )
}

export default CardPortfolioSession
