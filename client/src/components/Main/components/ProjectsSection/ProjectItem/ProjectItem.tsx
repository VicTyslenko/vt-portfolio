import "./projectItem.scss";
interface ProjectItemProps {
  link: string;
  title: string;
  image: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  link,
  title,
  image,
  description,
}) => {
  return (
    <div className="projects-item">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="projects-image-wrapp">
          <div className="hidden-block">
            <span className="overlay-text">Visit website</span>
          </div>

          <img className="projects-image" src={image} alt={title} />
        </div>
      </a>

      <p className="projects-name">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProjectItem;
