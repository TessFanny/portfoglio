import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGithubSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrBottomCorner } from "react-icons/gr";
import { GrTopCorner } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <motion.div
      className=" md:pt-[15rem] pt-[8rem]  md:pb-[12rem] "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
    
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
      <article className="flex md:justify-start justify-center">
          <img
            src="src/assets/images/profile.jpg"
            alt=""
            className="  h-[15rem] w-[15rem] md:h-[25rem]  md:w-[25rem] rounded-full"
          />
        </article>
        <article>
          <h1 className=" text-4xl font-bold tracking-wider text-slate-500">
            Tessikoue Fanny 
          </h1>
          <p className=" mt-4 text-2xl text-white capitalize">
            Développeuse
            <TypeAnimation
              sequence={[
                "Back-end", //
                1000, // Waits 1s
                "Front-end", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Passionnée",
                1000,
                "Rigoureuse",
                1000,
                "Curieuse",
                1000,
                "fullStack",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: ".9em", paddingLeft: "5px", color: "#f27c6d" }}
            />
          </p>

          <p className=" mt-2 text-lg text-white">
            Je suis <strong>Tessikoue Fanny</strong>, une{" "}
            <strong>développeuse Full-Stack </strong> de 34 ans avec une
            affection particulière pour <strong>JavaScript</strong>,{" "}
            <strong>React</strong> et <strong>Node.js</strong>.
          </p>
          <p className=" mt-2 text-lg text-white">
            Mes objectif sont: apprendre, évoluer et contribuer de manière
            significative aux projets sur lesquels je travaille.
          </p>
          <div className=" flex gap-x-4 mt-10">
            <a href="#" >
              <FaGithubSquare
                color="#f27c6d"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a href="#">
              <FaLinkedin
                color="#f27c6d"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a href="#">
              <FaSquareXTwitter
                color="#f27c6d"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a
            href=""
              target="_blank"
              download="src/assets/images/CV_Tessikoue_Fanny.pdf"
              className=" bg-transparent textColor border-[1px] border-[#f27c6d] px-4 py-2 text-md font-semibold rounded-md hover:bgColor hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out cursor-pointer"
            >
              Télécharger CV
            </a>
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center gap-4 my-8">
            <Link to="/projects" className="link-main ">
              Voir mes projets
            </Link>
            <Link to="/about" className="link-main">
              à propos de moi
            </Link>
            <Link to="/contact" className="link-main">
              Me contacter
            </Link>
          </div>
        </article>
        
      </div>
    </motion.div>
  );
};

export default Main;
