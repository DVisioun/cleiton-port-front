import { connection } from '@/utils/axios'

export const removeExperience = async (experienceId: string) => {
  try {
    const response = await connection.delete('/education-experience', {
      data: {
        id: experienceId,
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
