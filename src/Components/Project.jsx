import React from "react";
import { motion } from "framer-motion";
import Cinesearch from "../assets/img1.png";
import Crowdfunding from "../assets/img2.1.png";

const projects = [
  {
    id: 1,
    title: "Movie Search App",
    description: "A movie search app built with React and Tailwind CSS.",
    imageUrl: Cinesearch,
    githubUrl: "https://github.com/av-vatni/CineSearch",
    liveUrl: "https://cinesearch-av.netlify.app/",
  },
  {
    id: 2,
    title: "Crowdfunding Platform in WEB3",
    description: "A crowdfunding platform built on the Ethereum blockchain.",
    imageUrl: Crowdfunding,
    githubUrl: "https://github.com/av-vatni/Crowdfunding",
    liveUrl: "",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-300 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-[#0073e6] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-[90%] md:w-[45%] lg:w-[30%] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0073e6] text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-white font-medium rounded-lg shadow-md transition ${
                      project.liveUrl
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {project.liveUrl ? "Live Demo" : "No Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
