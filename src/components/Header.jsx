import React from "react";

const Header = () => {
  const logo = "</Umesh>"
  return (
    <header className="bg-slate-800 md:p-4 flex justify-center">
      <nav className="w-10/12 p-4 flex justify-between items-center text-white md:border border-black md:bg-gray-900 rounded-xl">
        <div className="flex px-4 text-2xl font-bold items-center text-white">
          <logo> {logo} </logo>
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
