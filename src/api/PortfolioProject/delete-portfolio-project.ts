import { connection } from '@/utils/axios'

export const deletePortfolioProject = async (id: string) => {
  try {
    const response = await connection.delete(`/portfolio/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
