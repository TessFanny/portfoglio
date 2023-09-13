import React from "react";
import WorkItem from "./WorkItem";
const data = [
    {
        name: "Html",
        img: 'src/assets/images/html.png'
    },
    {
        name: "Css",
        img: 'src/assets/images/css.png'
    },
    {
        name: "Javascript",
        img: 'src/assets/images/js.png'
    },
    {
        name: "NodeJs",
        img: 'src/assets/images/nodejs.png'
    },
    {
        name: "PostgreSql",
        img: 'src/assets/images/postgresql.png'
    },
    {
        name: "Express",
        img: 'src/assets/images/express.png'
    },
    {
        name: "React",
        img: 'src/assets/images/react.png'
    },
    {
        name: "Git",
        img: 'src/assets/images/git.png'
    },
  

];
const Work = () => {
  return (
    <div
      id="competences"
      className=" group max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729] "
    >
      <h1 className=" text-3xl font-bold text-center text-[#50b0e5] m-auto justify-center items-center">
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
