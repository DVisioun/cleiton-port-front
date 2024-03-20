import { toast } from 'react-toastify'

export const notifySuccess = (message: string) => toast.success(message)
export const notifyFailure = (message: string) => toast.error(message)
