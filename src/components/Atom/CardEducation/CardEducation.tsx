import { About } from '@/@types/about'
import {
  faBuildingColumns,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Label, Segment } from 'semantic-ui-react'

function CardEducation({
  title,
  organization,
  location,
  description,
  initial_date,
  final_date,
}: About.CreateExperienceEducationProps) {
  return (
    <div className="relative w-full px-4">
      <Segment
        raised
        className="!relative !h-64 !rounded-lg !bg-secondary sm-0:!h-72 sm-1.0:!h-64 sm-1:!h-60 sm-2:!h-56 md-2.5:!h-72"
      >
        <Label
          as="a"
          color="black"
          ribbon
          className="!absolute !left-[-15px] !top-[-15px] !cursor-default !select-none !bg-primary text-primary"
        >
          {initial_date}
          {final_date ? ' - ' + final_date : ''}
        </Label>
        <div className="flex flex-col">
          <h2 className="mt-2 select-none text-xl text-primary sm-0:text-xl md-1.5:text-lg">
            {title}
          </h2>
          <h4 className="my-1 flex select-none items-center gap-1 font-normal italic text-secondary sm-0:text-base">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="w-4 text-primary"
            />
            {organization}
          </h4>
          <h5 className="my-1 flex select-none items-center gap-1 font-normal text-primary sm-0:text-base">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-4 text-primary"
            />
            {location}
          </h5>
          <p className="mt-1.5 select-none overflow-auto sm-0:text-sm">
            {description}
          </p>
        </div>
      </Segment>
    </div>
  )
}

export default CardEducation
