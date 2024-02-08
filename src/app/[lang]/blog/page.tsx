import Blog from '@/components/Molecule/Blog/Blog'
import React from 'react'
import ThemeProvider from '@/hooks/ThemeContext'
import Header from '@/components/Molecule/Header/Header'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'

function page() {
  return (
    <div className="h-full bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header bgColor="bg-primary" />
        <ConfigContent />
        <Blog />
      </ThemeProvider>
    </div>
  )
}

export default page
