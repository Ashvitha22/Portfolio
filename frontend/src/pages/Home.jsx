
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-gray-900 text-white flex flex-col justify-center items-center px-6 md:px-20 overflow-hidden">
      
      {/* Glowing Background Blobs */}
      <div className="absolute w-72 h-72 bg-red-500 rounded-full blur-[150px] opacity-20 -top-10 -left-20 z-0"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20 bottom-10 -right-20 z-0"></div>

      {/* Main Content */}
      <div className="max-w-4xl text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-fade-in">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Ashvitha
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 animate-fade-in-delay leading-relaxed">
          A <span className="text-white font-semibold">full-stack developer</span> and{" "}
          <span className="text-white font-semibold">college student</span> passionate about crafting beautiful and functional web applications using{" "}
          <span className="text-indigo-300 font-medium">React</span>,{" "}
          <span className="text-indigo-300 font-medium">Node.js</span>, and{" "}
          <span className="text-indigo-300 font-medium">Tailwind CSS</span>.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            View Projects <FaArrowRight />
          </a>
          <a
            href="#contact"
            className="border border-red-500 text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
