import React from "react";
import { FaDownload } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute w-80 h-80 bg-red-500 opacity-20 rounded-full blur-[120px] -top-10 -left-20 z-0"></div>
      <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-[120px] bottom-0 -right-20 z-0"></div>

      {/* Resume Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 border-b-2 border-red-500 inline-block pb-2">
          My Resume
        </h2>

        <p className="text-gray-400 mb-6">
          A snapshot of my work, education, skills, and experiences. Download the latest copy below.
        </p>

        <div className="flex justify-center mb-8">
          <HiDocumentText className="text-6xl text-red-500 animate-bounce-slow" />
        </div>

        {/* Download Button */}
        <a
          href="/ashvitha.pdf"
          download="Ashvitha-Resume.pdf"
          className="inline-flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105 font-medium shadow-lg"
        >
          <FaDownload /> Download Resume
        </a>

        {/* Quick Tech Summary */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-red-400">Tech Highlights:</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-300">
            {[
              "React.js",
              "Node.js",
              "Java",
              "MongoDB",
              "Python",
              "Tailwind CSS",
              "Git",
              "REST APIs",
              "Data Analysis"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-[#1c1c1c] px-3 py-1 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
