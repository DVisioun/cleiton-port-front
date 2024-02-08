import CardExperience from '@/components/Atom/CardExperience/CardExperience'
import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Experience() {
  const experiences = [
    {
      id: 'experience-01',
      title: '3D Artist',
      company: 'Aden · Tempo integral',
      place: 'Portugal · Remota',
      text: 'Desenvolvimento de personagens 3D ...',
      date: 'Apr 2021 - Apr 2021',
    },
    {
      id: 'experience-02',
      title: 'teste',
      company: 'Teste',
      text: 'Teste2',
      place: '',
      date: 'May 2022 - Jul 2023',
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
              company={experience.company}
              place={experience.place}
              text={experience.text}
              date={experience.date}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  )
}

export default Experience
