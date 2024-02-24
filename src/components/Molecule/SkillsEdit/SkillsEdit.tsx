"use client";
import { Skill } from "@/@types/skills";
import { AboutService } from "@/api/AboutService";
import React, { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { Button, Grid, GridColumn, GridRow, Input } from "semantic-ui-react";



function SkillsEdit() {
  const [skills, setSkills] = useState<Skill.SkillsProps[]>([]);

  const handleGetSkills = async () => {
    try {
      const response = await AboutService.getSkills();
      if (response.status === 200) {
        setSkills(response["data"]["data"]);
        console.log(response["data"]["data"]);
      }
    } catch (error) {
      console.log("Erro na consulta: ", error);
    }
  };

  const handleAddSkills = async ({ language }: any) => {
    if (language == "pt") {
      console.log('PT');
    }
    if (language == "en") {
      console.log('EN');
    }
  };

  useEffect(() => {
    handleGetSkills();
  }, []);

  return (
    <div className="mb-5">
      <Grid>
        <GridRow columns={2}>
          <GridColumn mobile={16} computer={8} tablet={16}>
            <Flag country="US" size={25} className="my-2" />
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, index ) => (
                <li
                  key={index}
                  className="relative mb-2 border py-2 pl-2 pr-10"
                >
                  {skill.name}
                  <span className="absolute right-3">x</span>
                </li>
              ))}
            </ul>
            <div className="w- mt-10 gap-2 lg:flex">
              <Input placeholder="New Skill...">
                <input type="text" />
              </Input>
              <Button
                content="Gravar"
                basic
                className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
                onClick={() => handleAddSkills({ language: "en" })}
              />
            </div>
          </GridColumn>
          <GridColumn mobile={16} computer={8} tablet={16}>
            <Flag
              country="BR"
              size={25}
              className="my-2 sm-1:!mt-8 md-1:!mt-8"
            />
            <ul className="flex flex-wrap gap-3">
              {Object.keys(skills).map((skillKey: any) => (
                <li
                  key={skillKey}
                  className="relative mb-2 border py-2 pl-2 pr-10"
                >
                  {skills[skillKey].name}
                  <span className="absolute right-3">x</span>
                </li>
              ))}
            </ul>
            <div className="w- mt-10 gap-2 lg:flex">
              <Input placeholder="New Skill...">
                <input type="text" />
              </Input>
              <Button
                content="Gravar"
                basic
                className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
                onClick={() => handleAddSkills({ language: "pt" })}
              />
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default SkillsEdit;
