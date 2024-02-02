import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CardBlog from '@/components/Atom/CardBlog/CardBlog'
import Title from '@/components/Atom/Title/Title'

function Blog() {

  return (
    <div className='px-[80px] sm-1:px-[20px] mt-40 pb-20'>
      <Title title="Blog" />
      <Grid className="lg:!mx-auto !my-10 px-0">
        <GridRow columns={2} className='sm-1:!gap-10 md-1:!gap-10 !px-0' >
            <GridColumn
              mobile={16}
              computer={8}
              tablet={16}
              largeScreen={8}
              className='!px-0'
            >
              <CardBlog />
            </GridColumn>
            <GridColumn
              mobile={16}
              computer={8}
              tablet={16}
              largeScreen={8}
              className='!px-0'
            >
              <CardBlog />
            </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default Blog
