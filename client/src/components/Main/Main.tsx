import {
  MainSection,
  SkillsSection,
  ProjectsSection,
  FooterSection,
} from "./components";

import "./main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <MainSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Main;
