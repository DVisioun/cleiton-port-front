'use client'

import { TableBlogPost } from '@/components/Atom/TableBlogPost/TableBlogPost'
import PostEdit from '@/components/Molecule/PostEdit/PostEdit'
import { useState } from 'react'
import { Divider, Header, Segment, Button } from 'semantic-ui-react'

function BlogPostPage() {
  const [addPost, setAddPost] = useState(false)
  const [editPost, setEditPost] = useState(false)
  const [postId, setPostId] = useState<string>('')

  return (
    <div className="w-full">
      <Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary sm-1:!text-5xl"
            >
              Blog Post
            </Header>
          </Divider>

          {!addPost && (
            <Button
              content="Create a New Blog Post"
              primary
              onClick={() => setAddPost(!addPost)}
            />
          )}
          {addPost && (
            <Button
              content="View All Blog Posts"
              secondary
              onClick={() => {
                setEditPost(false)
                setAddPost(!addPost)
              }}
            />
          )}

          {!addPost && (
            <TableBlogPost
              setPostId={setPostId}
              setEditPost={setEditPost}
              setAddPost={setAddPost}
            />
          )}
          {addPost && (
            <PostEdit
              editPost={editPost}
              setEditPost={setEditPost}
              setAddPost={setAddPost}
              postId={postId}
            />
          )}
        </Segment>
      </Segment>
    </div>
  )
}

export default BlogPostPage
