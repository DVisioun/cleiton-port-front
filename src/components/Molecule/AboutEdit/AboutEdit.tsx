import React from 'react'
import { Form, Grid, GridColumn, GridRow, TextArea } from 'semantic-ui-react'

function AboutEdit() {
    return (
        <Grid>
            <GridRow columns={2}>
                <GridColumn mobile={16} computer={8} tablet={16}>
                    <h3>About - EN</h3>
                    <div className='mb-5'>
                        <h4>Text About</h4>
                        <Form>
                            <TextArea placeholder='About' />
                        </Form>
                    </div>
                </GridColumn>
                <GridColumn mobile={16} computer={8} tablet={16} className='sm-1:!mt-10 md-1:!mt-10'>
                    <h3>About - PT</h3>
                    <div>
                        <h4>Texto About</h4>
                        <Form>
                            <TextArea placeholder='About' />
                        </Form>
                    </div>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default AboutEdit