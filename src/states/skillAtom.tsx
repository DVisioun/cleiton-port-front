import { API } from '@/@types/api'
import { atom } from 'jotai'

export const skillAtom = atom<API.SkillSchema[]>([])
