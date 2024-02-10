import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import CardBlog from "@/components/Atom/CardBlog/CardBlog";
import Title from "@/components/Atom/Title/Title";
import { Footer } from "../Footer/Footer";

function Blog() {
  return (
    <div className="min-h-[calc(100%-90px)] px-[80px] pb-20 pt-40 sm-1:px-[20px] sm-1:pt-10">
      <Title title="Blog" />
      <Grid className="!my-10 px-0 lg:!mx-auto">
        <GridRow columns={2} className="!px-0 sm-1:!gap-10 md-1:!gap-10">
          <GridColumn
            mobile={16}
            computer={8}
            tablet={16}
            largeScreen={8}
            className="!px-0"
          >
            <CardBlog />
          </GridColumn>
          <GridColumn
            mobile={16}
            computer={8}
            tablet={16}
            largeScreen={8}
            className="!px-0"
          >
            <CardBlog />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Blog;
