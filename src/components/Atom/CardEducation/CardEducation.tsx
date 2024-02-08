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
          <h2 className="mt-2 text-2xl text-primary sm-0:text-xl">{title}</h2>
          <h5 className="my-1 font-normal italic text-secondary sm-0:text-base">
            {institution}
          </h5>
          <h5 className="my-1 font-normal text-primary sm-0:text-sm">
            {place}
          </h5>
          <p className="mt-1 sm-0:text-sm">{text}</p>
        </div>
      </Segment>
    </div>
  )
}

export default CardEducation
