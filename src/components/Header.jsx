import React, { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  const logo = "</Umesh>";

  // Dark mode should be the default, so set the initial state to `false`
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply the dark mode class to the HTML element by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle dark mode class on the root element (usually html or body)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="bg-[#DBA979] dark:bg-[#000000] md:p-4 flex justify-center">
      <nav className="w-10/12 p-4 flex justify-between items-center text-black dark:text-white   rounded-xl">
        <div className="flex px-4 text-2xl font-bold items-center text-black dark:text-white">
          {logo}
        </div>

        <div className="md:flex hidden gap-x-12 items-center text-black dark:text-white">
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Home</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">About</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Projects</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Contact me</p>
        </div>

        {/* Toggle Icon Section */}
        <div>
          {isDarkMode ? (
            <MdLightMode
              onClick={toggleMode}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <IoMoon
              onClick={toggleMode}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
