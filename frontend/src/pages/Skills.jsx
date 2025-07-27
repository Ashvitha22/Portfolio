import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNode, FaPython, FaJava
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
    category: "Frontend"
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: <FaNode className="text-green-500 text-3xl" />,
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    category: "Backend"
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500 text-3xl" />,
    category: "Programming"
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-300 text-3xl" />,
    category: "Programming"
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-3xl" />,
    category: "Tools"
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center border-b-2 border-red-500 pb-2">🚀 My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 hover:border-red-500"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            <span className="text-sm text-gray-400">{skill.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
