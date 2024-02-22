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
  image: string;
  // onClick?: MouseEventHandler<HTMLDivElement>;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  description,
  image,
  title,
  // onClick,
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
              p: 4,
            }}
          >
            <div className="content-wrapp">
              <div className="image-wrapp">
                <img src={`/img/description-images/${image}`} alt={title} />
              </div>
              <div className="description-block">
                <p className="description">{description}</p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DescriptionModal;
