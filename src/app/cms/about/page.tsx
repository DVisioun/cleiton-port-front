'use client'
import React, { useState } from 'react'
import { Divider, Header, Input, Segment } from 'semantic-ui-react'
import AboutEdit from '@/components/Molecule/AboutEdit/AboutEdit'
import SkillsEdit from '@/components/Molecule/SkillsEdit/SkillsEdit'
import SoftwareEdit from '@/components/Molecule/SoftwareEdit/SoftwareEdit'
import { ExperienceEducationEdit } from '@/components/Molecule/ExperienceEducationEdit/ExperienceEducationEdit'
import LinksEdit from '@/components/Molecule/LinksEdit/LinksEdit'
import Image from 'next/image'
import UserImageEdit from '@/components/Molecule/UserImageEdit/UserImageEdit'

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
    </div>
  )
}

export default page
