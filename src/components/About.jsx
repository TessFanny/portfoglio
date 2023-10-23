import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Jokes from "./Jokes";
const About = () => {
  return (
    <motion.section
      className="pt-20 align-element h-screen "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle text="à propos" />
      <div className=" align-element grid md:grid-cols-2 items-center gap-5 justify-center text-slate-400 md:mt-20">
        <article>
          <p className="  mt-2 leading-loose">
            Je m'appelle Tessikoue Fanny, j'ai découvert le code il y a à peu
            près 3 ans et depuis lors je n'ai cessé de me former en autodidacte;
          </p>
          <p className="mt-2 leading-loose">
            A Coeur d'en faire une carrière, j'ai décidé de me reconvertir dans
            le domaine du développement web en passant par l'école O'clock;
          </p>
          <p className="  mt-2 leading-loose">
            Ce qui me définit le plus c'est la spontanéité, l'assiduité, la
            courtoisie, la conscience professionnelle, l'autonomie et la
            curiosité
          </p>
          <p className="  mt-2 leading-loose">
            Je suis extremement motivée et j'ai hâte de mettre à profit mon
            expérience et mes compétences au service de mes futurs
            collaborateurs
          </p>
        </article>

        <Jokes />
      </div>
    </motion.section>
  );
};

export default About;
