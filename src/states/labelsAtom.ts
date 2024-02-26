import { API } from '@/@types/api'
import { atom } from 'jotai'

export const labelAtom = atom<API.LabelSchema[]>([])
