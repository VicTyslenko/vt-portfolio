import "./skillsSection.scss";
import "../../../../styles/global.scss";
import { skills } from "./data";

const SkillsSection = () => {
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
