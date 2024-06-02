'use client'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { fetchBlogPosts } from '@/api/BlogPost/fetch-blog-post'
import { blogPostAtom } from '@/states/blogPostAtom'
import { useAtom } from 'jotai'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
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
import { LoadingScreen } from '../Loading/Loading'

dayjs.locale(ptBr)

interface TableBlogPostProps {
  setEditPost: Dispatch<SetStateAction<boolean>>
  setAddPost: Dispatch<SetStateAction<boolean>>
  setPostId: Dispatch<SetStateAction<string>>
}

export const TableBlogPost = ({
  setPostId,
  setEditPost,
  setAddPost,
}: TableBlogPostProps) => {
  const [blogPosts, setBlogPosts] = useAtom(blogPostAtom)
  const [loading, setLoading] = useState(false)
  const handleBlogPostEdit = (id: string) => {
    setPostId(id)
    setEditPost(true)
    setAddPost(true)
  }

  const handleBlogPostsFetch = async () => {
    const response = await fetchBlogPosts()
    if (response.data) {
      const orderedBlogPosts = response.data.sort(
        (a: { order: number }, b: { order: number }) => a.order - b.order,
      )
      setBlogPosts(orderedBlogPosts)
    }
  }

  const handleDelete = async (id: string) => {
    setLoading(true)
    await deleteBlogPost(id)
    setBlogPosts((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
    setLoading(false)
  }

  useEffect(() => {
    handleBlogPostsFetch()
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      <Table celled textAlign="center">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
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
      </Table>
    </>
  )
}
