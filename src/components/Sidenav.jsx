import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
        color="#50b0e5"
        size={30}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-[#181729] flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 gap-2"
          >
            <AiOutlineHome size={25} color="#181729" />
            <span className="text-[#181729] font-semibold">Home</span>
          </a>
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 gap-2"
          >
            <BsPerson size={20} />
            <span className=" text-[#181729] font-semibold">A Propos</span>
          </a>
          <a onClick={handleNav}
            href="#compétences"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 my-2 py-4 pl-10 cursor-pointer hover:scale-110 ease-in duration-200 gap-2 "
          >
            <GrProjects size={20} />
            <span className=" text-[#181729] font-semibold">Compétences</span>
          </a>
          <a onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 gap-2"
          >
            <AiOutlineProject size={20} />
            <span className=" text-[#181729] font-semibold">Projects</span>
          </a>
          
          <a onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#50b0e5] text-[#181729]shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 gap-2"
          >
            <AiOutlineMail size={20} />
            <span className="text-[#181729] font-semibold">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed bottom-[5%] left-[40%] z-10 ">
        <div className="flex ">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-[#50b0e5] text-[#181729] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-[#50b0e5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
