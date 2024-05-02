import { connection } from '@/utils/axios'
import { removeLabel } from '../Labels/remove-label'

export const removeEducation = async (education: any, labels: any) => {
  try {
    const experienceArray = Object.values(education)
    for (const fields of experienceArray) {
      const labelToBeRemoved = labels.find((label) => {
        return label.label === fields
      })
      if (labelToBeRemoved) await removeLabel(labelToBeRemoved.id)
    }
    const response = await connection.delete(
      `/education-experience/${education.id}`,
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
