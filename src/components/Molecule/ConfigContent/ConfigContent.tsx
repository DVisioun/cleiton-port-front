import LanguageButton from '@/components/Atom/LanguageButton/LanguageButton'
import ThemeButton from '@/components/Atom/ThemeButton/ThemeButton'
import React from 'react'

function ConfigContent() {
  return (
    <div className='bg-opacity hover:bg-primary shadow absolute right-0 top-52 py-3 px-3 flex flex-col gap-2 items-center justify-center rounded-l-lg'>
        <LanguageButton />
        <ThemeButton />
    </div>
  )
}

export default ConfigContent