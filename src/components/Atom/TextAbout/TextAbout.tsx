import React from 'react'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionaries-server'

function TextAbout({ params }: any) {
  const t = getDictionaryServerOnly(params.lang)

  return (
    <div className="py-14 sm-1:py-8">
      <p className="pr-8 text-justify text-lg leading-relaxed 2xl:text-xl sm-1:px-2 sm-1:text-base">
        {t.about.texto_sobre}
      </p>
    </div>
  )
}

export default TextAbout