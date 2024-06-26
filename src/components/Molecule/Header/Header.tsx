'use client'
import Image from 'next/image'
import React from 'react'
import BlackLogo from '../../../../public/images/black_logo.svg'
import WhiteLogo from '../../../../public/images/white_logo.svg'
import { useTheme } from '@/hooks/ThemeContext'
import Navbar from '@/components/Atom/Navbar/Navbar'
import NavbarSocial from '@/components/Atom/NavbarSocial/NavbarSocial'

interface HeaderProps {
  bgColor: string
}

export default function Header({ bgColor }: HeaderProps) {
  const { theme } = useTheme()

  return (
    <div
      className={`absolute top-0 z-10 flex h-24 w-full items-center justify-between sm-1:h-16 ${bgColor} px-20 text-primary shadow-header duration-300 hover:bg-primary sm-0:px-8`}
    >
      <div className="flex items-center sm-1:w-full sm-1:justify-between">
        {theme === 'dark' ? (
          <Image
            src={WhiteLogo}
            alt="Logo"
            className="sm-1:h-10 sm-1:w-10"
            height={64}
            width={55}
          />
        ) : (
          <Image
            src={BlackLogo}
            alt="Logo"
            className="sm-1:h-10 sm-1:w-10"
            height={64}
            width={55}
          />
        )}

        <Navbar />
      </div>
      <NavbarSocial />
    </div>
  )
}
