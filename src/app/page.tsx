"use client";
import ThemeProvider from "@/hooks/ThemeContext";
import Header from "@/components/Molecule/Header/Header";

export default function Home() {
  return (
    <div className="bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <main>
          <div className="flex justify-center items-center flex-col min-h-screen">
            <Header />
            <h1 className="text-5xl font-bold">Em breve</h1>
            <h4 className="text-2xl font-q text-secondary">
              Cleiton Moreira Portfólio
            </h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
