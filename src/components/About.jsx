import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <motion.section
      className="py-20 align-element"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle text="à propos" />
      <div className=" align-element grid md:grid-cols-2 items-center gap-16">
        
        <article>
          <p className=" text-white mt-8 leading-loose">
          
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            quaerat id sint veniam non voluptate excepturi aspernatur
            dignissimos eius. Totam!
          </p>
          <p>
           
            Je suis extremement motivée et j'ai hâte de mettre à profit mon
            expérience et mes compétences au service de mes futurs
            collaborateurs
          </p>
        </article>
        <img
          src="src/assets/images/about.svg"
          className=" w-full h-64 md:h-full"
        />
      </div>
    </motion.section>
  );
};

export default About;
