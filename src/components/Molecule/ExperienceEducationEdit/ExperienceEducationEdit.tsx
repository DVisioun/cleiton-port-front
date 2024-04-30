import { ModalExperience } from '@/components/Atom/ModalExperience/ModalExperience'
import { ModalEducation } from '@/components/Atom/ModalEducation/ModalEducation'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Flag from 'react-flagkit'
import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react'

export function ExperienceEducationEdit() {
  const [isEditEducation, setIsEditEducation] = useState(false)
  const [isEditExperience, setIsEditExperience] = useState(false)
  return (
    <Grid>
      <GridRow columns={2}>
        <GridColumn mobile={16} computer={8} tablet={16}>
          <div className="flex items-center justify-start gap-4">
            <Flag country="US" size={25} className="mb-2" />
            <Flag country="BR" size={25} className="mb-2" />
          </div>
          <Table celled structured>
            <TableHeader>
              <TableRow>
                <TableHeaderCell width={13}>Experience</TableHeaderCell>
                <TableHeaderCell width={3}>Operation</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Aden</TableCell>
                <TableCell textAlign="center">
                  <button
                    onClick={() => setIsEditExperience(true)}
                    className="mr-2"
                  >
                    <FontAwesomeIcon icon={faEdit} height={12} />
                  </button>
                  <button className="mr-2">
                    <FontAwesomeIcon icon={faTrash} height={12} />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ModalExperience
            isEdit={isEditExperience}
            setIsEdit={setIsEditExperience}
          />
        </GridColumn>
        <GridColumn mobile={16} computer={8} tablet={16}>
          <div className="flex items-center justify-start gap-4">
            <Flag country="US" size={25} className="mb-2" />
            <Flag country="BR" size={25} className="mb-2" />
          </div>
          <Table celled structured>
            <TableHeader>
              <TableRow>
                <TableHeaderCell width={13}>Experience</TableHeaderCell>
                <TableHeaderCell width={3}>Operation</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Aden</TableCell>
                <TableCell textAlign="center">
                  <button
                    onClick={() => setIsEditEducation(true)}
                    className="mr-2"
                  >
                    <FontAwesomeIcon icon={faEdit} height={12} />
                  </button>
                  <button className="mr-2">
                    <FontAwesomeIcon icon={faTrash} height={12} />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ModalEducation
            isEdit={isEditEducation}
            setIsEdit={setIsEditEducation}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}
