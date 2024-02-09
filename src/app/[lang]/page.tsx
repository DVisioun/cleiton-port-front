'use client'
import ThemeProvider from '@/hooks/ThemeContext'
import ConfigContent from '@/components/Molecule/ConfigContent/ConfigContent'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionaries-client'
import { Locale } from '@/config/i18n.config'

function Home({ params }: { params: { lang: Locale } }) {
  const t = getDictionaryUseClient(params.lang)

  return (
    <div className="bg-secondary text-primary">
      <ThemeProvider initialTheme="light">
        <main>
          <ConfigContent />
          <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-8xl">{t.temporario.em_breve}</h1>
            <h4 className="font-alt text-5xl text-secondary">
              Kleytow Moreira Portfolio
            </h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Home