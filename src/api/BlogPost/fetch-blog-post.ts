import { connection } from '@/utils/axios'

export const fetchBlogPosts = async () => {
  try {
    const response = await connection.get('/blog')
    return response.data
  } catch (error) {
    console.log(error)
  }
}