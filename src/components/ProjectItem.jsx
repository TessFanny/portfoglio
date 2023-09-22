import React from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ item }) => {
  
  return (
    <motion.article
      className={`h-auto w-full  my-5 flex md:items-center md:justify-between gap-7 flex-col md:${
        item.index % 2 !== 0 ? "flex-row" : " flex-row-reverse"
      } border-yellow-500 [&:not(:last-child)]:border-b-[2px]  pb-5 gap-y-8 
       `}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" md:w-[50%]  flex flex-col items-center gap-y-6">
        <h2 className=" text-center font-semibold text-emerald-600 text-xl">
          {item.title}
        </h2>
        <img
          src={item.img}
          alt="image du projet"
          className=" w-[70%] object-cover rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="md:w-[50%] flex flex-col gap-8">
        <p>{item.description}</p>

        <div className=" text-center flex justify-center items-center gap-x-5">
          <a className="bg-transparent text-emerald-600 border-[1px] border-emerald-600 px-4 py-2 text-md font-semibold rounded-md hover:bg-emerald-600 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out">
            Voir le projet
          </a>
          <a
            href={item.link}
            target="_blank"
            className="bg-transparent text-emerald-600 border-[1px] border-emerald-600 px-4 py-2 text-md font-semibold rounded-md hover:bg-emerald-600 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
