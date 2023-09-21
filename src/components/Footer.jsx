import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" absolute bottom-0 left-0  w-full text-emerald-600 underline flex justify-center gap-5 ">
      <Link>Mentions Légales</Link>
      <Link>Politique de confidentialité</Link>
    </div>
  );
};

export default Footer;
