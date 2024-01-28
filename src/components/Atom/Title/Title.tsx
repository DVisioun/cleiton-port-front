import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <div className="w-full !p-0">
      <Grid className="w-full items-center !p-0">
        <GridRow columns={3} only="large screen" className="!p-0">
          <GridColumn width={7} className="!p-0">
            <div className="flex items-center h-full">
              <div className="h-[2px] w-full bg-[var(--secondary)] "></div>
            </div>
          </GridColumn>
          <GridColumn width={2}>
            <h4 className="m-0 font-q text-6xl font-medium text-secondary text-center">
              {title}
            </h4>
          </GridColumn>
          <GridColumn width={7}>
            <div className="flex items-center h-full">
              <div className="h-[2px] w-full bg-[var(--secondary)]"></div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Title;
