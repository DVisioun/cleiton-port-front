import NavbarSocial from '@/components/Atom/NavbarSocial/NavbarSocial'
import { TeamLogo } from '@/components/Atom/TeamLogo/TeamLogo'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

export const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <Grid className="!mx-auto">
        <GridRow columns={3}>
          <GridColumn
            className="!p-0"
            mobile={1}
            tablet={5}
            computer={5}
            largeScreen={5}
            widescreen={5}
          ></GridColumn>
          <GridColumn
            className="!p-0"
            mobile={1}
            tablet={6}
            computer={6}
            largeScreen={6}
            widescreen={6}
          >
            <NavbarSocial />
          </GridColumn>
          <GridColumn
            className="!p-0"
            mobile={16}
            tablet={5}
            computer={5}
            largeScreen={5}
            widescreen={5}
          >
            <TeamLogo />
          </GridColumn>
        </GridRow>
      </Grid>
    </footer>
  )
}
