

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const categories = ["Frontend", "Backend", "Tools", "All"];
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skills = [
    { name: "HTML", categories: "Frontend" },
    { name: "CSS", categories: "Frontend" },
    { name: "JS", categories: "Frontend" },
    { name: "Bootstrap", categories: "Frontend" },
    { name: "Tailwind-Css", categories: "Frontend" },
    { name: "React", categories: "Frontend" },
    { name: "Framer Motion", categories: "Frontend" },
    { name: "chart.js", categories: "Frontend" },

    { name: "Node", categories: "Backend" },
    { name: "Express", categories: "Backend" },
    { name: "MongoDB", categories: "Backend" },
    { name: "SQL", categories: "Backend" },
    { name: "Firebase", categories: "Backend" },
    { name: "postman", categories: "Backend" },

    { name: "Git/Github", categories: "Tools" },
    { name: "Docker", categories: "Tools" },
    { name: "Jenkins", categories: "Tools" },
    { name: "AWS-EC2", categories: "Tools" },
    { name: "Canva", categories: "Tools" },
    { name: "Vs Code", categories: "Tools" },
    { name: "Adobe FireFly ", categories: "Tools" },
    { name: "Chat-GPT", categories: "Tools" },
    { name: "Gemini", categories: "Tools" },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.categories === selectedCategory);

  return (
    <div
      id="Skills"
      className="
        py-20 
        px-6 sm:px-10 md:px-20 
        bg-[#fffbd4] 
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
        [background-size:16px_16px]
      "
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          My Skills
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SMOOTH ANIMATED GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredSkills.map((skill, key) => (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 140,
                    damping: 18,
                    mass: 0.4,
                  },
                }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="
                  bg-white/60 
                  py-3 
                  rounded-full 
                  shadow-md 
                  flex justify-center items-center
                "
              >
                <h3 className="font-semibold text-sm sm:text-md">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Skills;
