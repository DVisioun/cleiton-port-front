'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import BlackLogo from '../../../../public/images/black_logo.svg'
import WhiteLogo from '../../../../public/images/white_logo.svg'
import { ThemeContext } from '@/hooks/ThemeContext'
import Navbar from '@/components/Atom/Navbar/Navbar'
import NavbarSocial from '@/components/Atom/NavbarSocial/NavbarSocial'

interface HeaderProps {
  bgColor: string
}

export default function Header({ bgColor }: HeaderProps) {
  const { theme, setTheme } = useContext(ThemeContext)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(theme === 'dark')
  }, [theme])

  return (
    <div
      className={`sm:fixed top-0 z-10 flex h-24 w-full items-center justify-between sm-0:px-4 sm-1:justify-center ${bgColor} px-20 text-primary shadow-header duration-300 hover:bg-primary`}
    >
      <div className="flex items-center sm-1:gap-20">
        {!darkMode && (
          <Image src={BlackLogo} alt="Logo" height={64} width={55} />
        )}
        {darkMode && (
          <Image src={WhiteLogo} alt="Logo" height={64} width={55} />
        )}
        <Navbar />
      </div>
      <NavbarSocial />
    </div>
  )
}
