import { connection } from '@/utils/axios'

export const fetchBlogPosts = async () => {
  const response = await connection.get('/blog')
  return response.data
}
