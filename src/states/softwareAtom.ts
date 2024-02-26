import { API } from '@/@types/api'
import { atom } from 'jotai'

export const softwareAtom = atom<API.SoftwareSchema[]>([])
