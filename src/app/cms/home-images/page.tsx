'use client'

import { TableBlogPost } from '@/components/Atom/TableBlogPost/TableBlogPost'
import { TableHomeImages } from '@/components/Atom/TableHomeImages/TableHomeImages'
import PostEdit from '@/components/Molecule/PostEdit/PostEdit'
import { readFileToBase64 } from '@/utils/base64-converter'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Divider, Header, Segment, Button, Input } from 'semantic-ui-react'

function HomeImagePage() {
  const [imagePreview, setImagePreview] = useState<string>('')
  const { register, reset, handleSubmit, control, setValue, watch } = useForm()

  const onSubmit = async (data) => {
    const imgConverted = await readFileToBase64(data.image[0])
  }

  const watchImage = watch('image')

  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const previewURL = URL.createObjectURL(watchImage[0])
      if (previewURL) setImagePreview(previewURL)
    }
  }, [watchImage])

  return (
    <div className="w-full">
      <Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Home Images
            </Header>
          </Divider>
          <form className="flex flex-col items-start">
            <label
              htmlFor="title"
              className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
            >
              Upload New Image
            </label>
            <div className="flex items-center gap-16">
              <Input placeholder="">
                <input
                  id="file"
                  type="file"
                  {...register('image', { required: 'Required field!' })}
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
          </form>
          <div className="pt-8">
            <TableHomeImages />
          </div>
        </Segment>
      </Segment>
    </div>
  )
}

export default HomeImagePage
