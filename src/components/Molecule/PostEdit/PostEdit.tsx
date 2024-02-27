'use client'

import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { Button, Input } from 'semantic-ui-react'
import { API } from '@/@types/api'
import { blogPostAtom } from '@/states/blogPostAtom'
import { addBlogPost } from '@/api/BlogPost/add-blog-post'
import { BlogTextEditor } from '@/components/Atom/BlogTextEditor/BlogTextEditor'
import { notifySuccess, notifyFailure } from '@/utils/toastify'
import { readFileToBase64 } from '@/utils/base64-converter'

const PostEdit = () => {
  const [blogPost, setBlogPost] = useAtom(blogPostAtom)
  const { register, reset, handleSubmit, control } =
    useForm<API.BlogPostCreateFormProps>()

  const onSubmit = async (data: API.BlogPostCreateFormProps) => {
    const file = data.image[0]
    const imageConverted = await readFileToBase64(file)

    const currentDate = new Date()

    const requestBlogPostObject = {
      name: data.name,
      content: data.content,
      order: data.order,
      flag_home: data.flag_home,
      image: imageConverted,
      created_at: currentDate,
    }

    const response: API.CreateAndUpdateBlogPostResponseProps =
      await addBlogPost(requestBlogPostObject)
    console.log(response)
    if (response && response.success) {
      setBlogPost([...blogPost, response.data])
      notifySuccess('Post created successfully')
      reset()
    } else {
      notifyFailure('Failed to create post, please try again..')
    }
  }

  return (
    <div>
      <form
        action=""
        className="flex flex-col items-start justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
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
          defaultValue="<p>Enter content your post...</p>"
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
          <Input placeholder="">
            <input
              type="file"
              placeholder="Enter image of your post..."
              {...register('image', { required: 'Required field!' })}
            />
          </Input>
        </label>
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
