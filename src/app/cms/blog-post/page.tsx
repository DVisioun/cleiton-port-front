import PostEdit from '@/components/Molecule/PostEdit/PostEdit'
import React from 'react'
import {
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Segment,
} from 'semantic-ui-react'

function page() {
  return (
    <div className="w-full">
      <Segment>
        <Segment>
          <Divider horizontal>
            <Header
              as="h4"
              className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
            >
              Blog Post
            </Header>
          </Divider>
          <PostEdit />
        </Segment>
      </Segment>
    </div>
  )
}

export default page
