import { About } from '@/@types/about'
import React from 'react'
import { Label, Segment } from 'semantic-ui-react'

function CardExperience({
  title,
  organization,
  location,
  description,
  initial_date,
  final_date,
}: About.CreateExperienceEducationProps) {
  return (
    <div className="relative w-full px-4">
      <Segment raised className="!relative !rounded-lg !bg-secondary">
        <Label
          as="a"
          color="black"
          ribbon
          className="!absolute !left-[-15px] !top-[-15px] !bg-primary text-primary"
        >
          {initial_date}
          {final_date ? ' - ' + final_date : ''}
        </Label>
        <div className="min-h-40">
          <h2 className="!mt-2 text-3xl text-primary">{title}</h2>
          <h5 className="!my-1 font-normal text-secondary">{organization}</h5>
          <h5 className="!my-1 font-normal text-primary">{location}</h5>
          <p className="!mt-1">{description}</p>
        </div>
      </Segment>
    </div>
  )
}

export default CardExperience
