import { connection } from '@/utils/axios'

export const fetchAbout = async () => {
  const response = await connection.get('/user/about')
  return response.data
}
