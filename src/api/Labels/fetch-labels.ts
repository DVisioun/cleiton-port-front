import { connection } from '@/utils/axios'

export const fetchLabels = async () => {
  const response = await connection.get('/labels')
  return response.data
}
