import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling menu visibility

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu when resizing to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu visibility
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🚀 Portfolio
      </Link>

      {isDesktop ? (
        <div className="desktop-links">
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      ) : (
        <div>
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            className="menu-button"
          >
            ☰
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/projects" className="mobile-link">Projects</Link>
              <Link to="/contact" className="mobile-link">Contact</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
