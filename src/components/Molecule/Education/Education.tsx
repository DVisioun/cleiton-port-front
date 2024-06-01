'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardEducation from '@/components/Atom/CardEducation/CardEducation'
import { educationAtom } from '@/states/educationAtom'
import { getLabel } from '@/utils/getLabel'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Education({ language }: { language: string }) {
  const [education, setEducation] = useAtom(educationAtom)

  const fetchEducation = async () => {
    const response = await fetchExperience()
    if (response?.success) {
      setEducation(response.data.filter((item) => item.type === 'EDUCATION'))
    } else {
      notifyFailure(response.message)
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  return (
    <Grid className="lg:!mx-auto lg:!py-4">
      <GridRow columns={2}>
        {education.map((item, index) => (
          <GridColumn
            key={index}
            columns={8}
            mobile={16}
            computer={8}
            tablet={16}
            className="pb-8"
          >
            <CardEducation
              title={getLabel(item.title, language)}
              organization={getLabel(item.organization, language)}
              location={getLabel(item.location, language)}
              description={getLabel(item.description, language)}
              initial_date={getLabel(item.initial_date, language)}
              final_date={getLabel(item.final_date, language)}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Education
