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
  <Card className="!top-15 !mx-auto !mb-10 !rounded-lg !bg-primary !shadow-card sm:!mb-8 sm:flex sm:!max-w-[300px] xl:!fixed sm-0:!mb-12 sm-0:!max-w-[250px]">
    <div className="flex justify-center px-4 py-8 sm-1:px-0">
      <Image
        src={'/images/avatar.jpg'}
        className="w-40 rounded-full sm-0:w-32"
        className="w-40 rounded-full sm-0:w-32"
        alt=""
      />
    </div>
    <CardContent>
      <CardHeader className="!text-primary">Cleiton Moreira</CardHeader>
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
        <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
        <p className="text-primary">Porto - PT</p>
      </div>
    </CardContent>
  </Card>
)

export default AboutCard
