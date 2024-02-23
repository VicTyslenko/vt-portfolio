import { closeModal } from "../../reducers/modalReducer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import "./modal.scss";
// import { MouseEventHandler } from "react";

interface DescriptionModalProps {
  title: string;
  description: React.ReactNode;
  technologies: Array<string>;
  features: Array<string>;
  image: string;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  description,
  image,
  title,
  technologies,
  features,
}) => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.modal.isModalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        className="modal-wrapp"
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
              <div
                className="image-wrapp"
                style={{
                  backgroundImage: `url('/img/description-images/${image}')`,
                }}
              ></div>
              <div className="description-block">
                <h2 className="description">{description}</h2>
                <h3 className="technologies">Technologies:</h3>

                <ol className="tech-ordered-list">
                  {technologies?.map((tech, index) => (
                    <li key={index} className="tech">
                      {tech}
                    </li>
                  ))}
                </ol>
                <h3 className="features">Features:</h3>
                <ol className="features-ordered-list">
                  {features?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ol>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DescriptionModal;
