"use client";
import React from "react";
import { Divider, Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react";
import AboutEdit from "@/components/Molecule/AboutEdit/AboutEdit";
import SkillsEdit from "@/components/Molecule/SkillsEdit/SkillsEdit";
import SoftwareEdit from "@/components/Molecule/SoftwareEdit/SoftwareEdit";
import ExperienceEdit from "@/components/Molecule/ExperienceEdit/ExperienceEdit";
import EducationEdit from "@/components/Molecule/EducationEdit/EducationEdit";

function page() {
  return (
    <div className="w-full">
      <Segment>
        <Segment>
          <Divider horizontal>
            <Header as="h4" className="!m-0 !text-center !font-alt !text-6xl !font-medium !text-secondary !sm-1:text-5xl">
              Description
            </Header>
          </Divider>
          <AboutEdit />
        </Segment>
        <Segment>
          <SkillsEdit />
        </Segment>
        <Segment>
          <SoftwareEdit />
        </Segment>
        <Segment>
          <ExperienceEdit />
        </Segment>
        <Segment>
          <EducationEdit />
        </Segment>
      </Segment>
    </div>
  );
}

export default page;
