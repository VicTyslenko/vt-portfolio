import "./projectItem.scss";

interface ProjectItemProps {
  link: string;
  title: string;
  subtitle: string;
  imageFileName: string;
  pageLocation: Boolean;
  description?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  link,
  title,
  subtitle,
  imageFileName,
  description,
  pageLocation,
}) => {
  const imagePath = `/img/projects/${imageFileName}`;
  return (
    <>
      {!pageLocation ? (
        <div className="projects-item">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="projects-image-wrapp">
              {!pageLocation && (
                <div className="hidden-block">
                  <span className="overlay-text">Visit website</span>
                </div>
              )}

              <img className="projects-image" src={imagePath} alt={title} />
            </div>
          </a>

          <p className="projects-name">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      ) : (
        <div className="projects-page-item">
          <img className="projects-page-image" src={imagePath} alt={title} />
          <div className="description-block">
            <p className="subtitle">{subtitle}</p>
            <p className="projects-name">{title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectItem;
