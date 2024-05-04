'use client'

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react'

export const TableHomeImages = () => {
  return (
    <Table celled textAlign="center">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Image</TableHeaderCell>
          <TableHeaderCell>Order</TableHeaderCell>
          <TableHeaderCell>Remove</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>Imagem 1</TableCell>
          <TableCell textAlign="center">1</TableCell>
          <TableCell textAlign="center">
            <FontAwesomeIcon
              className="cursor-pointer duration-300 hover:scale-125"
              icon={faTrash}
              height={30}
              fontSize={18}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
