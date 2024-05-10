import { atom } from 'jotai'

export interface HomeImage {
  id?: string
  image: string
  order: number
}

export const homeImageAtom = atom<HomeImage[]>([])
