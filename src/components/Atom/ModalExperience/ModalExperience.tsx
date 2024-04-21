import { API } from '@/@types/api'
import { addExperience } from '@/api/Experience/add-experience'
import { experienceAtom } from '@/states/experienceAtom'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
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
}

export function ModalExperience({ isEdit, setIsEdit }: ModalExperienceProps) {
  const [open, setOpen] = useState(false)
  const [experience, setExperience] = useAtom(experienceAtom)
  const { register, reset, handleSubmit } =
    useForm<API.ExperienceCreateRequestProps>()

  const onSubmit = async (data) => {
    const requestExperienceObject = {
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

    const response: any = await addExperience(requestExperienceObject)
    if (response && response.success) {
      setExperience([...experience, response.data])
      notifySuccess(response.message)
      reset()
    } else {
      notifyFailure(response.message)
    }
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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