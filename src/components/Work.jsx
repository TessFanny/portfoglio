import React from "react";
import WorkItem from "./WorkItem";
const data = [
    {
        name: "Html",
        img: '/images/html.png'
    },
    {
        name: "Css",
        img: '/images/css.png'
    },
    {
        name: "Javascript",
        img: '/images/js.png'
    },
    {
        name: "NodeJs",
        img: '/images/nodejs.png'
    },
    {
        name: "PostgreSql",
        img: '/images/postgresql.png'
    },
    {
        name: "Express",
        img: '/images/express.png'
    },
    {
        name: "React",
        img: '/images/react.png'
    },
    {
        name: "Git",
        img: '/images/git.png'
    },
  

];
const Work = () => {
  return (
    <div
      id="competences"
      className=" group max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729] "
    >
      <h1 className=" text-3xl font-bold text-center text-emerald-600 m-auto justify-center items-center">
        Stack technique
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 mt-10">
        {data.map((item, idx) => (
          <WorkItem key={idx} item={item} />
        ))}
      </div>
      
    </div>
  );
};

export default Work;
