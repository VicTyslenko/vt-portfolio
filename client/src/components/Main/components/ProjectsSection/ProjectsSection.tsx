import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { projectsData } from "./projectsData";
import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store";
import ProjectItem from "./ProjectItem/ProjectItem";
import { sendRequest } from "../../../../helpers";
import { API_URL } from "../../../../config/API";
import { projectsDataFetch } from "../../../../reducers/projectsReducer";
import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  const dispatch: AppDispatch = useDispatch(); //use types for dispatch

  const projects = useSelector((state: RootState) => {
    return state.projects.projectsData;
  });

  useEffect(() => {
    dispatch(projectsDataFetch());
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
