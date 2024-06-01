import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  faArtstation,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchUser } from '@/api/User/fetch-user'
import { User } from '@/@types/user'

function NavbarSocial() {
  const [user, setUser] = useState<User.UserProps | null>(null)

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

  if (!user) return null

  return (
    <nav className="flex justify-center gap-5 sm-1:hidden sm-1:w-0">
      {user.artstation && (
        <Link href={user.artstation} target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-primary duration-300 hover:text-hover  hover:underline active:text-hover active:underline"
            icon={faArtstation}
          />
        </Link>
      )}
      {user.linkedin && (
        <Link href={user.linkedin} target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-primary duration-300 hover:text-hover   hover:underline active:text-hover active:underline"
            icon={faLinkedin}
          />
        </Link>
      )}
      {user.instagram && (
        <Link href={user.instagram} target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-primary duration-300 hover:text-hover   hover:underline active:text-hover active:underline"
            icon={faInstagram}
          />
        </Link>
      )}
    </nav>
  )
}

export default NavbarSocial
