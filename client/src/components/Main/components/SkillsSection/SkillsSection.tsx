import "./skillsSection.scss";
import "../../../../styles/global.scss";
const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="global-container">
        <div className="skills-wrapp">
          
          <div className="skills-item">
            <h3 className="skill">Javascript</h3>
            <p className="experience">4 years experience</p>
          </div>
          <div className="skills-item">
            <h3 className="skill">Sass</h3>
            <p className="experience">3 years experience</p>
          </div>
          <div className="skills-item">
            <h3 className="skill">Gulp</h3>
            <p className="experience">2 years experience</p>
          </div>
          <div className="skills-item">
            <h3 className="skill">React</h3>
            <p className="experience">2 years experience</p>
          </div>
          <div className="skills-item">
            <h3 className="skill">Node</h3>
            <p className="experience">2 years experience</p>
          </div>
          <div className="skills-item">
            <h3 className="skill">Git</h3>
            <p className="experience">4 years experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
