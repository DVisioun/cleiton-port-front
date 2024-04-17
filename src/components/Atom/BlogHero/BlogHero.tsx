import { readBase64ToFile } from '@/utils/base64-converter'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface BlogHeroProps {
  imageHeader: string
}

function BlogHero({ imageHeader }: BlogHeroProps) {
  const [imageCover, setImageCover] = useState<string>()

  useEffect(() => {
    const handleFetchImages = async () => {
      const imageCoverAux = await readBase64ToFile(imageHeader)
      const previewURL = URL.createObjectURL(imageCoverAux)
      if (previewURL) setImageCover(previewURL)
    }
    handleFetchImages()
  }, [])

  return (
    <div className="mx-20 mt-24 h-2/4 max-h-[350px] overflow-hidden bg-secondary sm-1:mx-0 sm-1:mt-0">
      {imageCover ? (
        <Image
          src={imageCover}
          alt="Image Header Blog"
          aria-label="Image Header Blog"
          fill={true}
          className="!relative h-full w-full"
        />
      ) : null}
    </div>
  )
}

export default BlogHero
