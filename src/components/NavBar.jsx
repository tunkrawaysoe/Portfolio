import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <nav
      style={{
        backgroundColor: "#0d1117",
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#00bcd4", fontWeight: "bold", fontSize: "1.5rem" }}>
        🚀 Portfolio
      </Link>

      {isDesktop ? (
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
      ) : (
        <div>
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "20px",
                backgroundColor: "#0d1117",
                borderRadius: "8px",
                padding: "0.5rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <Link to="/projects" style={mobileLinkStyle}>Projects</Link>
              <Link to="/contact" style={mobileLinkStyle}>Contact</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "color 0.3s ease",
};

const mobileLinkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.2rem",
  marginBottom: "1rem",
  transition: "color 0.3s ease",
};

export default Navbar;
