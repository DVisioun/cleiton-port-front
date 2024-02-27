import {
  Icon,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react'

export const TablePortfolioProject = () => {
  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Header</TableHeaderCell>
          <TableHeaderCell>Header</TableHeaderCell>
          <TableHeaderCell>Header</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
          <TableCell>Cell</TableCell>
        </TableRow>
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableHeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <MenuItem as="a" icon>
                <Icon name="chevron left" />
              </MenuItem>
              <MenuItem as="a">1</MenuItem>
              <MenuItem as="a">2</MenuItem>
              <MenuItem as="a">3</MenuItem>
              <MenuItem as="a">4</MenuItem>
              <MenuItem as="a" icon>
                <Icon name="chevron right" />
              </MenuItem>
            </Menu>
          </TableHeaderCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
