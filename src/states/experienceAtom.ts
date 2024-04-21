import { API } from '@/@types/api'
import { atom } from 'jotai'

export const experienceAtom = atom<API.ExperienceSchema[]>([])
