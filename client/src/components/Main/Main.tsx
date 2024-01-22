import {
  MainSection,
  SkillsSection,
  ProjectsSection,
  FooterSection,
} from "./components";
import "./main.scss";
import "../../styles/global.scss";

const Main: React.FC = () => {
  return (
    <div className="full-width-container">
      <MainSection />

      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Main;
