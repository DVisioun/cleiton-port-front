import ModalEditExperience from '@/components/Atom/ModalEditExperience/ModalEditExperience'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Flag from 'react-flagkit'
import {
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
          <Flag country="US" size={25} className="mb-2" />
          <Table celled structured>
            <TableHeader>
              <TableRow>
                <TableHeaderCell width={13}>Name</TableHeaderCell>
                <TableHeaderCell width={3}>Operação</TableHeaderCell>
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
        </GridColumn>
        <GridColumn
          mobile={16}
          computer={8}
          tablet={16}
          className="sm-1:!mt-10 md-1:!mt-10"
        >
          <Flag country="BR" size={25} className="mb-2" />
          <Table celled structured>
            <TableHeader>
              <TableRow>
                <TableHeaderCell width={13}>Name</TableHeaderCell>
                <TableHeaderCell width={3}>Operação</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Aden</TableCell>
                <TableCell textAlign="center">
                  <ModalEditExperience language={false} />
                  <FontAwesomeIcon
                    icon={faTrash}
                    height={12}
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default ExperienceEdit
