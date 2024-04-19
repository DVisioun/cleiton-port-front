'use client'
import SoftwareIcon from "@/components/Atom/SoftwareIcon/SoftwareIcon";
import React, { useEffect, useState } from "react";
import { API } from "@/@types/api";
import { fetchSoftwares } from "@/api/Software/fetch-softwares";
import { readBase64ToFile } from "@/utils/base64-converter";

function Softwares() {
  const [softwares, setSoftwares] = useState<API.SoftwareSchema[]>([]);
  const [softwareImages, setSoftwareImages] = useState<string[]>([]);

  const handleFetchSkills = async () => {
    try {
      const response: API.FetchSoftwareResponseProps = await fetchSoftwares();
      if (response?.success) {
        setSoftwares(response.data);
        const images = await Promise.all(
          response.data.map((software) => toFile(software.image)),
        );
        setSoftwareImages(images);
      }
    } catch (error) {
      console.error("Erro ao buscar as habilidades:", error);
    }
  };

  const toFile = async (image: string): Promise<string> => {
    const imageCoverAux = await readBase64ToFile(image);
    return URL.createObjectURL(imageCoverAux);
  };

  useEffect(() => {
    handleFetchSkills();
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-7 py-14 lg:justify-center lg:px-4 lg:py-4 sm-1:justify-evenly">
      {softwares.map((software, index) => (
        <div key={index}>
          <SoftwareIcon title={software.name} image={softwareImages[index]} />
        </div>
      ))}
    </div>
  );
}

export default Softwares;
