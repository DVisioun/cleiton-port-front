'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleHamburgerMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="ml-10 flex gap-5">
      <div className="sm:hidden">
        <div>
          <FontAwesomeIcon
            className="text-4xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline"
            icon={faBars}
            onClick={() => handleToggleHamburgerMenu()}
          />
          <nav
            className={`w-full flex-col gap-2 ${isOpen ? 'flex' : 'hidden'}`}
          >
            <Link
              href="/"
              className="text-xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline sm-0.1:text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
      <Link
        href="/home"
        className="text-xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline sm-1:hidden"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        About
      </Link>
      <Link
        href="/portfolio"
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        Blog
      </Link>
    </nav>
  )
}

export default Navbar
