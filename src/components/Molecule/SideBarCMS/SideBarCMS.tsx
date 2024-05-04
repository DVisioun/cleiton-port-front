'use client'

import Link from 'next/link'
import { Menu, Sidebar } from 'semantic-ui-react'

export const SideBarCMS = () => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      className="!w-56 !bg-black"
    >
      <h1 className="py-4 font-alt text-6xl text-white">Menu</h1>
      <ul className="flex flex-col">
        <Link href="/cms/portfolio-projects">
          <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
            Portfolio Projects
          </li>
        </Link>
        <Link href="/cms/blog-post">
          <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
            Blog Posts
          </li>
        </Link>
        <Link href="/cms/about">
          <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
            About Information
          </li>
        </Link>
        <Link href="/cms/home-images">
          <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
            Home Images
          </li>
        </Link>
      </ul>
    </Sidebar>
  )
}
