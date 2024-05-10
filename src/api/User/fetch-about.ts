import { connection } from '@/utils/axios'

export const fetchAbout = async () => {
  try {
    const response = await connection.get('/user/about')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
