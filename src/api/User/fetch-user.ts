import { connection } from '@/utils/axios'

export const fetchUser = async () => {
  try {
    const response = await connection.get('/user')
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
