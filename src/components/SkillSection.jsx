import "../styles/Skill.css";

const SkillsSection = () => (
  <section className="skills">
    <h3>Skills & Technologies</h3>
    <div className="skill-groups">
      <div className="skill-category">
        <h4>Languages</h4>
        <p>C++, Java, PHP, JavaScript</p>
      </div>
      <div className="skill-category">
        <h4>Frameworks & Libraries</h4>
        <p>React.js, Node.js, Express, J2EE</p>
      </div>
      <div className="skill-category">
        <h4>Databases</h4>
        <p>MySQL, MongoDB, SQLite</p>
      </div>
      <div className="skill-category">
        <h4>Web</h4>
        <p>HTML, CSS</p>
      </div>
    </div>
</section>

);

export default SkillsSection;
