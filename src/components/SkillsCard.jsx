import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ icon, title }) => {
  return (
    <motion.article
    initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
     >
      <span className=" ">{icon}</span>
      <h4 className=" mt-6 font-bold text-center">{title} </h4>
    </motion.article>
  );
};

export default SkillsCard;
