import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "🎬 My Cinema",
    description:
      "Built a cinema ticket booking system with interactive frontend for movie listings and seat selection. Developed the backend using J2EE (Servlets and JSP) to handle sessions and database operations. Included an admin panel for monitoring bookings and integrated MySQL for data storage.",
    tech: "JavaScript, J2EE, MySQL"
  },
  {
    title: "🛒 Amazon Clone",
    description:
      "Created a responsive e-commerce frontend inspired by Amazon, featuring product listings, add-to-cart functionality, and a dynamic cart page. All interactions and DOM updates were managed using vanilla JavaScript, without any frameworks.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "🌐 SocialHub",
    description:
      "Developed a real-time social media platform where users can create posts, like content, and leave comments. The frontend was built with React.js for seamless navigation, while the backend used Node.js and Express to handle authentication and CRUD operations. SQLite was used for managing posts and user data.",
    tech: "React.js, Node.js, Express, SQLite"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p className="description">{proj.description}</p>
            <p className="tech"><strong>Tech Stack:</strong> {proj.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
