"use client";

import { useEffect } from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import CardBlog from "@/components/Atom/CardBlog/CardBlog";
import Title from "@/components/Atom/Title/Title";
import { fetchBlogPosts } from "@/api/BlogPost/fetch-blog-post";
import { blogPostAtom } from "@/states/blogPostAtom";
import { useAtom } from "jotai";
import { Locale } from '@/config/i18n.config'

interface BlogProps {
  lang: Locale
}

function Blog({ lang }: BlogProps) {
  const [blogPosts, setBlogPosts] = useAtom(blogPostAtom);
  const handleBlogPostsFetch = async () => {
    const response = await fetchBlogPosts();
    if (response) {
      setBlogPosts(response.data);
    }
  };

  useEffect(() => {
    handleBlogPostsFetch();
  }, []);

  return (
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
                <a
                  href={`/${lang}/post/${item.id}`}
                  className="text-primary no-underline hover:text-primary"
                >
                  <CardBlog data={item} />
                </a>
              </GridColumn>
            );
          })}
        </GridRow>
      </Grid>
    </div>
  );
}

export default Blog;
