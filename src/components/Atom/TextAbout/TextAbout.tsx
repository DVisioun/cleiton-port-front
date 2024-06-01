import { getLabel } from '@/utils/getLabel'
import React from 'react'

function TextAbout({ params }: any) {
  const label = getLabel('about-me', params.lang)

  return (
    <div className="px-3 py-14 sm-1:py-8">
      <p className="text-justify text-lg leading-relaxed 2xl:text-xl sm-1:px-2 sm-1:text-base">
        {label}
      </p>
    </div>
  )
}

export default TextAbout
