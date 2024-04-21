import ModalCreateNewExperience from '@/components/Atom/ModalCreateNewExperience/ModalCreateNewExperience'
import ModalEditEducation from '@/components/Atom/ModalEditEducation/ModalEditEducation'
import ModalEditExperience from '@/components/Atom/ModalEditExperience/ModalEditExperience'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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

function ExperienceEdit() {
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
                  <ModalEditExperience language={true} />
                  <FontAwesomeIcon
                    icon={faTrash}
                    height={12}
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ModalCreateNewExperience />
        </GridColumn>
        <GridColumn mobile={16} computer={8} tablet={16}>
          <div className="flex items-center justify-start gap-4">
            <Flag country="US" size={25} className="mb-2" />
            <Flag country="BR" size={25} className="mb-2" />
          </div>
          <Table celled structured>
            <TableHeader>
              <TableRow>
                <TableHeaderCell width={13}>Education</TableHeaderCell>
                <TableHeaderCell width={3}>Operation</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Aden</TableCell>
                <TableCell textAlign="center">
                  <ModalEditEducation language={true} />
                  <FontAwesomeIcon
                    icon={faTrash}
                    height={12}
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            type="submit"
            content="Create Education"
            primary
            className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
          />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default ExperienceEdit
