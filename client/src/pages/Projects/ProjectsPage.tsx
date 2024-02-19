import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

import { globalAnimation } from "../../animations/animations";
import "./projectsPage.scss";

const ProjectsPage = () => {
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
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-store.png"
            alt=""
          />

          <div className="description-block">
            <p className="technology">React/NodeJS/SASS</p>
            <p className="project-name">Online Apple store project</p>
          </div>
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/instagram-adaptive-project.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/medical.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/originalite.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-store.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-store.png"
            alt=""
          />
        </div>
        {/* <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-project.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-project.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-project.png"
            alt=""
          />
        </div> */}
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
