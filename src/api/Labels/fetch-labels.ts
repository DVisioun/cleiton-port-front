import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const fetchLabels = async (): Promise<API.FetchLabelsResponseProps> => {
  const response = await connection.get('/labels')
  return response.data
}
