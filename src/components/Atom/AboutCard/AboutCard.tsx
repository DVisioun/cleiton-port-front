import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from "semantic-ui-react";

const AboutCard = () => (
  <Card className="!shadow-card sticky">
    <div className="bg-primary flex justify-center p-4">
      <Image src={"/images/avatar.jpg"} className="w-2/3 rounded-full"/>
    </div>
    <CardContent className="!bg-primary">
      <CardHeader>Cleiton Moreira</CardHeader>
      <CardMeta>
        <span className="date">3D Artist at Aden Interactive</span>
      </CardMeta>
      <CardDescription>
        
      </CardDescription>
    </CardContent>
    <CardContent extra className="!bg-primary">
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faLocationDot} />
        <p>Porto - PT</p>
      </div>
    </CardContent>
  </Card>
);

export default AboutCard;
