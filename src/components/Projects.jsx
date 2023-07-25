import React from 'react'
import ProjectItem from './ProjectItem'
import codeImg from '../assets/code_img.jfif'
import coding from '../assets/coding.jfif'
import images from '../assets/images.jfif'
import work from '../assets/work.jfif'
const Projects = () => {
  return (
    <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729]'>
        <h1 className=' text-4xl font-bold text-center text-[#50b0e5]'>Projets</h1>
        <p className=' text-center py-8 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nisi facere dolorum cupiditate quae laudantium vel et laboriosam quidem suscipit facilis, ad, quod, totam harum? Odit eius rem autem reprehenderit!</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={work} title='Cryto app' />
            <ProjectItem img={images} title='Property app' />
            <ProjectItem img={coding} title='Netflix' />
            <ProjectItem img={codeImg} title='work' />
        </div>
    </div>
  )
}

export default Projects