import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addSoftware = async (software: API.SoftwareCreateRequestProps) => {
  try {
    const response = await connection.post('/software', {
      name: software.name,
      image: software.image,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
