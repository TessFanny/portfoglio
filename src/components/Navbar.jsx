import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import {FaBrain} from "react-icons/fa"
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setOpen(!isOpen);
  };
  return (
    <nav>
      <div
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-500"
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-in"
          duration={0.4}
          color="#fff"
        />
      </div>

      {nav ? (
        <motion.ul
          className="fixed top-[5rem] right-[10px] w-[75%] transition-all duration-300 h-[40%]  flex flex-col justify-center items-start z-20  gap-y-4 rounded-mdbg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-500 "
          initial={{ opacity:0 }}
          animate={{ opacity:1  }}
          transition={{ duration: 1 }}
        >
          <li className="nav-element-sm">
            <AiOutlineHome size={30} color="#fff" className=" pb-1" />
            <NavLink onClick={handleNav} to="/">
              Accueil
            </NavLink>
          </li>
          <li className="nav-element-sm">
            <BsPerson size={30} />
            <NavLink onClick={handleNav} to="/about">
              à Propos
            </NavLink>
          </li>
          <li className="nav-element-sm">
            <FaBrain size={30} />
            <NavLink onClick={handleNav} to="/skills">
              Compétences
            </NavLink>
          </li>

          <li className="nav-element-sm">
            <AiOutlineProject size={30} />
            <NavLink onClick={handleNav} to="projects">
              Mes Projets
            </NavLink>
          </li>

          <li className="nav-element-sm">
            <AiOutlineMail size={30} />
            <NavLink onClick={handleNav} to="contact">
              Contact
            </NavLink>
          </li>
        </motion.ul>
      ) : (
        ""
      )}
      <nav className=" md:block hidden shadow-xl fixed w-full bg-[#181729] top-0 right-0  border-gray-700 py-4 z-10">
        <ul className="flex justify-end gap-10 mr-10 items-center">
          <li className="nav-element">
            <NavLink to="/"  className={({ isActive }) =>
            isActive ? 'textColor font-bold' : undefined
          }>Accueil</NavLink>
          </li>
          <li className="nav-element">
            <NavLink className={({ isActive }) =>
            isActive ? 'textColor font-bold' : undefined
          } to="/about">à propos</NavLink>
          </li>
          <li className="nav-element">
            <NavLink className={({ isActive }) =>
            isActive ? 'textColor font-bold' : undefined
          } to="/skills">Compétences</NavLink>
          </li>
          <li className="nav-element">
            <NavLink className={({ isActive }) =>
            isActive ? 'textColor font-bold' : undefined
          } to="/projects">Mes Projets</NavLink>
          </li>
          <li className="nav-element">
            <NavLink className={({ isActive }) =>
            isActive ? 'textColor font-bold' : undefined
          } to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};
export default Navbar;
