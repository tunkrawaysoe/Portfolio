const Projects = () => {
    return (
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>My Projects</h1>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3>🎬 Video Streaming App</h3>
            <p>A full-stack React + Node.js app for uploading and streaming videos.</p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3>🛒 E-commerce Platform</h3>
            <p>An online store built with MERN stack, featuring cart, payments, and admin dashboard.</p>
          </li>
          <li style={{ marginBottom: "1.5rem" }}>
            <h3>📋 Task Manager</h3>
            <p>A productivity tool for creating and organizing to-do lists with React & Firebase.</p>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Projects;
  