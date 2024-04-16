'use client'
import React, { useEffect, useState } from 'react'
import { fetchSkills } from '@/api/Skill/fetch-skill'
import { API } from '@/@types/api'

function TextSkills({ params }: any) {
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
    <div className="flex flex-wrap justify-center gap-3 py-14">
      {skills.map((skill, index) => (
        <React.Fragment key={skill.id}>
          <p className="text-xl sm:text-lg">{skill.name}</p>
          {index !== skills.length - 1 && <span className="text-2xl">-</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TextSkills
