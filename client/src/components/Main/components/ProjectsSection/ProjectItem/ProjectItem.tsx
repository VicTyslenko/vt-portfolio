import { RootState } from "../../../../../store";
import { useSelector } from "react-redux";
import "./projectItem.scss";
interface ProjectItemProps {
  link: string;
  title: string;
  subtitle: string;
  imageFileName: string;

  description?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  link,
  title,
  subtitle,
  imageFileName,
  description,
}) => {
  const projectsPage = useSelector(
    (state: RootState) => state.page.isProjectsPage
  );
  //hide description block when not on the projects page
  const descriptionClass = () => {
    let descClassName = projectsPage ? "description" : "";
    return descClassName;
  };
  const imagePath = `/img/projects/${imageFileName}`;
  return (
    <div className="projects-item">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="projects-image-wrapp">
          <div className="hidden-block">
            <span className="overlay-text">Visit website</span>
          </div>
          <div className={descriptionClass()}>{description}</div>
          <img className="projects-image" src={imagePath} alt={title} />
        </div>
      </a>

      <p className="projects-name">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default ProjectItem;
