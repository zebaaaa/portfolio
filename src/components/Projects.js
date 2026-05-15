import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import ek from "../assets/ek.jpg";
import ec from "../assets/ec.jpg";

function useCardsToShow() {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardsToShow;
}

function Projects() {
  const projects = [
    {
      title: "EKS Deployment",
      logo: ek,
      skills: ["EKS", "Terraform", "Docker", "CI/CD", "AWS"],
      desc: "Deployed a web application on AWS EKS showcasing Kubernetes orchestration, IaC with Terraform, and robust cloud deployment methodologies",
      github: "https://medium.com/@zebazk/deploying-a-web-application-on-aws-eks-1005c3ca283f",
    },
    {
      title: "ECS Deployment",
      logo: ec,
      skills: ["ECS", "Terraform", "Docker", "CI/CD", "AWS"],
      desc: "End to End deployment of a web application on AWS ECS, showcasing my expertise in container orchestration, infrastructure as code, and cloud deployment strategies.",
      github: "https://medium.com/@zebazk/deploying-a-three-tier-web-application-on-aws-ecs-eff52a4b1444",
    },
    {
      title: "Jewellery Page",
      logo: p1,
      skills: ["React", "Tailwind CSS"],
      desc: "A static jewelry showcase page highlighting my creativity through elegant layouts and handcrafted designs.",
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
      skills: ["React", "Tailwind", "Framer Motion"],
      desc: "A smooth portfolio designed to showcase my work with clarity, motion, and modern UI flair.",
      github: "",
    },
  ];

  const cardsToShow = useCardsToShow();
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, projects.length - cardsToShow);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, projects.length - cardsToShow)));
  }, [cardsToShow, projects.length]);

  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const GAP = 24;

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const totalGaps = (cardsToShow - 1) * GAP;
        const w = (containerRef.current.offsetWidth - totalGaps) / cardsToShow;
        setCardWidth(w);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cardsToShow]);

  const goToPrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goToNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) goToNext();
    else if (delta < -40) goToPrevious();
    touchStartX.current = null;
  };

  const translateX = -(currentIndex * (cardWidth + GAP));

  return (
    <div
      id="Projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-[#fffbd4]
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
        [background-size:16px_16px]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        My Projects
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div
          className="overflow-hidden mx-8 sm:mx-10 md:mx-12"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex my-6 sm:my-10"
            style={{ gap: GAP }}
            animate={{ x: translateX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: cardWidth || `calc(${100 / cardsToShow}% - ${((cardsToShow - 1) * GAP) / cardsToShow}px)` }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-2xl shadow-xl overflow-hidden bg-white h-full"
                >
                  <div className="p-3 sm:p-4">
                    <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-4 pb-4 text-black">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 text-xs px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {project.desc}
                    </p>

                    <div className="flex justify-end">
                      {project.github && (
                       <a
                         href={project.github}
                         target="_blank"
                         rel="noopener noreferrer"                       >
                       <FaGlobe className="text-xl text-gray-700 hover:text-black transition" />
                       </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white
              rounded-full p-2 sm:p-2.5 shadow-lg transition-all z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-base sm:text-xl text-gray-800" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white
              rounded-full p-2 sm:p-2.5 shadow-lg transition-all z-10"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-base sm:text-xl text-gray-800" />
          </button>
        )}

        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gray-800 w-6"
                    : "bg-gray-400 hover:bg-gray-600 w-2.5"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;