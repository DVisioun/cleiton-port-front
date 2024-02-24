import Image from "next/image";
import React from "react";
import Flag from "react-flagkit";
import { Form, Grid, GridColumn, GridRow, TextArea } from "semantic-ui-react";

function AboutEdit() {
  return (
    <Grid>
      <GridRow columns={2}>
        <GridColumn mobile={16} computer={8} tablet={16}>
          <div className="mb-5">
            <Flag country="US" size={25} className="mb-2" />
            <Form>
              <TextArea placeholder="About" />
            </Form>
          </div>
        </GridColumn>
        <GridColumn
          mobile={16}
          computer={8}
          tablet={16}
          className="sm-1:!mt-10 md-1:!mt-10"
        >
          <div>
            <Flag country="BR" size={25} className="mb-2" />
            <Form>
              <TextArea placeholder="About" />
            </Form>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default AboutEdit;
