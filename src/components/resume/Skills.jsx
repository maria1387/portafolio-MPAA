import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col  gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-title Font flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-3 rid grid-cols-2 md:grid-cols-1">
          <ResumeCard title="HTML, Css, Sass, JavaScript" result="Lenguajes" />
          <ResumeCard title="React, Vue" result="Framework" />
          <ResumeCard
            title="Bootstrap, jQuery, Tailwind"
            result="Herramienta"
          />
          <ResumeCard title="PostgreSQL " result="SQL" />
          <ResumeCard title="Node.js, Firebase" result="Plataforma" />
          <ResumeCard title="Visual Studio Code" result="Programa" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
