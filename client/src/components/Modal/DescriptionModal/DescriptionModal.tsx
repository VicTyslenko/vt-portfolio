import { closeModal } from "../../../reducers/modalReducer";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";

import "./description-modal.scss";

interface DescriptionModalProps {
  title: string;
  description: React.ReactNode;
  technologies: Array<string>;
  features: Array<string>;
  image: string;
  link: string;
}

//modal animation styles
const fadeInOut = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  image,
  title,
  link,
  technologies,
  features,
}) => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.modal.isModalOpen);
  const loader = useSelector((state: RootState) => state.collections.isLoading);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      disableScrollLock={true}
      className="modal-wrapp"
    >
      <motion.div
        variants={fadeInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Fade in={open}>
          <Box
            sx={{
              border: "none",
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              width: 1000,
              minHeight: 500,
            }}
          >
            <div className="content-wrapp">
              {loader ? (
                <div className="loader-wrapp">
                  <PuffLoader size="100px" color=" #047695" />
                </div>
              ) : (
                <div
                  className="image-wrapp"
                  style={{
                    backgroundImage: `url('/img/description-images/${image}')`,
                  }}
                ></div>
              )}

              <div className="description-block">
                <a
                  className="modal-link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="title">{title}</h2>
                </a>

                <h3 className="technologies">Technologies:</h3>

                <ul className="tech-ordered-list">
                  {technologies?.map((tech, index) => (
                    <li key={index} className="tech">
                      {tech}
                    </li>
                  ))}
                </ul>
                <h3 className="features">Features:</h3>
                <ol className="features-ordered-list">
                  {features?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ol>
              </div>
              <IoIosCloseCircleOutline
                className="close-icon"
                onClick={handleCloseModal}
              />
            </div>
          </Box>
        </Fade>
      </motion.div>
    </Modal>
  );
};

export default DescriptionModal;
