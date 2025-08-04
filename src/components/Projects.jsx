
import { assets, projectsData } from "../assets/assets";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4); // lg
      else if (window.innerWidth >= 768) setCardsToShow(2); // md
      else setCardsToShow(1); // mobile
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projectsData.length - cardsToShow);

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow > projectsData.length - 1 ? 0 : prev + cardsToShow
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev - cardsToShow < 0 ? maxIndex : prev - cardsToShow
    );
  };

  const visibleProjects = projectsData.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  return (
    <motion.div
     initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto py-14 px-4 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-4xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light pl-2">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Navigation buttons */}
      <div className="flex justify-end w-full mb-6">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[22%] transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.price} <span className="mx-1">|</span>{" "}
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
