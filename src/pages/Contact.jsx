const Contact = () => {
    return (
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Contact Me</h1>
        <p>You can reach me at:</p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            Email: tunkrawaysoe2002@example.com
          </li>
          <li style={{ marginBottom: "1rem" }}>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/tun-kraway-soe-429b3a35a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View LinkedIn Profile
            </a>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            GitHub:{" "}
            <a
              href="https://github.com/tunkrawaysoe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Contact;
  