import { connection } from '@/utils/axios'

export const fetchSoftwares = async () => {
  const response = await connection.get('/software')
  return response.data
}
