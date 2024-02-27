import { TablePortfolioProject } from '@/components/Atom/TablePortfolioProject/TablePortfolioProject'
import { Divider, Header } from 'semantic-ui-react'

export default function PortfolioPage() {
  return (
    <section className="pl-2 pr-6">
      <Divider horizontal>
        <Header
          as="h4"
          className="!sm-1:text-5xl !m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary"
        >
          Portfolio Projects
        </Header>
      </Divider>
      <TablePortfolioProject />
    </section>
  )
}
