'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  Icon,
  Menu,
  MenuItem,
  Sidebar,
} from 'semantic-ui-react'

export const SideBarCMS = () => {
  const [activeItem, setActiveItem] = useState(0)

  const handleClick = (index: number) => {
    const newIndex = activeItem === index ? -1 : index
    setActiveItem(newIndex)
  }

  const portfolioMenu = (
    <ul className="flex flex-col">
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-secondary">
        Create a Project
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        See All Projects
      </li>
    </ul>
  )

  const postMenu = (
    <ul className="flex flex-col">
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Create a Blog Post
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        See All Blog Posts
      </li>
    </ul>
  )

  const aboutMenu = (
    <ul className="flex flex-col">
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Description
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Skills
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Softwares
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Experience
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Education
      </li>
    </ul>
  )

  const labelsMenu = (
    <ul className="flex flex-col">
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        Create a Label
      </li>
      <li className="cursor-pointer py-2 text-base text-white duration-300 hover:bg-gray-400">
        See All Labels
      </li>
    </ul>
  )

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
      <Accordion
        className="!flex !flex-col !gap-4 !border-none !bg-secondary !shadow-none"
        as={Menu}
        vertical
      >
        <MenuItem className="!p-0">
          <AccordionTitle
            active={activeItem === 0}
            content="Portfolio Project"
            className="!text-lg !font-medium !text-white"
            index={0}
            onClick={() => handleClick(0)}
          />
          <AccordionContent active={activeItem === 0} content={portfolioMenu} />
        </MenuItem>

        <MenuItem className="!p-0">
          <AccordionTitle
            active={activeItem === 1}
            content="Blog Post"
            className="!text-lg !font-medium !text-white"
            index={1}
            onClick={() => handleClick(1)}
          />
          <AccordionContent active={activeItem === 1} content={postMenu} />
        </MenuItem>

        <MenuItem className="!p-0">
          <AccordionTitle
            active={activeItem === 2}
            content="About Me"
            className="!text-lg !font-medium !text-white"
            index={2}
            onClick={() => handleClick(2)}
          />
          <AccordionContent active={activeItem === 2} content={aboutMenu} />
        </MenuItem>

        <MenuItem className="!p-0">
          <AccordionTitle
            active={activeItem === 3}
            content="Text Labels"
            className="!text-lg !font-medium !text-white"
            index={3}
            onClick={() => handleClick(3)}
          />
          <AccordionContent active={activeItem === 3} content={labelsMenu} />
        </MenuItem>
      </Accordion>
    </Sidebar>
  )
}
