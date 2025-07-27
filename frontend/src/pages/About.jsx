import React from "react";

const About = () => {
  return (
    <section className="bg-black text-gray-100 px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Intro */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-indigo-400">Ashvitha</h1>
          <p className="text-lg text-gray-300">Full Stack Developer</p>
          <p className="text-sm text-indigo-300">Based in India</p>
        </div>

        {/* Summary */}
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a passionate developer with hands-on experience in building responsive, user-friendly web applications. I love turning ideas into reality using clean, scalable code. My strengths lie in <strong>Java</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>modern web technologies</strong>. I’m constantly exploring new tools, patterns, and best practices in full-stack development.
        </p>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Java",
              "Spring Boot",
              "MySQL",
              "REST APIs",
              "Git",
              "OOP",
              "DSA",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Experience</h2>
          <div className="space-y-6 border-l-2 border-gray-700 pl-4">
            <div>
              <p className="font-semibold">Full Stack Java Developer Intern – EaszyByts</p>
              <p className="text-sm text-indigo-300">Feb – Mar 2025</p>
              <p className="text-sm text-gray-400">
                Developed full-stack features using Java, Spring Boot, MySQL, and React.
              </p>
            </div>
            <div>
              <p className="font-semibold">Java Developer Intern – CodSoft</p>
              <p className="text-sm text-indigo-300">June – July 2025</p>
              <p className="text-sm text-gray-400">
                Created Java tools using OOP, exception handling & Swing.
              </p>
            </div>
            <div>
              <p className="font-semibold">Data Analytics Virtual Internship – Deloitte</p>
              <p className="text-sm text-indigo-300">March 2024</p>
              <p className="text-sm text-gray-400">
                Worked with Excel & Tableau for data analysis and dashboards.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Java Programming – Infosys Springboard</li>
            <li>Frontend Web Development – Great Learning</li>
            <li>React Fundamentals – FreeCodeCamp</li>
            <li>Node.js Basics – CodeAcademy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Contact</h2>
          <p className="text-gray-300 mb-4">
            Open to new opportunities and collaborations! Feel free to reach out via email or explore my work on GitHub.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:ashviselva22@gmail.com"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
            >
              Email
            </a>
            <a
              href="https://github.com/Ashvitha22"
              className="bg-gray-800 px-4 py-2 rounded-md text-gray-200 hover:bg-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
