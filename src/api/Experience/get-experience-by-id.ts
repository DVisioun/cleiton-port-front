import { connection } from '@/utils/axios'

export const getExperienceById = async (experienceId: string) => {
  try {
    const response = await connection.get(
      `/education-experience/${experienceId}`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
