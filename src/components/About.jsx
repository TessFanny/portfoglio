import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"
const About = () => {
const [move, setMove] = useState(false)
  return (
    <div id="about" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729]">
      <h1 className=" text-4xl font-bold text-center text-emerald-600">
        A Propos
      </h1>
      
          <motion.div className=" h-[100px] w-[100px] bg-slate-500 rounded-md" animate={{ x: move ? 200 : 0  }} onClick={()=>{setMove(!move)}}  whileHover={{ rotate: 360 }}></motion.div>
        
    </div>
  );
};

export default About;
