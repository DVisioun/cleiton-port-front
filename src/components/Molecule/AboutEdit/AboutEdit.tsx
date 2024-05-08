'use client'
import { API } from '@/@types/api'
import { fetchLabels } from '@/api/Labels/fetch-labels'
import { fetchAbout } from '@/api/User/fetch-about'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'
import React, { useEffect } from 'react'
import Flag from 'react-flagkit'
import {
  Button,
  Form,
  Grid,
  GridColumn,
  GridRow,
  TextArea,
} from 'semantic-ui-react'

function AboutEdit() {
  const handleFetchAbout = async () => {
    const response: API.FetchLabelsResponseProps = await fetchAbout()
    if (response?.success) {
      const { data } = await fetchLabels()
      const filteredLabels = data?.filter((item) =>
        item.label.includes('about'),
      )
      localStorage.setItem('labels', JSON.stringify(filteredLabels))
    }
  }

  const handleFillLabels = () => {
    const labelsData = localStorage.getItem('labels')
    if (labelsData) {
      const labels: API.LabelSchema[] = JSON.parse(labelsData)
      const textAreaPT = document.getElementById('about-pt')
      const textAreaEN = document.getElementById('about-en')

      if (textAreaPT) textAreaPT.innerText = labels[0]?.pt_content
      if (textAreaEN) textAreaEN.innerText = labels[0]?.en_content
    }
  }

  useEffect(() => {
    handleFetchAbout().then(() => {
      handleFillLabels()
    })
  })

  return (
    <>
      <LoadingScreen loading={false} />
      <Grid>
        <GridRow columns={2}>
          <GridColumn mobile={16} computer={8} tablet={16}>
            <div className="mb-5">
              <Flag country="US" size={25} className="mb-2" />
              <Form>
                <TextArea placeholder="About" id="about-en" />
              </Form>
            </div>
            <Button
              type="submit"
              content="Gravar"
              primary
              className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
            />
          </GridColumn>
          <GridColumn
            mobile={16}
            computer={8}
            tablet={16}
            className="sm-1:!mt-10 md-1:!mt-10"
          >
            <div>
              <Flag country="BR" size={25} className="mb-2" />
              <Form>
                <TextArea placeholder="About" id="about-pt" />
              </Form>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  )
}

export default AboutEdit
