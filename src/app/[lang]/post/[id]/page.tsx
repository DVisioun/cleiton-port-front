import BlogPost from '@/components/Molecule/BlogPost/BlogPost'
import Header from '@/components/Molecule/Header/Header'
import React from 'react'
import ThemeProvider from '@/hooks/ThemeContext'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'

function page() {
  return (
    <div className="h-full bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header bgColor="bg-primary" />
        <ConfigContent />
        <BlogPost />
      </ThemeProvider>
    </div>
  )
}

export default page
