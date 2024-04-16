import "./skillsSection.scss";
import "../../../../styles/global.scss";

const SkillsSection = () => {
  const skills = [
    { name: "Javascript", experience: "4 years experience" },
    { name: "Sass", experience: "2 years experience" },
    { name: "Gulp", experience: "2 years experience" },
    { name: "React", experience: "2 years experience" },
    { name: "Node", experience: "2 years experience" },
    { name: "Git", experience: "4 years experience" },
  ];
  return (
    <section className="skills-section">
      <div className="global-container">
        <div className="skills-wrapp">
          {skills.map(({ name, experience }, index) => (
            <div key={index} className="skills-item">
              <h3 className="skill">{name}</h3>
              <p className="experience">{experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
