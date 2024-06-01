'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardEducation from '@/components/Atom/CardEducation/CardEducation'
import { Locale } from '@/config/i18n.config'
import { educationAtom } from '@/states/educationAtom'
import { getLabel } from '@/utils/getLabel'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Education({ params }: { params: { lang: Locale } }) {
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
              title={getLabel(item.title, params.lang)}
              organization={getLabel(item.organization, params.lang)}
              location={getLabel(item.location, params.lang)}
              description={getLabel(item.description, params.lang)}
              initial_date={getLabel(item.initial_date, params.lang)}
              final_date={getLabel(item.final_date, params.lang)}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Education
