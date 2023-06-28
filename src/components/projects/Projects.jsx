import React from 'react'
import Title from '../layouts/Title'

import { featuresData } from "../../data/data";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISITA ALGUNOS DE MI PORTFOLIO "
          des="Mis Proyectos"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      {featuresData.map((item) => (
          <ProjectsCard item={item} key={item.id} />
        ))}
        

        
      
        
      
      </div>
    </section>
  );
}

export default Projects