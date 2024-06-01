'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardExperience from '@/components/Atom/CardExperience/CardExperience'
import { Locale } from '@/config/i18n.config'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionaries-client'
import { experienceAtom } from '@/states/experienceAtom'
import { getLabel } from '@/utils/getLabel'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Experience({ params }: { params: { lang: Locale } }) {
  const [experiences, setExperiences] = useAtom(experienceAtom)

  const fetchExperiences = async () => {
    const response = await fetchExperience()
    if (response?.success) {
      setExperiences(response.data.filter((item) => item.type === 'EXPERIENCE'))
    } else {
      notifyFailure(response.message)
    }
  }

  useEffect(() => {
    fetchExperiences()
  }, [])

  return (
    <Grid className="lg:!mx-auto lg:!py-4">
      <GridRow columns={2}>
        {experiences.map((experience) => (
          <GridColumn
            key={experience.id}
            columns={8}
            mobile={16}
            computer={8}
            className="pb-8"
          >
            <CardExperience
              title={getLabel(experience.title, params.lang)}
              organization={getLabel(experience.organization, params.lang)}
              location={getLabel(experience.location, params.lang)}
              description={getLabel(experience.description, params.lang)}
              initial_date={getLabel(experience.initial_date, params.lang)}
              final_date={getLabel(experience.final_date, params.lang)}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Experience
