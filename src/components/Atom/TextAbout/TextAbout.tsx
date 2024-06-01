import { getLabel } from '@/utils/getLabel'
import React, { useEffect, useState } from 'react'

function TextAbout({ language }: { language: string }) {
  const [label, setLabel] = useState('')

  useEffect(() => {
    setLabel(getLabel('about-me', language))
    console.log(getLabel('about-me', language))
  }, [language])

  return (
    <div className="px-3 py-14 sm-1:py-8">
      <p className="text-justify text-lg leading-relaxed 2xl:text-xl sm-1:px-2 sm-1:text-base">
        {label}
      </p>
    </div>
  )
}

export default TextAbout
