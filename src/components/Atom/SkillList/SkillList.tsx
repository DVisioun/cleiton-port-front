import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { deleteSkill } from '@/api/Skill/delete-skill'
import { fetchSkills } from '@/api/Skill/fetch-skill'
import { skillAtom } from '@/states/skillAtom'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { API } from '@/@types/api'

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
      notifySuccess(response.message)
    } else {
      notifyFailure(response.message)
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
          <li key={item.id} className="relative mb-2 border px-5 py-2">
            {item.name}
            <button onClick={() => handleDeleteSkill(item.id)} className="pl-4">
              <FontAwesomeIcon
                icon={faXmark}
                height={12}
                className="duration-300 hover:scale-125"
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
