import Button from "../../components/button/Button";
import { motion } from "framer-motion";

import { useProjectsPage } from "./hooks";

import { DescriptionModal } from "components/modal/description-modal";
import ProjectItem from "../../components/main/components/projects-section/project-item/project-item";
import { globalAnimation } from "../../animations/animations";
import { useLocation } from "react-router-dom";
import "./projects-page.scss";

export const ProjectsPage = () => {
  const { data, handleMore, modal, handleOpenModal, selectedProject } = useProjectsPage();

  const location = useLocation();

  return (
    <div className="projects-page-container">
      <motion.h1 className="title" {...globalAnimation({ yInitial: -70, duration: 1, ease: "easeOut" })}>
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
        {data.length > 0 &&
          data.map((project, index) => (
            <ProjectItem
              key={index}
              link={project.link}
              title={project.title}
              subtitle={project.subtitle}
              imageFileName={project.imageFileName}
              description={project.description}
              pageLocation={location.pathname}
              onClick={() => handleOpenModal(project)}
            />
          ))}

        {data.length < 9 && (
          <div className="button-wrapp">
            <Button type="button" className="load-more-btn" onClick={handleMore}>
              Load more
            </Button>
          </div>
        )}
      </motion.div>

      <motion.div
        {...globalAnimation({
          yInitial: 70,
          duration: 1,
          ease: "easeOut",
        })}
      ></motion.div>

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
    </div>
  );
};
