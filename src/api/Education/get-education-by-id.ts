import { connection } from '@/utils/axios'

export const getEducationById = async (educationId: string) => {
  try {
    const response = await connection.get(
      `/education-experience/${educationId}`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
