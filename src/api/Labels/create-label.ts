import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const createLabel = async ({
  description,
  en_content,
  label,
  pt_content,
}: API.LabelSchema) => {
  const response = await connection.post('/labels', {
    description,
    en_content,
    label,
    pt_content,
  })
  return response.data
}
