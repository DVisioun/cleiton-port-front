import { editLabel } from '../Labels/edit-label'

export const editEducation = async (
  requestObject: any,
  education: any,
  labels: any[],
) => {
  try {
    const fieldsArray = Object.entries(education)

    for (const field of fieldsArray) {
      const labelToBeUpdated = labels.find((label) => label.label === field[1])
      const fieldsUpdate = {
        id: labelToBeUpdated?.id,
        label: labelToBeUpdated?.label,
        en_content: requestObject[field[0]]?.en,
        pt_content: requestObject[field[0]]?.pt,
      }
      if (labelToBeUpdated) await editLabel(fieldsUpdate)
    }

    return {
      success: true,
      messsage: 'Edited successfully!',
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: 'Failed to edit!',
    }
  }
}
