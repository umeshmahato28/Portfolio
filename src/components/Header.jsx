import React from "react";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "../utils/Theme"; // Correct import from Theme.jsx

const Header = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <header className="relative z-20 bg-[#E68369]  dark:bg-[#000000] md:p-4 flex justify-center">
      <nav className="w-10/12 p-4 flex justify-between items-center text-black dark:text-white  rounded-xl">
        <div className="flex px-4 text-2xl font-bold items-center text-black dark:text-white">
          {"</Umesh>"}
        </div>

        <div className="md:flex hidden gap-x-12 items-center text-black dark:text-white">
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Home</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">About</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Projects</p>
          <p className="hover:scale-110 duration-100 dark:hover:text-blue-500 cursor-pointer">Contact me</p>
        </div>

        <div>
          {isDarkMode ? (
            <MdLightMode onClick={toggleMode} className="text-2xl cursor-pointer" />
          ) : (
            <IoMoon onClick={toggleMode} className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
