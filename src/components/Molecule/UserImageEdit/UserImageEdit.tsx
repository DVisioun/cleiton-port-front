'use client'
import { API } from '@/@types/api'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'semantic-ui-react'
import { notifySuccess, notifyFailure } from '@/utils/toastify'
import { readBase64ToFile, readFileToBase64 } from '@/utils/base64-converter'
import { editUserImage } from '@/api/User/edit-user'
import { fetchUser } from '@/api/User/fetch-user'
import { User } from '@/@types/user'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'

function UserImageEdit() {
  const [imagePreview, setImagePreview] = useState<string>('')
  const [user, setUser] = useState<User.UserProps | null>(null)
  const [userId, setUserID] = useState('fe3e25da-a60e-4122-a3ad-bb4d2fcafd3a')
  const [loading, setLoading] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<API.UserImageCreateFormProps>()

  const watchImage = watch('img_profile')

  const validateFile = (file: File) => {
    const maxFileSizeInBytes = 3 * 1024 * 1024 // 3 MB
    if (file.size > maxFileSizeInBytes) {
      notifyFailure('Maximum size exceeded (3 MB)')
      setImagePreview('')
      setValue('img_profile', null)
      return false
    }
    return true
  }

  const onSubmit = async (data: API.UserImageCreateFormProps) => {
    setLoading(true)
    let imageConverter = ''

    if (data.img_profile && data.img_profile[0] instanceof File) {
      const file = data.img_profile[0]
      if (validateFile(file)) {
        imageConverter = await readFileToBase64(file)
      } else {
        return
      }
    }

    const requestBlogPostEditObject = {
      image: imageConverter,
    }

    const response: API.CreateAndUpdateUserImageResponseProps =
      await editUserImage(requestBlogPostEditObject, userId)
    if (response && response.success) {
      notifySuccess(response.message)
    } else {
      notifyFailure('Failed updating profile image. Try again, please!')
    }

    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    const callUserData = async () => {
      try {
        const response = await fetchUser()
        setUser(response.data)
        if (response.data.image) {
          const file = await readBase64ToFile(response.data.image)
          const previewURL = URL.createObjectURL(file)
          if (previewURL) setImagePreview(previewURL)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    callUserData()
  }, [])

  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const previewURL = URL.createObjectURL(watchImage[0])
      if (previewURL) setImagePreview(previewURL)
    }
  }, [watchImage])

  return (
    <>
      <LoadingScreen loading={loading} />
      <form
        className="flex flex-col items-start justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex items-center gap-16">
          <Input placeholder="">
            <input
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register('img_profile')}
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
          content="Save"
          primary
          className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
        />
      </form>
    </>
  )
}

export default UserImageEdit
