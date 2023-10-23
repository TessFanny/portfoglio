import React from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ item }) => {
  
  return (
    <motion.article
      className={`h-auto w-full  my-5 flex md:items-center md:justify-between gap-7 flex-col border-[#492c8d] [&:not(:last-child)]:border-b-[2px]  pb-5 gap-y-8 md:flex-row
       `}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" md:w-[50%]  flex flex-col  gap-y-6">
        <h2 className=" text-center font-semibold textColor text-xl">
          {item.title}
        </h2>
        <a href={item.projectLink} target="_blank" className=" flex justify-center">
        <img
          src={item.img}
          alt="image du projet"
          className=" w-[70%] object-cover rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
        </a>
        
      </div>
      <div className="md:w-[50%] flex flex-col gap-8">
        <p className=" text-slate-300">{item.description}</p>
        <p className=" text-slate-400">{item.stack} </p>

        <div className=" text-center flex justify-center items-center gap-x-5">
          <a className="bg-transparent textColor border-[1px] border-[#f27c6d]  px-4 py-2 text-md font-semibold rounded-md hover:bgColor hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          href={item.projectLink}
          target="_blank"
          >
            Voir le projet
          </a>
          <a
            href={item.gitHubLink}
            target="_blank"
            className="bg-transparent textColor border-[1px] border-[#f27c6d]  px-4 py-2 text-md font-semibold rounded-md hover:bgColor hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
