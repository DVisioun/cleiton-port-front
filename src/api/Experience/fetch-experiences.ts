import { connection } from '@/utils/axios'

export const fetchExperience = async () => {
  try {
    const response = await connection.get('/education-experience')

    return response.data
  } catch (error) {
    console.log(error)
  }
}
