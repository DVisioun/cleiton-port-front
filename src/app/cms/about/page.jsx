'use client'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Grid, GridColumn, GridRow, Segment, Table, TableBody, TableHeader, TableHeaderCell, TableRow, TableCell } from 'semantic-ui-react'
import AboutEdit from '@/components/Molecule/AboutEdit/AboutEdit'
import SkillsEdit from '@/components/Molecule/SkillsEdit/SkillsEdit'
import SoftwareEdit from '@/components/Molecule/SoftwareEdit/SoftwareEdit'
import ExperienceEdit from '@/components/Molecule/ExperienceEdit/ExperienceEdit'
import EducationEdit from '@/components/Molecule/EducationEdit/EducationEdit'
import ModalEditEducation from '@/components/Atom/ModalEditEducation/ModalEditEducation'

function page() {
  return (
    <div className='w-full'>
      <Segment>
        <AboutEdit />
        <Grid>
          <GridRow columns={2}>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <SkillsEdit />
            </GridColumn>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <SoftwareEdit />
            </GridColumn>
          </GridRow>
        </Grid>
        <ExperienceEdit />
        <EducationEdit />
      </Segment>
    </div>
  )
}

export default page