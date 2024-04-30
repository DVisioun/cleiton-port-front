import { connection } from '@/utils/axios'

export const removeEducation = async (educationId: string) => {
  try {
    const response = await connection.delete('/education-experience', {
      data: {
        id: educationId,
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
