import { MainSection, SkillsSection, ProjectsSection, FooterSection } from "./components";

import "../../styles/global.scss";

const Main: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <MainSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Main;
