import {
  MainSection,
  SkillsSection,
  ProjectsSection,
  FooterSection,
} from "./components";
import "./main.scss";

const Main = () => {
  return (
    <div className="full-width-container">
      <MainSection />
      <hr
        style={{
          margin: "20px 0",
        }}
      />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Main;
