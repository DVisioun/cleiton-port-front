'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardEducation from '@/components/Atom/CardEducation/CardEducation'
import { Locale } from '@/config/i18n.config'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionaries-client'
import { educationAtom } from '@/states/educationAtom'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Education({ params }: { params: { lang: Locale } }) {
  const [education, setEducation] = useAtom(educationAtom)
  const t = getDictionaryUseClient(params.lang)

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
              title={t[item.title]}
              organization={t[item.organization]}
              location={t[item.location]}
              description={t[item.description]}
              initial_date={t[item.initial_date]}
              final_date={t[item.final_date]}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Education
