import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addSkill = async (skill: API.SkillCreateProps) => {
  try {
    const response = await connection.post('/skill', {
      name: skill.name,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return error.response
  }
}
