import React from "react";
import ThemeProvider from "@/hooks/ThemeContext";
import Header from "@/components/Molecule/Header/Header";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import CardExampleCard from "@/components/Atom/AboutCard/AboutCard";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";

function page() {
  return (
    <div className="bg-primary text-primary h-full">
      <ThemeProvider initialTheme="light">
        <Header />
        <ConfigContent />
        <div className="px-20">
          <div className="mt-40">
            <Grid>
              <GridRow columns={2} only="large screen">
                <GridColumn width={4}>
                  <CardExampleCard />
                </GridColumn>
                <GridColumn width={12}>
                  <p>About</p>
                </GridColumn>
              </GridRow>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default page;
