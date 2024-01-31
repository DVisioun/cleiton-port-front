import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <div className="w-full">
      <Grid className="w-full items-center">
        <GridRow columns={3} only="large screen">
          <GridColumn width={6}>
            <div className="flex h-full items-center">
              <div className="h-[2px] w-full bg-[var(--secondary)] "></div>
            </div>
          </GridColumn>
          <GridColumn width={4}>
            <h4 className="m-0 text-center font-alt text-6xl font-medium text-secondary">
              {title}
            </h4>
          </GridColumn>
          <GridColumn width={6}>
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
