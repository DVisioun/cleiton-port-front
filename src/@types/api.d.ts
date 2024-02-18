import { FieldValues } from 'react-hook-form'

export namespace API {
  export interface UserAuthenticationProps extends FieldValues {
    email: string
    password: string
  }

  export interface UserauthenticationResponseProps {
    data: {
      success: boolean
      message: string
      token?: string
    }
  }
}
