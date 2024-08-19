// Header.jsx
import React from "react";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../utils/Theme";

const Header = () => {
  const { isDarkMode, toggleMode } = useTheme();
  const logo = "</Umesh>";

  return (
    <header className="absolute w-full z-10 bg-[#DBA979] dark:bg-[#000000] md:p-4 flex justify-center shadow-2xl">
      <nav className="w-10/12 p-4 flex justify-between items-center text-black dark:text-white rounded-xl">
        <div className="font-mono flex px-4 text-2xl font-bold items-center text-black dark:text-white">
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
