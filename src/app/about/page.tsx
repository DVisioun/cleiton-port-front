import React from 'react'
import ThemeProvider from '@/hooks/ThemeContext'
import Header from '@/components/Molecule/Header/Header'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CardExampleCard from '@/components/Atom/AboutCard/AboutCard'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import Title from '@/components/Atom/Title/Title'
import TextAbout from '@/components/Atom/TextAbout/TextAbout'
import TextSkills from '@/components/Atom/TextSkills/TextSkills'
import Softwares from '@/components/Molecule/Softwares/Softwares'
import Experience from '@/components/Molecule/Experience/Experience'
import Education from '@/components/Molecule/Education/Education'

function page() {
  return (
    <div className="h-full bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header />
        <ConfigContent />
        <div className="px-20">
          <div className="mt-40 pb-20">
            <Grid>
              <GridRow columns={2} only="large screen">
                <GridColumn width={3}>
                  <CardExampleCard />
                </GridColumn>
                <GridColumn width={13}>
                  <Title title="About" />
                  <TextAbout />
                  <Title title="Skills" />
                  <TextSkills />
                  <Title title="Softwares" />
                  <Softwares />
                  <Title title="Experience" />
                  <Experience />
                  <Title title="Education" />
                  <Education />
                </GridColumn>
              </GridRow>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default page
