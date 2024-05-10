import { API } from '@/@types/api'
import { atom } from 'jotai'

export const educationAtom = atom<API.EducationSchema[]>([])
