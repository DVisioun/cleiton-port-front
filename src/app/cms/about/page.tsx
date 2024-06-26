'use client'
import React from 'react'
import { Divider, Header, Segment } from 'semantic-ui-react'
import AboutEdit from '@/components/Molecule/AboutEdit/AboutEdit'
import SkillsEdit from '@/components/Molecule/SkillsEdit/SkillsEdit'
import SoftwareEdit from '@/components/Molecule/SoftwareEdit/SoftwareEdit'
import { ExperienceEducationEdit } from '@/components/Molecule/ExperienceEducationEdit/ExperienceEducationEdit'
import UserImageEdit from '@/components/Molecule/UserImageEdit/UserImageEdit'
import LinksEdit from '@/components/Molecule/LinksEdit/LinksEdit'
import OtherDataEdit from '@/components/Molecule/OtherDataEdit/OtherDataEdit'

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
              User image
            </Header>
          </Divider>
          <UserImageEdit />
        </Segment>
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
              Experience and Education
            </Header>
          </Divider>
          <ExperienceEducationEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Links
            </Header>
          </Divider>
          <LinksEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Other Information
            </Header>
          </Divider>
          <OtherDataEdit />
        </Segment>
      </Segment>
    </div>
  )
}

export default page
