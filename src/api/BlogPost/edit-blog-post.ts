import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const editBlogPost = async (blogPost: API.BlogPostEditProps) => {
  try {
    const response = await connection.post(`/blog/${blogPost.id}`, {
      name: blogPost.name,
      content: blogPost.content,
      order: blogPost.order,
      flag_home: blogPost.flag_home,
      image: blogPost.image,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
