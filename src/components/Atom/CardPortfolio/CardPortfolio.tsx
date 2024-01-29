import React from "react";
import { Label, Segment } from "semantic-ui-react";

interface CardPortfolioProps {
  title: string;
  company: string
  place: string
  text: string;
  date: string;
}

function CardPortfolio({ title, company, place, text, date }: CardPortfolioProps) {
  return (
    <div className="w-full pr-8 relative">
      <Segment raised className="!bg-secondary !rounded-lg !relative">
        <Label
          as="a"
          color="black"
          ribbon
          className="!absolute !top-[-15px] !left-[-15px] text-primary !bg-primary"
        >
          {date}
        </Label>
        <div className="min-h-40">
          <h2 className="!mt-2 text-primary text-3xl">{title}</h2>
          <h5 className="!my-1 text-secondary font-normal">{company}</h5>
          <h5 className="!my-1 text-primary font-normal">{place}</h5>
          <p className="!mt-1">{text}</p>
        </div>
      </Segment>
    </div>
  );
}

export default CardPortfolio;
