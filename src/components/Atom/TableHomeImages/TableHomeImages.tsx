'use client'

import { removeImage } from '@/api/HomeImages/remove-image'
import { HomeImage, homeImageAtom } from '@/states/homeImagesAtom'
import { notifySuccess } from '@/utils/toastify'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAtom } from 'jotai'
import { Dispatch, SetStateAction } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react'

interface TableHomeImagesProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const TableHomeImages = ({ setLoading }: TableHomeImagesProps) => {
  const [images, setImages] = useAtom(homeImageAtom)

  const handleRemoveImage = async (id: string) => {
    setLoading(true)
    const response = await removeImage(id)
    if (response && response.success) {
      notifySuccess(response.message)
      setImages(images.filter((item) => item.id !== id))
    } else {
      notifySuccess(response.message)
    }
    setLoading(false)
  }
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
        {images
          ? images.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>Image {item.order}</TableCell>
                  <TableCell textAlign="center">{item.order}</TableCell>
                  <TableCell textAlign="center">
                    <FontAwesomeIcon
                      onClick={() => handleRemoveImage(item.id)}
                      className="cursor-pointer duration-300 hover:scale-125"
                      icon={faTrash}
                      height={30}
                      fontSize={18}
                    />
                  </TableCell>
                </TableRow>
              )
            })
          : null}
      </TableBody>
    </Table>
  )
}
