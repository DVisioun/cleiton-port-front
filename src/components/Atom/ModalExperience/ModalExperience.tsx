import { API } from '@/@types/api'
import { addExperience } from '@/api/Experience/add-experience'
import { editExperience } from '@/api/Experience/edit-experience'
import { experienceAtom } from '@/states/experienceAtom'
import { labelAtom } from '@/states/labelsAtom'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
  TextArea,
} from 'semantic-ui-react'

interface ModalExperienceProps {
  isEdit: boolean
  setIsEdit: (isEdit: boolean) => void
  selectedItem?: { id: string }
}

export function ModalExperience({
  isEdit,
  setIsEdit,
  selectedItem,
}: ModalExperienceProps) {
  const [open, setOpen] = useState(false)
  const [experience, setExperience] = useAtom(experienceAtom)
  const [label, setLabel] = useAtom(labelAtom)
  const { register, reset, handleSubmit, setValue } =
    useForm<API.ExperienceCreateRequestProps>()

  const handleCloseModal = () => {
    setOpen(false)
    setIsEdit(false)
    reset()
  }

  const onSubmit = async (data) => {
    if (isEdit) {
      const experienceEdit = experience.find(
        (item) => item.id === selectedItem?.id,
      )

      if (!experienceEdit) return

      const requestEducationObject = {
        title: {
          en: data.title,
          pt: data.titulo,
        },
        location: {
          en: data.location,
          pt: data.localizacao,
        },
        organization: {
          en: data.organization,
          pt: data.organizacao,
        },
        description: {
          en: data.description,
          pt: data.descricao,
        },
        initial_date: {
          en: data.initial_date,
          pt: data.data_inicial,
        },
        final_date: {
          en: data.final_date,
          pt: data.data_final,
        },
      }

      const response: any = await editExperience(
        requestEducationObject,
        experienceEdit,
        label,
      )

      if (response && response.success) {
        notifySuccess(response.message)
        handleCloseModal()
      } else {
        notifyFailure(response.message)
        handleCloseModal()
      }
    } else {
      const requestEducationObject = {
        title: {
          en: data.title,
          pt: data.titulo,
        },
        location: {
          en: data.location,
          pt: data.localizacao,
        },
        organization: {
          en: data.organization,
          pt: data.organizacao,
        },
        description: {
          en: data.description,
          pt: data.descricao,
        },
        initial_date: {
          en: data.initial_date,
          pt: data.data_inicial,
        },
        final_date: {
          en: data.final_date,
          pt: data.data_final,
        },
      }

      const response: any = await addExperience(requestEducationObject)
      if (response && response.success) {
        setExperience([...experience, response.data])
        notifySuccess(response.message)
        handleCloseModal()
      } else {
        notifyFailure(response.message)
        handleCloseModal()
      }
    }
  }

  useEffect(() => {
    if (isEdit) setOpen(true)
  }, [isEdit])

  useEffect(() => {
    if (isEdit && selectedItem) {
      const educationEdit = experience.find(
        (item) => item.id === selectedItem?.id,
      )

      if (!educationEdit) return

      setValue(
        'title',
        label.find((item) => item.label === educationEdit?.title)?.en_content,
      )
      setValue(
        'titulo',
        label.find((item) => item.label === educationEdit?.title)?.pt_content,
      )
      setValue(
        'initial_date',
        label.find((item) => item.label === educationEdit?.initial_date)
          ?.en_content,
      )
      setValue(
        'data_inicial',
        label.find((item) => item.label === educationEdit?.initial_date)
          ?.pt_content,
      )
      setValue(
        'final_date',
        label.find((item) => item.label === educationEdit?.final_date)
          ?.en_content,
      )
      setValue(
        'data_final',
        label.find((item) => item.label === educationEdit?.final_date)
          ?.pt_content,
      )
      setValue(
        'organization',
        label.find((item) => item.label === educationEdit?.organization)
          ?.en_content,
      )
      setValue(
        'organizacao',
        label.find((item) => item.label === educationEdit?.organization)
          ?.pt_content,
      )
      setValue(
        'location',
        label.find((item) => item.label === educationEdit?.location)
          ?.en_content,
      )
      setValue(
        'localizacao',
        label.find((item) => item.label === educationEdit?.location)
          ?.pt_content,
      )
      setValue(
        'description',
        label.find((item) => item.label === educationEdit?.description)
          ?.en_content,
      )
      setValue(
        'descricao',
        label.find((item) => item.label === educationEdit?.description)
          ?.pt_content,
      )
    }
  }, [isEdit, selectedItem])

  return (
    <Modal
      onClose={() => handleCloseModal()}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          content="Create Experience"
          primary
          className="!mt-4 sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
        />
      }
    >
      <ModalHeader className="!flex !items-center !justify-between">
        {'Create Experience'}
      </ModalHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6"
      >
        <div>
          <ModalContent>
            <ModalDescription>
              <Grid>
                <GridRow columns={2}>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Initial Date</h4>
                    <Input>
                      <input type="text" {...register('initial_date')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Final Date</h4>
                    <Input>
                      <input type="text" {...register('final_date')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="!mt-6 mb-0">Title</h4>
                    <Input>
                      <input type="text" {...register('title')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="!mt-6 mb-0">Institution</h4>
                    <Input>
                      <input type="text" {...register('organization')} />
                    </Input>
                  </GridColumn>
                </GridRow>
                <GridRow columns={2}>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Location</h4>
                    <Input>
                      <input type="text" {...register('location')} />
                    </Input>
                  </GridColumn>
                </GridRow>
                <GridRow columns={1}>
                  <GridColumn mobile={16} computer={16} tablet={16}>
                    <h4 className="mb-0">Description</h4>
                    <div className="w-full rounded-lg border">
                      <TextArea
                        className="!w-full"
                        {...register('description')}
                      />
                    </div>
                  </GridColumn>
                </GridRow>
              </Grid>
            </ModalDescription>
          </ModalContent>
        </div>
        <hr />
        <div>
          <ModalContent>
            <ModalDescription>
              <Grid>
                <GridRow columns={2}>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Data inicial</h4>
                    <Input>
                      <input type="text" {...register('data_inicial')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Data final</h4>
                    <Input>
                      <input type="text" {...register('data_final')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="!mt-6 mb-0">Título</h4>
                    <Input>
                      <input type="text" {...register('titulo')} />
                    </Input>
                  </GridColumn>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="!mt-6 mb-0">Organização</h4>
                    <Input>
                      <input type="text" {...register('organizacao')} />
                    </Input>
                  </GridColumn>
                </GridRow>
                <GridRow columns={2}>
                  <GridColumn mobile={16} computer={8} tablet={16}>
                    <h4 className="mb-0">Localização</h4>
                    <Input>
                      <input type="text" {...register('localizacao')} />
                    </Input>
                  </GridColumn>
                </GridRow>
                <GridRow columns={1}>
                  <GridColumn mobile={16} computer={16} tablet={16}>
                    <h4 className="mb-0">Descrição</h4>
                    <div className="w-full rounded-lg border">
                      <TextArea
                        className="!w-full"
                        {...register('descricao')}
                      />
                    </div>
                  </GridColumn>
                </GridRow>
              </Grid>
            </ModalDescription>
          </ModalContent>
          <ModalActions>
            <div className="flex w-full items-center justify-end gap-4 pt-3">
              <Button
                type="button"
                color="black"
                onClick={() => handleCloseModal()}
              >
                Cancelar
              </Button>
              <Button
                content="Salvar"
                labelPosition="right"
                icon="checkmark"
                type="submit"
                positive
              />
            </div>
          </ModalActions>
        </div>
      </form>
    </Modal>
  )
}
