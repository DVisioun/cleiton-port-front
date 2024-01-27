'use client'
import ButtonTheme from "@/components/Atom/ButtonTheme/ButtonTheme";
import ThemeProvider from "@/hooks/ThemeContext";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary text-primary">
      <ThemeProvider initialTheme='light'>
        <main>
          <div className="flex justify-center items-center flex-col min-h-screen">
            <h1 className="text-3xl font-bold">Em breve</h1>
            <h4 className="font-q text-secondary">Cleiton Moreira Portfólio</h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
