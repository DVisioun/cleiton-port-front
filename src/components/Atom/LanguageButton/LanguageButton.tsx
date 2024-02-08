'use client'
import React, { useEffect, useState } from 'react'
import Flag from 'react-flagkit'

interface LanguageButtonProps {
  country: string
}

function LanguageButton({ country }: LanguageButtonProps) {
  const [flag, setFlag] = useState('')

  useEffect(() => {
    if (country === 'en-US') {
      setFlag('BR')
    }
    if (country === 'pt-BR') {
      setFlag('US')
    }
  }, [country])

  return <Flag country={flag} size={35} className="cursor-pointer" />
}

export default LanguageButton
