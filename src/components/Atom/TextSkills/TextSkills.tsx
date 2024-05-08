'use client'
import React, { useEffect, useState } from 'react'
import { fetchSkills } from '@/api/Skill/fetch-skill'
import { API } from '@/@types/api'

function TextSkills() {
  const [skills, setSkills] = useState<API.SkillSchema[]>([])

  const handleFetchSkills = async () => {
    try {
      const response: API.FetchSkillResponseProps = await fetchSkills()
      if (response?.success) {
        setSkills(response.data)
      }
    } catch (error) {
      console.error('Erro ao buscar as habilidades:', error)
    }
  }

  useEffect(() => {
    handleFetchSkills()
  }, [])

  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
      {skills.map((skill, index) => (
        <React.Fragment key={skill.id}>
          <p className="m-0 text-center text-xl sm:text-lg sm-0:text-sm">
            {skill.name}
          </p>
          {index !== skills.length - 1 && (
            <span className="text-center text-2xl ">-</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TextSkills
