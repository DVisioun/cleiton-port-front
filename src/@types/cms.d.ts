import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export namespace CMS {
  export interface FormInputProps extends ComponentProps<'input'> {
    name: string
    placeholder: string
    register: UseFormRegister
    type: string
  }
}
