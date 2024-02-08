import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <div className="my-4 w-full lg:flex lg:justify-center">
      <Grid className="sm:flex sm:w-full">
        <GridRow columns={3}>
          <GridColumn mobile={5} computer={6} tablet={5}>
            <div className="flex h-full items-center">
              <div className="h-[2px] w-full bg-[var(--secondary)] "></div>
            </div>
          </GridColumn>
          <GridColumn mobile={6} computer={4} tablet={6}>
            <h4 className="sm-1:text-5xl m-0 text-center font-alt text-6xl font-medium text-secondary">
              {title}
            </h4>
          </GridColumn>
          <GridColumn mobile={5} computer={6} tablet={5}>
            <div className="flex h-full items-center">
              <div className="h-[2px] w-full bg-[var(--secondary)]"></div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default Title
