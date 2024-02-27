import { connection } from '@/utils/axios'

export const deleteSoftwares = async (id: string) => {
  try {
    const response = await connection.delete(`/software/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
