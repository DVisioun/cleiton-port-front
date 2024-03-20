import { connection } from '@/utils/axios'

export const deleteBlogPost = async (id: string) => {
  try {
    const response = await connection.delete(`/blog/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
