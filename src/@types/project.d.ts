export namespace Portfolio {
  export interface PortfolioProjectSchema {
    id: string
    name: string
    description: string
    content: string
    order?: number
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
    content: string
    order?: number
    created_at: Date
    image: FileList
    softwares: string[]
  }

  export interface CreatePortfolioProjectRequestProps extends FieldsValue {
    name: string
    description: string
    content: string
    image: string
    softwares: {
      id: string
    }[]
  }

  export interface PortfolioFetchSchema {
    id: string
    name: string
    description: string
    content: string
    order?: number
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
    content: string
    description: string
    order: number
    created_at: Date
  }
}
