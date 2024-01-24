import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import "../../../../styles/global.scss";
import "./projectsSection.scss";
const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="global-container">
        <div className="title-wrapp">
          <Link className="global-link" to="/projects">
            <h1 className="projects-title">Projects</h1>
          </Link>
          <Link to="/contact">
            <Button type="button" className="contact-btn">
              Contact me
            </Button>
          </Link>
        </div>

        <div className="projects-wrapp">
          <div className="projects-item">
            <a
              href="https://react-apple-store.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="projects-image-wrapp">
                <img
                  className="projects-image"
                  src="/img/projects/apple-project.png"
                  alt="apple-project"
                />
              </div>
            </a>

            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <a
              href="https://victyslenko.github.io/adaptive_insta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects-image-wrapp">
                <img
                  className="projects-image"
                  src="/img/projects/instagram-adaptive-project.png"
                  alt="apple-project"
                />
              </div>
            </a>

            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <a
              href="https://booking-medical-appointment.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects-image-wrapp">
                <img
                  className="projects-image"
                  src="/img/projects/medical-project.png"
                  alt="apple-project"
                />
              </div>
            </a>
            <p className="projects-name">Apple store</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              assumenda.
            </p>
          </div>
          <div className="projects-item">
            <a
              href="https://falling-shape-5755.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects-image-wrapp">
                <img
                  className="projects-image"
                  src="/img/projects/original-shop-project.png"
                  alt="apple-project"
                />
              </div>
            </a>
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
