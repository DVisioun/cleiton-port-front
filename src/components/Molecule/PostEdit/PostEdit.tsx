'use client'
import React, { useRef } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Editor } from '@tinymce/tinymce-react'
import { useForm } from 'react-hook-form'
import { API } from '@/@types/api'
import { useAtom } from 'jotai'
import { blogPostAtom } from '@/states/blogPostAtom'
import { notifyFailure } from '@/utils/toastify'
import { addBlogPost } from '@/api/BlogPost/add-blog-post'
import { Editor as TinyMCEEditor } from 'tinymce'

const PostEdit = () => {
  const [blogPost, setBlogPost] = useAtom(blogPostAtom)
  const editorRef = useRef<TinyMCEEditor | null>(null)
  const { register, reset, handleSubmit } = useForm<API.BlogPostCreateProps>()

  // const log = () => {
  //   if (editorRef.current) {
  //     const currentValue = editorRef.current.getContent()
  //     console.log(currentValue)
  //   }
  // }

  const onSubmit = async (data: API.BlogPostCreateProps) => {
    const editorContent = editorRef.current?.getContent() || ''

    if (data) {
      const requestBlogPostObject = {
        name: data.name,
        content: editorContent,
        order: data.order,
        flag_home: data.flag_home,
        image: data.images,
      }

      const response: API.CreateAndUpdateBlogPostResponseProps =
        await addBlogPost(requestBlogPostObject)
      if (response && response.success) {
        setBlogPost([...blogPost, response.data])
        reset()
      }
    } else {
      notifyFailure(data)
    }
    console.log(data)
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
            <input type="text" {...register('name')} />
          </Input>
        </label>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Content
          <Input placeholder="Enter content your post...">
            <Editor
              {...register('content')}
              apiKey="tfmq1j07cvajzw1tp50gyiyjsse6d5waafutvxi43r6137ro"
              initialValue="<p>Enter content your post...</p>"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 300,
                width: '100%',
                menubar: false,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'code',
                  'help',
                  'wordcount',
                ],
                toolbar:
                  'undo redo | blocks | ' +
                  ' image ' +
                  ' anchor ' +
                  ' Table ' +
                  ' media ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                images_file_types: 'jpg,svg,webp,png,jpeg,ico',
              }}
            />
          </Input>
        </label>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Order
          <Input placeholder="">
            <input
              type="number"
              {...register('order')}
              placeholder="Enter order your post..."
            />
          </Input>
        </label>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Flag Home
          <Input placeholder="">
            <input
              {...register('flag_home')}
              type="text"
              placeholder="Enter the flag your post..."
            />
          </Input>
        </label>
        <label
          htmlFor="title"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Images
          <Input placeholder="">
            <input
              type="file"
              placeholder="Enter images your post..."
              {...register('image')}
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
