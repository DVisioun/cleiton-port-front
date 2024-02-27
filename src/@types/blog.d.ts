export namespace Blog {
  export interface CardBlogProps {
    data: {
      name: string
      order: number
      content: string
      flag_home: boolean
      image: string
      created_at: Date
    }
  }
}
