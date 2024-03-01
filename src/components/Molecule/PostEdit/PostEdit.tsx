'use client'

import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { Button, Input } from 'semantic-ui-react'
import { API } from '@/@types/api'
import { blogPostAtom } from '@/states/blogPostAtom'
import { addBlogPost } from '@/api/BlogPost/add-blog-post'
import { BlogTextEditor } from '@/components/Atom/BlogTextEditor/BlogTextEditor'
import { notifySuccess, notifyFailure } from '@/utils/toastify'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { editBlogPost } from '@/api/BlogPost/edit-blog-post'
import { fetchBlogPosts } from '@/api/BlogPost/fetch-blog-post'

interface PostEditProps {
  editPost: boolean
  setEditPost: Dispatch<SetStateAction<boolean>>
  setAddPost: Dispatch<SetStateAction<boolean>>
  postId: string
}

const PostEdit = ({
  editPost,
  setEditPost,
  setAddPost,
  postId,
}: PostEditProps) => {
  const [blogPost, setBlogPost] = useAtom(blogPostAtom)
  const [blogIndex, setBlogIndex] = useState<number>(0)

  const { register, reset, handleSubmit, control, setValue } =
    useForm<API.BlogPostCreateFormProps>()

  // completa os dados do formulário caso o usuário queira editar o post
  const fillBlogPostData = async () => {
    const blogPostData = blogPost.find((item) => item.id === postId)
    if (blogPostData) {
      const index = blogPost.findIndex((item) => item.id === postId)
      setBlogIndex(index)

      setValue('title', blogPostData.title)
      setValue('description', blogPostData.description)

      setValue('order', blogPostData.order)
      setValue('name', blogPostData.name)
    }
  }

  const onSubmit = async (data: API.BlogPostCreateFormProps) => {
    const currentDate = new Date()

    if (editPost) {
      const requestBlogPostEditObject = {
        id: data.id,
        name: data.name,
        content: data.content,
        created_at: currentDate,
      }

      const response: API.CreateAndUpdateBlogPostResponseProps =
        await editBlogPost(requestBlogPostEditObject)
      if (response && response.success) {
        await fetchBlogPosts()
        notifySuccess('Post edited successfully')
        reset()
        setEditPost(false)
        setAddPost(false)
      } else {
        notifyFailure('Failed to edit post, please try again..')
      }
    } else {
      const requestBlogPostCreateObject = {
        name: data.name,
        content: data.content,
        created_at: currentDate,
      }

      const response: API.CreateAndUpdateBlogPostResponseProps =
        await addBlogPost(requestBlogPostCreateObject)
      if (response && response.success) {
        setBlogPost([...blogPost, response.data])
        notifySuccess('Post created successfully')
        reset()
        setAddPost(false)
      } else {
        notifyFailure('Failed to create post, please try again..')
      }
    }
  }

  useEffect(() => {
    if (editPost) {
      fillBlogPostData()
    } else {
      reset()
    }
  }, [editPost])

  return (
    <div>
      <form
        className="flex flex-col items-start justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="title"
          className="mt-4 flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Title
          <Input placeholder="Enter title your post...">
            <input
              type="text"
              {...register('name', { required: 'Required field!' })}
            />
          </Input>
        </label>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Content
        </label>
        <BlogTextEditor
          name="content"
          defaultValue={`${!editPost ? '<p>Enter content your post...</p>' : blogPost[blogIndex].content}`}
          control={control}
        />
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Order
          <Input placeholder="">
            <input
              type="number"
              {...register('order', { required: 'Required field!' })}
              placeholder="Enter order of your post..."
            />
          </Input>
        </label>
        <fieldset className="flex gap-2">
          <input {...register('flag_home')} type="checkbox" />
          <label
            htmlFor="title"
            className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
          >
            Flag Home
          </label>
        </fieldset>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Image
        </label>
        <div>
          <Input placeholder="">
            <input
              type="file"
              placeholder="Enter image of your post..."
              {...register('image', { required: 'Required field!' })}
              draggable
            />
          </Input>
        </div>
        <Button
          type="submit"
          content="Gravar"
          primary
          className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
        />
      </form>
    </div>
  )
}

export default PostEdit
