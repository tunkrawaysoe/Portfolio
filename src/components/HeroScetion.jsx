import { Link } from "react-router-dom";
import "../styles/Home.css";

const HeroSection = () => (
  <div className="hero">
    <div className="hero-content">
      <h1 className="animate-text">Hi, I'm Tun Kraway Soe</h1>
      <h2 className="animate-text">A Backend Web Developer</h2>
      <p className="animate-text">
      I’m a final-year Computer Science student at the University of Computer Studies (Pathein), specializing in backend web development. I have hands-on experience building robust RESTful APIs using Node.js, Express, and MongoDB. I'm also familiar with frontend development using React.js, enabling me to create full-stack web applications with clean, responsive user interfaces. I'm passionate about writing clean, maintainable code and constantly learning to improve my skills in modern web technologies.
      </p>
      <Link to="/contact" className="contact-button animate-button">
        Contact Me
      </Link>
    </div>
  </div>
);

export default HeroSection;
