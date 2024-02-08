import Image from 'next/image'
import React from 'react'

interface SoftwareIconProps {
  title: string
  image: string
}

function SoftwareIcon({ title = '', image = '' }: SoftwareIconProps) {
  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-secondary p-3 shadow-software duration-300 hover:scale-110">
      <Image
        src={image}
        alt={`Logo_${title}`}
        height={35}
        width={35}
        className="sm-1:w-8"
      />
      <p className="cursor-default text-xl sm-1:text-base">{title}</p>
    </div>
  )
}

export default SoftwareIcon
