import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Title from '@/components/Atom/Title/Title'
import TextAbout from '@/components/Atom/TextAbout/TextAbout'
import TextSkills from '@/components/Atom/TextSkills/TextSkills'
import Softwares from '@/components/Molecule/Softwares/Softwares'
import Experience from '@/components/Molecule/Experience/Experience'
import Education from '@/components/Molecule/Education/Education'
import AboutCard from '@/components/Atom/AboutCard/AboutCard'
import { useLanguage } from '@/hooks/LanguageContext'

function About() {
  const { language, setLanguage, refreshLanguage } = useLanguage()

  return (
    <div className="px-20 sm-1:px-4">
      <div className="mt-40 pb-20 sm-1:mt-20">
        <Grid>
          <GridRow columns={2}>
            <GridColumn mobile={16} tablet={16} largeScreen={4} widescreen={3}>
              <AboutCard />
            </GridColumn>
            <GridColumn
              mobile={16}
              tablet={16}
              largeScreen={12}
              widescreen={13}
            >
              <Title title={language === 'en' ? 'About' : 'Sobre Mim'} />
              <TextAbout language={language} />
              <Title title={language === 'en' ? 'Skills' : 'Habilidades'} />
              <TextSkills />
              <Title title={'Softwares'} />
              <Softwares />
              <Title title={language === 'en' ? 'Experience' : 'Experiência'} />
              <Experience language={language} />
              <Title title={language === 'en' ? 'Education' : 'Educação'} />
              <Education language={language} />
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    </div>
  )
}

export default About
