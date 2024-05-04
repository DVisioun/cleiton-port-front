'use client'

import { addImage } from '@/api/HomeImages/add-image'
import { fetchHomeImages } from '@/api/HomeImages/fetch-images'
import { TableHomeImages } from '@/components/Atom/TableHomeImages/TableHomeImages'
import { homeImageAtom } from '@/states/homeImagesAtom'
import { readFileToBase64 } from '@/utils/base64-converter'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Divider, Header, Segment, Input, Button } from 'semantic-ui-react'

function HomeImagePage() {
  const [images, setImages] = useAtom(homeImageAtom)
  const [imagePreview, setImagePreview] = useState<string>('')
  const { register, reset, handleSubmit, control, setValue, watch } = useForm()

  const fetchAllImages = async () => {
    const response = await fetchHomeImages()
    if (response && response.success) setImages(response.data)
    else notifyFailure(response.message)
  }

  const onSubmit = async (data) => {
    const imgConverted = await readFileToBase64(data.image[0])
    const order = images.length + 1
    const response = await addImage(imgConverted, order)
    if (response && response.success) {
      notifySuccess(response.message)
    } else {
      notifyFailure(response.message)
    }
  }

  const watchImage = watch('image')

  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const previewURL = URL.createObjectURL(watchImage[0])
      if (previewURL) setImagePreview(previewURL)
    }
  }, [watchImage])

  useEffect(() => {
    fetchAllImages()
  }, [])

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start"
          >
            <label
              htmlFor="title"
              className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
            >
              Upload New Image
            </label>
            <div className="flex items-center gap-16 pb-2">
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
            <Button
              type="submit"
              primary
              content="Gravar"
              className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
            />
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
