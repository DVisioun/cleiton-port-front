import LanguageButton from '@/components/Atom/LanguageButton/LanguageButton'
import ThemeButton from '@/components/Atom/ThemeButton/ThemeButton'
import React from 'react'

function ConfigContent() {
  return (
    <div className="lg:absolute bg-content fixed right-0 top-52 z-10 flex flex-col items-center justify-center gap-4 rounded-l-lg px-3 py-3 shadow sm-1:absolute">
      <LanguageButton />
      <ThemeButton />
    </div>
  )
}

export default ConfigContent
