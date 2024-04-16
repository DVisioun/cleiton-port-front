export namespace About {
  export interface CardExperienceEducationProps {
    id: string
    title: string
    organization: string
    location: string
    description: string
    initial_date: string
    final_date?: string
  }

  export interface CreateExperienceEducationProps {
    title: string
    organization: string
    location: string
    description: string
    initial_date: string
    final_date?: string
  }
}

export interface AboutCardTypes {
  position: string
}
