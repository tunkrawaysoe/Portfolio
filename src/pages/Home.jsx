import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hi, I'm Tun Kraway Soe</h1>
          <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#00bcd4" }}>
            A Web Developer & Designer
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <p>
            I create modern and responsive web applications using the latest technologies like React.js, Node.js, and more.
          </p>

          <Link
            to="/contact"
            style={{
              padding: "0.8rem 1.5rem",
              backgroundColor: "#00bcd4",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              width: "30%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <h3>Skills & Technologies</h3>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          a {
            width: 70%;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
          a {
            width: 80%;
          }
          ul {
            gap: 1rem;
          }
          li {
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      
    </>
  );
};

export default Home;
