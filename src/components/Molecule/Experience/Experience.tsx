'use client'

import { fetchExperience } from '@/api/Experience/fetch-experiences'
import CardExperience from '@/components/Atom/CardExperience/CardExperience'
import { Locale } from '@/config/i18n.config'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionaries-client'
import { experienceAtom } from '@/states/experienceAtom'
import { notifyFailure } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Experience({ params }: { params: { lang: Locale } }) {
  const [experiences, setExperiences] = useAtom(experienceAtom)
  const t = getDictionaryUseClient(params.lang)

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
              title={t[experience.title]}
              organization={t[experience.organization]}
              location={t[experience.location]}
              description={t[experience.description]}
              initial_date={t[experience.initial_date]}
              final_date={t[experience.final_date]}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Experience
