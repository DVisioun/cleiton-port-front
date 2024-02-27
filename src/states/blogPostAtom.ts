import { API } from '@/@types/api'
import { atom } from 'jotai'

export const blogPostAtom = atom<API.BlogPostSchema[]>([])
