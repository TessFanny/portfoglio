import React from "react";
import WorkItem from "./WorkItem";
const data = [
    {
        name: "Html",
        img: ''
    },
    {
        name: "Css",
        img: ''
    },
    {
        name: "Javascript",
        img: ''
    },
    {
        name: "NodeJs",
        img: ''
    },
    {
        name: "PostgreSql",
        img: ''
    },
    {
        name: "Express",
        img: ''
    },
    {
        name: "React",
        img: ''
    },
    {
        name: "Git",
        img: ''
    },
  

];
const Work = () => {
  return (
    <div
      id="competences"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729] "
    >
      <h1 className=" text-3xl font-bold text-center text-[#50b0e5] m-auto justify-center items-center">
        Stack technique
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 mt-10">
        {data.map((item, idx) => (
          <WorkItem key={idx} item={item} />
        ))}
      </div>
      <div className>
      <h2 className=" text-white text-center text-2xl font-semibold w-full">Qualités:</h2>

      </div>
    </div>
  );
};

export default Work;
