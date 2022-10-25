import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetcher } from "../services/api.service";
import Image from "next/image";
import finn from "../public/img/finn-4.png";

export default function Sidebar(projects) {
  const [listItems, setListItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setListItems([
          "About me",
          "Education",
          "Experience",
          "Skills",
          "Languages",
          "Miscellaneous",
        ]);
        break;
      case "/projects":
        let items = [];
        console.log(projects.projects.data);

        projects.projects.data.forEach((element) => {
          items.push(element.attributes.Title);
        });
        setListItems(["Projects", ...items]);
        break;
      case "/photography":
        setListItems(["Photography"]);
        break;
      case "/contact":
        setListItems(["Contact"]);
        break;

      default:
        break;
    }
  }, [router, projects]);

  return (
    <div
      className="row-span-2 mx-4 mt-4 px-4 border-l-4 border-black inline-block"
      id="sidebar"
    >
      <h1 className="mb-8 italic" id="sidebar-title">
        Finn
      </h1>
      {listItems.map((item, index) => {
        return (
          <p
            key={index}
            className={
              index == 0
                ? "text-xl mb-0 font-bold"
                : "italic text-lg font-light mb-0"
            }
          >
            {item}
          </p>
        );
      })}
      {router.asPath == "/" ? (
        <Image className="align-bottom" src={finn} alt="a picture of me" />
      ) : (
        <></>
      )}
    </div>
  );
}
