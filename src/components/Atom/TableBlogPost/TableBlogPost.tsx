'use client'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { fetchBlogPosts } from '@/api/BlogPost/fetch-blog-post'
import { blogPostAtom } from '@/states/blogPostAtom'
import { useAtom } from 'jotai'
import { faEdit, faFlag, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFlag as faFlagTwo } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction, useEffect } from 'react'
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
import { deleteBlogPost } from '@/api/BlogPost/delete-blog-post'

dayjs.locale(ptBr)

interface PostEditProps {
  setEditPost: Dispatch<SetStateAction<boolean>>
  setAddPost: Dispatch<SetStateAction<boolean>>
  setPostId: Dispatch<SetStateAction<string>>
}

export const TableBlogPost = ({
  setPostId,
  setEditPost,
  setAddPost,
}: PostEditProps) => {
  const [blogPosts, setBlogPosts] = useAtom(blogPostAtom)

  const handleBlogPostEdit = (id: string) => {
    setPostId(id)
    setEditPost(true)
    setAddPost(true)
  }

  const handleBlogPostsFetch = async () => {
    const response = await fetchBlogPosts()
    const orderedBlogPosts = response.data.sort(
      (a: { order: number }, b: { order: number }) => a.order - b.order,
    )
    setBlogPosts(orderedBlogPosts)
  }

  const handleDelete = async (id: string) => {
    await deleteBlogPost(id)
    setBlogPosts((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  useEffect(() => {
    handleBlogPostsFetch()
  }, [])

  return (
    <Table celled textAlign="center">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Order</TableHeaderCell>
          <TableHeaderCell>Flag Home</TableHeaderCell>
          <TableHeaderCell>Date Created</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
          <TableHeaderCell>Remove</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {blogPosts.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.order}</TableCell>
              <TableCell>
                {item.flag_home ? (
                  <FontAwesomeIcon icon={faFlag} height={30} fontSize={18} />
                ) : (
                  <FontAwesomeIcon icon={faFlagTwo} height={30} fontSize={18} />
                )}
              </TableCell>
              <TableCell>
                {dayjs(item.created_at).format('D[ de ]MMMM[, ]YYYY')}
              </TableCell>
              <TableCell textAlign="center">
                <FontAwesomeIcon
                  className="cursor-pointer duration-300 hover:scale-125"
                  icon={faEdit}
                  height={30}
                  fontSize={18}
                  onClick={() => handleBlogPostEdit(item.id)}
                />
              </TableCell>
              <TableCell textAlign="center">
                <FontAwesomeIcon
                  className="cursor-pointer duration-300 hover:scale-125"
                  icon={faTrash}
                  height={30}
                  fontSize={18}
                  onClick={() => handleDelete(item.id)}
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
