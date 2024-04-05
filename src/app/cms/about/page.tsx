'use client'
import React from 'react'
import { Divider, Header, Segment } from 'semantic-ui-react'
import AboutEdit from '@/components/Molecule/AboutEdit/AboutEdit'
import SkillsEdit from '@/components/Molecule/SkillsEdit/SkillsEdit'
import SoftwareEdit from '@/components/Molecule/SoftwareEdit/SoftwareEdit'
import ExperienceEdit from '@/components/Molecule/ExperienceEdit/ExperienceEdit'
import EducationEdit from '@/components/Molecule/EducationEdit/EducationEdit'

function page() {
  return (
    <div className="w-full">
      <Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Description
            </Header>
          </Divider>
          <AboutEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Skills
            </Header>
          </Divider>
          <SkillsEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Softwares
            </Header>
          </Divider>
          <SoftwareEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !font-alt !text-6xl !font-medium !text-secondary"
            >
              Experience
            </Header>
          </Divider>
          <ExperienceEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !font-alt !text-6xl !font-medium !text-secondary"
            >
              Education
            </Header>
          </Divider>
          <EducationEdit />
        </Segment>
      </Segment>
    </div>
  )
}

export default page
