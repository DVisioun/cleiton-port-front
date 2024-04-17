import CardExperience from '@/components/Atom/CardExperience/CardExperience'
import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Experience() {
  const experiences = [
    {
      id: 'experience-01',
      title: '3D Artist',
      organization: 'Aden · Tempo integral',
      location: 'Portugal · Remota',
      description: 'Desenvolvimento de personagens 3D ...',
      initial_date: 'Apr 2021',
      final_date: 'Apr 2021',
    },
    {
      id: 'experience-02',
      title: 'teste',
      organization: 'Teste',
      description: 'Teste2',
      location: '',
      initial_date: 'May 2022',
      final_date: 'Jul 2023',
    },
  ]

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
              title={experience.title}
              organization={experience.organization}
              location={experience.location}
              description={experience.description}
              initial_date={experience.initial_date}
              final_date={experience.final_date}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Experience
