import React from "react";
import "../styles/Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>You can reach me at:</p>

      <ul>
        <li>
          Email:{" "}
          <a href="mailto:tunkrawaysoe2002@gmail.com">
            tunkrawaysoe2002@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tun-kraway-soe-429b3a35a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/tunkrawaysoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
