import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import ThemeProvider from '@/hooks/ThemeContext'
import Header from '@/components/Molecule/Header/Header'
import AboutCard from '@/components/Atom/AboutCard/AboutCard'
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
        <Header bgColor="bg-primary" />
        <ConfigContent />
        <div className="sm-1:px-4 px-20">
          <div className="sm-1:mt-20 mt-40 pb-20">
            <Grid>
              <GridRow columns={2}>
                <GridColumn
                  mobile={16}
                  tablet={16}
                  computer={16}
                  largeScreen={4}
                  widescreen={3}
                >
                  <AboutCard />
                </GridColumn>
                <GridColumn
                  mobile={16}
                  tablet={16}
                  computer={16}
                  largeScreen={12}
                  widescreen={13}
                >
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
