import dynamic from 'next/dynamic'
import { useContext, createContext, useState, useEffect } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: (newTheme: string) => void
}

const ThemeContext = createContext({} as ThemeContextProps)

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  useEffect(() => {
    const root = window.document.documentElement

    const removeOldTheme = theme === 'dark' ? 'light' : 'dark'

    root.classList.remove(removeOldTheme)
    root.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default dynamic(() => Promise.resolve(ThemeProvider), { ssr: false })
