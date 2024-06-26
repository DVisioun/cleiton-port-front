'use client'
import LanguageButton from '@/components/Atom/LanguageButton/LanguageButton'
import ThemeButton from '@/components/Atom/ThemeButton/ThemeButton'
import { useLanguage } from '@/hooks/LanguageContext'

function ConfigContent() {
  const { language, setLanguage } = useLanguage()

  const changeLanguage = () => {
    const currentLanguage = localStorage.getItem('lang')
    if (currentLanguage === 'en') {
      localStorage.setItem('lang', 'pt')
      setLanguage('pt')
    } else {
      setLanguage('en')
      localStorage.setItem('lang', 'en')
    }
  }

  return (
    <div className="fixed right-0 top-52 z-50 flex flex-col items-center justify-center gap-4 rounded-l-lg bg-content px-3 py-3 shadow sm-0:absolute sm-0:left-0 sm-0:right-auto sm-0:top-20 sm-0:rounded-l-none sm-0:rounded-r-lg">
      <button onClick={changeLanguage}>
        <LanguageButton country={language} />
      </button>
      <ThemeButton />
    </div>
  )
}

export default ConfigContent
