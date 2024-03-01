export namespace Portfolio {
  // PORTFOLIO PROJECTS
  interface ImagePortfolioSchema {
    id: string
    image: string
    format_type: string
    project_id: string
  }

  export interface PortfolioProjectSchema {
    id: string
    name: string
    description: string
    order?: number
    flag_home: boolean
    created_at: Date
    image: string
    softwares: {
      software_id: string
    }[]
  }

  export interface CreatePortfolioProjectFormProps extends FieldsValue {
    id: string
    name: string
    description: string
    order?: number
    flag_home: boolean
    created_at: Date
    image: File
    softwares: string[]
  }

  export interface PortfolioFetchSchema {
    id: string
    name: string
    description: string
    order?: number
    flag_home: boolean
    created_at: Date
    image: string
    softwares: {
      id: string
    }[]
  }

  export interface FetchPortfolioProjectsResponseProps {
    data: PortfolioFetchSchema[] | []
    success: boolean
  }

  export interface CreateUpdatePortfolioProjectResponseProps {
    id: string
    name: string
    description: string
    order: number
    flag_home: boolean
    created_at: Date
  }
}
