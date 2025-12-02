import video from "../assets/video1.mov";
import OpportunityBadge from "./OpportunityBadge";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";


function Home() {
  return (
   <div
  className="
    z-10 w-full 
    bg-[#fffbd4] 
    bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
    [background-size:16px_16px]
  "
>
  <div
    className="
      flex flex-col items-center 
      md:flex-row md:items-stretch 
      gap-8 md:gap-12 
      pt-36 px-28
    "
  >
    
    {/* LEFT — INTRO TEXT mt-20 md:mt-44*/}
    <div className=" 
     md:pl-8                  
    mr-0 md:mr-60               
    rounded-xl max-w-full md:max-w-xl 
    text-center md:text-left">
   <h1 className="text-5xl md:text-7xl font-bold text-[#474747]">
  <motion.span
    className="typewriter inline-block"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
   >
    ZEBA ZIKRE
   </motion.span>
   </h1>    
     <p className="text-[#474747] text-2xl mt-4 h-8"> 
  <RotatingText
    words={[
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Devops",
    ]}
    typingSpeed={180}
    deletingSpeed={70}
    pause={1000}
    className="text-[#474747]"
  />
</p>

      <p className="text-[#474747] text-2xl mt-4">
        I shape raw ideas into clean, intuitive digital experiences.
      </p>
      <OpportunityBadge />
      
    </div>

    {/* RIGHT — VIDEO */}
    <div className=" w-full max-w-xs md:w-auto">
    <video 
    src={video} 
    autoPlay 
    loop 
    muted 
    className="
    rounded-xl 
    w-full md:w-[200px] 
    shadow-lg 
    transition-transform duration-300 
    hover:scale-125
  "
    />
    </div>

  </div>
</div>

  );
}

export default Home;
