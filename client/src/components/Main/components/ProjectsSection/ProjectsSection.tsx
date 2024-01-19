import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="global-container">
        <h1 className="projects-title">Latest projects</h1>
        <div className="projects-wrapp">
          <div className="projects-item">
            <div className="projects-image-wrapp">
              <img
                className="projects-image"
                src="/img/projects/apple-project.png"
                alt="apple-project"
              />
            </div>
            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <div className="projects-image-wrapp">
              <img
                className="projects-image"
                src="/img/projects/instagram-adaptive-project.png"
                alt="apple-project"
              />
            </div>
            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <div className="projects-image-wrapp">
              <img
                className="projects-image"
                src="/img/projects/medical-project.png"
                alt="apple-project"
              />
            </div>
            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <div className="projects-image-wrapp">
              <img
                className="projects-image"
                src="/img/projects/original-shop-project.png"
                alt="apple-project"
              />
            </div>
            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
