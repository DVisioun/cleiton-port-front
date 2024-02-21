import React from "react";
import { Button, Input } from "semantic-ui-react";

function SoftwareEdit() {
  return (
    <div className="mb-5">
      <h3>Softwares</h3>
      <ul className="flex flex-wrap gap-3">
        <li className="relative mb-2 border py-2 pl-2 pr-10">
          Blender<span className="absolute right-3">x</span>
        </li>
        <li className="relative mb-2 border py-2 pl-2 pr-10">
          Maya<span className="absolute right-3">x</span>
        </li>
        <li className="relative mb-2 border py-2 pl-2 pr-10">
          Zbrush<span className="absolute right-3">x</span>
        </li>
        <li className="relative mb-2 border py-2 pl-2 pr-10">
          Substance 3D Painter<span className="absolute right-3">x</span>
        </li>
        <li className="relative mb-2 border py-2 pl-2 pr-10">
          Unreal<span className="absolute right-3">x</span>
        </li>
      </ul>
      <div className="w- mt-10 gap-2 lg:flex">
        <Input placeholder="New Software...">
          <input type="text" />
        </Input>
        <Button
          content="Gravar"
          basic
          className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
        />
      </div>
    </div>
  );
}

export default SoftwareEdit;
