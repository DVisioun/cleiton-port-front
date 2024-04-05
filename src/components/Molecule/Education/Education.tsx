import CardEducation from '@/components/Atom/CardEducation/CardEducation'
import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Education() {
  const experiences = [
    {
      title: 'Licentiate degree, Digital Games Design',
      organization: 'Instituto Politécnico de Bragança',
      location: 'Mirandela - Portugal',
      description: 'Desenvolvimento de personagens 3D ...',
      initial_date: 'Sep 2018',
      final_date: 'Sep 2021',
      type: 'EDUCATION',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      organization: 'Instituto Politécnico de Bragança',
      location: 'Mirandela - Portugal',
      description: 'Desenvolvimento de personagens 3D ...',
      initial_date: 'Sep 2018',
      final_date: 'Sep 2021',
      type: 'EDUCATION',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      organization: 'Instituto Politécnico de Bragança',
      location: 'Mirandela - Portugal',
      description: 'Desenvolvimento de personagens 3D ...',
      initial_date: 'Sep 2018',
      final_date: 'Sep 2021',
      type: 'EDUCATION',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      organization: 'Instituto Politécnico de Bragança',
      location: 'Mirandela - Portugal',
      description: 'Desenvolvimento de personagens 3D ...',
      initial_date: 'Sep 2018',
      final_date: 'Sep 2021',
      type: 'EDUCATION',
    },
  ]

  return (
    <Grid className="lg:!mx-auto lg:!py-4">
      <GridRow columns={2}>
        {experiences.map((experience, index) => (
          <GridColumn
            key={index}
            columns={8}
            mobile={16}
            computer={8}
            tablet={16}
            className="pb-8"
          >
            <CardEducation
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

export default Education
