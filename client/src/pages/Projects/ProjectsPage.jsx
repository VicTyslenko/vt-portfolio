import Button from "../../components/Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DescriptionModal from "../../components/Modal/DescriptionModal";
import ProjectItem from "../../components/Main/components/ProjectsSection/ProjectItem/ProjectItem";
import { openModal } from "../../reducers/modalReducer";
import { useLocation } from "react-router-dom";
import {
  projectsDataFetch,
  fetchProjectById,
} from "../../reducers/projectsReducer";
import { globalAnimation } from "../../animations/animations";
import "./projectsPage.scss";

const ProjectsPage = () => {
  const [pageSize, setPageSize] = useState(6);
  const location = useLocation();
  const dispatch = useDispatch();

  const projectsData = useSelector((state) => {
    return state.projects.projectsData;
  }); //get all projects' data

  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const modal = useSelector((state) => state.modal);
  const handleModalOpen = () => {
    dispatch(openModal());
  };
  const handleLoadMore = () => {
    setPageSize((prevPage) => prevPage + 3);
  };
  const pageLocation = useSelector((state) => state.page.isProjectsPage);

  useEffect(() => {
    const page = 1;
    const paths = location.pathname.split("/");
    const collection = paths[1];
    dispatch(projectsDataFetch({ collection, page, pageSize }));
  }, [dispatch, pageSize, location.pathname]);

  return (
    <div className="projects-page-container">
      <motion.h1
        className="title"
        {...globalAnimation({ yInitial: -70, duration: 1, ease: "easeOut" })}
      >
        My <span>projects</span>
      </motion.h1>

      <motion.div
        className="projects-page-wrapp"
        {...globalAnimation({
          yInitial: 70,
          duration: 1,
          ease: "easeOut",
        })}
      >
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            link={project.link}
            title={project.title}
            subtitle={project.subtitle}
            imageFileName={project.imageFileName}
            description={project.description}
            pageLocation={pageLocation}
            onClick={() => {
              handleModalOpen();
              dispatch(fetchProjectById(project._id));
            }}
          />
        ))}
        {modal && (
          <DescriptionModal
            description={selectedProject?.description}
            image={selectedProject?.descriptionImageName}
            title={selectedProject?.title}
            technologies={selectedProject?.technologies}
            features={selectedProject?.features}
            link={selectedProject?.link}
          />
        )}
        <div className="button-wrapp">
          <Button
            type="button"
            className="load-more-btn"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      </motion.div>

      <motion.div
        {...globalAnimation({
          yInitial: 70,
          duration: 1,
          ease: "easeOut",
        })}
      ></motion.div>
    </div>
  );
};

export default ProjectsPage;
