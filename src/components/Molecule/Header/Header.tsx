'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import BlackLogo from '../../../../public/images/black_logo.svg'
import WhiteLogo from '../../../../public/images/white_logo.svg'
import { ThemeContext } from '@/hooks/ThemeContext'
import Navbar from '@/components/Atom/Navbar/Navbar'
import NavbarSocial from '@/components/Atom/NavbarSocial/NavbarSocial'
import { Locale } from '@/config/i18n.config'

interface HeaderProps {
  bgColor: string
  lang: Locale
}

export default function Header({ lang, bgColor }: HeaderProps) {
  const { theme } = useContext(ThemeContext) || {
    theme: 'light',
    setTheme: () => {},
  }
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(theme === 'dark')
  }, [theme])

  return (
    <div
      className={`top-0 z-10 flex h-24 w-full items-center justify-between sm:fixed sm-0:px-4 sm-1:justify-center ${bgColor} px-20 text-primary shadow-header duration-300 hover:bg-primary`}
    >
      <div className="flex items-center sm-1:gap-20">
        {!darkMode && (
          <Image src={BlackLogo} alt="Logo" height={64} width={55} />
        )}
        {darkMode && (
          <Image src={WhiteLogo} alt="Logo" height={64} width={55} />
        )}
        <Navbar lang={lang} />
      </div>
      <NavbarSocial />
    </div>
  )
}
