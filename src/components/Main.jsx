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
      className=" md:pt-[13rem] pt-[8rem] "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className=" text-5xl font-bold tracking-wider text-emerald-600">
            Tessikoue Fanny
          </h1>
          <p className=" mt-4 text-3xl text-white capitalize">
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
              style={{ fontSize: ".9em", paddingLeft: "5px", color: "#059669" }}
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
            <a href="#">
              <FaGithubSquare
                color="#059669"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a href="#">
              <FaLinkedin
                color="#059669"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a href="#">
              <FaSquareXTwitter
                color="#059669"
                size={40}
                className="hover:scale-110 duration-300"
              />
            </a>
            <a
              target="_blank"
              download="src/assets/images/cv_web_dev_Tessikoue.pdf"
              className=" bg-transparent text-emerald-600 border-[1px] border-emerald-600 px-4 py-2 text-md font-semibold rounded-md hover:bg-emerald-600 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
            >
              Télécharger CV
            </a>
          </div>
        </article>
        <article className=" hidden md:block">
          <img
            src="src/assets/images/codingSVG.svg"
            alt=""
            className="h-[30rem] mx-auto pb-28"
          />
        </article>
      </div>
    </motion.div>
  );
};

export default Main;
