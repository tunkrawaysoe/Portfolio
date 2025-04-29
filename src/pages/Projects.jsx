import React from "react";
import "../styles/Projects.css"; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <ul>
        <li className="project-card">
          <h3>🎬 My Cinema</h3>
          <p>
            • Created a cinema ticket booking system with interactive frontend features, including movie listings and seat selection, using JavaScript.<br />
            • Implemented backend with J2EE (Servlets and JSP) for user sessions and database operations.<br />
            • Designed a simple admin panel to monitor sessions.<br />
            • Integrated MySQL for storing user information and booking records.
          </p>
        </li>

        <li className="project-card">
          <h3>🛒 Amazon Clone</h3>
          <p>
            • Engineered a responsive e-commerce frontend inspired by Amazon using vanilla JavaScript, HTML, and CSS.<br />
            • Implemented product listings, add-to-cart functionality, and a dynamic cart page.<br />
            • Managed all DOM updates and user interactions without frontend frameworks.
          </p>
        </li>

        <li className="project-card">
          <h3>🌐 SocialHub</h3>
          <p>
            • Developed a real-time social media platform where users can create posts, like, and comment.<br />
            • Built frontend with React.js for smooth experience.<br />
            • Implemented backend with Node.js and Express (authentication, CRUD operations).<br />
            • Used SQLite for managing users, posts, and interactions.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
