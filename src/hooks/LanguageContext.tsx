'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (newLanguage: string) => void
  refreshLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  refreshLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en'
    }
    return 'en'
  })
  const [forceRefresh, setForceRefresh] = useState(0) // Refresh trigger

  // Load initial language from localStorage (client-side only)
  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const refreshLanguage = () => {
    setForceRefresh((prev) => prev + 1)
  }

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language, forceRefresh])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, refreshLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
