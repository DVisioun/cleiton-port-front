import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react'
import NavbarSocialBlack from '../NavbarSocial/NavbarSocialBlack'

const AboutCard = () => (
  <Card className="!top-15 sm-0:!max-w-[250px] sm-0:!mb-12 !mx-auto !mb-10 !rounded-lg !bg-primary !shadow-card sm:!mb-8 sm:flex sm:!max-w-[300px] xl:!fixed">
    <div className="sm-1:px-0 flex justify-center px-4 py-8">
      <Image
        src={'/images/avatar.jpg'}
        className="sm-0:w-32 w-40 rounded-full"
        alt=""
      />
    </div>
    <CardContent>
      <CardHeader>Cleiton Moreira</CardHeader>
      <CardMeta>
        <span className="text-primary">3D Artist at Aden Interactive</span>
      </CardMeta>
      <CardDescription className="!mt-5 ">
        <div>
          <NavbarSocialBlack />
        </div>
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faLocationDot} />
        <p className="text-primary">Porto - PT</p>
      </div>
    </CardContent>
  </Card>
)

export default AboutCard
