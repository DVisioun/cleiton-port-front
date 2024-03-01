'use client'

import { useForm } from 'react-hook-form'
import { useAtom } from 'jotai'
import { Button, Input } from 'semantic-ui-react'
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

  const { register, reset, handleSubmit, control, setValue } =
    useForm<Portfolio.CreatePortfolioProjectFormProps>()

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
      setImagePreview(previewURL)

      const softwaresUsedInProject = softwares.filter((item) =>
        portfolioProjectData.softwares.some(
          (software) => software.software_id === item.id,
        ),
      )

      const selectedSoftwares = softwaresUsedInProject.map((item) => {
        return item.id
      })

      setValue('name', portfolioProjectData.name)
      setValue('description', portfolioProjectData.description)
      setValue('flag_home', portfolioProjectData.flag_home)
      setValue('name', portfolioProjectData.name)
      setValue('softwares', selectedSoftwares)
    }
  }

  const onSubmit = async (data: Portfolio.CreatePortfolioProjectFormProps) => {
    const currentDate = new Date()

    if (editProject) {
      const imageConverter = await readFileToBase64(data.image)

      const requestPortfolioProjectEditObject = {
        id: data.id,
        name: data.name,
        description: data.description,
        order: data.order,
        flag_home: data.flag_home,
        softwares: data.softwares,
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
      const imageConverter = await readFileToBase64(data.image)

      const requestPortfolioProjectCreateObject = {
        name: data.name,
        description: data.description,
        flag_home: data.flag_home,
        softwares: data.softwares,
        image: imageConverter,
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
          <Input placeholder="Enter title your project...">
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
        <PortfolioTextEditor
          name="description"
          defaultValue={`${!editProject ? '<p>Enter content your project...</p>' : portfolioProject[portfolioIndex].description}`}
          control={control}
        />
        <label
          htmlFor="title"
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
              placeholder="Enter image of your project..."
              {...register('image', { required: 'Required field!' })}
              draggable
            />
          </Input>
          {imagePreview ?? (
            <Image
              className="h-20 rounded-full"
              width={100}
              height={100}
              alt=""
              src={imagePreview}
            />
          )}
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
