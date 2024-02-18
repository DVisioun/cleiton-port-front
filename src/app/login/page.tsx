'use client'

import { useForm } from 'react-hook-form'
import { Mail, LockIcon } from 'lucide-react'

import { Button } from '@/components/Atom/Button/Button'
import * as Input from '@/components/Atom/FormInput/FormInput'

import { UserAuthentication } from '@/api/user-authentication'

import { API } from '@/@types/api'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<API.UserAuthenticationProps>()
  const router = useRouter()

  const onSubmit = async (data: API.UserAuthenticationProps) => {
    const response = await UserAuthentication(data)
    if (response) {
      setTimeout(() => {
        console.log('oi')
        router.push('/cms/portfolio-projects')
      }, 1500)
      reset()
    }
  }

  return (
    <div className="bg-secondary text-primary">
      <h1 className="pb-10 text-center text-4xl font-bold uppercase">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base font-semibold">
            email
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail size={24} />
            </Input.Prefix>
            <Input.Control
              name="email"
              placeholder="email@provider.com"
              register={register}
              type="email"
            />
          </Input.Root>
        </fieldset>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base font-semibold">
            password
          </label>
          <Input.Root>
            <Input.Prefix>
              <LockIcon size={24} />
            </Input.Prefix>
            <Input.Control
              name="password"
              placeholder="********"
              register={register}
              type="password"
            />
          </Input.Root>
        </fieldset>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
