import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
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
      <ModalContent>
        <ModalDescription>
          <Grid>
            <GridRow columns={2}>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">{language ? 'Date' : 'Data'}</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">{language ? 'Title' : 'Título'}</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
            </GridRow>
            <GridRow columns={2}>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">
                  {language ? 'Institution' : 'Instituição'}
                </h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">
                  {language ? 'Location' : 'Localização'}
                </h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
            </GridRow>
            <GridRow columns={1}>
              <GridColumn mobile={16} computer={16} tablet={16}>
                <h4 className="mb-0">
                  {language ? 'Description' : 'Descrição'}
                </h4>
                <Form>
                  <TextArea />
                </Form>
              </GridColumn>
            </GridRow>
          </Grid>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          {language ? 'Nope' : 'Não'}
        </Button>
        <Button
          content={language ? "Yep, it's alright!" : 'Sim, está tudo certo!'}
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </ModalActions>
    </Modal>
  )
}

export default ModalEditExperience
