import { User } from '@/@types/user' 
import { connection } from '@/utils/axios'

export const editLinksUser = async (
  userUpdate:  User.LinksEditProps,
  id: string,
) => {
  try {
    const response = await connection.put(`/user/${id}`, {
      artistation: userUpdate.artstation,
      instagram: userUpdate.instagram,
      linkedin: userUpdate.linkedin,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
