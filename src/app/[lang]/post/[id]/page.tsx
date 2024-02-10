import BlogPost from "@/components/Molecule/BlogPost/BlogPost";
import Header from "@/components/Molecule/Header/Header";
import React from "react";
import ThemeProvider from "@/hooks/ThemeContext";
import ConfigContent from "@/components/Molecule/ConfigContent/ConfigContent";
import { Locale } from "@/config/i18n.config";
import { Footer } from "@/components/Molecule/Footer/Footer";

function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-full overflow-y-auto bg-primary text-primary">
      <ThemeProvider initialTheme="light">
        <Header lang={params.lang} bgColor="bg-primary" />
        <ConfigContent />
        <BlogPost />
        <Footer position="" />
      </ThemeProvider>
    </div>
  );
}

export default page;
