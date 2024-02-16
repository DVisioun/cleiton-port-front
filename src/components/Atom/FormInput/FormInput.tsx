import { CMS } from '@/@types/cms'
import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export const Prefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

export const Control = ({
  name,
  placeholder,
  register,
  type,
}: CMS.FormInputProps) => (
  <input
    id={name}
    type={type}
    placeholder={placeholder}
    className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
    {...register(name)}
  />
)

export type InputRootProps = ComponentProps<'div'>

export const Root = (props: InputRootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2 text-sm shadow-sm focus-within:border-zinc-300 focus-within:ring-4 focus-within:ring-zinc-100"
      {...props}
    />
  )
}
