import {
  MainSection,
  SkillsSection,
  ProjectsSection,
  FooterSection,
} from "./components";

import { useEffect } from "react";
import "../../styles/global.scss";

const Main: React.FC = () => {

  useEffect(()=>{
console.log('hello');

  },[])
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
