'use client'

import { Dispatch, SetStateAction, useEffect } from 'react'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { portfolioProjectAtom } from '@/states/portfolioProjectAtom'
import { useAtom } from 'jotai'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchPortfolioProjects } from '@/api/PortfolioProject/fetch-portfolio-project'
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
import { deletePortfolioProject } from '@/api/PortfolioProject/delete-portfolio-project'
import { notifyFailure, notifySuccess } from '@/utils/toastify'

dayjs.locale(ptBr)

interface TablePortfolioProjectProps {
  setEditProject: Dispatch<SetStateAction<boolean>>
  setAddProject: Dispatch<SetStateAction<boolean>>
  setProjectId: Dispatch<SetStateAction<string>>
}

export const TablePortfolioProject = ({
  setProjectId,
  setEditProject,
  setAddProject,
}: TablePortfolioProjectProps) => {
  const [portfolioProjects, setPortfolioProjects] =
    useAtom(portfolioProjectAtom)

  const handlePortfolioProjectEdit = (id: string) => {
    setProjectId(id)
    setEditProject(true)
    setAddProject(true)
  }

  const handlePortfolioProjectsFetch = async () => {
    const response = await fetchPortfolioProjects()
    if (response.data) {
      const orderedPortfolioProjects = response.data.sort(
        (a: { order: number }, b: { order: number }) => a.order - b.order,
      )
      setPortfolioProjects(orderedPortfolioProjects)
    }
  }

  const handlePortfolioProjectDelete = async (id: string) => {
    const response = await deletePortfolioProject(id)
    if (response?.success) {
      notifySuccess(response.message)
      const portfolioProjectsFiltered = portfolioProjects.filter(
        (item) => item.id !== id,
      )
      setPortfolioProjects(portfolioProjectsFiltered)
    } else {
      notifyFailure(response.message)
    }
  }

  useEffect(() => {
    handlePortfolioProjectsFetch()
  }, [])

  return (
    <Table celled textAlign="center">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Order</TableHeaderCell>
          <TableHeaderCell>Date Created</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
          <TableHeaderCell>Remove</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {portfolioProjects.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.order}</TableCell>
              <TableCell>
                {dayjs(item.created_at).format('D[ de ]MMMM[, ]YYYY')}
              </TableCell>
              <TableCell textAlign="center">
                <FontAwesomeIcon
                  className="cursor-pointer duration-300 hover:scale-125"
                  icon={faEdit}
                  height={30}
                  fontSize={18}
                  onClick={() => handlePortfolioProjectEdit(item.id)}
                />
              </TableCell>
              <TableCell textAlign="center">
                <FontAwesomeIcon
                  className="cursor-pointer duration-300 hover:scale-125"
                  icon={faTrash}
                  height={30}
                  fontSize={18}
                  onClick={() => handlePortfolioProjectDelete(item.id)}
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableHeaderCell colSpan="6">
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
