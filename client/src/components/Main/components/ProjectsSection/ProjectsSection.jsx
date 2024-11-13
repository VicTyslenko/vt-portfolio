import { Link } from "react-router-dom";
import Button from "../../../button-component/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePathParameters from "../../../../hooks/usePathParameters";
import ProjectItem from "./ProjectItem/ProjectItem";
import PuffLoader from "react-spinners/PuffLoader";
import { dataFetch } from "../../../../reducers/dataReducer";
import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  const dispatch = useDispatch();

  const { collectionName } = usePathParameters(); // get collection name by useLocation()

  const projectsData = useSelector((state) => {
    return state.collections.data;
  });
  const loader = useSelector((state) => state.collections.isLoading);
  const projectsPage = useSelector((state) => state.page.isProjectsPage);
  useEffect(() => {
    const pageSize = 4;
    dispatch(dataFetch({ collectionName, pageSize }));
  }, [dispatch, collectionName]); //activating action load data to payload

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
            <PuffLoader size="150px" color="#fff" />
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
