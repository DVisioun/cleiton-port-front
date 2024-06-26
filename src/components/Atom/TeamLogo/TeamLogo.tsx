'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/hooks/ThemeContext'

export const TeamLogo = () => {
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center gap-3 pb-6 sm-0.2:flex-col sm-0.2:items-center sm-1:justify-center">
      <span className="text-lg sm-0:!text-xs sm-1:text-base">
        © 2024 - Developed by{' '}
      </span>
      {theme === 'dark' ? (
        <Image
          src="/images/dvision-logo-white.svg"
          alt=""
          width={120}
          height={120}
          className="max-w-28 sm-0:w-20"
        />
      ) : (
        <Image
          src="/images/dvision-logo-black.svg"
          alt=""
          width={120}
          height={120}
          className="max-w-28 sm-0:w-20"
        />
      )}
    </div>
  )
}
