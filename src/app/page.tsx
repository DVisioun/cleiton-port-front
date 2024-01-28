"use client";
import ThemeProvider from "@/hooks/ThemeContext";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";


export default function Home() {
  return (
    <div className="bg-secondary text-primary">
      <ThemeProvider initialTheme="light">
        <main>
          <ConfigContent />
          <div className="flex justify-center items-center flex-col min-h-screen">
            <h1 className="text-8xl">Em breve</h1>
            <h4 className="text-5xl font-q text-secondary">Kleytow Moreira Portfolio</h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
