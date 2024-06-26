'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/hooks/ThemeContext'

function ThemeButton() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="solid text-2xl" />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="solid text-2xl text-[var(--white)]"
        />
      )}
    </button>
  )
}

export default ThemeButton
