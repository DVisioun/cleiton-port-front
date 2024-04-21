import { API } from '@/@types/api'
import { addExperience } from '@/api/Experience/add-experience'
import { experienceAtom } from '@/states/experienceAtom'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Input,
  Label,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
  TextArea,
} from 'semantic-ui-react'

interface ModalEditExperienceProps {
  language: boolean
}

function ModalEditExperience({ language }: ModalEditExperienceProps) {
  const [open, setOpen] = useState(false)
  const [experience, setExperience] = useAtom(experienceAtom)
  const { register, reset, handleSubmit } =
    useForm<API.ExperienceCreateRequestProps>()

  const onSubmit = async (data: API.ExperienceCreateRequestProps) => {
    const requestExperienceObject = {
      title: data.title,
      location: data.location,
      organization: data.organization,
      description: data.description,
      initial_date: data.initial_date,
      final_date: data.final_date,
      type: data.type,
      order: data.order,
    }

    const response: API.CreateAndUpdateExperienceResponseProps =
      await addExperience(requestExperienceObject)
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
        <button className="mr-2">
          <FontAwesomeIcon icon={faEdit} height={12} />
        </button>
      }
    >
      <ModalHeader>
        {language ? 'Editing Experience' : 'Editando Experiência'}
      </ModalHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4"
      >
        <ModalContent>
          <ModalDescription>
            <Grid>
              <GridRow columns={2}>
                <GridColumn mobile={16} computer={8} tablet={16}>
                  <h4 className="mb-0">{language ? 'Initial Date' : 'Data'}</h4>
                  <Input>
                    <input type="text" {...register('initial_date')} />
                  </Input>
                </GridColumn>
                <GridColumn mobile={16} computer={8} tablet={16}>
                  <h4 className="mb-0">{language ? 'Final Date' : 'Data'}</h4>
                  <Input>
                    <input type="text" {...register('final_date')} />
                  </Input>
                </GridColumn>
                <GridColumn mobile={16} computer={8} tablet={16}>
                  <h4 className="!mt-6 mb-0">
                    {language ? 'Title' : 'Título'}
                  </h4>
                  <Input>
                    <input type="text" {...register('title')} />
                  </Input>
                </GridColumn>
                <GridColumn mobile={16} computer={8} tablet={16}>
                  <h4 className="!mt-6 mb-0">
                    {language ? 'Institution' : 'Instituição'}
                  </h4>
                  <Input>
                    <input type="text" {...register('organization')} />
                  </Input>
                </GridColumn>
              </GridRow>
              <GridRow columns={2}>
                <GridColumn mobile={16} computer={8} tablet={16}>
                  <h4 className="mb-0">
                    {language ? 'Location' : 'Localização'}
                  </h4>
                  <Input>
                    <input type="text" {...register('location')} />
                  </Input>
                </GridColumn>
              </GridRow>
              <GridRow columns={1}>
                <GridColumn mobile={16} computer={16} tablet={16}>
                  <h4 className="mb-0">
                    {language ? 'Description' : 'Descrição'}
                  </h4>
                  <Form>
                    <TextArea {...register('description')} />
                  </Form>
                </GridColumn>
              </GridRow>
            </Grid>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <div className="flex w-full items-center justify-end gap-4">
            <Button color="black" onClick={() => setOpen(false)}>
              {language ? 'Nope' : 'Não'}
            </Button>
            <Button
              content={language ? 'Save!' : 'Salvar!'}
              labelPosition="right"
              icon="checkmark"
              type="submit"
              onClick={() => setOpen(false)}
              positive
            />
          </div>
        </ModalActions>
      </form>
    </Modal>
  )
}

export default ModalEditExperience
