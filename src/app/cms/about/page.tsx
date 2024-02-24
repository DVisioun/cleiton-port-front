"use client";
import React, { useEffect, useState } from "react";
import { Divider, Segment } from "semantic-ui-react";
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
            <h1 className="m-0 text-center font-alt text-6xl font-medium capitalize text-secondary sm-1:text-5xl">
              About
            </h1>
          </Divider>
          <AboutEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <h1 className="m-0 text-center font-alt text-6xl font-medium capitalize text-secondary sm-1:text-5xl">
              Skills
            </h1>
          </Divider>
          <SkillsEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <h1 className="m-0 text-center font-alt text-6xl font-medium capitalize text-secondary sm-1:text-5xl">
              Softwares
            </h1>
          </Divider>
          <SoftwareEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <h1 className="m-0 text-center font-alt text-6xl font-medium capitalize text-secondary sm-1:text-5xl">
              Experiences
            </h1>
          </Divider>
          <ExperienceEdit />
        </Segment>
        <Segment>
          <Divider horizontal>
            <h1 className="m-0 text-center font-alt text-6xl font-medium capitalize text-secondary sm-1:text-5xl">
              Education
            </h1>
          </Divider>
          <EducationEdit />
        </Segment>
      </Segment>
    </div>
  );
}

export default page;
