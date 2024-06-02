'use client'

import dayjs from 'dayjs'
import { fetchBlogPosts } from '@/api/BlogPost/fetch-blog-post'
import BlogHero from '@/components/Atom/BlogHero/BlogHero'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'
import { blogPostAtom } from '@/states/blogPostAtom'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'

interface BlogPostProps {
  id: string
}

function BlogPost({ id }: BlogPostProps) {
  const [blogPost, setBlogPost] = useAtom(blogPostAtom)
  const [loading, setLoading] = useState(true)

  const handleBlogPostsFetch = async () => {
    try {
      if (blogPost.length > 0) return
      const response = await fetchBlogPosts()
      if (response) {
        setBlogPost(response.data)
      }
    } catch (error) {
      notifyFailure(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleFilteredPosts = () => {
    const filteredPosts = blogPost?.filter((post) => post.id === id)
    setBlogPost(filteredPosts)
  }

  useEffect(() => {
    handleBlogPostsFetch()
    handleFilteredPosts()
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      {blogPost?.map((item) => {
        return (
          <div key={item.content} className="sm-1:mt-16">
            <BlogHero imageHeader={item.image} />
            <div className="mt-10 px-40 pb-10 sm-0:px-7">
              <h2 className="text-5xl sm-1:text-3xl">{item.name}</h2>
              <p>
                <b>Cleiton Moreira</b> -{' '}
                <span>{dayjs(item.created_at).format('DD/MM/YYYY')}</span>
              </p>
              <div className="mt-5 h-[2px] w-[100%] bg-[var(--gold)]"></div>
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
                className="mt-10"
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BlogPost
