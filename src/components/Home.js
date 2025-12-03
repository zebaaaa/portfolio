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
          md:flex-row md:items-center
          gap-10 md:gap-16
          pt-32 
          px-6 sm:px-10 md:px-20 lg:px-28
        "
      >
        {/* LEFT — INTRO TEXT */}
        <div
          className="
            text-center md:text-left 
            max-w-xl
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#474747] leading-tight">
            <motion.span
              className="typewriter inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              ZEBA ZIKRE
            </motion.span>
          </h1>

          <p className="text-[#474747] text-xl sm:text-2xl mt-3 h-8">
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
            />
          </p>

          <p className="text-[#474747] text-lg sm:text-2xl mt-4">
            I shape raw ideas into clean, intuitive digital experiences.
          </p>

          {/* Badge */}
          <div className="mt-5 flex justify-center md:justify-start">
            <OpportunityBadge />
          </div>
        </div>

        {/* RIGHT — VIDEO */}
        <div className="w-full flex justify-center md:justify-end">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="
              rounded-xl 
              w-60 sm:w-72 md:w-[220px] lg:w-[260px]
              shadow-lg 
              transition-transform duration-300 
              hover:scale-110
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
