import { connection } from '@/utils/axios'

export const addImage = async (image: string, order: number) => {
  try {
    const response = await connection.post('/homepost', {
      image,
      order,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
