import React, { createContext, useContext, useState, useEffect } from "react";

const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Theme.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
