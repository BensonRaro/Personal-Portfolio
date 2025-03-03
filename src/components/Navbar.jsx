const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "About" ? "navbarActive" : ""
            }`}
            onClick={() => setActiveSection("About")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "Resume" ? "navbarActive" : ""
            }`}
            onClick={() => setActiveSection("Resume")}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "Portfolio" ? "navbarActive" : ""
            }`}
            onClick={() => setActiveSection("Portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "Blog" ? "navbarActive" : ""
            }`}
            onClick={() => setActiveSection("Blog")}
          >
            Blog
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "Contact" ? "navbarActive" : ""
            }`}
            onClick={() => setActiveSection("Contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
