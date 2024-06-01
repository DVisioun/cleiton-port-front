'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardExperience from '@/components/Atom/CardExperience/CardExperience'
import { experienceAtom } from '@/states/experienceAtom'
import { getLabel } from '@/utils/getLabel'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Experience({ language }: { language: string }) {
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
              title={getLabel(experience.title, language)}
              organization={getLabel(experience.organization, language)}
              location={getLabel(experience.location, language)}
              description={getLabel(experience.description, language)}
              initial_date={getLabel(experience.initial_date, language)}
              final_date={getLabel(experience.final_date, language)}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Experience
