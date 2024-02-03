import Image from 'next/image'
import React from 'react'

function BlogHero() {
  return (
    <div className='bg-secondary h-2/4 mx-20 mt-24'>
        <Image src="/images/blog/hero.png" alt='hero_blog' fill={true} className='w-full h-full !relative' />
    </div>
  )
}

export default BlogHero