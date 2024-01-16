import Button from "../../components/Button/Button";
import "./projectsPage.scss";

const ProjectsPage = () => {
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
          <Button type="button" onClick={someFn} className="project-btn">
            Project description
          </Button>
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
        <div className="project-item">
          <img
            className="project-page-image"
            src="/img/projects/apple-project.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
