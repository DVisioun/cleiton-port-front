import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addBlogPost = async (blogPost: API.BlogPostCreateProps) => {
  try {
    const response = await connection.post('/blog', {
      name: blogPost.name,
      content: blogPost.content,
      image: blogPost.image,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
