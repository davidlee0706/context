import React, { createContext, useState, useContext } from "react";

// 1. Context 생성
const ThemeContext = createContext();

// 2. Provider 생성
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook 생성 (편의성)
export const useTheme = () => useContext(ThemeContext);
