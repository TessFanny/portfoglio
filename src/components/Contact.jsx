import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { SendEmail } from "./SendEmail";

const Contact = () => {
  return (
    <motion.section
      className="py-20 align-element"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle text="contact" />
      <div className="grid md:grid-cols-2 items-center gap-16  mt-5">
        <SendEmail />
        <div className=" hidden md:block">
          <img
            src="src/assets/images/contact.svg"
            className=" w-full h-64 md:h-full"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
