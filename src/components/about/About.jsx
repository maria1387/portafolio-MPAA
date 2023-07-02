import React from "react";
import Title from "../layouts/Title";
import { pilar } from "../../assets/index";
const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Acerca de Mi" des="Quien soy" />

      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
          <img
            className=" md:h-32 lgl:h-72 rounded-lg object-cover bg-no-repeat bg-top"
            src={pilar}
            alt="pilar Abarca"
          />
        </div>
        <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
          <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
           
            <p className="text-xl font-title Font text-gray-400 font-medium tracking-wide leading-8">
              Soy un Prevencionista de Riesgos y Desarrolladora Full Stack
              especializado en JavaScript, con 10 años de experiencia en higiene
              y seguridad. Me destaco por mi capacidad de aprendizaje rápido y
              trabajo en equipo, me adapto fácilmente a entornos dinámicos y
              enfrento desafíos complejos con eficiencia. 
            </p>
           
            <span className="text-xl font-medium tracking-wide leading-8">Actualmente, me
              encuentro en búsqueda de nuevos desafíos profesionales en el
              sector de Tecnologías de la Información (TI)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
