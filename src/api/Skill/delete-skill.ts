import { connection } from '@/utils/axios'

export const deleteSkill = async (id: string) => {
  try {
    const response = await connection.delete(`/skill/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
