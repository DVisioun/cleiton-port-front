"use client";
import ThemeProvider from "@/hooks/ThemeContext";
import Header from "@/components/Molecule/Header/Header";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";
import Carousel from "@/components/Molecule/Carousel/Carousel";

export default function Home() {
  return (
    <div className="bg-primary text-primary">
      <main>
        <Carousel />
        <div className="flex justify-center items-center flex-col min-h-screen">
          <Header />
          <ConfigContent />
        </div>
      </main>
    </div>
  );
}
