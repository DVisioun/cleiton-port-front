import { connection } from '@/utils/axios'

export const fetchLabels = async () => {
  try {
    const response = await connection.get('/labels')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
