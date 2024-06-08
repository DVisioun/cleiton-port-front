import { User } from '@/@types/user'
import { connection } from '@/utils/axios'

export const editLinksUser = async (
  userUpdate: User.LinksEditProps,
  id: string,
) => {
  try {
    const response = await connection.put(`/user/${id}`, {
      artstation: userUpdate.artstation,
      instagram: userUpdate.instagram,
      linkedin: userUpdate.linkedin,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const editUserImage = async (
  userUpdate: User.UserImageProps,
  id: string,
) => {
  try {
    const response = await connection.put(`/user/${id}`, {
      image: userUpdate.image,
    })

    console.log(response)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const editUserOtherInfo = async (
  userUpdate: User.OtherInfoEditProps,
  id: string,
) => {
  try {
    console.log(userUpdate)
    const response = await connection.put(`/user/${id}`, {
      location: userUpdate.location,
      role: userUpdate.role,
      company: userUpdate.company,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
