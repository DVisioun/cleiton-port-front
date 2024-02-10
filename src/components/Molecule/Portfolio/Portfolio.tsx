import React from "react";
import CardPortfolioSession from "@/components/Atom/CardPortfolioSession/CardPortfolioSession";
import Title from "@/components/Atom/Title/Title";

const Portfolio = () => {
  return (
    <main className="min-h-[calc(100%-90px)] w-full px-[80px] pt-40">
      <Title title="Portfólio" />
      <section className="flex w-full flex-col items-center gap-6 p-4 sm-cardPortfolio-0:flex-row sm-cardPortfolio-0:flex-wrap">
        <CardPortfolioSession />
        <CardPortfolioSession />
      </section>
    </main>
  );
};

export default Portfolio;
