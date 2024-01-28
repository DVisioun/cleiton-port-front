import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex gap-5 ml-10'>
        <Link href="/" className='text-xl text-primary hover:text-hover hover:underline active:text-hover active:underline'>Home</Link>
        <Link href="/about" className='text-xl text-primary hover:text-hover hover:underline'>About</Link>
        <Link href="/portfolio" className='text-xl text-primary hover:text-hover hover:underline'>Portfolio</Link>
        <Link href="/blog" className='text-xl text-primary hover:text-hover hover:underline'>Blog</Link>
    </nav>
  )
}

export default Navbar