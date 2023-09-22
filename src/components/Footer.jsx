import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mt-auto w-full text-emerald-600 underline flex justify-center gap-5 p-3">
      <Link>Mentions Légales</Link>
      <Link>Politique de confidentialité</Link>
    </div>
  );
};

export default Footer;
