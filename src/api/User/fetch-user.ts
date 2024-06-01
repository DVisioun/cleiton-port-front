import { connection } from '@/utils/axios'

export const fetchUser = async () => {
  try {
    const response = await connection.get('/user')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
