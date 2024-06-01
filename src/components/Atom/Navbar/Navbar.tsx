'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'

interface NavBarProps {
  lang: string
}

function Navbar({ lang }: NavBarProps) {
  return (
    <nav className="ml-10 flex gap-5">
      <Dropdown
        icon="list"
        simple
        className="!z-20 pb-2 text-3xl sm:!hidden sm-1:!flex"
      >
        <DropdownMenu className="!w-28 sm-1:!-translate-x-20">
          <DropdownItem>
            <Link
              href={`/home`}
              className="text-lg text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline sm-0.1:text-sm sm-1:text-base"
            >
              Home
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href={`/about`}
              className="text-lg text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm sm-1:text-base"
            >
              About
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href={`/portfolio`}
              className="text-lg text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm sm-1:text-base"
            >
              Portfolio
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href={`/blog`}
              className="text-lg text-primary duration-300 hover:text-hover hover:underline sm-0.1:text-sm sm-1:text-base"
            >
              Blog
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Link
        href={`/home`}
        className="text-xl text-primary duration-300 hover:text-hover hover:underline active:text-hover active:underline sm-1:hidden"
      >
        Home
      </Link>
      <Link
        href={`/about`}
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        About
      </Link>
      <Link
        href={`/portfolio`}
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        Portfolio
      </Link>
      <Link
        href={`/blog`}
        className="text-xl text-primary duration-300 hover:text-hover hover:underline sm-1:hidden"
      >
        Blog
      </Link>
    </nav>
  )
}

export default Navbar
