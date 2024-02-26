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

  interface ImageFileProps extends FileList {
    0: File
    length: number
  }

  export interface SoftwareCreateFormProps extends FieldValues {
    name: string
    image: ImageFileProps
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

  interface BlogImage {
    id?: string
    file_name: string
    image: string
    format_type: string
  }

  export interface BlogPostSchema extends FieldValues {
    name: string
    content: string
    order: number
    flag_home: boolean
    images?: BlogImage[]
  }

  export interface BlogPostCreateProps extends FieldValues {
    name: string
    content: string
    order: number
    flag_home: boolean
    images?: BlogImage[]
  }

  export interface FetchBlogPostsResponseProps {
    data: BlogPostSchema[] | []
    success: boolean
  }

  export interface CreateAndUpdateBlogPostResponseProps {
    message: string
    data: BlogPostSchema
    success: boolean
  }

  //Labels
  export interface LabelSchema extends FieldValues {
    id: string
    label: string
    description: string
    pt_content: string
    en_content: string
  }

  export interface FetchLabelsResponseProps {
    data: LabelSchema[] | []
    success: boolean
  }

  //AboutEdit
  export interface FetchAboutResponseProps {
    data: AboutEditSchema[] | []
    success: boolean
  }

  export interface AboutEditSchema extends FieldValues {
    about: string
  }
}
