import Image from 'next/image'
import React from 'react'

function BlogHero() {
  return (
    <div className="mx-20 mt-24 h-2/4 bg-secondary">
      <Image
        src="/images/blog/hero.png"
        alt="hero_blog"
        fill={true}
        className="!relative h-full w-full"
      />
    </div>
  )
}

export default BlogHero
