'use client'

import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import { portfolioProjectAtom } from '@/states/portfolioProjectAtom'
import { addPortfolioProject } from '@/api/PortfolioProject/add-portfolio-project'
import { PortfolioTextEditor } from '@/components/Atom/PortfolioTextEditor/PortfolioTextEditor'
import { notifySuccess, notifyFailure } from '@/utils/toastify'
import { readBase64ToFile, readFileToBase64 } from '@/utils/base64-converter'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { editPortfolioProject } from '@/api/PortfolioProject/edit-portfolio-project'
import { fetchPortfolioProjects } from '@/api/PortfolioProject/fetch-portfolio-project'
import { Portfolio } from '@/@types/project'
import { softwareAtom } from '@/states/softwareAtom'
import Image from 'next/image'
import { API } from '@/@types/api'

interface ProjectEditProps {
  editProject: boolean
  setEditProject: Dispatch<SetStateAction<boolean>>
  setAddProject: Dispatch<SetStateAction<boolean>>
  projectId: string
}

const ProjectEdit = ({
  editProject,
  setEditProject,
  setAddProject,
  projectId,
}: ProjectEditProps) => {
  const [softwares, setSoftwares] = useAtom(softwareAtom)
  const [portfolioProject, setPortfolioProject] = useAtom(portfolioProjectAtom)
  const [portfolioIndex, setPortfolioIndex] = useState<number>(0)
  const [imagePreview, setImagePreview] = useState<string>('')

  const imagePreviewElement = document.getElementById('file')

  const { register, reset, handleSubmit, control, setValue, watch } =
    useForm<Portfolio.CreatePortfolioProjectFormProps>()

  const watchImage = watch('image')

  // completa os dados do formulário caso o usuário queira editar o project
  const fillPortfolioProjectData = async () => {
    const portfolioProjectData = portfolioProject.find(
      (item) => item.id === projectId,
    )
    if (portfolioProjectData) {
      const index = portfolioProject.findIndex((item) => item.id === projectId)
      setPortfolioIndex(index)

      const imageConverted = await readBase64ToFile(portfolioProjectData.image)
      const previewURL = URL.createObjectURL(imageConverted)
      if (previewURL) setImagePreview(previewURL)

      const softwaresUsedInProject: API.SoftwareSchema[] = softwares.filter(
        (item) =>
          portfolioProjectData.softwares.some(
            (software) => software.software_id === item.id,
          ),
      )

      const selectedSoftwares = softwaresUsedInProject.map((item) => {
        return item.id
      })

      setValue('name', portfolioProjectData.name)
      setValue('description', portfolioProjectData.description)
      setValue('name', portfolioProjectData.name)
      setValue('softwares', selectedSoftwares)
    }
  }

  const onSubmit = async (data: Portfolio.CreatePortfolioProjectFormProps) => {
    const currentDate = new Date()

    if (editProject) {
      const imageConverter = await readFileToBase64(data.image[0])

      const softwaresUsedInProject: API.SoftwareSchema[] = softwares.filter(
        (item) => data.softwares.some((software) => software === item.id),
      )

      const selectedSoftwares = softwaresUsedInProject.map((item) => {
        return { id: item.id }
      })

      const requestPortfolioProjectEditObject = {
        id: data.id,
        name: data.name,
        description: data.description,
        content: data.content,
        softwares: selectedSoftwares,
        image: imageConverter,
        created_at: currentDate,
      }

      const response = await editPortfolioProject(
        requestPortfolioProjectEditObject,
        projectId,
      )
      if (response?.success) {
        await fetchPortfolioProjects()
        notifySuccess('Project edited successfully')
        reset()
        setEditProject(false)
        setAddProject(false)
      } else {
        notifyFailure('Failed to edit project, please try again..')
      }
    } else {
      const imageConverted = await readFileToBase64(data.image[0])

      const softwaresArray = data.softwares.map((item) => {
        return { id: item }
      })

      const requestPortfolioProjectCreateObject = {
        name: data.name,
        description: data.description,
        content: data.content,
        softwares: softwaresArray,
        image: imageConverted,
        created_at: currentDate,
      }

      const response = await addPortfolioProject(
        requestPortfolioProjectCreateObject,
      )
      if (response?.success) {
        setPortfolioProject([...portfolioProject, response.data])
        notifySuccess('Project created successfully')
        reset()
        setAddProject(false)
      } else {
        notifyFailure('Failed to create project, please try again..')
      }
    }
  }

  useEffect(() => {
    if (editProject) {
      fillPortfolioProjectData()
    } else {
      reset()
    }
  }, [editProject])

  useEffect(() => {
    if (watchImage[0]) {
      const previewURL = URL.createObjectURL(watchImage[0])
      if (previewURL) setImagePreview(previewURL)
    }
  }, [watchImage])

  return (
    <div className="pb-4">
      <form
        className="flex flex-col items-start justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="title"
          className="mt-4 flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Title
          <Input placeholder="Enter title of your project...">
            <input
              type="text"
              {...register('name', { required: 'Required field!' })}
            />
          </Input>
        </label>
        <label
          htmlFor="description"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Description
        </label>
        <Form className="w-full">
          <TextArea
            placeholder="Write a short summary about your portfolio"
            style={{ minHeight: 100, maxHeight: 100 }}
            {...register('description', { required: 'Required field!' })}
          />
        </Form>
        <label
          htmlFor="content"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Content
        </label>
        <PortfolioTextEditor
          defaultValue={`${!editProject ? '<p>Enter content your project...</p>' : portfolioProject[portfolioIndex].content}`}
          control={control}
        />
        <label
          htmlFor="softwares"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Softwares
        </label>
        <select
          multiple
          {...register('softwares')}
          className="block w-full appearance-none rounded-md border border-gray-300 p-2.5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        >
          {softwares.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            )
          })}
        </select>
        <label
          htmlFor="image"
          className="flex w-full flex-col items-start justify-center gap-2 font-semibold"
        >
          Cover Image
        </label>
        <div className="flex items-center gap-16">
          <Input placeholder="">
            <input
              id="file"
              type="file"
              placeholder="Enter image of your project..."
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
          content="Gravar"
          primary
          className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
        />
      </form>
    </div>
  )
}

export default ProjectEdit
