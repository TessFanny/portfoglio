import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mt-auto  w-full textColor underline flex justify-center gap-5 p-3">
      <Link to='/mentions'>Mentions Légales</Link>
      <Link to="/confidentialite">Politique de confidentialité</Link>
    </div>
  );
};

export default Footer;
