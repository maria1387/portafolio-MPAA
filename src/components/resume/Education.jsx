
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col  gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
          <h2 className="text-3xl md:text-4xl font-bold">Educación </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Desarrolladora Full Stack JavaScript (React)"
            subTitle="Curso Desafio Latam "
            result="2022 - 2023"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Desarrolladora Front End Vue"
            subTitle="Curso Desafio Latam"
            result="2021 - 2022"
        
          />
          <ResumeCard
            title="Prenvencion de Riesgos"
            subTitle="Instituto Profesional DUOC UC "
            result="2007 - 2010"
          
          />
        </div>
      </div>
   

   
    </motion.div>
  );
}

export default Education