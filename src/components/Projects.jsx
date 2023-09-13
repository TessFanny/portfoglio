import React from "react";
import ProjectItem from "./ProjectItem";
import codeImg from "../assets/code_img.jfif";
import coding from "../assets/coding.jfif";
import images from "../assets/images.jfif";
import work from "../assets/work.jfif";
const Projects = () => {
  const data = [
    {
      title: "Bug tracker",
      link: "https://github.com/TessFanny/bug-tracker",
      description:
        " Cette application a été développée en utilisant Node.js pour le backend et React pour le frontend. Elle vous permet de suivre les problèmes, les bogues de développement de vos projets.",
      img: "src/assets/coding.jfif",
    },
    {
      title: "DevBoard",
      link: "https://github.com/O-clock-Moai/projet-07-devBoard-front",
      description:
        "Le projet consiste à créer un tableau de bord pour les développeurs, qui leur fournira une aide pratique pour gérer leur veille technologique",
      img: "src/assets/code_img.jfif",
    },
  ];
  return (
    <div
      id="projects"
      className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729]"
    >
      <h1 className=" text-4xl font-bold text-center text-[#50b0e5]">
        Projets
      </h1>
      <p className=" text-center py-8 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nisi
        facere dolorum cupiditate quae laudantium vel et laboriosam quidem
        suscipit facilis, ad, quod, totam harum? Odit eius rem autem
        reprehenderit!
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        {data.map((item, idx) => (
          <ProjectItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
