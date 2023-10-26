import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Jokes from "./Jokes";
const About = () => {
  return (
    <motion.section
      className="pt-20 align-element h-full md:h-screen"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle text="à propos" />
      <div className=" align-element grid md:grid-cols-2 items-center gap-5 justify-center text-slate-400 md:mt-20">
        <article>
          <p className="  mt-2 leading-loose">
            Je m'appelle  <span className=" font-semibold text-slate-200">Tessikoue Fanny</span> , ayant dans un premier temps acquis des connaissances en autodidacte pendant à peu près un an et demi, suite à cela j’ai récemment suivi une formation intensive de Développeur Web JavaScript à l'école O'Clock, je possède des compétences solides en développement web, et je suis convaincue de pouvoir apporter une réelle valeur ajoutée à votre équipe tout en répondant aux besoins de l’entreprise.
          </p>
          <p className="mt-2 leading-loose text-slate-200">
          Ce qui me définit le plus c'est la spontanéité, l'assiduité, la
            courtoisie, la conscience professionnelle, l'autonomie et la
            curiosité.
          </p>
          <p className="  mt-2 leading-loose">
            Je suis extremement motivée et j'ai hâte de mettre à profit mon
            expérience et mes compétences au service de mes futurs
            collaborateurs.
          </p>
        </article>

        <Jokes />
      </div>
    </motion.section>
  );
};

export default About;
