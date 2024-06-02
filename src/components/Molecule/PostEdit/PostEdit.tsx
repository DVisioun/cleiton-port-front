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
import { readBase64ToFile, readFileToBase64 } from '@/utils/base64-converter'
import Image from 'next/image'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'

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
  const [imagePreview, setImagePreview] = useState<string>('')

  const {
    register,
    reset,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<API.BlogPostCreateFormProps>()

  const watchImage = watch('image')

  // Completa os dados do formulário caso o usuário queira editar o post
  const fillBlogPostData = async () => {
    const blogPostData = blogPost.find((item) => item.id === postId)
    if (blogPostData) {
      const index = blogPost.findIndex((item) => item.id === postId)
      setBlogIndex(index)

      const imageConverted = await readBase64ToFile(blogPostData.image)
      const previewURL = URL.createObjectURL(imageConverted)
      if (previewURL) setImagePreview(previewURL)

      setValue('title', blogPostData.title)
      setValue('description', blogPostData.description)
      setValue('order', blogPostData.order)
      setValue('name', blogPostData.name)
    }
  }

  const validateFile = (file: File) => {
    const maxFileSizeInBytes = 3 * 1024 * 1024 // 3 MB
    if (file.size > maxFileSizeInBytes) {
      notifyFailure('Maximum size exceeded (3 MB)')
      setImagePreview('')
      setValue('image', null)
      return false
    }
    return true
  }

  const onSubmit = async (data: API.BlogPostCreateFormProps) => {
    const currentDate = new Date()
    let imageConverter = ''

    if (data.image && data.image[0] instanceof File) {
      const file = data.image[0]
      if (validateFile(file)) {
        imageConverter = await readFileToBase64(file)
      } else {
        return
      }
    } else if (editPost && blogPost[blogIndex].image) {
      imageConverter = blogPost[blogIndex].image
    }

    if (editPost) {
      const requestBlogPostEditObject = {
        id: data.id,
        name: data.name,
        image: imageConverter,
        content: data.content,
        created_at: currentDate,
      }

      const response: API.CreateAndUpdateBlogPostResponseProps =
        await editBlogPost(requestBlogPostEditObject, postId)
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
        image: imageConverter,
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

  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const previewURL = URL.createObjectURL(watchImage[0])
      if (previewURL) setImagePreview(previewURL)
    }
  }, [watchImage])

  return (
    <>
      <LoadingScreen loading={isSubmitting} />
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
            Cover Image
          </label>
          <div className="flex items-center gap-16">
            <Input placeholder="">
              <input
                id="file"
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register('image')}
              />
            </Input>
            {imagePreview ? (
              <Image
                width={320}
                height={200}
                className="h-60 w-60 rounded-full"
                alt=""
                src={imagePreview}
              />
            ) : null}
          </div>
          <Button
            type="submit"
            content="Gravar"
            primary
            className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
          />
        </form>
      </div>
    </>
  )
}

export default PostEdit
