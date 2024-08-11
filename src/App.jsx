import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Emoji from "./components/Emoji";

const App = () => {
  const [toggleMode, setToggleMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", toggleMode);
    localStorage.setItem("theme", toggleMode ? "dark" : "light");
  }, [toggleMode]);

  return (
    <>
      <Navbar toggleMode={toggleMode} setToggleMode={setToggleMode} />
      <Hero toggleMode={toggleMode} />
      <Projects />
      <OtherProjects />
      <Skills />
      <Footer toggleMode={toggleMode} />
      <Emoji />
    </>
  );
};

export default App;
