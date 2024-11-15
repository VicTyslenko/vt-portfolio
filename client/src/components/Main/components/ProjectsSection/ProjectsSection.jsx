import { Link } from "react-router-dom";
import Button from "components/button/Button";
import ProjectItem from "./ProjectItem/ProjectItem";
// import PuffLoader from "react-spinners/PuffLoader";
import { useSelector } from "react-redux";
import { projectsData } from "./data";
import "styles/global.scss";
import "./projectsSection.scss";

const ProjectsSection = () => {
  // const dispatch = useDispatch();

  // const { collectionName } = usePathParameters(); // get collection name by useLocation()

  const projectsPage = useSelector((state) => state.page.isProjectsPage);

  // useEffect(() => {
  //   const pageSize = 4;
  //   dispatch(dataFetch({ collectionName, pageSize }));
  // }, [dispatch, collectionName]); //activating action load data to payload

  return (
    <section className="projects-section">
      <div className="global-container">
        <div className="title-wrapp">
          <Link className="global-link" to="/projects">
            <h1 className="projects-title">
              Latest <span>projects</span>
            </h1>
          </Link>
          <Link to="/contacts">
            <Button type="button" className="contact-btn">
              Contact me
            </Button>
          </Link>
        </div>

        <div className="projects-wrapp">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              link={project.link}
              title={project.title}
              subtitle={project.subtitle}
              imageFileName={project.imageFileName}
              description={project.description}
              pageLocation={projectsPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
