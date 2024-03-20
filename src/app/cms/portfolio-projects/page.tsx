'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Button, Divider, Header } from 'semantic-ui-react'
import { fetchSoftwares } from '@/api/Software/fetch-softwares'
import { TablePortfolioProject } from '@/components/Atom/TablePortfolioProject/TablePortfolioProject'
import ProjectEdit from '@/components/Molecule/ProjectEdit/ProjectEdit'
import { softwareAtom } from '@/states/softwareAtom'

export default function PortfolioPage() {
  const [addProject, setAddProject] = useState(false)
  const [editProject, setEditProject] = useState(false)
  const [projectId, setProjectId] = useState<string>('')
  const [softwares, setSoftwares] = useAtom(softwareAtom)

  const handleFetchSoftwares = async () => {
    const response = await fetchSoftwares()
    setSoftwares(response.data)
  }

  useEffect(() => {
    handleFetchSoftwares()
  }, [])

  return (
    <section className="pl-2 pr-6">
      <Divider horizontal>
        <Header
          as="h4"
          className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
        >
          Portfolio Projects
        </Header>
      </Divider>
      {!addProject && (
        <Button
          content="Create a New Portfolio Project"
          primary
          onClick={() => setAddProject(!addProject)}
        />
      )}
      {addProject && (
        <Button
          content="View All Portfolio Projects"
          secondary
          onClick={() => {
            setEditProject(false)
            setAddProject(!addProject)
          }}
        />
      )}

      {!addProject && (
        <TablePortfolioProject
          setProjectId={setProjectId}
          setEditProject={setEditProject}
          setAddProject={setAddProject}
        />
      )}
      {addProject && (
        <ProjectEdit
          editProject={editProject}
          setEditProject={setEditProject}
          setAddProject={setAddProject}
          projectId={projectId}
        />
      )}
    </section>
  )
}
