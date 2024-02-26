import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addBlogPost = async (blogPost: API.BlogPostCreateProps) => {
  try {
    const response = await connection.post('/blog', {
      name: blogPost.name,
      content: blogPost.content,
      order: blogPost.order,
      flag_home: blogPost.flag_home,
      images: blogPost?.images,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
