import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";



function Projects() {
  const projects = [
    {
      title: "Jewellery page",
      logo: p1 ,
      skills: ["React", "Tailwind CSS"],
      desc: "A static jewelry showcase page highlighting my creativity through elegant layouts and handcrafted designs.s",
      github: "https://zaria-jewel.netlify.app/",
    },
    {
      title: "Budget Planner",
      logo: p2,
      skills: ["React", "Tailwind", "Chart.js"],
      desc: "A dashboard where users can enter their salary, divide it, add expenses, and visualize data with charts.",
      github: "https://manny-budget-planner.netlify.app/",
    },
    {
      title: "Portfolio Website",
      logo: p3,
      skills: ["React", "Tailwind", "Framer motion"],
      desc: "A smooth portfolio designed to showcase my work with clarity, motion, and modern UI flair",
      github: "",
    },
  ];

  return (
    <div
      id="Projects"
      className="py-10 px-6 bg-[#fffbd4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <h2 className="text-3xl  font-bold text-center mb-3 mt-5 ">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-3xl shadow-xl overflow-hidden bg-white text-white relative"
          >
            {/* TOP BLUE SECTION */}
            <div className="bg-white p-6 flex flex-col items-center relative">
              {/* Logo Circle */}
              <div className="w-50 h-40 rounded-lg bg-white flex items-center justify-center shadow-md overflow-hidden mb-4">
                <img alt='project preview' src={project.logo} className="w-full h-full object-cover" />
              </div>

             
            </div>

            {/* INFO SECTION */}
            <div className="px-6 py-6 text-black font-semibold">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed">{project.desc}</p>

              {/* Footer with year + GitHub */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-sm opacity-90">{project.year}</span>

                <a href={project.github}>
                  <FaGlobe className="text-2xl opacity-90 hover:opacity-100 transition" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
