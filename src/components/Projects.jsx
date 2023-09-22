import React from "react";
import ProjectItem from "./ProjectItem";
import codeImg from "../assets/code_img.jfif";
import coding from "../assets/coding.jfif";
import images from "../assets/images.jfif";
import work from "../assets/work.jfif";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  const data = [
    { index:1,
      title: "Bug tracker",
      link: "https://github.com/TessFanny/bug-tracker",
      description:
        " Cette application a été développée en utilisant Node.js pour le backend et React pour le frontend. Elle vous permet de suivre les problèmes, les bogues de développement de vos projets.",
      img: "src/assets/coding.jfif",
    },
    {
      index:2,
      title: "Portfoglio",
      link: "https://github.com/O-clock-Moai/projet-07-devBoard-front",
      description:
        "Le projet consiste à créer un tableau de bord pour les développeurs, qui leur fournira une aide pratique pour gérer leur veille technologique",
      img: "src/assets/code_img.jfif",
    },
    {
      index:3,
      title: "Portfoglio",
      link: "https://github.com/O-clock-Moai/projet-07-devBoard-front",
      description:
        "Le projet consiste à créer un tableau de bord pour les développeurs, qui leur fournira une aide pratique pour gérer leur veille technologique",
      img: "src/assets/code_img.jfif",
    },
  ];

  return (
    <div className="py-20 align-element">
      <SectionTitle text=" Mes projets" />
    
      <div className="grid gap-8 md:px-20  py-5">
        {data.map((item, idx) => (
          <ProjectItem key={idx} item={item}  />
        ))}
      </div>
    </div>
  );
};

export default Projects;
