import axios, { AxiosInstance } from 'axios'
import nookies from 'nookies'

const updateToken = () => {
  const { token } = nookies.get(null, 'token')
  return token
}

const connection: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${updateToken()}`,
  },
})

connection.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { connection }
