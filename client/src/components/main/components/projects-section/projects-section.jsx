import { Link } from "react-router-dom";
import Button from "components/button/Button";
import ProjectItem from "./project-item/project-item";
import PuffLoader from "react-spinners/PuffLoader";
import { useLocation } from "react-router-dom";
import { projectsData } from "shared/data/projects";
import { useSelector } from "react-redux";
import "styles/global.scss";
import "./projectsSection.scss";

const ProjectsSection = () => {
  const location = useLocation();

  const loader = useSelector((state) => state.collections.isLoading);

  // const { collections: projectsData } = useGetCollections({ currentPages: 4 });
  const filteredData = projectsData.filter((_, index) => index <= 3);

  return (
    <section className="projects-section">
      <div className="global-container">
        <div className="title-wrapp">
          <Link className="global-link" to="/projects">
            <h1 className="projects-title">
              Latest <span>projects</span>
            </h1>
          </Link>
          <Link to="/contacts">
            <Button type="button" className="contact-btn">
              Contact me
            </Button>
          </Link>
        </div>
        {loader ? (
          <div className="loader-wrapp">
            <PuffLoader size="100px" color="#fff" />
          </div>
        ) : (
          <div className="projects-wrapp">
            {filteredData.map((project, index) => (
              <ProjectItem
                key={index}
                link={project.link}
                title={project.title}
                subtitle={project.subtitle}
                imageFileName={project.imageFileName}
                pageLocation={location.pathname}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
