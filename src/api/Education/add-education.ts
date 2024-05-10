import { connection } from '@/utils/axios'
import { generateLabel } from '@/utils/generate-label'
import { createLabel } from '../Labels/create-label'

export const addEducation = async (education: any) => {
  try {
    const newLabelsCreated: any = {}
    for (let i = 0; i < Object.keys(education).length; i++) {
      const newLabelObj = {
        label: generateLabel(Object.keys(education)[i]),
        en_content: education[Object.keys(education)[i]].en as string,
        pt_content: education[Object.keys(education)[i]].pt as string,
        description: '',
      }

      newLabelsCreated[Object.keys(education)[i]] = newLabelObj.label
      await createLabel(newLabelObj)
    }

    const response = await connection.post('/education-experience', {
      title: newLabelsCreated.title,
      location: newLabelsCreated.location,
      organization: newLabelsCreated.organization,
      description: newLabelsCreated.description,
      initial_date: newLabelsCreated.initial_date,
      final_date: newLabelsCreated.final_date,
      type: 'EDUCATION',
      order: Math.random() * 10000,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
