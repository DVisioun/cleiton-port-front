import React from 'react';
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server";
import { Locale } from "@/config/i18n.config";

function TextAbout({ params }:any) {
  const t = getDictionaryServerOnly(params.lang);

  return (
    <div className="sm-1:py-8 py-14">
      <p className="sm-1:px-2 sm-1:text-base pr-8 text-justify text-lg leading-relaxed 2xl:text-xl">
        {t.about.texto_sobre}
      </p>
    </div>
  );
}

export default TextAbout;
