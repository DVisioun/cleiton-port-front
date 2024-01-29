import Image from "next/image";
import React from "react";

interface SoftwareIconProps {
  title: string;
  image: string;
}

function SoftwareIcon({ title='', image='' }: SoftwareIconProps) {
  return (
    <div className="flex justify-center items-center gap-4 bg-primary p-3 rounded-lg shadow-software">
      <Image src={image} alt={`Logo_${title}`} height={35} width={35} />
      <p className="text-xl">{title}</p>
    </div>
  );
}

export default SoftwareIcon;
