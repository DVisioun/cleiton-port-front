import { API } from '@/@types/api'
import { deleteSkill } from '@/api/Skill/delete-skill'
import { fetchSkills } from '@/api/Skill/fetch-skill'
import { skillAtom } from '@/states/skillAtom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const SkillsList = () => {
  const [skills, setSkills] = useAtom(skillAtom)

  const handleFetchSkills = async () => {
    const response: API.FetchSkillResponseProps = await fetchSkills()
    if (response?.success) {
      return response.data
    }
  }

  const handleDeleteSkill = async (id: string) => {
    const response: API.DeleteSkillResponseProps = await deleteSkill(id)
    if (response?.success) {
      setSkills(skills.filter((item) => item.id !== id))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await handleFetchSkills()
      if (data) {
        setSkills(data)
      }
    }
    fetchData()
  }, [setSkills])

  return (
    <ul className="flex flex-wrap gap-3">
      {skills.map((item) => {
        return (
          <li key={item.id} className="relative mb-2 border py-2 pl-2 pr-10">
            {item.name}
            <button
              onClick={() => handleDeleteSkill(item.id)}
              className="absolute right-3"
            >
              x
            </button>
          </li>
        )
      })}
    </ul>
  )
}
