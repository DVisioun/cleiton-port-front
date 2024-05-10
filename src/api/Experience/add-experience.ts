import { connection } from '@/utils/axios'
import { generateLabel } from '@/utils/generate-label'
import { createLabel } from '../Labels/create-label'

export const addExperience = async (experience: any) => {
  try {
    const newLabelsCreated: any = {}
    for (let i = 0; i < Object.keys(experience).length; i++) {
      const newLabelObj = {
        label: generateLabel(Object.keys(experience)[i]),
        en_content: experience[Object.keys(experience)[i]].en as string,
        pt_content: experience[Object.keys(experience)[i]].pt as string,
        description: '',
      }

      newLabelsCreated[Object.keys(experience)[i]] = newLabelObj.label
      await createLabel(newLabelObj)
    }

    const response = await connection.post('/education-experience', {
      title: newLabelsCreated.title,
      location: newLabelsCreated.location,
      organization: newLabelsCreated.organization,
      description: newLabelsCreated.description,
      initial_date: newLabelsCreated.initial_date,
      final_date: newLabelsCreated.final_date,
      type: 'EXPERIENCE',
      order: Math.random() * 10000,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
