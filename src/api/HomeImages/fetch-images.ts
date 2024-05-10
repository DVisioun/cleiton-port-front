import { connection } from '@/utils/axios'

export const fetchHomeImages = async () => {
  try {
    const response = await connection.get('/homepost')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
