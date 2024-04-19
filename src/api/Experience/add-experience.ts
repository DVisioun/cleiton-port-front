import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addExperience = async (experience: API.ExperienceFormProps) => {
  try {
    const response = await connection.post('/education-experience', {
      title: experience.title,
      organization: experience.organization,
      location: experience.location,
      description: experience?.description,
      initial_date: experience.initial_date,
      final_date: experience.final_date,
      order: experience.order,
      type: experience.type,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
