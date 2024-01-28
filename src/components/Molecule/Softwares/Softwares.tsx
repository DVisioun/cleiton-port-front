import SoftwareIcon from "@/components/Atom/SoftwareIcon/SoftwareIcon";
import React from "react";

function Softwares() {
  const softwares = [
    { title: "Blender", image: "/images/softwares/blender.png" },
    { title: "Maya", image: "/images/softwares/maya.png" },
    { title: "ZBrush", image: "/images/softwares/zbrush.png" },
    { title: "Substance 3D Painter", image: "/images/softwares/substance.png" },
    { title: "Marmoset Toolbag", image: "/images/softwares/marmoset.png" },
    { title: "Unreal Engine", image: "/images/softwares/unreal.png" },
    { title: "Photoshop", image: "/images/softwares/photoshop.png" },
    { title: "TopGun", image: "/images/softwares/topgun.png" },
    { title: "Unity", image: "/images/softwares/unity.png" },
  ];

  return (
    <div className="py-14 flex justify-center gap-7 flex-wrap">
      {softwares.map((software, index) => (
        <div key={index}>
          <SoftwareIcon title={software.title} image={software.image} />
        </div>
      ))}
    </div>
  );
}

export default Softwares;
