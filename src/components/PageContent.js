import React from "react";
import { useTheme } from "../context/ThemeContext";

const PageContent = () => {
  const { theme } = useTheme();

  const pageStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return <div style={pageStyle}>이 페이지의 테마는 {theme} 모드입니다.</div>;
};

export default PageContent;
