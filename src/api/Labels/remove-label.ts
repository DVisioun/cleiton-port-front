import { connection } from '@/utils/axios'

export const removeLabel = async (id: string) => {
  try {
    const response = await connection.delete(`/labels/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
