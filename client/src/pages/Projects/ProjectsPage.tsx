import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./projectsPage.scss";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const someFn = () => {};
  return (
    <div className="projects-page-container">
      <h1 className="title">My projects</h1>

      <div className="projects-page-wrapp">
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-project.png"
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
            src="/img/projects/medical-project.png"
            alt=""
          />
        </div>
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/original-shop-project.png"
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
      </div>
      <Button type="button" className="load-more-btn">
        Load more
      </Button>
    </div>
  );
};

export default ProjectsPage;
