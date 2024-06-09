import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react'
import NavbarSocialBlack from '../NavbarSocial/NavbarSocialBlack'
import { fetchUser } from '@/api/User/fetch-user'
import { useEffect, useState } from 'react'
import { User } from '@/@types/user'
import { readBase64ToFile } from '@/utils/base64-converter'

const AboutCard = () => {
  const styleCard = `!top-15 !mx-auto !mb-10 !rounded-lg !bg-primary !shadow-card sm:!mb-8 sm:flex sm:!max-w-[300px] sm-0:!mb-12 sm-0:!max-w-[250px]`
  const [user, setUser] = useState<User.UserProps | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')

  const handlePreviewImg = async () => {
    const imageConverted = await readBase64ToFile(user.image)
    const previewURL = URL.createObjectURL(imageConverted)
    if (previewURL) setImagePreview(previewURL)
  }

  useEffect(() => {
    const callUserData = async () => {
      try {
        const response = await fetchUser()
        setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    callUserData()
  }, [])

  useEffect(() => {
    if (user != null) {
      handlePreviewImg()
    }
  }, [user])

  return (
    <Card className={styleCard}>
      <div className="flex justify-center px-4 py-8 sm-1:px-0">
        {imagePreview ? (
          <Image
            width={320}
            height={200}
            className="h-60 w-60 rounded-full"
            alt=""
            src={imagePreview}
          />
        ) : null}
      </div>
      <CardContent>
        <CardHeader className="!text-primary">Cleiton Moreira</CardHeader>
        <CardMeta>
          <span className="text-primary">
            {user.role} at {user.company}
          </span>
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
          <p className="text-primary">{user.location}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default AboutCard
