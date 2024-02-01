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
      date: 'Sep 2018 - Sep 2021',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      institution: 'Instituto Politécnico de Bragança',
      place: 'Mirandela - Portugal',
      text: 'Desenvolvimento de personagens 3D ...',
      date: 'Sep 2018 - Sep 2021',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      institution: 'Instituto Politécnico de Bragança',
      place: 'Mirandela - Portugal',
      text: 'Desenvolvimento de personagens 3D ...',
      date: 'Sep 2018 - Sep 2021',
    },
    {
      title: 'Licentiate degree, Digital Games Design',
      institution: 'Instituto Politécnico de Bragança',
      place: 'Mirandela - Portugal',
      text: 'Desenvolvimento de personagens 3D ...',
      date: 'Sep 2018 - Sep 2021',
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
