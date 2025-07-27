import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Foreign Trading System",
    description:
      "A Java-based desktop app simulating international currency trading. Users can convert currency, log transactions, and view trade history.",
    link: "#",
  },
  {
    title: "Job Board App",
    description:
      "A full-stack job listing platform using React, Node.js, and Tailwind CSS. Features dynamic listings and job filtering.",
    link: "https://github.com/Ashvitha22/codsoft-webdevolpment/tree/main/Jobboard",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS. Includes routing, resume, contact form, and live project showcase.",
    link: "#",
  },
  {
    title: "Number Guessing Game",
    description:
      "A fun Java console game where users guess a random number. Features replay, scoring, and input validation.",
    link: "https://github.com/Ashvitha22/codesoft-java/tree/masters/numberguessinggame",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0f0f0f] text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-red-500 pb-2">
        🛠️ Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1a1a1a] hover:bg-[#1f1f1f] p-6 rounded-xl shadow-lg border border-gray-700 transition duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-red-400">{project.title}</h3>
              <FaCode className="text-red-500 text-xl" />
            </div>
            <p className="text-gray-400 text-sm mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:underline text-sm"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
