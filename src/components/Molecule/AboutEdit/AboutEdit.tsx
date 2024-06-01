'use client'
import { API } from '@/@types/api'
import { editLabel } from '@/api/Labels/edit-label'
import { fetchLabels } from '@/api/Labels/fetch-labels'
import { fetchAbout } from '@/api/User/fetch-about'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import React, { useEffect } from 'react'
import Flag from 'react-flagkit'
import { useForm } from 'react-hook-form'
import { Button, Grid, GridColumn, GridRow } from 'semantic-ui-react'

function AboutEdit() {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { isSubmitting },
  } = useForm()

  const handleFetchLabels = async () => {
    const response: API.FetchLabelsResponseProps = await fetchAbout()
    if (response?.success) {
      const { data } = await fetchLabels()
      localStorage.setItem('labels', JSON.stringify(data))
    }
  }

  const onSubmit = async (data) => {
    const response = await editLabel({
      id: '1',
      en_content: data.en_content,
      pt_content: data.pt_content,
    })

    if (response && response.success) {
      handleFetchLabels().then(() => handleFillLabels())
      notifySuccess(response.message)
    } else {
      notifyFailure('Failed editing description. Try again, please!')
    }
  }

  const handleFillLabels = () => {
    const labelsData = localStorage.getItem('labels')
    if (labelsData) {
      const labels: API.LabelSchema[] = JSON.parse(labelsData)
      setValue('pt_content', labels[0]?.pt_content)
      setValue('en_content', labels[0]?.en_content)
    }
  }

  useEffect(() => {
    handleFetchLabels().then(() => handleFillLabels())
  }, [])

  return (
    <>
      <LoadingScreen loading={isSubmitting} />
      <Grid>
        <GridRow columns={2}>
          <form onSubmit={handleSubmit(onSubmit)} className="block w-full px-4">
            <GridColumn mobile={16} computer={8} tablet={16}>
              <div className="mb-5">
                <Flag country="US" size={25} className="mb-2" />
                <textarea
                  className="min-h-28 w-full border p-2"
                  placeholder="About"
                  id="about-en"
                  {...register('en_content')}
                />
              </div>
            </GridColumn>
            <GridColumn
              mobile={16}
              computer={8}
              tablet={16}
              className="sm-1:!mt-10 md-1:!mt-10"
            >
              <div>
                <Flag country="BR" size={25} className="mb-2" />
                <textarea
                  className="min-h-28 w-full border p-2"
                  placeholder="About"
                  id="about-pt"
                  {...register('pt_content')}
                />
              </div>
            </GridColumn>
            <Button type="submit" content="Gravar" primary className="!mt-2" />
          </form>
        </GridRow>
      </Grid>
    </>
  )
}

export default AboutEdit
