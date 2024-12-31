import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      현재 테마: {theme} (클릭하여 변경)
    </button>
  );
};

export default ThemeSwitcher;
