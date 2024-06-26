export namespace User {
  export interface UserProps {
    id?: string
    name: string
    about: string
    email: string
    password: string
    image: string
    artstation: string
    instagram: string
    linkedin: string
    location: string
    role: string
    company: string
  }

  export interface LinksEditProps extends FieldValues {
    artstation: string
    instagram: string
    linkedin: string
  }

  export interface OtherInfoEditProps extends FieldValues {
    location: string
    role: string
    company: string
  }

  export interface UserImageProps extends FieldValues {
    image: FieldList
  }
}
