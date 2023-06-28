
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Experiencia de trabajo</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Prevencionista de Riesgos "
            subTitle="Contructora INICIA Spa"
            result="2020 - 2021"
            des="Mejorar la elaboración de programas de prevención y la gestión de equipos de protección personal, realizar inspecciones de seguridad e investigación de incidentes, y proporcionar capacitación y formación en seguridad laboral es crucial para garantizar un entorno de trabajo seguro. Mediante la actualización constante de conocimientos, el uso de tecnología adecuada, la participación activa de los trabajadores, la evaluación continua, la comunicación efectiva y el reconocimiento del esfuerzo, podemos fortalecer la experiencia en estos aspectos y promover una cultura de seguridad laboral duradera."
          />
          <ResumeCard
            title="Prevencionista de Riesgos"
            subTitle="Sociedad Inox Poblete Ltda"
            result="2017 - 2020"
            des=" Como prevencionista de riesgos mi labor abarca diversas responsabilidades, como la evaluación de riesgos, el desarrollo de planes de seguridad, la capacitación de trabajadores, la supervisión de actividades, la investigación de incidentes y la coordinación con otros departamentos. Estoy comprometido en garantizar un entorno laboral seguro en los proyectos . Armado y montaje de piping en Planta CCH (Becker) 2019 -2020
            Proyecto Desarme de estanque y piping en Planta de CCU , Enero 2019
            Proyecto Armado y montaje se Estanque en Planta de CCU Y ECCUSA Febrero  2018 
            Proyecto Armado y Montaje de Cúpulas en Planta de Tratamiento El Trebal, Aguas Andinas,  febrero 2017"
          />
          <ResumeCard
            title="Prevencionista de Riesgos"
            subTitle="Inmobiliaria ANYA S.A"
            result="2013 - 2016"
            des="
            Como prevencionista de riesgos, desempeño diversas funciones para garantizar la seguridad en el entorno laboral. Realizo inspecciones de seguridad periódicas para identificar posibles riesgos y asegurarme de que se cumplan los protocolos de seguridad. Además, llevo a cabo investigaciones de incidentes para determinar sus causas y proponer medidas preventivas.
            
            La capacitación y formación de los trabajadores también es una parte importante de mi labor. Organizo sesiones de capacitación en temas de seguridad laboral para concientizar sobre los riesgos y enseñar las mejores prácticas de seguridad. Esto ayuda a prevenir accidentes y lesiones.
            
            Además, participo activamente en comités de seguridad donde colaboro con otros profesionales y representantes de los trabajadores para establecer políticas y procedimientos de seguridad efectivos. Esta participación me permite contribuir a la mejora continua de la seguridad en el lugar de trabajo.."
          />
           <ResumeCard
            title="Prevencionista de Riesgos"
            subTitle="Ingen Project Ingeniería "
            result="2010 - 2012"
            des="
            Como prevencionista de riesgos, realizo inspecciones de seguridad, investigo incidentes, brindo capacitación y participo en comités de seguridad para garantizar un entorno laboral seguro.."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
