import { connection } from '@/utils/axios'

export const fetchSkills = async () => {
  const response = await connection.get('/skill')
  return response.data
}
