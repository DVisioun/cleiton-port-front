import { getLabel } from '@/utils/getLabel'

function TextAbout({ language }: { language: string }) {
  return (
    <div className="px-3 py-14 sm-1:py-8">
      <p className="text-justify text-lg leading-relaxed 2xl:text-xl sm-1:px-2 sm-1:text-base">
        {getLabel('about-me', language)}
      </p>
    </div>
  )
}

export default TextAbout
