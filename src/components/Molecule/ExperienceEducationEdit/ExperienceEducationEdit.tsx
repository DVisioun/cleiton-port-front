import { ModalExperience } from '@/components/Atom/ModalExperience/ModalExperience'
import { ModalEducation } from '@/components/Atom/ModalEducation/ModalEducation'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
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
import { fetchExperience } from '@/api/Experience/fetch-experiences'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { useAtom } from 'jotai'
import { educationAtom } from '@/states/educationAtom'
import { experienceAtom } from '@/states/experienceAtom'
import { fetchLabels } from '@/api/Labels/fetch-labels'
import { labelAtom } from '@/states/labelsAtom'
import { removeExperience } from '@/api/Experience/remove-experience'
import { removeEducation } from '@/api/Education/remove-education'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'

export function ExperienceEducationEdit() {
  const [isEditEducation, setIsEditEducation] = useState(false)
  const [isEditExperience, setIsEditExperience] = useState(false)
  const [loading, setLoading] = useState(false)

  const [education, setEducation] = useAtom(educationAtom)
  const [experience, setExperience] = useAtom(experienceAtom)
  const [label, setLabel] = useAtom(labelAtom)

  const [selectedItem, setSelectedItem] = useState({ id: '' })

  const fetchAllExperienceEducation = async () => {
    const response: any = await fetchExperience()
    if (response && response.success) {
      setExperience(response.data.filter((item) => item.type === 'EXPERIENCE'))
      setEducation(response.data.filter((item) => item.type === 'EDUCATION'))
    } else {
      notifyFailure(response.message)
    }
  }

  const fetchAllLabels = async () => {
    const response: any = await fetchLabels()
    if (response && response.success) {
      setLabel(response.data)
    }
  }

  const handleDeleteExperienceEducation = async (item: any) => {
    setLoading(true)
    if (item.type === 'EDUCATION') {
      const response = await removeEducation(item, label)
      if (response && response.success) {
        fetchAllExperienceEducation()
        notifySuccess(response.message)
      } else {
        notifyFailure(response.message)
      }
    } else if (item.type === 'EXPERIENCE') {
      const response = await removeExperience(item, label)
      if (response && response.success) {
        fetchAllExperienceEducation()
        notifySuccess(response.message)
      } else {
        notifyFailure(response.message)
      }
    } else {
      notifyFailure('Error deleting!')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchAllExperienceEducation()
    fetchAllLabels()
  }, [])

  useEffect(() => {
    fetchAllLabels()
  }, [experience])

  return (
    <>
      <LoadingScreen loading={loading} />
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
                {experience?.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        {label?.map((l) => {
                          if (l.label === item.title) {
                            return l.pt_content
                          } else return ''
                        })}
                      </TableCell>
                      <TableCell textAlign="center">
                        <button
                          onClick={() => {
                            setIsEditExperience(true)
                            setSelectedItem({ id: item.id })
                          }}
                          className="mr-2"
                        >
                          <FontAwesomeIcon icon={faEdit} height={12} />
                        </button>
                        <button
                          onClick={() => handleDeleteExperienceEducation(item)}
                          className="mr-2"
                        >
                          <FontAwesomeIcon icon={faTrash} height={12} />
                        </button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
            <ModalExperience
              selectedItem={selectedItem}
              isEdit={isEditExperience}
              setIsEdit={setIsEditExperience}
              fetchAllExperienceEducation={fetchAllExperienceEducation}
              setLoading={setLoading}
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
                  <TableHeaderCell width={13}>Education</TableHeaderCell>
                  <TableHeaderCell width={3}>Operation</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {education?.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        {label.map((l) => {
                          if (l.label === item.title) return l.pt_content
                          else return ''
                        })}
                      </TableCell>
                      <TableCell textAlign="center">
                        <button
                          onClick={() => {
                            setIsEditEducation(true)
                            setSelectedItem({ id: item.id })
                          }}
                          className="mr-2"
                        >
                          <FontAwesomeIcon icon={faEdit} height={12} />
                        </button>
                        <button
                          onClick={() => handleDeleteExperienceEducation(item)}
                          className="mr-2"
                        >
                          <FontAwesomeIcon icon={faTrash} height={12} />
                        </button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
            <ModalEducation
              selectedItem={selectedItem}
              isEdit={isEditEducation}
              setIsEdit={setIsEditEducation}
              fetchAllExperienceEducation={fetchAllExperienceEducation}
              setLoading={setLoading}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  )
}
