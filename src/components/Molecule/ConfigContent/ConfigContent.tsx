import LanguageButton from '@/components/Atom/LanguageButton/LanguageButton'
import ThemeButton from '@/components/Atom/ThemeButton/ThemeButton'
import React from 'react'

function ConfigContent() {
  return (
    <div className="sm-1:absolute fixed right-0 top-52 z-10 flex flex-col items-center justify-center gap-4 rounded-l-lg bg-secondary px-3 py-3 shadow lg:absolute">
      <LanguageButton />
      <ThemeButton />
    </div>
  )
}

export default ConfigContent
