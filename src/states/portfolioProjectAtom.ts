import { Portfolio } from '@/@types/project'
import { atom } from 'jotai'

export const portfolioProjectAtom = atom<Portfolio.PortfolioProjectSchema[]>([])
