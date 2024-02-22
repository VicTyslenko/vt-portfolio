import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DescriptionModal from "../../components/Modal/Modal";
import ProjectItem from "../../components/Main/components/ProjectsSection/ProjectItem/ProjectItem";
import { openModal } from "../../reducers/modalReducer";
import {
  projectsDataFetch,
  fetchProjectById,
} from "../../reducers/projectsReducer";
import { globalAnimation } from "../../animations/animations";
import "./projectsPage.scss";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projectsData = useSelector((state) => {
    return state.projects.projectsData;
  });

  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );

  const modal = useSelector((state) => state.modal);
  const handleModalOpen = () => {
    dispatch(openModal());
  };

  useEffect(() => {
    const page = 1;
    const pageSize = 6;

    dispatch(projectsDataFetch({ page, pageSize }));
  }, [dispatch]);
  const pageLocation = useSelector((state) => state.page.isProjectsPage);
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
          />
        )}
      </motion.div>
      <motion.div
        {...globalAnimation({
          yInitial: 70,
          duration: 1,
          ease: "easeOut",
        })}
      >
        <Button type="button" className="load-more-btn">
          Load more
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
