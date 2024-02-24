import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
} from "semantic-ui-react";

function ModalEditEducation({}) {
  const [open, setOpen] = useState(false);

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
      <ModalHeader>Editing Education</ModalHeader>
      <ModalContent>
        <ModalDescription>
          <Grid>
            <GridRow columns={2}>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">Date</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">Title</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
            </GridRow>
            <GridRow columns={2}>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">Instituition</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
              <GridColumn mobile={16} computer={8} tablet={16}>
                <h4 className="mb-0">Location</h4>
                <Input>
                  <input type="text" />
                </Input>
              </GridColumn>
            </GridRow>
            <GridRow columns={1}>
              <GridColumn mobile={16} computer={16} tablet={16}>
                <h4 className="mb-0">Description</h4>
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
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </ModalActions>
    </Modal>
  );
}

export default ModalEditEducation;
