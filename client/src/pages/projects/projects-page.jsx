import Button from "../../components/button/Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "reducers/modalReducer";
import { useGetCollections } from "hooks/use-get-collections";
import PuffLoader from "react-spinners/PuffLoader";
import { DescriptionModal } from "components/modal/description-modal";
import ProjectItem from "../../components/main/components/projects-section/project-item/project-item";
import { fetchItemById } from "../../reducers/dataReducer";
import { globalAnimation } from "../../animations/animations";
import { useLocation } from "react-router-dom";
import "./projects-page.scss";

export const ProjectsPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const { collections, handleLoadMore } = useGetCollections({ collectionName: location.pathname, currentPages: 6 });

  const selectedProject = useSelector((state) => state.collections.selectedItem);

  const loader = useSelector((state) => state.collections.isLoading);
  const modal = useSelector((state) => state.modal);

  return (
    <div className="projects-page-container">
      <motion.h1 className="title" {...globalAnimation({ yInitial: -70, duration: 1, ease: "easeOut" })}>
        My <span>projects</span>
      </motion.h1>
      {loader ? (
        <div className="loader-wrapp">
          <PuffLoader size="100px" color="#fff" />
        </div>
      ) : (
        <motion.div
          className="projects-page-wrapp"
          {...globalAnimation({
            yInitial: 70,
            duration: 1,
            ease: "easeOut",
          })}
        >
          {collections.length > 0 &&
            collections.map((project, index) => (
              <ProjectItem
                key={index}
                link={project.link}
                title={project.title}
                subtitle={project.subtitle}
                imageFileName={project.imageFileName}
                description={project.description}
                pageLocation={location.pathname}
                onClick={() => {
                  dispatch(openModal());
                  dispatch(fetchItemById({ collectionName: location.pathname, _id: project._id }));
                }}
              />
            ))}
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
          {collections.length < 9 && (
            <div className="button-wrapp">
              <Button type="button" className="load-more-btn" onClick={() => handleLoadMore(3)}>
                Load more
              </Button>
            </div>
          )}
        </motion.div>
      )}

      <motion.div
        {...globalAnimation({
          yInitial: 70,
          duration: 1,
          ease: "easeOut",
        })}
      ></motion.div>
    </div>
  );
};
