import CardPortfolio from "@/components/Atom/CardPortfolio/CardPortfolio";
import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

function Experience() {
  const experiences = [
    {
      title: "3D Artist",
      company: "Aden · Tempo integral",
      place: "Portugal · Remota",
      text: "Desenvolvimento de personagens 3D ...",
      date: "Apr 2021 - Apr 2021",
    },
    {
      title: "teste",
      company: "Teste",
      text: "Teste2",
      place: "",
      date: "May 2022 - Jul 2023",
    },
  ];

  return (
    <Grid className="flex flex-col gap-20 flex-wrap py-14">
      <GridRow columns={3} only="large screen">
        {experiences.map((experience, index) => (
          <GridColumn key={index} columns={5} only="large screen">
            <CardPortfolio
              title={experience.title}
              company={experience.company}
              place={experience.place}
              text={experience.text}
              date={experience.date}
            />
          </GridColumn>
        ))}
      </GridRow>
    </Grid>
  );
}

export default Experience;
