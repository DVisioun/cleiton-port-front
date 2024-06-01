'use client'

import { useEffect, useState } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CardBlog from '@/components/Atom/CardBlog/CardBlog'
import Title from '@/components/Atom/Title/Title'
import { fetchBlogPosts } from '@/api/BlogPost/fetch-blog-post'
import { blogPostAtom } from '@/states/blogPostAtom'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'

function Blog() {
  const [loading, setLoading] = useState(true)
  const [blogPosts, setBlogPosts] = useAtom(blogPostAtom)
  const handleBlogPostsFetch = async () => {
    const response = await fetchBlogPosts()
    if (response) {
      setBlogPosts(response.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleBlogPostsFetch()
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      <div className="min-h-[calc(100%-90px)] px-[80px] pb-20 pt-40 sm-1:px-[20px] sm-1:pt-10">
        <Title title="Blog" />
        <Grid className="!my-10 px-0 lg:!mx-auto">
          <GridRow columns={2} className="!px-0 sm-1:!gap-10 md-1:!gap-10">
            {blogPosts.map((item) => {
              return (
                <GridColumn
                  key={item.id}
                  mobile={16}
                  computer={8}
                  tablet={16}
                  largeScreen={8}
                  className="!flex !px-0 !py-4"
                >
                  <Link
                    href={`/post/${item.id}`}
                    className="text-primary no-underline hover:text-primary"
                  >
                    <CardBlog data={item} />
                  </Link>
                </GridColumn>
              )
            })}
          </GridRow>
        </Grid>
      </div>
    </>
  )
}

export default Blog
