import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrBottomCorner } from "react-icons/gr";
import { GrTopCorner } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <motion.section
      id="main"
      className="w-full mt-20 md:h-full h-screen flex flex-col md:flex-row md:gap-10 text-white bg-[#181729] justify-center "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" px-5  flex flex-col justify-around relative max-h-[300px]">
        <GrBottomCorner
          size={50}
          color="#fff"
          className="absolute bottom-[-6px] right-[-6px] "
        />
        <GrTopCorner
          size={50}
          color="#ccc"
          className="absolute top-[-6px] left-[-6px] "
        />
        <h1 className="text-4xl font-bold text-[#fff]">Fanny Tessikoue</h1>
        <div className=" flex justify-between md:flex-col mt-6">
          <h2 className=" font-bold mt-3 md:hidden">Accueil</h2>
          <img
            src="src/assets/images/photo_fanny.jpeg"
            alt="photo de profile fanny"
            className=" h-[125px] w-[125px] shadow-md shadow-white hidden md:block"
          />
          <a
            target="_blank"
            download="src/assets/images/cv_web_dev_Tessikoue.pdf"
            className=" bg-transparent text-emerald-600 border-[1px] border-[#50b0e5] px-8 py-2 text-md font-semibold rounded-md hover:bg-slate-500 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          >
            Télécharger CV
          </a>
        </div>
      </div>

      <div className="px-5 mx-6 md:w-[60%] flex flex-col  md:gap-20 relative ">
        <GrBottomCorner
          size={50}
          color="#fff"
          className="absolute bottom-[-6px] right-[-6px] "
        />
        <GrTopCorner
          size={50}
          color="#ccc"
          className="absolute top-[-6px] left-[-6px] "
        />
        <div className=" flex flex-col md:flex-row items-center py-5 md:justify-evenly">
          <div className=" w-full md:w-auto">
            <img
              src="src/assets/images/photo_fanny.jpeg"
              alt="photo de profile fanny"
              className=" h-[125px] w-[125px]  shadow-xl rounded-full md:hidden"
            />
            <p className=" sm:text-xl text-xl text-emerald-600 ">
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
                  "en recherche d'opportunités",
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: ".9em", paddingLeft: "5px", color: "#fff" }}
              />
            </p>
          </div>
        </div>

        <p className=" md:pl-10 pb-2 text-left md:text-center min-w-[250px] max-w-[750px] leading-normal text-lg">
          Avec une solide formation en développement web et une passion pour
          l'apprentissage continu
        </p>
        <p className=" md:pl-10 pb-2 text-left md:text-center min-w-[250px] max-w-[750px] leading-normal text-lg">
          Avec une solide formation en développement web et une passion pour
          l'apprentissage continu,
        </p>
        <div className=" flex flex-col md:flex-row justify-evenly items-center gap-4 mb-8">
          <Link
            to="/projects"
            className="bg-emerald-600 w-full md:w-[15%] md:min-w-[12rem] text-lg font-semibold rounded-md text-center py-1 hover:bg-slate-500 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out "
          >
            Voir mes projets
          </Link>
          <Link
            to="/about"
            className="bg-emerald-600 w-full md:w-[15%] md:min-w-[10rem] text-lg font-semibold rounded-md text-center py-1 hover:bg-slate-500 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          >
            Voir mon parcours
          </Link>
          <Link
            to="/contact"
            className="bg-emerald-600 w-full md:w-[15%] md:min-w-[12rem] text-lg font-semibold rounded-md text-center py-1 hover:bg-slate-500 hover:scale-110  hover:text-[#181729] duration-300 delay-200 ease-in-out"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
