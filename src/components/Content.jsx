import { useState } from "react";

import About from "./About";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Content = () => {
  const [activeSection, setActiveSection] = useState("About");
  return (
    <div className="main-content">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "About" && <About />}
      {activeSection === "Resume" && <Resume />}
      {activeSection === "Portfolio" && <Portfolio />}
      {activeSection === "Blog" && <Blog />}
      {activeSection === "Contact" && <Contact />}
    </div>
  );
};

export default Content;
