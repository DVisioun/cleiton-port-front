import { FieldValues } from 'react-hook-form'

export namespace API {
  export interface UserAuthenticationProps extends FieldValues {
    email: string
    password: string
  }

  // SOFTWARE
  export interface SoftwareSchema extends FieldValues {
    id: string
    name: string
    image: string
    created_at: Date
  }

  export interface SoftwareCreateFormProps extends FieldValues {
    name: string
    image: FileList
  }

  export interface SoftwareCreateRequestProps extends FieldValues {
    name: string
    image: string
  }

  export interface SoftwareUpdateRequestProps extends FieldValues {
    name?: string
    image?: string
  }

  export interface FetchSoftwareResponseProps {
    data: SoftwareSchema[] | []
    success: boolean
  }

  export interface CreateAndUpdateSoftwareResponseProps {
    message: string
    data: SoftwareSchema
    success: boolean
  }

  export interface DeleteSoftwareResponseProps {
    message: string
    success: boolean
  }

  // SKILLs
  export interface SkillSchema extends FieldValues {
    id: string
    name: string
  }

  export interface SkillCreateProps extends FieldValues {
    name: string
  }

  export interface FetchSkillResponseProps {
    data: SkillSchema[] | []
    success: boolean
  }

  export interface CreateAndUpdateSkillResponseProps {
    message: string
    data: SkillSchema
    success: boolean
  }

  export interface DeleteSkillResponseProps {
    message: string
    success: boolean
  }

  // BLOG POSTS
  export interface BlogPostCreateFormProps extends FieldValues {
    id: string
    name: string
    image: FileList
    content: string
  }

  export interface BlogPostEditFormProps extends FieldValues {
    id: string
    name: string
    content: string
    order: number
    image: File
  }

  export interface BlogPostSchema extends FieldValues {
    id: string
    name: string
    content: string
    image: string
    created_at: Date
  }

  export interface PortfolioPostSchema extends FieldValues {
    id: string
    name: string
    description: string
    flag_home?: boolean
    order?: number
    content: string
    image: string
    created_at: Date
    softwares: {
      portfolio_id: string
      software_id: string
    }[]
  }

  export interface BlogPostCreateProps extends FieldValues {
    name: string
    content: string
    image: string
    created_at: Date
  }

  export interface BlogPostEditProps extends FieldValues {
    id: string
    name?: string
    content?: string
    image?: string
    created_at?: Date
  }

  export interface FetchBlogPostsResponseProps {
    data: BlogPostCreateProps[] | []
    success: boolean
  }

  export interface CreateAndUpdateBlogPostResponseProps {
    message: string
    data: BlogPostSchema
    success: boolean
  }

  // LABELS
  export interface LabelSchema extends FieldValues {
    id?: string
    label?: string
    description?: string
    pt_content: string
    en_content: string
  }

  export interface FetchLabelsResponseProps {
    data: LabelSchema[] | []
    success: boolean
  }

  interface AboutEditSchema extends FieldValues {
    about: string
  }

  // USER ABOUT INFORMATION
  export interface FetchAboutResponseProps {
    data: AboutEditSchema[] | []
    success: boolean
  }

  // Home Post
  export interface HomePostProps extends FieldValues {
    id: string
    image: string
    order: number
  }

  export interface FetchHomePostProps {
    data: HomePostProps[] | []
  }
  // EXPERIENCE

  export interface ExperienceSchema extends FieldValues {
    id: string
    title: string
    organization: string
    location: string
    order: number
    description?: string
    initial_date: string
    final_date: string
    type: 'EXPERIENCE'
  }

  export interface ExperienceCreateRequestProps extends FieldValues {
    title: string
    organization: string
    location: string
    order: number
    description?: string
    initial_date: string
    final_date: string
    type: 'EXPERIENCE'
  }

  export interface CreateAndUpdateExperienceResponseProps {
    message: string
    data: ExperienceSchema
    success: boolean
  }

  export interface EducationSchema extends FieldValues {
    id: string
    title: string
    organization: string
    location: string
    order: number
    description?: string
    initial_date: string
    final_date: string
    type: 'EDUCATION'
  }

  export interface EducationCreateRequestProps extends FieldValues {
    title: string
    organization: string
    location: string
    order: number
    description?: string
    initial_date: string
    final_date: string
    type: 'EDUCATION'
  }

  export interface CreateAndUpdateEducationResponseProps {
    message: string
    data: EducationSchema
    success: boolean
  }
}
