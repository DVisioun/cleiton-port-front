import { About } from '@/@types/about'
import React from 'react'
import { Label, Segment } from 'semantic-ui-react'

function CardEducation({
  title,
  institution,
  place,
  text,
  date,
}: About.CardEducationProps) {
  return (
    <div className="relative w-full px-4">
      <Segment raised className="!relative !rounded-lg !bg-secondary">
        <Label
          as="a"
          color="black"
          ribbon
          className="!absolute !left-[-15px] !top-[-15px] !bg-primary text-primary"
        >
          {date}
        </Label>
        <div className="min-h-40">
          <h2 className="sm-0:text-xl mt-2 text-2xl text-primary">{title}</h2>
          <h5 className="sm-0:text-base my-1 font-normal italic text-secondary">
            {institution}
          </h5>
          <h5 className="sm-0:text-sm my-1 font-normal text-primary">
            {place}
          </h5>
          <p className="sm-0:text-sm mt-1">{text}</p>
        </div>
      </Segment>
    </div>
  )
}

export default CardEducation
