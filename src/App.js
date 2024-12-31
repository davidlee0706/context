import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import PageContent from "./components/PageContent";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <PageContent />
    </ThemeProvider>
  );
}

export default App;
