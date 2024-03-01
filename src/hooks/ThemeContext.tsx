'use client'

import dynamic from 'next/dynamic'
import { createContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  if (window?.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (storedPrefs === 'light' || storedPrefs === 'dark') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

type ThemeContextProps = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)

type ThemeProviderProps = {
  initialTheme: Theme
  children: React.ReactNode
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default dynamic(() => Promise.resolve(ThemeProvider), { ssr: false })
