import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Prevencionista de Riesgos.", "Desarrolladora Full Stack JavaScript (React).", "Desarrolladora Front End Vue."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
       
        <h1 className="text-6xl font-bold text-white">
          Hola, Soy <span className="text-designColor capitalize">Maria Pilar Abarca A</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

     </div>
    
    </div>
  );
}

export default LeftBanner