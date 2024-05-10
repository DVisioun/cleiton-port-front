import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const editLabel = async ({
  id,
  en_content,
  pt_content,
}: API.LabelSchema) => {
  try {
    const response = await connection.put(`/labels/${id}`, {
      en_content,
      pt_content,
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
