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
              className="sm-0.1:text-sm text-xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="sm-0.1:text-sm text-xl text-primary duration-300 hover:text-hover hover:underline"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="sm-0.1:text-sm text-xl text-primary duration-300 hover:text-hover hover:underline"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="sm-0.1:text-sm text-xl text-primary duration-300 hover:text-hover hover:underline"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
      <Link
        href="/home"
        className="sm-1:hidden text-xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="sm-1:hidden text-xl text-primary duration-300 hover:text-hover hover:underline"
      >
        About
      </Link>
      <Link
        href="/portfolio"
        className="sm-1:hidden text-xl text-primary duration-300 hover:text-hover hover:underline"
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className="sm-1:hidden text-xl text-primary duration-300 hover:text-hover hover:underline"
      >
        Blog
      </Link>
    </nav>
  )
}

export default Navbar
