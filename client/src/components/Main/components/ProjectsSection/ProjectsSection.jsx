import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectItem from "./ProjectItem/ProjectItem";
import { projectsDataFetch } from "../../../../reducers/projectsReducer";
import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  const dispatch = useDispatch(); //use types for dispatch

  const projectsData = useSelector((state) => {
    return state.projects.projectsData;
  });
  const projectsPage = useSelector((state) => state.page.isProjectsPage);
  useEffect(() => {
    const page = 1;
    const pageSize = 4;
    dispatch(projectsDataFetch({ page, pageSize }));
  }, [dispatch]); //activating action load data to payload

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
              subtitle={project.subtitle}
              imageFileName={project.imageFileName}
              description={project.description}
              pageLocation={projectsPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
