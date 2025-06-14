import { closeModal } from "../../../reducers/modalReducer";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector, useDispatch } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";

import "./description-modal.scss";

const fadeInOut = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};

export const DescriptionModal = ({ image, link, technologies, features }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.isModalOpen);
  const loader = useSelector((state) => state.collections.isLoading);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal open={open} onClose={handleCloseModal} disableScrollLock={false} className="modal-wrapp">
      <motion.div variants={fadeInOut} initial="hidden" animate="visible" exit="exit">
        <Fade in={open}>
          <Box
            sx={{
              border: "none",
              position: "absolute",
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
                <h3 className="technologies">Technologies:</h3>

                <ul className="tech-ordered-list">
                  {technologies?.map((tech, index) => (
                    <li key={index} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
                <h3 className="features">Features:</h3>
                <ol className="features-ordered-list">
                  {features?.map((tech, index) => (
                    <li key={index} className="features-item">
                      {tech}
                    </li>
                  ))}
                </ol>
                <div className="modal-link-wrapp">
                  <a className="modal-link" target="blank" href={link}>
                    Visit project
                  </a>
                </div>
              </div>
              <IoIosCloseCircleOutline className="close-icon" onClick={handleCloseModal} />
            </div>
          </Box>
        </Fade>
      </motion.div>
    </Modal>
  );
};
