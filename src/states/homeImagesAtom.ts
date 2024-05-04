import { atom } from 'jotai'

interface HomeImage {
  id?: string
  image: string
  order: number
}

export const homeImageAtom = atom<HomeImage[]>([])
