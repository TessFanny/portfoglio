import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen bg-[#181729]">
      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w[700px] m-auto h-full w-full flex flex-col items-center mt-[8rem]">
          <h1 className="sm:text-5xl text-5xl font-bold text-[#fff]">
           
            Fanny Tessikoue
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-[#50b0e5] pt-6">
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
                "en recherche d'une opportunité",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: ".9em", paddingLeft: "5px", color: "#fff" }}
            />
          </h2>
          <div className=" mt-8 flex gap-5" >
            <a href="" target="_blank" download='src/assets/images/cv_web_dev_Tessikoue.pdf' className=" bg-transparent text-[#50b0e5] border-[1px] border-[#50b0e5] px-8 py-2 text-md font-semibold rounded-md">
             Télécharger CV
            </a>
            <a href="#contact"  className=" text-[#181729] bg-[#50b0e5] border-[1px] border-none px-8 py-2 text-md font-semibold rounded-md">
             Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
