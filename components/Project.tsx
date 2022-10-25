import React from "react";
import Image from "next/image";

export default function Project({ project }) {
  const media = project.attributes.Media.data;

  return (
    <div className="pr-2">
      <Image
        src={`http://localhost:1337${media.attributes.url}`}
        alt=""
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="contain"
      />
      <h2 className="">{project.attributes.Title}</h2>
      <p className="mb-4">{project.attributes.Description}</p>
    </div>
  );
}
