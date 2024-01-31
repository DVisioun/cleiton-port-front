import CardEducation from '@/components/Atom/CardEducation/CardEducation'
import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

function Education() {
  const experiences = [
    {
      title: 'Licentiate degree, Digital Games Design',
      institution: 'Instituto Politécnico de Bragança',
      place: 'Mirandela - Portugal',
      text: 'Desenvolvimento de personagens 3D ...',
      date: 'Sep 2018 - set 2021',
    },
    {
      title: 'teste',
      institution: 'Teste',
      text: 'Teste2',
      place: '',
      date: 'May 2022 - Jul 2023',
    },
  ]

  return (
    <Grid className="flex flex-col flex-wrap gap-20 py-14">
      <GridRow columns={2} only="large screen">
        {experiences.map((experience, index) => (
          <GridColumn key={index} columns={8} only="large screen">
            <CardEducation
              title={experience.title}
              institution={experience.institution}
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

export default Education
