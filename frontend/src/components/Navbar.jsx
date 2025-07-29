import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];
  const [activeSection, setActiveSection] = useState("home");

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        return {
          id: item.toLowerCase(),
          offset: el ? el.offsetTop - 100 : 0,
        };
      });

      const scrollPos = window.scrollY;

      const current = sectionOffsets.reduce((acc, section) => {
        if (scrollPos >= section.offset) {
          return section.id;
        }
        return acc;
      }, "home");

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#121212] border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`transition ${
                  activeSection === item.toLowerCase()
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
