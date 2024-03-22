'use client'
import LanguageButton from '@/components/Atom/LanguageButton/LanguageButton'
import ThemeButton from '@/components/Atom/ThemeButton/ThemeButton'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function ConfigContent() {
  const [language, setLanguage] = useState('')
  const pathname = usePathname()

  const getHrefLink = () => {
    const pathSplit = pathname.split('/')
    const currentLanguage = pathSplit[1]
    const page = pathSplit[2] ? pathSplit[2] : ''
    const param = pathSplit[3] ? pathSplit[3] : ''
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    window.location.href = `/${newLanguage}/${page}/${param}`
  }

  useEffect(() => {
    const pathSplit = pathname.split('/')
    const currentLanguage = pathSplit[1]
    setLanguage(currentLanguage)
  }, [pathname])

  return (
    <div className="fixed right-0 top-52 z-50 flex flex-col items-center justify-center gap-4 rounded-l-lg bg-content px-3 py-3 shadow sm-1:absolute sm-1:top-72">
      <button onClick={getHrefLink}>
        <LanguageButton country={language} />
      </button>
      <ThemeButton />
    </div>
  )
}

export default ConfigContent
