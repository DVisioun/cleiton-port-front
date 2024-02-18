import ModalEditEducation from "@/components/Atom/ModalEditEducation/ModalEditEducation";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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
} from "semantic-ui-react";

function EducationEdit() {
  return (
    <Grid>
      <GridRow columns={2}>
        <GridColumn mobile={16} computer={8} tablet={16}>
          <h3>Education - EN</h3>
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
                <TableCell textAlign="right">
                  <ModalEditEducation />
                  <FontAwesomeIcon icon={faTrash} />
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
          <h3>Education - PT</h3>
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
                <TableCell textAlign="right">
                  <ModalEditEducation />
                  <FontAwesomeIcon icon={faTrash} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default EducationEdit;
