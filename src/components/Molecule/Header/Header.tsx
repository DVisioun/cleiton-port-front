'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import BlackLogo from '../../../../public/images/black_logo.svg';
import WhiteLogo from '../../../../public/images/white_logo.svg';
import { ThemeContext } from '@/hooks/ThemeContext';
import Navbar from '@/components/Atom/Navbar/Navbar';
import NavbarSocial from '@/components/Atom/NavbarSocial/NavbarSocial';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(theme === "dark" ? true : false);
  },[theme]);

  return (
    <div className='w-full h-24 bg-opacity hover:bg-primary absolute top-0 px-20 flex items-center justify-between shadow-header'>
        <div className='flex items-center'>
          {!darkMode && <Image src={BlackLogo} alt="Logo" height={64} width={55} />}
          {darkMode && <Image src={WhiteLogo} alt="Logo" height={64} width={55} />}
          <Navbar />
        </div>
        <div className='flex items-center'>
          <NavbarSocial />
        </div>
    </div>
  )
}
