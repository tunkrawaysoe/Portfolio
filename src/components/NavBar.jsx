import { Link } from "react-router-dom";


const Navbar = () => {
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
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#00bcd4" }}>
  🚀 Portfolio
</div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
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

export default Navbar;
