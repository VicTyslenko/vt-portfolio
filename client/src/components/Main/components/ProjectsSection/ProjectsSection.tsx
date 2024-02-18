import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { projectsData } from "./projectsData";
import ProjectItem from "./ProjectItem/ProjectItem";
import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="global-container">
        <div className="title-wrapp">
          <Link className="global-link" to="/projects">
            <h1 className="projects-title">
              Latest <span>projects</span>
            </h1>
          </Link>
          <Link to="/contact">
            <Button type="button" className="contact-btn">
              Contact me
            </Button>
          </Link>
        </div>

        <div className="projects-wrapp">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              link={project.link}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
