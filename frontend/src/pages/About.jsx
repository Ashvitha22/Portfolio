import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-[#0f0f0f] text-white px-6 py-20 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-red-500">Ashvitha</h1>
          <p className="text-lg text-gray-300">Full Stack Developer</p>
          
        </div>

        {/* Summary */}
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a passionate developer with hands-on experience in building responsive, user-friendly web applications. I love turning ideas into reality using clean, scalable code. My strengths lie in{" "}
          <span className="text-red-500 font-semibold">Java</span>,{" "}
          <span className="text-red-500 font-semibold">React</span>,{" "}
          <span className="text-red-500 font-semibold">Node.js</span>, and{" "}
          <span className="text-red-500 font-semibold">modern web technologies</span>. I’m constantly exploring new tools and best practices.
        </p>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Tailwind CSS", "JavaScript", "Node.js", "Java",
              "Spring Boot", "MySQL", "REST APIs", "Git", "OOP", "DSA"
            ].map((skill) => (
              <span key={skill} className="bg-[#1c1c1c] text-sm px-3 py-1 rounded-full border border-gray-700 text-gray-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Experience</h2>
          <div className="space-y-6 border-l-2 border-gray-700 pl-4">
            {[
              {
                role: "Full Stack Java Developer Intern – EaszyByts",
                date: "Feb – Mar 2025",
                desc: "Developed full-stack features using Java, Spring Boot, MySQL, and React."
              },
              {
                role: "Java Developer Intern – CodSoft",
                date: "June – July 2025",
                desc: "Created Java tools using OOP, exception handling & Swing."
              },
              {
                role: "Data Analytics Virtual Internship – Deloitte",
                date: "March 2024",
                desc: "Worked with Excel & Tableau for data analysis and dashboards."
              }
            ].map((item, idx) => (
              <div key={idx}>
                <p className="font-semibold text-pink-400">{item.role}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Java Programming – Infosys Springboard</li>
            <li>Frontend Web Development – Great Learning</li>
            <li>React Fundamentals – FreeCodeCamp</li>
            <li>Node.js Basics – CodeAcademy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Contact</h2>
          <p className="text-gray-300 mb-4">
            Open to new opportunities and collaborations. Reach out via email or check my GitHub.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:ashviselva22@gmail.com"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
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
