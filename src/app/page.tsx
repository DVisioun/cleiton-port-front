"use client";
import ThemeProvider from "@/hooks/ThemeContext";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";
import Carousel from "@/components/Molecule/Carousel/Carousel";

export default function Home() {
  return (
    <div className="bg-secondary text-primary">
      <ThemeProvider initialTheme="light">
        <main>
          <ConfigContent />
          <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-8xl">Em breve</h1>
            <h4 className="font-alt text-5xl text-secondary">
              Kleytow Moreira Portfolio
            </h4>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
