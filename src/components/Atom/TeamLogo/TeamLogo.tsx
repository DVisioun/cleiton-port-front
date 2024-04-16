'use client'

import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/hooks/ThemeContext'

export const TeamLogo = () => {
  const { theme, setTheme } = useContext(ThemeContext) || {
    theme: 'light',
    setTheme: () => {},
  }
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(theme === 'dark')
  }, [theme])

  return (
    <div className="flex gap-3 sm-0.2:flex-col sm-0.2:items-center sm-1:justify-center">
      <span className="text-lg sm-1:text-base">© 2024 - Developed by </span>
      {darkMode ? (
        <Image
          src="/images/dvision-logo-white.svg"
          alt=""
          width={120}
          height={120}
          className="max-w-28"
        />
      ) : (
        <Image
          src="/images/dvision-logo-black.svg"
          alt=""
          width={120}
          height={120}
          className="max-w-28"
        />
      )}
    </div>
  )
}
