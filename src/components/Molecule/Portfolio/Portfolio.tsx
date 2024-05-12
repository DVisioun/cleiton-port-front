"use client";

import React, { useEffect } from "react";
import CardPortfolioSession from "@/components/Atom/CardPortfolioSession/CardPortfolioSession";
import Title from "@/components/Atom/Title/Title";
import { fetchPortfolioProjects } from "@/api/PortfolioProject/fetch-portfolio-project";
import { useAtom } from "jotai";
import { portfolioProjectAtom } from "@/states/portfolioProjectAtom";
import Link from 'next/link' 
import { Locale } from '@/config/i18n.config'

interface PortfolioProps {
  lang: Locale
}

const Portfolio = ({ lang }: PortfolioProps) => {
  const [portfolioProjects, setPortfolioProjects] =
    useAtom(portfolioProjectAtom);

  useEffect(() => {
    const handleFetchProjects = async () => {
      const { data } = await fetchPortfolioProjects();
      setPortfolioProjects(data);
      console.log(data);
    };

    handleFetchProjects();
  }, [setPortfolioProjects]);

  return (
    <main className="min-h-[calc(100%-90px)] w-full px-[80px] pt-40 sm-0:px-6 sm-1:pt-5">
      <Title title="Portfólio" />
      <section className="flex w-full flex-col items-center gap-6 p-4 sm-cardPortfolio-0:flex-row sm-cardPortfolio-0:flex-wrap">
        {portfolioProjects
          ? portfolioProjects?.map((project) => {
              return (
                <Link
                  href={`/${lang}/portfolio/posts/${project.id}`}
                  className="text-primary no-underline hover:text-primary"
                >
                  <CardPortfolioSession key={project.id} project={project} />
                </Link>
              );
            })
          : null}
      </section>
    </main>
  );
};

export default Portfolio;
