import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addExperience = async (
  experience: API.ExperienceCreateRequestProps,
) => {
  try {
    const response = await connection.post('/education-experience', {
      title: experience.title,
      location: experience.location,
      organization: experience.organization,
      description: experience.description,
      initial_date: experience.initial_date,
      type: experience.type,
      order: experience.order,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
