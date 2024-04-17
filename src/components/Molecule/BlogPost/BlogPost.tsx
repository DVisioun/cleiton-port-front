"use client";

import { API } from "@/@types/api";
import { fetchBlogPosts } from "@/api/BlogPost/fetch-blog-post";
import BlogHero from "@/components/Atom/BlogHero/BlogHero";
import React, { useEffect, useState } from "react";

interface BlogPostProps {
  id: string;
}

function BlogPost({ id }: BlogPostProps) {
  const [blogPost, setBlogPost] = useState<API.BlogPostSchema[]>();

  const handleBlogPostsFetch = async () => {
    const response = await fetchBlogPosts();
    if (response) {
      setBlogPost(response.data);
    }
  };

  useEffect(() => {
    handleBlogPostsFetch();
    handleFilteredPosts();
  }, []);

  const handleFilteredPosts = () => {
    const filteredPosts = blogPost?.filter((post) => post.id === id);
    setBlogPost(filteredPosts);
  };

  console.log(blogPost);
  return (
    <>
      {blogPost?.map((item) => {
        return (
          <div key={item.content}>
            <BlogHero imageHeader={item.image} />
            <div className="mt-10 px-40 pb-10 sm-0:px-7">
              <h2 className="text-5xl sm-1:text-3xl">{item.name}</h2>
              <p>
                <b>Cleiton Moreira</b> - <span>03/02/2024</span>
              </p>
              <div className="mt-5 h-[2px] w-[100%] bg-[var(--gold)]"></div>
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
                className="mt-10"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BlogPost;
