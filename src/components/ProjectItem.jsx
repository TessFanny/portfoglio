import React from 'react'
import { motion } from 'framer-motion'
const ProjectItem = ({item}) => {
  return (
    <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'
    initial={{opacity:0, scale:0 }}
    whileInView={{opacity:1, scale:1}}
    transition={{duration: 1}}
    viewport={{once:true}}
    >
        <img src={item.img} alt="/" className=' h-full w-full rounded-xl group-hover:opacity-10' />
        <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
            <h3 className=' text-2xl font-bold text-white tracking-wider text-center'>               
                {item.title}
            </h3>
            <p className=' pb-4 pt-2 text-center text-white '>{item.description}</p>
            <div >
                <p className=' text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                <a href={item.link} target="_blank">Code</a>
                
                </p>
            </div>    
        </div>
    </motion.div>
  )
}

export default ProjectItem