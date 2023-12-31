import React from "react";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const data = [
    {
      index: 1,
      title: "Bug tracker",
      gitHubLink: "https://github.com/TessFanny/bug-tracker",
      projectLink: "https://bugtrackertess.netlify.app",
      description:
        " Bug Tracker est une application qui vous permet d'organiser, de suivre, de gérer et de résoudre les problèmes, les bogues qui se produisent au cours du développement de vos projets. ",
        stack:
        "NodeJs - Express Js - JWT - Swagger - React - reduxToolkit - TailwindCSS - PostgreSQL",
      img: "/images/bugtracker.png",
    },
    {
      index: 2,
      title: "DevBoard",
      gitHubLink: "https://github.com/TessFanny/devBoard_back",
      projectLink: "https://devboardtess.netlify.app",
      description:
        `DevBoard est un tableau de bord pour les développeurs, qui leur fournit une aide pratique pour gérer leur veille technologique.
        Développé lors de ma formation chez O'clock en un mois en équipe de cinq personnes avec chacun un rôle;
        J'ai realisé l'API qui a servi à afficher les données sur la page;
        `,
        stack:
        "NodeJs - Express Js - JWT - Swagger - React - ReduxToolkit - Chakra-UI - PostgreSQL",
      img: "/images/devboard.png",
    },
    {
      index: 3,
      title: "Portfoglio",
      gitHubLink: "https://github.com/TessFanny/portfoglio",
      projectLink: "https://portfoglio.netlify.app",
      description:
        "Mon portfoglio, construit en responsive design avec une approche mobile-first, offre une présentation claire de mes projets et compétences; Il s'adapte à tous les écrans. ne manquez pas d'explorer le site pour avoir un apreçu de mes réalisations et des mes capacités en développement web.",
        stack:
        "React - TailwindCSS",
      img: "/images/portfoglio.png",
    },
  ];

  return (
    <section className="py-20 align-element">
      <SectionTitle text=" Mes projets" />

      <div className="grid gap-8 md:px-20  py-5">
        {data.map((item, idx) => (
          <ProjectItem key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
