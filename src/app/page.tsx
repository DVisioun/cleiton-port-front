"use client";
import ThemeProvider from "@/hooks/ThemeContext";
import Header from "@/components/Molecule/Header/Header";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";
import Carousel from "@/components/Molecule/Carousel/Carousel";
import ThemeButton from "@/components/Atom/ThemeButton/ThemeButton";

export default function Home() {
  return (
    <div className="bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <main>
          <ConfigContent />
          <div className="flex justify-center items-center flex-col min-h-screen">
            <h1 className="text-8xl">Em breve</h1>
            <h4 className="text-5xl font-q">Kleytow Moreira Portfolio</h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
