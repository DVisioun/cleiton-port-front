import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <div className="my-4 w-full lg:flex lg:justify-center">
      <Grid className="sm:flex sm:w-full">
        <GridRow columns={3} className="sm-1:!flex-nowrap">
          <GridColumn mobile={1} computer={6} tablet={6}>
            <div className="flex h-full items-center">
              <div className="h-[2px] w-full bg-[var(--secondary)] sm-2:hidden"></div>
            </div>
          </GridColumn>
          <GridColumn mobile={14} computer={4} tablet={4}>
            <h4 className="m-0 text-center font-alt text-6xl font-medium text-secondary sm-1:text-5xl">
              {title}
            </h4>
          </GridColumn>
          <GridColumn mobile={1} computer={6} tablet={6}>
            <div className="flex h-full items-center">
              <div className="h-[2px] w-full bg-[var(--secondary)] sm-2:hidden"></div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default Title
