import { connection } from '@/utils/axios'

export const removeImage = async (id: string) => {
  try {
    const response = await connection.delete(`/homepost/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
