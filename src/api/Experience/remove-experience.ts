import { connection } from '@/utils/axios'
import { removeLabel } from '../Labels/remove-label'

export const removeExperience = async (experience: any, labels: any) => {
  try {
    const experienceArray = Object.values(experience)
    for (const fields of experienceArray) {
      const labelToBeRemoved = labels.find((label) => {
        return label.label === fields
      })
      if (labelToBeRemoved) await removeLabel(labelToBeRemoved.id)
    }
    const response = await connection.delete(
      `/education-experience/${experience.id}`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
