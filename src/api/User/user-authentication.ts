import { setCookie } from 'nookies'

import { connection } from '@/utils/axios'
import { notifyFailure, notifySuccess } from '@/utils/toastify'

import { API } from '@/@types/api'

export const UserAuthentication = async ({
  email,
  password,
}: API.UserAuthenticationProps) => {
  try {
    const response = await connection.post('/authenticate', { email, password })
    if (response.data.token) {
      setCookie(null, 'token', response.data.token)
      notifySuccess(response.data.message)
      return true
    } else {
      notifyFailure(response.data.message)
      throw Error
    }
  } catch (error: any) {
    console.log(error)
    notifyFailure(error.response.data.message)
  }
}
